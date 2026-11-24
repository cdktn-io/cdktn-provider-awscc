/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties,
batchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToTerraform,
batchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToHclTerraform,
BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference,
BatchJobDefinitionNodePropertiesNodeRangePropertiesContainer,
batchJobDefinitionNodePropertiesNodeRangePropertiesContainerToTerraform,
batchJobDefinitionNodePropertiesNodeRangePropertiesContainerToHclTerraform,
BatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference,
BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties,
batchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToTerraform,
batchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToHclTerraform,
BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference,
BatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties,
batchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToTerraform,
batchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToHclTerraform,
BatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference } from './structs0';
export interface BatchJobDefinitionNodePropertiesNodeRangeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#consumable_resource_properties BatchJobDefinition#consumable_resource_properties}
  */
  readonly consumableResourceProperties?: BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#container BatchJobDefinition#container}
  */
  readonly container?: BatchJobDefinitionNodePropertiesNodeRangePropertiesContainer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#ecs_properties BatchJobDefinition#ecs_properties}
  */
  readonly ecsProperties?: BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}
  */
  readonly eksProperties?: BatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#instance_types BatchJobDefinition#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#target_nodes BatchJobDefinition#target_nodes}
  */
  readonly targetNodes?: string;
}

export function batchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform(struct?: BatchJobDefinitionNodePropertiesNodeRangeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consumable_resource_properties: batchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToTerraform(struct!.consumableResourceProperties),
    container: batchJobDefinitionNodePropertiesNodeRangePropertiesContainerToTerraform(struct!.container),
    ecs_properties: batchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToTerraform(struct!.ecsProperties),
    eks_properties: batchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToTerraform(struct!.eksProperties),
    instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceTypes),
    target_nodes: cdktn.stringToTerraform(struct!.targetNodes),
  }
}


