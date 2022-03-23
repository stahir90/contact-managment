import { FC } from "react";

type TextProps = {
  text?: string | number;
};

const Text: FC<TextProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default Text;
