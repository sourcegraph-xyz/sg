import React, { ReactNode } from 'react';
import { DeviceTypes } from "../../../types";

type PropsType = {
  children: ReactNode,
  width: number
  device: DeviceTypes,
};

// TODO: add state. probably need info for each viewer
//  viewer info: dimensions + coordinates, need to orient properly
//  Should viewers be fully separate from each other? Or should there be ability for them to interact?
//  May be nice to have a view that

// TODO: Want to be able to make different configured workspace + viewer combinations
//  Same a workspace that's similar to a code editor like intellij -- based on text and mode-actions
//  need to do some more thiking

// TODO: Workspace needs to check functions between managers -- if the viewer types are correct it allows them, else prevents

// TODO: Action can be button, click button and then moves into specific mode for transformation,
//  e.g. highlight -- need a way to know how to begin using highlight in graceful way

// TODO: No stealing focus allowed ever
// TODO: No lagged loading for sizing components

// TODO: Should handle all sizing behavior / rules for views for Desktop frontend
export class Workspace extends React.Component<PropsType> {
  // TODO: Attempt to use same Workspace for different DeviceTypes, only split when you have to
  //  phone: only allow one viewer at a time, viewers are scrolled right/left through
  render() {
    const { width } = this.props;

    // TODO: deviceType will impact classes
    return <div className="workspace" style={{ width }}>
      {this.props.children}
    </div>;
  }
}
