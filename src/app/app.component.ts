/*********************************************************************************
 *  WEB422 – Assignment 05
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: Majd Homsi Student ID: 113692206  Date: 2021-11-22 (extension approved)
 *
 ********************************************************************************/

 import { Component, OnInit } from '@angular/core';
 import { NavigationStart, Router, Event } from '@angular/router';
 import { AuthService } from './auth.service';
 
 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
 })
 export class AppComponent implements OnInit {
   title = 'web422-a6';
   searchString!: string;
   token!: any;
 
   constructor(private router: Router, private auth: AuthService) {}
 
   ngOnInit(): void {
     this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
         this.token = this.auth.readToken();
       }
     });
   }
 
   logout() {
     localStorage.clear();
     this.router.navigate(['/login']);
   }
 
   handleSearch() {
     this.router.navigate(['/search'], {
       queryParams: { q: this.searchString },
     });
     this.searchString = '';
   }
 }
 