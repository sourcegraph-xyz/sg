import React, { ReactNode } from 'react';
import {AppDispatch, DeviceTypes, ReceiveScopesActionType} from "../../../types";
import {Action, Dispatch} from "redux";

import { Client } from 'client';
import {connect} from "react-redux";
import {fetchScopesIfNeeded} from "../../../redux/actions/scopes";

type PropsType = {
  children: ReactNode,
  width: number
  device: DeviceTypes,
  client: Client,
  fetchScopes: (client: Client) => Dispatch<Action<ReceiveScopesActionType>>
};

// TODO: How to make ListScopes ALSO user-defineable? Make it definable as a view?
export class PrivateListScopes extends React.Component<PropsType> {
  render() {
    const { width } = this.props;

    /*
    1. Fetch scopes metadata
    2. Render scope links to viewers
     */

    return <div className="scopes-list" style={{ width }}>
      {this.props.children}
    </div>;
  }
}

const mapStateToProps = (state: any) => {
  const { scopes, forums } = state;
  return {
    scopes,
    forums,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchScopes: (client: Client) => dispatch(fetchScopesIfNeeded(client)),
});

export const ListScopes = connect(mapStateToProps, mapDispatchToProps)(PrivateListScopes);
