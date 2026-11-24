/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerEndpointPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the endpoint the policy is attached to. The endpoint must be in the same account and Region as the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy#endpoint_arn SagemakerEndpointPolicy#endpoint_arn}
  */
  readonly endpointArn: string;
  /**
  * The resource policy document, as a JSON object. The service returns the document in its canonical form, so specify principals as full ARNs (for example arn:aws:iam::111122223333:root) and keep the form the service returns, to avoid drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy#policy_document SagemakerEndpointPolicy#policy_document}
  */
  readonly policyDocument: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy awscc_sagemaker_endpoint_policy}
*/
export class SagemakerEndpointPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_endpoint_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerEndpointPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerEndpointPolicy to import
  * @param importFromId The id of the existing SagemakerEndpointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerEndpointPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_endpoint_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_endpoint_policy awscc_sagemaker_endpoint_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_endpoint_policy',
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
    this._endpointArn = config.endpointArn;
    this._policyDocument = config.policyDocument;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_arn - computed: false, optional: false, required: true
  private _endpointArn?: string; 
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }
  public set endpointArn(value: string) {
    this._endpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointArnInput() {
    return this._endpointArn;
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_arn: cdktn.stringToTerraform(this._endpointArn),
      policy_document: cdktn.stringToTerraform(this._policyDocument),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_arn: {
        value: cdktn.stringToHclTerraform(this._endpointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_document: {
        value: cdktn.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
