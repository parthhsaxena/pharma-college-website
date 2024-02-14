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
      style={{
        borderRadius: "5rem",
        padding: "0.5rem 5rem",
        boxShadow:
          +buttonSelect === id
            ? "0px 4px 10px rgba(25, 118, 210, 0.6)"
            : "none",
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default AppButtonGroup;
