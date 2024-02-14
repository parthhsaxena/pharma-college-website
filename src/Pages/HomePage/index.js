import React, { useState } from "react";
import { Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import HOME_MAIN_VIDEO from "../../Assets/HomepageMain.mp4";
import AppButtonGroup from "../../Utilities/AppButtonGroup";
const HomePage = () => {
  const [buttonSelect, setButtonSelect] = useState(1);

  return (
    <>
      {/* Home page video  */}
      <div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "80vh",
            background: "#000000cc",
          }}
        ></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
        >
          <source src={HOME_MAIN_VIDEO} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "80vh",
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
      </div>
      {/* Home Page Content */}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            margin: "1rem",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              height: "6px",
              width: "150px",
              backgroundColor: "#1976d2",
              border: "none",
              borderRadius: "100px",
              margin: "auto",
            }}
          ></div>

          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              padding: "1rem",
              justifySelf: "start",
              // fontWeight: "bold",
            }}
          >
            INFRASTRUCTURE
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyItems: "center",
            width: "100vw",
            overflowX: "auto",
          }}
        >
          <style>
            {`
          ::-webkit-scrollbar {
            display: none;
          }
          * {
            -ms-overflow-style: none;
          }
        `}
          </style>

          <ButtonGroup
            size="medium"
            aria-label="Medium button group"
            style={{
              margin: "auto",
              background: "lightgray",
              borderRadius: "5rem",
              padding: "1px",
            }}
          >
            <AppButtonGroup
              id={1}
              label="Campus"
              buttonSelect={buttonSelect}
              setButtonSelect={setButtonSelect}
            />
            <AppButtonGroup
              id={2}
              label="Library"
              buttonSelect={buttonSelect}
              setButtonSelect={setButtonSelect}
            />
            <AppButtonGroup
              id={3}
              label="Classrooms"
              buttonSelect={buttonSelect}
              setButtonSelect={setButtonSelect}
            />
          </ButtonGroup>
        </div>
        {/* sdjhaksdjahg */}
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
