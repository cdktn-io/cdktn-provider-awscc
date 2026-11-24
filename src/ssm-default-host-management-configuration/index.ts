/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmDefaultHostManagementConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the customer-provided IAM role to register for DHMC. Required when PermissionModel is SELF_MANAGED and must not be set when PermissionModel is SERVICE_MANAGED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#customer_managed_role_arn SsmDefaultHostManagementConfiguration#customer_managed_role_arn}
  */
  readonly customerManagedRoleArn?: string;
  /**
  * The permission model used to enable DHMC. SERVICE_MANAGED lets SSM create and manage the DHMC IAM role on your behalf. SELF_MANAGED registers an IAM role that you provide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#permission_model SsmDefaultHostManagementConfiguration#permission_model}
  */
  readonly permissionModel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration}
*/
export class SsmDefaultHostManagementConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssm_default_host_management_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmDefaultHostManagementConfiguration to import
  * @param importFromId The id of the existing SsmDefaultHostManagementConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmDefaultHostManagementConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_default_host_management_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmDefaultHostManagementConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmDefaultHostManagementConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_default_host_management_configuration',
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
    this._customerManagedRoleArn = config.customerManagedRoleArn;
    this._permissionModel = config.permissionModel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_role_arn - computed: true, optional: true, required: false
  private _customerManagedRoleArn?: string; 
  public get customerManagedRoleArn() {
    return this.getStringAttribute('customer_managed_role_arn');
  }
  public set customerManagedRoleArn(value: string) {
    this._customerManagedRoleArn = value;
  }
  public resetCustomerManagedRoleArn() {
    this._customerManagedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedRoleArnInput() {
    return this._customerManagedRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // last_modified_user - computed: true, optional: false, required: false
  public get lastModifiedUser() {
    return this.getStringAttribute('last_modified_user');
  }

  // permission_model - computed: false, optional: false, required: true
  private _permissionModel?: string; 
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }
  public set permissionModel(value: string) {
    this._permissionModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // setting_arn - computed: true, optional: false, required: false
  public get settingArn() {
    return this.getStringAttribute('setting_arn');
  }

  // setting_id - computed: true, optional: false, required: false
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_managed_role_arn: cdktn.stringToTerraform(this._customerManagedRoleArn),
      permission_model: cdktn.stringToTerraform(this._permissionModel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_managed_role_arn: {
        value: cdktn.stringToHclTerraform(this._customerManagedRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_model: {
        value: cdktn.stringToHclTerraform(this._permissionModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
