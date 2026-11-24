/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalDiscoveryEnablementConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the account discovery configuration or organization discovery configuration to run discovery for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_enablement#discovery_enablement_id ApiportalDiscoveryEnablement#discovery_enablement_id}
  */
  readonly discoveryEnablementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_enablement awscc_apiportal_discovery_enablement}
*/
export class ApiportalDiscoveryEnablement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_discovery_enablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalDiscoveryEnablement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalDiscoveryEnablement to import
  * @param importFromId The id of the existing ApiportalDiscoveryEnablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_enablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalDiscoveryEnablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_discovery_enablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_discovery_enablement awscc_apiportal_discovery_enablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalDiscoveryEnablementConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalDiscoveryEnablementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_discovery_enablement',
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
    this._discoveryEnablementId = config.discoveryEnablementId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovery_enablement_id - computed: false, optional: false, required: true
  private _discoveryEnablementId?: string; 
  public get discoveryEnablementId() {
    return this.getStringAttribute('discovery_enablement_id');
  }
  public set discoveryEnablementId(value: string) {
    this._discoveryEnablementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEnablementIdInput() {
    return this._discoveryEnablementId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovery_enablement_id: cdktn.stringToTerraform(this._discoveryEnablementId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_enablement_id: {
        value: cdktn.stringToHclTerraform(this._discoveryEnablementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
