import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPostsComponent } from './mostrar-posts.component';

describe('MostrarPostsComponent', () => {
  let component: MostrarPostsComponent;
  let fixture: ComponentFixture<MostrarPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPostsComponent]
    });
    fixture = TestBed.createComponent(MostrarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
