import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import ContactUs from "./components/ContactUs";
import About from "./components/About"
function App() {
  const [page, setPage] = useState("about");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getData = async ()=>{
      const r = await fetch("https://tskoli-intranet-api-h7.vercel.app/api/v1/gallery")
      const data = await r.json()
      console.log(data);
      setProjects(data);
    }
     getData();
  }, []);
  const pages = [
    {
      name:"About",
      type:"static page"
    },
    {
      name:"Contact Us",
      type:"static page"
    },
    {
      name:"projects",
      type:"dynamic page"
    }
  ]
  console.log(projects);

  return (
    <div>
      <NavBar links={pages} setPage={setPage}></NavBar><br></br>
      {page==="about"?
        <About></About>:
        <ContactUs></ContactUs>
      }
    </div>
  );
}
export default App;

