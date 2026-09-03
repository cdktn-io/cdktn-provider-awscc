/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerInferenceComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The deployment config for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}
  */
  readonly deploymentConfig?: SagemakerInferenceComponentDeploymentConfig;
  /**
  * The Amazon Resource Name (ARN) of the endpoint the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#endpoint_arn SagemakerInferenceComponent#endpoint_arn}
  */
  readonly endpointArn?: string;
  /**
  * The name of the endpoint the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * The name of the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#inference_component_name SagemakerInferenceComponent#inference_component_name}
  */
  readonly inferenceComponentName?: string;
  /**
  * The runtime config for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}
  */
  readonly runtimeConfig?: SagemakerInferenceComponentRuntimeConfig;
  /**
  * The specification for the inference component, for an endpoint with a single instance type. Specify exactly one of Specification or Specifications. InstanceType is not accepted here; use Specifications for per instance type configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}
  */
  readonly specification?: SagemakerInferenceComponentSpecification;
  /**
  * A list of specification objects for the inference component, one per instance type. The service requires at least two entries; use the singular Specification for a single instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}
  */
  readonly specifications?: SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable;
  /**
  * An array of tags to apply to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}
  */
  readonly tags?: SagemakerInferenceComponentTags[] | cdktn.IResolvable;
  /**
  * The name of the endpoint variant the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}
  */
  readonly variantName?: string;
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}
  */
  readonly alarmName?: string;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}
  */
  readonly alarms?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, false)(struct!.alarms),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform, false)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: true, optional: true, required: false
  private _alarms = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type?: string;
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type?: string;
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
  /**
  * Capacity size configuration for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}
  */
  readonly maximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Capacity size configuration for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}
  */
  readonly rollbackMaximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_batch_size: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct!.maximumBatchSize),
    maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    rollback_maximum_batch_size: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct!.rollbackMaximumBatchSize),
    wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_batch_size: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct!.maximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize",
    },
    maximum_execution_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollback_maximum_batch_size: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct!.rollbackMaximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize",
    },
    wait_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
    }
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = undefined;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._rollbackMaximumBatchSize.internalValue = undefined;
      this._waitIntervalInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = value.maximumBatchSize;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
    }
  }

  // maximum_batch_size - computed: true, optional: true, required: false
  private _maximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }
  public putMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize) {
    this._maximumBatchSize.internalValue = value;
  }
  public resetMaximumBatchSize() {
    this._maximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchSizeInput() {
    return this._maximumBatchSize.internalValue;
  }

  // maximum_execution_timeout_in_seconds - computed: true, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // rollback_maximum_batch_size - computed: true, optional: true, required: false
  private _rollbackMaximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
  public putRollbackMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize) {
    this._rollbackMaximumBatchSize.internalValue = value;
  }
  public resetRollbackMaximumBatchSize() {
    this._rollbackMaximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackMaximumBatchSizeInput() {
    return this._rollbackMaximumBatchSize.internalValue;
  }

  // wait_interval_in_seconds - computed: true, optional: true, required: false
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  public resetWaitIntervalInSeconds() {
    this._waitIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }
}
export interface SagemakerInferenceComponentDeploymentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration;
  /**
  * The rolling update policy for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}
  */
  readonly rollingUpdatePolicy?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy;
}

export function sagemakerInferenceComponentDeploymentConfigToTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_rollback_configuration: sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct!.autoRollbackConfiguration),
    rolling_update_policy: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct!.rollingUpdatePolicy),
  }
}


export function sagemakerInferenceComponentDeploymentConfigToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_rollback_configuration: {
      value: sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct!.autoRollbackConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration",
    },
    rolling_update_policy: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct!.rollingUpdatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._rollingUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._rollingUpdatePolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: true, optional: true, required: false
  private _autoRollbackConfiguration = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // rolling_update_policy - computed: true, optional: true, required: false
  private _rollingUpdatePolicy = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
  public putRollingUpdatePolicy(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy) {
    this._rollingUpdatePolicy.internalValue = value;
  }
  public resetRollingUpdatePolicy() {
    this._rollingUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdatePolicyInput() {
    return this._rollingUpdatePolicy.internalValue;
  }
}
export interface SagemakerInferenceComponentRuntimeConfigPlacementStatus {
}

export function sagemakerInferenceComponentRuntimeConfigPlacementStatusToTerraform(struct?: SagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceComponentRuntimeConfigPlacementStatusToHclTerraform(struct?: SagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_copy_count - computed: true, optional: false, required: false
  public get currentCopyCount() {
    return this.getNumberAttribute('current_copy_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}

export class SagemakerInferenceComponentRuntimeConfigPlacementStatusList extends cdktn.ComplexList {

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
  public get(index: number): SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference {
    return new SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentRuntimeConfig {
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}
  */
  readonly copyCount?: number;
}

export function sagemakerInferenceComponentRuntimeConfigToTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_count: cdktn.numberToTerraform(struct!.copyCount),
  }
}


export function sagemakerInferenceComponentRuntimeConfigToHclTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_count: {
      value: cdktn.numberToHclTerraform(struct!.copyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyCount = this._copyCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyCount = value.copyCount;
    }
  }

  // copy_count - computed: true, optional: true, required: false
  private _copyCount?: number; 
  public get copyCount() {
    return this.getNumberAttribute('copy_count');
  }
  public set copyCount(value: number) {
    this._copyCount = value;
  }
  public resetCopyCount() {
    this._copyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyCountInput() {
    return this._copyCount;
  }

  // current_copy_count - computed: true, optional: false, required: false
  public get currentCopyCount() {
    return this.getNumberAttribute('current_copy_count');
  }

  // desired_copy_count - computed: true, optional: false, required: false
  public get desiredCopyCount() {
    return this.getNumberAttribute('desired_copy_count');
  }

  // placement_status - computed: true, optional: false, required: false
  private _placementStatus = new SagemakerInferenceComponentRuntimeConfigPlacementStatusList(this, "placement_status", false);
  public get placementStatus() {
    return this._placementStatus;
  }
}
export interface SagemakerInferenceComponentSpecificationComputeResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}
  */
  readonly maxMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}
  */
  readonly minMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}
  */
  readonly numberOfAcceleratorDevicesRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}
  */
  readonly numberOfCpuCoresRequired?: number;
}

