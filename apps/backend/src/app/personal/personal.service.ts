import { Injectable } from '@nestjs/common';
import { aboutMe, contactInfo, projects } from './personal.data';
import {readdir, readdirSync} from "fs"
import { join } from 'path';

@Injectable()
export class PersonalService {

  aboutMe(){
    return aboutMe
  }

  contactInfo(){
    return contactInfo
  }

  technologies(){
    return readdirSync(join(__dirname, "assets/technologies"));
  }

  projects(){
    return projects
  }
}
