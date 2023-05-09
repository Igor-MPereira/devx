import type { Command as CommandPrimitive } from "cmdk";
import type { ElementRef, ComponentPropsWithoutRef, HTMLAttributes } from "react";


export type TCommand = typeof CommandPrimitive;

export type CommandRef = ElementRef<TCommand>;
export type CommandProps = ComponentPropsWithoutRef<TCommand>;

export type CommandInputRef = ElementRef<TCommand["Input"]>;
export type CommandInputProps = ComponentPropsWithoutRef<TCommand["Input"]>;

export type CommandListRef = ElementRef<TCommand["List"]>;
export type CommandListProps = ComponentPropsWithoutRef<TCommand["List"]>;

export type CommandEmptyRef = ElementRef<TCommand["Empty"]>;
export type CommandEmptyProps = ComponentPropsWithoutRef<TCommand["Empty"]>;

export type CommandGroupRef = ElementRef<TCommand["Group"]>;
export type CommandGroupProps = ComponentPropsWithoutRef<TCommand["Group"]>;

export type CommandSeparatorRef = ElementRef<TCommand["Separator"]>;
export type CommandSeparatorProps = ComponentPropsWithoutRef<TCommand["Separator"]>;

export type CommandItemRef = ElementRef<TCommand["Item"]>;
export type CommandItemProps = ComponentPropsWithoutRef<TCommand["Item"]>;

export type CommandShortcutProps = HTMLAttributes<HTMLSpanElement>;
