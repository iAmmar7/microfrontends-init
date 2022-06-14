import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface IDates {
  date: Date;
  position: number;
  action: string;
}

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentYear: number = 0;
  public currentMonth: string = '';
  public displayedColumns: string[] = ['position', 'date', 'action'];
  public dataSource: IDates[] = [];
  public history: any = [[], [], [], [], [], [], [], [], [], [], [], []];
  public currentDate: Date;
  public showSpinner: boolean = false;
  public showingPrevMonthData: boolean = false;

  constructor(private _snackBar: MatSnackBar) {
    this.currentDate = new Date();
  }

  public ngOnInit(): void {
    this.initialiseData();
  }

  public onAttendanceSelected(element: IDates, value: any): void {
    this.dataSource.forEach((data: IDates): void => {
      if (data.position === element.position) {
        data.action = value.value;
      }
    });
    this.saveChanges();
  }

  public markComplete(): void {
    let missingAttendance: IDates[] = this.dataSource.filter(
      (data: IDates) => data.action === ''
    );

    if (missingAttendance.length > 0) {
      this.openSnackBar('Please mark attendance for all days!!!');
      return;
    }

    this.openSnackBar('Great Job. Lets save this and move to next Month.');

    if (window.localStorage['history']) delete window.localStorage['history'];

    let month = this.currentDate.getMonth();
    this.history[month] = this.dataSource;

    window.localStorage['history'] = JSON.stringify(this.history);

    this.initialiseData(true);
  }

  public showPreviousMonth(): void {
    if (this.showingPrevMonthData) {
      this.showingPrevMonthData = false;
      this.initialiseData();
      return;
    }

    if (!window.localStorage['history']) {
      this.openSnackBar('No records found for previous month');
      return;
    }

    if (window.localStorage['history']) {
      this.history = JSON.parse(window.localStorage['history']);
      const prevMonth: IDates[] = this.history[this.currentDate.getMonth() - 1];
      this.currentMonth = MONTHS[this.currentDate.getMonth() - 1];

      if (prevMonth.length === 0) {
        this.openSnackBar('No records found for previous month');
        return;
      }

      this.dataSource = prevMonth;
      this.showingPrevMonthData = true;
    }
  }

  private initialiseData(newMonth: boolean = false): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
    if (newMonth) {
      this.currentDate.setMonth(new Date().getMonth() + 1);
      if (window.localStorage['data']) delete window.localStorage['data'];
      if (window.localStorage['month']) delete window.localStorage['month'];
      if (window.localStorage['year']) delete window.localStorage['year'];
      this.dataSource = [];
    }

    if (window.localStorage['data'])
      this.dataSource = JSON.parse(window.localStorage['data']);
    if (window.localStorage['month'])
      this.currentMonth = window.localStorage['month'];
    if (window.localStorage['year'])
      this.currentYear = window.localStorage['year'];

    let monthIndex: number = MONTHS.findIndex(
      (month: string): boolean => month === this.currentMonth
    );
    if (monthIndex > -1) this.currentDate.setMonth(monthIndex);

    if (this.dataSource.length > 0) return;

    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = MONTHS[this.currentDate.getMonth()];
    this.setDataSource();
  }

  private setDataSource(): void {
    const date = this.currentDate;
    const year = date.getFullYear();
    const month = date.getMonth();
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let position = 1;
    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      const newDate = new Date(year, month, i);
      this.dataSource.push({
        position,
        date: newDate,
        action: '',
      });
      position++;
    }
    this.saveChanges();
  }

  private saveChanges(): void {
    if (window.localStorage['data']) delete window.localStorage['data'];
    if (window.localStorage['month']) delete window.localStorage['month'];
    if (window.localStorage['year']) delete window.localStorage['year'];

    window.localStorage['data'] = JSON.stringify(this.dataSource);
    window.localStorage['month'] = this.currentMonth;
    window.localStorage['year'] = this.currentYear;
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
