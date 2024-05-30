import { Weather } from "./weather";

export abstract class WeatherService {
  abstract getWeather(city: string): Promise<Weather>;
}
