import { WebPlugin } from '@capacitor/core';
import { CapacitorPushNotificationPlugin } from './definitions';

export class CapacitorPushNotificationWeb extends WebPlugin implements CapacitorPushNotificationPlugin {
  constructor() {
    super({
      name: 'CapacitorPushNotification',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorPushNotification = new CapacitorPushNotificationWeb();

export { CapacitorPushNotification };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorPushNotification);
