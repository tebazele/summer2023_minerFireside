import { AppState } from "../AppState.js";

function _calculateClickValue() {
  let clickValue = 1;
  AppState.upgrades.forEach((u) => {
    clickValue += u.multiplier * u.quantity;
  });
  AppState.clickValue = clickValue;
  return clickValue;
}
class SlimeService {
  mine() {
    AppState.slime += _calculateClickValue();
    console.log(AppState.slime);
  }

  getClickValue() {
    _calculateClickValue();
  }
}

export const slimeService = new SlimeService();
