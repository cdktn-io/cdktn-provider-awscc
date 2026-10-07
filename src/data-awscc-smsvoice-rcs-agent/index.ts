/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSmsvoiceRcsAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#id DataAwsccSmsvoiceRcsAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSmsvoiceRcsAgentTags {
}

export function dataAwsccSmsvoiceRcsAgentTagsToTerraform(struct?: DataAwsccSmsvoiceRcsAgentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoiceRcsAgentTagsToHclTerraform(struct?: DataAwsccSmsvoiceRcsAgentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoiceRcsAgentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSmsvoiceRcsAgentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoiceRcsAgentTags | undefined) {
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

export class DataAwsccSmsvoiceRcsAgentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSmsvoiceRcsAgentTagsOutputReference {
    return new DataAwsccSmsvoiceRcsAgentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSmsvoiceRcsAgentTestingAgent {
}

export function dataAwsccSmsvoiceRcsAgentTestingAgentToTerraform(struct?: DataAwsccSmsvoiceRcsAgentTestingAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoiceRcsAgentTestingAgentToHclTerraform(struct?: DataAwsccSmsvoiceRcsAgentTestingAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSmsvoiceRcsAgentTestingAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoiceRcsAgentTestingAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registration_id - computed: true, optional: false, required: false
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }

  // testing_agent_id - computed: true, optional: false, required: false
  public get testingAgentId() {
    return this.getStringAttribute('testing_agent_id');
  }

  // testing_agent_status - computed: true, optional: false, required: false
  public get testingAgentStatus() {
    return this.getStringAttribute('testing_agent_status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}
*/
export class DataAwsccSmsvoiceRcsAgent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_smsvoice_rcs_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSmsvoiceRcsAgent to import
  * @param importFromId The id of the existing DataAwsccSmsvoiceRcsAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSmsvoiceRcsAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_rcs_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSmsvoiceRcsAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSmsvoiceRcsAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_smsvoice_rcs_agent',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
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

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
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

  // opt_out_list_name - computed: true, optional: false, required: false
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // rcs_agent_arn - computed: true, optional: false, required: false
  public get rcsAgentArn() {
    return this.getStringAttribute('rcs_agent_arn');
  }

  // rcs_agent_id - computed: true, optional: false, required: false
  public get rcsAgentId() {
    return this.getStringAttribute('rcs_agent_id');
  }

  // self_managed_opt_outs_enabled - computed: true, optional: false, required: false
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSmsvoiceRcsAgentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // testing_agent - computed: true, optional: false, required: false
  private _testingAgent = new DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference(this, "testing_agent");
  public get testingAgent() {
    return this._testingAgent;
  }

  // two_way_channel_arn - computed: true, optional: false, required: false
  public get twoWayChannelArn() {
    return this.getStringAttribute('two_way_channel_arn');
  }

  // two_way_channel_role - computed: true, optional: false, required: false
  public get twoWayChannelRole() {
    return this.getStringAttribute('two_way_channel_role');
  }

  // two_way_enabled - computed: true, optional: false, required: false
  public get twoWayEnabled() {
    return this.getBooleanAttribute('two_way_enabled');
  }

  // two_way_media_s3_bucket_name - computed: true, optional: false, required: false
  public get twoWayMediaS3BucketName() {
    return this.getStringAttribute('two_way_media_s3_bucket_name');
  }

  // two_way_media_s3_key_prefix - computed: true, optional: false, required: false
  public get twoWayMediaS3KeyPrefix() {
    return this.getStringAttribute('two_way_media_s3_key_prefix');
  }

  // two_way_media_s3_role - computed: true, optional: false, required: false
  public get twoWayMediaS3Role() {
    return this.getStringAttribute('two_way_media_s3_role');
  }

  // two_way_rcs_events_enabled - computed: true, optional: false, required: false
  public get twoWayRcsEventsEnabled() {
    return this.getListAttribute('two_way_rcs_events_enabled');
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
