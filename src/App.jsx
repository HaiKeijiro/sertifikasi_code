import data from "../backend/data";

import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="container m-auto py-5 px-10 space-y-10">
        <h1 className="text-4xl font-bold mt-5">Notes</h1>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {data.notes.map((note, index) => (
            <Card key={index} type={note.type} date={note.date} title={note.title} note={note.note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
