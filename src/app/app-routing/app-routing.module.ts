import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HelloUserComponent } from '../hello-user/hello-user.component';


const routes: Routes = [
	{
        path: '/hello-user',
        isAuthenticated:[userGuard],
        component: HelloUserComponent,
    },
    {
        path: '',
        component: DashboardComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }