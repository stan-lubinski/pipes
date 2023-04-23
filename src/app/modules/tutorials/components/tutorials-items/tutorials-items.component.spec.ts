import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialsItemsComponent } from './tutorials-items.component';

describe('TutorialsItemsComponent', () => {
  let component: TutorialsItemsComponent;
  let fixture: ComponentFixture<TutorialsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialsItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
