import React from "react";
import {cx} from "class-variance-authority"

import { type VariantProps } from "class-variance-authority"
import { inputTextVariants } from "../cva/input-text-variants";
import { textVariants } from "../cva/text-variants";

interface InputTextProps extends VariantProps<typeof inputTextVariants>, 
Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText ({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return <input
    className={cx(inputTextVariants({size, disabled}), textVariants(), className)} {...props}
  />
}