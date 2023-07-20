import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestServiceService } from '../request-service.service';
import { getDogImageFetch } from '../utils';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css'],
})
export class SomeComponentComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  constructor(private requestService: RequestServiceService) {}

  dogImageSrc: string | null = null;
  observableData: number | null = null;

  private testSubscription!: Subscription;

  ngOnInit(): void {
    this.requestSomeDogs();
    // this.fetchSomeDogs();
    this.testSubscription = this.requestService.getTestSubject().subscribe({
      next: (data) => {
        this.observableData = data;
        // if (data > 18) {
        //   this.requestService.setTestNumber(0);
        // }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.testSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log('view was init');
  }

  requestSomeDogs(): void {
    this.requestService.getDogImage().subscribe({
      next: (dogResponse) => {
        if (dogResponse?.status === 'success') {
          this.dogImageSrc = dogResponse.message;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  async fetchSomeDogs(): Promise<void> {
    const dogResponse = await getDogImageFetch();
    if (dogResponse?.status === 'success') {
      this.dogImageSrc = dogResponse.message;
    } else {
      console.log(dogResponse);
    }
  }
}
