import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skynance.app',
  appName: 'Skynance',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
