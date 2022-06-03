import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { ProfileOptions, RandomUserResponce } from "./viwemodels/api.viewmodel";
import { IProfile, IProfileService, Profile } from "./viwemodels/profile.viwemodel";

@Injectable()
export class ApiProfileService implements IProfileService {

    getApiUrl(url: string, options?: ProfileOptions) {
        return `${environment.apiUrl}/${url}${options ? options.toString() : ''}`;
    }
    
    constructor(public http: HttpClient) {
    }
 

    getProfile(options: ProfileOptions = new ProfileOptions()): Observable<Profile> {
        return this.http.get<RandomUserResponce>(this.getApiUrl('', options), {responseType: 'json'}).pipe(
            catchError(val => of(val)),
            map((res: RandomUserResponce) => Profile.randomUserResponceMapper(res))
        )
    }

    postAwnser(awnser: boolean): Observable<IProfile> {
        return this.http.post<IProfile>(this.getApiUrl(''), awnser, {responseType: 'json'}).pipe(
            catchError(val => of(val))
        )
    }

    postAwnserAndGetProfile(awnser: boolean, options: ProfileOptions = new ProfileOptions()): Observable<Profile> {
        return this.postAwnser(awnser).pipe(
            switchMap(() => this.getProfile(options))
        )
    }
}