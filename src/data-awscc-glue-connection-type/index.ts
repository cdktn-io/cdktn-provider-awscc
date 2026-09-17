/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/glue_connection_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueConnectionTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/glue_connection_type#id DataAwsccGlueConnectionType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParameters {
}

export function dataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersToTerraform(struct?: DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference {
    return new DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeConnectionPropertiesUrl {
}

export function dataAwsccGlueConnectionTypeConnectionPropertiesUrlToTerraform(struct?: DataAwsccGlueConnectionTypeConnectionPropertiesUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectionPropertiesUrlToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectionPropertiesUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectionPropertiesUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectionPropertiesUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectionPropertiesUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectionProperties {
}

export function dataAwsccGlueConnectionTypeConnectionPropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectionPropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_request_parameters - computed: true, optional: false, required: false
  private _additionalRequestParameters = new DataAwsccGlueConnectionTypeConnectionPropertiesAdditionalRequestParametersList(this, "additional_request_parameters", false);
  public get additionalRequestParameters() {
    return this._additionalRequestParameters;
  }

  // url - computed: true, optional: false, required: false
  private _url = new DataAwsccGlueConnectionTypeConnectionPropertiesUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // username - computed: true, optional: false, required: false
  private _username = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference {
    return new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_parameters - computed: true, optional: false, required: false
  private _authenticationParameters = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersList(this, "authentication_parameters", false);
  public get authenticationParameters() {
    return this._authenticationParameters;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference {
    return new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code - computed: true, optional: false, required: false
  private _authorizationCode = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeOutputReference(this, "authorization_code");
  public get authorizationCode() {
    return this._authorizationCode;
  }

  // authorization_code_url - computed: true, optional: false, required: false
  private _authorizationCodeUrl = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlOutputReference(this, "authorization_code_url");
  public get authorizationCodeUrl() {
    return this._authorizationCodeUrl;
  }

  // client_id - computed: true, optional: false, required: false
  private _clientId = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: false
  private _clientSecret = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }

  // redirect_uri - computed: true, optional: false, required: false
  private _redirectUri = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriOutputReference(this, "redirect_uri");
  public get redirectUri() {
    return this._redirectUri;
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }

  // token_url - computed: true, optional: false, required: false
  private _tokenUrl = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }

  // token_url_parameters - computed: true, optional: false, required: false
  private _tokenUrlParameters = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference {
    return new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  private _clientId = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: false
  private _clientSecret = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }

  // token_url - computed: true, optional: false, required: false
  private _tokenUrl = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }

  // token_url_parameters - computed: true, optional: false, required: false
  private _tokenUrlParameters = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference {
    return new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // jwt_token - computed: true, optional: false, required: false
  private _jwtToken = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenOutputReference(this, "jwt_token");
  public get jwtToken() {
    return this._jwtToken;
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // token_url - computed: true, optional: false, required: false
  private _tokenUrl = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }

  // token_url_parameters - computed: true, optional: false, required: false
  private _tokenUrlParameters = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code_properties - computed: true, optional: false, required: false
  private _authorizationCodeProperties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(this, "authorization_code_properties");
  public get authorizationCodeProperties() {
    return this._authorizationCodeProperties;
  }

  // client_credentials_properties - computed: true, optional: false, required: false
  private _clientCredentialsProperties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesOutputReference(this, "client_credentials_properties");
  public get clientCredentialsProperties() {
    return this._clientCredentialsProperties;
  }

  // jwt_bearer_properties - computed: true, optional: false, required: false
  private _jwtBearerProperties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesOutputReference(this, "jwt_bearer_properties");
  public get jwtBearerProperties() {
    return this._jwtBearerProperties;
  }

  // o_auth_2_grant_type - computed: true, optional: false, required: false
  public get oAuth2GrantType() {
    return this.getStringAttribute('o_auth_2_grant_type');
  }
}
export interface DataAwsccGlueConnectionTypeConnectorAuthenticationConfiguration {
}

export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeConnectorAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeConnectorAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeConnectorAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_types - computed: true, optional: false, required: false
  public get authenticationTypes() {
    return this.getListAttribute('authentication_types');
  }

  // basic_authentication_properties - computed: true, optional: false, required: false
  private _basicAuthenticationProperties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesOutputReference(this, "basic_authentication_properties");
  public get basicAuthenticationProperties() {
    return this._basicAuthenticationProperties;
  }

  // custom_authentication_properties - computed: true, optional: false, required: false
  private _customAuthenticationProperties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesOutputReference(this, "custom_authentication_properties");
  public get customAuthenticationProperties() {
    return this._customAuthenticationProperties;
  }

  // o_auth_2_properties - computed: true, optional: false, required: false
  private _oAuth2Properties = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesOutputReference(this, "o_auth_2_properties");
  public get oAuth2Properties() {
    return this._oAuth2Properties;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_bound_key - computed: true, optional: false, required: false
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }

  // low_bound_key - computed: true, optional: false, required: false
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // between_configuration - computed: true, optional: false, required: false
  private _betweenConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }

  // date_time_format - computed: true, optional: false, required: false
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // operator_mappings - computed: true, optional: false, required: false
  private _operatorMappings = new cdktn.StringMap(this, "operator_mappings");
  public get operatorMappings() {
    return this._operatorMappings;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchema {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_data_type - computed: true, optional: false, required: false
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }

  // filter_overrides - computed: true, optional: false, required: false
  private _filterOverrides = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesOutputReference(this, "filter_overrides");
  public get filterOverrides() {
    return this._filterOverrides;
  }

  // is_nullable - computed: true, optional: false, required: false
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // is_orderable - computed: true, optional: false, required: false
  public get isOrderable() {
    return this.getBooleanAttribute('is_orderable');
  }

  // is_partitionable - computed: true, optional: false, required: false
  public get isPartitionable() {
    return this.getBooleanAttribute('is_partitionable');
  }

  // is_queryable - computed: true, optional: false, required: false
  public get isQueryable() {
    return this.getBooleanAttribute('is_queryable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // response_date_format - computed: true, optional: false, required: false
  public get responseDateFormat() {
    return this.getStringAttribute('response_date_format');
  }
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference {
    return new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_bound_key - computed: true, optional: false, required: false
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }

  // low_bound_key - computed: true, optional: false, required: false
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_parameter_name - computed: true, optional: false, required: false
  public get queryParameterName() {
    return this.getStringAttribute('query_parameter_name');
  }

  // quote_character - computed: true, optional: false, required: false
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }

  // quote_string_values - computed: true, optional: false, required: false
  public get quoteStringValues() {
    return this.getBooleanAttribute('quote_string_values');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // between_configuration - computed: true, optional: false, required: false
  private _betweenConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }

  // date_time_format - computed: true, optional: false, required: false
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }

  // filter_mode - computed: true, optional: false, required: false
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }

  // filter_string_configuration - computed: true, optional: false, required: false
  private _filterStringConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference(this, "filter_string_configuration");
  public get filterStringConfiguration() {
    return this._filterStringConfiguration;
  }

  // operator_mappings - computed: true, optional: false, required: false
  private _operatorMappings = new cdktn.StringMap(this, "operator_mappings");
  public get operatorMappings() {
    return this._operatorMappings;
  }

  // strip_quotes - computed: true, optional: false, required: false
  public get stripQuotes() {
    return this.getBooleanAttribute('strip_quotes');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit_parameter - computed: true, optional: false, required: false
  private _limitParameter = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }

  // next_page - computed: true, optional: false, required: false
  private _nextPage = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference(this, "next_page");
  public get nextPage() {
    return this._nextPage;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit_parameter - computed: true, optional: false, required: false
  private _limitParameter = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }

  // offset_parameter - computed: true, optional: false, required: false
  private _offsetParameter = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference(this, "offset_parameter");
  public get offsetParameter() {
    return this._offsetParameter;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cursor_configuration - computed: true, optional: false, required: false
  private _cursorConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference(this, "cursor_configuration");
  public get cursorConfiguration() {
    return this._cursorConfiguration;
  }

  // offset_configuration - computed: true, optional: false, required: false
  private _offsetConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference(this, "offset_configuration");
  public get offsetConfiguration() {
    return this._offsetConfiguration;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference {
    return new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_path - computed: true, optional: false, required: false
  public get errorPath() {
    return this.getStringAttribute('error_path');
  }

  // result_path - computed: true, optional: false, required: false
  public get resultPath() {
    return this.getStringAttribute('result_path');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // pagination_configuration - computed: true, optional: false, required: false
  private _paginationConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOutputReference(this, "pagination_configuration");
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersList(this, "request_parameters", false);
  public get requestParameters() {
    return this._requestParameters;
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response_configuration - computed: true, optional: false, required: false
  private _responseConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationOutputReference(this, "response_configuration");
  public get responseConfiguration() {
    return this._responseConfiguration;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurations {
}

export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}

export class DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference {
    return new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_bound_key - computed: true, optional: false, required: false
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }

  // low_bound_key - computed: true, optional: false, required: false
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_parameter_name - computed: true, optional: false, required: false
  public get queryParameterName() {
    return this.getStringAttribute('query_parameter_name');
  }

  // quote_character - computed: true, optional: false, required: false
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }

  // quote_string_values - computed: true, optional: false, required: false
  public get quoteStringValues() {
    return this.getBooleanAttribute('quote_string_values');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // between_configuration - computed: true, optional: false, required: false
  private _betweenConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }

  // date_time_format - computed: true, optional: false, required: false
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }

  // filter_mode - computed: true, optional: false, required: false
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }

  // filter_string_configuration - computed: true, optional: false, required: false
  private _filterStringConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference(this, "filter_string_configuration");
  public get filterStringConfiguration() {
    return this._filterStringConfiguration;
  }

  // operator_mappings - computed: true, optional: false, required: false
  private _operatorMappings = new cdktn.StringMap(this, "operator_mappings");
  public get operatorMappings() {
    return this._operatorMappings;
  }

  // strip_quotes - computed: true, optional: false, required: false
  public get stripQuotes() {
    return this.getBooleanAttribute('strip_quotes');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit_parameter - computed: true, optional: false, required: false
  private _limitParameter = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }

  // next_page - computed: true, optional: false, required: false
  private _nextPage = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference(this, "next_page");
  public get nextPage() {
    return this._nextPage;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }

  // header_key - computed: true, optional: false, required: false
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit_parameter - computed: true, optional: false, required: false
  private _limitParameter = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }

  // offset_parameter - computed: true, optional: false, required: false
  private _offsetParameter = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference(this, "offset_parameter");
  public get offsetParameter() {
    return this._offsetParameter;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cursor_configuration - computed: true, optional: false, required: false
  private _cursorConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference(this, "cursor_configuration");
  public get cursorConfiguration() {
    return this._cursorConfiguration;
  }

  // offset_configuration - computed: true, optional: false, required: false
  private _offsetConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference(this, "offset_configuration");
  public get offsetConfiguration() {
    return this._offsetConfiguration;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // key_override - computed: true, optional: false, required: false
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_location - computed: true, optional: false, required: false
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference {
    return new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_path - computed: true, optional: false, required: false
  public get errorPath() {
    return this.getStringAttribute('error_path');
  }

  // result_path - computed: true, optional: false, required: false
  public get resultPath() {
    return this.getStringAttribute('result_path');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // pagination_configuration - computed: true, optional: false, required: false
  private _paginationConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOutputReference(this, "pagination_configuration");
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersList(this, "request_parameters", false);
  public get requestParameters() {
    return this._requestParameters;
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response_configuration - computed: true, optional: false, required: false
  private _responseConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationOutputReference(this, "response_configuration");
  public get responseConfiguration() {
    return this._responseConfiguration;
  }
}
export interface DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
}
export interface DataAwsccGlueConnectionTypeRestConfiguration {
}

export function dataAwsccGlueConnectionTypeRestConfigurationToTerraform(struct?: DataAwsccGlueConnectionTypeRestConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeRestConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionTypeRestConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeRestConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionTypeRestConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeRestConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_configurations - computed: true, optional: false, required: false
  private _entityConfigurations = new DataAwsccGlueConnectionTypeRestConfigurationEntityConfigurationsMap(this, "entity_configurations");
  public get entityConfigurations() {
    return this._entityConfigurations;
  }

  // global_source_configuration - computed: true, optional: false, required: false
  private _globalSourceConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationGlobalSourceConfigurationOutputReference(this, "global_source_configuration");
  public get globalSourceConfiguration() {
    return this._globalSourceConfiguration;
  }

  // validation_endpoint_configuration - computed: true, optional: false, required: false
  private _validationEndpointConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationValidationEndpointConfigurationOutputReference(this, "validation_endpoint_configuration");
  public get validationEndpointConfiguration() {
    return this._validationEndpointConfiguration;
  }
}
export interface DataAwsccGlueConnectionTypeTags {
}

export function dataAwsccGlueConnectionTypeTagsToTerraform(struct?: DataAwsccGlueConnectionTypeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionTypeTagsToHclTerraform(struct?: DataAwsccGlueConnectionTypeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionTypeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueConnectionTypeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionTypeTags | undefined) {
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

export class DataAwsccGlueConnectionTypeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueConnectionTypeTagsOutputReference {
    return new DataAwsccGlueConnectionTypeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/glue_connection_type awscc_glue_connection_type}
*/
export class DataAwsccGlueConnectionType extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_connection_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueConnectionType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueConnectionType to import
  * @param importFromId The id of the existing DataAwsccGlueConnectionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/glue_connection_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueConnectionType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_connection_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/glue_connection_type awscc_glue_connection_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueConnectionTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueConnectionTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_connection_type',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.102.0',
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

  // connection_properties - computed: true, optional: false, required: false
  private _connectionProperties = new DataAwsccGlueConnectionTypeConnectionPropertiesOutputReference(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // connection_type_arn - computed: true, optional: false, required: false
  public get connectionTypeArn() {
    return this.getStringAttribute('connection_type_arn');
  }

  // connector_authentication_configuration - computed: true, optional: false, required: false
  private _connectorAuthenticationConfiguration = new DataAwsccGlueConnectionTypeConnectorAuthenticationConfigurationOutputReference(this, "connector_authentication_configuration");
  public get connectorAuthenticationConfiguration() {
    return this._connectorAuthenticationConfiguration;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // rest_configuration - computed: true, optional: false, required: false
  private _restConfiguration = new DataAwsccGlueConnectionTypeRestConfigurationOutputReference(this, "rest_configuration");
  public get restConfiguration() {
    return this._restConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccGlueConnectionTypeTagsList(this, "tags", false);
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
