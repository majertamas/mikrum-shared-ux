import {Component, OnInit} from '@angular/core';
import {Beer} from "./beer.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'lib-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  public randomBeer: Beer | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<Beer>('https://random-data-api.com/api/v2/beers')
      .subscribe(res => {
        console.log(res);
        this.randomBeer = res;
      });
  }

}
