import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {

  @Input() videoSrc: string | undefined; // Propriété pour recevoir la source de la vidéo

  constructor(public activeModal: NgbActiveModal) {}
}
