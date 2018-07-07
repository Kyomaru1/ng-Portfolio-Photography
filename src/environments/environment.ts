// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyApVz4ElwaCF9rL6t1m63rS3XeamBPnjvE",
    authDomain: "photo-portfolio-eb12b.firebaseapp.com",
    databaseURL: "https://photo-portfolio-eb12b.firebaseio.com",
    projectId: "photo-portfolio-eb12b",
    storageBucket: "photo-portfolio-eb12b.appspot.com",
    messagingSenderId: "77182785303"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
