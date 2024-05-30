import { Controller, Get, Query } from "@nestjs/common";
import { GetAndSaveWeatherUseCase } from "../domain/usecases/get-and-save-weather.usecase";

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly getAndSaveWeatherUseCase: GetAndSaveWeatherUseCase,
  ) { }

  @Get()
  async getWeather(@Query('city') city: string) {
    return this.getAndSaveWeatherUseCase.execute(city);
  }
}
