import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
}
