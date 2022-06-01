import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, concatAll, first, from, map, Observable, skip, switchMap, take, tap } from "rxjs";
import { ArrayHelper } from "./array-helper";
import { mockProfileList } from "./mock/mock-profile-data";
import { IProfile, IProfileService, Profile } from "./profile.viwemodel";

@Injectable()
export class TestProfileService implements IProfileService {
    public profileList$!: Observable<IProfile>;
    private profileListLength: number = 0;
    private currentProfileIndex: number = 0;
    private profile: BehaviorSubject<number> = new BehaviorSubject(0);
    public observer$!: Observable<Profile>;

    constructor() {
        this.init()
        const higherOrder = this.profile.asObservable().pipe(
            map(index => this.getProfileObserver(index)
        ))
        this.observer$ = higherOrder.pipe(concatAll())
    }

    getProfileObserver(index: number): Observable<IProfile> {
        return this.profileList$.pipe(
            tap(() => {
                if (this.profileListLength - 1 === this.currentProfileIndex) {
                    this.currentProfileIndex = -1
                }
            }),
            skip(index),
            first()
        );
    }

    init() {
        this.profileList$ = from<IProfile[]>(ArrayHelper.shuffle<IProfile>(mockProfileList)); 
        this.profileListLength = ArrayHelper.shuffle<IProfile>(mockProfileList).length
    }

    getNewProfile():void {
        this.currentProfileIndex++
        this.profile.next(this.currentProfileIndex);
    }

    getProfile(): Observable<Profile> {
        return this.observer$
    } 
}