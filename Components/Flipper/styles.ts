import { styled } from "@stitches/react";

export const FlipperContent = styled("div", {
  position: "relative",
  width: "14rem",
  minHeight: "20rem",
  transition: "transform 0.2s",
  transformStyle: "preserve-3d",
});

export const FlipperContainer = styled("div", {
  [`&:hover ${FlipperContent}`]: {
    transform: "rotateY(180deg)",
  },
  variants: {
    rounded: {
      true: {
        borderRadius: "0.5rem",
      },
    },
  },
});

export const FlipperFront = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
});

export const FlipperBack = styled("div", {
  position: "absolute",
  width: "100%",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
  height: "100%",
});