export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
    min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
    number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
    number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
  }
}


export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_accelerator_devices_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cpu_cores_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
    }
    if (this._minMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
    }
    if (this._numberOfAcceleratorDevicesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
    }
    if (this._numberOfCpuCoresRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = undefined;
      this._minMemoryRequiredInMb = undefined;
      this._numberOfAcceleratorDevicesRequired = undefined;
      this._numberOfCpuCoresRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
      this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
      this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
      this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: true, required: false
  private _maxMemoryRequiredInMb?: number; 
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }
  public set maxMemoryRequiredInMb(value: number) {
    this._maxMemoryRequiredInMb = value;
  }
  public resetMaxMemoryRequiredInMb() {
    this._maxMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequiredInMbInput() {
    return this._maxMemoryRequiredInMb;
  }

  // min_memory_required_in_mb - computed: true, optional: true, required: false
  private _minMemoryRequiredInMb?: number; 
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }
  public set minMemoryRequiredInMb(value: number) {
    this._minMemoryRequiredInMb = value;
  }
  public resetMinMemoryRequiredInMb() {
    this._minMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryRequiredInMbInput() {
    return this._minMemoryRequiredInMb;
  }

  // number_of_accelerator_devices_required - computed: true, optional: true, required: false
  private _numberOfAcceleratorDevicesRequired?: number; 
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }
  public set numberOfAcceleratorDevicesRequired(value: number) {
    this._numberOfAcceleratorDevicesRequired = value;
  }
  public resetNumberOfAcceleratorDevicesRequired() {
    this._numberOfAcceleratorDevicesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcceleratorDevicesRequiredInput() {
    return this._numberOfAcceleratorDevicesRequired;
  }

  // number_of_cpu_cores_required - computed: true, optional: true, required: false
  private _numberOfCpuCoresRequired?: number; 
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
  public set numberOfCpuCoresRequired(value: number) {
    this._numberOfCpuCoresRequired = value;
  }
  public resetNumberOfCpuCoresRequired() {
    this._numberOfCpuCoresRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresRequiredInput() {
    return this._numberOfCpuCoresRequired;
  }
}
export interface SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints {
  /**
  * The interval, in seconds, at which container metrics scraped from the endpoint are published to Amazon CloudWatch. Valid values per the SageMaker API Reference are 10, 30, 60, 120, 180, 240 and 300; the service validates the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}
  */
  readonly metricPublishFrequencyInSeconds?: number;
  /**
  * The path to the Prometheus formatted metrics endpoint exposed by the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}
  */
  readonly metricsEndpointPath?: string;
}

export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
    metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
  }
}


export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_publish_frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPublishFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
    }
    if (this._metricsEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = undefined;
      this._metricsEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
      this._metricsEndpointPath = value.metricsEndpointPath;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
  private _metricPublishFrequencyInSeconds?: number; 
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }
  public set metricPublishFrequencyInSeconds(value: number) {
    this._metricPublishFrequencyInSeconds = value;
  }
  public resetMetricPublishFrequencyInSeconds() {
    this._metricPublishFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPublishFrequencyInSecondsInput() {
    return this._metricPublishFrequencyInSeconds;
  }

  // metrics_endpoint_path - computed: true, optional: true, required: false
  private _metricsEndpointPath?: string; 
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
  public set metricsEndpointPath(value: string) {
    this._metricsEndpointPath = value;
  }
  public resetMetricsEndpointPath() {
    this._metricsEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointPathInput() {
    return this._metricsEndpointPath;
  }
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference {
    return new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metrics_endpoints SagemakerInferenceComponent#metrics_endpoints}
  */
  readonly metricsEndpoints?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_endpoints: cdktn.listMapper(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToTerraform, false)(struct!.metricsEndpoints),
  }
}


export function sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_endpoints: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToHclTerraform, false)(struct!.metricsEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpoints = this._metricsEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEndpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEndpoints.internalValue = value.metricsEndpoints;
    }
  }

  // metrics_endpoints - computed: true, optional: true, required: false
  private _metricsEndpoints = new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList(this, "metrics_endpoints", false);
  public get metricsEndpoints() {
    return this._metricsEndpoints;
  }
  public putMetricsEndpoints(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable) {
    this._metricsEndpoints.internalValue = value;
  }
  public resetMetricsEndpoints() {
    this._metricsEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointsInput() {
    return this._metricsEndpoints.internalValue;
  }
}
export interface SagemakerInferenceComponentSpecificationContainerDeployedImage {
}

