/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigatewayAuthorizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}
  */
  readonly authorizerCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}
  */
  readonly identitySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#jwt_configuration ApigatewayAuthorizer#jwt_configuration}
  */
  readonly jwtConfiguration?: ApigatewayAuthorizerJwtConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}
  */
  readonly providerArNs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}
  */
  readonly type: string;
}
export interface ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims {
  /**
  * The claim name. Can't be iss, aud, exp, nbf, iat, scope or scp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#claim_name ApigatewayAuthorizer#claim_name}
  */
  readonly claimName?: string;
  /**
  * The value the claim must have. Leave it out to check only that the claim is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#expected_values ApigatewayAuthorizer#expected_values}
  */
  readonly expectedValues?: string[];
  /**
  * The claim's format. SINGLE_STRING is the only format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#format ApigatewayAuthorizer#format}
  */
  readonly format?: string;
  /**
  * Whether the token must carry the claim. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#required ApigatewayAuthorizer#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function apigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsToTerraform(struct?: ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_name: cdktn.stringToTerraform(struct!.claimName),
    expected_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.expectedValues),
    format: cdktn.stringToTerraform(struct!.format),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function apigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsToHclTerraform(struct?: ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_name: {
      value: cdktn.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.expectedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._expectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedValues = this._expectedValues;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._expectedValues = undefined;
      this._format = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._expectedValues = value.expectedValues;
      this._format = value.format;
      this._required = value.required;
    }
  }

  // claim_name - computed: true, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // expected_values - computed: true, optional: true, required: false
  private _expectedValues?: string[]; 
  public get expectedValues() {
    return cdktn.Fn.tolist(this.getListAttribute('expected_values'));
  }
  public set expectedValues(value: string[]) {
    this._expectedValues = value;
  }
  public resetExpectedValues() {
    this._expectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedValuesInput() {
    return this._expectedValues;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList extends cdktn.ComplexList {
  public internalValue? : ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims[] | cdktn.IResolvable

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
  public get(index: number): ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference {
    return new ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayAuthorizerJwtConfigurationIssuers {
  /**
  * Other claims the token must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#additional_claims ApigatewayAuthorizer#additional_claims}
  */
  readonly additionalClaims?: ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims[] | cdktn.IResolvable;
  /**
  * The values that the token's aud claim must contain at least one of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#audiences ApigatewayAuthorizer#audiences}
  */
  readonly audiences?: string[];
  /**
  * The HTTPS URL that the token's iss claim must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#issuer ApigatewayAuthorizer#issuer}
  */
  readonly issuer?: string;
}

export function apigatewayAuthorizerJwtConfigurationIssuersToTerraform(struct?: ApigatewayAuthorizerJwtConfigurationIssuers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_claims: cdktn.listMapper(apigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsToTerraform, false)(struct!.additionalClaims),
    audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.audiences),
    issuer: cdktn.stringToTerraform(struct!.issuer),
  }
}


