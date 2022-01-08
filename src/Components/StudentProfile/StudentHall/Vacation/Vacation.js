import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./Vacation.css";

export default function Vacation({ setVacationData }) {
  const [vacationDate, setVacationDate] = useState([]);

  const handleCancelVacation = () => {
    setVacationData(false);
  };
  const handleConfirmVacation = () => {
    setVacationData(false);
  };
  ///////////////////////
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...vacationDate };
    newInfo[field] = value;
    setVacationData(newInfo);
  };

  return (
    <div className="modal-background" onClick={handleCancelVacation}>
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
            এই ছাত্রের সম্পর্কে নোট যোগ করুন
          </Typography>
          <Box>
            <textarea
              onBlur={handleOnBlur}
              name="notes"
              form="usrform"
            ></textarea>
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
              className="confirm-btn"
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
