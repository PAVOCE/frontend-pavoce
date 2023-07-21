import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {SidebarComponent} from "../app/components/sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";

const imports: any[] = [
 MatButtonModule,
 MatIconModule,
 MatInputModule,
 MatCheckboxModule,
 MatRadioModule,
 MatSelectModule,
 MatSliderModule,
 MatSlideToggleModule,
 MatMenuModule,
 MatToolbarModule,
 MatCardModule,
 MatTabsModule,
 MatExpansionModule,
 MatGridListModule,
 MatListModule,
 MatSnackBarModule,
  MatSidenavModule,
 MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatTableModule,
 MatSortModule,
 MatPaginatorModule,
  CommonModule,
];

const declarations:any[] = [SidebarComponent];
@NgModule({
  imports,
  declarations,
  exports: [...imports, ...declarations]
  // exports: [...imports]
})
export class SharedModule{}
