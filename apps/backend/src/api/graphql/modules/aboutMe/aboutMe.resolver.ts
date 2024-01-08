import { Query, Resolver } from 'type-graphql';


@Resolver()
export class AboutMeResolver {
  constructor() {}

  @Query(()=>String)
  public aboutMe(){
    return "This is about me text that was retrieved from the backend"
  }
}
