import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { HiOutlineArrowLeft, HiOutlineSave } from "react-icons/hi";

export default function StudentInstituteInfo() {
  const [institutionInfo, setInstitutionInfo] = useState("");
  const [editOption, setEditOption] = useState(true);

  //////////////////////////
  // Edit Butoons
  const handleEdit = () => {
    setEditOption(false);
  };
  const handleCancelEdit = () => {
    setEditOption(true);
  };
  //////////////////////////
  // Input Field control
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...institutionInfo };
    newValue[field] = value;
    setInstitutionInfo(newValue);
  };
  const inputArray = [
    {
      id: 1,
      label: "ক্লাস",
      name: "studentClass",
      type: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      placeholder: "Student Class",
      required: "required",
    },
    {
      id: 2,
      label: "ভর্তির তারিখ",
      name: "admissionDate",
      type: "date",
      placeholder: "Admission Date",
      required: "required",
    },
    {
      id: 3,
      label: "ভর্তি পরীক্ষার মার্কস",
      name: "admissionTestMarks",
      type: "number",
      placeholder: "Admission Test Marks",
      required: "required",
    },
    {
      id: 4,
      label: "ভর্তির ফিস",
      name: "admissionFee",
      type: "number",
      placeholder: "Admission Fee",
      required: "required",
    },
    {
      id: 5,
      label: "রোল",
      name: "studentRoll",
      type: "number",
      placeholder: "Write Your Roll",
    },
  ];
  const inputArray2 = [
    {
      id: 6,
      label: "সাবক্লাস",
      name: "subClass",
      type: "text",
      placeholder: "Write Your Sub Class",
    },
    {
      id: 7,
      label: "সেশন",
      name: "session",
      type: "text",
      placeholder: "Write Your Session",
    },
    {
      id: 8,
      label: "মাদ্রাসা থেকে বৃত্তি",
      name: "scholarshipFromMadrasa",
      type: "text",
      placeholder: "Scholarship From Madrasa",
    },
    {
      id: 9,
      label: "আর্থিক অবস্থা",
      name: "financialStatus",
      type: "text",
      placeholder: "সম্পূর্ণ অর্থপ্রদান / আংশিক / বিনামূল্যে",
    },
    {
      id: 10,
      label: "খাবার ডিস্কাউন্ট",
      name: "foodDiscount",
      type: "text",
      placeholder: "Food discount",
    },
  ];

  return (
    <Box sx={{ my: 5 }}>
      <Grid container>
        <Grid item xs={12} md={11} sx={{ mx: "auto" }}>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
                <Box className="student-info">
                  {inputArray.map((inputs) => {
                    const { label, id, ...others } = inputs;
                    return (
                      <div className="input-field" key={id}>
                        <div>
                          <label htmlFor="text">{label}</label>
                          <input
                            onBlur={handleOnBlur}
                            defaultValue={institutionInfo[inputs.name] || ""}
                            {...others}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="student-info">
                  {inputArray2.map((inputs) => {
                    const { label, id, ...others } = inputs;
                    return (
                      <div className="input-field" key={id}>
                        <div>
                          <label htmlFor="text">{label}</label>
                          <input
                            onBlur={handleOnBlur}
                            defaultValue={institutionInfo[inputs.name] || ""}
                            {...others}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={1} sx={{ mx: "auto" }}>
          <Box sx={{ width: "max-content", mx: "auto" }}>
            {editOption ? (
              <Button
                onClick={handleEdit}
                variant="contained"
                className="custom-edit-btn"
              >
                <FiEdit style={{ marginRight: "10px", fontSize: "1.3rem" }} />{" "}
                এডিট করুন
              </Button>
            ) : (
              <Button
                onClick={handleCancelEdit}
                variant="contained"
                className="custom-cancel-btn"
              >
                <ImCross style={{ marginRight: "10px" }} /> বাতিল করুন
              </Button>
            )}
          </Box>
          <Box sx={{ width: "max-content", mx: "auto" }}>
            {!editOption && (
              <Button
                onClick={handleEdit}
                variant="contained"
                className="custom-save-btn"
              >
                <HiOutlineSave
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                />{" "}
                সেইভ করুন
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
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
