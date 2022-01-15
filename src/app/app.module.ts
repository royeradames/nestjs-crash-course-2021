import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentController } from '../student/student.controller';

/* this is the root of the application */
@Module({
  imports: [],
  /* controllers need to be know so that nest know how to handle them */
  controllers: [StudentController, TeacherController, StudentTeacherController],
  /* you have to the .module.ts about the provider so that nestjs can handle the service 
  - this is like the angular providers 
  - to be able to inject the provider in the controller you have to provide it in the module.ts
  */
  providers: [StudentService, TeacherService],
})
export class AppModule {}
