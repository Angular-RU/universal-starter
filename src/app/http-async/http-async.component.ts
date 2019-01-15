import { Component, OnInit } from '@angular/core';
import { HttpAsyncService } from './http-async.service';

@Component({
  selector: 'app-http-async',
  templateUrl: './http-async.component.html',
  styleUrls: ['./http-async.component.scss'],
})
export class HttpAsyncComponent implements OnInit {
  constructor(private httpAsyncService: HttpAsyncService) {}
  photos = [];
  todosAsync: Promise<any>;

  async ngOnInit() {
    this.photos = await this.httpAsyncService.get('https://jsonplaceholder.typicode.com/photos');
    this.todosAsync = this.httpAsyncService.get('https://jsonplaceholder.typicode.com/todos');
  }
}
