import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { ContactService } from '../contact.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  constructor(private contactService: ContactService) { }

  name: String = '';
  email: String = '';
  phone: String = '';
  message: String = ''

  name_error: String = '';
  email_error: String = '';
  phone_error: String = '';
  global_error: String = '';

  ngAfterViewInit() {
    let tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: '-60% center',
        end: '0% center',
        markers: false,
      }
    });

    tlContact.from('#contact', {
      opacity: 0,
      scale: 0.95,
      step: "expoScale(0.5,7,none)"
    });
  }

  validateForm() {
    this.name_error = '';
    this.email_error = '';
    this.phone_error = '';
    this.global_error = '';

    if (this.name === '') {
      this.name_error = 'Le nom est requis';
      return false;
    }

    if (this.email === '') {
      this.email_error = 'L\'email est requis';
      return false;
    }

    if (this.message.length < 10) {
      this.phone_error = 'Le message doit contenir au moins 10 caractères';
      return false;
    }

    return true;
  }

  sendEmail() {
    if (this.validateForm()) {
      let emailData = {
        email: this.email,
        name: this.name,
        phone: this.phone,
        message: this.message
      };

      console.log(JSON.stringify(emailData))

      fetch(environment.emailUrl, {
        method: "POST",
        body: JSON.stringify(emailData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => {

        if (response.status === 200) {
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
          this.global_error = 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais';
        } else {
          this.global_error = 'Une erreur s\'est produite lors de l\'envoi du message';
        }
      }

      );
    }

  }


}
