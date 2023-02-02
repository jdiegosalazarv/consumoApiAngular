import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  opcion: string = "lista";

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  menu(param: string): void{
    this.opcion = param;
    this.newItemEvent.emit(this.opcion);
  }

}
