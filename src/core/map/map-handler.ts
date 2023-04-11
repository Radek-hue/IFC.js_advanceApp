import { MapScene } from "./map-scene";

export const mapHandler = {
    viewer: null as MapScene | null,

    start(container: HTMLDivElement) {
        if (!this.viewer) {
            console.log('sudaoidj');
            this.viewer = new MapScene(container)
        }
       
    },


    remove(){
        if(this.viewer) {
            console.log('remove map')
            this.viewer.dispose();
            this.viewer = null;
       }
    },
}