import { Country, countryISOMapping } from "./countries";
import { Direction } from "./geography";

export interface Guess {
  name: string;
  distance: number;
  direction: Direction;
  country?: Country;
}

export function loadAllGuesses(): Record<string, Guess[]> {
  const storedGuesses = localStorage.getItem("guesses");
  return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}

export function saveGuesses(dayString: string, guesses: Guess[]): void {
  const allGuesses = loadAllGuesses();
  localStorage.setItem(
    "guesses",
    JSON.stringify({
      ...allGuesses,
      [dayString]: guesses,
    })
  );
}

export function constructOecLink(country: Country) {
  const country3LetterCode = country?.code
    ? countryISOMapping[country.code].toLowerCase()
    : "";
  return `https://oec.world/en/profile/country/${country3LetterCode}`;
}
