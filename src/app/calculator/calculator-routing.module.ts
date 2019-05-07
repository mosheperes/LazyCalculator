import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalculatorComponent } from "~/app/calculator/calculator.component";

const routes: Routes = [
    { path: "default", component: CalculatorComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CalculatorRoutingModule { }
