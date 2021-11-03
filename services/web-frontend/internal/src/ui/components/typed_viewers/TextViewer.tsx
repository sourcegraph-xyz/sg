import React, { ReactNode } from 'react';
import { DeviceTypes } from "../../../types";

type PropsType = {
  children: ReactNode,
  width: number,
  device: DeviceTypes,
};

/*
State:
- Focus
-

 */

// NOTE: Takes specific text-specific information (like actions and specific args)
export class TextViewer extends React.Component<PropsType> {
  // For Desktop can completely control available actions. Need to ensure that action is completely scoped to its type args.
  render() {
    const { width } = this.props;
    return <div className="typed-viewer" style={{ width }}>
      {this.props.children}
    </div>;
  }
}
