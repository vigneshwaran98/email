import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {EmailSuppressionComponent  } from "./email-suppression/email-suppression.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
const routes: Routes = [
	{ path: "", redirectTo: "emailsuppression", pathMatch: "full" },
	
	{ path: "emailsuppression", component: EmailSuppressionComponent },
	{path:"thankyou",component:ThankYouComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
