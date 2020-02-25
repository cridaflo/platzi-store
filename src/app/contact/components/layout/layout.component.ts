import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee-data.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const names = ['n1', 'n2', 'n3', 'n4'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  saleList: EmployeeData[] = [];
  blist: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.saleList = this.generatorService.generate(names, [10, 20], 10);
    this.blist = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    })
  }
}
