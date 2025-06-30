import type React from "react";

import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import Icon from "../componentes/icon"

import { type VariantProps } from "class-variance-authority";
import { inputCheckboxIconVariants, inputCheckboxVariants, inputCheckboxWrapperVariants } from "../cva/input-checkbox-variants";
import Skeleton from "./skeleton";

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean
  }

export default function inputCheckbox({
  size,
  variant,  
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps){
  if (loading){
    return <Skeleton rounded ="sm" className={inputCheckboxVariants({variant: "none", size})}/>
  }

  return <label className={inputCheckboxWrapperVariants({className})}>
      <input type="checkbox" className={inputCheckboxVariants({variant, size, disabled})} {...props} />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({size})}/>
    </label>
}
