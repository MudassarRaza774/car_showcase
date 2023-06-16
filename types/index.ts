import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
};

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: (manufacture: string) => void;
};

export type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CarCardProps = {
  car: CarProps;
};

export type CarDetailsProps = {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
};

export type FilterProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};

type optionsProps = {
  title: string;
  value: string;
};

export type CustomFilterProps = {
  title: string;
  options: optionsProps[];
};

export type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
};

type SearchParamsProps = {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
};

export type PageProps = {
  searchParams: SearchParamsProps;
};
