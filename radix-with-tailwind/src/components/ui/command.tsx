import * as React from "react"
import { Command as CommandPrimitive, CommandDialog } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "../../lib/utils"

const Command = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive
    data-slot="command"
    className={cn(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    )}
    {...props}
  />
);

const CommandInput = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
  </div>
);

const CommandList = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "h-[var(--cmdk-list-height)] overflow-y-auto overflow-x-hidden",
        className
      )}
      {...props}
    />
);

const CommandEmpty = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    data-slot="command-empty"
    className={cn("py-6 text-center text-sm", className)}
    {...props}
    />
);

const CommandGroup = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    data-slot="command-group"
    className={cn(
        "overflow-hidden p-1 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:pt-[5px] [&_[cmdk-group-heading]]:pb-[15px] [&_[cmdk-group-heading]]:font-roboto [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:leading-4 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-[rgb(9,37,64)]",
        className
      )}
      {...props}
    />
);

const CommandSeparator = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    data-slot="command-separator"
    className={cn("bg-border -mx-1 h-px", className)}
    {...props}
    />
);

const CommandItem = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    data-slot="command-item"
    className={cn(
        "px-4 py-2 w-full h-12 flex flex-row items-center box-border cursor-pointer data-[selected=true]:bg-carbon-25 select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
);

const CommandShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    data-slot="command-shortcut"
    className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
);

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
