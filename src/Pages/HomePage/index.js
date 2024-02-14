import React from "react";
import { Typography } from "@mui/material";
import HOME_MAIN_VIDEO from "../../Assets/HomepageMain.mp4";
const HomePage = () => {
  return (
    <>
      {/* Home page video  */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#000000cc",
        }}
      ></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        style={{ width: "100%", height: "80vh", objectFit: "cover" }}
      >
        <source src={HOME_MAIN_VIDEO} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          style={{ padding: "0 3rem", textAlign: "center" }}
        >
          Hello! welcome to this college
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
