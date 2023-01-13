// create your App component here
import React,{useEffect} from "react"
function App(){
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((d) => console.log(d))
    })
    return(
    <></>
    )
}
export default App