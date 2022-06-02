import { Injectable } from "@angular/core";
import { BehaviorSubject, concatAll, first, from, map, Observable, of, skip } from "rxjs";
import { ArrayHelper } from "src/app/helpers/array-helper";
import { mockProfileList } from "./mock/mock-profile-data";
import { IProfile, IProfileService, Profile } from "./viwemodels/profile.viwemodel";

@Injectable()
export class TestProfileService implements IProfileService {
    public profileList$!: Observable<IProfile>;
    private profileListLength: number = mockProfileList.length;
    private currentProfileIndex: number = 0;
    private profile$: BehaviorSubject<number> = new BehaviorSubject(0);
    public observer$!: Observable<Profile>;

    constructor() {
        this.init()
        this.observer$ = this.profile$.asObservable().pipe(
            map(() => this.getProfileObserver()
        )).pipe(concatAll());
    }

    init() {
        this.profileList$ = of(from<IProfile[]>(ArrayHelper.shuffle<IProfile>(mockProfileList))).pipe(concatAll());
    }
 
    getProfileObserver(): Observable<IProfile> {
        if (this.currentProfileIndex >= this.profileListLength) {
            this.init();
            this.currentProfileIndex = 0;
        }
        return this.profileList$.pipe(
            skip(this.currentProfileIndex),
            first()
        );
    }

    getNewProfile():void {
        this.currentProfileIndex++
        this.profile$.next(this.currentProfileIndex);
    }

    getProfile(): Observable<Profile> {
        return this.observer$
    } 
}