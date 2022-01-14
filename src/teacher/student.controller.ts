import { Controller, Get, Put } from '@nestjs/common';

/* when you have many endpoint text that repeat themself to a point you have make another controller to:
    + manage the size 
    + make the code dryer. 
    + cleans up the files
*/
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getstudentByTeacherId() {
    return 'Get teacher by id.';
  }

  @Put('/:studentId')
  updateTeacher() {
    return 'Update student by a specific teacher.';
  }
}
