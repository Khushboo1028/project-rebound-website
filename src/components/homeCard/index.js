import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Colors } from "../../constants/Colors";

const HomeCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, background: Colors.backgroundColor }}>
        <CardMedia
          component="img"
          sx={{
            width: "283px",
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
    </div>
  );
};

export default HomeCard;
