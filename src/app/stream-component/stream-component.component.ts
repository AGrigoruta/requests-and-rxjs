import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-stream-component',
  templateUrl: './stream-component.component.html',
  styleUrls: ['./stream-component.component.css']
})
export class StreamComponentComponent implements OnInit {
  someNumber: number = 15;
  constructor(private requestService: RequestServiceService) { }

  ngOnInit(): void {

  }

  onIncrementButtonClick(): void {
    this.requestService.incrementTestNumber()
  }

  onDecrementButtonClick(): void {
    this.requestService.decrementTestNumber()
  }

  onButtonClick(): void {
    this.requestService.setTestNumber(this.someNumber)
  }

}
