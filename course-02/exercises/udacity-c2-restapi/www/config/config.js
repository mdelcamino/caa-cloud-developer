"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    "dev": {
        "username": "postgres",
        "password": "postgres2020!!",
        "database": "caadb1",
        "host": "caadb1.cjlo9y5vd5l9.eu-west-3.rds.amazonaws.com",
        "dialect": "postgres",
        "aws_region": "eu-west-3",
        "aws_profile": "default",
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
};
//# sourceMappingURL=config.js.map