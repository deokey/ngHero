import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../mockup/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect = (hero: Hero): void => {
    this.selectedHero = hero;
    console.log(this.selectedHero);
    // tslint:disable-next-line:semicolon
  };

  constructor() {}

  ngOnInit() {
    const like = document.getElementById('like');

    like.addEventListener('click', () => {
      // if (like.classList.contains('liked')) {
      //   like.classList.remove('liked');
      //   like.classList.add('unliked');
      //   console.log('sdasd');
      //   like.addEventListener('animationend', () => {
      //     like.classList.remove('unliked');
      //   });
      //   like.removeEventListener('animationend', () => {});
      // } else {
      //   like.classList.add('liked');
      // }
      like.classList.toggle('liked');

      const count = Number(like.getAttribute('data-count')) || 0;
      if (!like.classList.contains('show')) {
        like.setAttribute('data-count', `${count + 1}`);
        like.classList.toggle('show');
      } else {
        like.setAttribute('data-count', `${count + 1}`);
      }
    });
  }
}
