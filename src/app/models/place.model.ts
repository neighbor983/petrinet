import { ObserverType } from "./observerType.model";

export class Place {
  name: string;
  inhibitorArc: boolean;
  observable: boolean;
  observerType?: ObserverType;
}

/*
For a place: 
WHat is the name? (String) 
If its an inhibitor arc? (Boolean)
Is it observable? (True-combolist of either attacker/defender) 

*/