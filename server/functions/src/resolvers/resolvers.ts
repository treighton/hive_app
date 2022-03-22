import admin from '../database/database';

type InspectionSingle = {
    id: string;
}

type InspectionArgs = {
    input: {
        id: string;
        date: string;
        hiveId: number;
        hiveWeight: string;
        workerPopulation: string;
        layingPattern: string;
        eggsPresent: boolean;
        larvaPresent: boolean;
        cappedBrood: boolean;
        queenPresent: boolean;
        hiveTempermant: string;
        honeyStores: string;
        pollenStores: string;
        odor: string;
        hiveBeetles: boolean;
        varroaSymptoms: boolean;
        varroaCount: string;
        superAdded: boolean;
        superRemoved: boolean;
        addedExcluder: boolean;
        notes: string;
    }
}

const resolvers = {
    Query: {
        inspections: async ():Promise<void | any[]> => {
            const insp = await admin.firestore().collection("test").get()
            return insp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
        },
        inspection: async (
                parent:undefined, args:InspectionSingle
            ):Promise<void | any> => {
            const {id} = args
            const docRef = await admin.firestore().collection("test").doc(id)
            const doc = await docRef.get()
            return {
                id: doc.id,
                ...doc.data()
            }
        }
    },
    Mutation: {
        addInspection: async (
            parent: undefined,
            args: InspectionArgs
            ):Promise<void | any> => {
            const {hiveId, hiveWeight} = args.input
            const insp = await admin.firestore().collection("test").add({
                date: new Date().toISOString(),
                hiveId,
                hiveWeight
            })
            return {
                id: insp.id,
                hiveId,
                hiveWeight
            }
        }
    }
}

export {resolvers};