import { useEffect, useState, useRef } from "react";
import { CiTrash } from "react-icons/ci";
import moment from "moment";
import Head from "next/head";
import Date from "@/components/date";
export default function Home() {
  const noteNameRef = useRef();
  const noteContentRef = useRef();
  const [notes, setNotes] = useState([]);
  const [created, setCreated] = useState(false);

  async function getNotes() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/notes`,
      postData
    );
    const response = await res.json();
    setNotes(response.notes);
  }

  async function addNote() {
    const noteName = noteNameRef.current.value.trim();
    const noteContent = noteContentRef.current.value.trim();
    const noteTime = moment().format("YYYY-MM-DD HH:mm:ss");
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note_name: noteName,
        note_content: noteContent,
        note_time: noteTime
      }),
    };
    if (noteName.length < 1) return;
    if (noteContent.length < 1) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/notes`,
      postData
    );
    const response = await res.json();
    if (response.response.warning !== "success") return;
    const newnote = response.response.note;

    setNotes([
      ...notes,
      {
        note_id: newnote.note_id,
        note_name: newnote.note_name,
        note_content: newnote.note_content,
      },
    ]);
    setCreated(true);
    noteNameRef.current.value = "";
    noteContentRef.current.value = "";
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Head>
        <title>message board</title>
      </Head>
      <main>
        <section className="container">
          <div className="msgboard-container container">
            <ul className="msgboard">
              {notes
                .slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    <li key={item.note_id}>
                      <p>
                        &#x1f56f; <Date dateString={item.note_time} />
                        <br />
                        <span>
                          {item.note_name}
                          {": "}{" "}
                        </span>
                        {item.note_content}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="input">
            <div className="label">Name</div>
            <input type="text" ref={noteNameRef} />
          </div>
          <div className="input">
            <div className="label">Message</div>
            <textarea ref={noteContentRef}></textarea>
          </div>
          {created ? <div className="success">message published!</div> : null}
          <div className="buttonarea">
            <input
              className="button"
              value="publish"
              type="button"
              onClick={addNote}
            />
          </div>
        </section>
      </main>
    </>
  );
}
