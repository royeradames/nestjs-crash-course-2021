import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get teacher by id: ${teacherId}`;
  }
}
