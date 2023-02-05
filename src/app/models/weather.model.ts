export interface WeatherData {
    base:       string;
    clouds:     Clouds;
    cod:        number;
    coord:      Coord;
    dt:         number;
    id:         number;
    main:       Main;
    name:       string;
    sys:        Sys;
    timezone:   number;
    visibility: number;
    weather:    Weather[];
    wind:       Wind;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    feels_like: number;
    grnd_level: number;
    humidity:   number;
    pressure:   number;
    temp:       number;
    temp_min:   number;
    temp_max:   number;
    sea_level:  number;
}

export interface Sys {
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}