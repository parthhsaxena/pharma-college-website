import React, { useState, useEffect } from "react";
import photos from "../Assets/InfraImages";

const useImageBundle = (imgType) => {
  const [bundle, setBundle] = useState([]);

  useEffect(() => {
    const filteredPhotos = photos.filter((i) => i.type === imgType);
    console.log(filteredPhotos, "xyz");
    setBundle(filteredPhotos);
  }, []);
  return bundle;
};
export default useImageBundle;
