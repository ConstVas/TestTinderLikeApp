import { Entity } from "../content/services/viwemodels/profile.viwemodel";


export class ArrayHelper {
    public static shuffle<T extends Entity>(list: Array<T>): Array<T> {
        const newList = [...list];
        while(list[0].id == newList[0].id){
            newList.sort(() => Math.random() - 0.5);
        }
        return newList;
    }
}