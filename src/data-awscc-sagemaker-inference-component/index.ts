/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerInferenceComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component#id DataAwsccSagemakerInferenceComponent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_batch_size - computed: true, optional: false, required: false
  private _maximumBatchSize = new DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }

  // maximum_execution_timeout_in_seconds - computed: true, optional: false, required: false
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }

  // rollback_maximum_batch_size - computed: true, optional: false, required: false
  private _rollbackMaximumBatchSize = new DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }

  // wait_interval_in_seconds - computed: true, optional: false, required: false
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
}
export interface DataAwsccSagemakerInferenceComponentDeploymentConfig {
}

export function dataAwsccSagemakerInferenceComponentDeploymentConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentDeploymentConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentDeploymentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_rollback_configuration - computed: true, optional: false, required: false
  private _autoRollbackConfiguration = new DataAwsccSagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }

  // rolling_update_policy - computed: true, optional: false, required: false
  private _rollingUpdatePolicy = new DataAwsccSagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
}
export interface DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus {
}

export function dataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusToTerraform(struct?: DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatus | undefined) {
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

export class DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference {
    return new DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceComponentRuntimeConfig {
}

export function dataAwsccSagemakerInferenceComponentRuntimeConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentRuntimeConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_count - computed: true, optional: false, required: false
  public get copyCount() {
    return this.getNumberAttribute('copy_count');
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
  private _placementStatus = new DataAwsccSagemakerInferenceComponentRuntimeConfigPlacementStatusList(this, "placement_status", false);
  public get placementStatus() {
    return this._placementStatus;
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements {
}

export function dataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: false, required: false
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }

  // min_memory_required_in_mb - computed: true, optional: false, required: false
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }

  // number_of_accelerator_devices_required - computed: true, optional: false, required: false
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }

  // number_of_cpu_cores_required - computed: true, optional: false, required: false
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints {
}

export function dataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: false, required: false
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }

  // metrics_endpoint_path - computed: true, optional: false, required: false
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
}

export class DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference {
    return new DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_endpoints - computed: true, optional: false, required: false
  private _metricsEndpoints = new DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsList(this, "metrics_endpoints", false);
  public get metricsEndpoints() {
    return this._metricsEndpoints;
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage {
}

export function dataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImage | undefined) {
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
export interface DataAwsccSagemakerInferenceComponentSpecificationContainer {
}

export function dataAwsccSagemakerInferenceComponentSpecificationContainerToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationContainerToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_url - computed: true, optional: false, required: false
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }

  // container_metrics_config - computed: true, optional: false, required: false
  private _containerMetricsConfig = new DataAwsccSagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(this, "container_metrics_config");
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }

  // deployed_image - computed: true, optional: false, required: false
  private _deployedImage = new DataAwsccSagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference(this, "deployed_image");
  public get deployedImage() {
    return this._deployedImage;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfig | undefined) {
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
export interface DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfig | undefined) {
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
export interface DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance {
}

export function dataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement_mode - computed: true, optional: false, required: false
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }

  // max_imbalance - computed: true, optional: false, required: false
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_balance - computed: true, optional: false, required: false
  private _availabilityZoneBalance = new DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(this, "availability_zone_balance");
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }

  // placement_strategy - computed: true, optional: false, required: false
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationStartupParameters {
}

export function dataAwsccSagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationStartupParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationStartupParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationStartupParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationStartupParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: false, required: false
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: false, required: false
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecification {
}

export function dataAwsccSagemakerInferenceComponentSpecificationToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_inference_component_name - computed: true, optional: false, required: false
  public get baseInferenceComponentName() {
    return this.getStringAttribute('base_inference_component_name');
  }

  // compute_resource_requirements - computed: true, optional: false, required: false
  private _computeResourceRequirements = new DataAwsccSagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(this, "compute_resource_requirements");
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAwsccSagemakerInferenceComponentSpecificationContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // current_data_cache_config - computed: true, optional: false, required: false
  private _currentDataCacheConfig = new DataAwsccSagemakerInferenceComponentSpecificationCurrentDataCacheConfigOutputReference(this, "current_data_cache_config");
  public get currentDataCacheConfig() {
    return this._currentDataCacheConfig;
  }

  // data_cache_config - computed: true, optional: false, required: false
  private _dataCacheConfig = new DataAwsccSagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(this, "data_cache_config");
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // scheduling_config - computed: true, optional: false, required: false
  private _schedulingConfig = new DataAwsccSagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }

  // startup_parameters - computed: true, optional: false, required: false
  private _startupParameters = new DataAwsccSagemakerInferenceComponentSpecificationStartupParametersOutputReference(this, "startup_parameters");
  public get startupParameters() {
    return this._startupParameters;
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: false, required: false
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }

  // min_memory_required_in_mb - computed: true, optional: false, required: false
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }

  // number_of_accelerator_devices_required - computed: true, optional: false, required: false
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }

  // number_of_cpu_cores_required - computed: true, optional: false, required: false
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_publish_frequency_in_seconds - computed: true, optional: false, required: false
  public get metricPublishFrequencyInSeconds() {
    return this.getNumberAttribute('metric_publish_frequency_in_seconds');
  }

  // metrics_endpoint_path - computed: true, optional: false, required: false
  public get metricsEndpointPath() {
    return this.getStringAttribute('metrics_endpoint_path');
  }
}

