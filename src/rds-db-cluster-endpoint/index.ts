/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RdsDbClusterEndpointAConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of the custom endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}
  */
  readonly customEndpointType: string;
  /**
  * The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}
  */
  readonly dbClusterEndpointIdentifier: string;
  /**
  * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}
  */
  readonly excludedMembers?: string[];
  /**
  * List of DB instance identifiers that are part of the custom endpoint group. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}
  */
  readonly staticMembers?: string[];
  /**
  * The tags to be assigned to the DB cluster endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}
  */
  readonly tags?: RdsDbClusterEndpointTags[] | cdktn.IResolvable;
}
export interface RdsDbClusterEndpointTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}
  */
  readonly value?: string;
}

export function rdsDbClusterEndpointTagsToTerraform(struct?: RdsDbClusterEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rdsDbClusterEndpointTagsToHclTerraform(struct?: RdsDbClusterEndpointTags | cdktn.IResolvable): any {
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

export class RdsDbClusterEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RdsDbClusterEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RdsDbClusterEndpointTags | cdktn.IResolvable | undefined) {
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

export class RdsDbClusterEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : RdsDbClusterEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): RdsDbClusterEndpointTagsOutputReference {
    return new RdsDbClusterEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}
*/
export class RdsDbClusterEndpointA extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rds_db_cluster_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsDbClusterEndpointA to import
  * @param importFromId The id of the existing RdsDbClusterEndpointA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsDbClusterEndpointA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_cluster_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbClusterEndpointAConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbClusterEndpointAConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_cluster_endpoint',
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
    this._customEndpointType = config.customEndpointType;
    this._dbClusterEndpointIdentifier = config.dbClusterEndpointIdentifier;
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._excludedMembers = config.excludedMembers;
    this._staticMembers = config.staticMembers;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_endpoint_type - computed: false, optional: false, required: true
  private _customEndpointType?: string; 
  public get customEndpointType() {
    return this.getStringAttribute('custom_endpoint_type');
  }
  public set customEndpointType(value: string) {
    this._customEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointTypeInput() {
    return this._customEndpointType;
  }

  // db_cluster_endpoint_arn - computed: true, optional: false, required: false
  public get dbClusterEndpointArn() {
    return this.getStringAttribute('db_cluster_endpoint_arn');
  }

  // db_cluster_endpoint_identifier - computed: false, optional: false, required: true
  private _dbClusterEndpointIdentifier?: string; 
  public get dbClusterEndpointIdentifier() {
    return this.getStringAttribute('db_cluster_endpoint_identifier');
  }
  public set dbClusterEndpointIdentifier(value: string) {
    this._dbClusterEndpointIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterEndpointIdentifierInput() {
    return this._dbClusterEndpointIdentifier;
  }

  // db_cluster_endpoint_resource_identifier - computed: true, optional: false, required: false
  public get dbClusterEndpointResourceIdentifier() {
    return this.getStringAttribute('db_cluster_endpoint_resource_identifier');
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // excluded_members - computed: true, optional: true, required: false
  private _excludedMembers?: string[]; 
  public get excludedMembers() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_members'));
  }
  public set excludedMembers(value: string[]) {
    this._excludedMembers = value;
  }
  public resetExcludedMembers() {
    this._excludedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedMembersInput() {
    return this._excludedMembers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // static_members - computed: true, optional: true, required: false
  private _staticMembers?: string[]; 
  public get staticMembers() {
    return cdktn.Fn.tolist(this.getListAttribute('static_members'));
  }
  public set staticMembers(value: string[]) {
    this._staticMembers = value;
  }
  public resetStaticMembers() {
    this._staticMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMembersInput() {
    return this._staticMembers;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RdsDbClusterEndpointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RdsDbClusterEndpointTags[] | cdktn.IResolvable) {
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
      custom_endpoint_type: cdktn.stringToTerraform(this._customEndpointType),
      db_cluster_endpoint_identifier: cdktn.stringToTerraform(this._dbClusterEndpointIdentifier),
      db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
      excluded_members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedMembers),
      static_members: cdktn.listMapper(cdktn.stringToTerraform, false)(this._staticMembers),
      tags: cdktn.listMapper(rdsDbClusterEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_endpoint_type: {
        value: cdktn.stringToHclTerraform(this._customEndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_endpoint_identifier: {
        value: cdktn.stringToHclTerraform(this._dbClusterEndpointIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_identifier: {
        value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_members: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      static_members: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._staticMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(rdsDbClusterEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsDbClusterEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
