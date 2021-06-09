/*import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[signature]',
})
export class  SignaturesDirectivesDirective implements OnInit, OnChanges {
  @Output() imgSrc = new EventEmitter<string>();
  @Input('clear') clearMe:any;
  @Input('options') options:any;

  private context:any;
  private density?: number;
  private isDrawing = false;
  private sigPadElement:any;

  ngOnInit() {
    this.sigPadElement = this.signaturePad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = this.options.color || '#3742fa';
    this.context.lineWidth = this.options.width || 2;

    if ( this.options.blur) {
      this.context.shadowBlur = this.options.blur || 2;
      this.context.shadowColor = this.options.blurColor || this.context.strokeStyle;
    }

    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.density = window.devicePixelRatio || 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.context) {
      return;
    }

    if (changes.clearMe) {
      this.clear();
      this.save();
    }
  }

  constructor(private signaturePad: ElementRef) {
  }

  @HostListener('touchstart', ['$event'])
  handleTouchStart(e:any) {
    e.preventDefault();
    this.isDrawing = true;
    this.start(e, 'layer');
  }

  @HostListener('touchmove', ['$event'])
  handleTouchMove(e:any) {
    if (!this.isDrawing) {
      return;
    }

    e.preventDefault();
    this.draw(e, 'layer');
  }

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    if ( this.isDrawing) {
      this.save();
    }

    this.isDrawing = false;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e:any) {
    this.isDrawing = true;
    this.start(e);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e:any) {
    if (!this.isDrawing) {
      return;
    }

    this.draw(e);
  }

  private start(e:any, type: 'client' | 'layer' = 'client') {
    const coords = this.relativeCoords(e, type);
    this.context.moveTo(coords.x, coords.y);
  }

  private draw(e:any, type: 'client' | 'layer' = 'client') {
    const coords = this.relativeCoords(e, type);
    this.context.lineTo(coords.x, coords.y);
    this.context.stroke();
  }

  private relativeCoords(event:any, type: 'client' | 'layer') {
    const bounds = this.sigPadElement.getBoundingClientRect();
    let x = event[ type + 'X' ];
    let y = event[ type + 'Y' ];

    if ('layer' !== type) {
      x -= bounds.left;
      y -= bounds.top;
    }

    return { x, y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  save() {
    this.imgSrc.emit(this.sigPadElement.toDataURL('image/png'));
  }
}*/