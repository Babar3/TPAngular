import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {


    animaux :  Animal[];

  constructor(private animalService : AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe((data)=>this.animaux=data)

  }

}
