import Note from "./components/Note";

const App = ({notes}) => {
  const result = notes.map(note => note.id);
  console.log(result);
  return (
    <div>
      <h1>Notes</h1>
      {/* //De esta forma trae todo de los datos requeridos */}
      {/* //EL notes.map le envia cada array al note y el note accede al content
      //y luego devuelve el li */}
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>)}
      </ul>

    </div>

  )
}

export default App