export function sagemakerInferenceComponentSpecificationContainerDeployedImageToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceComponentSpecificationContainerDeployedImageToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerDeployedImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerDeployedImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resolution_time - computed: true, optional: false, required: false
  public get resolutionTime() {
    return this.getStringAttribute('resolution_time');
  }

  // resolved_image - computed: true, optional: false, required: false
  public get resolvedImage() {
    return this.getStringAttribute('resolved_image');
  }

  // specified_image - computed: true, optional: false, required: false
  public get specifiedImage() {
    return this.getStringAttribute('specified_image');
  }
}
export interface SagemakerInferenceComponentSpecificationContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}
  */
  readonly artifactUrl?: string;
  /**
  * The configuration for container metrics scraping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}
  */
  readonly containerMetricsConfig?: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig;
  /**
  * Environment variables to specify on the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The image to use for the container that will be materialized for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}
  */
  readonly image?: string;
}

export function sagemakerInferenceComponentSpecificationContainerToTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
    container_metrics_config: sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToTerraform(struct!.containerMetricsConfig),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function sagemakerInferenceComponentSpecificationContainerToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_url: {
      value: cdktn.stringToHclTerraform(struct!.artifactUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_metrics_config: {
      value: sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToHclTerraform(struct!.containerMetricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUrl = this._artifactUrl;
    }
    if (this._containerMetricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactUrl = undefined;
      this._containerMetricsConfig.internalValue = undefined;
      this._environment = undefined;
      this._image = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactUrl = value.artifactUrl;
      this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
      this._environment = value.environment;
      this._image = value.image;
    }
  }

  // artifact_url - computed: true, optional: true, required: false
  private _artifactUrl?: string; 
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }
  public set artifactUrl(value: string) {
    this._artifactUrl = value;
  }
  public resetArtifactUrl() {
    this._artifactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUrlInput() {
    return this._artifactUrl;
  }

  // container_metrics_config - computed: true, optional: true, required: false
  private _containerMetricsConfig = new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(this, "container_metrics_config");
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }
  public putContainerMetricsConfig(value: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig) {
    this._containerMetricsConfig.internalValue = value;
  }
  public resetContainerMetricsConfig() {
    this._containerMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetricsConfigInput() {
    return this._containerMetricsConfig.internalValue;
  }

  // deployed_image - computed: true, optional: false, required: false
  private _deployedImage = new SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference(this, "deployed_image");
  public get deployedImage() {
    return this._deployedImage;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface SagemakerInferenceComponentSpecificationCurrentDataCacheConfig {
}

export function sagemakerInferenceComponentSpecificationCurrentDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceComponentSpecificationCurrentDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationCurrentDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationCurrentDataCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_caching - computed: true, optional: false, required: false
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
}
export interface SagemakerInferenceComponentSpecificationDataCacheConfig {
  /**
  * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}
  */
  readonly enableCaching?: boolean | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
  }
}


export function sagemakerInferenceComponentSpecificationDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_caching: {
      value: cdktn.booleanToHclTerraform(struct!.enableCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaching = this._enableCaching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationDataCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCaching = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCaching = value.enableCaching;
    }
  }

  // enable_caching - computed: true, optional: true, required: false
  private _enableCaching?: boolean | cdktn.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktn.IResolvable) {
    this._enableCaching = value;
  }
  public resetEnableCaching() {
    this._enableCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }
}
export interface SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * The maximum allowed difference in the number of inference component copies between any two Availability Zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}
  */
  readonly maxImbalance?: number;
}

export function sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
    max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
  }
}


export function sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_imbalance: {
      value: cdktn.numberToHclTerraform(struct!.maxImbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._maxImbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxImbalance = this._maxImbalance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._maxImbalance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._maxImbalance = value.maxImbalance;
    }
  }

  // enforcement_mode - computed: true, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // max_imbalance - computed: true, optional: true, required: false
  private _maxImbalance?: number; 
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
  public set maxImbalance(value: number) {
    this._maxImbalance = value;
  }
  public resetMaxImbalance() {
    this._maxImbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImbalanceInput() {
    return this._maxImbalance;
  }
}
export interface SagemakerInferenceComponentSpecificationSchedulingConfig {
  /**
  * Configuration for balancing inference component copies across Availability Zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}
  */
  readonly availabilityZoneBalance?: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}
  */
  readonly placementStrategy?: string;
}

export function sagemakerInferenceComponentSpecificationSchedulingConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_balance: sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToTerraform(struct!.availabilityZoneBalance),
    placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
  }
}


export function sagemakerInferenceComponentSpecificationSchedulingConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_balance: {
      value: sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct!.availabilityZoneBalance),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance",
    },
    placement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.placementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
    }
    if (this._placementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationSchedulingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneBalance.internalValue = undefined;
      this._placementStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
      this._placementStrategy = value.placementStrategy;
    }
  }

  // availability_zone_balance - computed: true, optional: true, required: false
  private _availabilityZoneBalance = new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(this, "availability_zone_balance");
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }
  public putAvailabilityZoneBalance(value: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance) {
    this._availabilityZoneBalance.internalValue = value;
  }
  public resetAvailabilityZoneBalance() {
    this._availabilityZoneBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneBalanceInput() {
    return this._availabilityZoneBalance.internalValue;
  }

  // placement_strategy - computed: true, optional: true, required: false
  private _placementStrategy?: string; 
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
  public set placementStrategy(value: string) {
    this._placementStrategy = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy;
  }
}
export interface SagemakerInferenceComponentSpecificationStartupParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
}

