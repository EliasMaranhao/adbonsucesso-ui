import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const rotas: Routes = [
    { path: 'membros', loadChildren: () => import('./membros/membros.module').then(m => m.MembrosModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}