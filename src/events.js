// All event streams
import { BehaviorSubject } from 'rxjs';

// Used for listening to button clicks from button layout
export const buttonEvent$ = new BehaviorSubject(0);

// Used for send calculation requests from input to output box
export const operationEvent$ = new BehaviorSubject(0);

// Used for sending results to history component
export const resultEvent$ = new BehaviorSubject(0);
