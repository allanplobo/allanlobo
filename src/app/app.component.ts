import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const language = translate.getBrowserLang() || "pt";
    translate.setDefaultLang(language);
    // TODO: change document lang when change current language
    this.document.documentElement.lang = language;
  }
}
