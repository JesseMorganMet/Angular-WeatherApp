import {Component, Input, OnInit} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
// SiteRep.DV.dataDate
  @Input() comp

  constructor() { }

  ngOnInit(): void {
  }

}
