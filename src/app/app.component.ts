import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


map:Mapboxgl.map;
  ngOnInit() {

    Mapboxgl.accessToken = environment.mapBoxKey;
        this.map = new Mapboxgl.Map({
      container: 'map-box', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9.1336499, 38.725834], // starting position
      zoom:  16.04// starting zoom
    });
  
  }




}
