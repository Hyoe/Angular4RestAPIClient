// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.



export const environment = {
  production: false,
  adalConfig: {
    tenant: 'hyoyoegmail.onmicrosoft.com',
    clientId: 'f517cdbc-e3b9-4d75-a019-269421890c4f',
    postLogoutRedirectUri: 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout',
    endpoints: {
      'https://angulartestapimssr.azurewebsites.net': 'https://angulartestapimssr.azurewebsites.net'
    },
  },
  apiUrl: 'https://angulartestapimssr.azurewebsites.net/api/'
};