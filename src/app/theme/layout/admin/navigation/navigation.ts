import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: 'feather icon-home',
    url: '/dashboard/e-commerce',
    classes: 'nav-item'
  },
  {
    id: 'purchase-order',
    title: 'Orden de Pedido',
    type: 'item',
    url: '/forms/wizard',
    classes: 'nav-item',
    icon: 'feather icon-package'
  },
  {
    id: 'configuration',
    title: 'Configuración',
    type: 'collapse',
    icon: 'feather icon-settings',
    children: [
      {
        id: 'canastillas',
        title: 'Canastillas',
        type: 'item',
        url: '/dashboard/e-commerce'
      },
      {
        id: 'listadeprecios',
        title: 'Lista de Precios',
        type: 'item',
        url: '/dashboard/e-commerce'
      },
      {
        id: 'mediosdepago',
        title: 'Medios de Pago',
        type: 'item',
        url: '/dashboard/e-commerce'
      },
      {
        id: 'notificaciones',
        title: 'Notificaciones',
        type: 'item',
        url: '/dashboard/e-commerce'
      },
      {
        id: 'clientes',
        title: 'Clientes',
        type: 'item',
        url: '/dashboard/e-commerce'
      },
      {
        id: 'personal',
        title: 'Personal',
        type: 'item',
        url: '/dashboard/e-commerce'
      }
      ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
