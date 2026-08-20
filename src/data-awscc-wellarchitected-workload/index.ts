/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wellarchitected_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWellarchitectedWorkloadConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wellarchitected_workload#id DataAwsccWellarchitectedWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWellarchitectedWorkloadDiscoveryConfig {
}

export function dataAwsccWellarchitectedWorkloadDiscoveryConfigToTerraform(struct?: DataAwsccWellarchitectedWorkloadDiscoveryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWellarchitectedWorkloadDiscoveryConfigToHclTerraform(struct?: DataAwsccWellarchitectedWorkloadDiscoveryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWellarchitectedWorkloadDiscoveryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWellarchitectedWorkloadDiscoveryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWellarchitectedWorkloadDiscoveryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trusted_advisor_integration_status - computed: true, optional: false, required: false
  public get trustedAdvisorIntegrationStatus() {
    return this.getStringAttribute('trusted_advisor_integration_status');
  }

  // workload_resource_definition - computed: true, optional: false, required: false
  public get workloadResourceDefinition() {
    return this.getListAttribute('workload_resource_definition');
  }
}
export interface DataAwsccWellarchitectedWorkloadTags {
}

export function dataAwsccWellarchitectedWorkloadTagsToTerraform(struct?: DataAwsccWellarchitectedWorkloadTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWellarchitectedWorkloadTagsToHclTerraform(struct?: DataAwsccWellarchitectedWorkloadTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWellarchitectedWorkloadTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWellarchitectedWorkloadTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWellarchitectedWorkloadTags | undefined) {
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

export class DataAwsccWellarchitectedWorkloadTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWellarchitectedWorkloadTagsOutputReference {
    return new DataAwsccWellarchitectedWorkloadTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wellarchitected_workload awscc_wellarchitected_workload}
*/
export class DataAwsccWellarchitectedWorkload extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wellarchitected_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWellarchitectedWorkload resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWellarchitectedWorkload to import
  * @param importFromId The id of the existing DataAwsccWellarchitectedWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWellarchitectedWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wellarchitected_workload awscc_wellarchitected_workload} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWellarchitectedWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWellarchitectedWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wellarchitected_workload',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }

  // architectural_design - computed: true, optional: false, required: false
  public get architecturalDesign() {
    return this.getStringAttribute('architectural_design');
  }

  // aws_regions - computed: true, optional: false, required: false
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_config - computed: true, optional: false, required: false
  private _discoveryConfig = new DataAwsccWellarchitectedWorkloadDiscoveryConfigOutputReference(this, "discovery_config");
  public get discoveryConfig() {
    return this._discoveryConfig;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // improvement_status - computed: true, optional: false, required: false
  public get improvementStatus() {
    return this.getStringAttribute('improvement_status');
  }

  // industry - computed: true, optional: false, required: false
  public get industry() {
    return this.getStringAttribute('industry');
  }

  // industry_type - computed: true, optional: false, required: false
  public get industryType() {
    return this.getStringAttribute('industry_type');
  }

  // lenses - computed: true, optional: false, required: false
  public get lenses() {
    return this.getListAttribute('lenses');
  }

  // non_aws_regions - computed: true, optional: false, required: false
  public get nonAwsRegions() {
    return this.getListAttribute('non_aws_regions');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // review_owner - computed: true, optional: false, required: false
  public get reviewOwner() {
    return this.getStringAttribute('review_owner');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWellarchitectedWorkloadTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // workload_arn - computed: true, optional: false, required: false
  public get workloadArn() {
    return this.getStringAttribute('workload_arn');
  }

  // workload_id - computed: true, optional: false, required: false
  public get workloadId() {
    return this.getStringAttribute('workload_id');
  }

  // workload_name - computed: true, optional: false, required: false
  public get workloadName() {
    return this.getStringAttribute('workload_name');
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
