import { Michroma, Manrope } from "next/font/google";

export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});