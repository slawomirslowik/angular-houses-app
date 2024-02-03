import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';
  readonly applicationsUrl = "http://localhost:3000/applications"

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async submitApplication(firstName: string, lastName: string, email: string) {
    const newPerson = JSON.stringify({
        'firstName': firstName,
        'lastName': lastName,
        'email': email
    });
    const response = await fetch(`${this.applicationsUrl}`, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: newPerson })
    .then(response => response.json())
    return response;
    console.log()  
  }
}
