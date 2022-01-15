import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  UpdateStudentDto,
} from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

/* when you have many endpoint text that repeat themself to a point you have make another controller to:
    - manage the size 
    - make the code dryer. 
    - cleans up the files
*/
/* because in the end you are dealing with student data (see db) it's a good idea to use student dto and service */
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudentByTeacherId(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): FindStudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId, body);
  }
}
