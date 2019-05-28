import { Component, OnInit } from '@angular/core';
import nQueens from '../logic/n-queens';
import { Solution } from '../logic/queens-position';

@Component({
  selector: 'app-n-queens',
  templateUrl: './n-queens.component.html',
  styleUrls: ['./n-queens.component.css']
})
export class NQueensComponent implements OnInit {

  constructor() { }

  count = '8';
  solutions: Solution[] = [];

  cols: number[] = [];
  rows: number[] = [];

  currentSolutionIndex = 0;
  currentSolution: Solution;

  ngOnInit() {
  }

  calc() {
    const count = parseInt(this.count, 10);
    const result = nQueens(count);
    // tslint:disable-next-line: no-console
    console.debug('result', result);

    this.processResult(result);
  }

  calcWithWorker() {
    const count = parseInt(this.count, 10);

    const worker = new Worker('../logic/n-queens.worker', {
      type: 'module'
    });

    worker.addEventListener('message', (event) => {
      // tslint:disable-next-line: no-console
      console.debug('worker result', event.data);

      this.processResult(event.data);
    });

    worker.postMessage({count});
  }

  next() {
    if (this.currentSolutionIndex < this.solutions.length - 1) {
      this.currentSolutionIndex++;
      this.update();
    }
  }

  prev() {
    if (this.currentSolutionIndex > 0) {
      this.currentSolutionIndex--;
      this.update();
    }
  }

  hasQueen(row: number, col: number) {
    // TODO: Refactor into pipe
    return !!this.currentSolution.find(q => q.rowIndex === row && q.columnIndex === col);
  }

  isBlack(row: number, col: number) {
    // TODO: Refactor into pipe
    const offset = row % 2;
    return (col + 1 + offset) % 2 === 0;
  }

  private update() {
    this.currentSolution = this.solutions[this.currentSolutionIndex];
  }

  private range(from: number, to: number) {
    const result = [];
    for (let i = from; i <= to; i++) {
      result.push(i);
    }
    return result;
  }

  private processResult(solutions: Solution[]) {
    const count = parseInt(this.count, 10);
    this.cols = this.range(0, count - 1);
    this.rows = this.range(0, count - 1);
    this.solutions = solutions;
    this.currentSolutionIndex = 0;
    this.update();
  }
}
