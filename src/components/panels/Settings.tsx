import React from "react";
import { useTranslation } from "react-i18next";
import { SettingsData } from "../../hooks/useSettings";
import { Panel } from "./Panel";

interface SettingsProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
  updateSettings: (newSettings: Partial<SettingsData>) => void;
}

export function Settings({
  isOpen,
  close,
  settingsData,
  updateSettings,
}: SettingsProps) {
  const { t } = useTranslation();

  return (
    <Panel title={t("settings.title")} isOpen={isOpen} close={close}>
      <div className="my-4">
        <div className="flex p-1">
          <select
            id="setting-distanceUnit"
            className="h-8"
            value={settingsData.distanceUnit}
            onChange={(e) =>
              updateSettings({ distanceUnit: e.target.value as "km" | "miles" })
            }
          >
            <option value="km">KM</option>
            <option value="miles">Miles</option>
          </select>
          <label
            className="flex-1 ml-2 flex items-center"
            htmlFor="setting-distanceUnit"
          >
            {t("settings.distanceUnit")}
          </label>
        </div>
        <div className="flex p-1">
          <input
            type="checkbox"
            id="setting-fuzzyDistance"
            checked={settingsData.fuzzyDistance}
            onChange={(e) =>
              updateSettings({ fuzzyDistance: e.target.checked })
            }
          />
          <label className="flex-1 ml-2" htmlFor="setting-fuzzyDistance">
            {t("settings.fuzzyDistance")}
          </label>
        </div>
      </div>
    </Panel>
  );
}
