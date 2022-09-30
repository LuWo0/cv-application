import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

function App() {
  
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Personal />
      <Experience />
      <Education />
    </div>
  )
}

export default App
