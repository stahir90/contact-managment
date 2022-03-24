import { FC } from "react";
import { Button, Text } from "..";
import "./style.scss";

type PaginationProps = {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>;
  handlePrev?: React.MouseEventHandler<HTMLButtonElement>;
  isNextDisabled?: boolean | undefined;
  isPrevDisabled?: boolean | undefined;
  text?: string | number;
};

const Pagination: FC<PaginationProps> = ({
  handleNext,
  handlePrev,
  text,
  isNextDisabled,
  isPrevDisabled,
}) => {
  return (
    <div className="Pagination">
      <Button isDisabled={isPrevDisabled} handleOnClick={handlePrev}>
        Back
      </Button>
      <Text text={text} />
      <Button isDisabled={isNextDisabled} handleOnClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
