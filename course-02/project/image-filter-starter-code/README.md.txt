# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

My part of the project is:

-. [The Image Filtering Microservice]It is a Node-Express application which runs a simple script to process images. 

### Github link 
https://github.com/mdelcamino/caa-cloud-developer/blob/dev/course-02/project/image-filter-starter-code/


## Tasks done:

### Setup Node Environment

Created a new node server.

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Created a new endpoint in the server.ts file

-Completed an endpoint in `./src/server.ts` which validates the query parameter if any, and
downloads a filtered image from a public URL and a 200 HTTP code. 
If there is no parameter, it returns a 422 HTTP code, or if the image is not found it returns HTTP 404.

-Fixed helper function at util/util.js, because it was throwing an Unhandled Promise Rejection error on deploying.

### Deploying the system

Followed the process described in the course to `eb init` a new application and `eb create` a new environment to deploy the project. 
I had to change the .elascticbeanstalk/config.yml because it gave me errors while creating the environmen:
- Application Version does not exist locally
-This branch does not have a default environment.

"
	branch-defaults:
  default:
    environment: image-filter-starter-code
    group_suffix: null
  dev:
    environment: image-filter-starter-code-dev
    group_suffix: null
deploy:
  artifact: ./www/Archive.zip
global:
  application_name: image-filter-starter-code
  branch: null
  default_ec2_keyname: caa-keypair-ssh-eb-ppk
  default_platform: Node.js running on 64bit Amazon Linux
  default_region: eu-west-3
  include_git_submodules: true
  instance_profile: null
  platform_name: null
  platform_version: null
  profile: null
  repository: null
  sc: git
  workspace_type: Application

"

### EndPoint
http://image-filter-starter-code-dev.eu-west-3.elasticbeanstalk.com/

### Screenshots of environment deployed and the server in action are located under 
-deployment screenshots/ and 
-deployment screenshots/URL screenshots
respectively