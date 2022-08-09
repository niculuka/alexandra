import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GE_NAVBAR } from 'src/app/data/german';
import { EN_NAVBAR } from '../data/english';
import { RO_NAVBAR } from '../data/romanian';
import { NavbarLanguage } from '../model/languange.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  wide = false;
  checked!: boolean;

  currentId: any = "section0";

  currentLanguage: string = "german";
  @Output() childMessageEvent = new EventEmitter<string>();

  header: NavbarLanguage = new NavbarLanguage();   

  constructor() { }

  ngOnInit(): void {
    this.header = GE_NAVBAR;
    document.getElementById("section0")?.scrollIntoView({ behavior: 'smooth' });
  }

  language(language: any) {
    this.currentLanguage = language;
    this.childMessageEvent.emit(this.currentLanguage);

    if (this.currentLanguage === "german") {
      this.header = GE_NAVBAR;
    }
    if (this.currentLanguage === "english") {
      this.header = EN_NAVBAR;
    }
    if (this.currentLanguage === "romanian") {
      this.header = RO_NAVBAR;
    }    
  }

  wideMenu(): void {
    this.wide = !this.wide;
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

  toSection7(ids: any) {
    document.getElementById("section7")?.scrollIntoView({ behavior: 'smooth' });
    this.currentId = ids;
  }

}
