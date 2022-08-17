import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Tradele } from "../Tradele";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Tradele /> in 6 guesses.
        </div>
        <div>
          What exactly am I trying to guess? Each day you&apos;ll see a
          different treemap of the exports for a particular country. Each
          rectangle represents the share of a given product proportional to its
          percentage of exports for that country.
        </div>
        <div>Each guess must be a valid country, territory, ...</div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess and the target country.
        </div>
      </div>
      <div className="space-y-3 border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chile",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">Chile</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target country, the target country is in the North-East direction
            and you have a only 32% of proximity because it&apos;s quite far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finland",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">Finland</span> is getting
            closer! {formatDistance(3206000, settingsData.distanceUnit)} away,
            South-East direction and 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Lebanon",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Lebanon</span>, is
            the correct country! Congrats! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Tradele /> will be available every day!
      </div>
      <div className="space-y-3 border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">About distance</div>
        <div>
          The distances displayed correspond to the distances between the
          selected and the target territory centers.
        </div>
        <div>
          For instance, the computed distance between United States and Canada
          is around {formatDistance(2_260_000, settingsData.distanceUnit)} even
          if they have a common border.
        </div>
      </div>
      <div className="space-y-3 border-b-2 border-gray-200 pb-3 mb-3">
        <Tradele /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>{" "}
        which itself was <span className="font-bold">heavily</span> inspired by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 pb-3">
        <div>
          Made by{" "}
          <a
            className="underline"
            href="https://twitter.com/ximoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ximoes
          </a>
          . Source code on{" "}
          <a
            className="underline"
            href="https://github.com/alexandersimoes/tradle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </div>
        <div>
          <a
            className="underline"
            href="https://oec.world"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about trade data on the OEC! 🌎
          </a>
        </div>
      </div>
    </Panel>
  );
}
