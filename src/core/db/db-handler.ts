import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Action } from "../../middleware/actions";
import { Building } from "../../types";
import { Events } from "../../middleware/event-handler";
import { doc, getFirestore, deleteDoc, updateDoc } from "firebase/firestore";
import { getApp } from "firebase/app";


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
        const id = building.uid;
        const dbInstance = getFirestore(getApp());
        await deleteDoc(doc(dbInstance, "buildings", id));
        events.trigger({type: "CLOSE_BUILDING"});
    },

    updateBuilding: async (building: Building) => {
        const dbInstance = getFirestore(getApp());
        await updateDoc(doc(dbInstance, "buildings", building.uid), {
            ...building,
        });
    },
};