import data from './projects_data.json'

interface MainProps {
    title: string;
}

export const Main = ({title}: MainProps) => {
  
    const projectData = data.find( p=> p.title.toLowerCase().replace(/\s+/g, '-') === title)

    return (
        <>
            <h1>{title}</h1>
            <img src={projectData?.image_source} alt={projectData?.image_description} />
            <p>{projectData?.about}. Here is the link to the app: {projectData?.project_link}</p>

        </>
  )
}
