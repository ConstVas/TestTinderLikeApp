import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile, IProfileService, Profile } from "./profile.viwemodel";


@Injectable()
export class ApiProfileService implements IProfileService {
    getNewProfile(): void {
        throw new Error("Method not implemented.");
    }
    getProfileList(): IProfile[] {
        throw new Error("Method not implemented.");
    }
    getProfile(): Observable<IProfile> {
        throw new Error("Method not implemented.");
    }
}