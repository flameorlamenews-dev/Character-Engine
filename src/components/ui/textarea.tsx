import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-[#2a2a4a] bg-[#141428] px-3 py-2 text-sm text-[#c8c8d4] shadow-sm placeholder:text-[#6b6b80] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#aa3bff] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
