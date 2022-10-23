import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from "@ngx-translate/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopbarComponent } from "./topbar.component";

describe("TopbarComponent", () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopbarComponent],
      providers: [
        TranslateService,
        TranslateStore,
        TranslateCompiler,
        TranslateLoader,
      ],
      imports: [TranslateModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create topbar with portuguese labels", () => {
    expect(component).toBeTruthy();
  });
});
