/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Eventsv2EventSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The event source configuration. Specify exactly one of AwsServiceEventsConfiguration or PartnerEventsConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}
  */
  readonly configuration: Eventsv2EventSourceConfiguration;
  /**
  * A description of the event source. Control characters and Unicode line separators are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}
  */
  readonly description?: string;
  /**
  * The ARN of the custom event bus the event source forwards onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}
  */
  readonly eventBusArn: string;
  /**
  * The name of the event source. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}
  */
  readonly name: string;
  /**
  * The tags assigned to the event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}
  */
  readonly tags?: Eventsv2EventSourceTags[] | cdktn.IResolvable;
}
export interface Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration {
  /**
  * The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. FIFO queues are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#aws_service Eventsv2EventSource#aws_service}
  */
  readonly awsService?: string;
  /**
  * The destination for events that could not be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}
  */
  readonly onFailureConfiguration?: Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration;
  /**
  * A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus. Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}
  */
  readonly onFailureConfiguration?: Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration;
  /**
  * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_bus_kms_key_identifier Eventsv2EventSource#partner_bus_kms_key_identifier}
  */
  readonly partnerBusKmsKeyIdentifier?: string;
  /**
  * The ARN of the partner event source to forward. The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_event_source_arn Eventsv2EventSource#partner_event_source_arn}
  */
  readonly partnerEventSourceArn?: string;
  /**
  * A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus. If you do not specify a pattern, all events from the partner event source are forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}
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
export interface Eventsv2EventSourceConfiguration {
  /**
  * Configuration for forwarding a single AWS service's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#aws_service_events_configuration Eventsv2EventSource#aws_service_events_configuration}
  */
  readonly awsServiceEventsConfiguration?: Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration;
  /**
  * Configuration for forwarding a partner event source's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_events_configuration Eventsv2EventSource#partner_events_configuration}
  */
  readonly partnerEventsConfiguration?: Eventsv2EventSourceConfigurationPartnerEventsConfiguration;
}

export function eventsv2EventSourceConfigurationToTerraform(struct?: Eventsv2EventSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_service_events_configuration: eventsv2EventSourceConfigurationAwsServiceEventsConfigurationToTerraform(struct!.awsServiceEventsConfiguration),
    partner_events_configuration: eventsv2EventSourceConfigurationPartnerEventsConfigurationToTerraform(struct!.partnerEventsConfiguration),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Eventsv2EventSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsServiceEventsConfiguration.internalValue = undefined;
      this._partnerEventsConfiguration.internalValue = undefined;
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
}
export interface Eventsv2EventSourceTags {
  /**
  * The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#key Eventsv2EventSource#key}
  */
  readonly key?: string;
  /**
  * The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#value Eventsv2EventSource#value}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source}
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
  * @param importFromId The id of the existing Eventsv2EventSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Eventsv2EventSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_event_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source} Resource
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
        providerVersion: '1.104.0',
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