export function batchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform(struct?: BatchJobDefinitionNodePropertiesNodeRangeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consumable_resource_properties: {
      value: batchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToHclTerraform(struct!.consumableResourceProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties",
    },
    container: {
      value: batchJobDefinitionNodePropertiesNodeRangePropertiesContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchJobDefinitionNodePropertiesNodeRangePropertiesContainer",
    },
    ecs_properties: {
      value: batchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToHclTerraform(struct!.ecsProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties",
    },
    eks_properties: {
      value: batchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToHclTerraform(struct!.eksProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties",
    },
    instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_nodes: {
      value: cdktn.stringToHclTerraform(struct!.targetNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BatchJobDefinitionNodePropertiesNodeRangeProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumableResourceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumableResourceProperties = this._consumableResourceProperties?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._ecsProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsProperties = this._ecsProperties?.internalValue;
    }
    if (this._eksProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksProperties = this._eksProperties?.internalValue;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._targetNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNodes = this._targetNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionNodePropertiesNodeRangeProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumableResourceProperties.internalValue = undefined;
      this._container.internalValue = undefined;
      this._ecsProperties.internalValue = undefined;
      this._eksProperties.internalValue = undefined;
      this._instanceTypes = undefined;
      this._targetNodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumableResourceProperties.internalValue = value.consumableResourceProperties;
      this._container.internalValue = value.container;
      this._ecsProperties.internalValue = value.ecsProperties;
      this._eksProperties.internalValue = value.eksProperties;
      this._instanceTypes = value.instanceTypes;
      this._targetNodes = value.targetNodes;
    }
  }

  // consumable_resource_properties - computed: true, optional: true, required: false
  private _consumableResourceProperties = new BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }
  public putConsumableResourceProperties(value: BatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties) {
    this._consumableResourceProperties.internalValue = value;
  }
  public resetConsumableResourceProperties() {
    this._consumableResourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumableResourcePropertiesInput() {
    return this._consumableResourceProperties.internalValue;
  }

  // container - computed: true, optional: true, required: false
  private _container = new BatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: BatchJobDefinitionNodePropertiesNodeRangePropertiesContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // ecs_properties - computed: true, optional: true, required: false
  private _ecsProperties = new BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }
  public putEcsProperties(value: BatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties) {
    this._ecsProperties.internalValue = value;
  }
  public resetEcsProperties() {
    this._ecsProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPropertiesInput() {
    return this._ecsProperties.internalValue;
  }

  // eks_properties - computed: true, optional: true, required: false
  private _eksProperties = new BatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
  }
  public putEksProperties(value: BatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties) {
    this._eksProperties.internalValue = value;
  }
  public resetEksProperties() {
    this._eksProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksPropertiesInput() {
    return this._eksProperties.internalValue;
  }

  // instance_types - computed: true, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // target_nodes - computed: true, optional: true, required: false
  private _targetNodes?: string; 
  public get targetNodes() {
    return this.getStringAttribute('target_nodes');
  }
  public set targetNodes(value: string) {
    this._targetNodes = value;
  }
  public resetTargetNodes() {
    this._targetNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodesInput() {
    return this._targetNodes;
  }
}

export class BatchJobDefinitionNodePropertiesNodeRangePropertiesList extends cdktn.ComplexList {
  public internalValue? : BatchJobDefinitionNodePropertiesNodeRangeProperties[] | cdktn.IResolvable

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
  public get(index: number): BatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference {
    return new BatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchJobDefinitionNodeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#main_node BatchJobDefinition#main_node}
  */
  readonly mainNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#node_range_properties BatchJobDefinition#node_range_properties}
  */
  readonly nodeRangeProperties?: BatchJobDefinitionNodePropertiesNodeRangeProperties[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#num_nodes BatchJobDefinition#num_nodes}
  */
  readonly numNodes?: number;
}

export function batchJobDefinitionNodePropertiesToTerraform(struct?: BatchJobDefinitionNodeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    main_node: cdktn.numberToTerraform(struct!.mainNode),
    node_range_properties: cdktn.listMapper(batchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform, false)(struct!.nodeRangeProperties),
    num_nodes: cdktn.numberToTerraform(struct!.numNodes),
  }
}


export function batchJobDefinitionNodePropertiesToHclTerraform(struct?: BatchJobDefinitionNodeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    main_node: {
      value: cdktn.numberToHclTerraform(struct!.mainNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_range_properties: {
      value: cdktn.listMapperHcl(batchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform, false)(struct!.nodeRangeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "BatchJobDefinitionNodePropertiesNodeRangePropertiesList",
    },
    num_nodes: {
      value: cdktn.numberToHclTerraform(struct!.numNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionNodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchJobDefinitionNodeProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainNode = this._mainNode;
    }
    if (this._nodeRangeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRangeProperties = this._nodeRangeProperties?.internalValue;
    }
    if (this._numNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNodes = this._numNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionNodeProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainNode = undefined;
      this._nodeRangeProperties.internalValue = undefined;
      this._numNodes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainNode = value.mainNode;
      this._nodeRangeProperties.internalValue = value.nodeRangeProperties;
      this._numNodes = value.numNodes;
    }
  }

  // main_node - computed: true, optional: true, required: false
  private _mainNode?: number; 
  public get mainNode() {
    return this.getNumberAttribute('main_node');
  }
  public set mainNode(value: number) {
    this._mainNode = value;
  }
  public resetMainNode() {
    this._mainNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainNodeInput() {
    return this._mainNode;
  }

  // node_range_properties - computed: true, optional: true, required: false
  private _nodeRangeProperties = new BatchJobDefinitionNodePropertiesNodeRangePropertiesList(this, "node_range_properties", false);
  public get nodeRangeProperties() {
    return this._nodeRangeProperties;
  }
  public putNodeRangeProperties(value: BatchJobDefinitionNodePropertiesNodeRangeProperties[] | cdktn.IResolvable) {
    this._nodeRangeProperties.internalValue = value;
  }
  public resetNodeRangeProperties() {
    this._nodeRangeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRangePropertiesInput() {
    return this._nodeRangeProperties.internalValue;
  }

  // num_nodes - computed: true, optional: true, required: false
  private _numNodes?: number; 
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
  public resetNumNodes() {
    this._numNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodesInput() {
    return this._numNodes;
  }
}
export interface BatchJobDefinitionResourceRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#skip_deregister_on_update BatchJobDefinition#skip_deregister_on_update}
  */
  readonly skipDeregisterOnUpdate?: boolean | cdktn.IResolvable;
}

export function batchJobDefinitionResourceRetentionPolicyToTerraform(struct?: BatchJobDefinitionResourceRetentionPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skip_deregister_on_update: cdktn.booleanToTerraform(struct!.skipDeregisterOnUpdate),
  }
}


export function batchJobDefinitionResourceRetentionPolicyToHclTerraform(struct?: BatchJobDefinitionResourceRetentionPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skip_deregister_on_update: {
      value: cdktn.booleanToHclTerraform(struct!.skipDeregisterOnUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionResourceRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchJobDefinitionResourceRetentionPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDeregisterOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDeregisterOnUpdate = this._skipDeregisterOnUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionResourceRetentionPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skipDeregisterOnUpdate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skipDeregisterOnUpdate = value.skipDeregisterOnUpdate;
    }
  }

  // skip_deregister_on_update - computed: true, optional: true, required: false
  private _skipDeregisterOnUpdate?: boolean | cdktn.IResolvable; 
  public get skipDeregisterOnUpdate() {
    return this.getBooleanAttribute('skip_deregister_on_update');
  }
  public set skipDeregisterOnUpdate(value: boolean | cdktn.IResolvable) {
    this._skipDeregisterOnUpdate = value;
  }
  public resetSkipDeregisterOnUpdate() {
    this._skipDeregisterOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeregisterOnUpdateInput() {
    return this._skipDeregisterOnUpdate;
  }
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#action BatchJobDefinition#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}
  */
  readonly onExitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}
  */
  readonly onReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}
  */
  readonly onStatusReason?: string;
}

export function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    on_exit_code: cdktn.stringToTerraform(struct!.onExitCode),
    on_reason: cdktn.stringToTerraform(struct!.onReason),
    on_status_reason: cdktn.stringToTerraform(struct!.onStatusReason),
  }
}


export function batchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_exit_code: {
      value: cdktn.stringToHclTerraform(struct!.onExitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_reason: {
      value: cdktn.stringToHclTerraform(struct!.onReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_status_reason: {
      value: cdktn.stringToHclTerraform(struct!.onStatusReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._onExitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExitCode = this._onExitCode;
    }
    if (this._onReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onReason = this._onReason;
    }
    if (this._onStatusReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStatusReason = this._onStatusReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._onExitCode = undefined;
      this._onReason = undefined;
      this._onStatusReason = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._onExitCode = value.onExitCode;
      this._onReason = value.onReason;
      this._onStatusReason = value.onStatusReason;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // on_exit_code - computed: true, optional: true, required: false
  private _onExitCode?: string; 
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }
  public set onExitCode(value: string) {
    this._onExitCode = value;
  }
  public resetOnExitCode() {
    this._onExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExitCodeInput() {
    return this._onExitCode;
  }

  // on_reason - computed: true, optional: true, required: false
  private _onReason?: string; 
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }
  public set onReason(value: string) {
    this._onReason = value;
  }
  public resetOnReason() {
    this._onReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReasonInput() {
    return this._onReason;
  }

  // on_status_reason - computed: true, optional: true, required: false
  private _onStatusReason?: string; 
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
  public set onStatusReason(value: string) {
    this._onStatusReason = value;
  }
  public resetOnStatusReason() {
    this._onStatusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStatusReasonInput() {
    return this._onStatusReason;
  }
}

export class BatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktn.ComplexList {
  public internalValue? : BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktn.IResolvable

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
  public get(index: number): BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchJobDefinitionRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}
  */
  readonly attempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
  */
  readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktn.IResolvable;
}

export function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attempts: cdktn.numberToTerraform(struct!.attempts),
    evaluate_on_exit: cdktn.listMapper(batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform, false)(struct!.evaluateOnExit),
  }
}


export function batchJobDefinitionRetryStrategyToHclTerraform(struct?: BatchJobDefinitionRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attempts: {
      value: cdktn.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate_on_exit: {
      value: cdktn.listMapperHcl(batchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform, false)(struct!.evaluateOnExit),
      isBlock: true,
      type: "list",
      storageClassType: "BatchJobDefinitionRetryStrategyEvaluateOnExitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchJobDefinitionRetryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._evaluateOnExit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateOnExit = this._evaluateOnExit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionRetryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._evaluateOnExit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._evaluateOnExit.internalValue = value.evaluateOnExit;
    }
  }

  // attempts - computed: true, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // evaluate_on_exit - computed: true, optional: true, required: false
  private _evaluateOnExit = new BatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
  public putEvaluateOnExit(value: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktn.IResolvable) {
    this._evaluateOnExit.internalValue = value;
  }
  public resetEvaluateOnExit() {
    this._evaluateOnExit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateOnExitInput() {
    return this._evaluateOnExit.internalValue;
  }
}
export interface BatchJobDefinitionTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
  */
  readonly attemptDurationSeconds?: number;
}

export function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attempt_duration_seconds: cdktn.numberToTerraform(struct!.attemptDurationSeconds),
  }
}


export function batchJobDefinitionTimeoutToHclTerraform(struct?: BatchJobDefinitionTimeout | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attempt_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.attemptDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchJobDefinitionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchJobDefinitionTimeout | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attemptDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptDurationSeconds = this._attemptDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionTimeout | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attemptDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attemptDurationSeconds = value.attemptDurationSeconds;
    }
  }

  // attempt_duration_seconds - computed: true, optional: true, required: false
  private _attemptDurationSeconds?: number; 
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
  public set attemptDurationSeconds(value: number) {
    this._attemptDurationSeconds = value;
  }
  public resetAttemptDurationSeconds() {
    this._attemptDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDurationSecondsInput() {
    return this._attemptDurationSeconds;
  }
}
