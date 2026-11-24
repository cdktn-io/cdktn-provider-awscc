/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2FcaPolicyAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy_association#id DataAwsccEc2FcaPolicyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy_association awscc_ec2_fca_policy_association}
*/
export class DataAwsccEc2FcaPolicyAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_fca_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2FcaPolicyAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2FcaPolicyAssociation to import
  * @param importFromId The id of the existing DataAwsccEc2FcaPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2FcaPolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_fca_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy_association awscc_ec2_fca_policy_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2FcaPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2FcaPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_fca_policy_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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

  // associated_at - computed: true, optional: false, required: false
  public get associatedAt() {
    return this.getStringAttribute('associated_at');
  }

  // association_mode - computed: true, optional: false, required: false
  public get associationMode() {
    return this.getStringAttribute('association_mode');
  }

  // expected_effective_at - computed: true, optional: false, required: false
  public get expectedEffectiveAt() {
    return this.getStringAttribute('expected_effective_at');
  }

  // fca_policy_association_id - computed: true, optional: false, required: false
  public get fcaPolicyAssociationId() {
    return this.getStringAttribute('fca_policy_association_id');
  }

  // fca_policy_id - computed: true, optional: false, required: false
  public get fcaPolicyId() {
    return this.getStringAttribute('fca_policy_id');
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

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // network_resource_id - computed: true, optional: false, required: false
  public get networkResourceId() {
    return this.getStringAttribute('network_resource_id');
  }

  // network_resource_scope_type - computed: true, optional: false, required: false
  public get networkResourceScopeType() {
    return this.getStringAttribute('network_resource_scope_type');
  }

  // owner_account - computed: true, optional: false, required: false
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
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
