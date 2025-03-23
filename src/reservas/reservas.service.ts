import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReservasRepository } from 'src/core/repositories/reservas.repository';
import { EventoRepository } from 'src/core/repositories/evento.repository';
import { CreateReservaDto } from './dto/createReserva.dto';

@Injectable()
export class ReservasService {
  constructor(
    private eventoRepository: EventoRepository,
    private reservaRepository: ReservasRepository,
  ) {}

  async criarReserva(dados: any): Promise<CreateReservaDto> {
    const evento = await this.eventoRepository.findOne({
      where: { id: dados.eventoId },
    });

    if (!evento) throw new Error('Evento não encontrado');

    if (evento.reservasAtuais >= evento.capacidade) {
      throw new Error('Capacidade máxima atingida');
    }

    evento.reservasAtuais += 1;
    await this.eventoRepository.save(evento);

    const reserva = this.reservaRepository.create(dados);

    await this.reservaRepository.save(reserva);
    return;
  }
}
