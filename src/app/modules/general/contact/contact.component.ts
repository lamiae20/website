import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/appareil.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any = [];
  loaded: boolean;
  private appareils = {"nom":"lamiae","prenom":"balmaty","dateNaissance":"1996-09-15","email":"ziaritarik.u@gmail.com","tel":612019982,"photo":"tarik.jpg"}
  constructor(
    
    private httpClient: HttpClient,
    private contactService: ContactService) {
  }

  ngOnInit() {
    this.getRcont();
  }

  getCont() {

  

    this.loaded = false;
    this.contactService.getContact('http://localhost:8080/contacts')
      .subscribe(
        res => {
          this.contact = res;
          this.loaded = true;
        });
  }



  saveAppareilsToServer() {
    this.httpClient
      .post('http://localhost:8080/contacts', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


  getRcont() {
    this.contact = null;
    this.loaded = true;
  }

}
