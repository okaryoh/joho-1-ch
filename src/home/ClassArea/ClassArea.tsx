import { ReactNode } from "react";
import { Paragraph } from "../../stories/Common/Paragraph/Paragraph";
import { Label } from "../../stories/Common/Label/Label";

export interface ClassAreaProps {
}

export const ClassArea = ({ }: ClassAreaProps) => {
  return (
    <>
      <Paragraph text={"授業資料"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
    </>
  );
};
