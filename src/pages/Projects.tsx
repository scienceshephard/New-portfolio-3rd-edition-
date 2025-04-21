import data from '../projects/projects_data.json';

const Projects = () => {
  
  return (
    <main className="h-full">
     <div className="flex flex-wrap w-[80%] mx-auto gap-[20px] h-full ">
        {
          data.map((projectData, index) =>{
            return(
              <div key={index} className="ring-2 rounded-3xl py-[20px] px-[6px]  flex flex-col my-auto w-[30%] ">
                <img src={projectData.image_source} alt={projectData.image_description} className="w-1/2 h-auto" />
                <span className="text-left  font-bold">{projectData.title}</span>
                <p className="text-lg">{projectData.about} <a href={projectData.project_link} target='_blank' className="text-blue-500">View Project</a></p>
              </div>
            )
          })
        }
     </div>
    </main>
  )
}

export default Projects