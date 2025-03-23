import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsDate,
  IsOptional,
} from 'class-validator';

export class CreateEventoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  local: string;

  @IsNotEmpty()
  @IsDate()
  data: Date;

  @IsNotEmpty()
  @IsInt()
  capacidade: number;

  @IsOptional()
  @IsInt()
  reservasAtuais: number;
}
