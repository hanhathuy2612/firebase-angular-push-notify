import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging: any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      {
        next: (token) => {
          console.log("Token: " + token);
        },
        error: (err) => {
          console.error('Unable to get permission to notify.', err);
        }
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
        // this.pushNotifyOnUserDesktop();
      });
  }

  pushNotifyOnUserDesktop() {
    Notification.requestPermission(function (permission) {
      if (window.Notification && permission === "granted") {
        let i = 0;
        // On utilise un intervalle, car certains navigateurs (dont Firefox)
        // bloquent les notifications s'il y en a trop sur une période
        // donnée
        const interval = window.setInterval(function () {
          // Avec la balise, on ne devrait voir que la notification "Coucou ! 9"
          new Notification(
            "Coucou ! " + i,
            {
              tag: 'soManyNotification',
              timestamp: Date.now()
            },
          );
          if (i++ == 9) {
            window.clearInterval(interval);
          }
        }, 200);
      } else {
        alert("Coucou !");
      }
    }).then((value) => {
      console.log(value)
    }).catch(error => {
      console.log(error)
    });
  }
}
