/* controller handles 
- the endpoint path, and
- capturing the user input, and
-  returning the value
They need to be imported into the module.ts has controllers for them to work.
 */

import { Controller, Get, Param, Post, Put } from '@nestjs/common';

/* you generate a controller by giving a class the controller decorator  */
/* passing a string to the controller will join that string to all other endpoints that this controller handles */
@Controller('students')
export class StudentController {
  /* identify which methods are a endpoint by using a endpoint decorator */
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  /* in express you _ to get the data 
  use req,res in the method arguments
  const {studentId} = req.params;

  in nest you can:
  - @Param() params: { studentId: string }
  - const { studentId } = params;
  - return `Get student by id: ${studentId}`;

  or event better we can skip the deconstructing step and just use the params('studentId')
   */
  getStudentById(@Param() params: { studentId: string }) {
    const { studentId } = params;
    return `Get student by id: ${studentId}`;
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update student';
  }
}
