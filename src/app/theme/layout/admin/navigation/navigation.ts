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
    icon: 'icon-navigation',
    children: [
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
        icon: 'feather icon-shopping-cart'
      },
      {
        id: 'tracking',
        title: 'Tracking',
        type: 'item',
        url: '/forms/tracking',
        classes: 'nav-item',
        icon: 'feather icon-map'
      },
      {
        id: 'inventory',
        title: 'Inventario',
        type: 'item',
        url: '/forms/wizard1',
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
            url: '/dashboard/e-commerce1'
          },
          {
            id: 'listadeprecios',
            title: 'Lista de Precios',
            type: 'item',
            url: '/dashboard/e-commerce1'
          },
          {
            id: 'mediosdepago',
            title: 'Medios de Pago',
            type: 'item',
            url: '/dashboard/e-commerce1'
          },
          {
            id: 'notificaciones',
            title: 'Notificaciones',
            type: 'item',
            url: '/dashboard/e-commerce1'
          },
          {
            id: 'clientes',
            title: 'Clientes',
            type: 'item',
            url: '/dashboard/e-commerce1'
          },
          {
            id: 'personal',
            title: 'Personal',
            type: 'item',
            url: '/dashboard/e-commerce1'
          }
        ]
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
