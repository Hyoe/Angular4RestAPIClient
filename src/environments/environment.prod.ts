export const environment = {
  production: true,
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
