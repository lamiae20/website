import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;


  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          type: 'oracle',
          description: 'Formation , Oracle 18.1, Sql, Collapse, Popovers, Toasts, Tooltips',
          image: 'oracle.png',
          link: 'example-bootstrap-prototype'
        },
        {
          type: 'sql',
          description: 'Formation sql, fonction,viwers ,SQL Certification Course | Start Learning Today‎',
          image: 'sql.png',
          link: 'exemple-chats'
        },
        {
          type: 'elarning',
          description: 'Use services to view a playlist and a youtube ',
          image: 'elarning.png',
          link: 'movies-images-list'
        },
      
   
     
      ];

  }

  ngOnInit() {
    this.titleService.setTitle('angular.Elearning: Une Application Web ');
    this.meta.addTag({
      name: 'Elearning',
      content: 'danny Elearning'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 9.1.4 et bootstrap 4.4.1' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
