import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public color: string = '';
  public text: String = '';
  public countriesList: String[] = ['India', 'United States', 'France', 'Nepal', 'China', 'United Kingdom', 'Indonesia'];
  public matchedCountries: String[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  filterCountries($event: any) {
    // console.log('$event -> ', $event);
    if(this.text !== '') {
      this.matchedCountries = this.countriesList.filter(country => {
        return (country.substring(0,this.text.length).toLowerCase() === this.text.trim().toLowerCase());
      });
    }
    else
      this.matchedCountries = [];
    
  }

}
