import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { PersonalController } from './personal/personal.controller';
import { PersonalService } from './personal/personal.service';
import {join} from "path"

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "assets")
    })
  ],
  controllers: [
    AppController,
    ProjectsController,
    PersonalController,
  ],
  providers: [AppService, PersonalService],
})
export class AppModule {}
