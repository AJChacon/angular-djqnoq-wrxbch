import { Component, ViewEncapsulation, OnInit, ViewChild } from "@angular/core";
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService
} from "@syncfusion/ej2-angular-pdfviewer";

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService
  ]
})
export class AppComponent {
  @ViewChild("pdfviewer")
  public pdfviewerControl: PdfViewerComponent;
  public formFieldValue: number = 0;
  public service: string =
    "https://ej2services.syncfusion.com/production/web-services/api/pdfviewer";
  public document: string = "FormFillingDocument.pdf";
  ngOnInit(): void {
    // ngOnInit function
  }
  public nextField(): void {
    for (
      let m: number = this.formFieldValue;
      m < this.pdfviewerControl.formFieldCollections.length;
      m++
    ) {
      let currentData: any = this.pdfviewerControl.formFieldCollections[m];
      let currentTarget: any = document.getElementById(currentData.id);
      if (currentTarget) {
        currentTarget.blur();
        currentTarget.focus();
        this.formFieldValue++;
        if (
          this.formFieldValue ==
          this.pdfviewerControl.formFieldCollections.length
        ) {
          this.formFieldValue = 0;
        }
        break;
      }
    }
  }
}
