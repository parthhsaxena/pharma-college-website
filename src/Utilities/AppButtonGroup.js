import React from "react";
import { Button } from "@mui/material";

const AppButtonGroup = ({
  id,
  label,
  buttonSelect,
  setButtonSelect,
  setImgBundle,
  imgBundle,
  campusPhotos = [],
  libraryPhotos = [],
  ...props
}) => {
  return (
    <Button
      variant={+buttonSelect === id ? "contained" : "text"}
      color={+buttonSelect === id ? "primary" : "inherit"}
      id={id}
      onClick={(e) => {
        console.log(e);
        setButtonSelect(e.target.id);
        // setImgBundle(libraryPhotos);
        if (+e.target.id === 1) {
          setImgBundle(campusPhotos);
        } else if (+e.target.id === 2) {
          setImgBundle(libraryPhotos);
        }
        // if ((buttonSelect = 3)) {
        //   setImgBundle(libraryPhotos);
        // } else {
        //   setImgBundle("25");
        // }
        // setImgBundle((id = 2 ? libraryPhotos : []));
      }}
      style={{
        borderRadius: "5rem",
        padding: "0.5rem 5rem",
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default AppButtonGroup;
