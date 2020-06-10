export interface CoordinatesData {
  lat: number;
  lon: number;
}

class Coordinates {
  readonly lat: number;
  readonly lon: number;

  constructor({ lat, lon }: CoordinatesData) {
    this.lat = lat;
    this.lon = lon;
  }
}

export interface WeatherMainData {
  temp: number;
  pressure: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
}

class WeatherMain {
  readonly temp: number;
  readonly pressure: number;
  readonly humidity: number;
  readonly temp_max: number;
  readonly temp_min: number;

  constructor({
    temp,
    pressure,
    humidity,
    temp_max,
    temp_min,
  }: WeatherMainData) {
    this.temp = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.temp_max = temp_max;
    this.temp_min = temp_min;
  }
}

export interface WeatherSysData {
  country: string;
}

export interface WeatherData {
  coord: CoordinatesData;
  main: WeatherMainData;
  name: string;
  sys: WeatherSysData;
}

class Weather {
  readonly coordinates: Coordinates;
  readonly main: WeatherMain;
  readonly cityName: string;
  readonly country: string;

  constructor({ coord, main, name, sys }: WeatherData) {
    this.coordinates = new Coordinates(coord);
    this.main = new WeatherMain(main);
    this.cityName = name;
    this.country = sys.country;
  }
}

export default Weather;
