import { writable } from "svelte/store";
import { DEFAULT_COLORS } from "../constants";

export const foregroundColorStores = writable(DEFAULT_COLORS[0]);
export const backgroundColorStores = writable(DEFAULT_COLORS[14]);
