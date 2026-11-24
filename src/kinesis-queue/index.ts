/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KinesisQueueConfig extends cdktn.TerraformMetaArguments {
  /**
  * Mutable attributes that control queue consumption behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}
  */
  readonly queueAttributes?: KinesisQueueQueueAttributes;
  /**
  * The name of the queue. The name's uniqueness is scoped per AWS account and region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * List of stream configurations associated with the queue. v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}
  */
  readonly streamConfigurationList: KinesisQueueStreamConfigurationListStruct[] | cdktn.IResolvable;
  /**
  * An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}
  */
  readonly tags?: KinesisQueueTags[] | cdktn.IResolvable;
}
export interface KinesisQueueQueueAttributesDeadLetterConfiguration {
  /**
  * The maximum number of times a record can be received before it is moved to the dead-letter target. Required when TargetType is BUILT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#max_receive_count KinesisQueue#max_receive_count}
  */
  readonly maxReceiveCount?: number;
  /**
  * The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#target_type KinesisQueue#target_type}
  */
  readonly targetType?: string;
}

export function kinesisQueueQueueAttributesDeadLetterConfigurationToTerraform(struct?: KinesisQueueQueueAttributesDeadLetterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_receive_count: cdktn.numberToTerraform(struct!.maxReceiveCount),
    target_type: cdktn.stringToTerraform(struct!.targetType),
  }
}


