import { Component, OnInit, AfterContentInit, ElementRef, ViewChild, ContentChild, ViewChildren, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  @ViewChild('info', { static: false })
  paragraph: ElementRef;

  show = true;

  ngOnInit() {
    setTimeout(() => { this.show = false; }, 3000);
    setTimeout(() => { this.show = true; }, 4000);
    console.debug('ngOnInit', this.paragraph);
  }

  ngAfterViewInit(): void {
    console.debug('ngAfterContentInit', this.paragraph);
  }

  ngAfterViewChecked(): void {
    console.debug('ngAfterViewChecked', this.paragraph);
  }

}
