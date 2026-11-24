/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalProductManagedApiAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The identifiers of the Managed APIs to associate with the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association#managed_api_ids ApiportalProductManagedApiAssociation#managed_api_ids}
  */
  readonly managedApiIds: string[];
  /**
  * The identifier of the product. The product must use CUSTOM API selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association#product_id ApiportalProductManagedApiAssociation#product_id}
  */
  readonly productId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association awscc_apiportal_product_managed_api_association}
*/
export class ApiportalProductManagedApiAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_product_managed_api_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalProductManagedApiAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalProductManagedApiAssociation to import
  * @param importFromId The id of the existing ApiportalProductManagedApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalProductManagedApiAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_product_managed_api_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_managed_api_association awscc_apiportal_product_managed_api_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalProductManagedApiAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalProductManagedApiAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_product_managed_api_association',
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
    this._managedApiIds = config.managedApiIds;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_api_ids - computed: false, optional: false, required: true
  private _managedApiIds?: string[]; 
  public get managedApiIds() {
    return cdktn.Fn.tolist(this.getListAttribute('managed_api_ids'));
  }
  public set managedApiIds(value: string[]) {
    this._managedApiIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedApiIdsInput() {
    return this._managedApiIds;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_api_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedApiIds),
      product_id: cdktn.stringToTerraform(this._productId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      managed_api_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedApiIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      product_id: {
        value: cdktn.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
