import { Injectable } from '@angular/core';

import { Produto } from '../models/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClien: HttpClient) { }

  list(): Produto[] {
    return [
      { _id: '1', name: 'Cuidados', category: 'Pele'}
    ];
  }
}
