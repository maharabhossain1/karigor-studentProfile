import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./StudentFood.css";

export default function StudentFood() {
  const rows = [
    {
      _id: 1,
      studentName: "Jubair Ahsan",
      amount: "25",
    },
    {
      _id: 2,
      studentName: "Jubair Ahsan",
      amount: "25",
    },
    {
      _id: 3,
      studentName: "Jubair Ahsan",
      amount: "25",
    },
    {
      _id: 4,
      studentName: "Jubair Ahsan",
      amount: "25",
    },
  ];
  return (
    <Box sx={{ width: "90%", m: "auto", my: 5 }}>
      <Box sx={{ fontSize: "1rem", fontWeight: "bold", color: "#616365" }}>
        <input className="dateInput" type="date" /> থেকে{" "}
        <input className="dateInput" type="date" />
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ my: 5 }}>
          <Table aria-label="simple table">
            <TableHead sx={{ border: "none" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  তারিখ
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মিল-১
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মিল-২
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মিল-৩
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  স্পেশাল মিল
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মোট মিল
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মোট খরচ{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => {
                const date = new Date().toLocaleDateString("bn-bd");
                return (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{date}</TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox color="success" />
                    </TableCell>
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
    </Box>
  );
}
