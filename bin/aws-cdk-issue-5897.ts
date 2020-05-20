#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { Stack1, Stack2 } from "../lib/stacks";

const app = new cdk.App();

const stack1 = new Stack1(app, "Stack1");

new Stack2(app, "Stack2", { zone: stack1.zone });
