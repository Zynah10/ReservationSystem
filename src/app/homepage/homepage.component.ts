import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class HomepageComponent implements AfterViewInit {

  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChildren('dot') dots!: QueryList<ElementRef>;

  slideIndex: number = 0;
  intervalId: any;

  ngAfterViewInit() {
    this.showSlides();
    this.intervalId = setInterval(() => this.showSlides(), 5000);
  }

  showSlides() {
    const slidesArray = this.slides.toArray();
    const dotsArray = this.dots.toArray();

    slidesArray.forEach(slide => slide.nativeElement.style.display = 'none');
    dotsArray.forEach(dot => dot.nativeElement.classList.remove('active'));

    this.slideIndex++;
    if (this.slideIndex > slidesArray.length) {
      this.slideIndex = 1;
    }

    slidesArray[this.slideIndex - 1].nativeElement.style.display = 'block';
    dotsArray[this.slideIndex - 1].nativeElement.classList.add('active');
  }

  currentSlide(n: number) {
    this.slideIndex = n - 1;
    this.showSlides();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.showSlides(), 5000); // restart timer
  }
}
