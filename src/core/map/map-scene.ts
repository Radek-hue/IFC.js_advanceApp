import * as OBC from "openbim-components";
import { MAPBOX_KEY } from "../../config";
import { GisBuilding, GisParameters } from "../../types";
import * as THREE from "three";
import * as MAPBOX from 'mapbox-gl'

export class MapScene {
    private components = new OBC.Components();
    private readonly style = 'mapbox://style/mapbox/light-v10';

    constructor(container: HTMLDivElement) {
        const config = this.getConfig(container);
        this.initializeComponent(config);
        this.createScene();
      }
    dispose() {
        this.components.dispose();
        (this.components as any) = null;
    }
    // dodawanie sceny
    private createScene() {
        const scene = this.components.scene.get();
        scene.background = null;
        const dirLight1 = new THREE.DirectionalLight(0xffffff);
        dirLight1.position.set(0, -70, 100).normalize();
        scene.add(dirLight1);
        const dirLight2 = new THREE.DirectionalLight(0xffffff);
        dirLight2.position.set(0, 70, 100).normalize();
        scene.add(dirLight2);
    }

    private initializeComponent(config: GisParameters) {
        this.components.scene = new OBC.SimpleScene(this.components);
        this.components.camera = new OBC.MapboxCamera();
        this.components.renderer = this.createRender(config);
        this.components.init();
    }

    private createRender(config: GisParameters) {
        const map = this.createMap(config);
        const coords = this.grtCoordinates(config);
        return new OBC.MapboxRenderer(this.components, map, coords)
    }

    private grtCoordinates(config: GisParameters) {
        const merc = MAPBOX.MercatorCoordinate;
        return merc.fromLngLat(config.center, 0);
    }

    private createMap(config: GisParameters) {
        return new MAPBOX.Map({
            ...config,
            style: this.style,
            antialias: true,

        });
    }
    private getConfig(container: HTMLDivElement) {
        const center = [19.923763, 50.064478] as [number, number];
        return{
            container,
            accessToken: MAPBOX_KEY,
            zoom: 17,
            pitch: 60,
            bearing: -40,
            center,
            buildings: [],
        };
    }
};