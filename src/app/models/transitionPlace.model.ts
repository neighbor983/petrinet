import { Place } from "./place.model";

export class TransitionPlace {
  place: Place;
  transitionRate: number;
}

/*

- Does a place have a controllable transition rate (link place to transition and ask for rate which is an int)
*/