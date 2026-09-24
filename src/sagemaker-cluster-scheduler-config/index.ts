/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerClusterSchedulerConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * ARN of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Description of the cluster policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}
  */
  readonly description?: string;
  /**
  * Name for the cluster policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}
  */
  readonly name: string;
  /**
  * Cluster policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}
  */
  readonly schedulerConfig: SagemakerClusterSchedulerConfigSchedulerConfig;
  /**
  * Tags of the cluster policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}
  */
  readonly tags?: SagemakerClusterSchedulerConfigTags[] | cdktn.IResolvable;
}
export interface SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses {
  /**
  * Name of the priority class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}
  */
  readonly name?: string;
  /**
  * Weight of the priority class. Range 0-100, default 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}
  */
  readonly weight?: number;
}

export function sagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesToTerraform(struct?: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function sagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesToHclTerraform(struct?: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList extends cdktn.ComplexList {
  public internalValue? : SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] | cdktn.IResolvable

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
  public get(index: number): SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference {
    return new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerClusterSchedulerConfigSchedulerConfig {
  /**
  * When enabled, entities borrow idle compute based on assigned FairShareWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}
  */
  readonly fairShare?: string;
  /**
  * Configuration for sharing idle compute resources across entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}
  */
  readonly idleResourceSharing?: string;
  /**
  * List of priority class configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}
  */
  readonly priorityClasses?: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] | cdktn.IResolvable;
}

export function sagemakerClusterSchedulerConfigSchedulerConfigToTerraform(struct?: SagemakerClusterSchedulerConfigSchedulerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fair_share: cdktn.stringToTerraform(struct!.fairShare),
    idle_resource_sharing: cdktn.stringToTerraform(struct!.idleResourceSharing),
    priority_classes: cdktn.listMapper(sagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesToTerraform, false)(struct!.priorityClasses),
  }
}


export function sagemakerClusterSchedulerConfigSchedulerConfigToHclTerraform(struct?: SagemakerClusterSchedulerConfigSchedulerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fair_share: {
      value: cdktn.stringToHclTerraform(struct!.fairShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_resource_sharing: {
      value: cdktn.stringToHclTerraform(struct!.idleResourceSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_classes: {
      value: cdktn.listMapperHcl(sagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesToHclTerraform, false)(struct!.priorityClasses),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerClusterSchedulerConfigSchedulerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerClusterSchedulerConfigSchedulerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fairShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.fairShare = this._fairShare;
    }
    if (this._idleResourceSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleResourceSharing = this._idleResourceSharing;
    }
    if (this._priorityClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClasses = this._priorityClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerClusterSchedulerConfigSchedulerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fairShare = undefined;
      this._idleResourceSharing = undefined;
      this._priorityClasses.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fairShare = value.fairShare;
      this._idleResourceSharing = value.idleResourceSharing;
      this._priorityClasses.internalValue = value.priorityClasses;
    }
  }

  // fair_share - computed: true, optional: true, required: false
  private _fairShare?: string; 
  public get fairShare() {
    return this.getStringAttribute('fair_share');
  }
  public set fairShare(value: string) {
    this._fairShare = value;
  }
  public resetFairShare() {
    this._fairShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairShareInput() {
    return this._fairShare;
  }

  // idle_resource_sharing - computed: true, optional: true, required: false
  private _idleResourceSharing?: string; 
  public get idleResourceSharing() {
    return this.getStringAttribute('idle_resource_sharing');
  }
  public set idleResourceSharing(value: string) {
    this._idleResourceSharing = value;
  }
  public resetIdleResourceSharing() {
    this._idleResourceSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleResourceSharingInput() {
    return this._idleResourceSharing;
  }

  // priority_classes - computed: true, optional: true, required: false
  private _priorityClasses = new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(this, "priority_classes", false);
  public get priorityClasses() {
    return this._priorityClasses;
  }
  public putPriorityClasses(value: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] | cdktn.IResolvable) {
    this._priorityClasses.internalValue = value;
  }
  public resetPriorityClasses() {
    this._priorityClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassesInput() {
    return this._priorityClasses.internalValue;
  }
}
export interface SagemakerClusterSchedulerConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}
  */
  readonly value?: string;
}

export function sagemakerClusterSchedulerConfigTagsToTerraform(struct?: SagemakerClusterSchedulerConfigTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerClusterSchedulerConfigTagsToHclTerraform(struct?: SagemakerClusterSchedulerConfigTags | cdktn.IResolvable): any {
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

export class SagemakerClusterSchedulerConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerClusterSchedulerConfigTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerClusterSchedulerConfigTags | cdktn.IResolvable | undefined) {
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

export class SagemakerClusterSchedulerConfigTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerClusterSchedulerConfigTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerClusterSchedulerConfigTagsOutputReference {
    return new SagemakerClusterSchedulerConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}
*/
export class SagemakerClusterSchedulerConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_cluster_scheduler_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import
  * @param importFromId The id of the existing SagemakerClusterSchedulerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_cluster_scheduler_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerClusterSchedulerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerClusterSchedulerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_cluster_scheduler_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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
    this._clusterArn = config.clusterArn;
    this._description = config.description;
    this._name = config.name;
    this._schedulerConfig.internalValue = config.schedulerConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cluster_scheduler_config_arn - computed: true, optional: false, required: false
  public get clusterSchedulerConfigArn() {
    return this.getStringAttribute('cluster_scheduler_config_arn');
  }

  // cluster_scheduler_config_id - computed: true, optional: false, required: false
  public get clusterSchedulerConfigId() {
    return this.getStringAttribute('cluster_scheduler_config_id');
  }

  // cluster_scheduler_config_version - computed: true, optional: false, required: false
  public get clusterSchedulerConfigVersion() {
    return this.getNumberAttribute('cluster_scheduler_config_version');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scheduler_config - computed: false, optional: false, required: true
  private _schedulerConfig = new SagemakerClusterSchedulerConfigSchedulerConfigOutputReference(this, "scheduler_config");
  public get schedulerConfig() {
    return this._schedulerConfig;
  }
  public putSchedulerConfig(value: SagemakerClusterSchedulerConfigSchedulerConfig) {
    this._schedulerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerConfigInput() {
    return this._schedulerConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerClusterSchedulerConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerClusterSchedulerConfigTags[] | cdktn.IResolvable) {
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
      cluster_arn: cdktn.stringToTerraform(this._clusterArn),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      scheduler_config: sagemakerClusterSchedulerConfigSchedulerConfigToTerraform(this._schedulerConfig.internalValue),
      tags: cdktn.listMapper(sagemakerClusterSchedulerConfigTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_arn: {
        value: cdktn.stringToHclTerraform(this._clusterArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      scheduler_config: {
        value: sagemakerClusterSchedulerConfigSchedulerConfigToHclTerraform(this._schedulerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerClusterSchedulerConfigSchedulerConfig",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerClusterSchedulerConfigTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerClusterSchedulerConfigTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
