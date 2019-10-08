import { ApiModelProperty } from '@nestjs/swagger';
export class Todo {
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  title: string;
}
