/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerInferenceRouterConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the Inference Router. Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}
  */
  readonly inferenceRouterName?: string;
  /**
  * The routing targets of the Inference Router. An update replaces the full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}
  */
  readonly routingTargets: SagemakerInferenceRouterRoutingTargets[] | cdktn.IResolvable;
  /**
  * Tags to associate with the Inference Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}
  */
  readonly tags?: SagemakerInferenceRouterTags[] | cdktn.IResolvable;
}
export interface SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig {
  /**
  * How long, in seconds, a request can wait for a destination to pick it up before it expires. The default is 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#max_time_in_backlog_seconds SagemakerInferenceRouter#max_time_in_backlog_seconds}
  */
  readonly maxTimeInBacklogSeconds?: number;
}

export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_time_in_backlog_seconds: cdktn.numberToTerraform(struct!.maxTimeInBacklogSeconds),
  }
}


export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_time_in_backlog_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxTimeInBacklogSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTimeInBacklogSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeInBacklogSeconds = this._maxTimeInBacklogSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTimeInBacklogSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTimeInBacklogSeconds = value.maxTimeInBacklogSeconds;
    }
  }

  // max_time_in_backlog_seconds - computed: true, optional: true, required: false
  private _maxTimeInBacklogSeconds?: number; 
  public get maxTimeInBacklogSeconds() {
    return this.getNumberAttribute('max_time_in_backlog_seconds');
  }
  public set maxTimeInBacklogSeconds(value: number) {
    this._maxTimeInBacklogSeconds = value;
  }
  public resetMaxTimeInBacklogSeconds() {
    this._maxTimeInBacklogSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeInBacklogSecondsInput() {
    return this._maxTimeInBacklogSeconds;
  }
}
export interface SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig {
  /**
  * The ARN of a standard (not FIFO) SNS topic to notify when a request fails. It can be in any Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#error_topic SagemakerInferenceRouter#error_topic}
  */
  readonly errorTopic?: string;
  /**
  * The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds. It can be in any Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#success_topic SagemakerInferenceRouter#success_topic}
  */
  readonly successTopic?: string;
}

export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_topic: cdktn.stringToTerraform(struct!.errorTopic),
    success_topic: cdktn.stringToTerraform(struct!.successTopic),
  }
}


export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_topic: {
      value: cdktn.stringToHclTerraform(struct!.errorTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_topic: {
      value: cdktn.stringToHclTerraform(struct!.successTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorTopic = this._errorTopic;
    }
    if (this._successTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.successTopic = this._successTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorTopic = undefined;
      this._successTopic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorTopic = value.errorTopic;
      this._successTopic = value.successTopic;
    }
  }

  // error_topic - computed: true, optional: true, required: false
  private _errorTopic?: string; 
  public get errorTopic() {
    return this.getStringAttribute('error_topic');
  }
  public set errorTopic(value: string) {
    this._errorTopic = value;
  }
  public resetErrorTopic() {
    this._errorTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTopicInput() {
    return this._errorTopic;
  }

  // success_topic - computed: true, optional: true, required: false
  private _successTopic?: string; 
  public get successTopic() {
    return this.getStringAttribute('success_topic');
  }
  public set successTopic(value: string) {
    this._successTopic = value;
  }
  public resetSuccessTopic() {
    this._successTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successTopicInput() {
    return this._successTopic;
  }
}
export interface SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig {
  /**
  * The AWS KMS key that encrypts the results. If any destination is in a different account or Region from the Inference Router, use a key ARN or an alias ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#kms_key_id SagemakerInferenceRouter#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The SNS topics the Inference Router publishes a completion to. The notification carries the location of the result, not the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#notification_config SagemakerInferenceRouter#notification_config}
  */
  readonly notificationConfig?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig;
  /**
  * The Amazon S3 location for failed requests. It can be in any Region and account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_failure_path SagemakerInferenceRouter#s3_failure_path}
  */
  readonly s3FailurePath?: string;
  /**
  * The Amazon S3 location for successful results. It can be in any Region and account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_output_path SagemakerInferenceRouter#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    notification_config: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct!.notificationConfig),
    s3_failure_path: cdktn.stringToTerraform(struct!.s3FailurePath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_config: {
      value: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig",
    },
    s3_failure_path: {
      value: cdktn.stringToHclTerraform(struct!.s3FailurePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    if (this._s3FailurePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FailurePath = this._s3FailurePath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._notificationConfig.internalValue = undefined;
      this._s3FailurePath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._notificationConfig.internalValue = value.notificationConfig;
      this._s3FailurePath = value.s3FailurePath;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // notification_config - computed: true, optional: true, required: false
  private _notificationConfig = new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // s3_failure_path - computed: true, optional: true, required: false
  private _s3FailurePath?: string; 
  public get s3FailurePath() {
    return this.getStringAttribute('s3_failure_path');
  }
  public set s3FailurePath(value: string) {
    this._s3FailurePath = value;
  }
  public resetS3FailurePath() {
    this._s3FailurePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FailurePathInput() {
    return this._s3FailurePath;
  }

  // s3_output_path - computed: true, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig {
  /**
  * How the Inference Router submits a request to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#client_config SagemakerInferenceRouter#client_config}
  */
  readonly clientConfig?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig;
  /**
  * Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#output_config SagemakerInferenceRouter#output_config}
  */
  readonly outputConfig?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig;
}

export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigToTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_config: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigToTerraform(struct!.clientConfig),
    output_config: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigToTerraform(struct!.outputConfig),
  }
}


export function sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_config: {
      value: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig",
    },
    output_config: {
      value: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = undefined;
      this._outputConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = value.clientConfig;
      this._outputConfig.internalValue = value.outputConfig;
    }
  }

  // client_config - computed: true, optional: true, required: false
  private _clientConfig = new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // output_config - computed: true, optional: true, required: false
  private _outputConfig = new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }
}
export interface SagemakerInferenceRouterRoutingTargetsDestinations {
  /**
  * The ARN of a SageMaker endpoint or inference component that serves the routing target. It can be in any Region and account within the Inference Router's partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#resource_arn SagemakerInferenceRouter#resource_arn}
  */
  readonly resourceArn: string;
}

