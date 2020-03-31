
## React Calculator usign React Hooks + RxJS

### Steps to run of local:
1. Clone this repo
2. npm/yarn install
3. npm/yarn run start (then point browser to localhost:3000)
4. npm/yarn run test (to run the test suite)

PS: I had some problems with NPM on my mac with the latest OS. Prefer using Yarn.

### Tech Stack:
1. React Hooks for state management
2. RxJS for event based communication between components
3. React Bootstrap for CSS foundation
4. Styled components for customising CSS

### Features Implemented:
1. Functions - Sin, Cos, Tan, Log, Ln, Pow
2. Operators - Plus, Minus, Addition, Division, Modulus using PEDMAS
3. Contants - PI and E
4. Special Functionality - Reset, Ans, Undo, Redo
5. Server Faking using async function service
6. Throttling of server using RxJS operators
7. Keyboard shortcuts
8. History storing of previous results

### Notes:
1. Tests implemented only limitedly to demonstrate, due to time constraints
2. Live Calculations are performed, writing the rule book was a good challenge to handle user inputs and manage the different edge cases
3. React Hooks took me some time to get adjusted to but I like it now
4. RxJS is definitely fun, although I had a similar experience in Vue as it has its own Event.bus, similar to RxJS but it lacks in RxJS's operators
5. Dint spend too much time in styling, used react bootstrap for foundation and responsiveness
6. Used styled components package to write extend CSS, I like how its usable as components
7. Testing using Jest, was straight forward with react testing tools
8. Using Eval to evaluate mathematical string expression, the reason to go for this approach is that, it offers in built PEDMAS.
Otherwise, writing PEDMAS would take a long time, not implementing PEDMAS and going from left to right of operations would defeat the purpose of Live Calculator

### Improvements that can be made:
1. More test coverage
2. Slightly better styling
