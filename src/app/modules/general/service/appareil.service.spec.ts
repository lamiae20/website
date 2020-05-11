import { TestBed } from '@angular/core/testing';

import { ContactService } from './appareil.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemsService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});