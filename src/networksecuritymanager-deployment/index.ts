/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of policies associated with this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}
  */
  readonly associatedPolicyList?: NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] | cdktn.IResolvable;
  /**
  * List of scopes associated with this deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}
  */
  readonly associatedScopeList?: NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] | cdktn.IResolvable;
  /**
  * Configuration settings for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}
  */
  readonly deploymentConfiguration?: NetworksecuritymanagerDeploymentDeploymentConfiguration;
  /**
  * A description of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}
  */
  readonly deploymentDescription?: string;
  /**
  * The name of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * The tags associated with the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}
  */
  readonly tags?: NetworksecuritymanagerDeploymentTags[] | cdktn.IResolvable;
}
export interface NetworksecuritymanagerDeploymentAssociatedPolicyListStruct {
  /**
  * ARN of the associated policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}
  */
  readonly policyArn?: string;
}

export function networksecuritymanagerDeploymentAssociatedPolicyListStructToTerraform(struct?: NetworksecuritymanagerDeploymentAssociatedPolicyListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_arn: cdktn.stringToTerraform(struct!.policyArn),
  }
}


export function networksecuritymanagerDeploymentAssociatedPolicyListStructToHclTerraform(struct?: NetworksecuritymanagerDeploymentAssociatedPolicyListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_arn: {
      value: cdktn.stringToHclTerraform(struct!.policyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworksecuritymanagerDeploymentAssociatedPolicyListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArn = this._policyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerDeploymentAssociatedPolicyListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyArn = value.policyArn;
    }
  }

  // policy_arn - computed: true, optional: true, required: false
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }
}

export class NetworksecuritymanagerDeploymentAssociatedPolicyListStructList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference {
    return new NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerDeploymentAssociatedScopeListStruct {
  /**
  * ARN of the associated scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}
  */
  readonly scopeArn?: string;
}

export function networksecuritymanagerDeploymentAssociatedScopeListStructToTerraform(struct?: NetworksecuritymanagerDeploymentAssociatedScopeListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_arn: cdktn.stringToTerraform(struct!.scopeArn),
  }
}


export function networksecuritymanagerDeploymentAssociatedScopeListStructToHclTerraform(struct?: NetworksecuritymanagerDeploymentAssociatedScopeListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_arn: {
      value: cdktn.stringToHclTerraform(struct!.scopeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworksecuritymanagerDeploymentAssociatedScopeListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeArn = this._scopeArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerDeploymentAssociatedScopeListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeArn = value.scopeArn;
    }
  }

  // scope_arn - computed: true, optional: true, required: false
  private _scopeArn?: string; 
  public get scopeArn() {
    return this.getStringAttribute('scope_arn');
  }
  public set scopeArn(value: string) {
    this._scopeArn = value;
  }
  public resetScopeArn() {
    this._scopeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeArnInput() {
    return this._scopeArn;
  }
}

export class NetworksecuritymanagerDeploymentAssociatedScopeListStructList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference {
    return new NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerDeploymentDeploymentConfiguration {
  /**
  * Whether cross-account visibility is enabled for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}
  */
  readonly enableCrossAccountVisibility?: boolean | cdktn.IResolvable;
}

export function networksecuritymanagerDeploymentDeploymentConfigurationToTerraform(struct?: NetworksecuritymanagerDeploymentDeploymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_cross_account_visibility: cdktn.booleanToTerraform(struct!.enableCrossAccountVisibility),
  }
}


export function networksecuritymanagerDeploymentDeploymentConfigurationToHclTerraform(struct?: NetworksecuritymanagerDeploymentDeploymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_cross_account_visibility: {
      value: cdktn.booleanToHclTerraform(struct!.enableCrossAccountVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworksecuritymanagerDeploymentDeploymentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCrossAccountVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrossAccountVisibility = this._enableCrossAccountVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerDeploymentDeploymentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCrossAccountVisibility = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCrossAccountVisibility = value.enableCrossAccountVisibility;
    }
  }

  // enable_cross_account_visibility - computed: true, optional: true, required: false
  private _enableCrossAccountVisibility?: boolean | cdktn.IResolvable; 
  public get enableCrossAccountVisibility() {
    return this.getBooleanAttribute('enable_cross_account_visibility');
  }
  public set enableCrossAccountVisibility(value: boolean | cdktn.IResolvable) {
    this._enableCrossAccountVisibility = value;
  }
  public resetEnableCrossAccountVisibility() {
    this._enableCrossAccountVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossAccountVisibilityInput() {
    return this._enableCrossAccountVisibility;
  }
}
export interface NetworksecuritymanagerDeploymentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}
  */
  readonly value?: string;
}

