import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/db';

/* you need injectable, and NestMiddleware to make a middleware 
- you apply the middleware by going to the module.ts file and editing the class
*/
@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {
  /* use method is require for middlewares */
  use(req: Request, res: Response, next: NextFunction) {
    const { studentId } = req.params;
    const studentExists = students.some((student) => student.id === studentId);
    if (!studentExists) {
      /* syntax for throwing an error in nest
      - HttpException can also be use
       */
      throw new BadRequestException(
        `Student with id ${studentId} does not exist`,
      );
    }
    next();
  }
}
