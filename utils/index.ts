import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { model, year, limit, manufacturer, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "068580f920msh9a262f5aa4403fdp1da90djsnbf3dd836bba6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}&make=${manufacturer}`,
    { headers }
  );

  return await response.json();
}

export const calculateCarRent = (city_mpg: number, year: number): string => {
  const basePricePerDay = 50;
  const milageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRagte = city_mpg * milageFactor;
  const ageRage = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRagte + ageRage;
  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const { make, model, year } = car;
  console.log("model", model);
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
