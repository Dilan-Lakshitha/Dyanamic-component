import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container: any;

  constructor(private resolver:ComponentFactoryResolver){}
}
