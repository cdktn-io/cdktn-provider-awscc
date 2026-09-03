/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AgentregistryRegistryRecordConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#description AgentregistryRegistryRecord#description}
  */
  readonly description?: string;
  /**
  * The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#descriptors AgentregistryRegistryRecord#descriptors}
  */
  readonly descriptors: AgentregistryRegistryRecordDescriptors;
  /**
  * The human-readable display name of the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#display_name AgentregistryRegistryRecord#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#name AgentregistryRegistryRecord#name}
  */
  readonly name: string;
  /**
  * The type of the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#record_type AgentregistryRegistryRecord#record_type}
  */
  readonly recordType: string;
  /**
  * The version of the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#record_version AgentregistryRegistryRecord#record_version}
  */
  readonly recordVersion?: string;
  /**
  * The identifier of the registry in which to create the record. You can specify either the registry ID or the registry Amazon Resource Name (ARN). Use the ARN form to reference a registry shared from another account via AWS Resource Access Manager (RAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#registry_id AgentregistryRegistryRecord#registry_id}
  */
  readonly registryId?: string;
  /**
  * Tags to assign to the registry record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#tags AgentregistryRegistryRecord#tags}
  */
  readonly tags?: AgentregistryRegistryRecordTags[] | cdktn.IResolvable;
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider {
  /**
  * The SigV4 signing region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#region AgentregistryRegistryRecord#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#role_arn AgentregistryRegistryRecord#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The SigV4 signing service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#service AgentregistryRegistryRecord#service}
  */
  readonly service?: string;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._service = value.service;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider {
  /**
  * Additional custom parameters for the OAuth flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#custom_parameters AgentregistryRegistryRecord#custom_parameters}
  */
  readonly customParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#grant_type AgentregistryRegistryRecord#grant_type}
  */
  readonly grantType?: string;
  /**
  * The ARN of the OAuth credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#provider_arn AgentregistryRegistryRecord#provider_arn}
  */
  readonly providerArn?: string;
  /**
  * OAuth scopes to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#scopes AgentregistryRegistryRecord#scopes}
  */
  readonly scopes?: string[];
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customParameters = undefined;
      this._grantType = undefined;
      this._providerArn = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customParameters = value.customParameters;
      this._grantType = value.grantType;
      this._providerArn = value.providerArn;
      this._scopes = value.scopes;
    }
  }

  // custom_parameters - computed: true, optional: true, required: false
  private _customParameters?: { [key: string]: string }; 
  public get customParameters() {
    return this.getStringMapAttribute('custom_parameters');
  }
  public set customParameters(value: { [key: string]: string }) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // provider_arn - computed: true, optional: true, required: false
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  public resetProviderArn() {
    this._providerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider {
  /**
  * IAM credential provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#iam_credential_provider AgentregistryRegistryRecord#iam_credential_provider}
  */
  readonly iamCredentialProvider?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
  /**
  * OAuth credential provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#oauth_credential_provider AgentregistryRegistryRecord#oauth_credential_provider}
  */
  readonly oauthCredentialProvider?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_credential_provider: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToTerraform(struct!.iamCredentialProvider),
    oauth_credential_provider: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToTerraform(struct!.oauthCredentialProvider),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_credential_provider: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToHclTerraform(struct!.iamCredentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider",
    },
    oauth_credential_provider: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToHclTerraform(struct!.oauthCredentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamCredentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamCredentialProvider = this._iamCredentialProvider?.internalValue;
    }
    if (this._oauthCredentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthCredentialProvider = this._oauthCredentialProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamCredentialProvider.internalValue = undefined;
      this._oauthCredentialProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamCredentialProvider.internalValue = value.iamCredentialProvider;
      this._oauthCredentialProvider.internalValue = value.oauthCredentialProvider;
    }
  }

  // iam_credential_provider - computed: true, optional: true, required: false
  private _iamCredentialProvider = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(this, "iam_credential_provider");
  public get iamCredentialProvider() {
    return this._iamCredentialProvider;
  }
  public putIamCredentialProvider(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider) {
    this._iamCredentialProvider.internalValue = value;
  }
  public resetIamCredentialProvider() {
    this._iamCredentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialProviderInput() {
    return this._iamCredentialProvider.internalValue;
  }

  // oauth_credential_provider - computed: true, optional: true, required: false
  private _oauthCredentialProvider = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference(this, "oauth_credential_provider");
  public get oauthCredentialProvider() {
    return this._oauthCredentialProvider;
  }
  public putOauthCredentialProvider(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider) {
    this._oauthCredentialProvider.internalValue = value;
  }
  public resetOauthCredentialProvider() {
    this._oauthCredentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCredentialProviderInput() {
    return this._oauthCredentialProvider.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations {
  /**
  * The credential provider details. Specify exactly one member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider AgentregistryRegistryRecord#credential_provider}
  */
  readonly credentialProvider?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider_type AgentregistryRegistryRecord#credential_provider_type}
  */
  readonly credentialProviderType?: string;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_provider: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderToTerraform(struct!.credentialProvider),
    credential_provider_type: cdktn.stringToTerraform(struct!.credentialProviderType),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_provider: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderToHclTerraform(struct!.credentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider",
    },
    credential_provider_type: {
      value: cdktn.stringToHclTerraform(struct!.credentialProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProvider = this._credentialProvider?.internalValue;
    }
    if (this._credentialProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderType = this._credentialProviderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialProvider.internalValue = undefined;
      this._credentialProviderType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialProvider.internalValue = value.credentialProvider;
      this._credentialProviderType = value.credentialProviderType;
    }
  }

  // credential_provider - computed: true, optional: true, required: false
  private _credentialProvider = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(this, "credential_provider");
  public get credentialProvider() {
    return this._credentialProvider;
  }
  public putCredentialProvider(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsCredentialProvider) {
    this._credentialProvider.internalValue = value;
  }
  public resetCredentialProvider() {
    this._credentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderInput() {
    return this._credentialProvider.internalValue;
  }

  // credential_provider_type - computed: true, optional: true, required: false
  private _credentialProviderType?: string; 
  public get credentialProviderType() {
    return this.getStringAttribute('credential_provider_type');
  }
  public set credentialProviderType(value: string) {
    this._credentialProviderType = value;
  }
  public resetCredentialProviderType() {
    this._credentialProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderTypeInput() {
    return this._credentialProviderType;
  }
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList extends cdktn.ComplexList {
  public internalValue? : AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable

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
  public get(index: number): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference {
    return new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl {
  /**
  * The credential providers used to authenticate when fetching descriptor content from the source URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider_configurations AgentregistryRegistryRecord#credential_provider_configurations}
  */
  readonly credentialProviderConfigurations?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable;
  /**
  * URL source for descriptor content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#url AgentregistryRegistryRecord#url}
  */
  readonly url?: string;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_provider_configurations: cdktn.listMapper(agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsToTerraform, false)(struct!.credentialProviderConfigurations),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_provider_configurations: {
      value: cdktn.listMapperHcl(agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsToHclTerraform, false)(struct!.credentialProviderConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialProviderConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderConfigurations = this._credentialProviderConfigurations?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialProviderConfigurations.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialProviderConfigurations.internalValue = value.credentialProviderConfigurations;
      this._url = value.url;
    }
  }

  // credential_provider_configurations - computed: true, optional: true, required: false
  private _credentialProviderConfigurations = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurationsList(this, "credential_provider_configurations", false);
  public get credentialProviderConfigurations() {
    return this._credentialProviderConfigurations;
  }
  public putCredentialProviderConfigurations(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable) {
    this._credentialProviderConfigurations.internalValue = value;
  }
  public resetCredentialProviderConfigurations() {
    this._credentialProviderConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderConfigurationsInput() {
    return this._credentialProviderConfigurations.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCardSource {
  /**
  * URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#from_url AgentregistryRegistryRecord#from_url}
  */
  readonly fromUrl?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_url: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlToTerraform(struct!.fromUrl),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardSourceToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_url: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlToHclTerraform(struct!.fromUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCardSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromUrl = this._fromUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = value.fromUrl;
    }
  }

  // from_url - computed: true, optional: true, required: false
  private _fromUrl = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrlOutputReference(this, "from_url");
  public get fromUrl() {
    return this._fromUrl;
  }
  public putFromUrl(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceFromUrl) {
    this._fromUrl.internalValue = value;
  }
  public resetFromUrl() {
    this._fromUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromUrlInput() {
    return this._fromUrl.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsA2AAgentCard {
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
  /**
  * Version of the descriptor type schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data_schema_version AgentregistryRegistryRecord#data_schema_version}
  */
  readonly dataSchemaVersion?: string;
  /**
  * The source configuration that defines where descriptor content is retrieved from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#source AgentregistryRegistryRecord#source}
  */
  readonly source?: AgentregistryRegistryRecordDescriptorsA2AAgentCardSource;
}

export function agentregistryRegistryRecordDescriptorsA2AAgentCardToTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
    source: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceToTerraform(struct!.source),
  }
}


export function agentregistryRegistryRecordDescriptorsA2AAgentCardToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsA2AAgentCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCardSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsA2AAgentCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsA2AAgentCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._dataSchemaVersion = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._dataSchemaVersion = value.dataSchemaVersion;
      this._source.internalValue = value.source;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_schema_version - computed: true, optional: true, required: false
  private _dataSchemaVersion?: string; 
  public get dataSchemaVersion() {
    return this.getStringAttribute('data_schema_version');
  }
  public set dataSchemaVersion(value: string) {
    this._dataSchemaVersion = value;
  }
  public resetDataSchemaVersion() {
    this._dataSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaVersionInput() {
    return this._dataSchemaVersion;
  }

  // source - computed: true, optional: true, required: false
  private _source = new AgentregistryRegistryRecordDescriptorsA2AAgentCardSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AgentregistryRegistryRecordDescriptorsA2AAgentCardSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl {
  /**
  * URL source for the SkillMd document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#url AgentregistryRegistryRecord#url}
  */
  readonly url?: string;
}

export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlToTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource {
  /**
  * URL-based source for SkillMd content (sync is skipped; content is provided inline via Data).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#from_url AgentregistryRegistryRecord#from_url}
  */
  readonly fromUrl?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl;
}

export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceToTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_url: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlToTerraform(struct!.fromUrl),
  }
}


export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_url: {
      value: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlToHclTerraform(struct!.fromUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromUrl = this._fromUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = value.fromUrl;
    }
  }

  // from_url - computed: true, optional: true, required: false
  private _fromUrl = new AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrlOutputReference(this, "from_url");
  public get fromUrl() {
    return this._fromUrl;
  }
  public putFromUrl(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceFromUrl) {
    this._fromUrl.internalValue = value;
  }
  public resetFromUrl() {
    this._fromUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromUrlInput() {
    return this._fromUrl.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd {
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
  /**
  * Version of the descriptor type schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data_schema_version AgentregistryRegistryRecord#data_schema_version}
  */
  readonly dataSchemaVersion?: string;
  /**
  * Source configuration for a SkillMd document. Unlike MCP/A2A sources, SkillMd does not support credential providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#source AgentregistryRegistryRecord#source}
  */
  readonly source?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource;
}

export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdToTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
    source: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceToTerraform(struct!.source),
  }
}


export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._dataSchemaVersion = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._dataSchemaVersion = value.dataSchemaVersion;
      this._source.internalValue = value.source;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_schema_version - computed: true, optional: true, required: false
  private _dataSchemaVersion?: string; 
  public get dataSchemaVersion() {
    return this.getStringAttribute('data_schema_version');
  }
  public set dataSchemaVersion(value: string) {
    this._dataSchemaVersion = value;
  }
  public resetDataSchemaVersion() {
    this._dataSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaVersionInput() {
    return this._dataSchemaVersion;
  }

  // source - computed: true, optional: true, required: false
  private _source = new AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData {
  /**
  * Markdown-format descriptor containing an agent skills document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#skill_md AgentregistryRegistryRecord#skill_md}
  */
  readonly skillMd?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd;
}

export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataToTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skill_md: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdToTerraform(struct!.skillMd),
  }
}


export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skill_md: {
      value: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdToHclTerraform(struct!.skillMd),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skillMd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillMd = this._skillMd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skillMd.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skillMd.internalValue = value.skillMd;
    }
  }

  // skill_md - computed: true, optional: true, required: false
  private _skillMd = new AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMdOutputReference(this, "skill_md");
  public get skillMd() {
    return this._skillMd;
  }
  public putSkillMd(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataSkillMd) {
    this._skillMd.internalValue = value;
  }
  public resetSkillMd() {
    this._skillMd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillMdInput() {
    return this._skillMd.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition {
  /**
  * Additional data associated with an agent skills definition descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#additional_data AgentregistryRegistryRecord#additional_data}
  */
  readonly additionalData?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData;
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
  /**
  * Version of the descriptor type schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data_schema_version AgentregistryRegistryRecord#data_schema_version}
  */
  readonly dataSchemaVersion?: string;
}

export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionToTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_data: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataToTerraform(struct!.additionalData),
    data: cdktn.stringToTerraform(struct!.data),
    data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
  }
}


export function agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_data: {
      value: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataToHclTerraform(struct!.additionalData),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData",
    },
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalData = this._additionalData?.internalValue;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalData.internalValue = undefined;
      this._data = undefined;
      this._dataSchemaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalData.internalValue = value.additionalData;
      this._data = value.data;
      this._dataSchemaVersion = value.dataSchemaVersion;
    }
  }

  // additional_data - computed: true, optional: true, required: false
  private _additionalData = new AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalDataOutputReference(this, "additional_data");
  public get additionalData() {
    return this._additionalData;
  }
  public putAdditionalData(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionAdditionalData) {
    this._additionalData.internalValue = value;
  }
  public resetAdditionalData() {
    this._additionalData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDataInput() {
    return this._additionalData.internalValue;
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_schema_version - computed: true, optional: true, required: false
  private _dataSchemaVersion?: string; 
  public get dataSchemaVersion() {
    return this.getStringAttribute('data_schema_version');
  }
  public set dataSchemaVersion(value: string) {
    this._dataSchemaVersion = value;
  }
  public resetDataSchemaVersion() {
    this._dataSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaVersionInput() {
    return this._dataSchemaVersion;
  }
}
export interface AgentregistryRegistryRecordDescriptorsCustom {
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
}

export function agentregistryRegistryRecordDescriptorsCustomToTerraform(struct?: AgentregistryRegistryRecordDescriptorsCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
  }
}


export function agentregistryRegistryRecordDescriptorsCustomToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools {
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
  /**
  * Version of the tools descriptor schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data_schema_version AgentregistryRegistryRecord#data_schema_version}
  */
  readonly dataSchemaVersion?: string;
}

export function agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._dataSchemaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._dataSchemaVersion = value.dataSchemaVersion;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_schema_version - computed: true, optional: true, required: false
  private _dataSchemaVersion?: string; 
  public get dataSchemaVersion() {
    return this.getStringAttribute('data_schema_version');
  }
  public set dataSchemaVersion(value: string) {
    this._dataSchemaVersion = value;
  }
  public resetDataSchemaVersion() {
    this._dataSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaVersionInput() {
    return this._dataSchemaVersion;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData {
  /**
  * The MCP tools descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#tools AgentregistryRegistryRecord#tools}
  */
  readonly tools?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools;
}

export function agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tools: agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsToTerraform(struct!.tools),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tools: {
      value: agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsToHclTerraform(struct!.tools),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tools.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tools.internalValue = value.tools;
    }
  }

  // tools - computed: true, optional: true, required: false
  private _tools = new AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToolsOutputReference(this, "tools");
  public get tools() {
    return this._tools;
  }
  public putTools(value: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataTools) {
    this._tools.internalValue = value;
  }
  public resetTools() {
    this._tools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider {
  /**
  * The SigV4 signing region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#region AgentregistryRegistryRecord#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#role_arn AgentregistryRegistryRecord#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The SigV4 signing service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#service AgentregistryRegistryRecord#service}
  */
  readonly service?: string;
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._service = value.service;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider {
  /**
  * Additional custom parameters for the OAuth flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#custom_parameters AgentregistryRegistryRecord#custom_parameters}
  */
  readonly customParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#grant_type AgentregistryRegistryRecord#grant_type}
  */
  readonly grantType?: string;
  /**
  * The ARN of the OAuth credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#provider_arn AgentregistryRegistryRecord#provider_arn}
  */
  readonly providerArn?: string;
  /**
  * OAuth scopes to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#scopes AgentregistryRegistryRecord#scopes}
  */
  readonly scopes?: string[];
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customParameters = undefined;
      this._grantType = undefined;
      this._providerArn = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customParameters = value.customParameters;
      this._grantType = value.grantType;
      this._providerArn = value.providerArn;
      this._scopes = value.scopes;
    }
  }

  // custom_parameters - computed: true, optional: true, required: false
  private _customParameters?: { [key: string]: string }; 
  public get customParameters() {
    return this.getStringMapAttribute('custom_parameters');
  }
  public set customParameters(value: { [key: string]: string }) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // provider_arn - computed: true, optional: true, required: false
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  public resetProviderArn() {
    this._providerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider {
  /**
  * IAM credential provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#iam_credential_provider AgentregistryRegistryRecord#iam_credential_provider}
  */
  readonly iamCredentialProvider?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider;
  /**
  * OAuth credential provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#oauth_credential_provider AgentregistryRegistryRecord#oauth_credential_provider}
  */
  readonly oauthCredentialProvider?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider;
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_credential_provider: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToTerraform(struct!.iamCredentialProvider),
    oauth_credential_provider: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToTerraform(struct!.oauthCredentialProvider),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_credential_provider: {
      value: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderToHclTerraform(struct!.iamCredentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider",
    },
    oauth_credential_provider: {
      value: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderToHclTerraform(struct!.oauthCredentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamCredentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamCredentialProvider = this._iamCredentialProvider?.internalValue;
    }
    if (this._oauthCredentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthCredentialProvider = this._oauthCredentialProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamCredentialProvider.internalValue = undefined;
      this._oauthCredentialProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamCredentialProvider.internalValue = value.iamCredentialProvider;
      this._oauthCredentialProvider.internalValue = value.oauthCredentialProvider;
    }
  }

  // iam_credential_provider - computed: true, optional: true, required: false
  private _iamCredentialProvider = new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProviderOutputReference(this, "iam_credential_provider");
  public get iamCredentialProvider() {
    return this._iamCredentialProvider;
  }
  public putIamCredentialProvider(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderIamCredentialProvider) {
    this._iamCredentialProvider.internalValue = value;
  }
  public resetIamCredentialProvider() {
    this._iamCredentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialProviderInput() {
    return this._iamCredentialProvider.internalValue;
  }

  // oauth_credential_provider - computed: true, optional: true, required: false
  private _oauthCredentialProvider = new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProviderOutputReference(this, "oauth_credential_provider");
  public get oauthCredentialProvider() {
    return this._oauthCredentialProvider;
  }
  public putOauthCredentialProvider(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOauthCredentialProvider) {
    this._oauthCredentialProvider.internalValue = value;
  }
  public resetOauthCredentialProvider() {
    this._oauthCredentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCredentialProviderInput() {
    return this._oauthCredentialProvider.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations {
  /**
  * The credential provider details. Specify exactly one member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider AgentregistryRegistryRecord#credential_provider}
  */
  readonly credentialProvider?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider_type AgentregistryRegistryRecord#credential_provider_type}
  */
  readonly credentialProviderType?: string;
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_provider: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderToTerraform(struct!.credentialProvider),
    credential_provider_type: cdktn.stringToTerraform(struct!.credentialProviderType),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_provider: {
      value: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderToHclTerraform(struct!.credentialProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider",
    },
    credential_provider_type: {
      value: cdktn.stringToHclTerraform(struct!.credentialProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProvider = this._credentialProvider?.internalValue;
    }
    if (this._credentialProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderType = this._credentialProviderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialProvider.internalValue = undefined;
      this._credentialProviderType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialProvider.internalValue = value.credentialProvider;
      this._credentialProviderType = value.credentialProviderType;
    }
  }

  // credential_provider - computed: true, optional: true, required: false
  private _credentialProvider = new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProviderOutputReference(this, "credential_provider");
  public get credentialProvider() {
    return this._credentialProvider;
  }
  public putCredentialProvider(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsCredentialProvider) {
    this._credentialProvider.internalValue = value;
  }
  public resetCredentialProvider() {
    this._credentialProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderInput() {
    return this._credentialProvider.internalValue;
  }

  // credential_provider_type - computed: true, optional: true, required: false
  private _credentialProviderType?: string; 
  public get credentialProviderType() {
    return this.getStringAttribute('credential_provider_type');
  }
  public set credentialProviderType(value: string) {
    this._credentialProviderType = value;
  }
  public resetCredentialProviderType() {
    this._credentialProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderTypeInput() {
    return this._credentialProviderType;
  }
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList extends cdktn.ComplexList {
  public internalValue? : AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable

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
  public get(index: number): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference {
    return new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl {
  /**
  * The credential providers used to authenticate when fetching descriptor content from the source URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#credential_provider_configurations AgentregistryRegistryRecord#credential_provider_configurations}
  */
  readonly credentialProviderConfigurations?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable;
  /**
  * URL source for descriptor content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#url AgentregistryRegistryRecord#url}
  */
  readonly url?: string;
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_provider_configurations: cdktn.listMapper(agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsToTerraform, false)(struct!.credentialProviderConfigurations),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_provider_configurations: {
      value: cdktn.listMapperHcl(agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsToHclTerraform, false)(struct!.credentialProviderConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialProviderConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderConfigurations = this._credentialProviderConfigurations?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialProviderConfigurations.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialProviderConfigurations.internalValue = value.credentialProviderConfigurations;
      this._url = value.url;
    }
  }

  // credential_provider_configurations - computed: true, optional: true, required: false
  private _credentialProviderConfigurations = new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurationsList(this, "credential_provider_configurations", false);
  public get credentialProviderConfigurations() {
    return this._credentialProviderConfigurations;
  }
  public putCredentialProviderConfigurations(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlCredentialProviderConfigurations[] | cdktn.IResolvable) {
    this._credentialProviderConfigurations.internalValue = value;
  }
  public resetCredentialProviderConfigurations() {
    this._credentialProviderConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderConfigurationsInput() {
    return this._credentialProviderConfigurations.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServerSource {
  /**
  * URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#from_url AgentregistryRegistryRecord#from_url}
  */
  readonly fromUrl?: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl;
}

export function agentregistryRegistryRecordDescriptorsMcpServerSourceToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_url: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlToTerraform(struct!.fromUrl),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerSourceToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServerSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_url: {
      value: agentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlToHclTerraform(struct!.fromUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServerSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromUrl = this._fromUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServerSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromUrl.internalValue = value.fromUrl;
    }
  }

  // from_url - computed: true, optional: true, required: false
  private _fromUrl = new AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrlOutputReference(this, "from_url");
  public get fromUrl() {
    return this._fromUrl;
  }
  public putFromUrl(value: AgentregistryRegistryRecordDescriptorsMcpServerSourceFromUrl) {
    this._fromUrl.internalValue = value;
  }
  public resetFromUrl() {
    this._fromUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromUrlInput() {
    return this._fromUrl.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptorsMcpServer {
  /**
  * Additional data associated with an MCP server descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#additional_data AgentregistryRegistryRecord#additional_data}
  */
  readonly additionalData?: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData;
  /**
  * Descriptor payload data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data AgentregistryRegistryRecord#data}
  */
  readonly data?: string;
  /**
  * Version of the descriptor type schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#data_schema_version AgentregistryRegistryRecord#data_schema_version}
  */
  readonly dataSchemaVersion?: string;
  /**
  * The source configuration that defines where descriptor content is retrieved from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#source AgentregistryRegistryRecord#source}
  */
  readonly source?: AgentregistryRegistryRecordDescriptorsMcpServerSource;
}

export function agentregistryRegistryRecordDescriptorsMcpServerToTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_data: agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToTerraform(struct!.additionalData),
    data: cdktn.stringToTerraform(struct!.data),
    data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
    source: agentregistryRegistryRecordDescriptorsMcpServerSourceToTerraform(struct!.source),
  }
}


export function agentregistryRegistryRecordDescriptorsMcpServerToHclTerraform(struct?: AgentregistryRegistryRecordDescriptorsMcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_data: {
      value: agentregistryRegistryRecordDescriptorsMcpServerAdditionalDataToHclTerraform(struct!.additionalData),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData",
    },
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: agentregistryRegistryRecordDescriptorsMcpServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptorsMcpServer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalData = this._additionalData?.internalValue;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptorsMcpServer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalData.internalValue = undefined;
      this._data = undefined;
      this._dataSchemaVersion = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalData.internalValue = value.additionalData;
      this._data = value.data;
      this._dataSchemaVersion = value.dataSchemaVersion;
      this._source.internalValue = value.source;
    }
  }

  // additional_data - computed: true, optional: true, required: false
  private _additionalData = new AgentregistryRegistryRecordDescriptorsMcpServerAdditionalDataOutputReference(this, "additional_data");
  public get additionalData() {
    return this._additionalData;
  }
  public putAdditionalData(value: AgentregistryRegistryRecordDescriptorsMcpServerAdditionalData) {
    this._additionalData.internalValue = value;
  }
  public resetAdditionalData() {
    this._additionalData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDataInput() {
    return this._additionalData.internalValue;
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_schema_version - computed: true, optional: true, required: false
  private _dataSchemaVersion?: string; 
  public get dataSchemaVersion() {
    return this.getStringAttribute('data_schema_version');
  }
  public set dataSchemaVersion(value: string) {
    this._dataSchemaVersion = value;
  }
  public resetDataSchemaVersion() {
    this._dataSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaVersionInput() {
    return this._dataSchemaVersion;
  }

  // source - computed: true, optional: true, required: false
  private _source = new AgentregistryRegistryRecordDescriptorsMcpServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AgentregistryRegistryRecordDescriptorsMcpServerSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface AgentregistryRegistryRecordDescriptors {
  /**
  * The A2A agent card descriptor, populated when the record type is AGENT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#a2_a_agent_card AgentregistryRegistryRecord#a2_a_agent_card}
  */
  readonly a2AAgentCard?: AgentregistryRegistryRecordDescriptorsA2AAgentCard;
  /**
  * The agent skills definition descriptor, populated when the record type is SKILL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#agent_skills_definition AgentregistryRegistryRecord#agent_skills_definition}
  */
  readonly agentSkillsDefinition?: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition;
  /**
  * The custom descriptor, populated when the record type is CUSTOM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#custom AgentregistryRegistryRecord#custom}
  */
  readonly custom?: AgentregistryRegistryRecordDescriptorsCustom;
  /**
  * The MCP server descriptor, populated when the record type is MCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#mcp_server AgentregistryRegistryRecord#mcp_server}
  */
  readonly mcpServer?: AgentregistryRegistryRecordDescriptorsMcpServer;
}

export function agentregistryRegistryRecordDescriptorsToTerraform(struct?: AgentregistryRegistryRecordDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    a2_a_agent_card: agentregistryRegistryRecordDescriptorsA2AAgentCardToTerraform(struct!.a2AAgentCard),
    agent_skills_definition: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionToTerraform(struct!.agentSkillsDefinition),
    custom: agentregistryRegistryRecordDescriptorsCustomToTerraform(struct!.custom),
    mcp_server: agentregistryRegistryRecordDescriptorsMcpServerToTerraform(struct!.mcpServer),
  }
}


export function agentregistryRegistryRecordDescriptorsToHclTerraform(struct?: AgentregistryRegistryRecordDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    a2_a_agent_card: {
      value: agentregistryRegistryRecordDescriptorsA2AAgentCardToHclTerraform(struct!.a2AAgentCard),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsA2AAgentCard",
    },
    agent_skills_definition: {
      value: agentregistryRegistryRecordDescriptorsAgentSkillsDefinitionToHclTerraform(struct!.agentSkillsDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition",
    },
    custom: {
      value: agentregistryRegistryRecordDescriptorsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsCustom",
    },
    mcp_server: {
      value: agentregistryRegistryRecordDescriptorsMcpServerToHclTerraform(struct!.mcpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "AgentregistryRegistryRecordDescriptorsMcpServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentregistryRegistryRecordDescriptorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgentregistryRegistryRecordDescriptors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a2AAgentCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.a2AAgentCard = this._a2AAgentCard?.internalValue;
    }
    if (this._agentSkillsDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentSkillsDefinition = this._agentSkillsDefinition?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._mcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServer = this._mcpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentregistryRegistryRecordDescriptors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a2AAgentCard.internalValue = undefined;
      this._agentSkillsDefinition.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._mcpServer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a2AAgentCard.internalValue = value.a2AAgentCard;
      this._agentSkillsDefinition.internalValue = value.agentSkillsDefinition;
      this._custom.internalValue = value.custom;
      this._mcpServer.internalValue = value.mcpServer;
    }
  }

  // a2_a_agent_card - computed: true, optional: true, required: false
  private _a2AAgentCard = new AgentregistryRegistryRecordDescriptorsA2AAgentCardOutputReference(this, "a2_a_agent_card");
  public get a2AAgentCard() {
    return this._a2AAgentCard;
  }
  public putA2AAgentCard(value: AgentregistryRegistryRecordDescriptorsA2AAgentCard) {
    this._a2AAgentCard.internalValue = value;
  }
  public resetA2AAgentCard() {
    this._a2AAgentCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a2AAgentCardInput() {
    return this._a2AAgentCard.internalValue;
  }

  // agent_skills_definition - computed: true, optional: true, required: false
  private _agentSkillsDefinition = new AgentregistryRegistryRecordDescriptorsAgentSkillsDefinitionOutputReference(this, "agent_skills_definition");
  public get agentSkillsDefinition() {
    return this._agentSkillsDefinition;
  }
  public putAgentSkillsDefinition(value: AgentregistryRegistryRecordDescriptorsAgentSkillsDefinition) {
    this._agentSkillsDefinition.internalValue = value;
  }
  public resetAgentSkillsDefinition() {
    this._agentSkillsDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSkillsDefinitionInput() {
    return this._agentSkillsDefinition.internalValue;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new AgentregistryRegistryRecordDescriptorsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AgentregistryRegistryRecordDescriptorsCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // mcp_server - computed: true, optional: true, required: false
  private _mcpServer = new AgentregistryRegistryRecordDescriptorsMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }
  public putMcpServer(value: AgentregistryRegistryRecordDescriptorsMcpServer) {
    this._mcpServer.internalValue = value;
  }
  public resetMcpServer() {
    this._mcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerInput() {
    return this._mcpServer.internalValue;
  }
}
export interface AgentregistryRegistryRecordTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#key AgentregistryRegistryRecord#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#value AgentregistryRegistryRecord#value}
  */
  readonly value?: string;
}

export function agentregistryRegistryRecordTagsToTerraform(struct?: AgentregistryRegistryRecordTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function agentregistryRegistryRecordTagsToHclTerraform(struct?: AgentregistryRegistryRecordTags | cdktn.IResolvable): any {
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

export class AgentregistryRegistryRecordTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentregistryRegistryRecordTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AgentregistryRegistryRecordTags | cdktn.IResolvable | undefined) {
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

export class AgentregistryRegistryRecordTagsList extends cdktn.ComplexList {
  public internalValue? : AgentregistryRegistryRecordTags[] | cdktn.IResolvable

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
  public get(index: number): AgentregistryRegistryRecordTagsOutputReference {
    return new AgentregistryRegistryRecordTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record awscc_agentregistry_registry_record}
*/
export class AgentregistryRegistryRecord extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_agentregistry_registry_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AgentregistryRegistryRecord resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentregistryRegistryRecord to import
  * @param importFromId The id of the existing AgentregistryRegistryRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentregistryRegistryRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_agentregistry_registry_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/agentregistry_registry_record awscc_agentregistry_registry_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentregistryRegistryRecordConfig
  */
  public constructor(scope: Construct, id: string, config: AgentregistryRegistryRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_agentregistry_registry_record',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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
    this._description = config.description;
    this._descriptors.internalValue = config.descriptors;
    this._displayName = config.displayName;
    this._name = config.name;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._registryId = config.registryId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // descriptors - computed: false, optional: false, required: true
  private _descriptors = new AgentregistryRegistryRecordDescriptorsOutputReference(this, "descriptors");
  public get descriptors() {
    return this._descriptors;
  }
  public putDescriptors(value: AgentregistryRegistryRecordDescriptors) {
    this._descriptors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors.internalValue;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // record_arn - computed: true, optional: false, required: false
  public get recordArn() {
    return this.getStringAttribute('record_arn');
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_version - computed: true, optional: true, required: false
  private _recordVersion?: string; 
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }
  public set recordVersion(value: string) {
    this._recordVersion = value;
  }
  public resetRecordVersion() {
    this._recordVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordVersionInput() {
    return this._recordVersion;
  }

  // registry_arn - computed: true, optional: false, required: false
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AgentregistryRegistryRecordTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AgentregistryRegistryRecordTags[] | cdktn.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      descriptors: agentregistryRegistryRecordDescriptorsToTerraform(this._descriptors.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      name: cdktn.stringToTerraform(this._name),
      record_type: cdktn.stringToTerraform(this._recordType),
      record_version: cdktn.stringToTerraform(this._recordVersion),
      registry_id: cdktn.stringToTerraform(this._registryId),
      tags: cdktn.listMapper(agentregistryRegistryRecordTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      descriptors: {
        value: agentregistryRegistryRecordDescriptorsToHclTerraform(this._descriptors.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AgentregistryRegistryRecordDescriptors",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktn.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_version: {
        value: cdktn.stringToHclTerraform(this._recordVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktn.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(agentregistryRegistryRecordTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgentregistryRegistryRecordTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
