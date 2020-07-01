import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be open edit', () => {
    component.edit(0);
    expect(component.editName.length).toEqual(1);
  });

  it('should delete values of array', () => {
    component.delete(0);
    expect(component.usernames.length).toEqual(0);
  });

  it('should be deleteAll values', () => {
    component.deleteAll();
    expect(component.usernames.length).toEqual(0);
  });

  it('should open editAll', () => {
    component.deleteAll();
    expect(component.editAllNames).toBe(false);
  });

  it('should saveAll', () => {
    component.saveAll();
    expect(component.editAllNames).toBe(false);
  });

  it('should addNewUser', () => {
    component.newUsername = "New";
    component.addNewUser();
    expect(component.usernames.length).toEqual(1);
  });          
});
