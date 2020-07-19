import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Icon from 'components/Icon/Icon.js';
import useStyles from './useStyles.js';

const Welcome = () => {
  const classes = useStyles();
  const [value, changeValue] = React.useState('');

  const onChange = (e) => {
    changeValue(e.target.value);
  };

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
          <br />
          <input className={classes.input} value={value} onChange={onChange} />
        </Route>
      </Switch>
    </div>
  );
};

export default Welcome;
