import { Component, OnInit,NgModule } from '@angular/core';
import { AppModule} from './../../app.module';
import { HeaderComponent} from './../header/header.component';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

}
