import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable, skip, switchMap, take } from "rxjs";
import { ArrayHelper } from "./array-helper";
import { mockProfileList } from "./mock/mock-profile-data";
import { IProfile, IProfileService, Profile } from "./profile.viwemodel";

@Injectable()
export class TestProfileService implements IProfileService {
    public profileList$!: Observable<IProfile>;
    private currentProfileIndex: number = 0;
    private profile: BehaviorSubject<number> = new BehaviorSubject(0);
    public observer$!: Observable<Profile>;

    constructor() {
        this.profileList$ = from<IProfile[]>(ArrayHelper.shuffle<IProfile>(mockProfileList));
        this.init()
    }

    init() {
        this.observer$ = this.profile.asObservable().pipe(
            switchMap(index => {
                console.log(index)
                return this.profileList$.pipe(
                    skip(index),
                    take(1)
                );
            })
        )
    }

    getNewProfile():void {
        this.currentProfileIndex++
        this.profile.next(this.currentProfileIndex);
    }

    getProfile(): Observable<Profile> {
        return this.observer$
    } 
}