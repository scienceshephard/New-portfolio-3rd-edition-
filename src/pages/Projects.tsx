import { Link, Route, Routes } from "react-router"
import projectData from '../components/projects/projects_data.json'
import { Main } from "../components/projects/MainProjects";

const Projects = () => {

  // const data= projectData.find( p=> p.title.toLowerCase().replace(/\s+/g, '-') === title)
  return (
    <section className="h-full flex flex-col bg-amber-600">
      <div className="h-full bg-red-600">
        <h1>ms</h1>
        <ul>
          {
            projectData.map((data, index)=>{
              const route = data.title.toLowerCase().replace(/\s+/g, '-');
              return(
                <li key={index} className="text-3xl text-white font-bold">
                  <Link to={`/projects/${route}`} className="hover:text-[var(--nav-text-hover-color)] hover:duration-[10] hover:delay-[100] hover:ease-in-out">{data.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="">
        <Routes>
          {
            projectData.map((data, index)=>{
              const route = data.title.toLowerCase().replace(/\s+/g, '-');
              return(
                <Route key={index} path={`/projects/${route}`} element={<Main title={route} />} />
              )
            })
          }
          </Routes>
      </div>
    </section>
  )
}

export default Projects