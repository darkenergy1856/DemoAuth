import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc/oauth-service';
import { AuthConfig } from 'angular-oauth2-oidc';

const authCodeFlowConfig: AuthConfig = {

  issuer: 'http://localhost:8080/cas/',

  // strict discovery document disallows urls which not start with issuers url
  strictDiscoveryDocumentValidation: false,

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'implicit',

  // set the scope for the permissions the client should request
  scope: 'openid profile email',

  showDebugInformation: true,
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly oAuthService : OAuthService) {
    oAuthService.configure(oAuthService)
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        }else{
          oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })

  }

}
