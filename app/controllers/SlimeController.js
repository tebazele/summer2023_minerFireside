import { AppState } from "../AppState.js";
import { slimeService } from "../services/SlimeService.js";
import { setText } from "../utils/Writer.js";

function _drawSlime() {
  let slimeElement = document.getElementById("slime-count");
  let slimeSpan = slimeElement.querySelector("span");
  slimeSpan.innerText = AppState.slime.toFixed(0);
}

function _drawClickValue() {
  setText("click-value", AppState.clickValue);
}

export class SlimeController {
  constructor() {
    console.log("Hello from the slime controller");

    AppState.on("slime", _drawSlime);
    _drawSlime();
    _drawClickValue();
    AppState.on("clickValue", _drawClickValue);
  }

  mine() {
    slimeService.mine();
    console.log("Am I working?");
  }
}
