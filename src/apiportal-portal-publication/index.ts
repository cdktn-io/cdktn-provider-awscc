/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalPortalPublicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Customer-supplied change-trigger string. Any change forces a republish on UpdateHandler. Customers may set this to a literal token, a CFN parameter, or a Fn::Sub-composed string (for example, a concatenation of dependent resources' UpdatedAt attributes) to chain republish through CFN's dependency graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication#change_token ApiportalPortalPublication#change_token}
  */
  readonly changeToken: string;
  /**
  * A description of the changes made in this published version. Forwarded to PublishPortal.description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication#description ApiportalPortalPublication#description}
  */
  readonly description?: string;
  /**
  * The ARN of the parent portal that this PortalPublication targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication#portal_arn ApiportalPortalPublication#portal_arn}
  */
  readonly portalArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication awscc_apiportal_portal_publication}
*/
export class ApiportalPortalPublication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_portal_publication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalPortalPublication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalPortalPublication to import
  * @param importFromId The id of the existing ApiportalPortalPublication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalPortalPublication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_portal_publication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal_publication awscc_apiportal_portal_publication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalPortalPublicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalPortalPublicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_portal_publication',
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
    this._changeToken = config.changeToken;
    this._description = config.description;
    this._portalArn = config.portalArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_token - computed: false, optional: false, required: true
  private _changeToken?: string; 
  public get changeToken() {
    return this.getStringAttribute('change_token');
  }
  public set changeToken(value: string) {
    this._changeToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTokenInput() {
    return this._changeToken;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // portal_arn - computed: false, optional: false, required: true
  private _portalArn?: string; 
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }
  public set portalArn(value: string) {
    this._portalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalArnInput() {
    return this._portalArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_token: cdktn.stringToTerraform(this._changeToken),
      description: cdktn.stringToTerraform(this._description),
      portal_arn: cdktn.stringToTerraform(this._portalArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_token: {
        value: cdktn.stringToHclTerraform(this._changeToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_arn: {
        value: cdktn.stringToHclTerraform(this._portalArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
