import React from "react";
import { connect } from "react-redux";

const Details = ({ toDo }) => {
  // console.log(props);
  // console.log(toDo.text);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Details);
