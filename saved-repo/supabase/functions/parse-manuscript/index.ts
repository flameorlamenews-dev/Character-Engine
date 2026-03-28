import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.75.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { filePath, manuscriptId } = await req.json();

    if (!filePath || !manuscriptId) {
      throw new Error("File path and manuscript ID are required");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Process large files in background with accurate progress tracking
    const processFile = async () => {
      try {
        console.log("Starting file processing:", filePath);
        
        // Stage 1: Initialize (5%)
        await supabase
          .from("manuscripts")
          .update({ 
            content: "Downloading document...",
            processing_progress: 5
          })
          .eq("id", manuscriptId);

        const { data: fileData, error: downloadError } = await supabase.storage
          .from("manuscripts")
          .download(filePath);

        if (downloadError) {
          console.error("Download error:", downloadError);
          throw downloadError;
        }

        console.log("File downloaded, size:", fileData.size, "bytes");
        
        // Stage 2: Downloaded (20%)
        await supabase
          .from("manuscripts")
          .update({ 
            content: "Extracting text...",
            processing_progress: 20 
          })
          .eq("id", manuscriptId);

        const arrayBuffer = await fileData.arrayBuffer();
        const fileExtension = filePath.split('.').pop()?.toLowerCase();
        console.log("Processing file type:", fileExtension);
        
        let extractedText = "";
        
        // Stage 3: Processing (40% - 80% depending on file type)
        if (fileExtension === 'docx') {
          await supabase.from("manuscripts").update({ processing_progress: 40 }).eq("id", manuscriptId);
          
          const mammoth = await import("https://esm.sh/mammoth@1.8.0");
          
          // Single efficient extraction with all content
          const result = await mammoth.convertToHtml({ arrayBuffer });
          
          await supabase.from("manuscripts").update({ processing_progress: 70 }).eq("id", manuscriptId);
          
          // Convert HTML to text while preserving paragraphs
          extractedText = result.value
            .replace(/<\/p>/g, '\n\n')  // Convert closing paragraphs to double newlines
            .replace(/<br\s*\/?>/g, '\n')  // Convert line breaks to single newlines
            .replace(/<[^>]*>/g, '')  // Strip remaining HTML tags
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .trim();
          
          console.log("DOCX extracted, length:", extractedText.length);
          
        } else if (fileExtension === 'txt') {
          await supabase.from("manuscripts").update({ processing_progress: 40 }).eq("id", manuscriptId);
          
          const decoder = new TextDecoder("utf-8");
          extractedText = decoder.decode(arrayBuffer);
          
          await supabase.from("manuscripts").update({ processing_progress: 70 }).eq("id", manuscriptId);
          console.log("Text file decoded, length:", extractedText.length);
          
        } else if (fileExtension === 'pdf') {
          await supabase.from("manuscripts").update({ processing_progress: 40 }).eq("id", manuscriptId);
          
          try {
            const pdfParse = (await import("https://esm.sh/pdf-parse@1.1.1")).default;
            const uint8Array = new Uint8Array(arrayBuffer);
            
            await supabase.from("manuscripts").update({ processing_progress: 60 }).eq("id", manuscriptId);
            
            const pdfData = await pdfParse(uint8Array);
            extractedText = pdfData.text;
            
            await supabase.from("manuscripts").update({ processing_progress: 70 }).eq("id", manuscriptId);
            console.log("PDF parsed successfully. Pages:", pdfData.numpages, "Text length:", extractedText.length);
          } catch (pdfError) {
            console.error("PDF parsing failed:", pdfError);
            extractedText = "PDF parsing failed. Please try converting to .docx format.";
          }
        } else {
          await supabase.from("manuscripts").update({ processing_progress: 40 }).eq("id", manuscriptId);
          
          const decoder = new TextDecoder("utf-8");
          extractedText = decoder.decode(arrayBuffer);
          
          await supabase.from("manuscripts").update({ processing_progress: 70 }).eq("id", manuscriptId);
          console.log("Generic text decode, length:", extractedText.length);
        }
        
        // Stage 4: Finalizing (90%)
        await supabase.from("manuscripts").update({ processing_progress: 90 }).eq("id", manuscriptId);
        
        // Preserve paragraph structure
        extractedText = extractedText
          .replace(/\r\n/g, "\n")
          .replace(/\r/g, "\n")
          .replace(/\n{4,}/g, "\n\n\n")  // Limit to max 3 newlines
          .trim();

        const wordCount = extractedText.split(/\s+/).filter(w => w.length > 0).length;
        console.log("Final extracted text - Characters:", extractedText.length, "Words:", wordCount);

        // Stage 5: Complete (100%)
        const { error: updateError } = await supabase
          .from("manuscripts")
          .update({ 
            content: extractedText,
            processing_progress: 100
          })
          .eq("id", manuscriptId);

        if (updateError) {
          console.error("Update error:", updateError);
          throw updateError;
        }

        console.log("Manuscript updated successfully");
      } catch (parseError) {
        console.error("Text extraction failed:", parseError);
        
        await supabase
          .from("manuscripts")
          .update({ 
            content: `Text extraction failed: ${parseError instanceof Error ? parseError.message : 'Unknown error'}. Please try a different file format.`,
            processing_progress: 0
          })
          .eq("id", manuscriptId);
      }
    };

    // Start background processing using EdgeRuntime.waitUntil for reliable execution
    // @ts-ignore
    if (typeof EdgeRuntime !== "undefined" && (EdgeRuntime as any)?.waitUntil) {
      // @ts-ignore
      (EdgeRuntime as any).waitUntil(processFile());
    } else {
      processFile();
    }

    // Return immediate response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Text extraction started. This may take several minutes for large documents."
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in parse-manuscript:", error);
    const errorMessage = error instanceof Error ? error.message : "Parsing failed";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
