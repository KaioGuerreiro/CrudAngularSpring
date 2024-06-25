import { ProdutosService } from './../services/produtos.service';
import { Component } from '@angular/core';

import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {

  produtos: Produto[] = [];
  displayedColumns = ['name', 'category'];

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {

    this.produtos = this.produtosService.list();
  }
}
