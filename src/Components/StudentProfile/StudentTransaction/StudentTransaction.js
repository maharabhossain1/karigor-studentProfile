import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function StudentTransaction() {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">নাম</TableCell>
            <TableCell align="center">লেনদেনের ধরণ</TableCell>
            <TableCell align="center">টাকার পরিমান</TableCell>
            <TableCell align="center">ডিস্কাউন্ট</TableCell>
            <TableCell align="center">ডিস্কাউন্ট</TableCell>
            <TableCell align="center">মন্তব্য</TableCell>
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
  );
}
