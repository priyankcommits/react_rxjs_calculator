// All event streams
import { BehaviorSubject } from 'rxjs';

// Used for listening to button clicks from button layout
const buttonEvent$ = new BehaviorSubject(0);

// Used for send calculation requests from input to output box
const operationEvent$ = new BehaviorSubject(0);

// Used for sending results to history component
const resultEvent$ = new BehaviorSubject(0);

// Used for selecting a value from history and sending to input box
const resultSelectionEvent$ = new BehaviorSubject(0);

export { buttonEvent$, operationEvent$, resultEvent$, resultSelectionEvent$ };
