/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApiportalPortalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#id DataAwsccApiportalPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig {
}

export function dataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigToTerraform(struct?: DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigToHclTerraform(struct?: DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_client_id - computed: true, optional: false, required: false
  public get appClientId() {
    return this.getStringAttribute('app_client_id');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_domain - computed: true, optional: false, required: false
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}
export interface DataAwsccApiportalPortalAuthorizationAuthorizationConfig {
}

export function dataAwsccApiportalPortalAuthorizationAuthorizationConfigToTerraform(struct?: DataAwsccApiportalPortalAuthorizationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalAuthorizationAuthorizationConfigToHclTerraform(struct?: DataAwsccApiportalPortalAuthorizationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalAuthorizationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalAuthorizationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cognito_config - computed: true, optional: false, required: false
  private _cognitoConfig = new DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(this, "cognito_config");
  public get cognitoConfig() {
    return this._cognitoConfig;
  }

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getStringAttribute('none');
  }
}
export interface DataAwsccApiportalPortalAuthorization {
}

export function dataAwsccApiportalPortalAuthorizationToTerraform(struct?: DataAwsccApiportalPortalAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalAuthorizationToHclTerraform(struct?: DataAwsccApiportalPortalAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalAuthorizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // fine_grained_access_control - computed: true, optional: false, required: false
  public get fineGrainedAccessControl() {
    return this.getStringAttribute('fine_grained_access_control');
  }
}
export interface DataAwsccApiportalPortalEndpointConfigurationAcmManaged {
}

export function dataAwsccApiportalPortalEndpointConfigurationAcmManagedToTerraform(struct?: DataAwsccApiportalPortalEndpointConfigurationAcmManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalEndpointConfigurationAcmManagedToHclTerraform(struct?: DataAwsccApiportalPortalEndpointConfigurationAcmManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalEndpointConfigurationAcmManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalEndpointConfigurationAcmManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
}
export interface DataAwsccApiportalPortalEndpointConfiguration {
}

export function dataAwsccApiportalPortalEndpointConfigurationToTerraform(struct?: DataAwsccApiportalPortalEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalEndpointConfigurationToHclTerraform(struct?: DataAwsccApiportalPortalEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acm_managed - computed: true, optional: false, required: false
  private _acmManaged = new DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference(this, "acm_managed");
  public get acmManaged() {
    return this._acmManaged;
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getStringAttribute('none');
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
export interface DataAwsccApiportalPortalPortalContentThemeCustomColors {
}

export function dataAwsccApiportalPortalPortalContentThemeCustomColorsToTerraform(struct?: DataAwsccApiportalPortalPortalContentThemeCustomColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalPortalContentThemeCustomColorsToHclTerraform(struct?: DataAwsccApiportalPortalPortalContentThemeCustomColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalPortalContentThemeCustomColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalPortalContentThemeCustomColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accent_color - computed: true, optional: false, required: false
  public get accentColor() {
    return this.getStringAttribute('accent_color');
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // error_validation_color - computed: true, optional: false, required: false
  public get errorValidationColor() {
    return this.getStringAttribute('error_validation_color');
  }

  // header_color - computed: true, optional: false, required: false
  public get headerColor() {
    return this.getStringAttribute('header_color');
  }

  // navigation_color - computed: true, optional: false, required: false
  public get navigationColor() {
    return this.getStringAttribute('navigation_color');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataAwsccApiportalPortalPortalContentTheme {
}

export function dataAwsccApiportalPortalPortalContentThemeToTerraform(struct?: DataAwsccApiportalPortalPortalContentTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalPortalContentThemeToHclTerraform(struct?: DataAwsccApiportalPortalPortalContentTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalPortalContentThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalPortalContentTheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalPortalContentTheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_colors - computed: true, optional: false, required: false
  private _customColors = new DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference(this, "custom_colors");
  public get customColors() {
    return this._customColors;
  }

  // logo_uploaded_at - computed: true, optional: false, required: false
  public get logoUploadedAt() {
    return this.getStringAttribute('logo_uploaded_at');
  }
}
export interface DataAwsccApiportalPortalPortalContent {
}

export function dataAwsccApiportalPortalPortalContentToTerraform(struct?: DataAwsccApiportalPortalPortalContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalPortalContentToHclTerraform(struct?: DataAwsccApiportalPortalPortalContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalPortalContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalPortalContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalPortalContent | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // theme - computed: true, optional: false, required: false
  private _theme = new DataAwsccApiportalPortalPortalContentThemeOutputReference(this, "theme");
  public get theme() {
    return this._theme;
  }
}
export interface DataAwsccApiportalPortalStatusException {
}

export function dataAwsccApiportalPortalStatusExceptionToTerraform(struct?: DataAwsccApiportalPortalStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalStatusExceptionToHclTerraform(struct?: DataAwsccApiportalPortalStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalStatusExceptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApiportalPortalStatusException | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalStatusException | undefined) {
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
export interface DataAwsccApiportalPortalTags {
}

export function dataAwsccApiportalPortalTagsToTerraform(struct?: DataAwsccApiportalPortalTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApiportalPortalTagsToHclTerraform(struct?: DataAwsccApiportalPortalTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApiportalPortalTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApiportalPortalTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApiportalPortalTags | undefined) {
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

export class DataAwsccApiportalPortalTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApiportalPortalTagsOutputReference {
    return new DataAwsccApiportalPortalTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal awscc_apiportal_portal}
*/
export class DataAwsccApiportalPortal extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApiportalPortal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApiportalPortal to import
  * @param importFromId The id of the existing DataAwsccApiportalPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApiportalPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal awscc_apiportal_portal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApiportalPortalConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApiportalPortalConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataAwsccApiportalPortalAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  private _endpointConfiguration = new DataAwsccApiportalPortalEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
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

  // included_product_arns - computed: true, optional: false, required: false
  public get includedProductArns() {
    return this.getListAttribute('included_product_arns');
  }

  // logo_uri - computed: true, optional: false, required: false
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }

  // portal_arn - computed: true, optional: false, required: false
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }

  // portal_content - computed: true, optional: false, required: false
  private _portalContent = new DataAwsccApiportalPortalPortalContentOutputReference(this, "portal_content");
  public get portalContent() {
    return this._portalContent;
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

  // rum_app_monitor_name - computed: true, optional: false, required: false
  public get rumAppMonitorName() {
    return this.getStringAttribute('rum_app_monitor_name');
  }

  // status_exception - computed: true, optional: false, required: false
  private _statusException = new DataAwsccApiportalPortalStatusExceptionOutputReference(this, "status_exception");
  public get statusException() {
    return this._statusException;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApiportalPortalTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
