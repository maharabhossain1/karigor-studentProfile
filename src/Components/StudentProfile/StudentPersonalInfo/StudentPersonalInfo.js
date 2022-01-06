import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { HiOutlineArrowLeft, HiOutlineSave } from "react-icons/hi";
import "../FormInput/FormInput.css";
import "./StudentPersonalInfo.css";

export default function StudentPersonalInfo() {
  const [studentInfo, setStudentInfo] = useState("");
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
    const field = e.target.value;
    const value = e.target.value;
    const newValue = { ...studentInfo };
    newValue[field] = value;
    setStudentInfo(newValue);
  };

  const inputArray = [
    {
      id: 1,
      label: "ছাত্রের নাম",
      name: "studentName",
      type: "text",
      placeholder: "Student Name",
      required: "required",
    },
    {
      id: 2,
      label: "ছাত্রের নাম (আরবী)",
      name: "studentNameArabic",
      type: "text",
      placeholder: "Student Name (Arabic)",
      required: "required",
    },
    {
      id: 3,
      label: "পিতার নাম",
      name: "fatherName",
      type: "text",
      placeholder: "Father Name",
      required: "required",
    },
    {
      id: 4,
      label: "মাতার নাম",
      name: "motherName",
      type: "text",
      placeholder: "Mother Name",
    },
    {
      id: 5,
      label: "জন্ম নিবন্ধন নাম্বার",
      name: "BirthCertificateNumber",
      type: "text",
      placeholder: "Birth Certificate Number",
    },
    {
      id: 7,
      label: "জাতীয় পরিচয়পত্র নাম্বার",
      name: "NIDNumber",
      type: "number",
      placeholder: "NID Number",
    },
    {
      id: 8,
      label: "জাতীয়তা",
      name: "nationality",
      type: "text",
      placeholder: "Nationality",
    },
    {
      id: 9,
      label: "জন্ম তারিখ",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      required: "required",
    },
  ];
  const inputArray2 = [
    {
      id: 10,
      label: "বিভাগ",
      name: "division",
      type: "select",
      options: [
        "ঢাকা ",
        "চট্টগ্রাম",
        "বরিশাল",
        "খুলনা",
        "ময়মনসিংহ",
        "রাজশাহী",
        "সিলেট",
        "রংপুর",
      ],
      placeholder: "Division",
    },
    {
      id: 11,
      label: "জেলা",
      name: "district",
      type: "select",
      options: [
        "কুমিল্লা",
        "ফেনী",
        "ব্রাহ্মণবাড়িয়া",
        "রাঙ্গামাটি",
        "নোয়াখালী",
        "চাঁদপুর",
        "লক্ষ্মীপুর",
        "চট্টগ্রাম",
        "কক্সবাজার",
        "খাগড়াছড়ি",
        "বান্দরবান",
        "সিরাজগঞ্জ",
        "পাবনা",
        "বগুড়া",
        "রাজশাহী",
        "নাটোর",
        "জয়পুরহাট",
        "চাঁপাইনবাবগঞ্জ",
        "নওগাঁ",
        "যশোর",
        "সাতক্ষীরা",
        "মেহেরপুর",
        "নড়াইল",
        "চুয়াডাঙ্গা",
        "কুষ্টিয়া",
        "মাগুরা",
        "খুলনা",
        "বাগেরহাট",
        "ঝিনাইদহ",
        "ঝালকাঠি",
        "পটুয়াখালী",
        "পিরোজপুর",
        "বরিশাল",
        "ভোলা",
        "বরগুনা",
        "সিলেট",
        "মৌলভীবাজার",
        "হবিগঞ্জ",
        "সুনামগঞ্জ",
        "নরসিংদী",
        "গাজীপুর",
        "শরীয়তপুর",
        "নারায়ণগঞ্জ",
        "টাঙ্গাইল",
        "কিশোরগঞ্জ",
        "মানিকগঞ্জ",
        "ঢাকা",
        "মুন্সিগঞ্জ",
        "রাজবাড়ী",
        "মাদারীপুর",
        "গোপালগঞ্জ",
        "ফরিদপুর",
        "পঞ্চগড়",
        "দিনাজপুর",
        "লালমনিরহাট",
        "নীলফামারী",
        "গাইবান্ধা",
        "ঠাকুরগাঁও",
        "রংপুর",
        "কুড়িগ্রাম",
        "শেরপুর",
        "ময়মনসিংহ",
        "জামালপুর",
        "নেত্রকোণা",
      ],
      placeholder: "District",
    },
    {
      id: 12,
      label: "উপজেলা",
      name: "upazila",
      type: "text",
      placeholder: "Upazila",
    },
    {
      id: 13,
      label: "ঠিকানা",
      name: "address",
      type: "text",
      placeholder: "Address",
    },
    {
      id: 14,
      label: "রক্তের গ্রুপ",
      name: "bloodGroup",
      type: "text",
      placeholder: "BloodGroup",
    },
    {
      id: 15,
      label: "লিঙ্গ",
      name: "gender",
      type: "text",
      placeholder: "Gender",
    },
    {
      id: 16,
      label: "মোবাইল নাম্বার",
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
      required: "required",
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
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        md: "flex",
                      },
                      mb: 5,
                    }}
                  >
                    <Box sx={{ width: "165px" }}>
                      <Typography
                        style={{
                          fontsize: "1rem",
                          fontWeight: "bold",
                          color: "#616365",
                          padding: "1vh 1vw",
                        }}
                      >
                        ছাত্রের ছবি
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "max-content",
                        m: "auto",
                        border: "1px solid #e5e5e5",
                      }}
                    >
                      <img
                        style={{ height: "20vh" }}
                        src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                        alt="student"
                      />
                    </Box>
                  </Box>
                  {inputArray.map((inputs) => {
                    const { label, id, ...others } = inputs;
                    return (
                      <div className="input-field" key={id}>
                        <div>
                          <label htmlFor="text">{label}</label>
                          <input
                            onBlur={handleOnBlur}
                            defaultValue={studentInfo[inputs.name] || ""}
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
                            defaultValue={studentInfo[inputs.name] || ""}
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
