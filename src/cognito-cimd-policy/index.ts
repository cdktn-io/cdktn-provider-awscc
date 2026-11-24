/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoCimdPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#cache_duration CognitoCimdPolicy#cache_duration}
  */
  readonly cacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#client_id CognitoCimdPolicy#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#policy_name CognitoCimdPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#url_patterns CognitoCimdPolicy#url_patterns}
  */
  readonly urlPatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#user_pool_id CognitoCimdPolicy#user_pool_id}
  */
  readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy awscc_cognito_cimd_policy}
*/
export class CognitoCimdPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_cimd_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoCimdPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoCimdPolicy to import
  * @param importFromId The id of the existing CognitoCimdPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoCimdPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_cimd_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_cimd_policy awscc_cognito_cimd_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoCimdPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoCimdPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_cimd_policy',
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
    this._cacheDuration = config.cacheDuration;
    this._clientId = config.clientId;
    this._policyName = config.policyName;
    this._urlPatterns = config.urlPatterns;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_duration - computed: true, optional: true, required: false
  private _cacheDuration?: number; 
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }
  public set cacheDuration(value: number) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cimd_policy_id - computed: true, optional: false, required: false
  public get cimdPolicyId() {
    return this.getStringAttribute('cimd_policy_id');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // url_patterns - computed: false, optional: false, required: true
  private _urlPatterns?: string[]; 
  public get urlPatterns() {
    return this.getListAttribute('url_patterns');
  }
  public set urlPatterns(value: string[]) {
    this._urlPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternsInput() {
    return this._urlPatterns;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_duration: cdktn.numberToTerraform(this._cacheDuration),
      client_id: cdktn.stringToTerraform(this._clientId),
      policy_name: cdktn.stringToTerraform(this._policyName),
      url_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._urlPatterns),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_duration: {
        value: cdktn.numberToHclTerraform(this._cacheDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktn.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_patterns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._urlPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