export function sagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
  }
}


export function sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }
}
export interface SagemakerInferenceComponentSpecification {
  /**
  * The name of the base inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}
  */
  readonly baseInferenceComponentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}
  */
  readonly computeResourceRequirements?: SagemakerInferenceComponentSpecificationComputeResourceRequirements;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}
  */
  readonly container?: SagemakerInferenceComponentSpecificationContainer;
  /**
  * Settings that affect how the inference component caches data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}
  */
  readonly dataCacheConfig?: SagemakerInferenceComponentSpecificationDataCacheConfig;
  /**
  * The name of the model to use with the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}
  */
  readonly modelName?: string;
  /**
  * The scheduling configuration that determines how inference component copies are placed across available instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}
  */
  readonly schedulingConfig?: SagemakerInferenceComponentSpecificationSchedulingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}
  */
  readonly startupParameters?: SagemakerInferenceComponentSpecificationStartupParameters;
}

export function sagemakerInferenceComponentSpecificationToTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_inference_component_name: cdktn.stringToTerraform(struct!.baseInferenceComponentName),
    compute_resource_requirements: sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct!.computeResourceRequirements),
    container: sagemakerInferenceComponentSpecificationContainerToTerraform(struct!.container),
    data_cache_config: sagemakerInferenceComponentSpecificationDataCacheConfigToTerraform(struct!.dataCacheConfig),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    scheduling_config: sagemakerInferenceComponentSpecificationSchedulingConfigToTerraform(struct!.schedulingConfig),
    startup_parameters: sagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct!.startupParameters),
  }
}


export function sagemakerInferenceComponentSpecificationToHclTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_inference_component_name: {
      value: cdktn.stringToHclTerraform(struct!.baseInferenceComponentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resource_requirements: {
      value: sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct!.computeResourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationComputeResourceRequirements",
    },
    container: {
      value: sagemakerInferenceComponentSpecificationContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationContainer",
    },
    data_cache_config: {
      value: sagemakerInferenceComponentSpecificationDataCacheConfigToHclTerraform(struct!.dataCacheConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationDataCacheConfig",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_config: {
      value: sagemakerInferenceComponentSpecificationSchedulingConfigToHclTerraform(struct!.schedulingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationSchedulingConfig",
    },
    startup_parameters: {
      value: sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct!.startupParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationStartupParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInferenceComponentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInferenceComponentName = this._baseInferenceComponentName;
    }
    if (this._computeResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._dataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._schedulingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
    }
    if (this._startupParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupParameters = this._startupParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = undefined;
      this._computeResourceRequirements.internalValue = undefined;
      this._container.internalValue = undefined;
      this._dataCacheConfig.internalValue = undefined;
      this._modelName = undefined;
      this._schedulingConfig.internalValue = undefined;
      this._startupParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = value.baseInferenceComponentName;
      this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
      this._container.internalValue = value.container;
      this._dataCacheConfig.internalValue = value.dataCacheConfig;
      this._modelName = value.modelName;
      this._schedulingConfig.internalValue = value.schedulingConfig;
      this._startupParameters.internalValue = value.startupParameters;
    }
  }

  // base_inference_component_name - computed: true, optional: true, required: false
  private _baseInferenceComponentName?: string; 
  public get baseInferenceComponentName() {
    return this.getStringAttribute('base_inference_component_name');
  }
  public set baseInferenceComponentName(value: string) {
    this._baseInferenceComponentName = value;
  }
  public resetBaseInferenceComponentName() {
    this._baseInferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInferenceComponentNameInput() {
    return this._baseInferenceComponentName;
  }

  // compute_resource_requirements - computed: true, optional: true, required: false
  private _computeResourceRequirements = new SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(this, "compute_resource_requirements");
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }
  public putComputeResourceRequirements(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements) {
    this._computeResourceRequirements.internalValue = value;
  }
  public resetComputeResourceRequirements() {
    this._computeResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceRequirementsInput() {
    return this._computeResourceRequirements.internalValue;
  }

  // container - computed: true, optional: true, required: false
  private _container = new SagemakerInferenceComponentSpecificationContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerInferenceComponentSpecificationContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // current_data_cache_config - computed: true, optional: false, required: false
  private _currentDataCacheConfig = new SagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference(this, "current_data_cache_config");
  public get currentDataCacheConfig() {
    return this._currentDataCacheConfig;
  }

  // data_cache_config - computed: true, optional: true, required: false
  private _dataCacheConfig = new SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(this, "data_cache_config");
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }
  public putDataCacheConfig(value: SagemakerInferenceComponentSpecificationDataCacheConfig) {
    this._dataCacheConfig.internalValue = value;
  }
  public resetDataCacheConfig() {
    this._dataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheConfigInput() {
    return this._dataCacheConfig.internalValue;
  }

  // model_name - computed: true, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // scheduling_config - computed: true, optional: true, required: false
  private _schedulingConfig = new SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: SagemakerInferenceComponentSpecificationSchedulingConfig) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // startup_parameters - computed: true, optional: true, required: false
  private _startupParameters = new SagemakerInferenceComponentSpecificationStartupParametersOutputReference(this, "startup_parameters");
  public get startupParameters() {
    return this._startupParameters;
  }
  public putStartupParameters(value: SagemakerInferenceComponentSpecificationStartupParameters) {
    this._startupParameters.internalValue = value;
  }
  public resetStartupParameters() {
    this._startupParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters.internalValue;
  }
}
export interface SagemakerInferenceComponentSpecificationsComputeResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}
  */
  readonly maxMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}
  */
  readonly minMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}
  */
  readonly numberOfAcceleratorDevicesRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}
  */
  readonly numberOfCpuCoresRequired?: number;
}

