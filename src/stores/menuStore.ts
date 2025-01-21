import { useStore } from '@nanostores/react';
import { map } from 'nanostores';

export type MenuTypes = 'site';

export const menuOpenStore = map<Record<MenuTypes, Boolean>>();

export function openMenu(menuType: MenuTypes) {
  menuOpenStore.setKey(menuType, true);
}

export function closeMenu(menuType: MenuTypes) {
  menuOpenStore.setKey(menuType, false);
}

export function useMenuState(menuType: MenuTypes) {
  const $menuOpenStore = useStore(menuOpenStore);
  return $menuOpenStore[menuType];
}
