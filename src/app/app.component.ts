import { Component, OnInit } from '@angular/core';
import { PillarService } from './pillar.service';
import { Pillar } from './pillar';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { Photo } from './photo';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Headers, Http, RequestOptions } from '@angular/http';
import { User } from './user';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})


export class AppComponent implements OnInit {  
  title: string = "Angular Test";

  constructor(private oauthService: OAuthService, private http: Http) { }

  private async ConfigureAuth(): Promise<void> {



    this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize'; //endpoint
    //this.oauthService.tokenEndpoint = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/token'; //endpoint
    this.oauthService.responseType = 'token id_token';
    this.oauthService.userinfoEndpoint = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/openid/userinfo';
    this.oauthService.issuer = 'https://sts.windows.net/74938eab-1c7b-4d9c-8497-f9c3b262aae0/';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.jwks = 
    {"keys":[{"kty":"RSA","use":"sig","kid":"2KVcuzqAidOLqWSaol7wgFRGCYo","x5t":"2KVcuzqAidOLqWSaol7wgFRGCYo","n":"40MK4ih03cjonv5Zz2PmxjkyAuQZlm5TEsCkcSYiGBYhVJLIyAz567Q2uvkW4jKUmsqD9Ic4l4vAW5hk4Qx9FRVwpF7BRMgEqYguqWDn53nrO1hkBO6GbrQHlunVFSVRAxnQZN6nP3GlL2E7gy_kZEHFHnGgEoI4XvjF9W4c2ST_CdtX9iCDC3zYWsabwKmJeNuYXPLrVWanopsUNp0kOKPaaYgJLDMAkShW-SUvNwv_hV_Te_eXxoGQj9I98OObqTnl2p4Ob6cQg39tpZuzszZa02Qlc14_Lx1HQaR2WFuARIQgl1JUtZ4EW3x5XQlCpRdw8KOHCkkTz2OseHDIIQ","e":"AQAB","x5c":["MIIDBTCCAe2gAwIBAgIQQm0sN9lDrblM/7U/vYMVmTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE3MDkwNjAwMDAwMFoXDTE5MDkwNzAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAONDCuIodN3I6J7+Wc9j5sY5MgLkGZZuUxLApHEmIhgWIVSSyMgM+eu0Nrr5FuIylJrKg/SHOJeLwFuYZOEMfRUVcKRewUTIBKmILqlg5+d56ztYZATuhm60B5bp1RUlUQMZ0GTepz9xpS9hO4Mv5GRBxR5xoBKCOF74xfVuHNkk/wnbV/Yggwt82FrGm8CpiXjbmFzy61Vmp6KbFDadJDij2mmICSwzAJEoVvklLzcL/4Vf03v3l8aBkI/SPfDjm6k55dqeDm+nEIN/baWbs7M2WtNkJXNePy8dR0GkdlhbgESEIJdSVLWeBFt8eV0JQqUXcPCjhwpJE89jrHhwyCECAwEAAaMhMB8wHQYDVR0OBBYEFNISA3dtAzEd0muqNDbWm3kvNlJDMA0GCSqGSIb3DQEBCwUAA4IBAQClLLoAvg3dYqWO63Z6O5L7yataGcilmL3YUqCFoRKsuwej2T833qyc1iLG0iWCGeWAUonKXuGwfCSSSj2E3ksLtgV6xmuMl+NuVPpRpQo+38n+OxUoWKu963dMxnORFENEqKW0pMioipMk/HBaW3aJWyH1oT2rZ3KhFm67SFjKscF8ShAE82tQQIFwEFAXjMItW2oZVGDz3vDOaJN5xC8rfA6xkXTdcCuzy74SalKkLhpBO8S3XIOBVRZw+l0Koog8YNqhsvGsGS+hGXXNlCZTg0I1tR3g2DcSuHRcuTZKh7Z7XPPsDgleNirtvYFEvdvD4K2I7gb2H1xQn87oYAIX"]},{"kty":"RSA","use":"sig","kid":"x478xyOplsM1H7NXk7Sx17x1upc","x5t":"x478xyOplsM1H7NXk7Sx17x1upc","n":"w-SDUgtC2nAU8-qIEFXfBd3z0qgNbk0D8OIFA9lgg17_-DqB2s5ydPomNLmaee1dRGy-ULxrxA80J5f3O7GLQy8SheO7JE4nCcCFnIeaRZCHznSlSIVMgIK4MlcGsyIx0th95on0LRICnDY6EOIIQPvseHejG4_j2ihLkzL3r9vc8zvooL8ZO_hUznJ085em9SkvMyhq9B04ZQKNRhTbP23AJheYIu3A6I1YVb3Kqh_q1IDERlF7OrQeL2pToMXQwinRNPoUq9QLy6LilxhfuFnpT3I5clUHT7odd2kZDjazKm-grWHyZxFEsDkB3-jHpggnf2PS0mbnL7gffs28dQ","e":"AQAB","x5c":["MIIDBTCCAe2gAwIBAgIQG3bMDDyO6q1GrI5sdZXCrTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE3MTAxODAwMDAwMFoXDTE5MTAxOTAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMPkg1ILQtpwFPPqiBBV3wXd89KoDW5NA/DiBQPZYINe//g6gdrOcnT6JjS5mnntXURsvlC8a8QPNCeX9zuxi0MvEoXjuyROJwnAhZyHmkWQh850pUiFTICCuDJXBrMiMdLYfeaJ9C0SApw2OhDiCED77Hh3oxuP49ooS5My96/b3PM76KC/GTv4VM5ydPOXpvUpLzMoavQdOGUCjUYU2z9twCYXmCLtwOiNWFW9yqof6tSAxEZRezq0Hi9qU6DF0MIp0TT6FKvUC8ui4pcYX7hZ6U9yOXJVB0+6HXdpGQ42sypvoK1h8mcRRLA5Ad/ox6YIJ39j0tJm5y+4H37NvHUCAwEAAaMhMB8wHQYDVR0OBBYEFCO/QGygHvo1YiKeQVulJFVxO9dnMA0GCSqGSIb3DQEBCwUAA4IBAQBZTJK52b+QnBbLicaT5uxC3JnRwps6RovQzPZRBLpxATq4kj5jNMhegb5fx4Rc1dpepXWJHAGzD0Nwsab/vYSx7iqyU02IAUkwt3k7XyYK17R6gTgUAxEFBfRKM3PSFiH0b3tGA+baLT3BdY5U6ZqjxhFA0Rh7tzPZM1TO2WtENk3hKmG5r5GKECnwa5NiE5jxN+d6i8dqM+vMqDvIrfqTA3ooQWXpvs0I9YUWl/LjBNFqyY3rMzxLX3STobLFf8ayHIvVmtiFSM3glCO+8UtGKLwNnPFIfYx3VstJjOO8rjP0Z/oaZwhD0A7MrNp4ztwmXAIzYkGTVyDsNuQJgi1e"]},{"kty":"RSA","use":"sig","kid":"2S4SCVGs8Sg9LS6AqLIq6DpW-g8","x5t":"2S4SCVGs8Sg9LS6AqLIq6DpW-g8","n":"oZ-QQrNuB4ei9ATYrT61ebPtvwwYWnsrTpp4ISSp6niZYb92XM0oUTNgqd_C1vGN8J-y9wCbaJWkpBf46CjdZehrqczPhzhHau8WcRXocSB1u_tuZhv1ooAZ4bAcy79UkeLiG60HkuTNJJC8CfaTp1R97szBhuk0Vz5yt4r5SpfewIlBCnZUYwkDS172H9WapQu-3P2Qjh0l-JLyCkdrhvizZUk0atq5_AIDKRU-A0pRGc-EZhUL0LqUMz6c6M2s_4GnQaScv44A5iZUDD15B6e8Apb2yARohkWmOnmRcTVfes8EkfxjzZEzm3cNkvP0ogILyISHKlkzy2OmlU6iXw","e":"AQAB","x5c":["MIIDKDCCAhCgAwIBAgIQBHJvVNxP1oZO4HYKh+rypDANBgkqhkiG9w0BAQsFADAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwHhcNMTYxMTE2MDgwMDAwWhcNMTgxMTE2MDgwMDAwWjAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQChn5BCs24Hh6L0BNitPrV5s+2/DBhaeytOmnghJKnqeJlhv3ZczShRM2Cp38LW8Y3wn7L3AJtolaSkF/joKN1l6GupzM+HOEdq7xZxFehxIHW7+25mG/WigBnhsBzLv1SR4uIbrQeS5M0kkLwJ9pOnVH3uzMGG6TRXPnK3ivlKl97AiUEKdlRjCQNLXvYf1ZqlC77c/ZCOHSX4kvIKR2uG+LNlSTRq2rn8AgMpFT4DSlEZz4RmFQvQupQzPpzozaz/gadBpJy/jgDmJlQMPXkHp7wClvbIBGiGRaY6eZFxNV96zwSR/GPNkTObdw2S8/SiAgvIhIcqWTPLY6aVTqJfAgMBAAGjWDBWMFQGA1UdAQRNMEuAEDUj0BrjP0RTbmoRPTRMY3WhJTAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXOCEARyb1TcT9aGTuB2Cofq8qQwDQYJKoZIhvcNAQELBQADggEBAGnLhDHVz2gLDiu9L34V3ro/6xZDiSWhGyHcGqky7UlzQH3pT5so8iF5P0WzYqVtogPsyC2LPJYSTt2vmQugD4xlu/wbvMFLcV0hmNoTKCF1QTVtEQiAiy0Aq+eoF7Al5fV1S3Sune0uQHimuUFHCmUuF190MLcHcdWnPAmzIc8fv7quRUUsExXmxSX2ktUYQXzqFyIOSnDCuWFm6tpfK5JXS8fW5bpqTlrysXXz/OW/8NFGq/alfjrya4ojrOYLpunGriEtNPwK7hxj1AlCYEWaRHRXaUIW1ByoSff/6Y6+ZhXPUe0cDlNRt/qIz5aflwO7+W8baTS4O8m/icu7ItE="]}]}

    this.oauthService.clientId = 'c95efc04-8761-4737-a71a-f8ee24088bfb'; //application ID
    this.oauthService.resource = 'https://hyoyoegmail.onmicrosoft.com/6eb52dd1-1712-49d1-9103-ed25485af3e3'; //backend AAD URI
    this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout'; //endpoint
    this.oauthService.redirectUri =  window.location.origin + '/';
    //this.oauthService.scope = 'openid';
    this.oauthService.oidc = true;
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.scope = 'openid profile email offline_access roles identity voucher given_name nonce aud';
    // this.oauthService.customQueryParams = {
    //   'tenant': '74938eab-1c7b-4d9c-8497-f9c3b262aae0',
    // };













    // this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize'; //endpoint
    // //this.oauthService.tokenEndpoint = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/token'; //endpoint
    // this.oauthService.responseType = 'token id_token';
    // this.oauthService.userinfoEndpoint = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/openid/userinfo';
    // this.oauthService.issuer = 'https://sts.windows.net/74938eab-1c7b-4d9c-8497-f9c3b262aae0/';
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.jwks = 
    // {"keys":[{"kty":"RSA","use":"sig","kid":"2KVcuzqAidOLqWSaol7wgFRGCYo","x5t":"2KVcuzqAidOLqWSaol7wgFRGCYo","n":"40MK4ih03cjonv5Zz2PmxjkyAuQZlm5TEsCkcSYiGBYhVJLIyAz567Q2uvkW4jKUmsqD9Ic4l4vAW5hk4Qx9FRVwpF7BRMgEqYguqWDn53nrO1hkBO6GbrQHlunVFSVRAxnQZN6nP3GlL2E7gy_kZEHFHnGgEoI4XvjF9W4c2ST_CdtX9iCDC3zYWsabwKmJeNuYXPLrVWanopsUNp0kOKPaaYgJLDMAkShW-SUvNwv_hV_Te_eXxoGQj9I98OObqTnl2p4Ob6cQg39tpZuzszZa02Qlc14_Lx1HQaR2WFuARIQgl1JUtZ4EW3x5XQlCpRdw8KOHCkkTz2OseHDIIQ","e":"AQAB","x5c":["MIIDBTCCAe2gAwIBAgIQQm0sN9lDrblM/7U/vYMVmTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE3MDkwNjAwMDAwMFoXDTE5MDkwNzAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAONDCuIodN3I6J7+Wc9j5sY5MgLkGZZuUxLApHEmIhgWIVSSyMgM+eu0Nrr5FuIylJrKg/SHOJeLwFuYZOEMfRUVcKRewUTIBKmILqlg5+d56ztYZATuhm60B5bp1RUlUQMZ0GTepz9xpS9hO4Mv5GRBxR5xoBKCOF74xfVuHNkk/wnbV/Yggwt82FrGm8CpiXjbmFzy61Vmp6KbFDadJDij2mmICSwzAJEoVvklLzcL/4Vf03v3l8aBkI/SPfDjm6k55dqeDm+nEIN/baWbs7M2WtNkJXNePy8dR0GkdlhbgESEIJdSVLWeBFt8eV0JQqUXcPCjhwpJE89jrHhwyCECAwEAAaMhMB8wHQYDVR0OBBYEFNISA3dtAzEd0muqNDbWm3kvNlJDMA0GCSqGSIb3DQEBCwUAA4IBAQClLLoAvg3dYqWO63Z6O5L7yataGcilmL3YUqCFoRKsuwej2T833qyc1iLG0iWCGeWAUonKXuGwfCSSSj2E3ksLtgV6xmuMl+NuVPpRpQo+38n+OxUoWKu963dMxnORFENEqKW0pMioipMk/HBaW3aJWyH1oT2rZ3KhFm67SFjKscF8ShAE82tQQIFwEFAXjMItW2oZVGDz3vDOaJN5xC8rfA6xkXTdcCuzy74SalKkLhpBO8S3XIOBVRZw+l0Koog8YNqhsvGsGS+hGXXNlCZTg0I1tR3g2DcSuHRcuTZKh7Z7XPPsDgleNirtvYFEvdvD4K2I7gb2H1xQn87oYAIX"]},{"kty":"RSA","use":"sig","kid":"x478xyOplsM1H7NXk7Sx17x1upc","x5t":"x478xyOplsM1H7NXk7Sx17x1upc","n":"w-SDUgtC2nAU8-qIEFXfBd3z0qgNbk0D8OIFA9lgg17_-DqB2s5ydPomNLmaee1dRGy-ULxrxA80J5f3O7GLQy8SheO7JE4nCcCFnIeaRZCHznSlSIVMgIK4MlcGsyIx0th95on0LRICnDY6EOIIQPvseHejG4_j2ihLkzL3r9vc8zvooL8ZO_hUznJ085em9SkvMyhq9B04ZQKNRhTbP23AJheYIu3A6I1YVb3Kqh_q1IDERlF7OrQeL2pToMXQwinRNPoUq9QLy6LilxhfuFnpT3I5clUHT7odd2kZDjazKm-grWHyZxFEsDkB3-jHpggnf2PS0mbnL7gffs28dQ","e":"AQAB","x5c":["MIIDBTCCAe2gAwIBAgIQG3bMDDyO6q1GrI5sdZXCrTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE3MTAxODAwMDAwMFoXDTE5MTAxOTAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMPkg1ILQtpwFPPqiBBV3wXd89KoDW5NA/DiBQPZYINe//g6gdrOcnT6JjS5mnntXURsvlC8a8QPNCeX9zuxi0MvEoXjuyROJwnAhZyHmkWQh850pUiFTICCuDJXBrMiMdLYfeaJ9C0SApw2OhDiCED77Hh3oxuP49ooS5My96/b3PM76KC/GTv4VM5ydPOXpvUpLzMoavQdOGUCjUYU2z9twCYXmCLtwOiNWFW9yqof6tSAxEZRezq0Hi9qU6DF0MIp0TT6FKvUC8ui4pcYX7hZ6U9yOXJVB0+6HXdpGQ42sypvoK1h8mcRRLA5Ad/ox6YIJ39j0tJm5y+4H37NvHUCAwEAAaMhMB8wHQYDVR0OBBYEFCO/QGygHvo1YiKeQVulJFVxO9dnMA0GCSqGSIb3DQEBCwUAA4IBAQBZTJK52b+QnBbLicaT5uxC3JnRwps6RovQzPZRBLpxATq4kj5jNMhegb5fx4Rc1dpepXWJHAGzD0Nwsab/vYSx7iqyU02IAUkwt3k7XyYK17R6gTgUAxEFBfRKM3PSFiH0b3tGA+baLT3BdY5U6ZqjxhFA0Rh7tzPZM1TO2WtENk3hKmG5r5GKECnwa5NiE5jxN+d6i8dqM+vMqDvIrfqTA3ooQWXpvs0I9YUWl/LjBNFqyY3rMzxLX3STobLFf8ayHIvVmtiFSM3glCO+8UtGKLwNnPFIfYx3VstJjOO8rjP0Z/oaZwhD0A7MrNp4ztwmXAIzYkGTVyDsNuQJgi1e"]},{"kty":"RSA","use":"sig","kid":"2S4SCVGs8Sg9LS6AqLIq6DpW-g8","x5t":"2S4SCVGs8Sg9LS6AqLIq6DpW-g8","n":"oZ-QQrNuB4ei9ATYrT61ebPtvwwYWnsrTpp4ISSp6niZYb92XM0oUTNgqd_C1vGN8J-y9wCbaJWkpBf46CjdZehrqczPhzhHau8WcRXocSB1u_tuZhv1ooAZ4bAcy79UkeLiG60HkuTNJJC8CfaTp1R97szBhuk0Vz5yt4r5SpfewIlBCnZUYwkDS172H9WapQu-3P2Qjh0l-JLyCkdrhvizZUk0atq5_AIDKRU-A0pRGc-EZhUL0LqUMz6c6M2s_4GnQaScv44A5iZUDD15B6e8Apb2yARohkWmOnmRcTVfes8EkfxjzZEzm3cNkvP0ogILyISHKlkzy2OmlU6iXw","e":"AQAB","x5c":["MIIDKDCCAhCgAwIBAgIQBHJvVNxP1oZO4HYKh+rypDANBgkqhkiG9w0BAQsFADAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwHhcNMTYxMTE2MDgwMDAwWhcNMTgxMTE2MDgwMDAwWjAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQChn5BCs24Hh6L0BNitPrV5s+2/DBhaeytOmnghJKnqeJlhv3ZczShRM2Cp38LW8Y3wn7L3AJtolaSkF/joKN1l6GupzM+HOEdq7xZxFehxIHW7+25mG/WigBnhsBzLv1SR4uIbrQeS5M0kkLwJ9pOnVH3uzMGG6TRXPnK3ivlKl97AiUEKdlRjCQNLXvYf1ZqlC77c/ZCOHSX4kvIKR2uG+LNlSTRq2rn8AgMpFT4DSlEZz4RmFQvQupQzPpzozaz/gadBpJy/jgDmJlQMPXkHp7wClvbIBGiGRaY6eZFxNV96zwSR/GPNkTObdw2S8/SiAgvIhIcqWTPLY6aVTqJfAgMBAAGjWDBWMFQGA1UdAQRNMEuAEDUj0BrjP0RTbmoRPTRMY3WhJTAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXOCEARyb1TcT9aGTuB2Cofq8qQwDQYJKoZIhvcNAQELBQADggEBAGnLhDHVz2gLDiu9L34V3ro/6xZDiSWhGyHcGqky7UlzQH3pT5so8iF5P0WzYqVtogPsyC2LPJYSTt2vmQugD4xlu/wbvMFLcV0hmNoTKCF1QTVtEQiAiy0Aq+eoF7Al5fV1S3Sune0uQHimuUFHCmUuF190MLcHcdWnPAmzIc8fv7quRUUsExXmxSX2ktUYQXzqFyIOSnDCuWFm6tpfK5JXS8fW5bpqTlrysXXz/OW/8NFGq/alfjrya4ojrOYLpunGriEtNPwK7hxj1AlCYEWaRHRXaUIW1ByoSff/6Y6+ZhXPUe0cDlNRt/qIz5aflwO7+W8baTS4O8m/icu7ItE="]}]}

    // this.oauthService.clientId = '10e7a440-1b2d-4396-9cf3-90a73d841648'; //application ID
    // this.oauthService.resource = 'https://hyoyoegmail.onmicrosoft.com/6eb52dd1-1712-49d1-9103-ed25485af3e3'; //backend AAD URI
    // this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout'; //endpoint
    // this.oauthService.redirectUri =  window.location.origin + '/';
    // //this.oauthService.scope = 'openid';
    // this.oauthService.oidc = true;
    // this.oauthService.setStorage(sessionStorage);
    // this.oauthService.scope = 'openid profile email offline_access roles identity voucher given_name nonce aud';
    // // this.oauthService.customQueryParams = {
    // //   'tenant': '74938eab-1c7b-4d9c-8497-f9c3b262aae0',
    // // };
  }

