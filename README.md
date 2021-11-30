# NEXT.js Firebase

### Install the following moudles
 ```npm
    npm install react-firebase-hooks react-icons
    npm install -D babel-plugin-styled-components
 ```

### Package.json File
your package.json file should contain the following moudles. It is fine to have different minor versions.
If you have a different major version the first number in the version update your package using ```npm update package@version-number``` 
 ```json
  "dependencies": {
    "firebase": "^9.5.0",
    "next": "^12.0.4",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-firebase-hooks": "^4.0.1",
    "react-icons": "^4.3.1",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "@svgr/cli": "^5.5.0",
    "babel-plugin-styled-components": "^1.13.3",
    "sass": "^1.43.4"
  }

 ```

### ENV FILES
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=