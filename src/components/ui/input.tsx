import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-[#2a2a4a] bg-[#141428] px-3 py-1 text-sm text-[#c8c8d4] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#c8c8d4] placeholder:text-[#6b6b80] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#aa3bff] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
