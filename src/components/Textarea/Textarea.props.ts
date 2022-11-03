import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface TextareaProps  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    placeholder: string;
    variant?: "large" | "medium" | "small";
    error?: string;
    label: string;
    value: string;
    handlerVlue: (prop: string, value: any) => void;
    name: string;
    touched: unknown;
}