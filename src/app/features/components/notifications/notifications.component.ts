import {Component, OnInit} from '@angular/core';
import {Notification, NotificationType} from "../../../core/redux/models";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  messages: Notification[] = [];

  notificationsMap: Set<number> = new Set<number>();

  constructor() { }

  ngOnInit() {
    this.messages.push({
      id: new Date().getTime(),
      title: 'This is an example of notification',
      type: NotificationType.danger
    } as Notification);

    this.startNotification(1);
  }

  startNotification(id) {
    this.notificationsMap.add(id);
    console.log('a', this.notificationsMap);
    setTimeout((id: number, notificationsMap: Set<number>) => {
      notificationsMap.delete(id);
      console.log('b', this.notificationsMap);
    }, 2000, id, this.notificationsMap);
  }

}
