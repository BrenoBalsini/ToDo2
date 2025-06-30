import React from "react";
import Icon from "./icon"
import { type VariantProps } from "class-variance-authority"
import { buttonIconVariant, buttonIconIconVariant } from "../cva/button-icon-variants"
import Skeleton from "./skeleton";

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariant>,
  Omit<React.ComponentProps<"button">, "size" | "disabled" > {
    icon: React.ComponentProps<typeof Icon>["svg"];
    loading?: boolean;
  }

export default function ButtonIcon ({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}:ButtonIconProps ) {
  if(loading) {
    return <Skeleton 
      rounded="sm"
      className={buttonIconVariant({
        variant: "none",
        size,
        className,
      })}
    />
  }

  return (
  <button 
    className={buttonIconVariant({
      variant,
      size,
      disabled,
      className
    })}
    {...props}
  >
    <Icon svg={icon} className={buttonIconIconVariant({variant, size})}></Icon>
  </button>
)}