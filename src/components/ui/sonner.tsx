import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#141428] group-[.toaster]:text-[#c8c8d4] group-[.toaster]:border-[#2a2a4a] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#6b6b80]",
          actionButton:
            "group-[.toast]:bg-[#aa3bff] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#1a1a2e] group-[.toast]:text-[#6b6b80]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
