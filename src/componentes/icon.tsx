import React from "react";
import { type VariantProps } from "class-variance-authority"
import { iconVariants } from "../cva/icon-variants";

interface iconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants>  {
  svg: React.FC<React.ComponentProps<"svg">>;
}


export default function Icon({svg: SvgComponent, animate, className,  ...props}:iconProps){
  return <SvgComponent className={iconVariants({animate, className})} {...props} />
}

