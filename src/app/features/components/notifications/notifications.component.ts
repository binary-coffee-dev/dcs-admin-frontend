import {Component, OnInit} from '@angular/core';

import {Store} from "@ngxs/store";

import {Notification, NotificationType} from "../../../core/redux/models";
import {NotificationState} from "../../../core/redux/states";
import {CloseNotificationAction} from "../../../core/redux/actions";

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    notifications: Notification[] = [];

    notificationsMap: Set<number> = new Set<number>();

    constructor(private store: Store) {
    }

    ngOnInit() {
      this.store.select(NotificationState.notifications)
          .subscribe(notifications => {
            notifications
                .filter(not => !this.notificationsMap.has(not.id))
                .forEach(not => this.startNotification(not.id));
            this.notifications = notifications;
          });
    }

    startNotification(id) {
        this.notificationsMap.add(id);
        setTimeout((id: number, notificationsMap: Set<number>, closeNotification: Function) => {
            closeNotification(id);
            notificationsMap.delete(id);
        }, 2000, id, this.notificationsMap, this.closeNotification.bind(this));
    }

    closeNotification(id: number) {
        this.store.dispatch(new CloseNotificationAction(id));
    }

}
