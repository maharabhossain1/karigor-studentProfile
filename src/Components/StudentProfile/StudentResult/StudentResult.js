import { Grid, Box, Typography } from "@mui/material";
import { VscTriangleDown } from "react-icons/vsc";
import React from "react";
import "./StudentResult.css";

export default function StudentResult() {
  const resultArray = [
    {
      _id: 1,
      year: "২০২১",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 2,
      year: "২০২০",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 3,
      year: "২০১৯",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 4,
      year: "২০১৮",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 5,
      year: "২০১৭",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 6,
      year: "২০১৬",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 7,
      year: "২০১৫",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 8,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 9,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 10,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 11,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 12,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 13,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 14,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
    {
      _id: 15,
      year: "২০১৪",
      examType: "১ম সাময়িক পরিক্ষা",
    },
  ];
  return (
    <Box sx={{ my: 5 }}>
      <Grid container spacing={3}>
        {resultArray.map((result) => {
          const { year, _id, examType } = result;
          return (
            <Grid item key={_id}>
              <div className="reselt-box">
                <div className="result-content">
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    {year}
                  </Typography>
                  <p>{examType}</p>
                </div>
                <div className="result-box-icon">
                  <VscTriangleDown />
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
