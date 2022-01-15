import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidateStudentMiddleware } from 'src/common/middleware/validateStudents.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
/* generate by nest g module student */
@Module({
  /* controllers need to be know so that nest know how to handle them */
  controllers: [StudentController],
  /* you have to the .module.ts about the provider so that nestjs can handle the service
  - this is like the angular providers
  - to be able to inject the provider in the controller you have to provide it in the module.ts
  */
  providers: [StudentService],

  /* you have to give permition for other modules to use this module stuff when the link to this module*/
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  /* configure allow to change the setting to the way we want
    - this is how you apply a middleware to a module
     */
  configure(consumer: MiddlewareConsumer) {
    //   for routers can be use to expecify a specific route
    consumer.apply(ValidateStudentMiddleware).forRoutes({
      path: 'students/:studentsId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidateStudentMiddleware).forRoutes({
      path: 'students/:studentsId',
      method: RequestMethod.PUT,
    });
  }
}
