import { Box, Button, Grid, Typography } from "@mui/material";

import React from "react";

export default function StudentHall() {
  return (
    <Box>
      {/* this box is for hall information and take vacation permission */}
      <Box sx={{ my: 2 }}>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{
                  color: "#4D53D9",
                  backgroundColor: "#EEEFFF",
                  py: 1.5,
                  width: "200px",
                  textAlign: "center",
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
                  py: 1.5,
                  width: "200px",
                  textAlign: "center",
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
          <Grid item md={6} sx={{ textAlign: "center" }}>
            <Button
              style={{
                color: "#FFFDFB",
                backgroundColor: "#0FAF51",
                padding: "13px 0px",
                width: "200px",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                margin: "0px 10px",
              }}
            >
              ছুটির অনুমতি দিন
            </Button>
            <Button
              style={{
                color: "#FFFDFB",
                backgroundColor: "#728FB4",
                padding: "13px 0px",
                width: "200px",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                margin: "0px 10px",
              }}
            >
              হল পরিবর্তন
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
