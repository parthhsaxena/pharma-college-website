import React from "react";

const HomePage = React.lazy(() => import("./HomePage"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const AdmissionPage = React.lazy(() => import("./AdmissionPage"));
const ContactPage = React.lazy(() => import("./ContactPage"));

export default {
  HOME_PAGE: <HomePage />,
  ABOUT_PAGE: <AboutPage />,
  ADMISSION_PAGE: <AdmissionPage />,
  CONTACT_PAGE: <ContactPage />,
};
