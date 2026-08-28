/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WellarchitectedWorkloadConfig extends cdktn.TerraformMetaArguments {
  /**
  * The list of Amazon Web Services account IDs associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * The URL of the architectural design for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}
  */
  readonly architecturalDesign?: string;
  /**
  * The list of Amazon Web Services Regions associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * The description for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}
  */
  readonly description: string;
  /**
  * Discovery configuration associated to the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}
  */
  readonly discoveryConfig?: WellarchitectedWorkloadDiscoveryConfig;
  /**
  * The environment for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}
  */
  readonly environment: string;
  /**
  * The industry for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}
  */
  readonly industry?: string;
  /**
  * The industry type for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}
  */
  readonly industryType?: string;
  /**
  * The list of lenses associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}
  */
  readonly lenses: string[];
  /**
  * The list of non-Amazon Web Services Regions associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}
  */
  readonly nonAwsRegions?: string[];
  /**
  * The notes associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}
  */
  readonly notes?: string;
  /**
  * The review owner of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}
  */
  readonly reviewOwner?: string;
  /**
  * The tags associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}
  */
  readonly tags?: WellarchitectedWorkloadTags[] | cdktn.IResolvable;
  /**
  * The name of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}
  */
  readonly workloadName: string;
}
export interface WellarchitectedWorkloadDiscoveryConfig {
  /**
  * Discovery integration status in respect to Trusted Advisor for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}
  */
  readonly trustedAdvisorIntegrationStatus?: string;
  /**
  * The mode to use for identifying resources associated with the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}
  */
  readonly workloadResourceDefinition?: string[];
}

export function wellarchitectedWorkloadDiscoveryConfigToTerraform(struct?: WellarchitectedWorkloadDiscoveryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trusted_advisor_integration_status: cdktn.stringToTerraform(struct!.trustedAdvisorIntegrationStatus),
    workload_resource_definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadResourceDefinition),
  }
}


export function wellarchitectedWorkloadDiscoveryConfigToHclTerraform(struct?: WellarchitectedWorkloadDiscoveryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trusted_advisor_integration_status: {
      value: cdktn.stringToHclTerraform(struct!.trustedAdvisorIntegrationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_resource_definition: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workloadResourceDefinition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WellarchitectedWorkloadDiscoveryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WellarchitectedWorkloadDiscoveryConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedAdvisorIntegrationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAdvisorIntegrationStatus = this._trustedAdvisorIntegrationStatus;
    }
    if (this._workloadResourceDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadResourceDefinition = this._workloadResourceDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WellarchitectedWorkloadDiscoveryConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustedAdvisorIntegrationStatus = undefined;
      this._workloadResourceDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustedAdvisorIntegrationStatus = value.trustedAdvisorIntegrationStatus;
      this._workloadResourceDefinition = value.workloadResourceDefinition;
    }
  }

  // trusted_advisor_integration_status - computed: true, optional: true, required: false
  private _trustedAdvisorIntegrationStatus?: string; 
  public get trustedAdvisorIntegrationStatus() {
    return this.getStringAttribute('trusted_advisor_integration_status');
  }
  public set trustedAdvisorIntegrationStatus(value: string) {
    this._trustedAdvisorIntegrationStatus = value;
  }
  public resetTrustedAdvisorIntegrationStatus() {
    this._trustedAdvisorIntegrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAdvisorIntegrationStatusInput() {
    return this._trustedAdvisorIntegrationStatus;
  }

  // workload_resource_definition - computed: true, optional: true, required: false
  private _workloadResourceDefinition?: string[]; 
  public get workloadResourceDefinition() {
    return this.getListAttribute('workload_resource_definition');
  }
  public set workloadResourceDefinition(value: string[]) {
    this._workloadResourceDefinition = value;
  }
  public resetWorkloadResourceDefinition() {
    this._workloadResourceDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadResourceDefinitionInput() {
    return this._workloadResourceDefinition;
  }
}
export interface WellarchitectedWorkloadTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}
  */
  readonly value?: string;
}

