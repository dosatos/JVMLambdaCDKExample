import * as path from 'path';

import * as cdk from '@aws-cdk/core';
import * as Lambda from "@aws-cdk/aws-lambda";

export class JvmLambdaStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Configure path to Dockerfile
        const dockerfile = path.join(__dirname, "../app");

        // Create AWS Lambda function and push image to ECR
        new Lambda.DockerImageFunction(this, "jvmLambdaFunction", {
            code: Lambda.DockerImageCode.fromImageAsset(dockerfile),
        })

    }
}