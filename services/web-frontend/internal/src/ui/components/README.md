# Component Organization 

```
<${Device}Workspace> (1) 
    <Manager> (2) 
        <${Device}${Type}Viewer> (3) 
            ... Document ... (4)  
        <${Device}${Type}Viewer>  
    </Manager>
    ...
</${Device}Workspace>
```

1. `${Device}Workspace`: Devices will include `Desktop`, `iOS`, `iPadOS`, `Android`, the `Workspace` sets UI rules regarding `Views`. A `Workspace` can be saved such that a specific configuration of 
2. `Manager`: Everything reduces into `Nodes`, `Edges`, and `Scopes`. `Manager` handles state management patterns in a generic way. 
3. `${Device}${Type}Viewer`: Types will include `Text`, `Scope`, `Transformation`, `Code`, etc. The typed `Viewer` takes into account the `Type` version, and its available `Transformations` and `${Device}Actions` such that they're rendered in UI.
4. The typed `Viewer` will need a `read` and `write` mode. The `write` mode should be a superset of `read`.
5. If an `Action` is applied across `Viewers` it will check the types to ensure the transformation is possible. If `type` is correct the `Action` will be allowed to `READ` values from other scope. 

Division of Labor: 
1. Workspace: Viewer interaction (`Desktop`: orientation, `iOS`: swiping, etc)
2. Manager: generic state management 
3. Typed Viewer: Correct Type/View/Transformations/Actions

Questions: 
- For (3) how will actions be translated across devices? In this world one device may have a corresponding `Action` but another may not, creating the immediate demand for someone to make it. That sounds good to me honestly. In that case the `Transformation` can still be offered but may not have all `write` options motiviating people to build them.
- How can viewers interact? 
    - May want to make one viewer _relative_ to another. I.e. if we want to view document and then follow transformations off the document it will. 