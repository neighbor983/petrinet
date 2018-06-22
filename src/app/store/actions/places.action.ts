import { Action } from '@ngrx/store';

import { Place } from '../../models/place.model';

export const ADD_PLACE = '[Place] Add Place';
export const ADD_PLACE_FAIL = '[Place] Failed to Add Place';
export const ADD_PLACE_SUCCESS = '[Place] Added Place Successfully';

export class AddPlace implements  Action {
    readonly type = ADD_PLACE;
    constructor(public payload: Place) {}
}

export class AddPlaceFail implements  Action {
    readonly type = ADD_PLACE_FAIL;
    constructor(public payload: any) {}
}

export class AddPlaceSuccess implements  Action {
    readonly type = ADD_PLACE_SUCCESS;
    constructor(public payload: Place){}
}

export type PlacesAction = 
      AddPlace 
    | AddPlaceFail 
    | AddPlaceSuccess;