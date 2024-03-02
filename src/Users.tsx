import React from "react";
import { RouteComponentProps } from "react-router-dom";
export function Users(props: RouteComponentProps<{ id: string }>) {
  return <div>UserID-{props.match.params.id}</div>;
}