export function sagemakerInferenceRouterRoutingTargetsDestinationsToTerraform(struct?: SagemakerInferenceRouterRoutingTargetsDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function sagemakerInferenceRouterRoutingTargetsDestinationsToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargetsDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceRouterRoutingTargetsDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargetsDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class SagemakerInferenceRouterRoutingTargetsDestinationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceRouterRoutingTargetsDestinations[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference {
    return new SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceRouterRoutingTargets {
  /**
  * Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#async_inference_config SagemakerInferenceRouter#async_inference_config}
  */
  readonly asyncInferenceConfig?: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig;
  /**
  * The endpoints and inference components that serve this routing target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#destinations SagemakerInferenceRouter#destinations}
  */
  readonly destinations: SagemakerInferenceRouterRoutingTargetsDestinations[] | cdktn.IResolvable;
  /**
  * The logical model name a caller passes at invoke time. Unique within an Inference Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#name SagemakerInferenceRouter#name}
  */
  readonly name: string;
  /**
  * How the router prefers this routing target's destinations. LocalRegionFirst (the default) uses destinations in the router's Region first, then the others, each group in the order listed. InstancePoolOrder, for asynchronous routing targets only, tries destinations in order of the best instance pool they can serve from now. In both, degraded destinations are used after the others. If omitted, LocalRegionFirst is used and returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_preference SagemakerInferenceRouter#routing_preference}
  */
  readonly routingPreference?: string;
}

export function sagemakerInferenceRouterRoutingTargetsToTerraform(struct?: SagemakerInferenceRouterRoutingTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    async_inference_config: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigToTerraform(struct!.asyncInferenceConfig),
    destinations: cdktn.listMapper(sagemakerInferenceRouterRoutingTargetsDestinationsToTerraform, false)(struct!.destinations),
    name: cdktn.stringToTerraform(struct!.name),
    routing_preference: cdktn.stringToTerraform(struct!.routingPreference),
  }
}


export function sagemakerInferenceRouterRoutingTargetsToHclTerraform(struct?: SagemakerInferenceRouterRoutingTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    async_inference_config: {
      value: sagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigToHclTerraform(struct!.asyncInferenceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig",
    },
    destinations: {
      value: cdktn.listMapperHcl(sagemakerInferenceRouterRoutingTargetsDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceRouterRoutingTargetsDestinationsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_preference: {
      value: cdktn.stringToHclTerraform(struct!.routingPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceRouterRoutingTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceRouterRoutingTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncInferenceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInferenceConfig = this._asyncInferenceConfig?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routingPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPreference = this._routingPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceRouterRoutingTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncInferenceConfig.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._name = undefined;
      this._routingPreference = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asyncInferenceConfig.internalValue = value.asyncInferenceConfig;
      this._destinations.internalValue = value.destinations;
      this._name = value.name;
      this._routingPreference = value.routingPreference;
    }
  }

  // async_inference_config - computed: true, optional: true, required: false
  private _asyncInferenceConfig = new SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(this, "async_inference_config");
  public get asyncInferenceConfig() {
    return this._asyncInferenceConfig;
  }
  public putAsyncInferenceConfig(value: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig) {
    this._asyncInferenceConfig.internalValue = value;
  }
  public resetAsyncInferenceConfig() {
    this._asyncInferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInferenceConfigInput() {
    return this._asyncInferenceConfig.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new SagemakerInferenceRouterRoutingTargetsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: SagemakerInferenceRouterRoutingTargetsDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
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

  // routing_preference - computed: true, optional: true, required: false
  private _routingPreference?: string; 
  public get routingPreference() {
    return this.getStringAttribute('routing_preference');
  }
  public set routingPreference(value: string) {
    this._routingPreference = value;
  }
  public resetRoutingPreference() {
    this._routingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPreferenceInput() {
    return this._routingPreference;
  }
}

export class SagemakerInferenceRouterRoutingTargetsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceRouterRoutingTargets[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceRouterRoutingTargetsOutputReference {
    return new SagemakerInferenceRouterRoutingTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceRouterTags {
  /**
  * The tag key. Tag keys must be unique per resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#key SagemakerInferenceRouter#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#value SagemakerInferenceRouter#value}
  */
  readonly value?: string;
}

export function sagemakerInferenceRouterTagsToTerraform(struct?: SagemakerInferenceRouterTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerInferenceRouterTagsToHclTerraform(struct?: SagemakerInferenceRouterTags | cdktn.IResolvable): any {
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

export class SagemakerInferenceRouterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceRouterTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceRouterTags | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceRouterTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceRouterTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceRouterTagsOutputReference {
    return new SagemakerInferenceRouterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router awscc_sagemaker_inference_router}
*/
export class SagemakerInferenceRouter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerInferenceRouter to import
  * @param importFromId The id of the existing SagemakerInferenceRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerInferenceRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router awscc_sagemaker_inference_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerInferenceRouterConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerInferenceRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_inference_router',
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
    this._inferenceRouterName = config.inferenceRouterName;
    this._routingTargets.internalValue = config.routingTargets;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_router_arn - computed: true, optional: false, required: false
  public get inferenceRouterArn() {
    return this.getStringAttribute('inference_router_arn');
  }

  // inference_router_name - computed: true, optional: true, required: false
  private _inferenceRouterName?: string; 
  public get inferenceRouterName() {
    return this.getStringAttribute('inference_router_name');
  }
  public set inferenceRouterName(value: string) {
    this._inferenceRouterName = value;
  }
  public resetInferenceRouterName() {
    this._inferenceRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceRouterNameInput() {
    return this._inferenceRouterName;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // routing_targets - computed: false, optional: false, required: true
  private _routingTargets = new SagemakerInferenceRouterRoutingTargetsList(this, "routing_targets", false);
  public get routingTargets() {
    return this._routingTargets;
  }
  public putRoutingTargets(value: SagemakerInferenceRouterRoutingTargets[] | cdktn.IResolvable) {
    this._routingTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTargetsInput() {
    return this._routingTargets.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerInferenceRouterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerInferenceRouterTags[] | cdktn.IResolvable) {
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
      inference_router_name: cdktn.stringToTerraform(this._inferenceRouterName),
      routing_targets: cdktn.listMapper(sagemakerInferenceRouterRoutingTargetsToTerraform, false)(this._routingTargets.internalValue),
      tags: cdktn.listMapper(sagemakerInferenceRouterTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inference_router_name: {
        value: cdktn.stringToHclTerraform(this._inferenceRouterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_targets: {
        value: cdktn.listMapperHcl(sagemakerInferenceRouterRoutingTargetsToHclTerraform, false)(this._routingTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceRouterRoutingTargetsList",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerInferenceRouterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceRouterTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
