import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { FoodapiProvider } from '../../providers/foodapi/foodapi';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  autocomplete: { input: string; };

  constructor(public navCtrl: NavController, public events: Events) {
    // this.listenEvents();
  }

  getSearchedInput() {
    console.log(autocomplete.input);
    // this.fooddatabase.getSearchResults()
    //   .then(data => {
    //     const array = data.common;
    //     // this.taglists = Array.from(new Set(array.map((item: any) => item.tag_name)));
    //     if (array.length === 0) {
    //       let alert = this.alertCtrl.create({
    //         title: "It does not exist.",
    //         buttons: ['OK']
    //       });
    //
    //       alert.present();
    //       this.cancelLog();
    //     }
    //     else {
    //       for (let each in array) {
    //         if (this.taglists.indexOf(array[each].tag_name) === -1) {
    //           this.lists.push(array[each].food_name);
    //           this.taglists.push(array[each].tag_name);
    //           this.thumbs.push(array[each].photo.thumb);
    //         }
    //       }
    //     }
    //   })
  }

 //  listenEvents(){
 //  this.events.subscribe('editMaintenance',() => {
 //   this.retrieveCurrentRoomMaintenances();
 //  //call methods to refresh content
 // });
 //

}
