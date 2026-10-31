/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcsGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#configuration EcsGateway#configuration}
  */
  readonly configuration: EcsGatewayConfiguration;
  /**
  * Whether deletion protection is enabled for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#deletion_protection EcsGateway#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#gateway_name EcsGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#infrastructure_role_arn EcsGateway#infrastructure_role_arn}
  */
  readonly infrastructureRoleArn: string;
  /**
  * Specifies whether to propagate the tags from the gateway to other resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#propagate_tags EcsGateway#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * The metadata that you apply to the gateway to help you categorize and organize them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#tags EcsGateway#tags}
  */
  readonly tags?: EcsGatewayTags[] | cdktn.IResolvable;
}
export interface EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 {
  /**
  * The S3 bucket for access logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#bucket EcsGateway#bucket}
  */
  readonly bucket?: string;
  /**
  * The S3 prefix for access logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#prefix EcsGateway#prefix}
  */
  readonly prefix?: string;
}

export function ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3ToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3ToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface EcsGatewayConfigurationHostSharedAlbAccessLogsDestination {
  /**
  * The S3 destination for gateway ALB access logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#s3 EcsGateway#s3}
  */
  readonly s3?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3;
}

export function ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3ToTerraform(struct!.s3),
  }
}


export function ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbAccessLogsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface EcsGatewayConfigurationHostSharedAlbAccessLogs {
  /**
  * The destination for gateway ALB access logs. Exactly one destination type must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#destination EcsGateway#destination}
  */
  readonly destination?: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination;
}

export function ecsGatewayConfigurationHostSharedAlbAccessLogsToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationToTerraform(struct!.destination),
  }
}


export function ecsGatewayConfigurationHostSharedAlbAccessLogsToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbAccessLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: ecsGatewayConfigurationHostSharedAlbAccessLogsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbAccessLogsDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbAccessLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbAccessLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface EcsGatewayConfigurationHostSharedAlbNetworkConfiguration {
  /**
  * The inbound security group for the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#inbound_security_group EcsGateway#inbound_security_group}
  */
  readonly inboundSecurityGroup?: string;
  /**
  * The IP address type for the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#ip_address_type EcsGateway#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * The subnets for the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#subnets EcsGateway#subnets}
  */
  readonly subnets?: string[];
}

export function ecsGatewayConfigurationHostSharedAlbNetworkConfigurationToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_security_group: cdktn.stringToTerraform(struct!.inboundSecurityGroup),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function ecsGatewayConfigurationHostSharedAlbNetworkConfigurationToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inbound_security_group: {
      value: cdktn.stringToHclTerraform(struct!.inboundSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundSecurityGroup = this._inboundSecurityGroup;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundSecurityGroup = undefined;
      this._ipAddressType = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundSecurityGroup = value.inboundSecurityGroup;
      this._ipAddressType = value.ipAddressType;
      this._subnets = value.subnets;
    }
  }

  // inbound_security_group - computed: true, optional: true, required: false
  private _inboundSecurityGroup?: string; 
  public get inboundSecurityGroup() {
    return this.getStringAttribute('inbound_security_group');
  }
  public set inboundSecurityGroup(value: string) {
    this._inboundSecurityGroup = value;
  }
  public resetInboundSecurityGroup() {
    this._inboundSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundSecurityGroupInput() {
    return this._inboundSecurityGroup;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#name EcsGateway#name}
  */
  readonly name?: string;
  /**
  * The values for the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#values EcsGateway#values}
  */
  readonly values?: string[];
}

export function ecsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function ecsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface EcsGatewayConfigurationHostSharedAlbTestTrafficRules {
  /**
  * The header configuration for test traffic routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#header EcsGateway#header}
  */
  readonly header?: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader;
}

export function ecsGatewayConfigurationHostSharedAlbTestTrafficRulesToTerraform(struct?: EcsGatewayConfigurationHostSharedAlbTestTrafficRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: ecsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderToTerraform(struct!.header),
  }
}


