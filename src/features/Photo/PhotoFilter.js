import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { options } from "../../global/constant";
import { selectCurFilter, setFilter } from "./photoSlice";

const PhotoFilter = () => {
  const dispatch = useDispatch();

  const curFilter = useSelector(selectCurFilter());

  const chooseFilter = (option) => {
    dispatch(setFilter(option));
  };

  return (
    <div className="PhotoFilter">
      <Button
        outline
        color="primary"
        active={curFilter === "all" ? true : false}
        onClick={() => chooseFilter("all")}
      >
        All
      </Button>
      {options.map((option) => (
        <Button
          outline
          color="primary"
          active={curFilter === option.value ? true : false}
          onClick={() => chooseFilter(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default PhotoFilter;
