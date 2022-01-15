import {
  Box,
  Button,
  Checkbox,
  Grid,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineSave } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import "./StudentFood.css";
//
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import frLocale from "date-fns/locale/bn";
import { FiEdit } from "react-icons/fi";

/////////////////

export default function StudentFood() {
  const [foodData, setFoodData] = useState([]);
  const [rangeFoodData, setRangeFoodData] = useState([]);
  // const [reset, setReset] = useState(false);
  const [editOption, setEditOption] = useState(true);
  const [startDateValue, setStartDateValue] = React.useState(new Date());
  const [endDateValue, setEndDateValue] = React.useState(new Date());
  /// pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const studentFoodData = useRef();
  //////// DATA FETCH
  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
        setRangeFoodData(data);
        // setReset(false);
      });
  }, []);
  ////////////////////
  const handleOnChecked = (e, id) => {
    const mealCheck = e.target.checked;
    const name = e.target.name;
    const object = rangeFoodData.find((x) => x._id === id);
    const newObject = { ...object };
    if (name === "selectAll") {
      if (mealCheck) {
        newObject.meal1 = mealCheck;
        newObject.meal2 = mealCheck;
        newObject.meal3 = mealCheck;
        newObject.specialMeal = mealCheck;
        // sum of cost
        const sumOfPrice =
          Number(newObject.meal1Price) +
          Number(newObject.meal2Price) +
          Number(newObject.meal3Price) +
          Number(newObject.specialMealPrice);
        newObject.sumOfCost = Number(sumOfPrice);
        //  sum of selected meals
        newObject.netMeal = 4;
      } else {
        newObject.meal1 = false;
        newObject.meal2 = false;
        newObject.meal3 = false;
        newObject.specialMeal = false;
        newObject.sumOfCost = 0;
        newObject.netMeal = 0;
      }
    } else {
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
    }

    ////
    const newItem = [newObject];
    ////////////////////////////////////
    const newFood = foodData.map((x) => {
      const item = newItem.find(({ _id }) => _id === x._id);
      return item ? item : x;
    });
    setFoodData(newFood);
    /// for range food data
    const newRangeFood = rangeFoodData.map((x) => {
      const item = newItem.find(({ _id }) => _id === x._id);
      return item ? item : x;
    });
    setRangeFoodData(newRangeFood);
  };
  const handleReset = (e) => {
    // setReset(true);
    setEditOption(true);
    studentFoodData.current.reset();
  };
  const handleEdit = (e) => {
    setEditOption(false);
  };

  ////////////////////
  const handleDateRange = (e) => {
    const startRange = startDateValue.toLocaleDateString("bn-bd");
    const endRange = endDateValue.toLocaleDateString("bn-bd");
    const indexOfStartDate = foodData.findIndex(
      (object) => object.date === startRange
    );
    const indexOfEndDate = foodData.findIndex(
      (object) => object.date === endRange
    );
    const newFoodData = foodData.slice(indexOfStartDate, indexOfEndDate + 1);
    setRangeFoodData(newFoodData);
  };
  ///// pagination calculation
  // const indexOfLastData = currentPage * dataPerPage;
  // const indexOfFirstdata = indexOfLastData - dataPerPage;
  // const currentFoodData = rangeFoodData.slice(
  //   indexOfFirstdata,
  //   indexOfLastData
  // );
  // useEffect(() => {
  //   setCurrentDataPerPage(currentFoodData);
  // }, [currentFoodData]);
  const pageCount = Math.ceil(rangeFoodData.length / dataPerPage);
  const handlePagination = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <Box sx={{ my: 3 }}>
      <form ref={studentFoodData}>
        <Grid container>
          <Grid item xs={12} md={10} sx={{ mx: "auto" }}>
            <Box sx={{ my: 1 }}>
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
                  থেকে
                </span>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={frLocale}
                >
                  <DatePicker
                    value={endDateValue}
                    onChange={(newValue) => {
                      setEndDateValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Button
                  onClick={handleDateRange}
                  variant="contained"
                  style={{ margin: "0px 10px" }}
                >
                  Confirm
                </Button>
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
                          সিলেক্ট অল
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
                      {rangeFoodData.map((row, i) => {
                        const {
                          _id,
                          date,
                          netMeal,
                          sumOfCost,
                          meal1,
                          meal2,
                          meal3,
                          specialMeal,
                          meal1Price,
                          meal2Price,
                          meal3Price,
                          specialMealPrice,
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
                                disabled={editOption}
                                name="selectAll"
                                onChange={(e) => handleOnChecked(e, _id)}
                                color="success"
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Checkbox
                                disabled={editOption}
                                checked={meal1}
                                name="meal1"
                                value={meal1Price}
                                onChange={(e) => handleOnChecked(e, _id)}
                                color="success"
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Checkbox
                                disabled={editOption}
                                checked={meal2}
                                name="meal2"
                                value={meal2Price}
                                onChange={(e) => handleOnChecked(e, _id)}
                                color="success"
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Checkbox
                                disabled={editOption}
                                checked={meal3}
                                name="meal3"
                                value={meal3Price}
                                onChange={(e) => handleOnChecked(e, _id)}
                                color="success"
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Checkbox
                                disabled={editOption}
                                checked={specialMeal}
                                name="specialMeal"
                                onChange={(e) => handleOnChecked(e, _id)}
                                color="success"
                                value={specialMealPrice}
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
                <Box sx={{}}>
                  <Pagination
                    sx={{ width: "maxContent" }}
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePagination}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Box sx={{ width: "max-content", mx: "auto" }}>
                {editOption ? (
                  <Button
                    onClick={handleEdit}
                    variant="contained"
                    className="custom-edit-btn"
                  >
                    <FiEdit
                      style={{ marginRight: "10px", fontSize: "1.3rem" }}
                    />{" "}
                    এডিট করুন
                  </Button>
                ) : (
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    className="custom-cancel-btn"
                  >
                    <ImCross style={{ marginRight: "10px" }} /> বাতিল করুন
                  </Button>
                )}
              </Box>
              <Box sx={{ width: "max-content", mx: "auto" }}>
                {!editOption && (
                  <Button variant="contained" className="custom-save-btn">
                    <HiOutlineSave
                      style={{ marginRight: "10px", fontSize: "1.5rem" }}
                    />{" "}
                    সেইভ করুন
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ my: 5 }}>
          <Button className="custom-btn-backward" variant="contained">
            <HiOutlineArrowLeft
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </Box>
      </form>
    </Box>
  );
}
