"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { DialogProps } from "@radix-ui/react-dialog";
import {
	Command as Cmdk,
	CommandEmpty as CmdkEmpty,
	CommandGroup as CmdkGroup,
	CommandInput as CmdkInput,
	CommandItem as CmdkItem,
	CommandList as CmdkList,
	CommandSeparator as CmdkSeparator
} from "cmdk";
import { Search } from "lucide-react";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import type {
	CommandEmptyProps,
	CommandEmptyRef,
	CommandGroupProps,
	CommandGroupRef,
	CommandInputProps,
	CommandInputRef,
	CommandItemProps,
	CommandItemRef,
	CommandListProps,
	CommandListRef,
	CommandProps,
	CommandRef,
	CommandSeparatorProps,
	CommandSeparatorRef,
	CommandShortcutProps
} from "./types";

const Command = forwardRef<CommandRef, CommandProps>(({ className, ...props }, ref) => (
	<Cmdk
		ref={ref}
		className={cn(
			"flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
			className
		)}
		{...props}
	/>
));

Command.displayName = Cmdk.displayName;

const CommandDialog = ({
	children,
	...props
}: DialogProps & HTMLAttributes<HTMLDivElement>) => (
	<Dialog {...props}>
		<DialogContent className="overflow-hidden p-0 shadow-2xl">
			<Cmdk className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
				{children}
			</Cmdk>
		</DialogContent>
	</Dialog>
);

const CommandInput = forwardRef<CommandInputRef, CommandInputProps>(
	({ className, ...props }, ref) => (
		<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
			<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
			<CmdkInput
				ref={ref}
				className={cn(
					"placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				{...props}
			/>
		</div>
	)
);

CommandInput.displayName = CmdkInput.displayName;

const CommandList = forwardRef<CommandListRef, CommandListProps>(
	({ className, ...props }, ref) => (
		<CmdkList
			ref={ref}
			className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
			{...props}
		/>
	)
);

CommandList.displayName = CmdkList.displayName;

const CommandEmpty = forwardRef<CommandEmptyRef, CommandEmptyProps>((props, ref) => (
	<CmdkEmpty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CmdkEmpty.displayName;

const CommandGroup = forwardRef<CommandGroupRef, CommandGroupProps>(
	({ className, ...props }, ref) => (
		<CmdkGroup
			ref={ref}
			className={cn(
				"overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
);

CommandGroup.displayName = CmdkGroup.displayName;

const CommandSeparator = forwardRef<CommandSeparatorRef, CommandSeparatorProps>(
	({ className, ...props }, ref) => (
		<CmdkSeparator
			ref={ref}
			className={cn("-mx-1 h-px bg-border", className)}
			{...props}
		/>
	)
);

CommandSeparator.displayName = CmdkSeparator.displayName;

const CommandItem = forwardRef<CommandItemRef, CommandItemProps>(
	({ className, ...props }, ref) => (
		<CmdkItem
			ref={ref}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className
			)}
			{...props}
		/>
	)
);

CommandItem.displayName = CmdkItem.displayName;

const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => (
	<span
		className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
		{...props}
	/>
);

CommandShortcut.displayName = "CommandShortcut";

export type * from "./types";
export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator
};


