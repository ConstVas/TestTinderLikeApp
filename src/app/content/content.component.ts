import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { IProfile, IProfileService } from './services/profile.viwemodel';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  public profile$!: Observable<IProfile>
  public showModal: boolean = false;
  public hasLike: boolean = false;

  answerEvent: EventEmitter<boolean> = new EventEmitter();
  closeModalEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(public profileService: IProfileService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {  
    this.profile$ = this.profileService.getProfile(0);
    this.profile$.subscribe(x => {
      // todo: убрать подписку и передавать параметр с шаблона
      this.hasLike = x.hasLike
      console.log(x)
    })
    this.answerEvent.asObservable().pipe(
      switchMap(like => {
        if(like && this.hasLike) {
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

  like() {
    this.answerEvent.emit(true)
  }

  dislike() {
    this.answerEvent.emit(false)
  }

  showOverlay(show: boolean) {
    this.showModal = show
  }

  closeModal() {
    this.closeModalEvent.emit()
    this.showOverlay(false);
  }
}
