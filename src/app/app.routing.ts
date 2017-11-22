import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { componentFactoryName } from '@angular/compiler';
import { UserEditComponent } from './users/user-edit/user-edit.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent
            }/*,
            {
                path: 'create',
                component: UserCreateComponent
            }*/,
            {
                path: ':id',
                component: UserSingleComponent
            },
            {
                path: ':id/edit',
                component: UserEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // --> debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {}
