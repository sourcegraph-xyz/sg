
import { StoreDispatch } from '../index';

// Store Types
export type AppDispatch = typeof StoreDispatch;

// Interface Definitions
interface EmptyAction {
  type: string
}

interface ErrorAction {
  type: string,
  error: string,
}

export enum DeviceTypes {
  Desktop,
  iOS,
  iPadOS,
  Android,
}

// TODO: transformations appear to be typed, e.g.
//  `read`: `highlight`
//  `write`: `replace`
//  `execute`: `import`, function call, running one type on another (?) -- is watching a video / listening to audio READ or EXECUTE? First thought is READ.
// Example:
//  - `Action` type
//  - `read`: read the document
//  - `write`: modify the document
//  - `execute`: run the document
export enum Modes {
  Read,
  Write,
  Execute,
}

// Type Definitions
export type RequestSilosActionType = () => EmptyAction;
export type RequestSilosErrorType = (error: string) => ErrorAction;
// TODO: Update "any" to Silo interface when it's better defined
export type ReceiveSiloActionType = (
  resp: {list: Array<any>}
) => ({type: string, silos: Array<any>});

// Dispatch Method Example:
// (client: Client) => Dispatch<Action<receiveSiloActionType>>

export type ReceiveScopesActionType = (
  resp: {list: Array<any>}
) => ({type: string, scopes: Array<any>});
