export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

/* you may want to have the response of put and create be different from getting all */
export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
}

/* note that post and put request tend to have different requirements has the project evolves */

export class UpdateStudentDto {
  name?: string;
  teacher?: string;
}
