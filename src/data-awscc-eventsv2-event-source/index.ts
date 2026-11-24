/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEventsv2EventSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source#id DataAwsccEventsv2EventSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_service - computed: true, optional: false, required: false
  public get awsService() {
    return this.getStringAttribute('aws_service');
  }

  // on_failure_configuration - computed: true, optional: false, required: false
  private _onFailureConfiguration = new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(this, "on_failure_configuration");
  public get onFailureConfiguration() {
    return this._onFailureConfiguration;
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_failure_configuration - computed: true, optional: false, required: false
  private _onFailureConfiguration = new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(this, "on_failure_configuration");
  public get onFailureConfiguration() {
    return this._onFailureConfiguration;
  }

  // partner_bus_kms_key_identifier - computed: true, optional: false, required: false
  public get partnerBusKmsKeyIdentifier() {
    return this.getStringAttribute('partner_bus_kms_key_identifier');
  }

  // partner_event_source_arn - computed: true, optional: false, required: false
  public get partnerEventSourceArn() {
    return this.getStringAttribute('partner_event_source_arn');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // message_id_http_header - computed: true, optional: false, required: false
  public get messageIdHttpHeader() {
    return this.getStringAttribute('message_id_http_header');
  }

  // secret_encoding - computed: true, optional: false, required: false
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // signature_http_header - computed: true, optional: false, required: false
  public get signatureHttpHeader() {
    return this.getStringAttribute('signature_http_header');
  }

  // signature_prefix - computed: true, optional: false, required: false
  public get signaturePrefix() {
    return this.getStringAttribute('signature_prefix');
  }

  // signed_message_composition - computed: true, optional: false, required: false
  public get signedMessageComposition() {
    return this.getStringAttribute('signed_message_composition');
  }

  // timestamp_http_header - computed: true, optional: false, required: false
  public get timestampHttpHeader() {
    return this.getStringAttribute('timestamp_http_header');
  }

  // timestamp_prefix - computed: true, optional: false, required: false
  public get timestampPrefix() {
    return this.getStringAttribute('timestamp_prefix');
  }

  // timestamp_tolerance_in_seconds - computed: true, optional: false, required: false
  public get timestampToleranceInSeconds() {
    return this.getNumberAttribute('timestamp_tolerance_in_seconds');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // token_http_header - computed: true, optional: false, required: false
  public get tokenHttpHeader() {
    return this.getStringAttribute('token_http_header');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_http_auth_configuration - computed: true, optional: false, required: false
  private _basicHttpAuthConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference(this, "basic_http_auth_configuration");
  public get basicHttpAuthConfiguration() {
    return this._basicHttpAuthConfiguration;
  }

  // hmac_auth_configuration - computed: true, optional: false, required: false
  private _hmacAuthConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference(this, "hmac_auth_configuration");
  public get hmacAuthConfiguration() {
    return this._hmacAuthConfiguration;
  }

  // static_token_auth_configuration - computed: true, optional: false, required: false
  private _staticTokenAuthConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference(this, "static_token_auth_configuration");
  public get staticTokenAuthConfiguration() {
    return this._staticTokenAuthConfiguration;
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deduplication_type - computed: true, optional: false, required: false
  public get deduplicationType() {
    return this.getStringAttribute('deduplication_type');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_payload - computed: true, optional: false, required: false
  public get includePayload() {
    return this.getStringAttribute('include_payload');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }
}
export interface DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_configuration - computed: true, optional: false, required: false
  private _authConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference(this, "auth_configuration");
  public get authConfiguration() {
    return this._authConfiguration;
  }

  // deduplication_configuration - computed: true, optional: false, required: false
  private _deduplicationConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference(this, "deduplication_configuration");
  public get deduplicationConfiguration() {
    return this._deduplicationConfiguration;
  }

  // kms_key_identifier - computed: true, optional: false, required: false
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // metadata_http_headers - computed: true, optional: false, required: false
  public get metadataHttpHeaders() {
    return this.getListAttribute('metadata_http_headers');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccEventsv2EventSourceConfiguration {
}

export function dataAwsccEventsv2EventSourceConfigurationToTerraform(struct?: DataAwsccEventsv2EventSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceConfigurationToHclTerraform(struct?: DataAwsccEventsv2EventSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_service_events_configuration - computed: true, optional: false, required: false
  private _awsServiceEventsConfiguration = new DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(this, "aws_service_events_configuration");
  public get awsServiceEventsConfiguration() {
    return this._awsServiceEventsConfiguration;
  }

  // partner_events_configuration - computed: true, optional: false, required: false
  private _partnerEventsConfiguration = new DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(this, "partner_events_configuration");
  public get partnerEventsConfiguration() {
    return this._partnerEventsConfiguration;
  }

  // webhook_events_configuration - computed: true, optional: false, required: false
  private _webhookEventsConfiguration = new DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference(this, "webhook_events_configuration");
  public get webhookEventsConfiguration() {
    return this._webhookEventsConfiguration;
  }
}
export interface DataAwsccEventsv2EventSourceDetailsWebhookDetails {
}

export function dataAwsccEventsv2EventSourceDetailsWebhookDetailsToTerraform(struct?: DataAwsccEventsv2EventSourceDetailsWebhookDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceDetailsWebhookDetailsToHclTerraform(struct?: DataAwsccEventsv2EventSourceDetailsWebhookDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceDetailsWebhookDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceDetailsWebhookDetails | undefined) {
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

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}
export interface DataAwsccEventsv2EventSourceDetails {
}

export function dataAwsccEventsv2EventSourceDetailsToTerraform(struct?: DataAwsccEventsv2EventSourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceDetailsToHclTerraform(struct?: DataAwsccEventsv2EventSourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2EventSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // webhook_details - computed: true, optional: false, required: false
  private _webhookDetails = new DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference(this, "webhook_details");
  public get webhookDetails() {
    return this._webhookDetails;
  }
}
export interface DataAwsccEventsv2EventSourceTags {
}

export function dataAwsccEventsv2EventSourceTagsToTerraform(struct?: DataAwsccEventsv2EventSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2EventSourceTagsToHclTerraform(struct?: DataAwsccEventsv2EventSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2EventSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsv2EventSourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2EventSourceTags | undefined) {
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

export class DataAwsccEventsv2EventSourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsv2EventSourceTagsOutputReference {
    return new DataAwsccEventsv2EventSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source awscc_eventsv2_event_source}
*/
export class DataAwsccEventsv2EventSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_eventsv2_event_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEventsv2EventSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEventsv2EventSource to import
  * @param importFromId The id of the existing DataAwsccEventsv2EventSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEventsv2EventSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_event_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source awscc_eventsv2_event_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEventsv2EventSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEventsv2EventSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eventsv2_event_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccEventsv2EventSourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataAwsccEventsv2EventSourceDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }

  // event_bus_arn - computed: true, optional: false, required: false
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }

  // event_source_arn - computed: true, optional: false, required: false
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEventsv2EventSourceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
