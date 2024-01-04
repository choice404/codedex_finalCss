import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTree2Component } from './project-tree2.component';

describe('ProjectTree2Component', () => {
  let component: ProjectTree2Component;
  let fixture: ComponentFixture<ProjectTree2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTree2Component]
    });
    fixture = TestBed.createComponent(ProjectTree2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
