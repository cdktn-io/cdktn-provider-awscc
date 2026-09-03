/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mgn_network_migration_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMgnNetworkMigrationDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mgn_network_migration_definition#id DataAwsccMgnNetworkMigrationDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration {
}

export function dataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationToTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationToHclTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_bucket_owner - computed: true, optional: false, required: false
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
}
export interface DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations {
}

export function dataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsToTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsToHclTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_environment - computed: true, optional: false, required: false
  public get sourceEnvironment() {
    return this.getStringAttribute('source_environment');
  }

  // source_s3_configuration - computed: true, optional: false, required: false
  private _sourceS3Configuration = new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(this, "source_s3_configuration");
  public get sourceS3Configuration() {
    return this._sourceS3Configuration;
  }
}

export class DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference {
    return new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMgnNetworkMigrationDefinitionTags {
}

export function dataAwsccMgnNetworkMigrationDefinitionTagsToTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnNetworkMigrationDefinitionTagsToHclTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMgnNetworkMigrationDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnNetworkMigrationDefinitionTags | undefined) {
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

export class DataAwsccMgnNetworkMigrationDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference {
    return new DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMgnNetworkMigrationDefinitionTargetNetwork {
}

export function dataAwsccMgnNetworkMigrationDefinitionTargetNetworkToTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTargetNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnNetworkMigrationDefinitionTargetNetworkToHclTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTargetNetwork): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMgnNetworkMigrationDefinitionTargetNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnNetworkMigrationDefinitionTargetNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound_cidr - computed: true, optional: false, required: false
  public get inboundCidr() {
    return this.getStringAttribute('inbound_cidr');
  }

  // inspection_cidr - computed: true, optional: false, required: false
  public get inspectionCidr() {
    return this.getStringAttribute('inspection_cidr');
  }

  // outbound_cidr - computed: true, optional: false, required: false
  public get outboundCidr() {
    return this.getStringAttribute('outbound_cidr');
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }
}
export interface DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration {
}

export function dataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationToTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationToHclTerraform(struct?: DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_bucket_owner - computed: true, optional: false, required: false
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mgn_network_migration_definition awscc_mgn_network_migration_definition}
*/
export class DataAwsccMgnNetworkMigrationDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mgn_network_migration_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMgnNetworkMigrationDefinition to import
  * @param importFromId The id of the existing DataAwsccMgnNetworkMigrationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMgnNetworkMigrationDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mgn_network_migration_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/mgn_network_migration_definition awscc_mgn_network_migration_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMgnNetworkMigrationDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMgnNetworkMigrationDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mgn_network_migration_definition',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_migration_definition_id - computed: true, optional: false, required: false
  public get networkMigrationDefinitionId() {
    return this.getStringAttribute('network_migration_definition_id');
  }

  // scope_tags - computed: true, optional: false, required: false
  private _scopeTags = new cdktn.StringMap(this, "scope_tags");
  public get scopeTags() {
    return this._scopeTags;
  }

  // source_configurations - computed: true, optional: false, required: false
  private _sourceConfigurations = new DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList(this, "source_configurations", false);
  public get sourceConfigurations() {
    return this._sourceConfigurations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMgnNetworkMigrationDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_deployment - computed: true, optional: false, required: false
  public get targetDeployment() {
    return this.getStringAttribute('target_deployment');
  }

  // target_network - computed: true, optional: false, required: false
  private _targetNetwork = new DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference(this, "target_network");
  public get targetNetwork() {
    return this._targetNetwork;
  }

  // target_s3_configuration - computed: true, optional: false, required: false
  private _targetS3Configuration = new DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(this, "target_s3_configuration");
  public get targetS3Configuration() {
    return this._targetS3Configuration;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
