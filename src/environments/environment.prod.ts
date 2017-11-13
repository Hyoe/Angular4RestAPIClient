export const environment = {
  production: true,
  adalConfig: {
    tenant: 'hyoyoegmail.onmicrosoft.com',
    clientId: 'b2624dc4-d059-4cd5-8d13-f68188413dfc',
    postLogoutRedirectUri: 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout',
    endpoints: {
      'https://angulartestapimssr.azurewebsites.net': 'https://angulartestapimssr.azurewebsites.net'
    },
  },
  apiUrl: 'https://angulartestapimssr.azurewebsites.net/api/'
};
