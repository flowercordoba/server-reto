import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  URI_MONGO: get('URI_MONGO').required().asString(),
  DB_NAME: get('DB_NAME').required().asString(),
  JWT_SEED: get('JWT_SEED').required().asString(),

  
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),
  SEND_EMAIL: get('SEND_EMAIL').default('false').asBool(),  
  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(),
}



