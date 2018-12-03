import { Component, OnInit } from '@angular/core';
import { NotFoundService } from './not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  public status: { code: number; message: string };

  constructor(private _notFoundService: NotFoundService) {}

  ngOnInit(): void {
    this._notFoundService.setStatus(404, 'Not Found');
  }
}
