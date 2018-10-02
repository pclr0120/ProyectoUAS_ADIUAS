import { TestBed, inject } from '@angular/core/testing';

import { CicloEscolarService } from './ciclo-escolar.service';

describe('CicloEscolarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CicloEscolarService]
    });
  });

  it('should be created', inject([CicloEscolarService], (service: CicloEscolarService) => {
    expect(service).toBeTruthy();
  }));
});
