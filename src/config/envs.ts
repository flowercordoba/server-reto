import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  URI_MONGO: get('URI_MONGO').required().asString(),
  DB_NAME: get('DB_NAME').required().asString(),

}



