import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-poke-card-especial',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './poke-card-especial.component.html',
  styleUrl: './poke-card-especial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeCardEspecialComponent {
  style = {};
  animated: boolean = false;
  active: boolean = true;

  constructor(private el: ElementRef) { }

  @Input({ required: true }) bgColor!: string;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    console.log('Mouse move:', e);



    // normalise touch/mouse
    var pos = [e.offsetX, e.offsetY];
    e.preventDefault();

    var $card = this.el.nativeElement
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.offsetHeight;
    var w = $card.offsetWidth;
    var px = Math.abs(Math.floor(100 / w * l) - 100);
    var py = Math.abs(Math.floor(100 / h * t) - 100);
    var pa = (50 - px) + (50 - py);
    // math for gradient / background positions
    var lp = (50 + (px - 50) / 1.5);
    var tp = (50 + (py - 50) / 1.5);
    var px_spark = (50 + (px - 50) / 7);
    var py_spark = (50 + (py - 50) / 7);
    var p_opc = 20 + (Math.abs(pa) * 1.5);
    var ty = ((tp - 50) / 2) * -1;
    var tx = ((lp - 50) / 1.5) * .5;
    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}%;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    var opcCalc = p_opc / 100;
    var opc = `opacity: ${opcCalc};`
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    // need to use a <style> tag for psuedo elements
    var style = `
          .card:hover:before { ${grad_pos} }  /* gradient */
          .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */
        `

    this.animated = true;
    this.active = true;

    this.style = {
      opacity: opcCalc,
      transform: `rotateX(${ty}deg) rotateY(${tx}deg)`
    };




    e.preventDefault();
  }

  @HostListener('mouseout', ['$event'])
  onMouseMoveOut(event: MouseEvent): void {
    console.log('Mouse move Out:', event);
    this.animated = true;
    this.active = false;
    this.style = "";


    // var $card = $(this);
    // $style.html("");
    // $card.removeAttr("style");
    // x = setTimeout(function () {
    //   $card.addClass("animated");
    // }, 2500);



    event.preventDefault();
  }
}
