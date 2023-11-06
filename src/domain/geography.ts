import * as geolib from "geolib";
import { Country } from "./countries";

const MAX_DISTANCE_ON_EARTH = 20_000_000;

export type Direction = "S" | "W" | "NE" | "E" | "SE" | "SW" | "NW" | "N";

export function computeProximityPercent(distance: number): number {
  const proximity = Math.max(MAX_DISTANCE_ON_EARTH - distance, 0);
  const rounded = Math.round((proximity / MAX_DISTANCE_ON_EARTH) * 100);
  if (distance > 0 && rounded >= 100) {
    return 99;
  }
  return rounded;
}

export function generateSquareCharacters(
  proximity: number,
  theme: "light" | "dark"
): string[] {
  const characters = new Array<string>(5);
  const greenSquareCount = Math.floor(proximity / 20);
  const yellowSquareCount = proximity - greenSquareCount * 20 >= 10 ? 1 : 0;

  characters.fill("🟩", 0, greenSquareCount);
  characters.fill("🟨", greenSquareCount, greenSquareCount + yellowSquareCount);
  characters.fill(
    theme === "light" ? "⬜" : "⬜",
    greenSquareCount + yellowSquareCount
  );

  return characters;
}

export function getCompassDirection(
  guessedCountry: Country,
  country: Country
): Direction {
  const bearing = geolib.getRhumbLineBearing(guessedCountry, country);

  if (isNaN(bearing)) {
    throw new Error(
      "Could not calculate bearing for given points. Check your bearing function"
    );
  }

  switch (Math.round(bearing / 45)) {
    case 1:
      return "NE";
    case 2:
      return "E";
    case 3:
      return "SE";
    case 4:
      return "S";
    case 5:
      return "SW";
    case 6:
      return "W";
    case 7:
      return "NW";
    default:
      return "N";
  }
}

export function formatDistance(
  distanceInMeters: number,
  distanceUnit: "km" | "miles"
) {
  const distanceInKm = distanceInMeters / 1000;

  return distanceUnit === "km"
    ? `${Math.round(distanceInKm).toLocaleString("en-US")} km`
    : `${Math.round(distanceInKm * 0.621371).toLocaleString("en-US")} mi`;
}
