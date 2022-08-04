import { Component, OnInit } from '@angular/core';
import { Language } from '../model/languange.model';
import { GERMAN } from 'src/app/data/german';
import { ROMANIAN } from '../data/romanian';
import { ENGLISH } from '../data/english';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentLanguage: string = "german"

  language: Language = new Language();

  constructor() { }

  ngOnInit(): void {
      this.language = GERMAN;
  }

  receiveEvent($event: any) {
    this.currentLanguage = $event;
    if (this.currentLanguage === "german") {
      this.language = GERMAN;
    }
    if (this.currentLanguage === "english") {
      this.language = ENGLISH;
    }
    if (this.currentLanguage === "romanian") {
      this.language = ROMANIAN;
    }
  }


}
