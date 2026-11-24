/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalPortalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Represents an authorization configuration for a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}
  */
  readonly authorization: ApiportalPortalAuthorization;
  /**
  * Represents an endpoint configuration for a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}
  */
  readonly endpointConfiguration: ApiportalPortalEndpointConfiguration;
  /**
  * The ARNs of the products included in the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}
  */
  readonly includedProductArns?: string[];
  /**
  * The logo URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * Contains the content that is visible to portal consumers including the themes, display names, and description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}
  */
  readonly portalContent: ApiportalPortalPortalContent;
  /**
  * The name of the Amazon CloudWatch RUM app monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}
  */
  readonly rumAppMonitorName?: string;
  /**
  * The tags associated with a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}
  */
  readonly tags?: ApiportalPortalTags[] | cdktn.IResolvable;
}
export interface ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig {
  /**
  * The app client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}
  */
  readonly appClientId?: string;
  /**
  * The user pool ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}
  */
  readonly userPoolArn?: string;
  /**
  * The user pool domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}
  */
  readonly userPoolDomain?: string;
}

export function apiportalPortalAuthorizationAuthorizationConfigCognitoConfigToTerraform(struct?: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_client_id: cdktn.stringToTerraform(struct!.appClientId),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
    user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
  }
}


export function apiportalPortalAuthorizationAuthorizationConfigCognitoConfigToHclTerraform(struct?: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_client_id: {
      value: cdktn.stringToHclTerraform(struct!.appClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appClientId = this._appClientId;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appClientId = undefined;
      this._userPoolArn = undefined;
      this._userPoolDomain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appClientId = value.appClientId;
      this._userPoolArn = value.userPoolArn;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // app_client_id - computed: true, optional: true, required: false
  private _appClientId?: string; 
  public get appClientId() {
    return this.getStringAttribute('app_client_id');
  }
  public set appClientId(value: string) {
    this._appClientId = value;
  }
  public resetAppClientId() {
    this._appClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appClientIdInput() {
    return this._appClientId;
  }

  // user_pool_arn - computed: true, optional: true, required: false
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  public resetUserPoolArn() {
    this._userPoolArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_domain - computed: true, optional: true, required: false
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  public resetUserPoolDomain() {
    this._userPoolDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface ApiportalPortalAuthorizationAuthorizationConfig {
  /**
  * The configuration for using Amazon Cognito user pools to control access to your portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}
  */
  readonly cognitoConfig?: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig;
  /**
  * Provide no authorization for your portal. This makes your portal publicly accessible on the web.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}
  */
  readonly none?: string;
}

export function apiportalPortalAuthorizationAuthorizationConfigToTerraform(struct?: ApiportalPortalAuthorizationAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cognito_config: apiportalPortalAuthorizationAuthorizationConfigCognitoConfigToTerraform(struct!.cognitoConfig),
    none: cdktn.stringToTerraform(struct!.none),
  }
}


export function apiportalPortalAuthorizationAuthorizationConfigToHclTerraform(struct?: ApiportalPortalAuthorizationAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cognito_config: {
      value: apiportalPortalAuthorizationAuthorizationConfigCognitoConfigToHclTerraform(struct!.cognitoConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig",
    },
    none: {
      value: cdktn.stringToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalAuthorizationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalAuthorizationAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoConfig = this._cognitoConfig?.internalValue;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalAuthorizationAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoConfig.internalValue = undefined;
      this._none = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoConfig.internalValue = value.cognitoConfig;
      this._none = value.none;
    }
  }

  // cognito_config - computed: true, optional: true, required: false
  private _cognitoConfig = new ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(this, "cognito_config");
  public get cognitoConfig() {
    return this._cognitoConfig;
  }
  public putCognitoConfig(value: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig) {
    this._cognitoConfig.internalValue = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none?: string; 
  public get none() {
    return this.getStringAttribute('none');
  }
  public set none(value: string) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}
export interface ApiportalPortalAuthorization {
  /**
  * Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}
  */
  readonly authorizationConfig: ApiportalPortalAuthorizationAuthorizationConfig;
  /**
  * Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}
  */
  readonly fineGrainedAccessControl: string;
}

export function apiportalPortalAuthorizationToTerraform(struct?: ApiportalPortalAuthorization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: apiportalPortalAuthorizationAuthorizationConfigToTerraform(struct!.authorizationConfig),
    fine_grained_access_control: cdktn.stringToTerraform(struct!.fineGrainedAccessControl),
  }
}


export function apiportalPortalAuthorizationToHclTerraform(struct?: ApiportalPortalAuthorization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: apiportalPortalAuthorizationAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalPortalAuthorizationAuthorizationConfig",
    },
    fine_grained_access_control: {
      value: cdktn.stringToHclTerraform(struct!.fineGrainedAccessControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalAuthorizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalAuthorization | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._fineGrainedAccessControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrainedAccessControl = this._fineGrainedAccessControl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalAuthorization | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._fineGrainedAccessControl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._fineGrainedAccessControl = value.fineGrainedAccessControl;
    }
  }

  // authorization_config - computed: false, optional: false, required: true
  private _authorizationConfig = new ApiportalPortalAuthorizationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: ApiportalPortalAuthorizationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }

  // fine_grained_access_control - computed: false, optional: false, required: true
  private _fineGrainedAccessControl?: string; 
  public get fineGrainedAccessControl() {
    return this.getStringAttribute('fine_grained_access_control');
  }
  public set fineGrainedAccessControl(value: string) {
    this._fineGrainedAccessControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainedAccessControlInput() {
    return this._fineGrainedAccessControl;
  }
}
export interface ApiportalPortalEndpointConfigurationAcmManaged {
  /**
  * The certificate ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * The domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}
  */
  readonly domainName?: string;
}

export function apiportalPortalEndpointConfigurationAcmManagedToTerraform(struct?: ApiportalPortalEndpointConfigurationAcmManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
  }
}


export function apiportalPortalEndpointConfigurationAcmManagedToHclTerraform(struct?: ApiportalPortalEndpointConfigurationAcmManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalEndpointConfigurationAcmManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalEndpointConfigurationAcmManaged | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalEndpointConfigurationAcmManaged | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._domainName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._domainName = value.domainName;
    }
  }

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }
}
export interface ApiportalPortalEndpointConfiguration {
  /**
  * Represents a domain name and certificate for a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}
  */
  readonly acmManaged?: ApiportalPortalEndpointConfigurationAcmManaged;
  /**
  * Provide no authorization for your portal. This makes your portal publicly accessible on the web.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}
  */
  readonly none?: string;
}

