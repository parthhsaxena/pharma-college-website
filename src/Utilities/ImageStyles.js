import { makeStyles } from "@mui/styles";

const ImageStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1,
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imageList: {
      width: "70%", // Adjust the width as needed
      height: "70%", // Adjust the height as needed
      // [theme.breakpoints.down("sm")]: {
      //   width: "90%", // Adjust for smaller screens
      //   height: "90%", // Adjust for smaller screens
      // },
      padding: "3%",
    },
    image: {
      objectFit: "cover",
      borderRadius: "4px",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.12)",
        boxShadow: "0px 4px 10px  #7393B3",
      },
    },
  };
});

export default ImageStyles;
