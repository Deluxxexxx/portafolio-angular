import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChipModule,
    CommonModule,
    RouterOutlet,
    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    TagModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-angular';

  items: MenuItem[] = [
    { label: 'Sobre mí', command: () => this.scrollTo('about') },
    { label: 'Proyectos', command: () => this.scrollTo('projects') },
    { label: 'Tecnologías', command: () => this.scrollTo('tech') },
    { label: 'Contacto', command: () => this.scrollTo('contact') }
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
