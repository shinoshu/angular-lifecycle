import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  title = 'angular-lifecycle';
  ngOnChanges() { console.log('ngOnChanges'); }
  ngOnInit() { console.log('ngOnInit'); }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngAfterContentInit() { console.log('ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
