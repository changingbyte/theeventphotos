import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappShareButtonComponent } from './whatsapp-share-button.component';

describe('WhatsappShareButtonComponent', () => {
  let component: WhatsappShareButtonComponent;
  let fixture: ComponentFixture<WhatsappShareButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappShareButtonComponent]
    });
    fixture = TestBed.createComponent(WhatsappShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
