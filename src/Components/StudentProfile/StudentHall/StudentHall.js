import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ChangeHall from "./ChangeHall/ChangeHall";
import Vacation from "./Vacation/Vacation";

export default function StudentHall() {
  const [vacationData, setVacationData] = useState(false);
  const [hall, setHall] = useState(false);
  const handleVacation = () => {
    setVacationData(true);
  };
  const handleHall = () => {
    setHall(true);
  };
  ////////////////
  const rows = [
    {
      _id: 1,
    },
    {
      _id: 2,
    },
    {
      _id: 3,
    },
    {
      _id: 4,
    },
  ];
  return (
    <Box>
      {/* this box is for hall information and take vacation permission */}
      <Box sx={{ my: 2 }}>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box
              sx={{ display: { xs: "block", md: "flex" }, margin: "0px 1vw" }}
            >
              <Box
                sx={{
                  color: "#4D53D9",
                  backgroundColor: "#EEEFFF",
                  py: 1.5,
                  mr: 2,
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
              onClick={handleVacation}
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
              onClick={handleHall}
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
      <Box sx={{ fontSize: "1rem", fontWeight: "bold", color: "#616365" }}>
        <input className="dateInput" type="date" /> থেকে{" "}
        <input className="dateInput" type="date" />
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ my: 5 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  ছুটি শুরু
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  ছুটি শেষ
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  কারণ
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  ছুটি শুরু
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  ছুটি প্রদানকারী
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মন্তব্য
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => {
                const date = new Date().toLocaleDateString("bn-bd");
                return (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{date}</TableCell>
                    <TableCell align="center">
                      <button className="table-data-edit-btn">
                        <FiEdit />
                      </button>
                      <button className="table-data-delete-btn">
                        <FiTrash2 />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {vacationData && <Vacation setVacationData={setVacationData} />}
      {hall && <ChangeHall setHall={setHall} />}
    </Box>
  );
}
