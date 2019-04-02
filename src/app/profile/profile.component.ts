import { Component } from '@angular/core';
import { Selfpost } from '../selfpost.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selfposts: Selfpost[] = [
    new Selfpost(1, "img", "yo", "u/passwordisqwerty123", "Posted by u/passwordisqwerty123 just now", "0 Share Approve Remove Spam")
  ];



}
