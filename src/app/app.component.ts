import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MessagingService} from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-push-notify';
  message: any;

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
}