export function networksecuritymanagerDeploymentTagsToTerraform(struct?: NetworksecuritymanagerDeploymentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networksecuritymanagerDeploymentTagsToHclTerraform(struct?: NetworksecuritymanagerDeploymentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerDeploymentTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworksecuritymanagerDeploymentTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerDeploymentTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworksecuritymanagerDeploymentTagsList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerDeploymentTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworksecuritymanagerDeploymentTagsOutputReference {
    return new NetworksecuritymanagerDeploymentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}
*/
export class NetworksecuritymanagerDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networksecuritymanager_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerDeployment to import
  * @param importFromId The id of the existing NetworksecuritymanagerDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networksecuritymanager_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networksecuritymanager_deployment',
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
    this._associatedPolicyList.internalValue = config.associatedPolicyList;
    this._associatedScopeList.internalValue = config.associatedScopeList;
    this._deploymentConfiguration.internalValue = config.deploymentConfiguration;
    this._deploymentDescription = config.deploymentDescription;
    this._deploymentName = config.deploymentName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_policy_list - computed: true, optional: true, required: false
  private _associatedPolicyList = new NetworksecuritymanagerDeploymentAssociatedPolicyListStructList(this, "associated_policy_list", false);
  public get associatedPolicyList() {
    return this._associatedPolicyList;
  }
  public putAssociatedPolicyList(value: NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[] | cdktn.IResolvable) {
    this._associatedPolicyList.internalValue = value;
  }
  public resetAssociatedPolicyList() {
    this._associatedPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedPolicyListInput() {
    return this._associatedPolicyList.internalValue;
  }

  // associated_scope_list - computed: true, optional: true, required: false
  private _associatedScopeList = new NetworksecuritymanagerDeploymentAssociatedScopeListStructList(this, "associated_scope_list", false);
  public get associatedScopeList() {
    return this._associatedScopeList;
  }
  public putAssociatedScopeList(value: NetworksecuritymanagerDeploymentAssociatedScopeListStruct[] | cdktn.IResolvable) {
    this._associatedScopeList.internalValue = value;
  }
  public resetAssociatedScopeList() {
    this._associatedScopeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedScopeListInput() {
    return this._associatedScopeList.internalValue;
  }

  // deployment_arn - computed: true, optional: false, required: false
  public get deploymentArn() {
    return this.getStringAttribute('deployment_arn');
  }

  // deployment_configuration - computed: true, optional: true, required: false
  private _deploymentConfiguration = new NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(this, "deployment_configuration");
  public get deploymentConfiguration() {
    return this._deploymentConfiguration;
  }
  public putDeploymentConfiguration(value: NetworksecuritymanagerDeploymentDeploymentConfiguration) {
    this._deploymentConfiguration.internalValue = value;
  }
  public resetDeploymentConfiguration() {
    this._deploymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigurationInput() {
    return this._deploymentConfiguration.internalValue;
  }

  // deployment_description - computed: true, optional: true, required: false
  private _deploymentDescription?: string; 
  public get deploymentDescription() {
    return this.getStringAttribute('deployment_description');
  }
  public set deploymentDescription(value: string) {
    this._deploymentDescription = value;
  }
  public resetDeploymentDescription() {
    this._deploymentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDescriptionInput() {
    return this._deploymentDescription;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworksecuritymanagerDeploymentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworksecuritymanagerDeploymentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_policy_list: cdktn.listMapper(networksecuritymanagerDeploymentAssociatedPolicyListStructToTerraform, false)(this._associatedPolicyList.internalValue),
      associated_scope_list: cdktn.listMapper(networksecuritymanagerDeploymentAssociatedScopeListStructToTerraform, false)(this._associatedScopeList.internalValue),
      deployment_configuration: networksecuritymanagerDeploymentDeploymentConfigurationToTerraform(this._deploymentConfiguration.internalValue),
      deployment_description: cdktn.stringToTerraform(this._deploymentDescription),
      deployment_name: cdktn.stringToTerraform(this._deploymentName),
      tags: cdktn.listMapper(networksecuritymanagerDeploymentTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_policy_list: {
        value: cdktn.listMapperHcl(networksecuritymanagerDeploymentAssociatedPolicyListStructToHclTerraform, false)(this._associatedPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerDeploymentAssociatedPolicyListStructList",
      },
      associated_scope_list: {
        value: cdktn.listMapperHcl(networksecuritymanagerDeploymentAssociatedScopeListStructToHclTerraform, false)(this._associatedScopeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerDeploymentAssociatedScopeListStructList",
      },
      deployment_configuration: {
        value: networksecuritymanagerDeploymentDeploymentConfigurationToHclTerraform(this._deploymentConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworksecuritymanagerDeploymentDeploymentConfiguration",
      },
      deployment_description: {
        value: cdktn.stringToHclTerraform(this._deploymentDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_name: {
        value: cdktn.stringToHclTerraform(this._deploymentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networksecuritymanagerDeploymentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworksecuritymanagerDeploymentTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