export function sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToTerraform(struct?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
    min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
    number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
    number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
  }
}


export function sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_accelerator_devices_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cpu_cores_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
    }
    if (this._minMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
    }
    if (this._numberOfAcceleratorDevicesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
    }
    if (this._numberOfCpuCoresRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsComputeResourceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = undefined;
      this._minMemoryRequiredInMb = undefined;
      this._numberOfAcceleratorDevicesRequired = undefined;
      this._numberOfCpuCoresRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
      this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
      this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
      this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: true, required: false
  private _maxMemoryRequiredInMb?: number; 
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }
  public set maxMemoryRequiredInMb(value: number) {
    this._maxMemoryRequiredInMb = value;
  }
  public resetMaxMemoryRequiredInMb() {
    this._maxMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequiredInMbInput() {
    return this._maxMemoryRequiredInMb;
  }

  // min_memory_required_in_mb - computed: true, optional: true, required: false
  private _minMemoryRequiredInMb?: number; 
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }
  public set minMemoryRequiredInMb(value: number) {
    this._minMemoryRequiredInMb = value;
  }
  public resetMinMemoryRequiredInMb() {
    this._minMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryRequiredInMbInput() {
    return this._minMemoryRequiredInMb;
  }

  // number_of_accelerator_devices_required - computed: true, optional: true, required: false
  private _numberOfAcceleratorDevicesRequired?: number; 
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }
  public set numberOfAcceleratorDevicesRequired(value: number) {
    this._numberOfAcceleratorDevicesRequired = value;
  }
  public resetNumberOfAcceleratorDevicesRequired() {
    this._numberOfAcceleratorDevicesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcceleratorDevicesRequiredInput() {
    return this._numberOfAcceleratorDevicesRequired;
  }

  // number_of_cpu_cores_required - computed: true, optional: true, required: false
  private _numberOfCpuCoresRequired?: number; 
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
  public set numberOfCpuCoresRequired(value: number) {
    this._numberOfCpuCoresRequired = value;
  }
  public resetNumberOfCpuCoresRequired() {
    this._numberOfCpuCoresRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresRequiredInput() {
    return this._numberOfCpuCoresRequired;
  }
}
export interface SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints {
  /**
  * The interval, in seconds, at which container metrics scraped from the endpoint are published to Amazon CloudWatch. Valid values per the SageMaker API Reference are 10, 30, 60, 120, 180, 240 and 300; the service validates the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}
  */
  readonly metricPublishFrequencyInSeconds?: number;
  /**
  * The path to the Prometheus formatted metrics endpoint exposed by the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}
  */
  readonly metricsEndpointPath?: string;
}

export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
    metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_publish_frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPublishFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
    }
    if (this._metricsEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = undefined;
      this._metricsEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
      this._metricsEndpointPath = value.metricsEndpointPath;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
  private _metricPublishFrequencyInSeconds?: number; 
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }
  public set metricPublishFrequencyInSeconds(value: number) {
    this._metricPublishFrequencyInSeconds = value;
  }
  public resetMetricPublishFrequencyInSeconds() {
    this._metricPublishFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPublishFrequencyInSecondsInput() {
    return this._metricPublishFrequencyInSeconds;
  }

  // metrics_endpoint_path - computed: true, optional: true, required: false
  private _metricsEndpointPath?: string; 
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
  public set metricsEndpointPath(value: string) {
    this._metricsEndpointPath = value;
  }
  public resetMetricsEndpointPath() {
    this._metricsEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointPathInput() {
    return this._metricsEndpointPath;
  }
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference {
    return new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#metrics_endpoints SagemakerInferenceComponent#metrics_endpoints}
  */
  readonly metricsEndpoints?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metrics_endpoints: cdktn.listMapper(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToTerraform, false)(struct!.metricsEndpoints),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metrics_endpoints: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToHclTerraform, false)(struct!.metricsEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpoints = this._metricsEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEndpoints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEndpoints.internalValue = value.metricsEndpoints;
    }
  }

  // metrics_endpoints - computed: true, optional: true, required: false
  private _metricsEndpoints = new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList(this, "metrics_endpoints", false);
  public get metricsEndpoints() {
    return this._metricsEndpoints;
  }
  public putMetricsEndpoints(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints[] | cdktn.IResolvable) {
    this._metricsEndpoints.internalValue = value;
  }
  public resetMetricsEndpoints() {
    this._metricsEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointsInput() {
    return this._metricsEndpoints.internalValue;
  }
}
export interface SagemakerInferenceComponentSpecificationsContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}
  */
  readonly artifactUrl?: string;
  /**
  * The configuration for container metrics scraping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}
  */
  readonly containerMetricsConfig?: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig;
  /**
  * Environment variables to specify on the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The image to use for the container that will be materialized for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}
  */
  readonly image?: string;
}

