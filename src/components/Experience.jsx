import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import EggIcon from "@mui/icons-material/Egg";
import Typography from "@mui/material/Typography";

export default function Experience() {
  return (
    <div className="view pt-4 pt-sm-0 ">
      <div className="exp text-center mx-auto mb-3 mt-5 mt-sm-5 pt-sm-5">
        EXPERIENCE
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Feb 2021 - Till Date
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <SoupKitchenIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              SENIOR CONT. COOK
            </Typography>
            <Typography>Reliance Worldwide</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Dec 2019 - Jan 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <RestaurantIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              COOK
            </Typography>
            <Typography>965 American restaurant</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Dec 2018 - Dec 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SetMealIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              COMMIS
            </Typography>
            <Typography>m.H.Alshaya Co.W.L.L</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Dec 2017 - Dec 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <LocalDiningIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              COMMIS
            </Typography>
            <Typography>
              Ali Alghanim & Sons Melt Shop, American Franchise Kuwait
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Nov 2015 - Nov 2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary" variant="outlined">
              <EggIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              COMMI 1
            </Typography>
            <Typography>
              Chug Garage Bar, Four Square Hotel, Bangalore
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Oct 2014 - Oct 2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="error">
              <DinnerDiningIcon />
            </TimelineDot>
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              COMMI 3
            </Typography>
            <Typography>Le Pondy, 4 star resort</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
