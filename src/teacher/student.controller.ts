import { Controller, Get, Param, Put } from '@nestjs/common';

/* when you have many endpoint text that repeat themself to a point you have make another controller to:
    - manage the size 
    - make the code dryer. 
    - cleans up the files
*/
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getstudentByTeacherId(@Param('teacherId') teacherId: string) {
    return `Get teacher by id: ${teacherId}`;
  }

  @Put('/:studentId')
  updateTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update student ${studentId} by a specific teacher ${teacherId}.`;
  }
}
