import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginService } from "./services/login.service";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
export const routes: Routes = [
    { path: '', component: LoginComponent },
];
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        RouterModule.forRoot(routes),
        BrowserModule, 
    ],
    providers: [LoginService]

})

export class AppModule { }