export function sagemakerInferenceComponentSpecificationsContainerToTerraform(struct?: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
    container_metrics_config: sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToTerraform(struct!.containerMetricsConfig),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function sagemakerInferenceComponentSpecificationsContainerToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_url: {
      value: cdktn.stringToHclTerraform(struct!.artifactUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_metrics_config: {
      value: sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToHclTerraform(struct!.containerMetricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUrl = this._artifactUrl;
    }
    if (this._containerMetricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactUrl = undefined;
      this._containerMetricsConfig.internalValue = undefined;
      this._environment = undefined;
      this._image = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactUrl = value.artifactUrl;
      this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
      this._environment = value.environment;
      this._image = value.image;
    }
  }

  // artifact_url - computed: true, optional: true, required: false
  private _artifactUrl?: string; 
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }
  public set artifactUrl(value: string) {
    this._artifactUrl = value;
  }
  public resetArtifactUrl() {
    this._artifactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUrlInput() {
    return this._artifactUrl;
  }

  // container_metrics_config - computed: true, optional: true, required: false
  private _containerMetricsConfig = new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(this, "container_metrics_config");
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }
  public putContainerMetricsConfig(value: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig) {
    this._containerMetricsConfig.internalValue = value;
  }
  public resetContainerMetricsConfig() {
    this._containerMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetricsConfigInput() {
    return this._containerMetricsConfig.internalValue;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig {
  /**
  * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}
  */
  readonly enableCaching?: boolean | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
  }
}


export function sagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_caching: {
      value: cdktn.booleanToHclTerraform(struct!.enableCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaching = this._enableCaching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCaching = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCaching = value.enableCaching;
    }
  }

  // enable_caching - computed: true, optional: true, required: false
  private _enableCaching?: boolean | cdktn.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktn.IResolvable) {
    this._enableCaching = value;
  }
  public resetEnableCaching() {
    this._enableCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }
}
export interface SagemakerInferenceComponentSpecificationsDataCacheConfig {
  /**
  * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}
  */
  readonly enableCaching?: boolean | cdktn.IResolvable;
}

export function sagemakerInferenceComponentSpecificationsDataCacheConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
  }
}


export function sagemakerInferenceComponentSpecificationsDataCacheConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_caching: {
      value: cdktn.booleanToHclTerraform(struct!.enableCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaching = this._enableCaching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsDataCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCaching = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCaching = value.enableCaching;
    }
  }

  // enable_caching - computed: true, optional: true, required: false
  private _enableCaching?: boolean | cdktn.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktn.IResolvable) {
    this._enableCaching = value;
  }
  public resetEnableCaching() {
    this._enableCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }
}
export interface SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * The maximum allowed difference in the number of inference component copies between any two Availability Zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}
  */
  readonly maxImbalance?: number;
}

export function sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
    max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
  }
}


export function sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktn.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_imbalance: {
      value: cdktn.numberToHclTerraform(struct!.maxImbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._maxImbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxImbalance = this._maxImbalance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._maxImbalance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._maxImbalance = value.maxImbalance;
    }
  }

  // enforcement_mode - computed: true, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // max_imbalance - computed: true, optional: true, required: false
  private _maxImbalance?: number; 
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
  public set maxImbalance(value: number) {
    this._maxImbalance = value;
  }
  public resetMaxImbalance() {
    this._maxImbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImbalanceInput() {
    return this._maxImbalance;
  }
}
export interface SagemakerInferenceComponentSpecificationsSchedulingConfig {
  /**
  * Configuration for balancing inference component copies across Availability Zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}
  */
  readonly availabilityZoneBalance?: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}
  */
  readonly placementStrategy?: string;
}

export function sagemakerInferenceComponentSpecificationsSchedulingConfigToTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_balance: sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToTerraform(struct!.availabilityZoneBalance),
    placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
  }
}


export function sagemakerInferenceComponentSpecificationsSchedulingConfigToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_balance: {
      value: sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct!.availabilityZoneBalance),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance",
    },
    placement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.placementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
    }
    if (this._placementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsSchedulingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneBalance.internalValue = undefined;
      this._placementStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
      this._placementStrategy = value.placementStrategy;
    }
  }

  // availability_zone_balance - computed: true, optional: true, required: false
  private _availabilityZoneBalance = new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(this, "availability_zone_balance");
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }
  public putAvailabilityZoneBalance(value: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance) {
    this._availabilityZoneBalance.internalValue = value;
  }
  public resetAvailabilityZoneBalance() {
    this._availabilityZoneBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneBalanceInput() {
    return this._availabilityZoneBalance.internalValue;
  }

  // placement_strategy - computed: true, optional: true, required: false
  private _placementStrategy?: string; 
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
  public set placementStrategy(value: string) {
    this._placementStrategy = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy;
  }
}
export interface SagemakerInferenceComponentSpecificationsStartupParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
}

export function sagemakerInferenceComponentSpecificationsStartupParametersToTerraform(struct?: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
  }
}


