import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersApiService } from '../characters/character/shared/characters-api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id: string
  character: any;
  router: any;

  constructor(private route: ActivatedRoute, private characterSvc: CharactersApiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.selectCharacters()
  }

  async selectCharacters() {
    if (this.id) {
      const characters = await this.characterSvc.getAllCharacters().toPromise();
      this.character = characters.find(c => c.id == this.id);
      console.log(characters, this.id)
    }
  }

}
