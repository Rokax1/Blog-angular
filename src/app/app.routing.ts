// imports necesarios 
import {ModuleWithProviders} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router'

// importar componentes

import {LoginComponent} from './components/login/login.component' ;
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//definnir las rutas
const appRoutes: Routes=[
    {path:'',component: HomeComponent},
    {path:'Inicio',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'Registro',component:RegisterComponent},
    {path:'**',component:ErrorComponent}    // esta ruta siempre al final 
];

//exportar configuracion
export const appRoutingProviders:any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);