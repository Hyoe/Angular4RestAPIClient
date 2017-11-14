export const environment = {
  production: true,
  adalConfig: {
    tenant: 'hyoyoegmail.onmicrosoft.com',
    clientId: '3aff21c7-97b7-4699-b2e4-0859919c7650',
    postLogoutRedirectUri: 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout',
    endpoints: {
      'https://angulartestapimssr.azurewebsites.net': 'https://angulartestapimssr.azurewebsites.net'
    },
  },
  apiUrl: 'https://angulartestapimssr.azurewebsites.net/api/'
};