export function wellarchitectedWorkloadTagsToTerraform(struct?: WellarchitectedWorkloadTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wellarchitectedWorkloadTagsToHclTerraform(struct?: WellarchitectedWorkloadTags | cdktn.IResolvable): any {
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

export class WellarchitectedWorkloadTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WellarchitectedWorkloadTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WellarchitectedWorkloadTags | cdktn.IResolvable | undefined) {
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

export class WellarchitectedWorkloadTagsList extends cdktn.ComplexList {
  public internalValue? : WellarchitectedWorkloadTags[] | cdktn.IResolvable

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
  public get(index: number): WellarchitectedWorkloadTagsOutputReference {
    return new WellarchitectedWorkloadTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}
*/
export class WellarchitectedWorkload extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wellarchitected_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WellarchitectedWorkload to import
  * @param importFromId The id of the existing WellarchitectedWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WellarchitectedWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WellarchitectedWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: WellarchitectedWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wellarchitected_workload',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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
    this._accountIds = config.accountIds;
    this._architecturalDesign = config.architecturalDesign;
    this._awsRegions = config.awsRegions;
    this._description = config.description;
    this._discoveryConfig.internalValue = config.discoveryConfig;
    this._environment = config.environment;
    this._industry = config.industry;
    this._industryType = config.industryType;
    this._lenses = config.lenses;
    this._nonAwsRegions = config.nonAwsRegions;
    this._notes = config.notes;
    this._reviewOwner = config.reviewOwner;
    this._tags.internalValue = config.tags;
    this._workloadName = config.workloadName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_ids - computed: true, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // architectural_design - computed: true, optional: true, required: false
  private _architecturalDesign?: string; 
  public get architecturalDesign() {
    return this.getStringAttribute('architectural_design');
  }
  public set architecturalDesign(value: string) {
    this._architecturalDesign = value;
  }
  public resetArchitecturalDesign() {
    this._architecturalDesign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturalDesignInput() {
    return this._architecturalDesign;
  }

  // aws_regions - computed: true, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_config - computed: true, optional: true, required: false
  private _discoveryConfig = new WellarchitectedWorkloadDiscoveryConfigOutputReference(this, "discovery_config");
  public get discoveryConfig() {
    return this._discoveryConfig;
  }
  public putDiscoveryConfig(value: WellarchitectedWorkloadDiscoveryConfig) {
    this._discoveryConfig.internalValue = value;
  }
  public resetDiscoveryConfig() {
    this._discoveryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryConfigInput() {
    return this._discoveryConfig.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // improvement_status - computed: true, optional: false, required: false
  public get improvementStatus() {
    return this.getStringAttribute('improvement_status');
  }

  // industry - computed: true, optional: true, required: false
  private _industry?: string; 
  public get industry() {
    return this.getStringAttribute('industry');
  }
  public set industry(value: string) {
    this._industry = value;
  }
  public resetIndustry() {
    this._industry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryInput() {
    return this._industry;
  }

  // industry_type - computed: true, optional: true, required: false
  private _industryType?: string; 
  public get industryType() {
    return this.getStringAttribute('industry_type');
  }
  public set industryType(value: string) {
    this._industryType = value;
  }
  public resetIndustryType() {
    this._industryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryTypeInput() {
    return this._industryType;
  }

  // lenses - computed: false, optional: false, required: true
  private _lenses?: string[]; 
  public get lenses() {
    return this.getListAttribute('lenses');
  }
  public set lenses(value: string[]) {
    this._lenses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lensesInput() {
    return this._lenses;
  }

  // non_aws_regions - computed: true, optional: true, required: false
  private _nonAwsRegions?: string[]; 
  public get nonAwsRegions() {
    return this.getListAttribute('non_aws_regions');
  }
  public set nonAwsRegions(value: string[]) {
    this._nonAwsRegions = value;
  }
  public resetNonAwsRegions() {
    this._nonAwsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAwsRegionsInput() {
    return this._nonAwsRegions;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // review_owner - computed: true, optional: true, required: false
  private _reviewOwner?: string; 
  public get reviewOwner() {
    return this.getStringAttribute('review_owner');
  }
  public set reviewOwner(value: string) {
    this._reviewOwner = value;
  }
  public resetReviewOwner() {
    this._reviewOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewOwnerInput() {
    return this._reviewOwner;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WellarchitectedWorkloadTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WellarchitectedWorkloadTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // workload_arn - computed: true, optional: false, required: false
  public get workloadArn() {
    return this.getStringAttribute('workload_arn');
  }

  // workload_id - computed: true, optional: false, required: false
  public get workloadId() {
    return this.getStringAttribute('workload_id');
  }

  // workload_name - computed: false, optional: false, required: true
  private _workloadName?: string; 
  public get workloadName() {
    return this.getStringAttribute('workload_name');
  }
  public set workloadName(value: string) {
    this._workloadName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNameInput() {
    return this._workloadName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._accountIds),
      architectural_design: cdktn.stringToTerraform(this._architecturalDesign),
      aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._awsRegions),
      description: cdktn.stringToTerraform(this._description),
      discovery_config: wellarchitectedWorkloadDiscoveryConfigToTerraform(this._discoveryConfig.internalValue),
      environment: cdktn.stringToTerraform(this._environment),
      industry: cdktn.stringToTerraform(this._industry),
      industry_type: cdktn.stringToTerraform(this._industryType),
      lenses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._lenses),
      non_aws_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._nonAwsRegions),
      notes: cdktn.stringToTerraform(this._notes),
      review_owner: cdktn.stringToTerraform(this._reviewOwner),
      tags: cdktn.listMapper(wellarchitectedWorkloadTagsToTerraform, false)(this._tags.internalValue),
      workload_name: cdktn.stringToTerraform(this._workloadName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._accountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      architectural_design: {
        value: cdktn.stringToHclTerraform(this._architecturalDesign),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._awsRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_config: {
        value: wellarchitectedWorkloadDiscoveryConfigToHclTerraform(this._discoveryConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WellarchitectedWorkloadDiscoveryConfig",
      },
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      industry: {
        value: cdktn.stringToHclTerraform(this._industry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      industry_type: {
        value: cdktn.stringToHclTerraform(this._industryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lenses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._lenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      non_aws_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._nonAwsRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notes: {
        value: cdktn.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      review_owner: {
        value: cdktn.stringToHclTerraform(this._reviewOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(wellarchitectedWorkloadTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WellarchitectedWorkloadTagsList",
      },
      workload_name: {
        value: cdktn.stringToHclTerraform(this._workloadName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
