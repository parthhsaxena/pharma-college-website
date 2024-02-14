import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Pages from "./Pages";
import { LinearProgress } from "@mui/material";
import Header from "./Components/Header";
import InformationModal from "./Components/InformationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsModalOpen(true);
  }, [location.pathname]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <Suspense fallback={<LinearProgress />}>
        <div
          style={{
            position: "relative",
            top: "4rem",
            margin: "-12px",
          }}
        >
          <Routes>
            <Route path="/" element={Pages.HOME_PAGE} />
            <Route path="/about" element={Pages.ABOUT_PAGE} />
            <Route path="/contact" element={Pages.CONTACT_PAGE} />
            <Route path="/admission" element={Pages.ADMISSION_PAGE} />
          </Routes>
        </div>
      </Suspense>

      <InformationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
