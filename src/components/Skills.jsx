import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import propdf from "./alphon.pdf";

const Skillss = [
  { name: "Continental", progress: 95 },
  { name: "Italian", progress: 90 },
  { name: "American", progress: 80 },
  { name: "Kitchen Management", progress: 90 },
  { name: "Menu development", progress: 85 },
  { name: "Time Management", progress: 90 },
];
function CircularProgressWithLabel(props) {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        sx={{
          width: 500,
          height: 500,
          fontSize: 50,
        }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Skills() {
  return (
    <div className="view">
      <div className="exp text-center mx-auto mb-5 mt-5 mt-xs-5 pt-5">
        SKILLS
      </div>
      <div className="row col-12">
        {Skillss.map((skill, index) => {
          return (
            <div
              key={index}
              className="d-flex flex-column flex-sm-row col-sm-4 col-12 my-4 justify-content-center align-items-center"
            >
              <CircularProgressWithLabel value={skill.progress} />

              <div className="text-dark ms-sm-3">{skill.name} </div>
            </div>
          );
        })}
      </div>
      <div
        className="mb-5 mb-sm-0"
        // style={{ minHeight: "400px" }}
      >
        <div className="exp text-center mx-auto mb-3 mt-4 ">RESUME</div>
        <Stack
          direction="row"
          spacing={2}
          className="d-flex justify-content-center"
        >
          <Button
            href={propdf}
            className="p-3"
            variant="contained"
            color="primary"
            target="_blank"
          >
            View CV
          </Button>
          <Button
            href={propdf}
            download
            variant="contained"
            color="error"
            className="p-3"
            size="large"
          >
            Download
          </Button>
        </Stack>
      </div>
    </div>
  );
}
