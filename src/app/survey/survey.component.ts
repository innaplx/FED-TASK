import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
 
  constructor() { }
  questionOne: boolean = true;
  questionTwo: boolean = false;
  questionThree: boolean = false;
  questionFour: boolean = false;

  submitQuestionOne() {
    this.questionOne = false;
    this.questionTwo = true;
  }

  submitQuestionTwo() {
    this.questionTwo = false;
    this.questionThree = true;
  }

  submitQuestionThree() {
    this.questionThree = false;
    this.questionFour = true;
  }


  ngOnInit() {
  }

}
