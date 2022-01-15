import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  /* to use a another module stuff you have to link to that module */
  imports: [StudentModule],
  /* controllers need to be know so that nest know how to handle them */
  controllers: [TeacherController, StudentTeacherController],
  /* you have to the .module.ts about the provider so that nestjs can handle the service
  - this is like the angular providers
  - to be able to inject the provider in the controller you have to provide it in the module.ts
  */
  providers: [TeacherService],
})

/* NestModule is needed add a middleware */
// implements NestModule
export class TeacherModule {}
