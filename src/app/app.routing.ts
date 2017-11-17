import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { componentFactoryName } from '@angular/compiler';
import { UserEditComponent } from './users/user-edit/user-edit.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/user',
        pathMatch: full
    },
    {
        path: 'users',
        component: UsersComponent,
        /*children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: 'create',
                component: UserCreateComponent
            },
            {
                path: ':id',
                component: UserSingleComponent
            },
            {
                path: ':id/detail',
                component: UserEditComponent
            }
        ]*/
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(router);
