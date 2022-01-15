import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
// import { StudentService } from 'src/student/student.service';
// import { StudentTeacherController } from 'src/teacher/student.controller';
// import { TeacherController } from 'src/teacher/teacher.controller';
// import { TeacherService } from 'src/teacher/teacher.service';
// import { StudentController } from '../student/student.controller';

/* this is the root of the application */
@Module({
  /* when you have other modules you can just import does modueles intead of importing all of your controllers, and providers in the root module */
  imports: [TeacherModule, StudentModule],
  // /* controllers need to be know so that nest know how to handle them */
  // controllers: [StudentController, TeacherController, StudentTeacherController],
  // /* you have to the .module.ts about the provider so that nestjs can handle the service
  // - this is like the angular providers
  // - to be able to inject the provider in the controller you have to provide it in the module.ts
  // */
  // providers: [StudentService, TeacherService],
})
export class AppModule {}
