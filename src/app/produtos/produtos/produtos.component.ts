import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

import { Produto } from '../models/produto';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog
  ) {

    this.produtos$ = this.produtosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }
}
