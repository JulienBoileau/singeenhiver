import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  constructor(private modalService: NgbModal) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent); // Ouvrir la fenêtre modale
    modalRef.componentInstance.videoSrc = "../../assets/video_singe.mp4"; // Transférer la source de la vidéo au composant modal
  }

  ngOnInit(): void {}

}
