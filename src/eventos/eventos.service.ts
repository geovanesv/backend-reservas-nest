import { Injectable } from '@nestjs/common';
import { EventoRepository } from '../core/repositories/evento.repository';
import { CreateEventoDto } from './dto/createEvento.dto';

@Injectable()
export class EventosService {
  constructor(private eventoRepository: EventoRepository) {}

  async criarEvento(dados: CreateEventoDto): Promise<any> {
    return this.eventoRepository.create(dados);
  }

  async listarEventos(): Promise<any[]> {
    return await this.eventoRepository.find();
  }

  async buscarEvento(id: number): Promise<any> {
    return await this.eventoRepository.findOne({ where: { id } });
  }

  async atualizarEvento(
    id: number,
    dados: Partial<CreateEventoDto>,
  ): Promise<any> {
    return await this.eventoRepository.update(id, dados);
  }

  async deletarEvento(id: string): Promise<void> {
    await this.eventoRepository.delete(id);
  }
}
