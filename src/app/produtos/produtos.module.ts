import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProdutosService } from './services/produtos.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProdutosService],
})
export class ProdutosModule { }
