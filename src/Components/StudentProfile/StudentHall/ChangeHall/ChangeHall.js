import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function ChangeHall({ setHall }) {
  const handleCancelVacation = () => {
    setHall(false);
  };
  const handleConfirmVacation = () => {
    setHall(false);
  };
  // const handleOnBlur = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newInfo = { ...vacationDate };
  //   newInfo[field] = value;
  //   setVacationData(newInfo);
  // };
  return (
    <div className="modal-background">
      <Box
        onSubmit={handleConfirmVacation}
        component="form"
        className="take-vacation-box"
      >
        <Box>
          <Typography
            style={{
              margin: "2vh 0",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#616365",
            }}
          >
            হল পরিবর্তনের সেকশন
          </Typography>
          <Box
            sx={{
              width: "95%",
              m: "auto",
              my: 4,
              border: "1px solid rgba(97, 99, 101, 0.2)",
              py: 6,
              background: "#FAFAFA",
              borderRadius: "5px",
            }}
          >
            <Box
              className="input-field"
              sx={{ width: "80%", textAlign: "center" }}
            >
              <input type="text" name="হলের নাম" placeholder="হলের নাম" />
            </Box>
            <Box
              className="input-field"
              sx={{ width: "80%", textAlign: "center" }}
            >
              <input
                type="number"
                nam="roomNumber"
                placeholder="রুমের নাম্বার"
              />
            </Box>
          </Box>
        </Box>
        {/* ///////////////////////////////// */}
        {/* Button Box cancel and save button */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            py: 3,
            px: 0.5,
          }}
        >
          <div>
            <Button
              type="submit"
              variant="contained"
              style={{
                verticalAlign: "middle",
                backgroundColor: "#0FAF51",
                marginTop: "1vh",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                সেইভ করুন
              </span>
            </Button>
          </div>
          <div>
            <Button
              onClick={handleCancelVacation}
              variant="contained"
              style={{
                verticalAlign: "middle",
                backgroundColor: "#F7685B",
                marginTop: "1vh",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                বাদ দিন
              </span>
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
