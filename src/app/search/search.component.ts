import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl('');
  countries: string[] = ['India', 'United States', 'France', 'Nepal', 'China', 'United Kingdom', 'Indonesia'];
  inputCountry: string = '';
  filteredCountries: Observable<string[]> | undefined;

  // public color: string = '';
  // public inputText: string = '';
  // public countriesList: string[] = ['India', 'United States', 'France', 'Nepal', 'China', 'United Kingdom', 'Indonesia'];
  // public matchedCountries: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.filteredCountries = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filteredValue = value.toLocaleLowerCase();
    
    return this.countries.filter(country => country.toLowerCase().includes(filteredValue));
  }

  // filterCountries($event: any) {
  //   // console.log('$event -> ', $event);
  //   if(this.inputText !== '') {
  //     this.matchedCountries = this.countriesList.filter(country => {
  //       return (country.substring(0,this.inputText.length).toLowerCase() === this.inputText.trim().toLowerCase());
  //     });
  //   }
  //   else
  //     this.matchedCountries = [];
  // }

}

