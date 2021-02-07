# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Creating JVM Lambda
The build (dependencies) are quite dirty - did not have time for cleaning

```bash
$ mkdir app
$ cd app
$ gradle init --type=kotlin-application

Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Kotlin) [1..2] 1

Project name (default: app): 
Source package (default: app): 

> Task :init

```

source: 
- for docker: https://hub.docker.com/r/amazon/aws-lambda-java
- for lambda handler: https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html

```bash
$ gradle init --type=java-application

Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Groovy) [1..2] 1

Select test framework:
  1: JUnit 4
  2: TestNG
  3: Spock
  4: JUnit Jupiter
Enter selection (default: JUnit 4) [1..4] 4

Project name (default: app): 
Source package (default: app): 

> Task :init

```

create dockerfile
```
$ touch Dockerfile
```

Dockerfile content:
```bash
FROM public.ecr.aws/lambda/java:11

# Copy function code and runtime dependencies from Gradle layout
COPY build/classes/java/main ${LAMBDA_TASK_ROOT}
COPY build/dependency/* ${LAMBDA_TASK_ROOT}/lib/

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.App::main" ]
```