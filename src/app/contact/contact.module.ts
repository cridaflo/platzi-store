import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
    declarations: [
        ContactComponent,
        LayoutComponent,
        ListComponent,
    ],
    imports: [
        ContactRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class ContactModule { }
