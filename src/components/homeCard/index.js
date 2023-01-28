import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material/";
import { Colors } from "../../constants/Colors";
import JobApplicationModal from "../JobApplicationModal";

const HomeCard = (props) => {
  const [isJobApplicationModalOpen, setJobApplicationModalOpen] =
    useState(false);

  const cardClicked = () => {
    if (props.index === 4) {
      setJobApplicationModalOpen(true);
    }
  };

  const openJobApplicationModal = () => {
    const handleClose = () => setJobApplicationModalOpen(false);

    return (
      <Modal
        open={isJobApplicationModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <JobApplicationModal />
      </Modal>
    );
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          background: Colors.backgroundColor,
          cursor: "pointer"
        }}
        onClick={cardClicked}
      >
        <CardMedia
          component="img"
          sx={{
            height: "130px",
            margin: "auto",
            marginBottom: "2rem",
            marginTop: "2rem"
          }}
          image={props.image}
          alt={props.alt}
        />
        <CardContent
          sx={{
            background: Colors.white,
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: Colors.primaryColor,
              fontWeight: "700",
              fontFamily: "Inria Sans",
              fontSize: "1rem"
            }}
          >
            {props.heading}
          </Typography>

          {props.list.map((e) => (
            <Typography
              variant="body2"
              sx={{
                color: Colors.primaryColor,
                fontFamily: "Inria Sans",
                fontSize: "1rem"
              }}
            >
              - {e}
            </Typography>
          ))}
        </CardContent>
      </Card>

      <div>{openJobApplicationModal()}</div>
    </div>
  );
};

export default HomeCard;
