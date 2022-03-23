import { FC } from "react";
import { Form, Col } from "react-bootstrap";

type FormInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  md?: number;
  xs?: number;
};

const FormInput: FC<FormInputProps> = ({
  label,
  placeholder,
  onChange,
  md,
  xs,
}) => (
  <Col xs={xs} md={md}>
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control onChange={onChange} type="text" placeholder={placeholder} />
    </Form.Group>
  </Col>
);

export default FormInput;
