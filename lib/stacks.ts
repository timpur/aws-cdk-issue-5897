import { Construct, Stack, StackProps, CfnOutput, Fn } from "@aws-cdk/core";
import { HostedZone } from "@aws-cdk/aws-route53";

export class Stack1 extends Stack {
  public zone: HostedZone;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.zone = new HostedZone(this, "Zone", {
      zoneName: "test.com",
    });
  }
}

export class Stack2 extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: StackProps & { zone: HostedZone }
  ) {
    super(scope, id, props);

    new CfnOutput(this, "DnsEntry", {
      value: Fn.select(0, props.zone.hostedZoneNameServers || []),
    });
  }
}
