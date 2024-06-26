import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = ['name', 'category'];

  constructor(private produtosService: ProdutosService) {

    this.produtos = this.produtosService.list();
  }
  ngOnInit(): void {

  }
}
