import { Typography } from "@mui/material";
import React from "react";
import "./NoteCard.css";
import { CgArrowLongRight } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function NoteCard({ note }) {
  const { studentName, date, notes } = note;
  return (
    <div className="note-container">
      <div className="note-info">
        <div>
          <FiUser /> {studentName}
        </div>
        <div>
          <AiOutlineClockCircle /> {date}
        </div>
      </div>
      <div className="note-text">{notes}</div>
      <div className="detail-note">
        <Typography>
          বিস্তারিত <CgArrowLongRight />
        </Typography>
      </div>
    </div>
  );
}
