/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection#id DataAwsccGlueConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code - computed: true, optional: false, required: false
  public get authorizationCode() {
    return this.getStringAttribute('authorization_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_managed_client_application_reference - computed: true, optional: false, required: false
  public get awsManagedClientApplicationReference() {
    return this.getStringAttribute('aws_managed_client_application_reference');
  }

  // user_managed_client_application_client_id - computed: true, optional: false, required: false
  public get userManagedClientApplicationClientId() {
    return this.getStringAttribute('user_managed_client_application_client_id');
  }
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // jwt_token - computed: true, optional: false, required: false
  public get jwtToken() {
    return this.getStringAttribute('jwt_token');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // user_managed_client_application_client_secret - computed: true, optional: false, required: false
  public get userManagedClientApplicationClientSecret() {
    return this.getStringAttribute('user_managed_client_application_client_secret');
  }
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code_properties - computed: true, optional: false, required: false
  private _authorizationCodeProperties = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(this, "authorization_code_properties");
  public get authorizationCodeProperties() {
    return this._authorizationCodeProperties;
  }

  // o_auth_2_client_application - computed: true, optional: false, required: false
  private _oAuth2ClientApplication = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(this, "o_auth_2_client_application");
  public get oAuth2ClientApplication() {
    return this._oAuth2ClientApplication;
  }

  // o_auth_2_credentials - computed: true, optional: false, required: false
  private _oAuth2Credentials = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(this, "o_auth_2_credentials");
  public get oAuth2Credentials() {
    return this._oAuth2Credentials;
  }

  // o_auth_2_grant_type - computed: true, optional: false, required: false
  public get oAuth2GrantType() {
    return this.getStringAttribute('o_auth_2_grant_type');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // token_url_parameters_map - computed: true, optional: false, required: false
  public get tokenUrlParametersMap() {
    return this.getStringAttribute('token_url_parameters_map');
  }
}
export interface DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration {
}

export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationToTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputAuthenticationConfigurationToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // basic_authentication_credentials - computed: true, optional: false, required: false
  private _basicAuthenticationCredentials = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(this, "basic_authentication_credentials");
  public get basicAuthenticationCredentials() {
    return this._basicAuthenticationCredentials;
  }

  // custom_authentication_credentials - computed: true, optional: false, required: false
  public get customAuthenticationCredentials() {
    return this.getStringAttribute('custom_authentication_credentials');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // o_auth_2_properties - computed: true, optional: false, required: false
  private _oAuth2Properties = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(this, "o_auth_2_properties");
  public get oAuth2Properties() {
    return this._oAuth2Properties;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements {
}

export function dataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsToTerraform(struct?: DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface DataAwsccGlueConnectionConnectionInput {
}

export function dataAwsccGlueConnectionConnectionInputToTerraform(struct?: DataAwsccGlueConnectionConnectionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueConnectionConnectionInputToHclTerraform(struct?: DataAwsccGlueConnectionConnectionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueConnectionConnectionInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueConnectionConnectionInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueConnectionConnectionInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // athena_properties - computed: true, optional: false, required: false
  public get athenaProperties() {
    return this.getStringAttribute('athena_properties');
  }

  // authentication_configuration - computed: true, optional: false, required: false
  private _authenticationConfiguration = new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }

  // connection_properties - computed: true, optional: false, required: false
  public get connectionProperties() {
    return this.getStringAttribute('connection_properties');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getListAttribute('match_criteria');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // physical_connection_requirements - computed: true, optional: false, required: false
  private _physicalConnectionRequirements = new DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference(this, "physical_connection_requirements");
  public get physicalConnectionRequirements() {
    return this._physicalConnectionRequirements;
  }

  // python_properties - computed: true, optional: false, required: false
  public get pythonProperties() {
    return this.getStringAttribute('python_properties');
  }

  // spark_properties - computed: true, optional: false, required: false
  public get sparkProperties() {
    return this.getStringAttribute('spark_properties');
  }

  // validate_credentials - computed: true, optional: false, required: false
  public get validateCredentials() {
    return this.getBooleanAttribute('validate_credentials');
  }

  // validate_for_compute_environments - computed: true, optional: false, required: false
  public get validateForComputeEnvironments() {
    return this.getListAttribute('validate_for_compute_environments');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection awscc_glue_connection}
*/
export class DataAwsccGlueConnection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueConnection to import
  * @param importFromId The id of the existing DataAwsccGlueConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection awscc_glue_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_connection',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // connection_input - computed: true, optional: false, required: false
  private _connectionInput = new DataAwsccGlueConnectionConnectionInputOutputReference(this, "connection_input");
  public get connectionInput() {
    return this._connectionInput;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
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
