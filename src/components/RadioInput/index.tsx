import { FC } from "react";
import { Form, Col } from "react-bootstrap";

type RadioInputProps = {
  name?: string;
  label?: string;
  id?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  md?: number;
  xs?: number;
  type: "radio" | "checkbox";
};

const RadioInput: FC<RadioInputProps> = ({
  name,
  label,
  type,
  onChange,
  id,
  md,
  xs,
}) => (
  <Col xs={xs} md={md}>
    <Form.Check
      onChange={onChange}
      name={name}
      type={type}
      id={`default-radio-${id}`}
      label={label}
    />
  </Col>
);

export default RadioInput;
