import { User } from "firebase/auth";
import { MapScene } from "./map-scene";
import { Events } from "../../middleware/event-handler";

export const mapHandler = {
  viewer: null as MapScene | null,

  async start(container: HTMLDivElement, user: User, events: Events) {
    if (!this.viewer) {
      this.viewer = new MapScene(container, events);
      await this.viewer.getAllBuildings(user);
    }
  },

  remove() {
    if (this.viewer) {
      this.viewer.dispose();
      this.viewer = null;
    }
  },

  async addBuilding(user: User) {
    if (this.viewer) {
      await this.viewer.addBuilding(user);
    }
  },
};
