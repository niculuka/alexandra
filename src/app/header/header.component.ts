import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderLanguage } from '../model/languange.model';
import { GERMAN_HEADER } from 'src/app/data/german';
import { ENGLISH_HEADER } from '../data/english';
import { ROMANIAN_HEADER } from '../data/romanian';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentId: any = "section0";

  currentLanguage: string = "german";
  @Output() childMessageEvent = new EventEmitter<string>();

  header: HeaderLanguage = new HeaderLanguage();  

  constructor() { }

  ngOnInit(): void {
    this.header = GERMAN_HEADER;
    document.getElementById("section0")?.scrollIntoView({ behavior: 'smooth' });
  }

  language(language: any) {
    this.currentLanguage = language;
    this.childMessageEvent.emit(this.currentLanguage);

    if (this.currentLanguage === "german") {
      this.header = GERMAN_HEADER;
    }
    if (this.currentLanguage === "english") {
      this.header = ENGLISH_HEADER;
    }
    if (this.currentLanguage === "romanian") {
      this.header = ROMANIAN_HEADER;
    }    
  }


  toSection1(ids: any) {
    document.getElementById("section1")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;    
  }

  toSection2(ids: any) {
    document.getElementById("section2")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

  toSection3(ids: any) {
    document.getElementById("section3")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

  toSection4(ids: any) {
    document.getElementById("section4")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

  toSection5(ids: any) {
    document.getElementById("section5")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

  toSection6(ids: any) {
    document.getElementById("section6")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

}
