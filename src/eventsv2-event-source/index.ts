/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Eventsv2EventSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}
  */
  readonly configuration: Eventsv2EventSourceConfiguration;
  /**
  * A description of the event source. Control characters and Unicode line separators are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}
  */
  readonly description?: string;
  /**
  * Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret. Absent for event source types that have no generated values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#details Eventsv2EventSource#details}
  */
  readonly details?: Eventsv2EventSourceDetails;
  /**
  * The ARN of the custom event bus the event source forwards onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}
  */
  readonly eventBusArn: string;
  /**
  * The name of the event source. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}
  */
  readonly name: string;
  /**
  * The tags assigned to the event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}
  */
  readonly tags?: Eventsv2EventSourceTags[] | cdktn.IResolvable;
}
export interface Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration {
  /**
  * The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. FIFO queues are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}
  */
  readonly arn?: string;
}

export function eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration {
  /**
  * A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service Eventsv2EventSource#aws_service}
  */
  readonly awsService?: string;
  /**
  * The destination for events that could not be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}
  */
  readonly onFailureConfiguration?: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration;
  /**
  * A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus. Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}
  */
  readonly pattern?: string;
}

export function eventsv2EventSourceConfigurationAwsServiceEventsConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_service: cdktn.stringToTerraform(struct!.awsService),
    on_failure_configuration: eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToTerraform(struct!.onFailureConfiguration),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function eventsv2EventSourceConfigurationAwsServiceEventsConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_service: {
      value: cdktn.stringToHclTerraform(struct!.awsService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_failure_configuration: {
      value: eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationToHclTerraform(struct!.onFailureConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsService = this._awsService;
    }
    if (this._onFailureConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailureConfiguration = this._onFailureConfiguration?.internalValue;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsService = undefined;
      this._onFailureConfiguration.internalValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsService = value.awsService;
      this._onFailureConfiguration.internalValue = value.onFailureConfiguration;
      this._pattern = value.pattern;
    }
  }

  // aws_service - computed: true, optional: true, required: false
  private _awsService?: string; 
  public get awsService() {
    return this.getStringAttribute('aws_service');
  }
  public set awsService(value: string) {
    this._awsService = value;
  }
  public resetAwsService() {
    this._awsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceInput() {
    return this._awsService;
  }

  // on_failure_configuration - computed: true, optional: true, required: false
  private _onFailureConfiguration = new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(this, "on_failure_configuration");
  public get onFailureConfiguration() {
    return this._onFailureConfiguration;
  }
  public putOnFailureConfiguration(value: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration) {
    this._onFailureConfiguration.internalValue = value;
  }
  public resetOnFailureConfiguration() {
    this._onFailureConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureConfigurationInput() {
    return this._onFailureConfiguration.internalValue;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration {
  /**
  * The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. FIFO queues are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}
  */
  readonly arn?: string;
}

export function eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface Eventsv2EventSourceConfigurationPartnerEventsConfiguration {
  /**
  * The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}
  */
  readonly onFailureConfiguration?: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration;
  /**
  * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_bus_kms_key_identifier Eventsv2EventSource#partner_bus_kms_key_identifier}
  */
  readonly partnerBusKmsKeyIdentifier?: string;
  /**
  * The ARN of the partner event source to forward. The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_event_source_arn Eventsv2EventSource#partner_event_source_arn}
  */
  readonly partnerEventSourceArn?: string;
  /**
  * A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus. If you do not specify a pattern, all events from the partner event source are forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}
  */
  readonly pattern?: string;
}

export function eventsv2EventSourceConfigurationPartnerEventsConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationPartnerEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_failure_configuration: eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToTerraform(struct!.onFailureConfiguration),
    partner_bus_kms_key_identifier: cdktn.stringToTerraform(struct!.partnerBusKmsKeyIdentifier),
    partner_event_source_arn: cdktn.stringToTerraform(struct!.partnerEventSourceArn),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function eventsv2EventSourceConfigurationPartnerEventsConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationPartnerEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_failure_configuration: {
      value: eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationToHclTerraform(struct!.onFailureConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration",
    },
    partner_bus_kms_key_identifier: {
      value: cdktn.stringToHclTerraform(struct!.partnerBusKmsKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_event_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.partnerEventSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationPartnerEventsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailureConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailureConfiguration = this._onFailureConfiguration?.internalValue;
    }
    if (this._partnerBusKmsKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerBusKmsKeyIdentifier = this._partnerBusKmsKeyIdentifier;
    }
    if (this._partnerEventSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerEventSourceArn = this._partnerEventSourceArn;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationPartnerEventsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailureConfiguration.internalValue = undefined;
      this._partnerBusKmsKeyIdentifier = undefined;
      this._partnerEventSourceArn = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailureConfiguration.internalValue = value.onFailureConfiguration;
      this._partnerBusKmsKeyIdentifier = value.partnerBusKmsKeyIdentifier;
      this._partnerEventSourceArn = value.partnerEventSourceArn;
      this._pattern = value.pattern;
    }
  }

  // on_failure_configuration - computed: true, optional: true, required: false
  private _onFailureConfiguration = new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(this, "on_failure_configuration");
  public get onFailureConfiguration() {
    return this._onFailureConfiguration;
  }
  public putOnFailureConfiguration(value: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration) {
    this._onFailureConfiguration.internalValue = value;
  }
  public resetOnFailureConfiguration() {
    this._onFailureConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureConfigurationInput() {
    return this._onFailureConfiguration.internalValue;
  }

  // partner_bus_kms_key_identifier - computed: true, optional: true, required: false
  private _partnerBusKmsKeyIdentifier?: string; 
  public get partnerBusKmsKeyIdentifier() {
    return this.getStringAttribute('partner_bus_kms_key_identifier');
  }
  public set partnerBusKmsKeyIdentifier(value: string) {
    this._partnerBusKmsKeyIdentifier = value;
  }
  public resetPartnerBusKmsKeyIdentifier() {
    this._partnerBusKmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerBusKmsKeyIdentifierInput() {
    return this._partnerBusKmsKeyIdentifier;
  }

  // partner_event_source_arn - computed: true, optional: true, required: false
  private _partnerEventSourceArn?: string; 
  public get partnerEventSourceArn() {
    return this.getStringAttribute('partner_event_source_arn');
  }
  public set partnerEventSourceArn(value: string) {
    this._partnerEventSourceArn = value;
  }
  public resetPartnerEventSourceArn() {
    this._partnerEventSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerEventSourceArnInput() {
    return this._partnerEventSourceArn;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration {
  /**
  * The password. Set on create only: changing this value in a template has no effect. To change the password, call RotateWebhookCredentials. The username and the webhook URL do not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#password Eventsv2EventSource#password}
  */
  readonly password?: string;
  /**
  * The username. Cannot contain a colon or whitespace. Changing the username requires replacing the event source, which also requires a new Name and gives the event source a new webhook URL. RotateWebhookCredentials cannot change the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#username Eventsv2EventSource#username}
  */
  readonly username?: string;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration {
  /**
  * The hash algorithm the provider uses to compute the signature.
  * 
  * Valid values:
  * - SHA256 - SHA-256.
  * - SHA1 - SHA-1. Not recommended. Use SHA1 only for interoperability with a provider that cannot sign with SHA-256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#algorithm Eventsv2EventSource#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#delimiter Eventsv2EventSource#delimiter}
  */
  readonly delimiter?: string;
  /**
  * How the provider encodes the signature in the header.
  * 
  * Valid values:
  * - HEX - Hexadecimal.
  * - BASE64 - Base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#encoding Eventsv2EventSource#encoding}
  */
  readonly encoding?: string;
  /**
  * The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#message_id_http_header Eventsv2EventSource#message_id_http_header}
  */
  readonly messageIdHttpHeader?: string;
  /**
  * How the secret is encoded. RAW uses the secret's characters as the signing key. BASE64 decodes the secret first, as required by providers that issue Base64-encoded signing keys, such as those following the Standard Webhooks specification. If you do not specify an encoding, EventBridge uses RAW. Changing the encoding replaces the event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_encoding Eventsv2EventSource#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * The signing key shared with the provider. If you do not specify a key, EventBridge generates one. EventBridge stores the key only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the key, call RotateWebhookCredentials. The webhook URL does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}
  */
  readonly secretValue?: string;
  /**
  * The name of the header that carries the signature, for example X-Hub-Signature-256. When TimestampHttpHeader names the same header, Delimiter, SignaturePrefix and TimestampPrefix are all required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_http_header Eventsv2EventSource#signature_http_header}
  */
  readonly signatureHttpHeader?: string;
  /**
  * The text that precedes the signature in the header value, for example sha256=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_prefix Eventsv2EventSource#signature_prefix}
  */
  readonly signaturePrefix?: string;
  /**
  * How the provider assembles the message it signs from the request.
  * 
  * Valid values:
  * - BODY - The request body alone.
  * - TIMESTAMP_DOT_BODY - <timestamp>.<body>. Requires TimestampHttpHeader.
  * - MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY - <messageId>.<timestamp>.<body>, as in the Standard Webhooks specification. Requires TimestampHttpHeader and MessageIdHttpHeader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signed_message_composition Eventsv2EventSource#signed_message_composition}
  */
  readonly signedMessageComposition?: string;
  /**
  * The name of the header that carries the request timestamp. Required when SignedMessageComposition is TIMESTAMP_DOT_BODY or MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY, or when TimestampToleranceInSeconds is set. When it names the same header as SignatureHttpHeader, Delimiter, SignaturePrefix and TimestampPrefix are all required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_http_header Eventsv2EventSource#timestamp_http_header}
  */
  readonly timestampHttpHeader?: string;
  /**
  * The text that precedes the timestamp in the header value, for example t=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_prefix Eventsv2EventSource#timestamp_prefix}
  */
  readonly timestampPrefix?: string;
  /**
  * The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request. Requests outside this window are rejected. If you do not specify a tolerance, EventBridge uses 300 seconds. Requires TimestampHttpHeader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_tolerance_in_seconds Eventsv2EventSource#timestamp_tolerance_in_seconds}
  */
  readonly timestampToleranceInSeconds?: number;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    message_id_http_header: cdktn.stringToTerraform(struct!.messageIdHttpHeader),
    secret_encoding: cdktn.stringToTerraform(struct!.secretEncoding),
    secret_value: cdktn.stringToTerraform(struct!.secretValue),
    signature_http_header: cdktn.stringToTerraform(struct!.signatureHttpHeader),
    signature_prefix: cdktn.stringToTerraform(struct!.signaturePrefix),
    signed_message_composition: cdktn.stringToTerraform(struct!.signedMessageComposition),
    timestamp_http_header: cdktn.stringToTerraform(struct!.timestampHttpHeader),
    timestamp_prefix: cdktn.stringToTerraform(struct!.timestampPrefix),
    timestamp_tolerance_in_seconds: cdktn.numberToTerraform(struct!.timestampToleranceInSeconds),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id_http_header: {
      value: cdktn.stringToHclTerraform(struct!.messageIdHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktn.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: cdktn.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_http_header: {
      value: cdktn.stringToHclTerraform(struct!.signatureHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_prefix: {
      value: cdktn.stringToHclTerraform(struct!.signaturePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signed_message_composition: {
      value: cdktn.stringToHclTerraform(struct!.signedMessageComposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_http_header: {
      value: cdktn.stringToHclTerraform(struct!.timestampHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_prefix: {
      value: cdktn.stringToHclTerraform(struct!.timestampPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_tolerance_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timestampToleranceInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._messageIdHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageIdHttpHeader = this._messageIdHttpHeader;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._signatureHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureHttpHeader = this._signatureHttpHeader;
    }
    if (this._signaturePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.signaturePrefix = this._signaturePrefix;
    }
    if (this._signedMessageComposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedMessageComposition = this._signedMessageComposition;
    }
    if (this._timestampHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampHttpHeader = this._timestampHttpHeader;
    }
    if (this._timestampPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampPrefix = this._timestampPrefix;
    }
    if (this._timestampToleranceInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampToleranceInSeconds = this._timestampToleranceInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._delimiter = undefined;
      this._encoding = undefined;
      this._messageIdHttpHeader = undefined;
      this._secretEncoding = undefined;
      this._secretValue = undefined;
      this._signatureHttpHeader = undefined;
      this._signaturePrefix = undefined;
      this._signedMessageComposition = undefined;
      this._timestampHttpHeader = undefined;
      this._timestampPrefix = undefined;
      this._timestampToleranceInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._delimiter = value.delimiter;
      this._encoding = value.encoding;
      this._messageIdHttpHeader = value.messageIdHttpHeader;
      this._secretEncoding = value.secretEncoding;
      this._secretValue = value.secretValue;
      this._signatureHttpHeader = value.signatureHttpHeader;
      this._signaturePrefix = value.signaturePrefix;
      this._signedMessageComposition = value.signedMessageComposition;
      this._timestampHttpHeader = value.timestampHttpHeader;
      this._timestampPrefix = value.timestampPrefix;
      this._timestampToleranceInSeconds = value.timestampToleranceInSeconds;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // message_id_http_header - computed: true, optional: true, required: false
  private _messageIdHttpHeader?: string; 
  public get messageIdHttpHeader() {
    return this.getStringAttribute('message_id_http_header');
  }
  public set messageIdHttpHeader(value: string) {
    this._messageIdHttpHeader = value;
  }
  public resetMessageIdHttpHeader() {
    this._messageIdHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdHttpHeaderInput() {
    return this._messageIdHttpHeader;
  }

  // secret_encoding - computed: true, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // secret_value - computed: true, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // signature_http_header - computed: true, optional: true, required: false
  private _signatureHttpHeader?: string; 
  public get signatureHttpHeader() {
    return this.getStringAttribute('signature_http_header');
  }
  public set signatureHttpHeader(value: string) {
    this._signatureHttpHeader = value;
  }
  public resetSignatureHttpHeader() {
    this._signatureHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHttpHeaderInput() {
    return this._signatureHttpHeader;
  }

  // signature_prefix - computed: true, optional: true, required: false
  private _signaturePrefix?: string; 
  public get signaturePrefix() {
    return this.getStringAttribute('signature_prefix');
  }
  public set signaturePrefix(value: string) {
    this._signaturePrefix = value;
  }
  public resetSignaturePrefix() {
    this._signaturePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturePrefixInput() {
    return this._signaturePrefix;
  }

  // signed_message_composition - computed: true, optional: true, required: false
  private _signedMessageComposition?: string; 
  public get signedMessageComposition() {
    return this.getStringAttribute('signed_message_composition');
  }
  public set signedMessageComposition(value: string) {
    this._signedMessageComposition = value;
  }
  public resetSignedMessageComposition() {
    this._signedMessageComposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedMessageCompositionInput() {
    return this._signedMessageComposition;
  }

  // timestamp_http_header - computed: true, optional: true, required: false
  private _timestampHttpHeader?: string; 
  public get timestampHttpHeader() {
    return this.getStringAttribute('timestamp_http_header');
  }
  public set timestampHttpHeader(value: string) {
    this._timestampHttpHeader = value;
  }
  public resetTimestampHttpHeader() {
    this._timestampHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampHttpHeaderInput() {
    return this._timestampHttpHeader;
  }

  // timestamp_prefix - computed: true, optional: true, required: false
  private _timestampPrefix?: string; 
  public get timestampPrefix() {
    return this.getStringAttribute('timestamp_prefix');
  }
  public set timestampPrefix(value: string) {
    this._timestampPrefix = value;
  }
  public resetTimestampPrefix() {
    this._timestampPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPrefixInput() {
    return this._timestampPrefix;
  }

  // timestamp_tolerance_in_seconds - computed: true, optional: true, required: false
  private _timestampToleranceInSeconds?: number; 
  public get timestampToleranceInSeconds() {
    return this.getNumberAttribute('timestamp_tolerance_in_seconds');
  }
  public set timestampToleranceInSeconds(value: number) {
    this._timestampToleranceInSeconds = value;
  }
  public resetTimestampToleranceInSeconds() {
    this._timestampToleranceInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampToleranceInSecondsInput() {
    return this._timestampToleranceInSeconds;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration {
  /**
  * The token the provider sends in the header. If you do not specify a token, Amazon EventBridge generates one. EventBridge stores the token only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the token, call RotateWebhookCredentials. The webhook URL does not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}
  */
  readonly secretValue?: string;
  /**
  * The name of the header that carries the secret, for example X-Webhook-Secret. Must be a valid header name as defined in RFC 7230.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#token_http_header Eventsv2EventSource#token_http_header}
  */
  readonly tokenHttpHeader?: string;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_value: cdktn.stringToTerraform(struct!.secretValue),
    token_http_header: cdktn.stringToTerraform(struct!.tokenHttpHeader),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_value: {
      value: cdktn.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_http_header: {
      value: cdktn.stringToHclTerraform(struct!.tokenHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._tokenHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHttpHeader = this._tokenHttpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretValue = undefined;
      this._tokenHttpHeader = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretValue = value.secretValue;
      this._tokenHttpHeader = value.tokenHttpHeader;
    }
  }

  // secret_value - computed: true, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // token_http_header - computed: true, optional: true, required: false
  private _tokenHttpHeader?: string; 
  public get tokenHttpHeader() {
    return this.getStringAttribute('token_http_header');
  }
  public set tokenHttpHeader(value: string) {
    this._tokenHttpHeader = value;
  }
  public resetTokenHttpHeader() {
    this._tokenHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHttpHeaderInput() {
    return this._tokenHttpHeader;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration {
  /**
  * The provider sends HTTP Basic authentication credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#basic_http_auth_configuration Eventsv2EventSource#basic_http_auth_configuration}
  */
  readonly basicHttpAuthConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration;
  /**
  * The provider signs each request with a hash-based message authentication code (HMAC) of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#hmac_auth_configuration Eventsv2EventSource#hmac_auth_configuration}
  */
  readonly hmacAuthConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration;
  /**
  * The provider sends the secret as the value of an HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#static_token_auth_configuration Eventsv2EventSource#static_token_auth_configuration}
  */
  readonly staticTokenAuthConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_http_auth_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToTerraform(struct!.basicHttpAuthConfiguration),
    hmac_auth_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToTerraform(struct!.hmacAuthConfiguration),
    static_token_auth_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToTerraform(struct!.staticTokenAuthConfiguration),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_http_auth_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationToHclTerraform(struct!.basicHttpAuthConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration",
    },
    hmac_auth_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationToHclTerraform(struct!.hmacAuthConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration",
    },
    static_token_auth_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationToHclTerraform(struct!.staticTokenAuthConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicHttpAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicHttpAuthConfiguration = this._basicHttpAuthConfiguration?.internalValue;
    }
    if (this._hmacAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacAuthConfiguration = this._hmacAuthConfiguration?.internalValue;
    }
    if (this._staticTokenAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticTokenAuthConfiguration = this._staticTokenAuthConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicHttpAuthConfiguration.internalValue = undefined;
      this._hmacAuthConfiguration.internalValue = undefined;
      this._staticTokenAuthConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicHttpAuthConfiguration.internalValue = value.basicHttpAuthConfiguration;
      this._hmacAuthConfiguration.internalValue = value.hmacAuthConfiguration;
      this._staticTokenAuthConfiguration.internalValue = value.staticTokenAuthConfiguration;
    }
  }

  // basic_http_auth_configuration - computed: true, optional: true, required: false
  private _basicHttpAuthConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference(this, "basic_http_auth_configuration");
  public get basicHttpAuthConfiguration() {
    return this._basicHttpAuthConfiguration;
  }
  public putBasicHttpAuthConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration) {
    this._basicHttpAuthConfiguration.internalValue = value;
  }
  public resetBasicHttpAuthConfiguration() {
    this._basicHttpAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicHttpAuthConfigurationInput() {
    return this._basicHttpAuthConfiguration.internalValue;
  }

  // hmac_auth_configuration - computed: true, optional: true, required: false
  private _hmacAuthConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference(this, "hmac_auth_configuration");
  public get hmacAuthConfiguration() {
    return this._hmacAuthConfiguration;
  }
  public putHmacAuthConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration) {
    this._hmacAuthConfiguration.internalValue = value;
  }
  public resetHmacAuthConfiguration() {
    this._hmacAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAuthConfigurationInput() {
    return this._hmacAuthConfiguration.internalValue;
  }

  // static_token_auth_configuration - computed: true, optional: true, required: false
  private _staticTokenAuthConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference(this, "static_token_auth_configuration");
  public get staticTokenAuthConfiguration() {
    return this._staticTokenAuthConfiguration;
  }
  public putStaticTokenAuthConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration) {
    this._staticTokenAuthConfiguration.internalValue = value;
  }
  public resetStaticTokenAuthConfiguration() {
    this._staticTokenAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTokenAuthConfigurationInput() {
    return this._staticTokenAuthConfiguration.internalValue;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration {
  /**
  * How EventBridge detects duplicate events.
  * 
  * Valid values:
  * - CONTENT_BASED - Detects duplicates by a hash of the event content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_type Eventsv2EventSource#deduplication_type}
  */
  readonly deduplicationType?: string;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deduplication_type: cdktn.stringToTerraform(struct!.deduplicationType),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deduplication_type: {
      value: cdktn.stringToHclTerraform(struct!.deduplicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deduplicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicationType = this._deduplicationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deduplicationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deduplicationType = value.deduplicationType;
    }
  }

  // deduplication_type - computed: true, optional: true, required: false
  private _deduplicationType?: string; 
  public get deduplicationType() {
    return this.getStringAttribute('deduplication_type');
  }
  public set deduplicationType(value: string) {
    this._deduplicationType = value;
  }
  public resetDeduplicationType() {
    this._deduplicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationTypeInput() {
    return this._deduplicationType;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration {
  /**
  * Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. The default is ON_ERROR_ONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#include_payload Eventsv2EventSource#include_payload}
  */
  readonly includePayload?: string;
  /**
  * The minimum log level: OFF (no logging), ERROR, or INFO. Records below this level are not emitted. The default is OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#level Eventsv2EventSource#level}
  */
  readonly level?: string;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_payload: cdktn.stringToTerraform(struct!.includePayload),
    level: cdktn.stringToTerraform(struct!.level),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_payload: {
      value: cdktn.stringToHclTerraform(struct!.includePayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktn.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePayload = this._includePayload;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includePayload = undefined;
      this._level = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includePayload = value.includePayload;
      this._level = value.level;
    }
  }

  // include_payload - computed: true, optional: true, required: false
  private _includePayload?: string; 
  public get includePayload() {
    return this.getStringAttribute('include_payload');
  }
  public set includePayload(value: string) {
    this._includePayload = value;
  }
  public resetIncludePayload() {
    this._includePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePayloadInput() {
    return this._includePayload;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface Eventsv2EventSourceConfigurationWebhookEventsConfiguration {
  /**
  * How the provider authenticates its requests. Set exactly one authentication type. You can't change the type after you create the event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#auth_configuration Eventsv2EventSource#auth_configuration}
  */
  readonly authConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration;
  /**
  * Deduplicates the event source's events on the event bus. If you do not specify a configuration, EventBridge does not deduplicate events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_configuration Eventsv2EventSource#deduplication_configuration}
  */
  readonly deduplicationConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration;
  /**
  * The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager. If you do not specify a key, the secret is encrypted with the AWS managed key aws/secretsmanager. A key you specify must be an enabled customer managed key in your account and Region. Changing the key re-encrypts the secret under the new key. The previous key can still decrypt the stored versions until the credential is next rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#kms_key_identifier Eventsv2EventSource#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * The log records Amazon EventBridge delivers for the webhook requests this event source receives. If you do not specify a configuration, EventBridge delivers no logs. Logs are delivered to the destinations you configure with Amazon CloudWatch Logs vended log delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#log_configuration Eventsv2EventSource#log_configuration}
  */
  readonly logConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration;
  /**
  * The HTTP request headers to add to each event's metadata, up to 20. Header names are case-insensitive and cannot repeat. Amazon EventBridge adds each header under its lowercase name. If you do not specify headers, EventBridge adds none. You cannot list headers that carry credentials or describe the network path, or the header that carries the static token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#metadata_http_headers Eventsv2EventSource#metadata_http_headers}
  */
  readonly metadataHttpHeaders?: string[];
  /**
  * The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus. The role must belong to the calling account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#role_arn Eventsv2EventSource#role_arn}
  */
  readonly roleArn?: string;
}

export function eventsv2EventSourceConfigurationWebhookEventsConfigurationToTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToTerraform(struct!.authConfiguration),
    deduplication_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToTerraform(struct!.deduplicationConfiguration),
    kms_key_identifier: cdktn.stringToTerraform(struct!.kmsKeyIdentifier),
    log_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
    metadata_http_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metadataHttpHeaders),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function eventsv2EventSourceConfigurationWebhookEventsConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfigurationWebhookEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationToHclTerraform(struct!.authConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration",
    },
    deduplication_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationToHclTerraform(struct!.deduplicationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration",
    },
    kms_key_identifier: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationToHclTerraform(struct!.logConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration",
    },
    metadata_http_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metadataHttpHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfigurationWebhookEventsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
    }
    if (this._deduplicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicationConfiguration = this._deduplicationConfiguration?.internalValue;
    }
    if (this._kmsKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    if (this._metadataHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataHttpHeaders = this._metadataHttpHeaders;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfigurationWebhookEventsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authConfiguration.internalValue = undefined;
      this._deduplicationConfiguration.internalValue = undefined;
      this._kmsKeyIdentifier = undefined;
      this._logConfiguration.internalValue = undefined;
      this._metadataHttpHeaders = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authConfiguration.internalValue = value.authConfiguration;
      this._deduplicationConfiguration.internalValue = value.deduplicationConfiguration;
      this._kmsKeyIdentifier = value.kmsKeyIdentifier;
      this._logConfiguration.internalValue = value.logConfiguration;
      this._metadataHttpHeaders = value.metadataHttpHeaders;
      this._roleArn = value.roleArn;
    }
  }

  // auth_configuration - computed: true, optional: true, required: false
  private _authConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference(this, "auth_configuration");
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration) {
    this._authConfiguration.internalValue = value;
  }
  public resetAuthConfiguration() {
    this._authConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }

  // deduplication_configuration - computed: true, optional: true, required: false
  private _deduplicationConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference(this, "deduplication_configuration");
  public get deduplicationConfiguration() {
    return this._deduplicationConfiguration;
  }
  public putDeduplicationConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration) {
    this._deduplicationConfiguration.internalValue = value;
  }
  public resetDeduplicationConfiguration() {
    this._deduplicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationConfigurationInput() {
    return this._deduplicationConfiguration.internalValue;
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // log_configuration - computed: true, optional: true, required: false
  private _logConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // metadata_http_headers - computed: true, optional: true, required: false
  private _metadataHttpHeaders?: string[]; 
  public get metadataHttpHeaders() {
    return this.getListAttribute('metadata_http_headers');
  }
  public set metadataHttpHeaders(value: string[]) {
    this._metadataHttpHeaders = value;
  }
  public resetMetadataHttpHeaders() {
    this._metadataHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHttpHeadersInput() {
    return this._metadataHttpHeaders;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface Eventsv2EventSourceConfiguration {
  /**
  * Configuration for forwarding a single AWS service's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service_events_configuration Eventsv2EventSource#aws_service_events_configuration}
  */
  readonly awsServiceEventsConfiguration?: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration;
  /**
  * Configuration for forwarding a partner event source's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_events_configuration Eventsv2EventSource#partner_events_configuration}
  */
  readonly partnerEventsConfiguration?: Eventsv2EventSourceConfigurationPartnerEventsConfiguration;
  /**
  * Configuration for receiving events that an external provider sends to a webhook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_events_configuration Eventsv2EventSource#webhook_events_configuration}
  */
  readonly webhookEventsConfiguration?: Eventsv2EventSourceConfigurationWebhookEventsConfiguration;
}

export function eventsv2EventSourceConfigurationToTerraform(struct?: Eventsv2EventSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_service_events_configuration: eventsv2EventSourceConfigurationAwsServiceEventsConfigurationToTerraform(struct!.awsServiceEventsConfiguration),
    partner_events_configuration: eventsv2EventSourceConfigurationPartnerEventsConfigurationToTerraform(struct!.partnerEventsConfiguration),
    webhook_events_configuration: eventsv2EventSourceConfigurationWebhookEventsConfigurationToTerraform(struct!.webhookEventsConfiguration),
  }
}


export function eventsv2EventSourceConfigurationToHclTerraform(struct?: Eventsv2EventSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_service_events_configuration: {
      value: eventsv2EventSourceConfigurationAwsServiceEventsConfigurationToHclTerraform(struct!.awsServiceEventsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration",
    },
    partner_events_configuration: {
      value: eventsv2EventSourceConfigurationPartnerEventsConfigurationToHclTerraform(struct!.partnerEventsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationPartnerEventsConfiguration",
    },
    webhook_events_configuration: {
      value: eventsv2EventSourceConfigurationWebhookEventsConfigurationToHclTerraform(struct!.webhookEventsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceConfigurationWebhookEventsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsServiceEventsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServiceEventsConfiguration = this._awsServiceEventsConfiguration?.internalValue;
    }
    if (this._partnerEventsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerEventsConfiguration = this._partnerEventsConfiguration?.internalValue;
    }
    if (this._webhookEventsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookEventsConfiguration = this._webhookEventsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsServiceEventsConfiguration.internalValue = undefined;
      this._partnerEventsConfiguration.internalValue = undefined;
      this._webhookEventsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsServiceEventsConfiguration.internalValue = value.awsServiceEventsConfiguration;
      this._partnerEventsConfiguration.internalValue = value.partnerEventsConfiguration;
      this._webhookEventsConfiguration.internalValue = value.webhookEventsConfiguration;
    }
  }

  // aws_service_events_configuration - computed: true, optional: true, required: false
  private _awsServiceEventsConfiguration = new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(this, "aws_service_events_configuration");
  public get awsServiceEventsConfiguration() {
    return this._awsServiceEventsConfiguration;
  }
  public putAwsServiceEventsConfiguration(value: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration) {
    this._awsServiceEventsConfiguration.internalValue = value;
  }
  public resetAwsServiceEventsConfiguration() {
    this._awsServiceEventsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceEventsConfigurationInput() {
    return this._awsServiceEventsConfiguration.internalValue;
  }

  // partner_events_configuration - computed: true, optional: true, required: false
  private _partnerEventsConfiguration = new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(this, "partner_events_configuration");
  public get partnerEventsConfiguration() {
    return this._partnerEventsConfiguration;
  }
  public putPartnerEventsConfiguration(value: Eventsv2EventSourceConfigurationPartnerEventsConfiguration) {
    this._partnerEventsConfiguration.internalValue = value;
  }
  public resetPartnerEventsConfiguration() {
    this._partnerEventsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerEventsConfigurationInput() {
    return this._partnerEventsConfiguration.internalValue;
  }

  // webhook_events_configuration - computed: true, optional: true, required: false
  private _webhookEventsConfiguration = new Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference(this, "webhook_events_configuration");
  public get webhookEventsConfiguration() {
    return this._webhookEventsConfiguration;
  }
  public putWebhookEventsConfiguration(value: Eventsv2EventSourceConfigurationWebhookEventsConfiguration) {
    this._webhookEventsConfiguration.internalValue = value;
  }
  public resetWebhookEventsConfiguration() {
    this._webhookEventsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEventsConfigurationInput() {
    return this._webhookEventsConfiguration.internalValue;
  }
}
export interface Eventsv2EventSourceDetailsWebhookDetails {
}

export function eventsv2EventSourceDetailsWebhookDetailsToTerraform(struct?: Eventsv2EventSourceDetailsWebhookDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eventsv2EventSourceDetailsWebhookDetailsToHclTerraform(struct?: Eventsv2EventSourceDetailsWebhookDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Eventsv2EventSourceDetailsWebhookDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceDetailsWebhookDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceDetailsWebhookDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface Eventsv2EventSourceDetails {
  /**
  * Values generated for a webhook event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_details Eventsv2EventSource#webhook_details}
  */
  readonly webhookDetails?: Eventsv2EventSourceDetailsWebhookDetails;
}

export function eventsv2EventSourceDetailsToTerraform(struct?: Eventsv2EventSourceDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    webhook_details: eventsv2EventSourceDetailsWebhookDetailsToTerraform(struct!.webhookDetails),
  }
}


export function eventsv2EventSourceDetailsToHclTerraform(struct?: Eventsv2EventSourceDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    webhook_details: {
      value: eventsv2EventSourceDetailsWebhookDetailsToHclTerraform(struct!.webhookDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "Eventsv2EventSourceDetailsWebhookDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Eventsv2EventSourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Eventsv2EventSourceDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookDetails = this._webhookDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webhookDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webhookDetails.internalValue = value.webhookDetails;
    }
  }

  // webhook_details - computed: true, optional: true, required: false
  private _webhookDetails = new Eventsv2EventSourceDetailsWebhookDetailsOutputReference(this, "webhook_details");
  public get webhookDetails() {
    return this._webhookDetails;
  }
  public putWebhookDetails(value: Eventsv2EventSourceDetailsWebhookDetails) {
    this._webhookDetails.internalValue = value;
  }
  public resetWebhookDetails() {
    this._webhookDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDetailsInput() {
    return this._webhookDetails.internalValue;
  }
}
export interface Eventsv2EventSourceTags {
  /**
  * The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#key Eventsv2EventSource#key}
  */
  readonly key?: string;
  /**
  * The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#value Eventsv2EventSource#value}
  */
  readonly value?: string;
}

export function eventsv2EventSourceTagsToTerraform(struct?: Eventsv2EventSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsv2EventSourceTagsToHclTerraform(struct?: Eventsv2EventSourceTags | cdktn.IResolvable): any {
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

export class Eventsv2EventSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Eventsv2EventSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Eventsv2EventSourceTags | cdktn.IResolvable | undefined) {
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

export class Eventsv2EventSourceTagsList extends cdktn.ComplexList {
  public internalValue? : Eventsv2EventSourceTags[] | cdktn.IResolvable

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
  public get(index: number): Eventsv2EventSourceTagsOutputReference {
    return new Eventsv2EventSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source}
*/
export class Eventsv2EventSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_eventsv2_event_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Eventsv2EventSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Eventsv2EventSource to import
  * @param importFromId The id of the existing Eventsv2EventSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Eventsv2EventSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_event_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Eventsv2EventSourceConfig
  */
  public constructor(scope: Construct, id: string, config: Eventsv2EventSourceConfig) {
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
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._details.internalValue = config.details;
    this._eventBusArn = config.eventBusArn;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new Eventsv2EventSourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: Eventsv2EventSourceConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // details - computed: true, optional: true, required: false
  private _details = new Eventsv2EventSourceDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: Eventsv2EventSourceDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // event_bus_arn - computed: false, optional: false, required: true
  private _eventBusArn?: string; 
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }
  public set eventBusArn(value: string) {
    this._eventBusArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusArnInput() {
    return this._eventBusArn;
  }

  // event_source_arn - computed: true, optional: false, required: false
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Eventsv2EventSourceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Eventsv2EventSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: eventsv2EventSourceConfigurationToTerraform(this._configuration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      details: eventsv2EventSourceDetailsToTerraform(this._details.internalValue),
      event_bus_arn: cdktn.stringToTerraform(this._eventBusArn),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(eventsv2EventSourceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: eventsv2EventSourceConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Eventsv2EventSourceConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: eventsv2EventSourceDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Eventsv2EventSourceDetails",
      },
      event_bus_arn: {
        value: cdktn.stringToHclTerraform(this._eventBusArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(eventsv2EventSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Eventsv2EventSourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
