import React, {PureComponent} from 'react';
import classes from './time.module.css';

export class Time extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const minutes = this.state.date.getUTCMinutes() >= 0 && this.state.date.getUTCMinutes() <=9 ? `0${this.state.date.getUTCMinutes()}` : this.state.date.getUTCMinutes();
    return (
      <div className={classes.time}>
        {`${this.state.date.getHours()}:${minutes}`}
      </div>
    );
  }
}