import { Module } from '@nestjs/common';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentController } from '../student/student.controller';

/* this is the root of the application */
@Module({
  imports: [],
  /* controllers need to be know so that nest know how to handle them */
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [],
})
export class AppModule {}
