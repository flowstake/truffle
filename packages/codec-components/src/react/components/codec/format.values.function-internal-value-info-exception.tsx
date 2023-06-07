import React from "react";
import type { Format } from "@truffle/codec";
import { createCodecComponent } from "../../utils/create-codec-component";

export const { FunctionInternalValueInfoException } = createCodecComponent(
  "FunctionInternalValueInfoException",
  (data: Format.Values.FunctionInternalValueInfoException) => (
    // TODO
    <span>{data.constructorProgramCounter.toString()}</span>
  )
);
