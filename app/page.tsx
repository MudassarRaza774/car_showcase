import { CustomFilter, Hero, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { PageProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import type { CarProps } from "@/types";

export default async function Home({ searchParams }: PageProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "toyota",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {allCars.length ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">
              Oops! No Results {allCars.message}
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
