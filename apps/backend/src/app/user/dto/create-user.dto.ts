import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of a user',
    type: String,
    example: 'Gusatvo',
  })
  name: string;

  @ApiProperty({
    description: 'The aboutMe of a user',
    type: String,
    example: 'I am a software developer',
  })
  aboutMe: string;
}
