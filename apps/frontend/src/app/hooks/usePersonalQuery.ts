import { useAsync } from 'react-use';

type ContactInfo = {
  email: string;
  linkedIn: string;
  github: string
}

export type PersonalQuery = {
  aboutMe: string;
  contactMe: ContactInfo
  technologies: string[]
}


export const usePersonalQuery = ()  => {

  const {value, loading} = useAsync<()=>Promise<PersonalQuery>>(async ()=>{
      const response = await fetch("http://localhost:3000/api/personal", {
      })
      return await response.json() as unknown as PersonalQuery
  },[])

  return {value, loading}
}
