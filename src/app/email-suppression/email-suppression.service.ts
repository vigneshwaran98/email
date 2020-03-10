import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmailSuppressionService {
lookupAPI;
optoutAPI;
  constructor(private http:HttpClient) { 
       }

  checkPreferences(email){
  var country='us';
  var lang='en-US';
  var sid='101';
    this.lookupAPI="https://nc-lookup.mybluemix.net/v1/preferences?country="+country+"&language="+lang+"&sid="+sid+"&emailAddress="+email;
    return this.http.get<any>(this.lookupAPI);
  }
  submitOptOut(email){
  
    var optoutData={
        country: 'US',
            language: 'en-US',
            sid: '102',
            emailAddress:email,
            oldEmailStatus: 'DEFAULT',
            NC_CHECK_EMAIL: 'OPT_OUT',
            NC_ID_EMAIL: 0,    
    }
    this.optoutAPI="https://nc-producer.mybluemix.net/v1/preference";
    return this.http.post<any>(this.optoutAPI,optoutData);
  }
}


// export function checkPreferences(postData) {
//     return new Promise((resolve, reject) => { ?country = us & language=en & sid=101 & emailAddress=bluemix_ui_918291 % 40mailinator.com        axios.get(`https://nc-lookup.mybluemix.net/v1/preferences`, { params: postData }).then(response => { resolve(response.data); }).catch(error => {
//       console.error(error);
//       // eslint-disable-line no-console
//       reject(error);
//     });
//     })
//   }