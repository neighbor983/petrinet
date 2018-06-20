import { Place } from "./place.model";
import { TransitionPlace } from "./transitionPlace.model";

export class Transition {
  name: string;
  transitionRate: number;
  fireCost: number;
  placeList: TransitionPlace[];
}

/*
For a transition: 
- What is the name? (String)
- What the rate? (Int)
- Is there a cost to fire? (Int) 
- Does a place have a controllable transition rate (link place to transition and ask for rate which is an int)
*/