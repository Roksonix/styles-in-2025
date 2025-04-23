import React from "react"
import { Command } from "cmdk"
import { cn } from "../../lib/utils"
import { SearchIcon } from "lucide-react"

interface CommandInputProps extends Omit<React.ComponentProps<typeof Command.Input>, 'placeholder'> {
  placeholder?: React.ReactNode;
}

const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, placeholder, value, ...props }, ref) => {
    return (
      <div className="relative flex items-center px-[15px] h-10 box-border rounded-[3px] bg-white" data-cmdk-input-wrapper="">
        <SearchIcon className="mr-3 h-6 w-6 shrink-0 text-carbon-600" />
        <div className="absolute ml-9 pointer-events-none font-roboto text-[14px] text-carbon-650">
          {!value && placeholder}
        </div>
        <Command.Input
          ref={ref}
          value={value}
          className={cn(
            "resize-none w-full border-none text-carbon-700 font-roboto text-[14px] leading-4 pr-4 m-0 !bg-transparent outline-none",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

CommandInput.displayName = "CommandInput"

export { CommandInput } 