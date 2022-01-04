import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentPersonalInfo from "./StudentPersonalInfo/StudentPersonalInfo";
import StudentInstituteInfo from "./StudentInstituteInfo/StudentInstituteInfo";
import StudentResult from "./StudentResult/StudentResult";
import StudentTransaction from "./StudentTransaction/StudentTransaction";
import StudentFood from "./StudentFood/StudentFood";
import StudentHall from "./StudentHall/StudentHall";

//// helper functions
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

/////////////////////////////////////////
// main component
export default function StudentProfile() {
  const [value, setValue] = React.useState(0);

  const tabList = [
    {
      _id: 1,
      label: "ব্যক্তিগত তথ্য",
    },
    {
      _id: 2,
      label: "প্রাতিষ্ঠানিক তথ্য",
    },
    {
      _id: 3,
      label: "ফলাফল",
    },
    {
      _id: 4,
      label: "লেনদেন",
    },
    {
      _id: 5,
      label: "খাবার",
    },
    {
      _id: 6,
      label: "হল",
    },
    {
      _id: 7,
      label: "নোটস",
    },
  ];

  const componentList = [
    <StudentPersonalInfo />,
    <StudentInstituteInfo />,
    <StudentResult />,
    <StudentTransaction />,
    <StudentFood />,
    <StudentHall />,
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
              key={tab._id}
              style={{ fontWeight: "bold" }}
              label={tab.label}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Box>
      {componentList.map((component, i) => (
        <TabPanel key={i} value={value} index={i}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
}
