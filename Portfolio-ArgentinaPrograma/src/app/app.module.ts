import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienciaEducacionComponent } from './components/experiencia-educacion/experiencia-educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AcercaDeComponent,
    HeroComponent,
    ExperienciaEducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
