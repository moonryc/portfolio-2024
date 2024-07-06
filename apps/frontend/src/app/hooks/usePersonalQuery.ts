import { useAsync } from 'react-use';
import { environment } from '../../environments/environment';

type ContactInfo = {
  email: string;
  linkedIn: string;
  github: string
}

export type Project = {
  title: string;
  technologies: string[];
  description: string;
  photos: string[]
  link?: string;
}

type Projects = {
  [k in string]: Project
}

export type PersonalQuery = {
  aboutMe: string[];
  contactMe: ContactInfo
  technologies: string[]
  projects: Projects
}


export const usePersonalQuery = ()  => {

  const {value, loading} = useAsync<()=>Promise<PersonalQuery>>(async ()=>{
      const response = await fetch(`${environment.publicURL}/api/personal`, {
      })
      return await response.json() as unknown as PersonalQuery
  },[])

  return {value, loading}
}
