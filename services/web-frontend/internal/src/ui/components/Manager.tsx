import React, { ReactNode } from 'react';

type PropsType = {
  children: ReactNode,
};

/*
State:
- Mode: `read`, `write`
- Nodes
- Edges
- Scopes (should also be versioned)

Functionality:
- Should use client to push and pull information
- Need to keep things up to date
- Read mode: Highlight is a transformation for Read mode, not for Write. Seems like Transformations have a mode.
- Should automatically pull from

Questions
- 1 client per Workspace or 1 per Manager? Or share the same within each Manager?
 */

// NOTE: Handles generic Node/Edge state + dimensions
export class Manager extends React.Component<PropsType> {
  render() {
    return <div className="manager">
      {this.props.children}
    </div>;
  }
}