export function kinesisQueueQueueAttributesDeadLetterConfigurationToHclTerraform(struct?: KinesisQueueQueueAttributesDeadLetterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_receive_count: {
      value: cdktn.numberToHclTerraform(struct!.maxReceiveCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_type: {
      value: cdktn.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KinesisQueueQueueAttributesDeadLetterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReceiveCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReceiveCount = this._maxReceiveCount;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisQueueQueueAttributesDeadLetterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReceiveCount = undefined;
      this._targetType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReceiveCount = value.maxReceiveCount;
      this._targetType = value.targetType;
    }
  }

  // max_receive_count - computed: true, optional: true, required: false
  private _maxReceiveCount?: number; 
  public get maxReceiveCount() {
    return this.getNumberAttribute('max_receive_count');
  }
  public set maxReceiveCount(value: number) {
    this._maxReceiveCount = value;
  }
  public resetMaxReceiveCount() {
    this._maxReceiveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveCountInput() {
    return this._maxReceiveCount;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface KinesisQueueQueueAttributes {
  /**
  * The dead-letter configuration applied to records that exceed the maximum receive count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#dead_letter_configuration KinesisQueue#dead_letter_configuration}
  */
  readonly deadLetterConfiguration?: KinesisQueueQueueAttributesDeadLetterConfiguration;
  /**
  * The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#visibility_timeout_seconds KinesisQueue#visibility_timeout_seconds}
  */
  readonly visibilityTimeoutSeconds?: number;
}

export function kinesisQueueQueueAttributesToTerraform(struct?: KinesisQueueQueueAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dead_letter_configuration: kinesisQueueQueueAttributesDeadLetterConfigurationToTerraform(struct!.deadLetterConfiguration),
    visibility_timeout_seconds: cdktn.numberToTerraform(struct!.visibilityTimeoutSeconds),
  }
}


export function kinesisQueueQueueAttributesToHclTerraform(struct?: KinesisQueueQueueAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dead_letter_configuration: {
      value: kinesisQueueQueueAttributesDeadLetterConfigurationToHclTerraform(struct!.deadLetterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "KinesisQueueQueueAttributesDeadLetterConfiguration",
    },
    visibility_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.visibilityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisQueueQueueAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KinesisQueueQueueAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfiguration = this._deadLetterConfiguration?.internalValue;
    }
    if (this._visibilityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeoutSeconds = this._visibilityTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisQueueQueueAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadLetterConfiguration.internalValue = undefined;
      this._visibilityTimeoutSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadLetterConfiguration.internalValue = value.deadLetterConfiguration;
      this._visibilityTimeoutSeconds = value.visibilityTimeoutSeconds;
    }
  }

  // dead_letter_configuration - computed: true, optional: true, required: false
  private _deadLetterConfiguration = new KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference(this, "dead_letter_configuration");
  public get deadLetterConfiguration() {
    return this._deadLetterConfiguration;
  }
  public putDeadLetterConfiguration(value: KinesisQueueQueueAttributesDeadLetterConfiguration) {
    this._deadLetterConfiguration.internalValue = value;
  }
  public resetDeadLetterConfiguration() {
    this._deadLetterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigurationInput() {
    return this._deadLetterConfiguration.internalValue;
  }

  // visibility_timeout_seconds - computed: true, optional: true, required: false
  private _visibilityTimeoutSeconds?: number; 
  public get visibilityTimeoutSeconds() {
    return this.getNumberAttribute('visibility_timeout_seconds');
  }
  public set visibilityTimeoutSeconds(value: number) {
    this._visibilityTimeoutSeconds = value;
  }
  public resetVisibilityTimeoutSeconds() {
    this._visibilityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutSecondsInput() {
    return this._visibilityTimeoutSeconds;
  }
}
export interface KinesisQueueStreamConfigurationListStartingPosition {
  /**
  * The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#timestamp KinesisQueue#timestamp}
  */
  readonly timestamp?: string;
  /**
  * The starting position type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#type KinesisQueue#type}
  */
  readonly type?: string;
}

export function kinesisQueueStreamConfigurationListStartingPositionToTerraform(struct?: KinesisQueueStreamConfigurationListStartingPosition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timestamp: cdktn.stringToTerraform(struct!.timestamp),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function kinesisQueueStreamConfigurationListStartingPositionToHclTerraform(struct?: KinesisQueueStreamConfigurationListStartingPosition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timestamp: {
      value: cdktn.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisQueueStreamConfigurationListStartingPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KinesisQueueStreamConfigurationListStartingPosition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisQueueStreamConfigurationListStartingPosition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestamp = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestamp = value.timestamp;
      this._type = value.type;
    }
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface KinesisQueueStreamConfigurationListStruct {
  /**
  * The position in the stream from which the queue starts reading records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#starting_position KinesisQueue#starting_position}
  */
  readonly startingPosition?: KinesisQueueStreamConfigurationListStartingPosition;
  /**
  * The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_arn KinesisQueue#stream_arn}
  */
  readonly streamArn: string;
}

export function kinesisQueueStreamConfigurationListStructToTerraform(struct?: KinesisQueueStreamConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    starting_position: kinesisQueueStreamConfigurationListStartingPositionToTerraform(struct!.startingPosition),
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function kinesisQueueStreamConfigurationListStructToHclTerraform(struct?: KinesisQueueStreamConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    starting_position: {
      value: kinesisQueueStreamConfigurationListStartingPositionToHclTerraform(struct!.startingPosition),
      isBlock: true,
      type: "struct",
      storageClassType: "KinesisQueueStreamConfigurationListStartingPosition",
    },
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisQueueStreamConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisQueueStreamConfigurationListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startingPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition?.internalValue;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisQueueStreamConfigurationListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startingPosition.internalValue = undefined;
      this._streamArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startingPosition.internalValue = value.startingPosition;
      this._streamArn = value.streamArn;
    }
  }

  // starting_position - computed: true, optional: true, required: false
  private _startingPosition = new KinesisQueueStreamConfigurationListStartingPositionOutputReference(this, "starting_position");
  public get startingPosition() {
    return this._startingPosition;
  }
  public putStartingPosition(value: KinesisQueueStreamConfigurationListStartingPosition) {
    this._startingPosition.internalValue = value;
  }
  public resetStartingPosition() {
    this._startingPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition.internalValue;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}

export class KinesisQueueStreamConfigurationListStructList extends cdktn.ComplexList {
  public internalValue? : KinesisQueueStreamConfigurationListStruct[] | cdktn.IResolvable

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
  public get(index: number): KinesisQueueStreamConfigurationListStructOutputReference {
    return new KinesisQueueStreamConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisQueueTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#key KinesisQueue#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#value KinesisQueue#value}
  */
  readonly value?: string;
}

export function kinesisQueueTagsToTerraform(struct?: KinesisQueueTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kinesisQueueTagsToHclTerraform(struct?: KinesisQueueTags | cdktn.IResolvable): any {
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

export class KinesisQueueTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisQueueTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KinesisQueueTags | cdktn.IResolvable | undefined) {
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

export class KinesisQueueTagsList extends cdktn.ComplexList {
  public internalValue? : KinesisQueueTags[] | cdktn.IResolvable

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
  public get(index: number): KinesisQueueTagsOutputReference {
    return new KinesisQueueTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue awscc_kinesis_queue}
*/
export class KinesisQueue extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesis_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KinesisQueue to import
  * @param importFromId The id of the existing KinesisQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KinesisQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesis_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue awscc_kinesis_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisQueueConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesis_queue',
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
    this._queueAttributes.internalValue = config.queueAttributes;
    this._queueName = config.queueName;
    this._streamConfigurationList.internalValue = config.streamConfigurationList;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // queue_arn - computed: true, optional: false, required: false
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }

  // queue_attributes - computed: true, optional: true, required: false
  private _queueAttributes = new KinesisQueueQueueAttributesOutputReference(this, "queue_attributes");
  public get queueAttributes() {
    return this._queueAttributes;
  }
  public putQueueAttributes(value: KinesisQueueQueueAttributes) {
    this._queueAttributes.internalValue = value;
  }
  public resetQueueAttributes() {
    this._queueAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAttributesInput() {
    return this._queueAttributes.internalValue;
  }

  // queue_creation_timestamp - computed: true, optional: false, required: false
  public get queueCreationTimestamp() {
    return this.getStringAttribute('queue_creation_timestamp');
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // queue_status - computed: true, optional: false, required: false
  public get queueStatus() {
    return this.getStringAttribute('queue_status');
  }

  // stream_configuration_list - computed: false, optional: false, required: true
  private _streamConfigurationList = new KinesisQueueStreamConfigurationListStructList(this, "stream_configuration_list", false);
  public get streamConfigurationList() {
    return this._streamConfigurationList;
  }
  public putStreamConfigurationList(value: KinesisQueueStreamConfigurationListStruct[] | cdktn.IResolvable) {
    this._streamConfigurationList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigurationListInput() {
    return this._streamConfigurationList.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new KinesisQueueTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KinesisQueueTags[] | cdktn.IResolvable) {
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
      queue_attributes: kinesisQueueQueueAttributesToTerraform(this._queueAttributes.internalValue),
      queue_name: cdktn.stringToTerraform(this._queueName),
      stream_configuration_list: cdktn.listMapper(kinesisQueueStreamConfigurationListStructToTerraform, false)(this._streamConfigurationList.internalValue),
      tags: cdktn.listMapper(kinesisQueueTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      queue_attributes: {
        value: kinesisQueueQueueAttributesToHclTerraform(this._queueAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KinesisQueueQueueAttributes",
      },
      queue_name: {
        value: cdktn.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_configuration_list: {
        value: cdktn.listMapperHcl(kinesisQueueStreamConfigurationListStructToHclTerraform, false)(this._streamConfigurationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisQueueStreamConfigurationListStructList",
      },
      tags: {
        value: cdktn.listMapperHcl(kinesisQueueTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisQueueTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
