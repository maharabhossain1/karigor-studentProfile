import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "../FormInput/FormInput.css";

export default function StudentPersonalInfo() {
  const [studentInfo, setStudentInfo] = useState("");
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
  console.log(studentInfo);
  return (
    <Box sx={{ my: 5 }}>
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
    </Box>
  );
}
