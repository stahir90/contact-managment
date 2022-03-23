import { FC, useState } from "react";
import {
  Modal,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { Button, FormInput, RadioInput } from "../../components";
import { ContactProps } from "../../shared/globalTypes";

type ContactModalProps = {
  contact: ContactProps;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onSave: (item: ContactProps) => void;
};

const ContactModal: FC<ContactModalProps> = ({ contact, onCancel, onSave }) => {
  const [contactUpdates, setContactUpdates] = useState<ContactProps>(contact);

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>
          Edit Contact {contact?.first_name} {contact?.last_name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="contact-modal-form">
          <Row>
            <FormInput
              md={6}
              onChange={(e) =>
                setContactUpdates({
                  ...contactUpdates,
                  first_name: e.target.value,
                })
              }
              label="First Name:"
              placeholder="Enter Name Here"
            />
            <FormInput
              md={6}
              onChange={(e) =>
                setContactUpdates({
                  ...contactUpdates,
                  last_name: e.target.value,
                })
              }
              label="Last Name:"
              placeholder="Enter Last Name"
            />
          </Row>
          <Row>
            <Form.Label>Gender:</Form.Label>
            <Row>
              <RadioInput
                onChange={(e) =>
                  setContactUpdates({
                    ...contactUpdates,
                    gender: e.target.id,
                  })
                }
                type="radio"
                md={4}
                label="Male"
                id={1}
                name={"groupOptions"}
              />
              <RadioInput
                onChange={(e) =>
                  setContactUpdates({
                    ...contactUpdates,
                    gender: e.target.id,
                  })
                }
                type="radio"
                md={4}
                label="Female"
                id={1}
                name={"groupOptions"}
              />
              <RadioInput
                onChange={(e) =>
                  setContactUpdates({
                    ...contactUpdates,
                    gender: e.target.id,
                  })
                }
                type="radio"
                md={4}
                label="Other"
                id={1}
                name={"groupOptions"}
              />
            </Row>
            <Row>
              <FormInput
                md={12}
                label="Email:"
                placeholder="starks@winterfell.com"
              />
            </Row>
            <Row>
              <Col md={6}>
                <Form.Label>Department:</Form.Label>
                <DropdownButton
                  variant="outline-secondary"
                  title={contactUpdates.department || "Select Department"}
                  id="input-group-dropdown-1"
                  onSelect={(item) => {
                    setContactUpdates({
                      ...contactUpdates,
                      department: item,
                    });
                  }}
                >
                  <Dropdown.Item eventKey="sales">Sales</Dropdown.Item>
                  <Dropdown.Item eventKey="marketing">Marketing</Dropdown.Item>
                  <Dropdown.Item eventKey="it">IT</Dropdown.Item>
                  <Dropdown.Item eventKey="support">Support</Dropdown.Item>
                </DropdownButton>
              </Col>
              <FormInput
                onChange={(e) =>
                  setContactUpdates({
                    ...contactUpdates,
                    contribution: e.target.value,
                  })
                }
                md={6}
                label="Contribution:"
                placeholder="$4.0"
              />
            </Row>
            <Row>
              <RadioInput
                onChange={(e) =>
                  setContactUpdates({
                    ...contactUpdates,
                    active: e.target.checked,
                  })
                }
                type="checkbox"
                md={4}
                label="Is Active"
                id={1}
                name={"groupOptions"}
              />
            </Row>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button handleOnClick={onCancel} variant="outline-secondary">
          Close
        </Button>
        <Button
          type="submit"
          handleOnClick={() => onSave(contactUpdates)}
          variant="success"
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default ContactModal;
