import { cva } from "class-variance-authority";


export const cardVariants = cva(
  `
    rounded-lg border border-solid border-gray-200
    bg-white shadow-sd
  `,
  {
    variants: {
      size: {
        none: "",
        md: "p-5"
      }
    },
    defaultVariants: {
      size: "none"
    }
  }
); 

