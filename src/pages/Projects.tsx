import { Link, Outlet } from 'react-router';
import projectData from '../components/projects/projects_data.json';

const Projects = () => {

  // const data= projectData.find( p=> p.title.toLowerCase().replace(/\s+/g, '-') === title)
  return (
    <section className="h-full flex ">
      <ul>
      {
            projectData.map((data, index)=>{
              const routeTitle = data.title.toLowerCase().replace(/\s+/g, '-');
              return(
                <li key={index} className="text-3xl text-white font-bold">
                  <Link to={`/projects/${routeTitle}`} className="hover:text-[var(--nav-text-hover-color)] hover:duration-[10] hover:delay-[100] hover:ease-in-out">{data.title}</Link>
                </li>
              )
            })
          }
      </ul>
      <Outlet />
    </section>
  )
}

export default Projects