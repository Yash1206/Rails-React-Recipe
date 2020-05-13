import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }
}

export default Recipes;