export function apigatewayAuthorizerJwtConfigurationIssuersToHclTerraform(struct?: ApigatewayAuthorizerJwtConfigurationIssuers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_claims: {
      value: cdktn.listMapperHcl(apigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsToHclTerraform, false)(struct!.additionalClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList",
    },
    audiences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayAuthorizerJwtConfigurationIssuersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApigatewayAuthorizerJwtConfigurationIssuers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaims = this._additionalClaims?.internalValue;
    }
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayAuthorizerJwtConfigurationIssuers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = undefined;
      this._audiences = undefined;
      this._issuer = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = value.additionalClaims;
      this._audiences = value.audiences;
      this._issuer = value.issuer;
    }
  }

  // additional_claims - computed: true, optional: true, required: false
  private _additionalClaims = new ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList(this, "additional_claims", false);
  public get additionalClaims() {
    return this._additionalClaims;
  }
  public putAdditionalClaims(value: ApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims[] | cdktn.IResolvable) {
    this._additionalClaims.internalValue = value;
  }
  public resetAdditionalClaims() {
    this._additionalClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimsInput() {
    return this._additionalClaims.internalValue;
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return cdktn.Fn.tolist(this.getListAttribute('audiences'));
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}

export class ApigatewayAuthorizerJwtConfigurationIssuersList extends cdktn.ComplexList {
  public internalValue? : ApigatewayAuthorizerJwtConfigurationIssuers[] | cdktn.IResolvable

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
  public get(index: number): ApigatewayAuthorizerJwtConfigurationIssuersOutputReference {
    return new ApigatewayAuthorizerJwtConfigurationIssuersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayAuthorizerJwtConfiguration {
  /**
  * The signing algorithms the authorizer accepts: RS256, RS384, RS512, ES256, ES384 or ES512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#default_algorithms ApigatewayAuthorizer#default_algorithms}
  */
  readonly defaultAlgorithms?: string[];
  /**
  * The token issuers the authorizer accepts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#issuers ApigatewayAuthorizer#issuers}
  */
  readonly issuers?: ApigatewayAuthorizerJwtConfigurationIssuers[] | cdktn.IResolvable;
}

export function apigatewayAuthorizerJwtConfigurationToTerraform(struct?: ApigatewayAuthorizerJwtConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.defaultAlgorithms),
    issuers: cdktn.listMapper(apigatewayAuthorizerJwtConfigurationIssuersToTerraform, false)(struct!.issuers),
  }
}


export function apigatewayAuthorizerJwtConfigurationToHclTerraform(struct?: ApigatewayAuthorizerJwtConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_algorithms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.defaultAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuers: {
      value: cdktn.listMapperHcl(apigatewayAuthorizerJwtConfigurationIssuersToHclTerraform, false)(struct!.issuers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayAuthorizerJwtConfigurationIssuersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayAuthorizerJwtConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigatewayAuthorizerJwtConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAlgorithms = this._defaultAlgorithms;
    }
    if (this._issuers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayAuthorizerJwtConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAlgorithms = undefined;
      this._issuers.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAlgorithms = value.defaultAlgorithms;
      this._issuers.internalValue = value.issuers;
    }
  }

  // default_algorithms - computed: true, optional: true, required: false
  private _defaultAlgorithms?: string[]; 
  public get defaultAlgorithms() {
    return cdktn.Fn.tolist(this.getListAttribute('default_algorithms'));
  }
  public set defaultAlgorithms(value: string[]) {
    this._defaultAlgorithms = value;
  }
  public resetDefaultAlgorithms() {
    this._defaultAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAlgorithmsInput() {
    return this._defaultAlgorithms;
  }

  // issuers - computed: true, optional: true, required: false
  private _issuers = new ApigatewayAuthorizerJwtConfigurationIssuersList(this, "issuers", false);
  public get issuers() {
    return this._issuers;
  }
  public putIssuers(value: ApigatewayAuthorizerJwtConfigurationIssuers[] | cdktn.IResolvable) {
    this._issuers.internalValue = value;
  }
  public resetIssuers() {
    this._issuers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer awscc_apigateway_authorizer}
*/
export class ApigatewayAuthorizer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigateway_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigatewayAuthorizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigatewayAuthorizer to import
  * @param importFromId The id of the existing ApigatewayAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigatewayAuthorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apigateway_authorizer awscc_apigateway_authorizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_authorizer',
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
    this._authType = config.authType;
    this._authorizerCredentials = config.authorizerCredentials;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerUri = config.authorizerUri;
    this._identitySource = config.identitySource;
    this._identityValidationExpression = config.identityValidationExpression;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._name = config.name;
    this._providerArNs = config.providerArNs;
    this._restApiId = config.restApiId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // authorizer_credentials - computed: true, optional: true, required: false
  private _authorizerCredentials?: string; 
  public get authorizerCredentials() {
    return this.getStringAttribute('authorizer_credentials');
  }
  public set authorizerCredentials(value: string) {
    this._authorizerCredentials = value;
  }
  public resetAuthorizerCredentials() {
    this._authorizerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsInput() {
    return this._authorizerCredentials;
  }

  // authorizer_id - computed: true, optional: false, required: false
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_uri - computed: true, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_source - computed: true, optional: true, required: false
  private _identitySource?: string; 
  public get identitySource() {
    return this.getStringAttribute('identity_source');
  }
  public set identitySource(value: string) {
    this._identitySource = value;
  }
  public resetIdentitySource() {
    this._identitySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceInput() {
    return this._identitySource;
  }

  // identity_validation_expression - computed: true, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }

  // jwt_configuration - computed: true, optional: true, required: false
  private _jwtConfiguration = new ApigatewayAuthorizerJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: ApigatewayAuthorizerJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
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

  // provider_ar_ns - computed: true, optional: true, required: false
  private _providerArNs?: string[]; 
  public get providerArNs() {
    return cdktn.Fn.tolist(this.getListAttribute('provider_ar_ns'));
  }
  public set providerArNs(value: string[]) {
    this._providerArNs = value;
  }
  public resetProviderArNs() {
    this._providerArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArNsInput() {
    return this._providerArNs;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktn.stringToTerraform(this._authType),
      authorizer_credentials: cdktn.stringToTerraform(this._authorizerCredentials),
      authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(this._authorizerResultTtlInSeconds),
      authorizer_uri: cdktn.stringToTerraform(this._authorizerUri),
      identity_source: cdktn.stringToTerraform(this._identitySource),
      identity_validation_expression: cdktn.stringToTerraform(this._identityValidationExpression),
      jwt_configuration: apigatewayAuthorizerJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      provider_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._providerArNs),
      rest_api_id: cdktn.stringToTerraform(this._restApiId),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktn.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_credentials: {
        value: cdktn.stringToHclTerraform(this._authorizerCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_result_ttl_in_seconds: {
        value: cdktn.numberToHclTerraform(this._authorizerResultTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorizer_uri: {
        value: cdktn.stringToHclTerraform(this._authorizerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_source: {
        value: cdktn.stringToHclTerraform(this._identitySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_validation_expression: {
        value: cdktn.stringToHclTerraform(this._identityValidationExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_configuration: {
        value: apigatewayAuthorizerJwtConfigurationToHclTerraform(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigatewayAuthorizerJwtConfiguration",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_ar_ns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._providerArNs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rest_api_id: {
        value: cdktn.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
