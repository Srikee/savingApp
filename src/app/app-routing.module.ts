import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'checkbalance',
        loadChildren: () => import('./checkbalance/checkbalance.module').then(m => m.CheckbalancePageModule)
    },
    {
        path: 'uploadfile',
        loadChildren: () => import('./uploadfile/uploadfile.module').then(m => m.UploadfilePageModule)
    },
    {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
    },
    {
        path: 'account-detail/:account_id',
        loadChildren: () => import('./account-detail/account-detail.module').then(m => m.AccountDetailPageModule)
    },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
