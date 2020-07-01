import { Component, OnInit } from '@angular/core';
import { UserNamesService } from '../user-names.service';
import { Username } from '../../models/username';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  usernames: Username[] = [];
  editName: boolean[] = [];
  editAllNames: boolean = false;
  newUsername: string = "";

  constructor(private UserNamesService: UserNamesService) { }

  ngOnInit(): void {
  	this.UserNamesService.getnames().subscribe(data => this.usernames = data)
  }

  public edit(toEditIndex): void {
  	this.editName[toEditIndex] = !this.editName[toEditIndex];
  }

  public delete(toDeleteIndex): void {
  	this.usernames.splice(toDeleteIndex, 1);
  }

  public deleteAll(): void {
  	this.usernames = [];
  }

  public editAll(): void {
  	this.editAllNames = !this.editAllNames;

  	for (var i = 0; i < this.usernames.length; ++i) {
  		this.editName[i] = true;
  	}
  }

  public saveAll(): void {
  	this.editAllNames = false;

  	for (var i = 0; i < this.usernames.length; ++i) {
  		this.editName[i] = false;
  	}
  }

  public addNewUser(): void {
  	this.usernames.push(new Username(this.newUsername));
  	this.newUsername = "";
  }
}
