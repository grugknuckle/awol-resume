/**
 *  External Modules
 */

import Vue from "vue"
import createAuth0Client from "@auth0/auth0-spa-js"
 

 /** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState({}, document.title, window.location.pathname)
const DEFAULT_REDIRECT_URI = process.env.VUE_APP_DOMAIN

let instance
 
export const getInstance = () => instance
 
export const useAuth0 = ({
   onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
   redirectUri = DEFAULT_REDIRECT_URI,
   ...pluginOptions
}) => {
  if (instance) return instance
 
  instance = new Vue({
    data() {
      return {
        isLoading: true,
        isAuthenticated: false,
        user: {},
        auth0Client: null,
        error: null,
      }
    },
    methods: {
      async loginWithPopup(options, config) {
        this.popupOpen = true

        try {
          await this.auth0Client.loginWithPopup(options, config)
          this.user = await this.auth0Client.getUser()
          this.isAuthenticated = await this.auth0Client.isAuthenticated()
          this.error = null
        } catch (e) {
          console.error(e)
          this.error = e
        } finally {
          this.popupOpen = false
        }
      },
      async handleRedirectCallback() {
        this.isLoading = true
        try {
          await this.auth0Client.handleRedirectCallback()
          this.user = await this.auth0Client.getUser()
          this.isAuthenticated = true
        } catch (error) {
          this.error = error
        } finally {
          this.isLoading = false
        }
      },
      loginWithRedirect(options) {
        return this.auth0Client.loginWithRedirect(options)
      },
      getIdTokenClaims(options) {
        return this.auth0Client.getIdTokenClaims(options)
      },
      getTokenSilently(options) {
        return this.auth0Client.getTokenSilently(options)
      },
      getTokenWithPopup(options) {
        return this.auth0Client.getTokenWithPopup(options)
      },
      logout(options) {
        return this.auth0Client.logout(options)
      }
    },
    async created() {
      this.auth0Client = await createAuth0Client({
        ...pluginOptions,
        domain: pluginOptions.domain,
        client_id: pluginOptions.clientId,
        audience: pluginOptions.audience,
        redirect_uri: redirectUri,
      })
 
       try {
         if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
           const { appState } = await this.auth0Client.handleRedirectCallback()
 
           onRedirectCallback(appState)
         }
       } catch (error) {
         this.error = error
       } finally {
         this.isAuthenticated = await this.auth0Client.isAuthenticated()
         this.user = await this.auth0Client.getUser()
         this.isLoading = false
       }
    },
  })
 
  return instance
}
 
 /**
  *  Vue Plugin Definition
  */
 
export const Auth0Plugin = {
  install(Vue, options) {
    Vue.prototype.$auth = useAuth0(options)
  },
}
 