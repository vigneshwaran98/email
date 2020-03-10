import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { CarbonModule } from "./carbon-module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UIShellModule } from "carbon-components-angular";


import { HeaderComponent } from "./header/header.component";

import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from "@angular/common/http";

import { EmailSuppressionComponent } from './email-suppression/email-suppression.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		
		FooterComponent,
		
		EmailSuppressionComponent,
		
		ThankYouComponent
	],
	imports: [
	
		BrowserModule,
		BrowserAnimationsModule,
		
		AppRoutingModule,
		UIShellModule,
		
		CarbonModule,
		ReactiveFormsModule,
		
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
