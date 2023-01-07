"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: ./src/config/get-env.ts
function getEnv(name) {
    const val = process.env[name];
    if (!val) {
        throw new Error(`Cannot find environmental variable: ${name}`);
    }
    return val;
}

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts



let jwt = __webpack_require__(9344);
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    // https://next-auth.js.org/configuration/providers
    providers: [
        // FacebookProvider({
        //   clientId: getEnv('FACEBOOK_CLIENT_ID'),
        //   clientSecret: getEnv('FACEBOOK_CLIENT_SECRET'),
        // }),
        google_default()({
            clientId: getEnv('GOOGLE_CLIENT_ID'),
            clientSecret: getEnv('GOOGLE_CLIENT_SECRET')
        }), 
    ],
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: getEnv('SECRET').replace(/\\n/gm, '\n'),
    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        strategy: 'jwt',
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60,
        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        updateAge: 24 * 60 * 60
    },
    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        // Set to true to use encryption (default: false)
        //encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        //  encode: async ({ secret, token, maxAge }) => {},
        //  decode: async ({ secret, token, maxAge }) => {},
        maxAge: 60 * 60 * 24,
        // You can define your own encode/decode functions for signing and encryption
        async encode ({ secret , token , maxAge  }) {
            return await jwt.sign(token, secret, {
                algorithm: 'RS256'
            });
        },
        async decode ({ secret , token , maxAge  }) {
            return await jwt.verify(token, secret, {
                algorithms: [
                    'RS256'
                ]
            });
        }
    },
    // You can define custom pages to override the built-in ones. These will be regular Next.js pages
    // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
    // The Routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request'
    },
    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        async jwt ({ token , account  }) {
            if (account) {
                const { access_token , provider  } = account;
                token.provider = provider;
                // reform the `token` object from the access token we appended to the `user` object
                token.access_token = access_token;
            }
            return token;
        },
        async session ({ session , token , user  }) {
            const { access_token , provider  } = token;
            session.provider = provider;
            session.access_token = access_token;
            return session;
        }
    },
    async signIn ({ account , profile , user  }) {
        if (account.provider === "google") {
            var ref;
            return profile.email_verified && (profile === null || profile === void 0 ? void 0 : (ref = profile.email) === null || ref === void 0 ? void 0 : ref.endsWith("@gmail.com"));
        } else return true // Return true to allow sign in
        ;
    },
    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},
    // Enable debug messages in the console if you are having problems
    debug: getEnv('NODE_ENV') === 'development'
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8738));
module.exports = __webpack_exports__;

})();