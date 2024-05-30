import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeatherEntity } from "./infrastructure/database/entities/weather.entity";
import { GetAndSaveWeatherUseCase } from "./domain/usecases/get-and-save-weather.usecase";
import { WeatherController } from "./controllers/weather.controller";
import { HttpModule } from "./infrastructure/http/htt.module";
import { TypeORMWeatherRepository } from "./adapters/out/typeorm-weather-repository";
import { WeatherApiAdapter } from "./adapters/out/weather-api.adapter";
import { WeatherService } from "./domain/weather.service";
import { WeatherRepository } from "./domain/weather.repository";

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([WeatherEntity]),
  ],
  controllers: [WeatherController],
  providers: [
    {
      provide: WeatherRepository,
      useClass: TypeORMWeatherRepository,
    },
    {
      provide: WeatherService,
      useClass: WeatherApiAdapter,
    },
    GetAndSaveWeatherUseCase,
  ],
  exports: [GetAndSaveWeatherUseCase],
})
export class WeatherModule { }
