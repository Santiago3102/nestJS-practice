import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { STATES } from '../../constants/states';

export class ProjectDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @IsNotEmpty()
  @IsEnum(STATES)
  state: STATES;
}

export class ProjectUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  duration: number;

  @IsOptional()
  @IsEnum(STATES)
  state: STATES;
}
