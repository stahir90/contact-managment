import { FC } from "react";

type InputProps = {
  type?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

const Input: FC<InputProps> = ({ type, value, onChange }) => {
  return <input value={value} type={type} onChange={onChange} />;
};

export default Input;
