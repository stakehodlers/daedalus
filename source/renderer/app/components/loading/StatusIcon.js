import React, { Component } from 'react';

export default class IsNodeRunningIcon extends Component {

  render() {
    const { color } = this.props;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36">
        <g fill="none" fillRule="evenodd">
          <path d="M0-6h48v48H0z" opacity=".2" />
          <path stroke={color} strokeLinecap="round" strokeWidth="4" d="M39.556 33.556A21.931 21.931 0 0 0 46 18a21.931 21.931 0 0 0-6.444-15.556M33.9 27.9A13.956 13.956 0 0 0 38 18c0-3.866-1.567-7.366-4.1-9.9M28.243 22.243A5.981 5.981 0 0 0 30 18a5.981 5.981 0 0 0-1.757-4.243M8.444 33.556A21.931 21.931 0 0 1 2 18 21.931 21.931 0 0 1 8.444 2.444M14.1 27.9A13.956 13.956 0 0 1 10 18c0-3.866 1.567-7.366 4.1-9.9M19.757 22.243A5.981 5.981 0 0 1 18 18c0-1.657.672-3.157 1.757-4.243" />
        </g>
      </svg>
    );
  }
}
