import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import "./AddNote.css";

export default function AddNote({ setAddNotes, notesData, setNotesData }) {
  const [noteText, setNoteText] = useState({
    studentId: Math.random(),
    studentName: "জুবায়ের আহমেদ",
    date: new Date().toLocaleDateString("bn-bd"),
  });
  // for canceling adding note process
  const handleCancelNote = () => {
    setAddNotes(false);
  };
  ///////////////////////
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...noteText };
    newInfo[field] = value;
    setNoteText(newInfo);
  };
  ////////////////////////
  const handleConfimAdd = (e) => {
    e.preventDefault();
    setAddNotes(false);
    setNotesData([...notesData, noteText]);
  };
  return (
    <div className="modal-background">
      <Box onSubmit={handleConfimAdd} component="form" className="add-note-box">
        <Box>
          <Typography
            style={{ margin: "2vh 0", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            এই ছাত্রের সম্পর্কে নোট যোগ করুন
          </Typography>
          <Box>
            <textarea
              onBlur={handleOnBlur}
              name="notes"
              form="usrform"
            ></textarea>
          </Box>
        </Box>
        {/* ///////////////////////////////// */}
        {/* Button Box cancel and save button */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            py: 3,
            px: 0.5,
          }}
        >
          <div>
            <Button
              type="submit"
              variant="contained"
              style={{
                verticalAlign: "middle",
                backgroundColor: "#0FAF51",
                marginTop: "1vh",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                সেইভ করুন
              </span>
            </Button>
          </div>
          <div>
            <Button
              onClick={handleCancelNote}
              className="confirm-btn"
              variant="contained"
              style={{
                verticalAlign: "middle",
                backgroundColor: "#F7685B",
                marginTop: "1vh",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                বাদ দিন
              </span>
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
