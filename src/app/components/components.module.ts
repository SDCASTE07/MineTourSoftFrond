import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { HttpClientModule } from '@angular/common/http';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        
    ],
    declarations: [
        ComponentsComponent,
    ],
})
export class ComponentsModule { }
