/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_o_auth_2_credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_o_auth_2_credential_provider#id DataAwsccBedrockagentcoreOAuth2CredentialProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArn {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArnToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArnToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(this, "authorization_server_metadata");
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_token_content - computed: true, optional: false, required: false
  public get actorTokenContent() {
    return this.getStringAttribute('actor_token_content');
  }

  // actor_token_scopes - computed: true, optional: false, required: false
  public get actorTokenScopes() {
    return this.getListAttribute('actor_token_scopes');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // token_exchange_grant_type_config - computed: true, optional: false, required: false
  private _tokenExchangeGrantTypeConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference(this, "token_exchange_grant_type_config");
  public get tokenExchangeGrantTypeConfig() {
    return this._tokenExchangeGrantTypeConfig;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_ip_address_type - computed: true, optional: false, required: false
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }

  // routing_domain - computed: true, optional: false, required: false
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_identifier - computed: true, optional: false, required: false
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration_identifier - computed: true, optional: false, required: false
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpoint {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_vpc_resource - computed: true, optional: false, required: false
  private _managedVpcResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointManagedVpcResourceOutputReference(this, "managed_vpc_resource");
  public get managedVpcResource() {
    return this._managedVpcResource;
  }

  // self_managed_lattice_resource - computed: true, optional: false, required: false
  private _selfManagedLatticeResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointSelfManagedLatticeResourceOutputReference(this, "self_managed_lattice_resource");
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_ip_address_type - computed: true, optional: false, required: false
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }

  // routing_domain - computed: true, optional: false, required: false
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_identifier - computed: true, optional: false, required: false
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration_identifier - computed: true, optional: false, required: false
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpoint {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_vpc_resource - computed: true, optional: false, required: false
  private _managedVpcResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(this, "managed_vpc_resource");
  public get managedVpcResource() {
    return this._managedVpcResource;
  }

  // self_managed_lattice_resource - computed: true, optional: false, required: false
  private _selfManagedLatticeResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(this, "self_managed_lattice_resource");
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverrides {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointOutputReference(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesOutputReference {
    return new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_source - computed: true, optional: false, required: false
  private _kmsKeySource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceOutputReference(this, "kms_key_source");
  public get kmsKeySource() {
    return this._kmsKeySource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_header_claims - computed: true, optional: false, required: false
  private _additionalHeaderClaims = new cdktn.StringMap(this, "additional_header_claims");
  public get additionalHeaderClaims() {
    return this._additionalHeaderClaims;
  }

  // additional_payload_claims - computed: true, optional: false, required: false
  private _additionalPayloadClaims = new cdktn.StringMap(this, "additional_payload_claims");
  public get additionalPayloadClaims() {
    return this._additionalPayloadClaims;
  }

  // private_key_source - computed: true, optional: false, required: false
  private _privateKeySource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigPrivateKeySourceOutputReference(this, "private_key_source");
  public get privateKeySource() {
    return this._privateKeySource;
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_authentication_method - computed: true, optional: false, required: false
  public get clientAuthenticationMethod() {
    return this.getStringAttribute('client_authentication_method');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryOutputReference(this, "oauth_discovery");
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }

  // on_behalf_of_token_exchange_config - computed: true, optional: false, required: false
  private _onBehalfOfTokenExchangeConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigOutputReference(this, "on_behalf_of_token_exchange_config");
  public get onBehalfOfTokenExchangeConfig() {
    return this._onBehalfOfTokenExchangeConfig;
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOutputReference(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // private_endpoint_overrides - computed: true, optional: false, required: false
  private _privateEndpointOverrides = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }

  // private_key_jwt_config - computed: true, optional: false, required: false
  private _privateKeyJwtConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateKeyJwtConfigOutputReference(this, "private_key_jwt_config");
  public get privateKeyJwtConfig() {
    return this._privateKeyJwtConfig;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_key - computed: true, optional: false, required: false
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_config - computed: true, optional: false, required: false
  private _clientSecretConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // atlassian_oauth_2_provider_config - computed: true, optional: false, required: false
  private _atlassianOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigOutputReference(this, "atlassian_oauth_2_provider_config");
  public get atlassianOauth2ProviderConfig() {
    return this._atlassianOauth2ProviderConfig;
  }

  // custom_oauth_2_provider_config - computed: true, optional: false, required: false
  private _customOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOutputReference(this, "custom_oauth_2_provider_config");
  public get customOauth2ProviderConfig() {
    return this._customOauth2ProviderConfig;
  }

  // github_oauth_2_provider_config - computed: true, optional: false, required: false
  private _githubOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigOutputReference(this, "github_oauth_2_provider_config");
  public get githubOauth2ProviderConfig() {
    return this._githubOauth2ProviderConfig;
  }

  // google_oauth_2_provider_config - computed: true, optional: false, required: false
  private _googleOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigOutputReference(this, "google_oauth_2_provider_config");
  public get googleOauth2ProviderConfig() {
    return this._googleOauth2ProviderConfig;
  }

  // included_oauth_2_provider_config - computed: true, optional: false, required: false
  private _includedOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigOutputReference(this, "included_oauth_2_provider_config");
  public get includedOauth2ProviderConfig() {
    return this._includedOauth2ProviderConfig;
  }

  // linkedin_oauth_2_provider_config - computed: true, optional: false, required: false
  private _linkedinOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigOutputReference(this, "linkedin_oauth_2_provider_config");
  public get linkedinOauth2ProviderConfig() {
    return this._linkedinOauth2ProviderConfig;
  }

  // microsoft_oauth_2_provider_config - computed: true, optional: false, required: false
  private _microsoftOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigOutputReference(this, "microsoft_oauth_2_provider_config");
  public get microsoftOauth2ProviderConfig() {
    return this._microsoftOauth2ProviderConfig;
  }

  // salesforce_oauth_2_provider_config - computed: true, optional: false, required: false
  private _salesforceOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigOutputReference(this, "salesforce_oauth_2_provider_config");
  public get salesforceOauth2ProviderConfig() {
    return this._salesforceOauth2ProviderConfig;
  }

  // slack_oauth_2_provider_config - computed: true, optional: false, required: false
  private _slackOauth2ProviderConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigOutputReference(this, "slack_oauth_2_provider_config");
  public get slackOauth2ProviderConfig() {
    return this._slackOauth2ProviderConfig;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataOutputReference(this, "authorization_server_metadata");
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_token_content - computed: true, optional: false, required: false
  public get actorTokenContent() {
    return this.getStringAttribute('actor_token_content');
  }

  // actor_token_scopes - computed: true, optional: false, required: false
  public get actorTokenScopes() {
    return this.getListAttribute('actor_token_scopes');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // token_exchange_grant_type_config - computed: true, optional: false, required: false
  private _tokenExchangeGrantTypeConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference(this, "token_exchange_grant_type_config");
  public get tokenExchangeGrantTypeConfig() {
    return this._tokenExchangeGrantTypeConfig;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_ip_address_type - computed: true, optional: false, required: false
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }

  // routing_domain - computed: true, optional: false, required: false
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_identifier - computed: true, optional: false, required: false
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration_identifier - computed: true, optional: false, required: false
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpoint {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_vpc_resource - computed: true, optional: false, required: false
  private _managedVpcResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceOutputReference(this, "managed_vpc_resource");
  public get managedVpcResource() {
    return this._managedVpcResource;
  }

  // self_managed_lattice_resource - computed: true, optional: false, required: false
  private _selfManagedLatticeResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceOutputReference(this, "self_managed_lattice_resource");
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_ip_address_type - computed: true, optional: false, required: false
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }

  // routing_domain - computed: true, optional: false, required: false
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_identifier - computed: true, optional: false, required: false
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration_identifier - computed: true, optional: false, required: false
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpoint {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_vpc_resource - computed: true, optional: false, required: false
  private _managedVpcResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(this, "managed_vpc_resource");
  public get managedVpcResource() {
    return this._managedVpcResource;
  }

  // self_managed_lattice_resource - computed: true, optional: false, required: false
  private _selfManagedLatticeResource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(this, "self_managed_lattice_resource");
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverrides {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointOutputReference(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesOutputReference {
    return new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySource {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_source - computed: true, optional: false, required: false
  private _kmsKeySource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceKmsKeySourceOutputReference(this, "kms_key_source");
  public get kmsKeySource() {
    return this._kmsKeySource;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfig {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_header_claims - computed: true, optional: false, required: false
  private _additionalHeaderClaims = new cdktn.StringMap(this, "additional_header_claims");
  public get additionalHeaderClaims() {
    return this._additionalHeaderClaims;
  }

  // additional_payload_claims - computed: true, optional: false, required: false
  private _additionalPayloadClaims = new cdktn.StringMap(this, "additional_payload_claims");
  public get additionalPayloadClaims() {
    return this._additionalPayloadClaims;
  }

  // private_key_source - computed: true, optional: false, required: false
  private _privateKeySource = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceOutputReference(this, "private_key_source");
  public get privateKeySource() {
    return this._privateKeySource;
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_authentication_method - computed: true, optional: false, required: false
  public get clientAuthenticationMethod() {
    return this.getStringAttribute('client_authentication_method');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryOutputReference(this, "oauth_discovery");
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }

  // on_behalf_of_token_exchange_config - computed: true, optional: false, required: false
  private _onBehalfOfTokenExchangeConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigOutputReference(this, "on_behalf_of_token_exchange_config");
  public get onBehalfOfTokenExchangeConfig() {
    return this._onBehalfOfTokenExchangeConfig;
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOutputReference(this, "private_endpoint");
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // private_endpoint_overrides - computed: true, optional: false, required: false
  private _privateEndpointOverrides = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }

  // private_key_jwt_config - computed: true, optional: false, required: false
  private _privateKeyJwtConfig = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigOutputReference(this, "private_key_jwt_config");
  public get privateKeyJwtConfig() {
    return this._privateKeyJwtConfig;
  }
}
export interface DataAwsccBedrockagentcoreOAuth2CredentialProviderTags {
}

export function dataAwsccBedrockagentcoreOAuth2CredentialProviderTagsToTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOAuth2CredentialProviderTagsToHclTerraform(struct?: DataAwsccBedrockagentcoreOAuth2CredentialProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOAuth2CredentialProviderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOAuth2CredentialProviderTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBedrockagentcoreOAuth2CredentialProviderTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOAuth2CredentialProviderTagsOutputReference {
    return new DataAwsccBedrockagentcoreOAuth2CredentialProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider}
*/
export class DataAwsccBedrockagentcoreOAuth2CredentialProvider extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_o_auth_2_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreOAuth2CredentialProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreOAuth2CredentialProvider to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreOAuth2CredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_o_auth_2_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreOAuth2CredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_o_auth_2_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreOAuth2CredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreOAuth2CredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_o_auth_2_credential_provider',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // client_secret_arn - computed: true, optional: false, required: false
  private _clientSecretArn = new DataAwsccBedrockagentcoreOAuth2CredentialProviderClientSecretArnOutputReference(this, "client_secret_arn");
  public get clientSecretArn() {
    return this._clientSecretArn;
  }

  // client_secret_json_key - computed: true, optional: false, required: false
  public get clientSecretJsonKey() {
    return this.getStringAttribute('client_secret_json_key');
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
  }

  // credential_provider_vendor - computed: true, optional: false, required: false
  public get credentialProviderVendor() {
    return this.getStringAttribute('credential_provider_vendor');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_2_provider_config_input - computed: true, optional: false, required: false
  private _oauth2ProviderConfigInput = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputOutputReference(this, "oauth_2_provider_config_input");
  public get oauth2ProviderConfigInput() {
    return this._oauth2ProviderConfigInput;
  }

  // oauth_2_provider_config_output - computed: true, optional: false, required: false
  private _oauth2ProviderConfigOutput = new DataAwsccBedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOutputReference(this, "oauth_2_provider_config_output");
  public get oauth2ProviderConfigOutput() {
    return this._oauth2ProviderConfigOutput;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockagentcoreOAuth2CredentialProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
