import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  socialFeed: Array<any>;

  constructor(public navCtrl: NavController) {
    this.socialFeed = [
      {
        post: 'Building Complex Mobile App Layout using Ionic Grid. You can ' +
        'nest ion - row inside ion - col and so.It is really awesome.'
      },
      {
        post: 'Web components are really great web technology to create ' +
        'reusable web components which are standard compliant.'
      },
      {
        post: 'Nothing is in my mind. I am just writing to make sure there ' +
        'are at least 3 rows in feed'
      }
    ]
  }

}
