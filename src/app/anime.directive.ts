import { Directive, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
declare var anime : any;
@Directive({
  selector: '[appAnime]'
})
export class AnimeDirective implements DoCheck{
  @Input() appAnime!:{'target':HTMLElement | null,'animation':string,'value':string};
  constructor(public el:ElementRef) { }
  ngDoCheck(): void {
    
    if(this.appAnime.target){

      var tl = anime.timeline({
        targets : this.appAnime.target,
        easing: 'easeOutExpo',
        duration: 750,
        loop:true,
        direction : 'alternate'
      });

      tl.add({
        translateY : -200
      })
      .add({
        translateX : 200
      })
      
    }
    
  }
   

}
