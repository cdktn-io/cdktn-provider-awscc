/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMgnReplicationConfigurationTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMgnReplicationConfigurationTemplateTags {
}

export function dataAwsccMgnReplicationConfigurationTemplateTagsToTerraform(struct?: DataAwsccMgnReplicationConfigurationTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMgnReplicationConfigurationTemplateTagsToHclTerraform(struct?: DataAwsccMgnReplicationConfigurationTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMgnReplicationConfigurationTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMgnReplicationConfigurationTemplateTags | undefined) {
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

export class DataAwsccMgnReplicationConfigurationTemplateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference {
    return new DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}
*/
export class DataAwsccMgnReplicationConfigurationTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mgn_replication_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMgnReplicationConfigurationTemplate to import
  * @param importFromId The id of the existing DataAwsccMgnReplicationConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMgnReplicationConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mgn_replication_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMgnReplicationConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMgnReplicationConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mgn_replication_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
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

  // associate_default_security_group - computed: true, optional: false, required: false
  public get associateDefaultSecurityGroup() {
    return this.getBooleanAttribute('associate_default_security_group');
  }

  // bandwidth_throttling - computed: true, optional: false, required: false
  public get bandwidthThrottling() {
    return this.getNumberAttribute('bandwidth_throttling');
  }

  // create_public_ip - computed: true, optional: false, required: false
  public get createPublicIp() {
    return this.getBooleanAttribute('create_public_ip');
  }

  // data_plane_routing - computed: true, optional: false, required: false
  public get dataPlaneRouting() {
    return this.getStringAttribute('data_plane_routing');
  }

  // default_large_staging_disk_type - computed: true, optional: false, required: false
  public get defaultLargeStagingDiskType() {
    return this.getStringAttribute('default_large_staging_disk_type');
  }

  // ebs_encryption - computed: true, optional: false, required: false
  public get ebsEncryption() {
    return this.getStringAttribute('ebs_encryption');
  }

  // ebs_encryption_key_arn - computed: true, optional: false, required: false
  public get ebsEncryptionKeyArn() {
    return this.getStringAttribute('ebs_encryption_key_arn');
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

  // internet_protocol - computed: true, optional: false, required: false
  public get internetProtocol() {
    return this.getStringAttribute('internet_protocol');
  }

  // replication_configuration_template_id - computed: true, optional: false, required: false
  public get replicationConfigurationTemplateId() {
    return this.getStringAttribute('replication_configuration_template_id');
  }

  // replication_server_instance_type - computed: true, optional: false, required: false
  public get replicationServerInstanceType() {
    return this.getStringAttribute('replication_server_instance_type');
  }

  // replication_servers_security_groups_i_ds - computed: true, optional: false, required: false
  public get replicationServersSecurityGroupsIDs() {
    return this.getListAttribute('replication_servers_security_groups_i_ds');
  }

  // staging_area_subnet_id - computed: true, optional: false, required: false
  public get stagingAreaSubnetId() {
    return this.getStringAttribute('staging_area_subnet_id');
  }

  // staging_area_tags - computed: true, optional: false, required: false
  private _stagingAreaTags = new cdktn.StringMap(this, "staging_area_tags");
  public get stagingAreaTags() {
    return this._stagingAreaTags;
  }

  // store_snapshot_on_local_zone - computed: true, optional: false, required: false
  public get storeSnapshotOnLocalZone() {
    return this.getBooleanAttribute('store_snapshot_on_local_zone');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMgnReplicationConfigurationTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // use_dedicated_replication_server - computed: true, optional: false, required: false
  public get useDedicatedReplicationServer() {
    return this.getBooleanAttribute('use_dedicated_replication_server');
  }

  // use_fips_endpoint - computed: true, optional: false, required: false
  public get useFipsEndpoint() {
    return this.getBooleanAttribute('use_fips_endpoint');
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
