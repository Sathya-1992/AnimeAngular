import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'content-projection';
  element!:HTMLElement;
  domains = [
    {
      heading : "HTML",
      desc : "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page"
    },
    {
      heading : "CSS",
      desc : "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media"
    },
    {
      heading : "Javascript",
      desc : "JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997. ECMA-262 is the official name of the standard. ECMAScript is the official name of the language."
    },
    {
      heading : "Angular",
      // desc : "AngularJS extends HTML with new attributes. AngularJS is perfect for Single Page Applications (SPAs)."
    }
  ];
  objVal:{
    'target' : HTMLElement | null,
    'animation':string,
    'value':string
  } = {
    'target' : null,
    'animation':"",
    'value':""
  }
  getInput(){
   this.element = document.querySelectorAll("h2")[0];
   
   this.objVal = {
    'target' : this.element,
     'animation' : "translateY",
     'value' : '300px'
   }
  }
  
  
}
