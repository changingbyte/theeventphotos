import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-share-button',
  templateUrl: './whatsapp-share-button.component.html',
  styleUrls: ['./whatsapp-share-button.component.css']
})
export class WhatsappShareButtonComponent {
  @Input() phoneNumber: string | null | undefined; // Input property for the phone number
  @Input() message: string | undefined; // Input property for the message

  getWhatsAppLink() {
    if (this.message) {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    }
    else
    return `NA`
  }
}