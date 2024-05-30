import { InjectRepository } from "@nestjs/typeorm";
import { Weather } from "src/weather/domain/weather";
import { WeatherRepository } from "src/weather/domain/weather.repository";
import { WeatherEntity } from "src/weather/infrastructure/database/entities/weather.entity";
import { Repository } from "typeorm";

export class TypeORMWeatherRepository implements WeatherRepository {
  constructor(
    @InjectRepository(WeatherEntity)
    private readonly weatherRepository: Repository<WeatherEntity>,
  ) { }

  async save(weather: Weather): Promise<Weather> {
    const response = this.weatherRepository.create(weather);
    return await this.weatherRepository.save(response);
  }
}
