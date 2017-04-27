import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { LoggedInGuard } from './loggedinguard.service';

@NgModule({
	imports: [
		HttpModule,
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: LoginComponent },
			{ path: '/home', component: HomeComponent }
		])
	],
	providers: [
		LoggedInGuard
	],
	declarations: [
		AppComponent,
		LoginComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }