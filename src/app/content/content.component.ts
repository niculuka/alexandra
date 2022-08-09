import { Component, OnInit } from '@angular/core';
import { GE_CONTENT } from 'src/app/data/german';
import { RO_CONTENT } from '../data/romanian';
import { EN_CONTENT } from '../data/english';
import { ContentLanguage } from '../model/languange.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentLanguage: string = "german"

  language: ContentLanguage = new ContentLanguage();

  constructor() { }

  ngOnInit(): void {
      this.language = GE_CONTENT;
  }

  receiveEvent($event: any) {
    this.currentLanguage = $event;
    if (this.currentLanguage === "german") {
      this.language = GE_CONTENT;
    }
    if (this.currentLanguage === "english") {
      this.language = EN_CONTENT;
    }
    if (this.currentLanguage === "romanian") {
      this.language = RO_CONTENT;
    }
  }


}
