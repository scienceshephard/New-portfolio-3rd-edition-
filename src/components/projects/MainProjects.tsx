import { useParams } from 'react-router-dom';
import data from './projects_data.json'

export const Main = () => {
    const {title} = useParams();
    const projectData = data.find( p => p.title.toLowerCase().replace(/\s+/g, '-') === title)
    // if(!projectData){
    //     return <h2>No project was found</h2>
    // }

    return (
        <>
            <h1>{projectData?.title}</h1>
            <img src={projectData?.image_source} alt={projectData?.image_description} />
            <p>{projectData?.about}. Here is the link to the app: {projectData?.project_link}</p>
        </>
  )
}
