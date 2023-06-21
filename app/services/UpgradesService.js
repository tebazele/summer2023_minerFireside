import { AppState } from "../AppState.js";
import { slimeService } from "./SlimeService.js";

class UpgradesService {
  buyUpgrade(upgradeName) {
    let foundUpgrade = AppState.upgrades.find((u) => u.name == upgradeName);
    console.log(foundUpgrade);
    if (AppState.slime >= foundUpgrade.price) {
      AppState.slime -= foundUpgrade.price;
      foundUpgrade.quantity++;
      slimeService.getClickValue();
      AppState.emit("upgrades");
    } else {
      window.alert("You don't have enough slime for that!");
    }
    // check if we have enough slime
    // decrease the slime
    // increase the appropriate upgrade's quantity
  }
}

export const upgradesService = new UpgradesService();
