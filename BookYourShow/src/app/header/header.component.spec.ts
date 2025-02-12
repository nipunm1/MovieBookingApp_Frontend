import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
      ],
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call isLoggedin',()=>{
    component.isLoggedin();
    expect(component.isLoggedin).toBeTruthy();
  });

  it('should call logout',()=>{
    component.logout();
    expect(component.logout).toBeTruthy();
  });

  it('should call CheckIfAdmin',()=>{
    let res = component.CheckIfAdmin();
    expect(res).toBeFalsy();
  });
});
