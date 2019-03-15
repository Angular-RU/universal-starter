import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundService } from './not-found.service';
import { TranslatesBrowserModule } from '@shared/translates/translates-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserTransferStateModule } from '@angular/platform-browser';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserTransferStateModule,
        TranslatesBrowserModule,
        TranslateModule,
      ],
      declarations: [NotFoundComponent],
      providers: [
        NotFoundService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
