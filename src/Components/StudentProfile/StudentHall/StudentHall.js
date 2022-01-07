import { Box, Grid, Typography } from "@mui/material";

import React from "react";

export default function StudentHall() {
  return (
    <Box>
      {/* this box is for hall information and take vacation permission */}
      <Box>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{
                  color: "#4D53D9",
                  backgroundColor: "#EEEFFF",
                  px: 6,
                  py: 1.5,
                  border: "2px solid #4D53D9",
                  borderRadius: "10px",
                }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  <span style={{ margin: "0px 0.5vw" }}>হল ১</span>{" "}
                  <span style={{ margin: "0px 0.5vw" }}>রুম ৩১৩</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  color: "#007BFF",
                  backgroundColor: "#D6EAFF",
                  px: 6,
                  py: 1.5,
                  border: "2px solid #007BFF",
                  borderRadius: "10px",
                }}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  ছুটিতে আছে
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
