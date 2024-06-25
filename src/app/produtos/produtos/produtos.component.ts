import { Component } from '@angular/core';

import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {

  produtos: Produto[] = [
    {_id: '1', name: 'Cuidados Faciais', category: 'Pele'}
  ];

  displayedColumns = ['name', 'category'];
  dataSource = this.produtos
}
