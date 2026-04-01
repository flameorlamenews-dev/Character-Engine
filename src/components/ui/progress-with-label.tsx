import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface ProgressWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof Progress> {
  label?: string
  showValue?: boolean
}

const ProgressWithLabel = React.forwardRef<
  React.ComponentRef<typeof Progress>,
  ProgressWithLabelProps
>(({ className, value, label, showValue = true, ...props }, ref) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      {label && (
        <span className="text-sm font-medium text-[#c8c8d4]">{label}</span>
      )}
      {showValue && (
        <span className="text-sm text-[#6b6b80]">{value ?? 0}%</span>
      )}
    </div>
    <Progress ref={ref} value={value} className={cn(className)} {...props} />
  </div>
))
ProgressWithLabel.displayName = "ProgressWithLabel"

export { ProgressWithLabel }
