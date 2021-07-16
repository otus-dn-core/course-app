// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config: {
      apiKey: "AIzaSyByGaIuGRJQo0UeLM0jWNpB3lK2NEmDLLE",
      authDomain: "rostof-admin.firebaseapp.com",
      projectId: "rostof-admin",
      storageBucket: "rostof-admin.appspot.com",
      messagingSenderId: "290450227735",
      appId: "1:290450227735:web:c1c58e3aee6217ef72d252"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