export function sagemakerInferenceComponentSpecificationsStartupParametersToHclTerraform(struct?: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationsStartupParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }
}
export interface SagemakerInferenceComponentSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}
  */
  readonly computeResourceRequirements?: SagemakerInferenceComponentSpecificationsComputeResourceRequirements;
  /**
  * Container specification for one Specifications entry. Distinct from InferenceComponentContainerSpecification: DescribeInferenceComponent returns no per-entry DeployedImage (VERIFIED in us-west-2), so DeployedImage is intentionally omitted here and this definition can never be aggregated into a plural READ response. The singular InferenceComponentContainerSpecification keeps DeployedImage - the service DOES return it there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}
  */
  readonly container?: SagemakerInferenceComponentSpecificationsContainer;
  /**
  * The data caching configuration actually in effect for this instance type, including a value the service chose rather than the template: SageMaker enables caching automatically on instance types with more than 232 GiB of local NVMe storage, whether or not DataCacheConfig was set. Returned by Describe and not settable; set DataCacheConfig instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#current_data_cache_config SagemakerInferenceComponent#current_data_cache_config}
  */
  readonly currentDataCacheConfig?: SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig;
  /**
  * Settings that affect how the inference component caches data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}
  */
  readonly dataCacheConfig?: SagemakerInferenceComponentSpecificationsDataCacheConfig;
  /**
  * An ML compute instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The name of the model to use with the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}
  */
  readonly modelName?: string;
  /**
  * The scheduling configuration that determines how inference component copies are placed across available instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}
  */
  readonly schedulingConfig?: SagemakerInferenceComponentSpecificationsSchedulingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}
  */
  readonly startupParameters?: SagemakerInferenceComponentSpecificationsStartupParameters;
}

export function sagemakerInferenceComponentSpecificationsToTerraform(struct?: SagemakerInferenceComponentSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_resource_requirements: sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToTerraform(struct!.computeResourceRequirements),
    container: sagemakerInferenceComponentSpecificationsContainerToTerraform(struct!.container),
    current_data_cache_config: sagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToTerraform(struct!.currentDataCacheConfig),
    data_cache_config: sagemakerInferenceComponentSpecificationsDataCacheConfigToTerraform(struct!.dataCacheConfig),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    scheduling_config: sagemakerInferenceComponentSpecificationsSchedulingConfigToTerraform(struct!.schedulingConfig),
    startup_parameters: sagemakerInferenceComponentSpecificationsStartupParametersToTerraform(struct!.startupParameters),
  }
}


