import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
// import { HEROES } from '../../mockup/heroes';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesContainerComponent implements OnInit {
  heroes: Array<Hero>;
  // selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // onSelect = (hero: Hero): void => {
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero);
  //   // tslint:disable-next-line:semicolon
  // };

  constructor(private heroService: HeroService) {}

  getHeroes = (): void => {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
    // tslint:disable-next-line:semicolon
  };

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();

    // const like = document.getElementById('like');

    // like.addEventListener('click', () => {
    //   // if (like.classList.contains('liked')) {
    //   //   like.classList.remove('liked');
    //   //   like.classList.add('unliked');
    //   //   console.log('sdasd');
    //   //   like.addEventListener('animationend', () => {
    //   //     like.classList.remove('unliked');
    //   //   });
    //   //   like.removeEventListener('animationend', () => {});
    //   // } else {
    //   //   like.classList.add('liked');
    //   // }
    //   like.classList.toggle('liked');

    //   const count = Number(like.getAttribute('data-count')) || 0;
    //   if (!like.classList.contains('show')) {
    //     like.setAttribute('data-count', `${count + 1}`);
    //     like.classList.toggle('show');
    //   } else {
    //     like.setAttribute('data-count', `${count + 1}`);
    //   }
    // });
  }
}
