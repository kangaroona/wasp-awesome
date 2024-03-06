import React from "react";
import { RouteComponentProps } from "react-router-dom";
import BarChart from "./components/Barchart/BarChart";
export function Users(props: RouteComponentProps<{ id: string }>) {
  return (
  <div>
    <h1>UserID-{props.match.params.id}</h1>
    <BarChart id="1"/>
  </div>);
}
