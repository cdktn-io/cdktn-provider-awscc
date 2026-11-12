/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LakeformationResourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}
  */
  readonly hybridAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the Data Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#resource_arn LakeformationResource#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * The IAM role that registered a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Designates a trusted caller, an IAM principal, by registering this caller with the Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}
  */
  readonly useServiceLinkedRole: boolean | cdktn.IResolvable;
  /**
  * Allows Lake Formation to assume a role to access tables in a federated database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}
  */
  readonly withFederation?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource awscc_lakeformation_resource}
*/
export class LakeformationResource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lakeformation_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LakeformationResource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationResource to import
  * @param importFromId The id of the existing LakeformationResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/lakeformation_resource awscc_lakeformation_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LakeformationResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lakeformation_resource',
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
    this._hybridAccessEnabled = config.hybridAccessEnabled;
    this._resourceArn = config.resourceArn;
    this._roleArn = config.roleArn;
    this._useServiceLinkedRole = config.useServiceLinkedRole;
    this._withFederation = config.withFederation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hybrid_access_enabled - computed: true, optional: true, required: false
  private _hybridAccessEnabled?: boolean | cdktn.IResolvable; 
  public get hybridAccessEnabled() {
    return this.getBooleanAttribute('hybrid_access_enabled');
  }
  public set hybridAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._hybridAccessEnabled = value;
  }
  public resetHybridAccessEnabled() {
    this._hybridAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAccessEnabledInput() {
    return this._hybridAccessEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_service_linked_role - computed: false, optional: false, required: true
  private _useServiceLinkedRole?: boolean | cdktn.IResolvable; 
  public get useServiceLinkedRole() {
    return this.getBooleanAttribute('use_service_linked_role');
  }
  public set useServiceLinkedRole(value: boolean | cdktn.IResolvable) {
    this._useServiceLinkedRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceLinkedRoleInput() {
    return this._useServiceLinkedRole;
  }

  // with_federation - computed: true, optional: true, required: false
  private _withFederation?: boolean | cdktn.IResolvable; 
  public get withFederation() {
    return this.getBooleanAttribute('with_federation');
  }
  public set withFederation(value: boolean | cdktn.IResolvable) {
    this._withFederation = value;
  }
  public resetWithFederation() {
    this._withFederation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withFederationInput() {
    return this._withFederation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hybrid_access_enabled: cdktn.booleanToTerraform(this._hybridAccessEnabled),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      use_service_linked_role: cdktn.booleanToTerraform(this._useServiceLinkedRole),
      with_federation: cdktn.booleanToTerraform(this._withFederation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hybrid_access_enabled: {
        value: cdktn.booleanToHclTerraform(this._hybridAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_service_linked_role: {
        value: cdktn.booleanToHclTerraform(this._useServiceLinkedRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_federation: {
        value: cdktn.booleanToHclTerraform(this._withFederation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
