#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { JvmLambdaStack } from '../lib/jvm_lambda-stack';

const app = new cdk.App();
new JvmLambdaStack(app, 'JvmLambdaStack');
