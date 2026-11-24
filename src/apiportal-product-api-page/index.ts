/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalProductApiPageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Three-mode content: write with either Overrides or None; the service populates ApiUrl, OperationName and Body on Read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#display_content ApiportalProductApiPage#display_content}
  */
  readonly displayContent?: ApiportalProductApiPageDisplayContent;
  /**
  * Identifier of the Managed API this page documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#managed_api_id ApiportalProductApiPage#managed_api_id}
  */
  readonly managedApiId?: string;
  /**
  * The identifier of the parent Product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#product_id ApiportalProductApiPage#product_id}
  */
  readonly productId: string;
  /**
  * The tags associated with the product API page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#tags ApiportalProductApiPage#tags}
  */
  readonly tags?: ApiportalProductApiPageTags[] | cdktn.IResolvable;
  /**
  * Whether the interactive TryIt UI is enabled for this API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#try_it_state ApiportalProductApiPage#try_it_state}
  */
  readonly tryItState?: string;
}
export interface ApiportalProductApiPageApiIdIdentifierParts {
}

export function apiportalProductApiPageApiIdIdentifierPartsToTerraform(struct?: ApiportalProductApiPageApiIdIdentifierParts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiportalProductApiPageApiIdIdentifierPartsToHclTerraform(struct?: ApiportalProductApiPageApiIdIdentifierParts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiportalProductApiPageApiIdIdentifierPartsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalProductApiPageApiIdIdentifierParts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductApiPageApiIdIdentifierParts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}
export interface ApiportalProductApiPageApiId {
}

export function apiportalProductApiPageApiIdToTerraform(struct?: ApiportalProductApiPageApiId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiportalProductApiPageApiIdToHclTerraform(struct?: ApiportalProductApiPageApiId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiportalProductApiPageApiIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalProductApiPageApiId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductApiPageApiId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier_parts - computed: true, optional: false, required: false
  private _identifierParts = new ApiportalProductApiPageApiIdIdentifierPartsOutputReference(this, "identifier_parts");
  public get identifierParts() {
    return this._identifierParts;
  }
}
export interface ApiportalProductApiPageDisplayContentOverrides {
  /**
  * Override for the API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#api_url ApiportalProductApiPage#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Override for the documentation body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#body ApiportalProductApiPage#body}
  */
  readonly body?: string;
  /**
  * Override for the operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#operation_name ApiportalProductApiPage#operation_name}
  */
  readonly operationName?: string;
}

export function apiportalProductApiPageDisplayContentOverridesToTerraform(struct?: ApiportalProductApiPageDisplayContentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_url: cdktn.stringToTerraform(struct!.apiUrl),
    body: cdktn.stringToTerraform(struct!.body),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
  }
}


export function apiportalProductApiPageDisplayContentOverridesToHclTerraform(struct?: ApiportalProductApiPageDisplayContentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_url: {
      value: cdktn.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktn.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalProductApiPageDisplayContentOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalProductApiPageDisplayContentOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductApiPageDisplayContentOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiUrl = undefined;
      this._body = undefined;
      this._operationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiUrl = value.apiUrl;
      this._body = value.body;
      this._operationName = value.operationName;
    }
  }

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // operation_name - computed: true, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }
}
export interface ApiportalProductApiPageDisplayContent {
  /**
  * Marker selecting the default service-rendered content with no overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#none ApiportalProductApiPage#none}
  */
  readonly none?: string;
  /**
  * Customer-supplied overrides for the service-rendered API documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#overrides ApiportalProductApiPage#overrides}
  */
  readonly overrides?: ApiportalProductApiPageDisplayContentOverrides;
}

export function apiportalProductApiPageDisplayContentToTerraform(struct?: ApiportalProductApiPageDisplayContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    none: cdktn.stringToTerraform(struct!.none),
    overrides: apiportalProductApiPageDisplayContentOverridesToTerraform(struct!.overrides),
  }
}


