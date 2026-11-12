/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectSourceEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration settings for a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#configuration MediaconnectSourceEndpoint#configuration}
  */
  readonly configuration: MediaconnectSourceEndpointConfiguration;
  /**
  * The description of the source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#description MediaconnectSourceEndpoint#description}
  */
  readonly description?: string;
  /**
  * The name of the Amazon Web Services Region in which the source endpoint is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#region_name MediaconnectSourceEndpoint#region_name}
  */
  readonly regionName?: string;
  /**
  * The tags associated with the source endpoint. Each tag is a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#tags MediaconnectSourceEndpoint#tags}
  */
  readonly tags?: MediaconnectSourceEndpointTags[] | cdktn.IResolvable;
}
export interface MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput {
}

export function mediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputToTerraform(struct?: MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputToHclTerraform(struct?: MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_bitrate - computed: true, optional: false, required: false
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface MediaconnectSourceEndpointAssociatedResourceDetails {
}

export function mediaconnectSourceEndpointAssociatedResourceDetailsToTerraform(struct?: MediaconnectSourceEndpointAssociatedResourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mediaconnectSourceEndpointAssociatedResourceDetailsToHclTerraform(struct?: MediaconnectSourceEndpointAssociatedResourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointAssociatedResourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointAssociatedResourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_output - computed: true, optional: false, required: false
  private _routerOutput = new MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference(this, "router_output");
  public get routerOutput() {
    return this._routerOutput;
  }

  // standard - computed: true, optional: false, required: false
  public get standard() {
    return this.getStringAttribute('standard');
  }
}
export interface MediaconnectSourceEndpointConfigurationRouterOutput {
  /**
  * The Amazon Resource Name (ARN) of the router output that the source endpoint represents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output_arn MediaconnectSourceEndpoint#router_output_arn}
  */
  readonly routerOutputArn?: string;
}

export function mediaconnectSourceEndpointConfigurationRouterOutputToTerraform(struct?: MediaconnectSourceEndpointConfigurationRouterOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    router_output_arn: cdktn.stringToTerraform(struct!.routerOutputArn),
  }
}


export function mediaconnectSourceEndpointConfigurationRouterOutputToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationRouterOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    router_output_arn: {
      value: cdktn.stringToHclTerraform(struct!.routerOutputArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationRouterOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationRouterOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerOutputArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerOutputArn = this._routerOutputArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationRouterOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routerOutputArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routerOutputArn = value.routerOutputArn;
    }
  }

  // router_output_arn - computed: true, optional: true, required: false
  private _routerOutputArn?: string; 
  public get routerOutputArn() {
    return this.getStringAttribute('router_output_arn');
  }
  public set routerOutputArn(value: string) {
    this._routerOutputArn = value;
  }
  public resetRouterOutputArn() {
    this._routerOutputArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerOutputArnInput() {
    return this._routerOutputArn;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist {
  /**
  * The port on the destination that receives the content. The valid range is 3000 to 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}
  */
  readonly destinationIngestPort?: number;
  /**
  * The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets. The valid range is 10 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#recovery_latency_milliseconds MediaconnectSourceEndpoint#recovery_latency_milliseconds}
  */
  readonly recoveryLatencyMilliseconds?: number;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
    recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_ingest_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIngestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIngestPort = this._destinationIngestPort;
    }
    if (this._recoveryLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIngestPort = undefined;
      this._recoveryLatencyMilliseconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIngestPort = value.destinationIngestPort;
      this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
    }
  }

  // destination_ingest_port - computed: true, optional: true, required: false
  private _destinationIngestPort?: number; 
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }
  public set destinationIngestPort(value: number) {
    this._destinationIngestPort = value;
  }
  public resetDestinationIngestPort() {
    this._destinationIngestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIngestPortInput() {
    return this._destinationIngestPort;
  }

  // recovery_latency_milliseconds - computed: true, optional: true, required: false
  private _recoveryLatencyMilliseconds?: number; 
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
  public set recoveryLatencyMilliseconds(value: number) {
    this._recoveryLatencyMilliseconds = value;
  }
  public resetRecoveryLatencyMilliseconds() {
    this._recoveryLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLatencyMillisecondsInput() {
    return this._recoveryLatencyMilliseconds;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp {
  /**
  * The port on the destination that receives the content. The valid range is 3000 to 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}
  */
  readonly destinationIngestPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#forward_error_correction_state MediaconnectSourceEndpoint#forward_error_correction_state}
  */
  readonly forwardErrorCorrectionState?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
    forward_error_correction_state: cdktn.stringToTerraform(struct!.forwardErrorCorrectionState),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_ingest_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_error_correction_state: {
      value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrectionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIngestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIngestPort = this._destinationIngestPort;
    }
    if (this._forwardErrorCorrectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrectionState = this._forwardErrorCorrectionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIngestPort = undefined;
      this._forwardErrorCorrectionState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIngestPort = value.destinationIngestPort;
      this._forwardErrorCorrectionState = value.forwardErrorCorrectionState;
    }
  }

  // destination_ingest_port - computed: true, optional: true, required: false
  private _destinationIngestPort?: number; 
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }
  public set destinationIngestPort(value: number) {
    this._destinationIngestPort = value;
  }
  public resetDestinationIngestPort() {
    this._destinationIngestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIngestPortInput() {
    return this._destinationIngestPort;
  }

  // forward_error_correction_state - computed: true, optional: true, required: false
  private _forwardErrorCorrectionState?: string; 
  public get forwardErrorCorrectionState() {
    return this.getStringAttribute('forward_error_correction_state');
  }
  public set forwardErrorCorrectionState(value: string) {
    this._forwardErrorCorrectionState = value;
  }
  public resetForwardErrorCorrectionState() {
    this._forwardErrorCorrectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionStateInput() {
    return this._forwardErrorCorrectionState;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {
  /**
  * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn MediaconnectSourceEndpoint#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller {
  /**
  * The port on which the destination listens for the connection. The valid range is 3000 to 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}
  */
  readonly destinationIngestPort?: number;
  /**
  * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase MediaconnectSourceEndpoint#encryption_passphrase}
  */
  readonly encryptionPassphrase?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase;
  /**
  * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds MediaconnectSourceEndpoint#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
    encryption_passphrase: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToTerraform(struct!.encryptionPassphrase),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_ingest_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_passphrase: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToHclTerraform(struct!.encryptionPassphrase),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIngestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIngestPort = this._destinationIngestPort;
    }
    if (this._encryptionPassphrase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionPassphrase = this._encryptionPassphrase?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIngestPort = undefined;
      this._encryptionPassphrase.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIngestPort = value.destinationIngestPort;
      this._encryptionPassphrase.internalValue = value.encryptionPassphrase;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
    }
  }

  // destination_ingest_port - computed: true, optional: true, required: false
  private _destinationIngestPort?: number; 
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }
  public set destinationIngestPort(value: number) {
    this._destinationIngestPort = value;
  }
  public resetDestinationIngestPort() {
    this._destinationIngestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIngestPortInput() {
    return this._destinationIngestPort;
  }

  // encryption_passphrase - computed: true, optional: true, required: false
  private _encryptionPassphrase = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(this, "encryption_passphrase");
  public get encryptionPassphrase() {
    return this._encryptionPassphrase;
  }
  public putEncryptionPassphrase(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase) {
    this._encryptionPassphrase.internalValue = value;
  }
  public resetEncryptionPassphrase() {
    this._encryptionPassphrase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPassphraseInput() {
    return this._encryptionPassphrase.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {
  /**
  * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn MediaconnectSourceEndpoint#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener {
  /**
  * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase MediaconnectSourceEndpoint#encryption_passphrase}
  */
  readonly encryptionPassphrase?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase;
  /**
  * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds MediaconnectSourceEndpoint#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The IP address that the source endpoint listens on for incoming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_address MediaconnectSourceEndpoint#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_listener_port MediaconnectSourceEndpoint#source_listener_port}
  */
  readonly sourceListenerPort?: number;
  /**
  * The stream ID that identifies the content for the SRT connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#stream_id MediaconnectSourceEndpoint#stream_id}
  */
  readonly streamId?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_passphrase: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToTerraform(struct!.encryptionPassphrase),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    source_address: cdktn.stringToTerraform(struct!.sourceAddress),
    source_listener_port: cdktn.numberToTerraform(struct!.sourceListenerPort),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_passphrase: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToHclTerraform(struct!.encryptionPassphrase),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_listener_port: {
      value: cdktn.numberToHclTerraform(struct!.sourceListenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktn.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionPassphrase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionPassphrase = this._encryptionPassphrase?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceListenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceListenerPort = this._sourceListenerPort;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionPassphrase.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._sourceAddress = undefined;
      this._sourceListenerPort = undefined;
      this._streamId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionPassphrase.internalValue = value.encryptionPassphrase;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._sourceAddress = value.sourceAddress;
      this._sourceListenerPort = value.sourceListenerPort;
      this._streamId = value.streamId;
    }
  }

  // encryption_passphrase - computed: true, optional: true, required: false
  private _encryptionPassphrase = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(this, "encryption_passphrase");
  public get encryptionPassphrase() {
    return this._encryptionPassphrase;
  }
  public putEncryptionPassphrase(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase) {
    this._encryptionPassphrase.internalValue = value;
  }
  public resetEncryptionPassphrase() {
    this._encryptionPassphrase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPassphraseInput() {
    return this._encryptionPassphrase.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_listener_port - computed: true, optional: true, required: false
  private _sourceListenerPort?: number; 
  public get sourceListenerPort() {
    return this.getNumberAttribute('source_listener_port');
  }
  public set sourceListenerPort(value: number) {
    this._sourceListenerPort = value;
  }
  public resetSourceListenerPort() {
    this._sourceListenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListenerPortInput() {
    return this._sourceListenerPort;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration {
  /**
  * The configuration settings for a source endpoint that uses the RIST protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rist MediaconnectSourceEndpoint#rist}
  */
  readonly rist?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist;
  /**
  * The configuration settings for a source endpoint that uses the RTP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rtp MediaconnectSourceEndpoint#rtp}
  */
  readonly rtp?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp;
  /**
  * The configuration settings for a source endpoint that uses SRT in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_caller MediaconnectSourceEndpoint#srt_caller}
  */
  readonly srtCaller?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller;
  /**
  * The configuration settings for a source endpoint that uses SRT in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_listener MediaconnectSourceEndpoint#srt_listener}
  */
  readonly srtListener?: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener;
}

export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rist: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToTerraform(struct!.rist),
    rtp: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToTerraform(struct!.rtp),
    srt_caller: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct!.srtCaller),
    srt_listener: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct!.srtListener),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rist: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToHclTerraform(struct!.rist),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist",
    },
    rtp: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct!.rtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp",
    },
    srt_caller: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct!.srtCaller),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller",
    },
    srt_listener: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct!.srtListener),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rist = this._rist?.internalValue;
    }
    if (this._rtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtp = this._rtp?.internalValue;
    }
    if (this._srtCaller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtCaller = this._srtCaller?.internalValue;
    }
    if (this._srtListener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtListener = this._srtListener?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rist.internalValue = undefined;
      this._rtp.internalValue = undefined;
      this._srtCaller.internalValue = undefined;
      this._srtListener.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rist.internalValue = value.rist;
      this._rtp.internalValue = value.rtp;
      this._srtCaller.internalValue = value.srtCaller;
      this._srtListener.internalValue = value.srtListener;
    }
  }

  // rist - computed: true, optional: true, required: false
  private _rist = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }
  public putRist(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist) {
    this._rist.internalValue = value;
  }
  public resetRist() {
    this._rist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ristInput() {
    return this._rist.internalValue;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
  public putRtp(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp) {
    this._rtp.internalValue = value;
  }
  public resetRtp() {
    this._rtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp.internalValue;
  }

  // srt_caller - computed: true, optional: true, required: false
  private _srtCaller = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }
  public putSrtCaller(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller) {
    this._srtCaller.internalValue = value;
  }
  public resetSrtCaller() {
    this._srtCaller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtCallerInput() {
    return this._srtCaller.internalValue;
  }

  // srt_listener - computed: true, optional: true, required: false
  private _srtListener = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
  public putSrtListener(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener) {
    this._srtListener.internalValue = value;
  }
  public resetSrtListener() {
    this._srtListener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtListenerInput() {
    return this._srtListener.internalValue;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules {
  /**
  * The CIDR block that is allowed to connect to the source endpoint, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#cidr MediaconnectSourceEndpoint#cidr}
  */
  readonly cidr?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList extends cdktn.ComplexList {
  public internalValue? : MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference {
    return new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic {
  /**
  * The rules that specify which CIDR blocks can connect to the source endpoint. You can specify up to 10 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_allow_rules MediaconnectSourceEndpoint#source_allow_rules}
  */
  readonly sourceAllowRules?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] | cdktn.IResolvable;
}

export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_allow_rules: cdktn.listMapper(mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToTerraform, false)(struct!.sourceAllowRules),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_allow_rules: {
      value: cdktn.listMapperHcl(mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToHclTerraform, false)(struct!.sourceAllowRules),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAllowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAllowRules = this._sourceAllowRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAllowRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAllowRules.internalValue = value.sourceAllowRules;
    }
  }

  // source_allow_rules - computed: true, optional: true, required: false
  private _sourceAllowRules = new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList(this, "source_allow_rules", false);
  public get sourceAllowRules() {
    return this._sourceAllowRules;
  }
  public putSourceAllowRules(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] | cdktn.IResolvable) {
    this._sourceAllowRules.internalValue = value;
  }
  public resetSourceAllowRules() {
    this._sourceAllowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAllowRulesInput() {
    return this._sourceAllowRules.internalValue;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc {
  /**
  * The IDs of the security groups to associate with the source endpoint. You can specify from 1 to 5 security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#security_group_ids MediaconnectSourceEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnet to use for the source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#subnet_id MediaconnectSourceEndpoint#subnet_id}
  */
  readonly subnetId?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration {
  /**
  * The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#public MediaconnectSourceEndpoint#public}
  */
  readonly public?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic;
  /**
  * The networking configuration for a source endpoint in a virtual private cloud (VPC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#vpc MediaconnectSourceEndpoint#vpc}
  */
  readonly vpc?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc;
}

export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    public: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToTerraform(struct!.public),
    vpc: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToTerraform(struct!.vpc),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    public: {
      value: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToHclTerraform(struct!.public),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic",
    },
    vpc: {
      value: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._public?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._public.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._public.internalValue = value.public;
      this._vpc.internalValue = value.vpc;
    }
  }

  // public - computed: true, optional: true, required: false
  private _public = new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference(this, "public");
  public get public() {
    return this._public;
  }
  public putPublic(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic) {
    this._public.internalValue = value;
  }
  public resetPublic() {
    this._public.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public.internalValue;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc = new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface MediaconnectSourceEndpointConfigurationStandard {
  /**
  * The name of the source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#name MediaconnectSourceEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol MediaconnectSourceEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * The protocol configuration for a standard source endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the source endpoint uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol_configuration MediaconnectSourceEndpoint#protocol_configuration}
  */
  readonly protocolConfiguration?: MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration;
  /**
  * The networking configuration for a standard source endpoint. This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_configuration MediaconnectSourceEndpoint#source_networking_configuration}
  */
  readonly sourceNetworkingConfiguration?: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_type MediaconnectSourceEndpoint#source_networking_type}
  */
  readonly sourceNetworkingType?: string;
}

export function mediaconnectSourceEndpointConfigurationStandardToTerraform(struct?: MediaconnectSourceEndpointConfigurationStandard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    protocol_configuration: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToTerraform(struct!.protocolConfiguration),
    source_networking_configuration: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToTerraform(struct!.sourceNetworkingConfiguration),
    source_networking_type: cdktn.stringToTerraform(struct!.sourceNetworkingType),
  }
}


export function mediaconnectSourceEndpointConfigurationStandardToHclTerraform(struct?: MediaconnectSourceEndpointConfigurationStandard | cdktn.IResolvable): any {
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
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_configuration: {
      value: mediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToHclTerraform(struct!.protocolConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration",
    },
    source_networking_configuration: {
      value: mediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToHclTerraform(struct!.sourceNetworkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration",
    },
    source_networking_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceNetworkingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfigurationStandard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolConfiguration = this._protocolConfiguration?.internalValue;
    }
    if (this._sourceNetworkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetworkingConfiguration = this._sourceNetworkingConfiguration?.internalValue;
    }
    if (this._sourceNetworkingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetworkingType = this._sourceNetworkingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfigurationStandard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._protocolConfiguration.internalValue = undefined;
      this._sourceNetworkingConfiguration.internalValue = undefined;
      this._sourceNetworkingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._protocol = value.protocol;
      this._protocolConfiguration.internalValue = value.protocolConfiguration;
      this._sourceNetworkingConfiguration.internalValue = value.sourceNetworkingConfiguration;
      this._sourceNetworkingType = value.sourceNetworkingType;
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

  // protocol_configuration - computed: true, optional: true, required: false
  private _protocolConfiguration = new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration) {
    this._protocolConfiguration.internalValue = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration.internalValue;
  }

  // source_networking_configuration - computed: true, optional: true, required: false
  private _sourceNetworkingConfiguration = new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference(this, "source_networking_configuration");
  public get sourceNetworkingConfiguration() {
    return this._sourceNetworkingConfiguration;
  }
  public putSourceNetworkingConfiguration(value: MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration) {
    this._sourceNetworkingConfiguration.internalValue = value;
  }
  public resetSourceNetworkingConfiguration() {
    this._sourceNetworkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkingConfigurationInput() {
    return this._sourceNetworkingConfiguration.internalValue;
  }

  // source_networking_type - computed: true, optional: true, required: false
  private _sourceNetworkingType?: string; 
  public get sourceNetworkingType() {
    return this.getStringAttribute('source_networking_type');
  }
  public set sourceNetworkingType(value: string) {
    this._sourceNetworkingType = value;
  }
  public resetSourceNetworkingType() {
    this._sourceNetworkingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkingTypeInput() {
    return this._sourceNetworkingType;
  }
}
export interface MediaconnectSourceEndpointConfiguration {
  /**
  * The configuration settings for a source endpoint that represents a router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output MediaconnectSourceEndpoint#router_output}
  */
  readonly routerOutput?: MediaconnectSourceEndpointConfigurationRouterOutput;
  /**
  * The configuration settings for a standard source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#standard MediaconnectSourceEndpoint#standard}
  */
  readonly standard?: MediaconnectSourceEndpointConfigurationStandard;
}

export function mediaconnectSourceEndpointConfigurationToTerraform(struct?: MediaconnectSourceEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    router_output: mediaconnectSourceEndpointConfigurationRouterOutputToTerraform(struct!.routerOutput),
    standard: mediaconnectSourceEndpointConfigurationStandardToTerraform(struct!.standard),
  }
}


export function mediaconnectSourceEndpointConfigurationToHclTerraform(struct?: MediaconnectSourceEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    router_output: {
      value: mediaconnectSourceEndpointConfigurationRouterOutputToHclTerraform(struct!.routerOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationRouterOutput",
    },
    standard: {
      value: mediaconnectSourceEndpointConfigurationStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectSourceEndpointConfigurationStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectSourceEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectSourceEndpointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerOutput = this._routerOutput?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectSourceEndpointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routerOutput.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routerOutput.internalValue = value.routerOutput;
      this._standard.internalValue = value.standard;
    }
  }

  // router_output - computed: true, optional: true, required: false
  private _routerOutput = new MediaconnectSourceEndpointConfigurationRouterOutputOutputReference(this, "router_output");
  public get routerOutput() {
    return this._routerOutput;
  }
  public putRouterOutput(value: MediaconnectSourceEndpointConfigurationRouterOutput) {
    this._routerOutput.internalValue = value;
  }
  public resetRouterOutput() {
    this._routerOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerOutputInput() {
    return this._routerOutput.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new MediaconnectSourceEndpointConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: MediaconnectSourceEndpointConfigurationStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface MediaconnectSourceEndpointTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#key MediaconnectSourceEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#value MediaconnectSourceEndpoint#value}
  */
  readonly value?: string;
}

export function mediaconnectSourceEndpointTagsToTerraform(struct?: MediaconnectSourceEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectSourceEndpointTagsToHclTerraform(struct?: MediaconnectSourceEndpointTags | cdktn.IResolvable): any {
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

export class MediaconnectSourceEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectSourceEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectSourceEndpointTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectSourceEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectSourceEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectSourceEndpointTagsOutputReference {
    return new MediaconnectSourceEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}
*/
export class MediaconnectSourceEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_source_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectSourceEndpoint to import
  * @param importFromId The id of the existing MediaconnectSourceEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectSourceEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_source_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectSourceEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectSourceEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_source_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
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
    this._description = config.description;
    this._regionName = config.regionName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associated_resource_details - computed: true, optional: false, required: false
  private _associatedResourceDetails = new MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference(this, "associated_resource_details");
  public get associatedResourceDetails() {
    return this._associatedResourceDetails;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new MediaconnectSourceEndpointConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: MediaconnectSourceEndpointConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // registration_state - computed: true, optional: false, required: false
  public get registrationState() {
    return this.getStringAttribute('registration_state');
  }

  // source_endpoint_id - computed: true, optional: false, required: false
  public get sourceEndpointId() {
    return this.getStringAttribute('source_endpoint_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectSourceEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectSourceEndpointTags[] | cdktn.IResolvable) {
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
      configuration: mediaconnectSourceEndpointConfigurationToTerraform(this._configuration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      region_name: cdktn.stringToTerraform(this._regionName),
      tags: cdktn.listMapper(mediaconnectSourceEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: mediaconnectSourceEndpointConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectSourceEndpointConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktn.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediaconnectSourceEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectSourceEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
