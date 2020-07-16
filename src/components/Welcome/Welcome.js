import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Icon from 'components/Icon/Icon.js';
import useStyles from './useStyles.js';

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon name="fire" width="50px" height="50px" />
      <Switch>
        <Route exact path="/path">
          Path!
          <br />
          <Link to="/">Root</Link>
        </Route>
        <Route exact path="/">
          <h1>Ho/Ho</h1>
          <br />
          <Link to="/path">Path</Link>
        </Route>
      </Switch>
    </div>
  );
};

export default Welcome;
