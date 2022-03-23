import { FC } from "react";
import { Button } from "../../components";
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";
import "./style.scss";

type SearchPanelProps = {
  btnText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchPanel: FC<SearchPanelProps> = ({
  btnText,
  onChange,
  handleOnClick,
}) => {
  return (
    <Row className="search-panel">
      <Col xs={12} sm={10} md={10}>
        <InputGroup>
          <FormControl
            onChange={onChange}
            placeholder="Search User"
            aria-label="search"
          />
        </InputGroup>
      </Col>

      <Col xs={8} sm={2} md={2}>
        <Button handleOnClick={handleOnClick} variant="outline-success">
          {" "}
          {btnText}{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default SearchPanel;
