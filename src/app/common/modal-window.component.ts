import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  // With "ViewChild" the #modalcontainer anchor is accessed to get the actual DOM element
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
