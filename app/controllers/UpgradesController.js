import { AppState } from "../AppState.js";
import { upgradesService } from "../services/UpgradesService.js";
import { setHTML } from "../utils/Writer.js";

function _drawUpgrades() {
  let template = "";
  AppState.upgrades.forEach((u) => {
    template += u.upgradeCard;
  });
  setHTML("upgrades-container", template);
}

export class UpgradesController {
  constructor() {
    console.log("hello from the upgrades controller");
    _drawUpgrades();
    AppState.on("upgrades", _drawUpgrades);
  }

  buyUpgrade(upgradeName) {
    console.log(upgradeName);
    upgradesService.buyUpgrade(upgradeName);
  }
}
