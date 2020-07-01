import { TestBed } from '@angular/core/testing';

import { UserNamesService } from './user-names.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs';
import { Username } from './../models/username';


describe('UserNamesService', () => {
  let service: UserNamesService;
  let spy: any;
  let mockUsername: Observable<Username[]>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientTestingModule]
      });
    service = TestBed.inject(UserNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Names', () => {
    spy = spyOn(service, 'getnames').and.returnValue(mockUsername);
    expect(spy).toBeTruthy()
  });  
});
