import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee-data.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';


const names = ['n1', 'n2', 'n3', 'n4'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
 
  saleList: EmployeeData[] = [];
  blist: EmployeeData[] = [];

  value$: Observable<number>;

  sub$: Subscription;
  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData()
    .pipe(
      tap(num => console.log(num))
    );
  }

  ngOnInit(): void {
    this.saleList = this.generatorService.generate(names, [10, 20], 10);
    this.blist = this.generatorService.generate(names, [10, 20], 10);

    // this.sub$ = this.generatorService.getData()
    // .subscribe(value => {
    //   this.value = value;
    //   console.log(this.value);
    // });
  }

  ngOnDestroy(): void {
    console.log('destroy');
    // this.sub$.unsubscribe();
  }


  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }
}
