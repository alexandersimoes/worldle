import { DateTime, Interval } from "luxon";
import { useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import {
  computeProximityPercent,
  generateSquareCharacters,
} from "../domain/geography";
import { Guess } from "../domain/guess";
import React from "react";
import { SettingsData } from "../hooks/useSettings";

const START_DATE = DateTime.fromISO("2022-03-06");

interface ShareProps {
  guesses: Guess[];
  dayString: string;
  settingsData: SettingsData;
  hideImageMode: boolean;
  rotationMode: boolean;
  isAprilFools?: boolean;
}

export function Share({
  guesses,
  dayString,
  settingsData,
  hideImageMode,
  rotationMode,
  isAprilFools = false,
}: ShareProps) {
  const { t } = useTranslation();
  const { theme } = settingsData;

  const shareText = useMemo(() => {
    const guessCount =
      guesses[guesses.length - 1]?.distance === 0 ? guesses.length : "X";
    const dayCount = Math.floor(
      Interval.fromDateTimes(START_DATE, DateTime.fromISO(dayString)).length(
        "day"
      )
    );
    const difficultyModifierEmoji = hideImageMode
      ? " 🙈"
      : rotationMode
      ? " 🌀"
      : "";
    const title = isAprilFools
      ? `#Tradle #AprilFoolsDay #${dayCount} ${guessCount}/6${difficultyModifierEmoji}`
      : `#Tradle #${dayCount} ${guessCount}/6${difficultyModifierEmoji}`;

    const guessString = guesses
      .map((guess) => {
        const percent = computeProximityPercent(guess.distance);
        return generateSquareCharacters(percent, theme).join("");
      })
      .join("\n");

    return [title, guessString, "https://oec.world/en/tradle"].join("\n");
  }, [dayString, guesses, hideImageMode, rotationMode, theme, isAprilFools]);

  return (
    <CopyToClipboard
      text={shareText}
      onCopy={() => toast(t("copy"))}
      options={{
        format: "text/plain",
      }}
    >
      <button className="p-2 mt-4 rounded-lg font-semibold bg-oec-orange hover:bg-oec-yellow active:bg-oec-orange text-white w-full">
        {t("share")}
      </button>
    </CopyToClipboard>
  );
}
