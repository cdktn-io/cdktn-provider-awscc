/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2ClientVpnEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint#id DataAwsccEc2ClientVpnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory {
}

export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
}
export interface DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication {
}

export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // saml_provider_arn - computed: true, optional: false, required: false
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }

  // self_service_saml_provider_arn - computed: true, optional: false, required: false
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }
}
export interface DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication {
}

export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_root_certificate_chain_arn - computed: true, optional: false, required: false
  public get clientRootCertificateChainArn() {
    return this.getStringAttribute('client_root_certificate_chain_arn');
  }
}
export interface DataAwsccEc2ClientVpnEndpointAuthenticationOptions {
}

export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2ClientVpnEndpointAuthenticationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointAuthenticationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory - computed: true, optional: false, required: false
  private _activeDirectory = new DataAwsccEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }

  // federated_authentication - computed: true, optional: false, required: false
  private _federatedAuthentication = new DataAwsccEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(this, "federated_authentication");
  public get federatedAuthentication() {
    return this._federatedAuthentication;
  }

  // mutual_authentication - computed: true, optional: false, required: false
  private _mutualAuthentication = new DataAwsccEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(this, "mutual_authentication");
  public get mutualAuthentication() {
    return this._mutualAuthentication;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference {
    return new DataAwsccEc2ClientVpnEndpointAuthenticationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2ClientVpnEndpointAuthorizationPolicy {
}

export function dataAwsccEc2ClientVpnEndpointAuthorizationPolicyToTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthorizationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointAuthorizationPolicyToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointAuthorizationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointAuthorizationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointAuthorizationPolicy | undefined) {
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

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }

  // shadow_mode - computed: true, optional: false, required: false
  public get shadowMode() {
    return this.getStringAttribute('shadow_mode');
  }
}
export interface DataAwsccEc2ClientVpnEndpointClientConnectOptions {
}

export function dataAwsccEc2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointClientConnectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointClientConnectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
}
export interface DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions {
}

export function dataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointClientLoginBannerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banner_text - computed: true, optional: false, required: false
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions {
}

export function dataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}
export interface DataAwsccEc2ClientVpnEndpointConnectionLogOptions {
}

export function dataAwsccEc2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointConnectionLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointConnectionLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group - computed: true, optional: false, required: false
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }

  // cloudwatch_log_stream - computed: true, optional: false, required: false
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // include_authorization_policy_context - computed: true, optional: false, required: false
  public get includeAuthorizationPolicyContext() {
    return this.getBooleanAttribute('include_authorization_policy_context');
  }
}
export interface DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders {
}

