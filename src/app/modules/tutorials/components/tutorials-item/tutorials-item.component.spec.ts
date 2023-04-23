import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialsItemComponent } from './tutorials-item.component';

describe('TutorialsItemComponent', () => {
  let component: TutorialsItemComponent;
  let fixture: ComponentFixture<TutorialsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialsItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