export function sagemakerInferenceComponentSpecificationsToHclTerraform(struct?: SagemakerInferenceComponentSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_resource_requirements: {
      value: sagemakerInferenceComponentSpecificationsComputeResourceRequirementsToHclTerraform(struct!.computeResourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsComputeResourceRequirements",
    },
    container: {
      value: sagemakerInferenceComponentSpecificationsContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsContainer",
    },
    current_data_cache_config: {
      value: sagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToHclTerraform(struct!.currentDataCacheConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig",
    },
    data_cache_config: {
      value: sagemakerInferenceComponentSpecificationsDataCacheConfigToHclTerraform(struct!.dataCacheConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsDataCacheConfig",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_config: {
      value: sagemakerInferenceComponentSpecificationsSchedulingConfigToHclTerraform(struct!.schedulingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsSchedulingConfig",
    },
    startup_parameters: {
      value: sagemakerInferenceComponentSpecificationsStartupParametersToHclTerraform(struct!.startupParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationsStartupParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._currentDataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentDataCacheConfig = this._currentDataCacheConfig?.internalValue;
    }
    if (this._dataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._schedulingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
    }
    if (this._startupParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupParameters = this._startupParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeResourceRequirements.internalValue = undefined;
      this._container.internalValue = undefined;
      this._currentDataCacheConfig.internalValue = undefined;
      this._dataCacheConfig.internalValue = undefined;
      this._instanceType = undefined;
      this._modelName = undefined;
      this._schedulingConfig.internalValue = undefined;
      this._startupParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
      this._container.internalValue = value.container;
      this._currentDataCacheConfig.internalValue = value.currentDataCacheConfig;
      this._dataCacheConfig.internalValue = value.dataCacheConfig;
      this._instanceType = value.instanceType;
      this._modelName = value.modelName;
      this._schedulingConfig.internalValue = value.schedulingConfig;
      this._startupParameters.internalValue = value.startupParameters;
    }
  }

  // compute_resource_requirements - computed: true, optional: true, required: false
  private _computeResourceRequirements = new SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(this, "compute_resource_requirements");
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }
  public putComputeResourceRequirements(value: SagemakerInferenceComponentSpecificationsComputeResourceRequirements) {
    this._computeResourceRequirements.internalValue = value;
  }
  public resetComputeResourceRequirements() {
    this._computeResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceRequirementsInput() {
    return this._computeResourceRequirements.internalValue;
  }

  // container - computed: true, optional: true, required: false
  private _container = new SagemakerInferenceComponentSpecificationsContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerInferenceComponentSpecificationsContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // current_data_cache_config - computed: true, optional: true, required: false
  private _currentDataCacheConfig = new SagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference(this, "current_data_cache_config");
  public get currentDataCacheConfig() {
    return this._currentDataCacheConfig;
  }
  public putCurrentDataCacheConfig(value: SagemakerInferenceComponentSpecificationsCurrentDataCacheConfig) {
    this._currentDataCacheConfig.internalValue = value;
  }
  public resetCurrentDataCacheConfig() {
    this._currentDataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentDataCacheConfigInput() {
    return this._currentDataCacheConfig.internalValue;
  }

  // data_cache_config - computed: true, optional: true, required: false
  private _dataCacheConfig = new SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(this, "data_cache_config");
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }
  public putDataCacheConfig(value: SagemakerInferenceComponentSpecificationsDataCacheConfig) {
    this._dataCacheConfig.internalValue = value;
  }
  public resetDataCacheConfig() {
    this._dataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheConfigInput() {
    return this._dataCacheConfig.internalValue;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_name - computed: true, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // scheduling_config - computed: true, optional: true, required: false
  private _schedulingConfig = new SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: SagemakerInferenceComponentSpecificationsSchedulingConfig) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // startup_parameters - computed: true, optional: true, required: false
  private _startupParameters = new SagemakerInferenceComponentSpecificationsStartupParametersOutputReference(this, "startup_parameters");
  public get startupParameters() {
    return this._startupParameters;
  }
  public putStartupParameters(value: SagemakerInferenceComponentSpecificationsStartupParameters) {
    this._startupParameters.internalValue = value;
  }
  public resetStartupParameters() {
    this._startupParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters.internalValue;
  }
}

export class SagemakerInferenceComponentSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentSpecificationsOutputReference {
    return new SagemakerInferenceComponentSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#key SagemakerInferenceComponent#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: string;
}

export function sagemakerInferenceComponentTagsToTerraform(struct?: SagemakerInferenceComponentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentTagsToHclTerraform(struct?: SagemakerInferenceComponentTags | cdktn.IResolvable): any {
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

export class SagemakerInferenceComponentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentTags | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceComponentTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentTagsOutputReference {
    return new SagemakerInferenceComponentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component}
*/
export class SagemakerInferenceComponent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerInferenceComponent to import
  * @param importFromId The id of the existing SagemakerInferenceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerInferenceComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerInferenceComponentConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerInferenceComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_inference_component',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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
    this._deploymentConfig.internalValue = config.deploymentConfig;
    this._endpointArn = config.endpointArn;
    this._endpointName = config.endpointName;
    this._inferenceComponentName = config.inferenceComponentName;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._specification.internalValue = config.specification;
    this._specifications.internalValue = config.specifications;
    this._tags.internalValue = config.tags;
    this._variantName = config.variantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_config - computed: true, optional: true, required: false
  private _deploymentConfig = new SagemakerInferenceComponentDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: SagemakerInferenceComponentDeploymentConfig) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // endpoint_arn - computed: true, optional: true, required: false
  private _endpointArn?: string; 
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }
  public set endpointArn(value: string) {
    this._endpointArn = value;
  }
  public resetEndpointArn() {
    this._endpointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointArnInput() {
    return this._endpointArn;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_component_arn - computed: true, optional: false, required: false
  public get inferenceComponentArn() {
    return this.getStringAttribute('inference_component_arn');
  }

  // inference_component_name - computed: true, optional: true, required: false
  private _inferenceComponentName?: string; 
  public get inferenceComponentName() {
    return this.getStringAttribute('inference_component_name');
  }
  public set inferenceComponentName(value: string) {
    this._inferenceComponentName = value;
  }
  public resetInferenceComponentName() {
    this._inferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceComponentNameInput() {
    return this._inferenceComponentName;
  }

  // inference_component_status - computed: true, optional: false, required: false
  public get inferenceComponentStatus() {
    return this.getStringAttribute('inference_component_status');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // runtime_config - computed: true, optional: true, required: false
  private _runtimeConfig = new SagemakerInferenceComponentRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: SagemakerInferenceComponentRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // specification - computed: true, optional: true, required: false
  private _specification = new SagemakerInferenceComponentSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: SagemakerInferenceComponentSpecification) {
    this._specification.internalValue = value;
  }
  public resetSpecification() {
    this._specification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // specifications - computed: true, optional: true, required: false
  private _specifications = new SagemakerInferenceComponentSpecificationsList(this, "specifications", false);
  public get specifications() {
    return this._specifications;
  }
  public putSpecifications(value: SagemakerInferenceComponentSpecifications[] | cdktn.IResolvable) {
    this._specifications.internalValue = value;
  }
  public resetSpecifications() {
    this._specifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationsInput() {
    return this._specifications.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerInferenceComponentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerInferenceComponentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_config: sagemakerInferenceComponentDeploymentConfigToTerraform(this._deploymentConfig.internalValue),
      endpoint_arn: cdktn.stringToTerraform(this._endpointArn),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      inference_component_name: cdktn.stringToTerraform(this._inferenceComponentName),
      runtime_config: sagemakerInferenceComponentRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      specification: sagemakerInferenceComponentSpecificationToTerraform(this._specification.internalValue),
      specifications: cdktn.listMapper(sagemakerInferenceComponentSpecificationsToTerraform, false)(this._specifications.internalValue),
      tags: cdktn.listMapper(sagemakerInferenceComponentTagsToTerraform, false)(this._tags.internalValue),
      variant_name: cdktn.stringToTerraform(this._variantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_config: {
        value: sagemakerInferenceComponentDeploymentConfigToHclTerraform(this._deploymentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentDeploymentConfig",
      },
      endpoint_arn: {
        value: cdktn.stringToHclTerraform(this._endpointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_component_name: {
        value: cdktn.stringToHclTerraform(this._inferenceComponentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_config: {
        value: sagemakerInferenceComponentRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentRuntimeConfig",
      },
      specification: {
        value: sagemakerInferenceComponentSpecificationToHclTerraform(this._specification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentSpecification",
      },
      specifications: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentSpecificationsToHclTerraform, false)(this._specifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentSpecificationsList",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentTagsList",
      },
      variant_name: {
        value: cdktn.stringToHclTerraform(this._variantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