export function dataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersToTerraform(struct?: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_signing_key_url - computed: true, optional: false, required: false
  public get publicSigningKeyUrl() {
    return this.getStringAttribute('public_signing_key_url');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // trust_provider_type - computed: true, optional: false, required: false
  public get trustProviderType() {
    return this.getStringAttribute('trust_provider_type');
  }
}

export class DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference {
    return new DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2ClientVpnEndpointDevicePostureOptions {
}

export function dataAwsccEc2ClientVpnEndpointDevicePostureOptionsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointDevicePostureOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointDevicePostureOptionsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointDevicePostureOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointDevicePostureOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointDevicePostureOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // trust_providers - computed: true, optional: false, required: false
  private _trustProviders = new DataAwsccEc2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(this, "trust_providers", false);
  public get trustProviders() {
    return this._trustProviders;
  }
}
export interface DataAwsccEc2ClientVpnEndpointTagSpecificationsTags {
}

export function dataAwsccEc2ClientVpnEndpointTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointTagSpecificationsTagsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2ClientVpnEndpointTagSpecificationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointTagSpecificationsTags | undefined) {
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

export class DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference {
    return new DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2ClientVpnEndpointTagSpecifications {
}

export function dataAwsccEc2ClientVpnEndpointTagSpecificationsToTerraform(struct?: DataAwsccEc2ClientVpnEndpointTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointTagSpecificationsToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2ClientVpnEndpointTagSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointTagSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2ClientVpnEndpointTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccEc2ClientVpnEndpointTagSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference {
    return new DataAwsccEc2ClientVpnEndpointTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration {
}

export function dataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationToTerraform(struct?: DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationToHclTerraform(struct?: DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2ClientVpnEndpointTransitGatewayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_ids - computed: true, optional: false, required: false
  public get availabilityZoneIds() {
    return this.getListAttribute('availability_zone_ids');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}
*/
export class DataAwsccEc2ClientVpnEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_client_vpn_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2ClientVpnEndpoint to import
  * @param importFromId The id of the existing DataAwsccEc2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2ClientVpnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2ClientVpnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2ClientVpnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
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

  // authentication_options - computed: true, optional: false, required: false
  private _authenticationOptions = new DataAwsccEc2ClientVpnEndpointAuthenticationOptionsList(this, "authentication_options", false);
  public get authenticationOptions() {
    return this._authenticationOptions;
  }

  // authorization_policy - computed: true, optional: false, required: false
  private _authorizationPolicy = new DataAwsccEc2ClientVpnEndpointAuthorizationPolicyOutputReference(this, "authorization_policy");
  public get authorizationPolicy() {
    return this._authorizationPolicy;
  }

  // client_cidr_block - computed: true, optional: false, required: false
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }

  // client_connect_options - computed: true, optional: false, required: false
  private _clientConnectOptions = new DataAwsccEc2ClientVpnEndpointClientConnectOptionsOutputReference(this, "client_connect_options");
  public get clientConnectOptions() {
    return this._clientConnectOptions;
  }

  // client_login_banner_options - computed: true, optional: false, required: false
  private _clientLoginBannerOptions = new DataAwsccEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(this, "client_login_banner_options");
  public get clientLoginBannerOptions() {
    return this._clientLoginBannerOptions;
  }

  // client_route_enforcement_options - computed: true, optional: false, required: false
  private _clientRouteEnforcementOptions = new DataAwsccEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(this, "client_route_enforcement_options");
  public get clientRouteEnforcementOptions() {
    return this._clientRouteEnforcementOptions;
  }

  // client_vpn_endpoint_id - computed: true, optional: false, required: false
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }

  // connection_log_options - computed: true, optional: false, required: false
  private _connectionLogOptions = new DataAwsccEc2ClientVpnEndpointConnectionLogOptionsOutputReference(this, "connection_log_options");
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_posture_options - computed: true, optional: false, required: false
  private _devicePostureOptions = new DataAwsccEc2ClientVpnEndpointDevicePostureOptionsOutputReference(this, "device_posture_options");
  public get devicePostureOptions() {
    return this._devicePostureOptions;
  }

  // disconnect_on_session_timeout - computed: true, optional: false, required: false
  public get disconnectOnSessionTimeout() {
    return this.getBooleanAttribute('disconnect_on_session_timeout');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // endpoint_ip_address_type - computed: true, optional: false, required: false
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // self_service_portal - computed: true, optional: false, required: false
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }

  // server_certificate_arn - computed: true, optional: false, required: false
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }

  // session_timeout_hours - computed: true, optional: false, required: false
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }

  // split_tunnel - computed: true, optional: false, required: false
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }

  // tag_specifications - computed: true, optional: false, required: false
  private _tagSpecifications = new DataAwsccEc2ClientVpnEndpointTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }

  // traffic_ip_address_type - computed: true, optional: false, required: false
  public get trafficIpAddressType() {
    return this.getStringAttribute('traffic_ip_address_type');
  }

  // transit_gateway_configuration - computed: true, optional: false, required: false
  private _transitGatewayConfiguration = new DataAwsccEc2ClientVpnEndpointTransitGatewayConfigurationOutputReference(this, "transit_gateway_configuration");
  public get transitGatewayConfiguration() {
    return this._transitGatewayConfiguration;
  }

  // transport_protocol - computed: true, optional: false, required: false
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpn_port - computed: true, optional: false, required: false
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
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
