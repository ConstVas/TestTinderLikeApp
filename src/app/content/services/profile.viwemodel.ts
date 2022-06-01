import { Observable } from "rxjs";

export interface IProfile { 
    id: string;
    photos: string[];
    name: string;
    description: string;
    hasLike: boolean;
}

export interface ListResult<T> {
    items: T[],
    total: number
}
  
export class Profile implements IProfile {
    id!: string;
    photos: string[] = [];
    name: string = '';
    description: string = '';
    hasLike: boolean = false;
}

export abstract class IProfileService { 
    abstract getProfile(index: number): Observable<IProfile>
    abstract getNewProfile():void
}