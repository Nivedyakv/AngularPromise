import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angularpromise';
  async showCustomAlert() {
    try {
      const result = await Swal.fire({
        title: 'Custom Alert',
        html: '<b>This is a custom SweetAlert with Angular!</b>',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      });
  
      if (result.isConfirmed) {
     
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
      }
    } catch (error) {
      console.error('Error showing custom alert:', error);
    }
  }
  
}
