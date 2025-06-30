import React from "react"
import Text from "./text"
import { cx, type VariantProps } from "class-variance-authority"
import { BadgeVariants, BadgeTextVariants, BadgeSkeletonVariants } from "../cva/badge-variants"
import Skeleton from "./skeleton"

interface BagdeProps extends React.ComponentProps<"div">,
  VariantProps<typeof BadgeVariants>{
    loading?: boolean
  }

export default function Bagde ({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}:BagdeProps) {
  if(loading) {
    return <Skeleton className={cx(
      BadgeVariants({variant: "none"}),
      BadgeSkeletonVariants({size}),
      className
    )}/>
  }
  return <div className={BadgeVariants({variant, size, className})} {...props}>
    <Text variant="body-sm-bold" className={BadgeTextVariants({variant})}> 
      {children}
    </Text>
  </div>
}