import { Injectable } from '@nestjs/common';
import { students, teachers } from 'src/db';
import { FindTeacherResponseDto } from './dto/teacher.dto';
@Injectable()
export class TeacherService {
  teachers = teachers;
  students = students;
  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === teacherId);
  }
}
