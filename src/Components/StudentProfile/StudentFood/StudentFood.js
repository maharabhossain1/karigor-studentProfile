import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineSave } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import "./StudentFood.css";
//
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import frLocale from "date-fns/locale/fr";

/////////////////

export default function StudentFood() {
  const [foodData, setFoodData] = useState([
    {
      _id: 1,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: false,
      specialMeal: false,
      netMeal: 0,
      sumOfCost: 0,
    },
    {
      _id: 2,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: false,
      specialMeal: false,
      netMeal: 0,
      sumOfCost: 0,
    },
    {
      _id: 3,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: false,
      specialMeal: false,
      netMeal: 0,
      sumOfCost: 0,
    },
    {
      _id: 4,
      date: new Date().toLocaleDateString("bn-bd"),
      meal1: false,
      meal2: false,
      meal3: false,
      specialMeal: false,
      netMeal: 0,
      sumOfCost: 0,
    },
  ]);
  const [change, setChange] = useState(false);
  const [startDateValue, setStartDateValue] = React.useState(null);

  const handleOnChecked = (e, id, name) => {
    setChange(true);
    const mealCheck = e.target.checked;
    const object = foodData.find((x) => x._id === id);
    const newObject = { ...object };
    newObject[name] = mealCheck;
    ////
    const mealPrice = e.target.value;
    //// meal price adding and checked value calculation
    if (mealCheck) {
      newObject.sumOfCost = Number(mealPrice) + Number(newObject.sumOfCost);
      newObject.netMeal = Number(newObject.netMeal) + 1;
    } else {
      newObject.sumOfCost = Number(newObject.sumOfCost) - Number(mealPrice);
      newObject.netMeal = Number(newObject.netMeal) - 1;
    }
    ////
    const newItem = [newObject];
    ////////////////////////////////////
    const newFood = foodData.map((x) => {
      const item = newItem.find(({ _id }) => _id === x._id);
      return item ? item : x;
    });
    setFoodData(newFood);
  };
  ///////// reset Form
  const handleReset = (e) => {
    e.preventDefault();
    // e.target.reset();
  };

  // Input Field control

  return (
    <Box sx={{ my: 3 }}>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto" }}>
          <Box component="form" sx={{ my: 1 }}>
            <Box
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "#616365" }}
            >
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={frLocale}
              >
                <DatePicker
                  value={startDateValue}
                  onChange={(newValue) => {
                    setStartDateValue(newValue);
                    console.log(startDateValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <span
                style={{
                  display: "inline-block",
                  padding: "1rem",
                }}
              >
                {" "}
                থেকে{" "}
              </span>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={frLocale}
              >
                <DatePicker
                  value={startDateValue}
                  onChange={(newValue) => {
                    setStartDateValue(newValue);
                    console.log(startDateValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
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
                              value={60}
                              onChange={(e) =>
                                handleOnChecked(e, _id, e.target.name)
                              }
                              color="success"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Checkbox
                              checked={meal2}
                              name="meal2"
                              value={60}
                              onChange={(e) =>
                                handleOnChecked(e, _id, e.target.name)
                              }
                              color="success"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Checkbox
                              checked={meal3}
                              name="meal3"
                              value={60}
                              onChange={(e) =>
                                handleOnChecked(e, _id, e.target.name)
                              }
                              color="success"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Checkbox
                              checked={specialMeal}
                              name="specialMeal"
                              onChange={(e) =>
                                handleOnChecked(e, _id, e.target.name)
                              }
                              color="success"
                              value={120}
                            />
                          </TableCell>
                          <TableCell align="center">{netMeal}</TableCell>
                          <TableCell align="center">{sumOfCost}</TableCell>
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
        </Grid>
        <Grid item xs={12} md={2}>
          {change && (
            <Box>
              <Box sx={{ width: "max-content", mx: "auto" }}>
                <Button variant="contained" className="custom-save-btn">
                  <HiOutlineSave
                    style={{ marginRight: "10px", fontSize: "1.5rem" }}
                  />{" "}
                  সেইভ করুন
                </Button>
              </Box>
              <Box sx={{ width: "max-content", mx: "auto" }}>
                <Button
                  type="reset"
                  onClick={handleReset}
                  variant="contained"
                  className="custom-cancel-btn"
                >
                  <ImCross style={{ marginRight: "10px" }} /> বাতিল করুন
                </Button>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
