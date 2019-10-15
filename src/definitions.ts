declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorPushNotification: CapacitorPushNotificationPlugin;
  }
}

export interface CapacitorPushNotificationPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
