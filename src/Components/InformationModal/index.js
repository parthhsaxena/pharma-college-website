import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";

const InformationModal = ({ isOpen, onClose }) => {
  const [userInformation, setUserInformation] = useState({
    name: null,
    contact: null,
    email: null,
  });
  const [errorNotification, setErrorNotification] = useState();

  const validateProps = (values) => {
    // Email and contact validations
    const errors = {};

    // Validate Email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    // Validate Contact
    if (!values.contact) {
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(values.contact)) {
      errors.contact = "Invalid contact number (must be 10 digits)";
    }

    return errors;
  };

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle style={{ maxWidth: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Contact Information</Typography>
          <IconButton
            onClick={onClose}
            style={{ position: "relative", right: 0 }}
          >
            <Close />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent>
        <Formik
          initialValues={{ ...userInformation }}
          onSubmit={submitHandler}
          validate={validateProps}
        >
          {({ values, handleSubmit, handleChange, errors, touched }) => (
            <>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  name="name"
                  variant="outlined"
                  style={{ width: "100%", margin: "1rem 0" }}
                  onChange={handleChange}
                  InputLabelProps={{
                    required: true,
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Contact Number"
                  name="contact"
                  type="number"
                  variant="outlined"
                  style={{ width: "100%", margin: "1rem 0" }}
                  onChange={handleChange}
                  InputLabelProps={{
                    required: true,
                  }}
                  error={touched.contact && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  style={{ width: "100%", margin: "1rem 0" }}
                  onChange={handleChange}
                  InputLabelProps={{
                    required: true,
                  }}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div>
                <Button onClick={handleSubmit} variant="contained" size="large">
                  Submit
                </Button>
              </div>
            </>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default InformationModal;
