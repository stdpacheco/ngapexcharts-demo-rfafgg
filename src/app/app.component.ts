import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms'
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('chart') chart: ChartComponent;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('Basic Chart'),
      type: new FormControl('line'),
      height: new FormControl(350),
      series: new FormArray([
        new FormGroup({
          name: new FormControl('Series'),
          type: new FormControl('line'),
          data: new FormArray([
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100)),
            new FormControl(this.getRandomArbitrary(0, 100))
          ])
        })
      ]),
      xaxis: new FormArray([
        new FormControl('Jan'),
        new FormControl('Feb'),
        new FormControl('Mar'),
        new FormControl('Apr')
      ])
    });
  }

  addValue() {
    (<FormArray>this.form.get('series')).controls.forEach((c) => {
      (<FormArray>c.get('data')).push(new FormControl(this.getRandomArbitrary(0, 100)));
    });
    (<FormArray>this.form.get('xaxis')).push(new FormControl('Jan'));
  }

  addSeries() {
    (<FormArray>this.form.get('series')).push(new FormGroup({
      name: new FormControl('Series'),
      type: new FormControl('line'),
      data: new FormArray([
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100)),
        new FormControl(this.getRandomArbitrary(0, 100))
      ])
    }));
  }

  withoutType(series) {
    return series.map(s => {return { name: s.name, data: s.data }});
  }

  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
}
