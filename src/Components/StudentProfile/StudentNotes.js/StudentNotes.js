import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard/NoteCard";
import { BsPlus } from "react-icons/bs";
import AddNote from "./AddNote/AddNote";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function StudentNotes() {
  const [notesData, setNotesData] = useState([]);
  const [addNotes, setAddNotes] = useState(false);

  // data fatching from ApI
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data));
  }, []);

  ///////////////////////
  const handelNoteAdd = () => {
    setAddNotes(true);
  };
  return (
    <Box sx={{ pt: 1, my: 5 }}>
      {/* conditional rendaring for new note adding modal  */}
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto" }}>
          <Box
            sx={{
              height: "80vh",
              overflow: "scroll",
            }}
          >
            <Grid container spacing={2}>
              {notesData.map((note) => (
                <Grid key={note.studentId} item xs={12} sm={6} md={4} lg={3}>
                  <NoteCard note={note} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} sx={{ mx: "auto" }}>
          <Box sx={{ width: "max-content", mx: "auto" }}>
            {/* Note Adding Button   */}
            <Button
              variant="contained"
              onClick={handelNoteAdd}
              style={{
                verticalAlign: "middle",
                backgroundColor: "#FFD78E",
                margin: "1vh 1vw",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                নোট যোগ করুন <BsPlus style={{ verticalAlign: "middle" }} />
              </span>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ my: 2 }}>
        <Button className="custom-btn-backward" variant="contained">
          <HiOutlineArrowLeft
            style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
          />
        </Button>
      </Box>
      {/* ----------------------- */}
      {addNotes && (
        <AddNote
          setAddNotes={setAddNotes}
          notesData={notesData}
          setNotesData={setNotesData}
        />
      )}
    </Box>
  );
}
