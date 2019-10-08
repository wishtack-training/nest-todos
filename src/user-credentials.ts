import { ApiModelProperty } from "@nestjs/swagger";

export class UserCredentials {
  @ApiModelProperty()
  email: string;
  
  @ApiModelProperty()
  password: string;
}
