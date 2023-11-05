import { query } from "@/lib/db";

export default async function handler(req, res) {
  let warning;
  if (req.method === "GET") {
    const notes = await query({
      query: "SELECT * FROM notes",
      values: [],
    });
    res.status(200).json({ notes: notes });
  }

  if (req.method === "POST") {
    const noteName = req.body.note_name;
    const noteContent = req.body.note_content;
    const addNotes = await query({
      query: "INSERT INTO notes (note_name, note_content) VALUES (?, ?)",
      values: [noteName, noteContent],
    });
    if (addNotes.insertId) {
      warning = "success";
    } else {
      warning = "error";
    }
    let note = {
      note_id: addNotes.insertId,
      note_name: noteName,
      note_content: noteContent
    };
    res.status(200).json({ response: { warning: warning, note: note } });
  }
}