export function apiportalPortalEndpointConfigurationToTerraform(struct?: ApiportalPortalEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acm_managed: apiportalPortalEndpointConfigurationAcmManagedToTerraform(struct!.acmManaged),
    none: cdktn.stringToTerraform(struct!.none),
  }
}


export function apiportalPortalEndpointConfigurationToHclTerraform(struct?: ApiportalPortalEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acm_managed: {
      value: apiportalPortalEndpointConfigurationAcmManagedToHclTerraform(struct!.acmManaged),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalPortalEndpointConfigurationAcmManaged",
    },
    none: {
      value: cdktn.stringToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalEndpointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmManaged = this._acmManaged?.internalValue;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalEndpointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmManaged.internalValue = undefined;
      this._none = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmManaged.internalValue = value.acmManaged;
      this._none = value.none;
    }
  }

  // acm_managed - computed: true, optional: true, required: false
  private _acmManaged = new ApiportalPortalEndpointConfigurationAcmManagedOutputReference(this, "acm_managed");
  public get acmManaged() {
    return this._acmManaged;
  }
  public putAcmManaged(value: ApiportalPortalEndpointConfigurationAcmManaged) {
    this._acmManaged.internalValue = value;
  }
  public resetAcmManaged() {
    this._acmManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmManagedInput() {
    return this._acmManaged.internalValue;
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // none - computed: true, optional: true, required: false
  private _none?: string; 
  public get none() {
    return this.getStringAttribute('none');
  }
  public set none(value: string) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // portal_default_domain_name - computed: true, optional: false, required: false
  public get portalDefaultDomainName() {
    return this.getStringAttribute('portal_default_domain_name');
  }

  // portal_domain_hosted_zone_id - computed: true, optional: false, required: false
  public get portalDomainHostedZoneId() {
    return this.getStringAttribute('portal_domain_hosted_zone_id');
  }
}
export interface ApiportalPortalPortalContentThemeCustomColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}
  */
  readonly accentColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}
  */
  readonly backgroundColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}
  */
  readonly errorValidationColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}
  */
  readonly headerColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}
  */
  readonly navigationColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}
  */
  readonly textColor: string;
}

