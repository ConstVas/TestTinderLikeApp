import { Observable } from "rxjs";

export interface Entity {
    id: string;
}

export interface IProfile extends Entity { 
    id: string;
    photos: string[];
    name: string;
    description: string;
    hasLike: boolean;
}

export class Profile implements IProfile {
    id: string;
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
}

export abstract class IProfileService { 
    abstract getProfile(): Observable<IProfile>
    abstract getNewProfile():void
}