/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConfigOrganizationConfigRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#id DataAwsccConfigOrganizationConfigRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {
}

export function dataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataToTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataToHclTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // debug_log_delivery_accounts - computed: true, optional: false, required: false
  public get debugLogDeliveryAccounts() {
    return this.getListAttribute('debug_log_delivery_accounts');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_parameters - computed: true, optional: false, required: false
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }

  // organization_config_rule_trigger_types - computed: true, optional: false, required: false
  public get organizationConfigRuleTriggerTypes() {
    return this.getListAttribute('organization_config_rule_trigger_types');
  }

  // policy_text - computed: true, optional: false, required: false
  public get policyText() {
    return this.getStringAttribute('policy_text');
  }

  // resource_id_scope - computed: true, optional: false, required: false
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }

  // resource_types_scope - computed: true, optional: false, required: false
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // tag_key_scope - computed: true, optional: false, required: false
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }

  // tag_value_scope - computed: true, optional: false, required: false
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
}
export interface DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {
}

export function dataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataToTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataToHclTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_parameters - computed: true, optional: false, required: false
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }

  // maximum_execution_frequency - computed: true, optional: false, required: false
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }

  // organization_config_rule_trigger_types - computed: true, optional: false, required: false
  public get organizationConfigRuleTriggerTypes() {
    return this.getListAttribute('organization_config_rule_trigger_types');
  }

  // resource_id_scope - computed: true, optional: false, required: false
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }

  // resource_types_scope - computed: true, optional: false, required: false
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }

  // tag_key_scope - computed: true, optional: false, required: false
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }

  // tag_value_scope - computed: true, optional: false, required: false
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
}
export interface DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {
}

export function dataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataToTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataToHclTerraform(struct?: DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_parameters - computed: true, optional: false, required: false
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }

  // maximum_execution_frequency - computed: true, optional: false, required: false
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }

  // resource_id_scope - computed: true, optional: false, required: false
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }

  // resource_types_scope - computed: true, optional: false, required: false
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }

  // rule_identifier - computed: true, optional: false, required: false
  public get ruleIdentifier() {
    return this.getStringAttribute('rule_identifier');
  }

  // tag_key_scope - computed: true, optional: false, required: false
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }

  // tag_value_scope - computed: true, optional: false, required: false
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule awscc_config_organization_config_rule}
*/
export class DataAwsccConfigOrganizationConfigRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_organization_config_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConfigOrganizationConfigRule to import
  * @param importFromId The id of the existing DataAwsccConfigOrganizationConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConfigOrganizationConfigRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_organization_config_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule awscc_config_organization_config_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigOrganizationConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigOrganizationConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_organization_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
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

  // excluded_accounts - computed: true, optional: false, required: false
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
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

  // organization_config_rule_arn - computed: true, optional: false, required: false
  public get organizationConfigRuleArn() {
    return this.getStringAttribute('organization_config_rule_arn');
  }

  // organization_config_rule_name - computed: true, optional: false, required: false
  public get organizationConfigRuleName() {
    return this.getStringAttribute('organization_config_rule_name');
  }

  // organization_custom_policy_rule_metadata - computed: true, optional: false, required: false
  private _organizationCustomPolicyRuleMetadata = new DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(this, "organization_custom_policy_rule_metadata");
  public get organizationCustomPolicyRuleMetadata() {
    return this._organizationCustomPolicyRuleMetadata;
  }

  // organization_custom_rule_metadata - computed: true, optional: false, required: false
  private _organizationCustomRuleMetadata = new DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(this, "organization_custom_rule_metadata");
  public get organizationCustomRuleMetadata() {
    return this._organizationCustomRuleMetadata;
  }

  // organization_managed_rule_metadata - computed: true, optional: false, required: false
  private _organizationManagedRuleMetadata = new DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(this, "organization_managed_rule_metadata");
  public get organizationManagedRuleMetadata() {
    return this._organizationManagedRuleMetadata;
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
