import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProcessComponent } from './project-process.component';

describe('ProjectProcessComponent', () => {
  let component: ProjectProcessComponent;
  let fixture: ComponentFixture<ProjectProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectProcessComponent]
    });
    fixture = TestBed.createComponent(ProjectProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
