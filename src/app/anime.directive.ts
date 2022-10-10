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
        duration: 250,
        loop:true,
        direction : 'alternate'
      });

      tl.add({
        scale:2,
      })
      .add({
        translateY : -50
      })
      .add({
        rotate:[-360,360]
      })
      
    }
    
  }
   

}
