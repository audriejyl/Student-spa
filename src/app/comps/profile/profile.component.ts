import { Component } from '@angular/core';

interface UserProfile {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: UserProfile = {
    name: 'Audrie Jyl Galigo',
    email: '20193616@s.ubaguio.edu',
    age: 20,
    location: 'Philippines',
    bio: 'Angular student developer'
  };
}
