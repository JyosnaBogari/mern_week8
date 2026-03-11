import A from "./components/A"
import B from "./components/B"
import C from "./components/C"
function App() {
  return (
    <div className="flex justify-around mt-16">
    {/* the below are the userdefined HTML tag and we we call it as selector of component A/B/C  */}
      <A/>    
      <B/>
      <C/>
    </div>
  )
}

export default App
