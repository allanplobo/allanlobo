import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  words = ["histórias", "sonhos"];
  wordToShow = "histórias";

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.changeWord();
    }, 2000);
  }

  changeWord(): void {
    this.wordToShow =
      this.words.find((word) => word !== this.wordToShow) || "sonhos";
  }
}
