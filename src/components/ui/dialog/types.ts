import type { Content, Description, Overlay, Title } from "@radix-ui/react-dialog";
import type { ElementRef } from "react";

export type TOverlay = typeof Overlay;
export type DialogOverlayRef = ElementRef<TOverlay>;

export type TContent = typeof Content;
export type DialogContentRef = ElementRef<TContent>;

export type TTitle = typeof Title;
export type DialogTitleRef = ElementRef<TTitle>;

export type TDescription = typeof Description;
export type DialogDescriptionRef = ElementRef<TDescription>;
