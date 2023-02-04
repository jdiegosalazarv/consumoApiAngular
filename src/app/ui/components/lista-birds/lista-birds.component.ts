import { Component, Input, OnInit } from '@angular/core';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-birds',
  templateUrl: './lista-birds.component.html',
  styleUrls: ['./lista-birds.component.css']
})
export class ListaBirdsComponent implements OnInit {

  // @Input() lista: IBirdModel[];
  lista: any = [];
  option: boolean = false;

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {
    this.showList();
  }

  agregar(){
    this.option = true;
    console.log(this.lista);
  }

  showList(){
    this.birdUseCase.findBirds().subscribe(result => {
      this.lista = result}
      );
  }

  async delete(id: number) {
    await this.birdUseCase.deleteBird(id).subscribe(
      result => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }

  async edit(id: number) {
    await this.birdUseCase.findBirdById(id)
  }

  setOption(opt: boolean){
    this.option = opt;
  }
}
