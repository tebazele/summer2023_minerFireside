import { SlimeController } from "./controllers/SlimeController.js";
import { UpgradesController } from "./controllers/UpgradesController.js";

export const router = [
  {
    path: "",
    controller: [SlimeController, UpgradesController],
    view: "",
  },
  // {
  //   path: '#/about',
  //   controller: [AboutController, ValuesController],
  //   view: AboutView
  // }
];
