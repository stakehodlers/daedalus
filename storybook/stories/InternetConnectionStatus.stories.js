// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryDecorator from './support/StoryDecorator';
import InternetConnectionOfflineStatus from '../../source/renderer/app/components/status/InternetConnectionOfflineStatus';

storiesOf('Internet Connection Status', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)

  // ====== Stories ======

  .add('Offline - default', () => (
    <InternetConnectionOfflineStatus
      checking={false}
      checkAgain={action('checkAgain')}
    />
  ))

  .add('Offline - with checking spinner', () => (
    <InternetConnectionOfflineStatus
      checking
      checkAgain={action('checkAgain')}
    />
  ));
