export const config = {
  "dev": {
        "username": "postgres", //process.env.POSTGRES_USERNAME, 
        "password": "postgres2020!!", //process.env.POSTGRES_PASSWORD, 
        "database": "caadb1",
        "host": "caadb1.cjlo9y5vd5l9.eu-west-3.rds.amazonaws.com",
        "dialect": "postgres",
        "aws_region": "eu-west-3", //process.env.AWS_REGION,
        "aws_profile": "default", //process.env.AWS_PROFILE,
        "aws_media_bucket": "caabucket4exercise"
        //These are my constants, but not going to make them environmental variables

    },
    "jwt": {
        "secret": "LongEnoughStringToDoTokenStuff"
    },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
