import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";

/////////////////////////////////////////
//////

const currentTab = () => {
  let path = window.location.pathname;
  if (path === "/studentprofile/personalInfo") return 0;
  else if (path === "/studentprofile/instituionInfo") return 1;
  else if (path === "/studentprofile/result") return 2;
  else if (path === "/studentprofile/transaction") return 3;
  else if (path === "/studentprofile/food") return 4;
  else if (path === "/studentprofile/hall") return 5;
  else if (path === "/studentprofile/notes") return 6;
};
//////
export default function StudentProfile() {
  const [value, setValue] = React.useState(currentTab);

  const tabList = [
    {
      _id: 1,
      label: "ব্যক্তিগত তথ্য",
      pathName: "personalInfo",
    },
    {
      _id: 2,
      label: "প্রাতিষ্ঠানিক তথ্য",
      pathName: "instituionInfo",
    },
    {
      _id: 3,
      label: "ফলাফল",
      pathName: "result",
    },
    {
      _id: 4,
      label: "লেনদেন",
      pathName: "transaction",
    },
    {
      _id: 5,
      label: "খাবার",
      pathName: "food",
    },
    {
      _id: 6,
      label: "হল",
      pathName: "hall",
    },
    {
      _id: 7,
      label: "নোটস",
      pathName: "notes",
    },
  ];

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "95%", m: "auto", my: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
        >
          {tabList.map((tab, i) => (
            <Tab
              component={Link}
              to={tab.pathName}
              key={tab._id}
              style={{ fontWeight: "bold" }}
              label={tab.label}
            />
          ))}
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
}
