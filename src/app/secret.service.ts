import {Injectable} from '@angular/core';
@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'hyoyoegmail.onmicrosoft.com',
            clientId: '62fcfd5c-59cf-40b9-ba1a-958da0c55357',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}