import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {

  name:string;
  cName:string;
  @Output() option = new EventEmitter<boolean>();

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {
  }

  async guardar(){
    const data = {
      commonName: this.name,
      scientificName: this.cName
    }

    await this.birdUseCase.saveBird(data).subscribe(result => alert(`Se ha guardado el pajaro ${data.commonName}`))
    this.name = '';
    this.cName = '';
    this.option.emit(false);
  }

}
