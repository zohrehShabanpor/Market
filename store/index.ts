import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";
import { Module } from "_";

enableStaticRendering(typeof window === "undefined");

let store: Store;

export class Store {
  public currentModule?: Module;
  public themeColor?: string;
  public activeCartItem?: number;

  constructor() {
    makeAutoObservable(this);
  }

  public setModule(item: Module) {
    this.currentModule = item;
    this.themeColor = item.themeColor;
  }

  public setActiveCartItem(item: number) {
    this.activeCartItem = item;
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new Store();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
