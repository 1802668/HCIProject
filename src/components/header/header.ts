import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';
import { UserprofilePage } from '../../pages/userprofile/userprofile';


@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;

  constructor(public navCtrl: NavController) {
  }

  profilePg(){
    this.navCtrl.push(UserprofilePage);
  }
}
