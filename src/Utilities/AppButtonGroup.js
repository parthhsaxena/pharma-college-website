// CustomButton.js

import React from "react";
import { Button } from "@mui/material";

const AppButtonGroup = ({
  id,
  label,
  buttonSelect,
  setButtonSelect,
  ...props
}) => {
  return (
    <Button
      variant={+buttonSelect === id ? "contained" : "text"}
      color={+buttonSelect === id ? "primary" : "inherit"}
      id={id}
      onClick={(e) => {
        setButtonSelect(e.target.id);
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default AppButtonGroup;
