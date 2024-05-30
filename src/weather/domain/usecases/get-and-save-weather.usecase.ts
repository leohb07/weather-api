import { Injectable } from "@nestjs/common";
import { WeatherService } from "../weather.service";
import { WeatherRepository } from "../weather.repository";
import { Weather } from "../weather";

@Injectable()
export class GetAndSaveWeatherUseCase {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly weatherRepository: WeatherRepository,
  ) { }

  async execute(city: string): Promise<Weather> {
    const weatherResponse = await this.weatherService.getWeather(city);

    const weather = new Weather(
      city,
      weatherResponse.temperature,
      weatherResponse.description,
      new Date(),
    );

    await this.weatherRepository.save(weather);
    return weather;
  }
}
