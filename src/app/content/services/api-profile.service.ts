import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, concatAll, first, from, map, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { RandomUserResponce, Result } from "./viwemodels/api.viewmodel";
import { IProfile, IProfileService, Profile } from "./viwemodels/profile.viwemodel";


@Injectable()
export class ApiProfileService implements IProfileService {
    private profileListLength: number = 10;
    private gender: string = 'female'
    private url: string = environment.apiUrl;
    
    private profileList$!: Observable<Result>;
    private profile$: Subject<void> = new Subject<void>();
    private observer$!: Observable<Profile>;
    
    constructor(public http: HttpClient) {
        this.init();
        this.observer$ = this.profile$.asObservable().pipe(
            map(() => this.getProfileObserver()
        )).pipe(concatAll());
    }

    init() {
        this.profileList$ = this.http.get<RandomUserResponce>
        (`${this.url}?gender=${this.gender}&results=${this.profileListLength}`).pipe(
            map((x: RandomUserResponce) => from<Result[]>(x.results)),
          ).pipe(concatAll());
    }
    
    getProfileObserver(): Observable<IProfile> {
        return this.profileList$.pipe(
            first(),
            map((x: Result) => new Profile(
                x.id.value,
                [x.picture.large, x.picture.medium,x.picture.thumbnail],
                `${x.name.first}  ${x.name.last}`,
                `${x.dob.age}  ${x.gender} ${x.location.city}`,
                Math.random() > 0.5 ? true : false))
        );
    }

    getNewProfile(): void {
        this.profile$.next();
    }

    getProfile(): Observable<IProfile> {
       return this.observer$
    }


}