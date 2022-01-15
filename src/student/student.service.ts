import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
/* you have to the .module.ts about the provider so that nestjs can handle the service */
/* here is where the return data is generated 
inside the methods you typically deal with database logic.
 */
@Injectable()
export class StudentService {
  /* get the mock db */
  private students = students;

  /* 
  - //* you can share the same name of the method from the controller.
  - //* the return and arugments type is the same has the controller
   */
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(body: CreateStudentDto): FindStudentResponseDto {
    const student = {
      id: uuid(),
      ...body,
    };
    this.students.push(student);
    return student;
  }

  updateStudent(studentId: string, body: UpdateStudentDto): StudentResponseDto {
    const student = this.students.find((student) => student.id === studentId);
    if (!student) {
      throw new Error('Student does not exist');
    }
    const updatedStudent = {
      ...student,
      ...body,
    };
    this.students = this.students.map((student) =>
      student.id === studentId ? updatedStudent : student,
    );
    return updatedStudent;
  }

  getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((teacher) => teacher.teacher === teacherId);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
    body: UpdateStudentDto,
  ): FindStudentResponseDto {
    const updatedStudent = this.students.map((student) => {
      if (student.id === studentId && student.teacher === teacherId) {
        return {
          ...student,
          ...body,
        };
      }
      return student;
    });
    this.students = updatedStudent;
    return this.students.find(
      (student) => student.id === studentId && student.teacher === teacherId,
    );
  }
}
