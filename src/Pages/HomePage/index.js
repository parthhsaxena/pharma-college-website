import React, { useState } from "react";
import { Typography, ImageList, ImageListItem } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import HOME_MAIN_VIDEO from "../../Assets/HomepageMain.mp4";
import AppButtonGroup from "../../Utilities/AppButtonGroup";
import ImageStyles from "../../Utilities/ImageStyles";
const HomePage = () => {
  const [buttonSelect, setButtonSelect] = useState(1);
  const classes = ImageStyles();

  const photos = [
    {
      id: 1,
      src: "https://st2.depositphotos.com/1006611/8886/i/450/depositphotos_88860222-stock-photo-indian-college-student.jpg",
      title: "Photo 1",
    },
    {
      id: 2,
      src: "https://st2.depositphotos.com/5653638/42141/i/450/depositphotos_421417402-stock-photo-young-asian-indian-college-students.jpg",
      title: "Photo 2",
    },
    {
      id: 3,
      src: "https://img.freepik.com/premium-photo/young-asian-indian-college-students-reading-books-studying-laptop-preparing-exam-working-group-project-while-sitting-grass-staircase-steps-college-campus_466689-8150.jpg",
      title: "Photo 3",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/5147364/pexels-photo-5147364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Photo 4",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO_79iFJTE5j-PAkiGVNouYDOOEXTCa4Nig&usqp=CAU",
      title: "Photo 5",
    },
  ];

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
        {/* Images of infrastructuure */}
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            className={classes.imageList}
            cols={3}
            gap={50}
          >
            {photos.map((photo) => (
              <ImageListItem key={photo.id}>
                <img
                  className={classes.image}
                  src={photo.src}
                  alt={`Photo ${photo.id}`}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
};

export default HomePage;
