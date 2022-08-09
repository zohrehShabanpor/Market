import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";
import { Module } from "_";

enableStaticRendering(typeof window === "undefined");

let store: Store;

export class Store {
  public onHold?: Array<any>;
  public doing?: Array<any>;
  public reserved?: Array<any>;
  public activeCartItem?: number;

  constructor() {
    makeAutoObservable(this);
  }

  public setOnHoldItems(items: Array<any>) {
    this.onHold = items;
  }
  public removeFromOnHoldItems(item: any) {
    this.onHold = this.onHold?.filter((e) => e !== item);
  }

  public setDoingItems(items: Array<any>) {
    this.doing = items;
  }
  public removeFromDoingItems(item: any) {
    this.doing = this.doing?.filter((e) => e !== item);
  }

  public setReservedItems(items: Array<any>) {
    this.reserved = items;
  }
  public removeFromReservedItems(item: any) {
    this.reserved = this.reserved?.filter((e) => e !== item);
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
