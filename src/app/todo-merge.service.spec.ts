import { TestBed } from '@angular/core/testing';

import { TodoMergeService } from './todo-merge.service';

describe('TodoMergeService', () => {
  let service: TodoMergeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMergeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
