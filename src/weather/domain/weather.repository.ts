import { Weather } from "./weather";

export abstract class WeatherRepository {
  abstract save(weather: Weather): Promise<Weather>;

}
