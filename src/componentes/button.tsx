import React from "react"
import Text from "./text"
import Icon from "./icon"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants, buttonIconVariant, buttonTextVariant } from "../cva/button-variants"

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled" >,
  VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
  }

export default function Button ({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}:ButtonProps) {
  return <button className={buttonVariants({variant, size, className, disabled})} {...props}>
    {IconComponent && (
      <Icon
        svg={IconComponent} 
        className={buttonIconVariant({variant, size})}
      />
    )}
    <Text variant="body-md-bold" className={buttonTextVariant({variant})}>
      {children}
    </Text>
    </button>
}