export class DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference {
    return new DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_endpoints - computed: true, optional: false, required: false
  private _metricsEndpoints = new DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsList(this, "metrics_endpoints", false);
  public get metricsEndpoints() {
    return this._metricsEndpoints;
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsContainer {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsContainerToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsContainerToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_url - computed: true, optional: false, required: false
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }

  // container_metrics_config - computed: true, optional: false, required: false
  private _containerMetricsConfig = new DataAwsccSagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(this, "container_metrics_config");
  public get containerMetricsConfig() {
    return this._containerMetricsConfig;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfig | undefined) {
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
export interface DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfig | undefined) {
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
export interface DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement_mode - computed: true, optional: false, required: false
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }

  // max_imbalance - computed: true, optional: false, required: false
  public get maxImbalance() {
    return this.getNumberAttribute('max_imbalance');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_balance - computed: true, optional: false, required: false
  private _availabilityZoneBalance = new DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(this, "availability_zone_balance");
  public get availabilityZoneBalance() {
    return this._availabilityZoneBalance;
  }

  // placement_strategy - computed: true, optional: false, required: false
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsStartupParametersToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsStartupParametersToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecificationsStartupParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: false, required: false
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: false, required: false
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
}
export interface DataAwsccSagemakerInferenceComponentSpecifications {
}

export function dataAwsccSagemakerInferenceComponentSpecificationsToTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentSpecificationsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_resource_requirements - computed: true, optional: false, required: false
  private _computeResourceRequirements = new DataAwsccSagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(this, "compute_resource_requirements");
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAwsccSagemakerInferenceComponentSpecificationsContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // current_data_cache_config - computed: true, optional: false, required: false
  private _currentDataCacheConfig = new DataAwsccSagemakerInferenceComponentSpecificationsCurrentDataCacheConfigOutputReference(this, "current_data_cache_config");
  public get currentDataCacheConfig() {
    return this._currentDataCacheConfig;
  }

  // data_cache_config - computed: true, optional: false, required: false
  private _dataCacheConfig = new DataAwsccSagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(this, "data_cache_config");
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // scheduling_config - computed: true, optional: false, required: false
  private _schedulingConfig = new DataAwsccSagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }

  // startup_parameters - computed: true, optional: false, required: false
  private _startupParameters = new DataAwsccSagemakerInferenceComponentSpecificationsStartupParametersOutputReference(this, "startup_parameters");
  public get startupParameters() {
    return this._startupParameters;
  }
}

export class DataAwsccSagemakerInferenceComponentSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentSpecificationsOutputReference {
    return new DataAwsccSagemakerInferenceComponentSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceComponentTags {
}

export function dataAwsccSagemakerInferenceComponentTagsToTerraform(struct?: DataAwsccSagemakerInferenceComponentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceComponentTagsToHclTerraform(struct?: DataAwsccSagemakerInferenceComponentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceComponentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceComponentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceComponentTags | undefined) {
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

export class DataAwsccSagemakerInferenceComponentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceComponentTagsOutputReference {
    return new DataAwsccSagemakerInferenceComponentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component awscc_sagemaker_inference_component}
*/
export class DataAwsccSagemakerInferenceComponent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerInferenceComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerInferenceComponent to import
  * @param importFromId The id of the existing DataAwsccSagemakerInferenceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerInferenceComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_inference_component awscc_sagemaker_inference_component} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerInferenceComponentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerInferenceComponentConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_config - computed: true, optional: false, required: false
  private _deploymentConfig = new DataAwsccSagemakerInferenceComponentDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }

  // endpoint_arn - computed: true, optional: false, required: false
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // inference_component_arn - computed: true, optional: false, required: false
  public get inferenceComponentArn() {
    return this.getStringAttribute('inference_component_arn');
  }

  // inference_component_name - computed: true, optional: false, required: false
  public get inferenceComponentName() {
    return this.getStringAttribute('inference_component_name');
  }

  // inference_component_status - computed: true, optional: false, required: false
  public get inferenceComponentStatus() {
    return this.getStringAttribute('inference_component_status');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // runtime_config - computed: true, optional: false, required: false
  private _runtimeConfig = new DataAwsccSagemakerInferenceComponentRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }

  // specification - computed: true, optional: false, required: false
  private _specification = new DataAwsccSagemakerInferenceComponentSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }

  // specifications - computed: true, optional: false, required: false
  private _specifications = new DataAwsccSagemakerInferenceComponentSpecificationsList(this, "specifications", false);
  public get specifications() {
    return this._specifications;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerInferenceComponentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
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
