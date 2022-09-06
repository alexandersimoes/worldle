import { csv } from "d3-fetch";
import { useEffect, useMemo, useState } from "react";
import seedrandom from "seedrandom";
import { countriesWithImage, Country } from "../domain/countries";

interface DateCountry {
  country: string;
  date: string;
}

export function useCountry(dayString: string): [Country, number, number] {
  const [forcedCountryCode, setForcedCountryCode] = useState("");
  const date = new Date(dayString);
  const currDate = `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`;

  useEffect(() => {
    csv("data.csv", (d) => {
      return { country: d.country, date: d.date };
    }).then((data) => {
      setForcedCountryCode(
        data.length
          ? (
              data.find((el) => el.date === currDate) as DateCountry
            )?.country.toUpperCase() || ""
          : ""
      );
    });
  }, [currDate]);

  const country = useMemo(() => {
    const forcedCountry =
      forcedCountryCode !== ""
        ? countriesWithImage.find(
            (country) => country.code === forcedCountryCode
          )
        : undefined;
    return (
      forcedCountry ??
      countriesWithImage.reverse()[
        Math.floor(seedrandom.alea(dayString)() * countriesWithImage.length)
      ]
    );
  }, [forcedCountryCode, dayString]);

  const randomAngle = useMemo(
    () => seedrandom.alea(dayString)() * 360,
    [dayString]
  );

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [country, randomAngle, imageScale];
}
