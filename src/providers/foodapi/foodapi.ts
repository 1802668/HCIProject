import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FoodapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodapiProvider {

  app_id = 'a3ea008d';
  app_key = 'ab36fd7fe7ee3973c4fc105a89f63c50';

  searchUrl = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
  nutrientsUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

  constructor(public http: HttpClient) {
    console.log('Hello FoodapiProvider Provider');
  }

  getSearchResults(q:string){

    let headers = new HttpHeaders({
      'app-id': this.app_id,
      'app-key': this.app_key,
      'remote-user-id': '0'
    });
    return new Promise(resolve => {
    this.http.get(this.searchUrl + q + this.booleans, { headers })
      .subscribe((data) => {
        resolve(data);
      },
        (error: any) => {
          console.log(error);
        });
      });

  }

}
