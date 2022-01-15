import { Module } from '@nestjs/common';
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
export class StudentModule {}
