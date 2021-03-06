import * as admin from 'firebase-admin';
// eslint-disable-next-line max-len
import * as serviceAccount from '../resources/tr8hiveapp-firebase-adminsdk-zzx7h-124c37778a.json';

const params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url
  }

admin.initializeApp({
    credential: admin.credential.cert(params),
    databaseURL: "https://tr8hiveapp-default-rtdb.firebaseio.com/"
})

export default admin;