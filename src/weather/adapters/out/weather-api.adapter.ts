import { Injectable } from "@nestjs/common";
import { Weather } from "src/weather/domain/weather";
import { WeatherService } from "src/weather/domain/weather.service";
import { HttpService } from "src/weather/infrastructure/http/http.service";
import { WeatherResponseDTO } from "./dtos/weather-response.dto";

@Injectable()
export class WeatherApiAdapter implements WeatherService {
  constructor(private readonly httpService: HttpService) { }

  async getWeather(city: string): Promise<Weather> {
    const response = await this.httpService.get<WeatherResponseDTO>
      (`${process.env.API_URL}current.json?key=${process.env.API_TOKEN}&q=${city}`)

    return new Weather(
      city,
      response?.data?.current?.temp_c,
      response?.data?.current?.condition?.text,
      new Date(),
    )
  }
}
