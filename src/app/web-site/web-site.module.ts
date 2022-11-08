import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSiteRoutingModule } from './web-site-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DatailProductComponent } from './pages/datail-product/datail-product.component';
import { RickMortyComponent } from './pages/rick-morty/rick-morty.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    DatailProductComponent,
    RickMortyComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ]
})
export class WebSiteModule { }
