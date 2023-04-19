import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Action } from "../../middleware/actions";
import { Building, Model } from "../../types";
import { Events } from "../../middleware/event-handler";
import { doc, getFirestore, deleteDoc, updateDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import {deleteObject, getStorage, ref, uploadBytes} from "firebase/storage"
import { buildingHandler } from "../building/building-handler";

export const databaseHandler = {
    Login: (action: Action) => {
    const auth =getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    },

    logout: () => {
        const auth = getAuth();
        signOut(auth);
    },

    delateBuilding: async (building: Building, events: Events) => {
        const app = getApp(); 
        const dbInstance = getFirestore(getApp());
        await deleteDoc(doc(dbInstance, "buildings", building.uid))
        const storageInstance = getStorage();
        const ids: string[] = [];
        for(const model of building.models) {
            const fileRef = ref(storageInstance, model.id);
            await deleteObject(fileRef);
            ids.push(model.id);
            
        }
        await buildingHandler.delateModels(ids);
        events.trigger({type: "CLOSE_BUILDING"});
    },

    updateBuilding: async (building: Building) => {
        const dbInstance = getFirestore(getApp());
        await updateDoc(doc(dbInstance, "buildings", building.uid), {
            ...building,
        });
    },

   uploadModel: async(model: Model, file: File, building: Building, events: Events) => {
        const appInstance = getApp();
        const storageInstance =getStorage(appInstance);
        const fileRef = ref(storageInstance, model.id);
        await uploadBytes(fileRef, file);
        await buildingHandler.refreshModels(building);
        events.trigger({type: "UPDATE_BUILDING", payload: building})

   },
   delateModel: async (model: Model, building: Building, events: Events) => {
    const appInstance = getApp();
    const storageInstance =getStorage(appInstance);
    const fileRef = ref(storageInstance, model.id);
    await deleteObject(fileRef)
    await buildingHandler.delateModels([model.id]);
    await buildingHandler.refreshModels(building);
    events.trigger({type: "UPDATE_BUILDING", payload: building})

   }
};

