import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalController } from './personal/personal.controller';
import { PersonalService } from './personal/personal.service';
import {join} from "path"

@Module({
  imports: [
    //Serves React static files from the frontend directory
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname,"assets", "frontend"),
        renderPath: "/"
      },
    ),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, "assets"),
        serveRoot: "/assets",
        exclude:["frontend"],
        serveStaticOptions: {index: false}
      },
      ),
  ],
  controllers: [
    AppController,
    PersonalController,
  ],
  providers: [AppService, PersonalService],
})
export class AppModule {}


console.log(join(__dirname, "assets"))