export function apiportalProductApiPageDisplayContentToHclTerraform(struct?: ApiportalProductApiPageDisplayContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    none: {
      value: cdktn.stringToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: apiportalProductApiPageDisplayContentOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalProductApiPageDisplayContentOverrides",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalProductApiPageDisplayContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalProductApiPageDisplayContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductApiPageDisplayContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._overrides.internalValue = value.overrides;
    }
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
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

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new ApiportalProductApiPageDisplayContentOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ApiportalProductApiPageDisplayContentOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface ApiportalProductApiPageStatusException {
}

export function apiportalProductApiPageStatusExceptionToTerraform(struct?: ApiportalProductApiPageStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiportalProductApiPageStatusExceptionToHclTerraform(struct?: ApiportalProductApiPageStatusException): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiportalProductApiPageStatusExceptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalProductApiPageStatusException | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductApiPageStatusException | undefined) {
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
export interface ApiportalProductApiPageTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#key ApiportalProductApiPage#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#value ApiportalProductApiPage#value}
  */
  readonly value?: string;
}

export function apiportalProductApiPageTagsToTerraform(struct?: ApiportalProductApiPageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apiportalProductApiPageTagsToHclTerraform(struct?: ApiportalProductApiPageTags | cdktn.IResolvable): any {
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

export class ApiportalProductApiPageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiportalProductApiPageTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiportalProductApiPageTags | cdktn.IResolvable | undefined) {
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

export class ApiportalProductApiPageTagsList extends cdktn.ComplexList {
  public internalValue? : ApiportalProductApiPageTags[] | cdktn.IResolvable

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
  public get(index: number): ApiportalProductApiPageTagsOutputReference {
    return new ApiportalProductApiPageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page}
*/
export class ApiportalProductApiPage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_product_api_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalProductApiPage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalProductApiPage to import
  * @param importFromId The id of the existing ApiportalProductApiPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalProductApiPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_product_api_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_api_page awscc_apiportal_product_api_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalProductApiPageConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalProductApiPageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_product_api_page',
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
    this._displayContent.internalValue = config.displayContent;
    this._managedApiId = config.managedApiId;
    this._productId = config.productId;
    this._tags.internalValue = config.tags;
    this._tryItState = config.tryItState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: false, required: false
  private _apiId = new ApiportalProductApiPageApiIdOutputReference(this, "api_id");
  public get apiId() {
    return this._apiId;
  }

  // display_content - computed: true, optional: true, required: false
  private _displayContent = new ApiportalProductApiPageDisplayContentOutputReference(this, "display_content");
  public get displayContent() {
    return this._displayContent;
  }
  public putDisplayContent(value: ApiportalProductApiPageDisplayContent) {
    this._displayContent.internalValue = value;
  }
  public resetDisplayContent() {
    this._displayContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayContentInput() {
    return this._displayContent.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_api_id - computed: true, optional: true, required: false
  private _managedApiId?: string; 
  public get managedApiId() {
    return this.getStringAttribute('managed_api_id');
  }
  public set managedApiId(value: string) {
    this._managedApiId = value;
  }
  public resetManagedApiId() {
    this._managedApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedApiIdInput() {
    return this._managedApiId;
  }

  // product_api_page_arn - computed: true, optional: false, required: false
  public get productApiPageArn() {
    return this.getStringAttribute('product_api_page_arn');
  }

  // product_api_page_id - computed: true, optional: false, required: false
  public get productApiPageId() {
    return this.getStringAttribute('product_api_page_id');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_exception - computed: true, optional: false, required: false
  private _statusException = new ApiportalProductApiPageStatusExceptionOutputReference(this, "status_exception");
  public get statusException() {
    return this._statusException;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApiportalProductApiPageTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApiportalProductApiPageTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // try_it_state - computed: true, optional: true, required: false
  private _tryItState?: string; 
  public get tryItState() {
    return this.getStringAttribute('try_it_state');
  }
  public set tryItState(value: string) {
    this._tryItState = value;
  }
  public resetTryItState() {
    this._tryItState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryItStateInput() {
    return this._tryItState;
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
      display_content: apiportalProductApiPageDisplayContentToTerraform(this._displayContent.internalValue),
      managed_api_id: cdktn.stringToTerraform(this._managedApiId),
      product_id: cdktn.stringToTerraform(this._productId),
      tags: cdktn.listMapper(apiportalProductApiPageTagsToTerraform, false)(this._tags.internalValue),
      try_it_state: cdktn.stringToTerraform(this._tryItState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_content: {
        value: apiportalProductApiPageDisplayContentToHclTerraform(this._displayContent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiportalProductApiPageDisplayContent",
      },
      managed_api_id: {
        value: cdktn.stringToHclTerraform(this._managedApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktn.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(apiportalProductApiPageTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiportalProductApiPageTagsList",
      },
      try_it_state: {
        value: cdktn.stringToHclTerraform(this._tryItState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