export function apiportalPortalPortalContentThemeCustomColorsToTerraform(struct?: ApiportalPortalPortalContentThemeCustomColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accent_color: cdktn.stringToTerraform(struct!.accentColor),
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    error_validation_color: cdktn.stringToTerraform(struct!.errorValidationColor),
    header_color: cdktn.stringToTerraform(struct!.headerColor),
    navigation_color: cdktn.stringToTerraform(struct!.navigationColor),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function apiportalPortalPortalContentThemeCustomColorsToHclTerraform(struct?: ApiportalPortalPortalContentThemeCustomColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accent_color: {
      value: cdktn.stringToHclTerraform(struct!.accentColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_validation_color: {
      value: cdktn.stringToHclTerraform(struct!.errorValidationColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_color: {
      value: cdktn.stringToHclTerraform(struct!.headerColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    navigation_color: {
      value: cdktn.stringToHclTerraform(struct!.navigationColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalPortalContentThemeCustomColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalPortalContentThemeCustomColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accentColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.accentColor = this._accentColor;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._errorValidationColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorValidationColor = this._errorValidationColor;
    }
    if (this._headerColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerColor = this._headerColor;
    }
    if (this._navigationColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigationColor = this._navigationColor;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalPortalContentThemeCustomColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accentColor = undefined;
      this._backgroundColor = undefined;
      this._errorValidationColor = undefined;
      this._headerColor = undefined;
      this._navigationColor = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accentColor = value.accentColor;
      this._backgroundColor = value.backgroundColor;
      this._errorValidationColor = value.errorValidationColor;
      this._headerColor = value.headerColor;
      this._navigationColor = value.navigationColor;
      this._textColor = value.textColor;
    }
  }

  // accent_color - computed: false, optional: false, required: true
  private _accentColor?: string; 
  public get accentColor() {
    return this.getStringAttribute('accent_color');
  }
  public set accentColor(value: string) {
    this._accentColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accentColorInput() {
    return this._accentColor;
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // error_validation_color - computed: false, optional: false, required: true
  private _errorValidationColor?: string; 
  public get errorValidationColor() {
    return this.getStringAttribute('error_validation_color');
  }
  public set errorValidationColor(value: string) {
    this._errorValidationColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorValidationColorInput() {
    return this._errorValidationColor;
  }

  // header_color - computed: false, optional: false, required: true
  private _headerColor?: string; 
  public get headerColor() {
    return this.getStringAttribute('header_color');
  }
  public set headerColor(value: string) {
    this._headerColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerColorInput() {
    return this._headerColor;
  }

  // navigation_color - computed: false, optional: false, required: true
  private _navigationColor?: string; 
  public get navigationColor() {
    return this.getStringAttribute('navigation_color');
  }
  public set navigationColor(value: string) {
    this._navigationColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get navigationColorInput() {
    return this._navigationColor;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface ApiportalPortalPortalContentTheme {
  /**
  * Represents custom colors for a published portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}
  */
  readonly customColors: ApiportalPortalPortalContentThemeCustomColors;
}

export function apiportalPortalPortalContentThemeToTerraform(struct?: ApiportalPortalPortalContentTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_colors: apiportalPortalPortalContentThemeCustomColorsToTerraform(struct!.customColors),
  }
}


export function apiportalPortalPortalContentThemeToHclTerraform(struct?: ApiportalPortalPortalContentTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_colors: {
      value: apiportalPortalPortalContentThemeCustomColorsToHclTerraform(struct!.customColors),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalPortalPortalContentThemeCustomColors",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalPortalContentThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalPortalContentTheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customColors = this._customColors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalPortalContentTheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customColors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customColors.internalValue = value.customColors;
    }
  }

  // custom_colors - computed: false, optional: false, required: true
  private _customColors = new ApiportalPortalPortalContentThemeCustomColorsOutputReference(this, "custom_colors");
  public get customColors() {
    return this._customColors;
  }
  public putCustomColors(value: ApiportalPortalPortalContentThemeCustomColors) {
    this._customColors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customColorsInput() {
    return this._customColors.internalValue;
  }

  // logo_uploaded_at - computed: true, optional: false, required: false
  public get logoUploadedAt() {
    return this.getStringAttribute('logo_uploaded_at');
  }
}
export interface ApiportalPortalPortalContent {
  /**
  * A description of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}
  */
  readonly description?: string;
  /**
  * The display name for the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}
  */
  readonly displayName: string;
  /**
  * Defines the theme for a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}
  */
  readonly theme: ApiportalPortalPortalContentTheme;
}

export function apiportalPortalPortalContentToTerraform(struct?: ApiportalPortalPortalContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    theme: apiportalPortalPortalContentThemeToTerraform(struct!.theme),
  }
}


export function apiportalPortalPortalContentToHclTerraform(struct?: ApiportalPortalPortalContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    theme: {
      value: apiportalPortalPortalContentThemeToHclTerraform(struct!.theme),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalPortalPortalContentTheme",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalPortalPortalContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalPortalContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._theme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.theme = this._theme?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalPortalContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._theme.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._theme.internalValue = value.theme;
    }
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // theme - computed: false, optional: false, required: true
  private _theme = new ApiportalPortalPortalContentThemeOutputReference(this, "theme");
  public get theme() {
    return this._theme;
  }
  public putTheme(value: ApiportalPortalPortalContentTheme) {
    this._theme.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme.internalValue;
  }
}
export interface ApiportalPortalStatusException {
}

export function apiportalPortalStatusExceptionToTerraform(struct?: ApiportalPortalStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiportalPortalStatusExceptionToHclTerraform(struct?: ApiportalPortalStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiportalPortalStatusExceptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalPortalStatusException | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalPortalStatusException | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exception - computed: true, optional: false, required: false
  public get exception() {
    return this.getStringAttribute('exception');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface ApiportalPortalTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}
  */
  readonly value?: string;
}

export function apiportalPortalTagsToTerraform(struct?: ApiportalPortalTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apiportalPortalTagsToHclTerraform(struct?: ApiportalPortalTags | cdktn.IResolvable): any {
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

export class ApiportalPortalTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiportalPortalTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiportalPortalTags | cdktn.IResolvable | undefined) {
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

export class ApiportalPortalTagsList extends cdktn.ComplexList {
  public internalValue? : ApiportalPortalTags[] | cdktn.IResolvable

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
  public get(index: number): ApiportalPortalTagsOutputReference {
    return new ApiportalPortalTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal}
*/
export class ApiportalPortal extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalPortal to import
  * @param importFromId The id of the existing ApiportalPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalPortalConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_portal',
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
    this._authorization.internalValue = config.authorization;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
    this._includedProductArns = config.includedProductArns;
    this._logoUri = config.logoUri;
    this._portalContent.internalValue = config.portalContent;
    this._rumAppMonitorName = config.rumAppMonitorName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: false, optional: false, required: true
  private _authorization = new ApiportalPortalAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ApiportalPortalAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // endpoint_configuration - computed: false, optional: false, required: true
  private _endpointConfiguration = new ApiportalPortalEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: ApiportalPortalEndpointConfiguration) {
    this._endpointConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_product_arns - computed: true, optional: true, required: false
  private _includedProductArns?: string[]; 
  public get includedProductArns() {
    return this.getListAttribute('included_product_arns');
  }
  public set includedProductArns(value: string[]) {
    this._includedProductArns = value;
  }
  public resetIncludedProductArns() {
    this._includedProductArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProductArnsInput() {
    return this._includedProductArns;
  }

  // logo_uri - computed: true, optional: true, required: false
  private _logoUri?: string; 
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }
  public set logoUri(value: string) {
    this._logoUri = value;
  }
  public resetLogoUri() {
    this._logoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUriInput() {
    return this._logoUri;
  }

  // portal_arn - computed: true, optional: false, required: false
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }

  // portal_content - computed: false, optional: false, required: true
  private _portalContent = new ApiportalPortalPortalContentOutputReference(this, "portal_content");
  public get portalContent() {
    return this._portalContent;
  }
  public putPortalContent(value: ApiportalPortalPortalContent) {
    this._portalContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalContentInput() {
    return this._portalContent.internalValue;
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // publish_description - computed: true, optional: false, required: false
  public get publishDescription() {
    return this.getStringAttribute('publish_description');
  }

  // publish_status - computed: true, optional: false, required: false
  public get publishStatus() {
    return this.getStringAttribute('publish_status');
  }

  // published_at - computed: true, optional: false, required: false
  public get publishedAt() {
    return this.getStringAttribute('published_at');
  }

  // rum_app_monitor_name - computed: true, optional: true, required: false
  private _rumAppMonitorName?: string; 
  public get rumAppMonitorName() {
    return this.getStringAttribute('rum_app_monitor_name');
  }
  public set rumAppMonitorName(value: string) {
    this._rumAppMonitorName = value;
  }
  public resetRumAppMonitorName() {
    this._rumAppMonitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumAppMonitorNameInput() {
    return this._rumAppMonitorName;
  }

  // status_exception - computed: true, optional: false, required: false
  private _statusException = new ApiportalPortalStatusExceptionOutputReference(this, "status_exception");
  public get statusException() {
    return this._statusException;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApiportalPortalTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApiportalPortalTags[] | cdktn.IResolvable) {
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
      authorization: apiportalPortalAuthorizationToTerraform(this._authorization.internalValue),
      endpoint_configuration: apiportalPortalEndpointConfigurationToTerraform(this._endpointConfiguration.internalValue),
      included_product_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._includedProductArns),
      logo_uri: cdktn.stringToTerraform(this._logoUri),
      portal_content: apiportalPortalPortalContentToTerraform(this._portalContent.internalValue),
      rum_app_monitor_name: cdktn.stringToTerraform(this._rumAppMonitorName),
      tags: cdktn.listMapper(apiportalPortalTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization: {
        value: apiportalPortalAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiportalPortalAuthorization",
      },
      endpoint_configuration: {
        value: apiportalPortalEndpointConfigurationToHclTerraform(this._endpointConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiportalPortalEndpointConfiguration",
      },
      included_product_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._includedProductArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logo_uri: {
        value: cdktn.stringToHclTerraform(this._logoUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_content: {
        value: apiportalPortalPortalContentToHclTerraform(this._portalContent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiportalPortalPortalContent",
      },
      rum_app_monitor_name: {
        value: cdktn.stringToHclTerraform(this._rumAppMonitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(apiportalPortalTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiportalPortalTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