  async ngOnInit() {
    await this.ConfigureAuth();
    await this.oauthService.tryLogin({
      // validationHandler: context => {
      //   var search = new URLSearchParams();
      //   search.set('idToken', context.idToken); 
      //   search.set('client_id', this.oauthService.clientId);
      //   return this.http.get('https://login.microsoftonline.com/common/discovery/keys', { search }).toPromise();
      // }
    });

    if (!this.oauthService.getAccessToken()) {
      await this.oauthService.initImplicitFlow();
    }

    console.log("access token - " + this.oauthService.getAccessToken());
    console.log("Id token - " + this.oauthService.getIdToken());
    console.log("expiration - " + this.oauthService.getAccessTokenExpiration());
    console.log("identity claims - " + this.oauthService.getIdentityClaims());
    console.log("has valid id token - " + this.oauthService.hasValidIdToken());
    console.log("has valid access token - " + this.oauthService.hasValidAccessToken());
    console.log("authorization header - " + this.oauthService.authorizationHeader());

    let userClaims = new User();
    let claims = this.oauthService.getIdentityClaims();
    userClaims = claims as User;
    console.log(userClaims.name);



    // this.oauthService.refreshToken().then(() => {
    //   console.debug('ok');
    // })
  }
  
}




// constructor(private _httpService: Http) { }  
// title: string = "Angular Test";  
// apiValues: string[] = []; 
// ngOnInit() {  
//     this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
//         this.apiValues = values.json();  
//     });  
// } 