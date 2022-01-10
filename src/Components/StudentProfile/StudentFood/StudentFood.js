import {
  Box,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import "./StudentFood.css";
/////////////////

export default function StudentFood() {
  const [foodData, setFoodData] = useState([
    {
      _id: 1,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: true,
      specialMeal: false,
      netMeal: "",
      sumOfCost: "",
    },
    {
      _id: 2,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: false,
      specialMeal: false,
      netMeal: "",
      sumOfCost: "",
    },
    {
      _id: 3,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: true,
      specialMeal: false,
      netMeal: "",
      sumOfCost: "",
    },
    {
      _id: 4,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: true,
      meal2: true,
      meal3: true,
      specialMeal: true,
      netMeal: "",
      sumOfCost: "",
    },
  ]);

  const handleOnChecked = (e, id, name) => {
    const mealCheck = e.target.checked;
    const object = foodData.find((x) => x._id === id);
    const newObject = { ...object };
    newObject[name] = mealCheck;

    ////
    const newItem = [newObject];
    /////

    ////////////////////////////////////
    const newFood = foodData.map((x) => {
      const item = newItem.find(({ _id }) => _id === x._id);
      return item ? item : x;
    });
    setFoodData(newFood);
  };
  console.log(foodData);
  return (
    <Box sx={{ width: "90%", m: "auto", my: 5 }}>
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
              {foodData.map((row, i) => {
                const {
                  _id,
                  date,
                  netMeal,
                  sumOfCost,
                  meal1,
                  meal2,
                  meal3,
                  specialMeal,
                } = row;
                return (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{date}</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={meal1}
                        name="meal1"
                        onChange={(e) => handleOnChecked(e, _id, e.target.name)}
                        color="success"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={meal2}
                        name="meal2"
                        onChange={(e) => handleOnChecked(e, _id, e.target.name)}
                        color="success"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={meal3}
                        name="meal3"
                        onChange={(e) => handleOnChecked(e, _id, e.target.name)}
                        color="success"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={specialMeal}
                        name="specialMeal"
                        onChange={(e) => handleOnChecked(e, _id, e.target.name)}
                        color="success"
                      />
                    </TableCell>
                    <TableCell align="center">{netMeal}</TableCell>
                    <TableCell align="center">{sumOfCost}</TableCell>
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
