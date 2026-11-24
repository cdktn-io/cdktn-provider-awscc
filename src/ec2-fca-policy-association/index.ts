/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2FcaPolicyAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the FCA policy to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#fca_policy_id Ec2FcaPolicyAssociation#fca_policy_id}
  */
  readonly fcaPolicyId: string;
  /**
  * The ID of the network resource to associate the FCA policy with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#network_resource_id Ec2FcaPolicyAssociation#network_resource_id}
  */
  readonly networkResourceId: string;
  /**
  * Associate by scope instead of directly. When set, NetworkResourceId is the ID of the scope (an account ID, a VPC ID, or a subnet ID) and the association covers every eligible network resource in that scope; when omitted, NetworkResourceId is a direct network resource (for example a NAT gateway or instance) and must match the policy's NetworkResourceType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#network_resource_scope_type Ec2FcaPolicyAssociation#network_resource_scope_type}
  */
  readonly networkResourceScopeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association awscc_ec2_fca_policy_association}
*/
export class Ec2FcaPolicyAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_fca_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2FcaPolicyAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2FcaPolicyAssociation to import
  * @param importFromId The id of the existing Ec2FcaPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2FcaPolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_fca_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy_association awscc_ec2_fca_policy_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2FcaPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2FcaPolicyAssociationConfig) {
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
    this._fcaPolicyId = config.fcaPolicyId;
    this._networkResourceId = config.networkResourceId;
    this._networkResourceScopeType = config.networkResourceScopeType;
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

  // fca_policy_id - computed: false, optional: false, required: true
  private _fcaPolicyId?: string; 
  public get fcaPolicyId() {
    return this.getStringAttribute('fca_policy_id');
  }
  public set fcaPolicyId(value: string) {
    this._fcaPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fcaPolicyIdInput() {
    return this._fcaPolicyId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // network_resource_id - computed: false, optional: false, required: true
  private _networkResourceId?: string; 
  public get networkResourceId() {
    return this.getStringAttribute('network_resource_id');
  }
  public set networkResourceId(value: string) {
    this._networkResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceIdInput() {
    return this._networkResourceId;
  }

  // network_resource_scope_type - computed: true, optional: true, required: false
  private _networkResourceScopeType?: string; 
  public get networkResourceScopeType() {
    return this.getStringAttribute('network_resource_scope_type');
  }
  public set networkResourceScopeType(value: string) {
    this._networkResourceScopeType = value;
  }
  public resetNetworkResourceScopeType() {
    this._networkResourceScopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceScopeTypeInput() {
    return this._networkResourceScopeType;
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
      fca_policy_id: cdktn.stringToTerraform(this._fcaPolicyId),
      network_resource_id: cdktn.stringToTerraform(this._networkResourceId),
      network_resource_scope_type: cdktn.stringToTerraform(this._networkResourceScopeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fca_policy_id: {
        value: cdktn.stringToHclTerraform(this._fcaPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_resource_id: {
        value: cdktn.stringToHclTerraform(this._networkResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_resource_scope_type: {
        value: cdktn.stringToHclTerraform(this._networkResourceScopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
