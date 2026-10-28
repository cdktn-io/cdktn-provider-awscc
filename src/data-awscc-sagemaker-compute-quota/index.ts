/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerComputeQuotaConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota#id DataAwsccSagemakerComputeQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_partition - computed: true, optional: false, required: false
  private _acceleratorPartition = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference(this, "accelerator_partition");
  public get acceleratorPartition() {
    return this._acceleratorPartition;
  }

  // accelerators - computed: true, optional: false, required: false
  public get accelerators() {
    return this.getNumberAttribute('accelerators');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // memory_in_gi_b - computed: true, optional: false, required: false
  public get memoryInGiB() {
    return this.getNumberAttribute('memory_in_gi_b');
  }

  // v_cpu - computed: true, optional: false, required: false
  public get vCpu() {
    return this.getNumberAttribute('v_cpu');
  }
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference {
    return new DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_partition - computed: true, optional: false, required: false
  private _acceleratorPartition = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference(this, "accelerator_partition");
  public get acceleratorPartition() {
    return this._acceleratorPartition;
  }

  // accelerators - computed: true, optional: false, required: false
  public get accelerators() {
    return this.getNumberAttribute('accelerators');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // memory_in_gi_b - computed: true, optional: false, required: false
  public get memoryInGiB() {
    return this.getNumberAttribute('memory_in_gi_b');
  }

  // v_cpu - computed: true, optional: false, required: false
  public get vCpu() {
    return this.getNumberAttribute('v_cpu');
  }
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference {
    return new DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_borrow_limits - computed: true, optional: false, required: false
  private _absoluteBorrowLimits = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList(this, "absolute_borrow_limits", false);
  public get absoluteBorrowLimits() {
    return this._absoluteBorrowLimits;
  }

  // borrow_limit - computed: true, optional: false, required: false
  public get borrowLimit() {
    return this.getNumberAttribute('borrow_limit');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaConfig {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaConfigToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_quota_resources - computed: true, optional: false, required: false
  private _computeQuotaResources = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList(this, "compute_quota_resources", false);
  public get computeQuotaResources() {
    return this._computeQuotaResources;
  }

  // preempt_team_tasks - computed: true, optional: false, required: false
  public get preemptTeamTasks() {
    return this.getStringAttribute('preempt_team_tasks');
  }

  // resource_sharing_config - computed: true, optional: false, required: false
  private _resourceSharingConfig = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference(this, "resource_sharing_config");
  public get resourceSharingConfig() {
    return this._resourceSharingConfig;
  }
}
export interface DataAwsccSagemakerComputeQuotaComputeQuotaTarget {
}

export function dataAwsccSagemakerComputeQuotaComputeQuotaTargetToTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaComputeQuotaTargetToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaComputeQuotaTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerComputeQuotaComputeQuotaTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaComputeQuotaTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fair_share_weight - computed: true, optional: false, required: false
  public get fairShareWeight() {
    return this.getNumberAttribute('fair_share_weight');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
}
export interface DataAwsccSagemakerComputeQuotaTags {
}

export function dataAwsccSagemakerComputeQuotaTagsToTerraform(struct?: DataAwsccSagemakerComputeQuotaTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerComputeQuotaTagsToHclTerraform(struct?: DataAwsccSagemakerComputeQuotaTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerComputeQuotaTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerComputeQuotaTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerComputeQuotaTags | undefined) {
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

export class DataAwsccSagemakerComputeQuotaTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerComputeQuotaTagsOutputReference {
    return new DataAwsccSagemakerComputeQuotaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota awscc_sagemaker_compute_quota}
*/
export class DataAwsccSagemakerComputeQuota extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_compute_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerComputeQuota resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerComputeQuota to import
  * @param importFromId The id of the existing DataAwsccSagemakerComputeQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerComputeQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_compute_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota awscc_sagemaker_compute_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerComputeQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerComputeQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_compute_quota',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.107.0',
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

  // activation_state - computed: true, optional: false, required: false
  public get activationState() {
    return this.getStringAttribute('activation_state');
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // compute_quota_arn - computed: true, optional: false, required: false
  public get computeQuotaArn() {
    return this.getStringAttribute('compute_quota_arn');
  }

  // compute_quota_config - computed: true, optional: false, required: false
  private _computeQuotaConfig = new DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference(this, "compute_quota_config");
  public get computeQuotaConfig() {
    return this._computeQuotaConfig;
  }

  // compute_quota_id - computed: true, optional: false, required: false
  public get computeQuotaId() {
    return this.getStringAttribute('compute_quota_id');
  }

  // compute_quota_target - computed: true, optional: false, required: false
  private _computeQuotaTarget = new DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference(this, "compute_quota_target");
  public get computeQuotaTarget() {
    return this._computeQuotaTarget;
  }

  // compute_quota_version - computed: true, optional: false, required: false
  public get computeQuotaVersion() {
    return this.getNumberAttribute('compute_quota_version');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerComputeQuotaTagsList(this, "tags", false);
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
