/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerContextStoreAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the context store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association#context_store_id NetworkmanagerContextStoreAssociation#context_store_id}
  */
  readonly contextStoreId: string;
  /**
  * The ARN of the Transit Gateway to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association#resource_arn NetworkmanagerContextStoreAssociation#resource_arn}
  */
  readonly resourceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association awscc_networkmanager_context_store_association}
*/
export class NetworkmanagerContextStoreAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_context_store_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerContextStoreAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerContextStoreAssociation to import
  * @param importFromId The id of the existing NetworkmanagerContextStoreAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerContextStoreAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_context_store_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_context_store_association awscc_networkmanager_context_store_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerContextStoreAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerContextStoreAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_context_store_association',
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
    this._contextStoreId = config.contextStoreId;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_store_id - computed: false, optional: false, required: true
  private _contextStoreId?: string; 
  public get contextStoreId() {
    return this.getStringAttribute('context_store_id');
  }
  public set contextStoreId(value: string) {
    this._contextStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextStoreIdInput() {
    return this._contextStoreId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_store_id: cdktn.stringToTerraform(this._contextStoreId),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_store_id: {
        value: cdktn.stringToHclTerraform(this._contextStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