export function ecsGatewayConfigurationHostSharedAlbTestTrafficRulesToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlbTestTrafficRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: ecsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlbTestTrafficRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlbTestTrafficRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header = new EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface EcsGatewayConfigurationHostSharedAlb {
  /**
  * The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#access_logs EcsGateway#access_logs}
  */
  readonly accessLogs?: EcsGatewayConfigurationHostSharedAlbAccessLogs;
  /**
  * The HTTP desync mitigation mode for the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#http_desync EcsGateway#http_desync}
  */
  readonly httpDesync?: string;
  /**
  * The maximum number of ALBs to provision for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#max_alb_count EcsGateway#max_alb_count}
  */
  readonly maxAlbCount?: number;
  /**
  * The network configuration for the gateway ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#network_configuration EcsGateway#network_configuration}
  */
  readonly networkConfiguration?: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration;
  /**
  * The port on which the ALB listens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#port EcsGateway#port}
  */
  readonly port?: number;
  /**
  * The protocol for the ALB listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#protocol EcsGateway#protocol}
  */
  readonly protocol?: string;
  /**
  * The scheme for the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#scheme EcsGateway#scheme}
  */
  readonly scheme?: string;
  /**
  * The test traffic rules for the gateway ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#test_traffic_rules EcsGateway#test_traffic_rules}
  */
  readonly testTrafficRules?: EcsGatewayConfigurationHostSharedAlbTestTrafficRules;
  /**
  * The ARN of the WAFv2 web ACL to associate with the ALB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#web_acl_arn EcsGateway#web_acl_arn}
  */
  readonly webAclArn?: string;
}

export function ecsGatewayConfigurationHostSharedAlbToTerraform(struct?: EcsGatewayConfigurationHostSharedAlb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_logs: ecsGatewayConfigurationHostSharedAlbAccessLogsToTerraform(struct!.accessLogs),
    http_desync: cdktn.stringToTerraform(struct!.httpDesync),
    max_alb_count: cdktn.numberToTerraform(struct!.maxAlbCount),
    network_configuration: ecsGatewayConfigurationHostSharedAlbNetworkConfigurationToTerraform(struct!.networkConfiguration),
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    scheme: cdktn.stringToTerraform(struct!.scheme),
    test_traffic_rules: ecsGatewayConfigurationHostSharedAlbTestTrafficRulesToTerraform(struct!.testTrafficRules),
    web_acl_arn: cdktn.stringToTerraform(struct!.webAclArn),
  }
}


