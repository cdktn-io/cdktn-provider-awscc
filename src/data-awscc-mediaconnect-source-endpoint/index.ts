/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectSourceEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#id DataAwsccMediaconnectSourceEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput {
}

export function dataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputToTerraform(struct?: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput | undefined) {
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
export interface DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails {
}

export function dataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsToTerraform(struct?: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_output - computed: true, optional: false, required: false
  private _routerOutput = new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference(this, "router_output");
  public get routerOutput() {
    return this._routerOutput;
  }

  // standard - computed: true, optional: false, required: false
  public get standard() {
    return this.getStringAttribute('standard');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationRouterOutputToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationRouterOutputToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_output_arn - computed: true, optional: false, required: false
  public get routerOutputArn() {
    return this.getStringAttribute('router_output_arn');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ingest_port - computed: true, optional: false, required: false
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }

  // recovery_latency_milliseconds - computed: true, optional: false, required: false
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ingest_port - computed: true, optional: false, required: false
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }

  // forward_error_correction_state - computed: true, optional: false, required: false
  public get forwardErrorCorrectionState() {
    return this.getStringAttribute('forward_error_correction_state');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ingest_port - computed: true, optional: false, required: false
  public get destinationIngestPort() {
    return this.getNumberAttribute('destination_ingest_port');
  }

  // encryption_passphrase - computed: true, optional: false, required: false
  private _encryptionPassphrase = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(this, "encryption_passphrase");
  public get encryptionPassphrase() {
    return this._encryptionPassphrase;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_passphrase - computed: true, optional: false, required: false
  private _encryptionPassphrase = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(this, "encryption_passphrase");
  public get encryptionPassphrase() {
    return this._encryptionPassphrase;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_listener_port - computed: true, optional: false, required: false
  public get sourceListenerPort() {
    return this.getNumberAttribute('source_listener_port');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rist - computed: true, optional: false, required: false
  private _rist = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }

  // rtp - computed: true, optional: false, required: false
  private _rtp = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }

  // srt_caller - computed: true, optional: false, required: false
  private _srtCaller = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }

  // srt_listener - computed: true, optional: false, required: false
  private _srtListener = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference {
    return new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_allow_rules - computed: true, optional: false, required: false
  private _sourceAllowRules = new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList(this, "source_allow_rules", false);
  public get sourceAllowRules() {
    return this._sourceAllowRules;
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public - computed: true, optional: false, required: false
  private _public = new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference(this, "public");
  public get public() {
    return this._public;
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfigurationStandard {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationStandardToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationStandardToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfigurationStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfigurationStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_configuration - computed: true, optional: false, required: false
  private _protocolConfiguration = new DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }

  // source_networking_configuration - computed: true, optional: false, required: false
  private _sourceNetworkingConfiguration = new DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference(this, "source_networking_configuration");
  public get sourceNetworkingConfiguration() {
    return this._sourceNetworkingConfiguration;
  }

  // source_networking_type - computed: true, optional: false, required: false
  public get sourceNetworkingType() {
    return this.getStringAttribute('source_networking_type');
  }
}
export interface DataAwsccMediaconnectSourceEndpointConfiguration {
}

export function dataAwsccMediaconnectSourceEndpointConfigurationToTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointConfigurationToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_output - computed: true, optional: false, required: false
  private _routerOutput = new DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference(this, "router_output");
  public get routerOutput() {
    return this._routerOutput;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataAwsccMediaconnectSourceEndpointTags {
}

export function dataAwsccMediaconnectSourceEndpointTagsToTerraform(struct?: DataAwsccMediaconnectSourceEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectSourceEndpointTagsToHclTerraform(struct?: DataAwsccMediaconnectSourceEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectSourceEndpointTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccMediaconnectSourceEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectSourceEndpointTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccMediaconnectSourceEndpointTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectSourceEndpointTagsOutputReference {
    return new DataAwsccMediaconnectSourceEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}
*/
export class DataAwsccMediaconnectSourceEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_source_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectSourceEndpoint to import
  * @param importFromId The id of the existing DataAwsccMediaconnectSourceEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectSourceEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_source_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectSourceEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectSourceEndpointConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associated_resource_details - computed: true, optional: false, required: false
  private _associatedResourceDetails = new DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference(this, "associated_resource_details");
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

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccMediaconnectSourceEndpointConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lifecycle_management - computed: true, optional: false, required: false
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectSourceEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
