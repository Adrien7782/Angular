import { Routes } from '@angular/router';
import { Portfolio } from './mesComposants/portfolio/portfolio';
import { Presentation } from './mesComposants/presentation/presentation';
import { ToDoList } from './mesComposants/to-do-list/to-do-list';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "/to-do-list",
        pathMatch: 'full'
    },

    {
        path: 'presentation',
        component: Presentation
    },

    {
        path: "portfolio",
        component: Portfolio
    },

    {
        path: 'to-do-list',
        component: ToDoList
    },

    {
        path: '**',
        component: NotFound
    }

];