export function ecsGatewayConfigurationHostSharedAlbToHclTerraform(struct?: EcsGatewayConfigurationHostSharedAlb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_logs: {
      value: ecsGatewayConfigurationHostSharedAlbAccessLogsToHclTerraform(struct!.accessLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbAccessLogs",
    },
    http_desync: {
      value: cdktn.stringToHclTerraform(struct!.httpDesync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_alb_count: {
      value: cdktn.numberToHclTerraform(struct!.maxAlbCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_configuration: {
      value: ecsGatewayConfigurationHostSharedAlbNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbNetworkConfiguration",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_traffic_rules: {
      value: ecsGatewayConfigurationHostSharedAlbTestTrafficRulesToHclTerraform(struct!.testTrafficRules),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlbTestTrafficRules",
    },
    web_acl_arn: {
      value: cdktn.stringToHclTerraform(struct!.webAclArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationHostSharedAlbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfigurationHostSharedAlb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogs = this._accessLogs?.internalValue;
    }
    if (this._httpDesync !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDesync = this._httpDesync;
    }
    if (this._maxAlbCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAlbCount = this._maxAlbCount;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._testTrafficRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTrafficRules = this._testTrafficRules?.internalValue;
    }
    if (this._webAclArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAclArn = this._webAclArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfigurationHostSharedAlb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogs.internalValue = undefined;
      this._httpDesync = undefined;
      this._maxAlbCount = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._scheme = undefined;
      this._testTrafficRules.internalValue = undefined;
      this._webAclArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogs.internalValue = value.accessLogs;
      this._httpDesync = value.httpDesync;
      this._maxAlbCount = value.maxAlbCount;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._port = value.port;
      this._protocol = value.protocol;
      this._scheme = value.scheme;
      this._testTrafficRules.internalValue = value.testTrafficRules;
      this._webAclArn = value.webAclArn;
    }
  }

  // access_logs - computed: true, optional: true, required: false
  private _accessLogs = new EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(this, "access_logs");
  public get accessLogs() {
    return this._accessLogs;
  }
  public putAccessLogs(value: EcsGatewayConfigurationHostSharedAlbAccessLogs) {
    this._accessLogs.internalValue = value;
  }
  public resetAccessLogs() {
    this._accessLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs.internalValue;
  }

  // current_alb_count - computed: true, optional: false, required: false
  public get currentAlbCount() {
    return this.getNumberAttribute('current_alb_count');
  }

  // http_desync - computed: true, optional: true, required: false
  private _httpDesync?: string; 
  public get httpDesync() {
    return this.getStringAttribute('http_desync');
  }
  public set httpDesync(value: string) {
    this._httpDesync = value;
  }
  public resetHttpDesync() {
    this._httpDesync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDesyncInput() {
    return this._httpDesync;
  }

  // max_alb_count - computed: true, optional: true, required: false
  private _maxAlbCount?: number; 
  public get maxAlbCount() {
    return this.getNumberAttribute('max_alb_count');
  }
  public set maxAlbCount(value: number) {
    this._maxAlbCount = value;
  }
  public resetMaxAlbCount() {
    this._maxAlbCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlbCountInput() {
    return this._maxAlbCount;
  }

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration = new EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // test_traffic_rules - computed: true, optional: true, required: false
  private _testTrafficRules = new EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(this, "test_traffic_rules");
  public get testTrafficRules() {
    return this._testTrafficRules;
  }
  public putTestTrafficRules(value: EcsGatewayConfigurationHostSharedAlbTestTrafficRules) {
    this._testTrafficRules.internalValue = value;
  }
  public resetTestTrafficRules() {
    this._testTrafficRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTrafficRulesInput() {
    return this._testTrafficRules.internalValue;
  }

  // web_acl_arn - computed: true, optional: true, required: false
  private _webAclArn?: string; 
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }
  public set webAclArn(value: string) {
    this._webAclArn = value;
  }
  public resetWebAclArn() {
    this._webAclArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclArnInput() {
    return this._webAclArn;
  }
}
export interface EcsGatewayConfiguration {
  /**
  * The host shared ALB configuration for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#host_shared_alb EcsGateway#host_shared_alb}
  */
  readonly hostSharedAlb: EcsGatewayConfigurationHostSharedAlb;
}

export function ecsGatewayConfigurationToTerraform(struct?: EcsGatewayConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_shared_alb: ecsGatewayConfigurationHostSharedAlbToTerraform(struct!.hostSharedAlb),
  }
}


export function ecsGatewayConfigurationToHclTerraform(struct?: EcsGatewayConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_shared_alb: {
      value: ecsGatewayConfigurationHostSharedAlbToHclTerraform(struct!.hostSharedAlb),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsGatewayConfigurationHostSharedAlb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsGatewayConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSharedAlb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSharedAlb = this._hostSharedAlb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostSharedAlb.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostSharedAlb.internalValue = value.hostSharedAlb;
    }
  }

  // host_shared_alb - computed: false, optional: false, required: true
  private _hostSharedAlb = new EcsGatewayConfigurationHostSharedAlbOutputReference(this, "host_shared_alb");
  public get hostSharedAlb() {
    return this._hostSharedAlb;
  }
  public putHostSharedAlb(value: EcsGatewayConfigurationHostSharedAlb) {
    this._hostSharedAlb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSharedAlbInput() {
    return this._hostSharedAlb.internalValue;
  }
}
export interface EcsGatewayTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#key EcsGateway#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#value EcsGateway#value}
  */
  readonly value?: string;
}

export function ecsGatewayTagsToTerraform(struct?: EcsGatewayTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsGatewayTagsToHclTerraform(struct?: EcsGatewayTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsGatewayTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsGatewayTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsGatewayTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsGatewayTagsList extends cdktn.ComplexList {
  public internalValue? : EcsGatewayTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcsGatewayTagsOutputReference {
    return new EcsGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway awscc_ecs_gateway}
*/
export class EcsGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcsGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsGateway to import
  * @param importFromId The id of the existing EcsGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway awscc_ecs_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: EcsGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_gateway',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.108.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._deletionProtection = config.deletionProtection;
    this._gatewayName = config.gatewayName;
    this._infrastructureRoleArn = config.infrastructureRoleArn;
    this._propagateTags = config.propagateTags;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new EcsGatewayConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EcsGatewayConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_role_arn - computed: false, optional: false, required: true
  private _infrastructureRoleArn?: string; 
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }
  public set infrastructureRoleArn(value: string) {
    this._infrastructureRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRoleArnInput() {
    return this._infrastructureRoleArn;
  }

  // propagate_tags - computed: true, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EcsGatewayTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EcsGatewayTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: ecsGatewayConfigurationToTerraform(this._configuration.internalValue),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      gateway_name: cdktn.stringToTerraform(this._gatewayName),
      infrastructure_role_arn: cdktn.stringToTerraform(this._infrastructureRoleArn),
      propagate_tags: cdktn.stringToTerraform(this._propagateTags),
      tags: cdktn.listMapper(ecsGatewayTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: ecsGatewayConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsGatewayConfiguration",
      },
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_name: {
        value: cdktn.stringToHclTerraform(this._gatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_role_arn: {
        value: cdktn.stringToHclTerraform(this._infrastructureRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_tags: {
        value: cdktn.stringToHclTerraform(this._propagateTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ecsGatewayTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsGatewayTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
