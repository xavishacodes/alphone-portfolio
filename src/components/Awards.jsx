import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Awards() {
  return (
    <div className="view mt-sm-5 pt-5 pt-sm-5 px-0">
      <div className=" exp text-center mx-auto mb-3 mt-0 mt-sm-4 pt-0 pt-sm-0">
        AWARDS
      </div>
      <div className="d-flex col-12 row justify-content-center mx-0">
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: "0px 0px 10px #0000008f",
          }}
          className="mx-5 my-5 ms-xs-5"
        >
          <CardActionArea>
            <CardMedia
              className="cardy"
              component="img"
              height="240"
              image="https://img.freepik.com/free-vector/employee-month-design_23-2148459371.jpg?t=st=1647868717~exp=1647869317~hmac=78215aa48ef92858a2ea481a1ebfebbc32c45aa7dc8239ac349077d8ad4f96bd&w=740"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Best Employee
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Awarded with Best Employee during the month of May 2015 by
                Sabari Hotel
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 345, boxShadow: "0px 0px 10px #0000008f" }}
          className="mx-5 my-5"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://img.freepik.com/free-vector/employee-month-concept-with-trophy_23-2148458554.jpg?t=st=1647868717~exp=1647869317~hmac=fdaa93e2f30912d17ea3fdf9c61444cbbd3c995b7b587d0a1826c805640e626a&w=740"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Best Employee
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Awarded Best Employee during the month of January 2014 by Taj
                Gateway.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
