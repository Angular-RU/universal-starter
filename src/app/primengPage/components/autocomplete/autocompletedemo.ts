import { Component } from '@angular/core';
import { CountryService } from '../../service/countryservice';

@Component({
    templateUrl: './autocompletedemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class AutoCompleteDemo {

    country: any;

    countries: any[];

    filteredCountriesSingle: any[];

    filteredCountriesMultiple: any[];

    brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

    filteredBrands: any[];

    brand: string;

    constructor(private countryService: CountryService) { }

    filterCountrySingle(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }

    filterCountryMultiple(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }

    filterCountry(query, countries: any[]): any[] {
        // tslint:disable-next-line:max-line-length
        // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    filterBrands(event) {
        this.filteredBrands = [];
        for (let i = 0; i < this.brands.length; i++) {
            const brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
            }
        }
    }
}
