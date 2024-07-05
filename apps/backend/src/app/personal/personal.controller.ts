import { Controller, Get } from '@nestjs/common';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {

  constructor(
    readonly personalService: PersonalService
  ) {}

  @Get()
  data(){
    return {
      aboutMe: this.personalService.aboutMe(),
      contactMe: this.personalService.contactInfo(),
      technologies: this.personalService.technologies(),
      projects: this.personalService.projects()
    }
  }

}
