# TODO 

In Order: 

Basics: [Get something coded you're prepared to throw away]
- [ ] Workspace + 1 View: Allow read/write on a single scope.
- [ ] List Scopes: Show existing scopes. 
- [ ] Workspace + N Views: Allow read/write on multiple scopes. 
- [ ] Create Default Transformations + Actions
    - [ ] Read Transformations: References

Thar be meta: [This part of the TODO is absolutely going to explode but I want something down]
- [ ] Create default `GenesisText` Type. 
- [ ] Make mock scopes of type `GenesisText`. 
- [ ] Create new `Type`-typed Scope, which extends `GenesisText`. 
- [ ] Create new `Type`-typed Scope for `Transformation`. 
- [ ] Define default transformations as scopes of `Transformation`-type. 
- [ ] Define new scope of type `Type` called `Text` which extends `GenesisText` and overrides its transformations using newly defaults `Transformations`. 
- [ ] Define new scope of type `Type` called `Action`. 
- [ ] Define default actions as scopes of `Action`-type. 
- [ ] Define new scope of type `Type` called `View` which is linked to type `Text` and maps each `Transformation` to an `Action`. 
- [ ] Allow workspace to utilize any user-defined `View`. When opening a scope of `Type` X open it using `View` type of choice. [Cannot currently think of a feasible way to make `Workspace` a `Type`, `View` is already a bit difficult to imagine.] 
- [ ] Add Device types -- make `Action` and `Device` device-specific. [Also not sure how to do that]

Notes: 
- A timeline can be pictured as a View on another View's document. 
- Could all the buttons of the UIs be defined as transformations and views? 
- Could `Workspace` be a type? 

Done: