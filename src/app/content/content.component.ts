import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { IProfile, IProfileService } from './services/viwemodels/profile.viwemodel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  public profile$!: Observable<IProfile>
  public showModal: boolean = false;
  public hasLike: boolean = false;

  answerEvent: EventEmitter<{clientLike: boolean, profileLike: boolean}> = new EventEmitter();
  closeModalEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(public profileService: IProfileService) {
    this.profile$ = this.profileService.getProfile();
  } 
  
  ngOnInit(): void {  
    this.subscribe();
  }

  subscribe() {
    this.answerEvent.asObservable().pipe(
      switchMap((event: {clientLike: boolean, profileLike: boolean}) => {
        if(event.clientLike && event.profileLike) {
          this.showOverlay(true)
          return this.closeModalEvent.asObservable()
        } else {
          return of(true)
        }
      })  
    ).subscribe(() => {
      this.profileService.getNewProfile()
    })
  }

  like(hasLike: boolean) {
    this.answerEvent.emit({clientLike: true, profileLike: hasLike})
  }

  dislike(hasLike: boolean) {
    this.answerEvent.emit({clientLike: false, profileLike: hasLike})
  }

  showOverlay(show: boolean) {
    this.showModal = show
  }

  closeModal() {
    this.closeModalEvent.emit()
    this.showOverlay(false);
  }

  ngOnDestroy(): void {
    this.answerEvent.unsubscribe()
  }
}
