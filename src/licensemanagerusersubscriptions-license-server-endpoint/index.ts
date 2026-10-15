/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LicensemanagerusersubscriptionsLicenseServerEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#identity_provider_arn LicensemanagerusersubscriptionsLicenseServerEndpoint#identity_provider_arn}
  */
  readonly identityProviderArn: string;
  /**
  * The settings of the RDS license server to create the endpoint for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#license_server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#license_server_settings}
  */
  readonly licenseServerSettings?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings;
  /**
  * The tags that apply for the license server endpoint. A maximum of 50 tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#tags LicensemanagerusersubscriptionsLicenseServerEndpoint#tags}
  */
  readonly tags?: LicensemanagerusersubscriptionsLicenseServerEndpointTags[] | cdktn.IResolvable;
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider {
  /**
  * The identifier of the Secrets Manager secret that holds the license server administrator credentials. The name of the secret must begin with the prefix license-manager-user-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secret_id LicensemanagerusersubscriptionsLicenseServerEndpoint#secret_id}
  */
  readonly secretId?: string;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretId = value.secretId;
    }
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider {
  /**
  * Credentials held in AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secrets_manager_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#secrets_manager_credentials_provider}
  */
  readonly secretsManagerCredentialsProvider?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secrets_manager_credentials_provider: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderToTerraform(struct!.secretsManagerCredentialsProvider),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secrets_manager_credentials_provider: {
      value: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderToHclTerraform(struct!.secretsManagerCredentialsProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretsManagerCredentialsProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerCredentialsProvider = this._secretsManagerCredentialsProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretsManagerCredentialsProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretsManagerCredentialsProvider.internalValue = value.secretsManagerCredentialsProvider;
    }
  }

  // secrets_manager_credentials_provider - computed: true, optional: true, required: false
  private _secretsManagerCredentialsProvider = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference(this, "secrets_manager_credentials_provider");
  public get secretsManagerCredentialsProvider() {
    return this._secretsManagerCredentialsProvider;
  }
  public putSecretsManagerCredentialsProvider(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider) {
    this._secretsManagerCredentialsProvider.internalValue = value;
  }
  public resetSecretsManagerCredentialsProvider() {
    this._secretsManagerCredentialsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerCredentialsProviderInput() {
    return this._secretsManagerCredentialsProvider.internalValue;
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings {
  /**
  * The source of the credentials that License Manager uses to reach the license server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_credentials_provider}
  */
  readonly rdsSalCredentialsProvider?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rds_sal_credentials_provider: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderToTerraform(struct!.rdsSalCredentialsProvider),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rds_sal_credentials_provider: {
      value: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderToHclTerraform(struct!.rdsSalCredentialsProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rdsSalCredentialsProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsSalCredentialsProvider = this._rdsSalCredentialsProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rdsSalCredentialsProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rdsSalCredentialsProvider.internalValue = value.rdsSalCredentialsProvider;
    }
  }

  // rds_sal_credentials_provider - computed: true, optional: true, required: false
  private _rdsSalCredentialsProvider = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference(this, "rds_sal_credentials_provider");
  public get rdsSalCredentialsProvider() {
    return this._rdsSalCredentialsProvider;
  }
  public putRdsSalCredentialsProvider(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider) {
    this._rdsSalCredentialsProvider.internalValue = value;
  }
  public resetRdsSalCredentialsProvider() {
    this._rdsSalCredentialsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsSalCredentialsProviderInput() {
    return this._rdsSalCredentialsProvider.internalValue;
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings {
  /**
  * The settings of a Remote Desktop Services Subscriber Access License server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_settings}
  */
  readonly rdsSalSettings?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rds_sal_settings: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsToTerraform(struct!.rdsSalSettings),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rds_sal_settings: {
      value: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsToHclTerraform(struct!.rdsSalSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rdsSalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsSalSettings = this._rdsSalSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rdsSalSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rdsSalSettings.internalValue = value.rdsSalSettings;
    }
  }

  // rds_sal_settings - computed: true, optional: true, required: false
  private _rdsSalSettings = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference(this, "rds_sal_settings");
  public get rdsSalSettings() {
    return this._rdsSalSettings;
  }
  public putRdsSalSettings(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings) {
    this._rdsSalSettings.internalValue = value;
  }
  public resetRdsSalSettings() {
    this._rdsSalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsSalSettingsInput() {
    return this._rdsSalSettings.internalValue;
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings {
  /**
  * The settings of a license server, by server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#server_settings}
  */
  readonly serverSettings?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings;
  /**
  * The type of license server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_type LicensemanagerusersubscriptionsLicenseServerEndpoint#server_type}
  */
  readonly serverType?: string;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_settings: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsToTerraform(struct!.serverSettings),
    server_type: cdktn.stringToTerraform(struct!.serverType),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_settings: {
      value: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsToHclTerraform(struct!.serverSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings",
    },
    server_type: {
      value: cdktn.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSettings = this._serverSettings?.internalValue;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverSettings.internalValue = undefined;
      this._serverType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverSettings.internalValue = value.serverSettings;
      this._serverType = value.serverType;
    }
  }

  // server_settings - computed: true, optional: true, required: false
  private _serverSettings = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference(this, "server_settings");
  public get serverSettings() {
    return this._serverSettings;
  }
  public putServerSettings(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings) {
    this._serverSettings.internalValue = value;
  }
  public resetServerSettings() {
    this._serverSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSettingsInput() {
    return this._serverSettings.internalValue;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers {
}

export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServersToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointLicenseServersToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }

  // ipv_4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv_4_address');
  }

  // ipv_6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList extends cdktn.ComplexList {

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
  public get(index: number): LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference {
    return new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint {
}

export function licensemanagerusersubscriptionsLicenseServerEndpointServerEndpointToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointServerEndpointToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}
export interface LicensemanagerusersubscriptionsLicenseServerEndpointTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#key LicensemanagerusersubscriptionsLicenseServerEndpoint#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#value LicensemanagerusersubscriptionsLicenseServerEndpoint#value}
  */
  readonly value?: string;
}

export function licensemanagerusersubscriptionsLicenseServerEndpointTagsToTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function licensemanagerusersubscriptionsLicenseServerEndpointTagsToHclTerraform(struct?: LicensemanagerusersubscriptionsLicenseServerEndpointTags | cdktn.IResolvable): any {
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

export class LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerusersubscriptionsLicenseServerEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LicensemanagerusersubscriptionsLicenseServerEndpointTags | cdktn.IResolvable | undefined) {
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

export class LicensemanagerusersubscriptionsLicenseServerEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerusersubscriptionsLicenseServerEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference {
    return new LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint}
*/
export class LicensemanagerusersubscriptionsLicenseServerEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_licensemanagerusersubscriptions_license_server_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensemanagerusersubscriptionsLicenseServerEndpoint to import
  * @param importFromId The id of the existing LicensemanagerusersubscriptionsLicenseServerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensemanagerusersubscriptionsLicenseServerEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanagerusersubscriptions_license_server_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerusersubscriptionsLicenseServerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerusersubscriptionsLicenseServerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_licensemanagerusersubscriptions_license_server_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.106.0',
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
    this._identityProviderArn = config.identityProviderArn;
    this._licenseServerSettings.internalValue = config.licenseServerSettings;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_arn - computed: false, optional: false, required: true
  private _identityProviderArn?: string; 
  public get identityProviderArn() {
    return this.getStringAttribute('identity_provider_arn');
  }
  public set identityProviderArn(value: string) {
    this._identityProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderArnInput() {
    return this._identityProviderArn;
  }

  // license_server_endpoint_arn - computed: true, optional: false, required: false
  public get licenseServerEndpointArn() {
    return this.getStringAttribute('license_server_endpoint_arn');
  }

  // license_server_endpoint_id - computed: true, optional: false, required: false
  public get licenseServerEndpointId() {
    return this.getStringAttribute('license_server_endpoint_id');
  }

  // license_server_endpoint_provisioning_status - computed: true, optional: false, required: false
  public get licenseServerEndpointProvisioningStatus() {
    return this.getStringAttribute('license_server_endpoint_provisioning_status');
  }

  // license_server_settings - computed: true, optional: true, required: false
  private _licenseServerSettings = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference(this, "license_server_settings");
  public get licenseServerSettings() {
    return this._licenseServerSettings;
  }
  public putLicenseServerSettings(value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings) {
    this._licenseServerSettings.internalValue = value;
  }
  public resetLicenseServerSettings() {
    this._licenseServerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseServerSettingsInput() {
    return this._licenseServerSettings.internalValue;
  }

  // license_servers - computed: true, optional: false, required: false
  private _licenseServers = new LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList(this, "license_servers", false);
  public get licenseServers() {
    return this._licenseServers;
  }

  // server_endpoint - computed: true, optional: false, required: false
  private _serverEndpoint = new LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference(this, "server_endpoint");
  public get serverEndpoint() {
    return this._serverEndpoint;
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LicensemanagerusersubscriptionsLicenseServerEndpointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LicensemanagerusersubscriptionsLicenseServerEndpointTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_provider_arn: cdktn.stringToTerraform(this._identityProviderArn),
      license_server_settings: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsToTerraform(this._licenseServerSettings.internalValue),
      tags: cdktn.listMapper(licensemanagerusersubscriptionsLicenseServerEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_provider_arn: {
        value: cdktn.stringToHclTerraform(this._identityProviderArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_server_settings: {
        value: licensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsToHclTerraform(this._licenseServerSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings",
      },
      tags: {
        value: cdktn.listMapperHcl(licensemanagerusersubscriptionsLicenseServerEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensemanagerusersubscriptionsLicenseServerEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
