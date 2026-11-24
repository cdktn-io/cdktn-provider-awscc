/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference,
DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference,
DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference,
DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference } from './structs0';
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource_properties - computed: true, optional: false, required: false
  private _consumableResourceProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // ecs_properties - computed: true, optional: false, required: false
  private _ecsProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }

  // eks_properties - computed: true, optional: false, required: false
  private _eksProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // target_nodes - computed: true, optional: false, required: false
  public get targetNodes() {
    return this.getStringAttribute('target_nodes');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodeProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // main_node - computed: true, optional: false, required: false
  public get mainNode() {
    return this.getNumberAttribute('main_node');
  }

  // node_range_properties - computed: true, optional: false, required: false
  private _nodeRangeProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesList(this, "node_range_properties", false);
  public get nodeRangeProperties() {
    return this._nodeRangeProperties;
  }

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
}
export interface DataAwsccBatchJobDefinitionResourceRetentionPolicy {
}

export function dataAwsccBatchJobDefinitionResourceRetentionPolicyToTerraform(struct?: DataAwsccBatchJobDefinitionResourceRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionResourceRetentionPolicyToHclTerraform(struct?: DataAwsccBatchJobDefinitionResourceRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionResourceRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionResourceRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionResourceRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // skip_deregister_on_update - computed: true, optional: false, required: false
  public get skipDeregisterOnUpdate() {
    return this.getBooleanAttribute('skip_deregister_on_update');
  }
}
export interface DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit {
}

export function dataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // on_exit_code - computed: true, optional: false, required: false
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }

  // on_reason - computed: true, optional: false, required: false
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }

  // on_status_reason - computed: true, optional: false, required: false
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
}

export class DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionRetryStrategy {
}

export function dataAwsccBatchJobDefinitionRetryStrategyToTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionRetryStrategyToHclTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }

  // evaluate_on_exit - computed: true, optional: false, required: false
  private _evaluateOnExit = new DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
}
export interface DataAwsccBatchJobDefinitionTimeout {
}

export function dataAwsccBatchJobDefinitionTimeoutToTerraform(struct?: DataAwsccBatchJobDefinitionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionTimeoutToHclTerraform(struct?: DataAwsccBatchJobDefinitionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempt_duration_seconds - computed: true, optional: false, required: false
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
}
