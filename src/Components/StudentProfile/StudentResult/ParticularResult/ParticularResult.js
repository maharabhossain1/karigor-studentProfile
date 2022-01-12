import {
  Box,
  Button,
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
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function ParticularResult() {
  const rows = [
    {
      _id: 1,
      studentName: "Jubair Ahsan",
      type: "সহকারী হিসাব রক্ষক",
      amount: "25",
    },
    {
      _id: 2,
      studentName: "Jubair Ahsan",
      type: "সহকারী হিসাব রক্ষক",
      amount: "25",
    },
    {
      _id: 3,
      studentName: "Jubair Ahsan",
      type: "সহকারী হিসাব রক্ষক",
      amount: "25",
    },
    {
      _id: 4,
      studentName: "Jubair Ahsan",
      type: "সহকারী হিসাব রক্ষক",
      amount: "25",
    },
  ];
  return (
    <Box>
      <Box sx={{ width: "90%", m: "auto", my: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  বিষয়ের নাম
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  মার্কস
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#616365",
                  }}
                  align="center"
                >
                  গ্রেড
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const { _id, studentName, type, amount } = row;
                return (
                  <TableRow
                    key={_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{studentName}</TableCell>
                    <TableCell align="center">{type}</TableCell>
                    <TableCell align="center">{amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Button className="custom-btn-backward" variant="contained">
          <HiOutlineArrowLeft
            style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
          />
        </Button>
      </Box>
    </Box>
  );
}
