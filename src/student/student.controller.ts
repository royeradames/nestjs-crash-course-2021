/* controller handles 
- the endpoint path, and
- capturing the user input, and
-  returning the value
They need to be imported into the module.ts has controllers for them to work.
 */

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
/* you generate a controller by giving a class the controller decorator  */
/* passing a string to the controller will join that string to all other endpoints that this controller handles */
@Controller('students')
export class StudentController {
  /* identify which methods are a endpoint by using a endpoint decorator */
  @Get()
  getStudents(): FindStudentResponseDto[] {
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

  or event better we can skip the deconstructing step and just use the params('studentId') studentId : string;
   */
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get student by id: ${studentId}`;
  }

  @Post()
  /* similar to params
  @Body() body: { name: string; teacher: string }
    console.log(body); //{ name: 'Ben Andro', teacher: '9c9324e8-b656-11eb-8529-0242ac130003' }
    //* but typically we don't deconstructing the body so we can use DTOs

    Defining the types or descunstructing the body has problems
        @Body()
        body: {
        name: string;
        teacher: string;
        },
        @Body('name') name: string,
        You will have to update the above code and inside the method everytime the data changes.
    //* the data may consistantly change 
    //* The most clean way to do this is to use DTOs
    //* DTOs is for the incoming body and the returning value
    params are typically defined the type in place
   */
  createStudent(
    @Body()
    body: CreateStudentDto,
  ): StudentResponseDto {
    return `Create student ${JSON.stringify(body)}`;
  }

  /* you want to add DTOs to:
  - body
  - return value of the method
   */
  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update student ${studentId} with ${JSON.stringify(body)}`;
  }
}
