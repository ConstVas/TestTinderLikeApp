import { Observable } from "rxjs";
import { ProfileOptions, RandomUserResponce } from "./api.viewmodel";



export abstract class IProfileService { 
    abstract getProfile(options?: ProfileOptions): Observable<IProfile>
    abstract postAwnserAndGetProfile(awnser: boolean, options?: ProfileOptions): Observable<Profile>
} 
export interface IProfile { 
    id: string;
    gender: string;
    photos: string[];
    name: string;
    description: string;
    hasLike: boolean;
}

export class Profile implements IProfile {
    id: string;
    gender: string = '';
    photos: string[] = [];
    name: string = '';
    description: string = '';
    hasLike: boolean = false;
    constructor(id: string, photos: string[], name: string, description: string, hasLike: boolean) {
        this.id = id;
        this.photos = photos;
        this.name = name;
        this.description = description;
        this.hasLike = hasLike;
    }

    static randomUserResponceMapper(res: RandomUserResponce): Profile {
        let user = res.results[0];
        return new Profile(
            user.id.value,
            [user.picture.large, user.picture.medium, user.picture.thumbnail],
            `${user.name.first}  ${user.name.last}`,
            `${user.gender} ${user.location.country} ${user.location.city}`,
            Math.random() > 0.5 ? true : false)
    } 
}
