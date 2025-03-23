import { IsString, IsNotEmpty, IsEnum, IsInt } from 'class-validator';

export enum StatusReservaEnum {
  PENDENTE = 'pendente',
  CONFIRMADA = 'confirmada',
  CANCELADA = 'cancelada',
}

export class CreateReservaDto {
  @IsNotEmpty()
  @IsString()
  cliente: string;

  @IsNotEmpty()
  @IsEnum(StatusReservaEnum)
  status: StatusReservaEnum;

  @IsNotEmpty()
  @IsInt()
  eventoId: number;
}
