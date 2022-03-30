import React, { ReactNode } from "react";
import { FlipperType } from "../..";
import * as C from "./styles";

const Flipper: React.FC<FlipperType> = ({
  children,
  back,
  rounded = false,
}) => {
  return (
    <C.FlipperContainer rounded={rounded}>
      <C.FlipperContent>
        <C.FlipperFront>{children}</C.FlipperFront>
        <C.FlipperBack>{back}</C.FlipperBack>
      </C.FlipperContent>
    </C.FlipperContainer>
  );
};

export default Flipper;
