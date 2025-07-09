import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStudies } from './projects-studies';

describe('ProjectsStudies', () => {
  let component: ProjectsStudies;
  let fixture: ComponentFixture<ProjectsStudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsStudies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsStudies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
