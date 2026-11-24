/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalOrganizationDiscoveryConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional discovery capabilities to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}
  */
  readonly discoveryFeatures?: string[];
  /**
  * Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}
  */
  readonly discoveryFilters?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters;
  /**
  * The AWS services whose resources are scanned to discover APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}
  */
  readonly discoverySources: string[];
  /**
  * The tags associated with the organization discovery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}
  */
  readonly tags?: ApiportalOrganizationDiscoveryConfigurationTags[] | cdktn.IResolvable;
}
export interface ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters {
  /**
  * AWS account IDs to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Organizational unit IDs to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
  /**
  * Resource ARNs to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}
  */
  readonly resourceArns?: string[];
}

export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersToTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    organizational_unit_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnitIds),
    resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceArns),
  }
}


export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersToHclTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_unit_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnitIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._organizationalUnitIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitIds = this._organizationalUnitIds;
    }
    if (this._resourceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArns = this._resourceArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._organizationalUnitIds = undefined;
      this._resourceArns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._organizationalUnitIds = value.organizationalUnitIds;
      this._resourceArns = value.resourceArns;
    }
  }

  // account_ids - computed: true, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktn.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // organizational_unit_ids - computed: true, optional: true, required: false
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }

  // resource_arns - computed: true, optional: true, required: false
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_arns'));
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  public resetResourceArns() {
    this._resourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
  }
}
export interface ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters {
  /**
  * AWS account IDs to include in discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Organizational unit IDs to include in discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
}

export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersToTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    organizational_unit_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnitIds),
  }
}


export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersToHclTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_unit_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnitIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._organizationalUnitIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitIds = this._organizationalUnitIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._organizationalUnitIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._organizationalUnitIds = value.organizationalUnitIds;
    }
  }

  // account_ids - computed: true, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktn.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // organizational_unit_ids - computed: true, optional: true, required: false
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }
}
export interface ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters {
  /**
  * Resources matching any of these filters are excluded from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}
  */
  readonly exclusionFilters?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters;
  /**
  * Only resources matching any of these filters are included in discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}
  */
  readonly inclusionFilters?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters;
}

export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersToTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersToTerraform(struct!.exclusionFilters),
    inclusion_filters: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersToTerraform(struct!.inclusionFilters),
  }
}


export function apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersToHclTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersToHclTerraform(struct!.exclusionFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters",
    },
    inclusion_filters: {
      value: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersToHclTerraform(struct!.inclusionFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters?.internalValue;
    }
    if (this._inclusionFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters.internalValue = undefined;
      this._inclusionFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters.internalValue = value.exclusionFilters;
      this._inclusionFilters.internalValue = value.inclusionFilters;
    }
  }

  // exclusion_filters - computed: true, optional: true, required: false
  private _exclusionFilters = new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(this, "exclusion_filters");
  public get exclusionFilters() {
    return this._exclusionFilters;
  }
  public putExclusionFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters) {
    this._exclusionFilters.internalValue = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters.internalValue;
  }

  // inclusion_filters - computed: true, optional: true, required: false
  private _inclusionFilters = new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(this, "inclusion_filters");
  public get inclusionFilters() {
    return this._inclusionFilters;
  }
  public putInclusionFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters) {
    this._inclusionFilters.internalValue = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters.internalValue;
  }
}
export interface ApiportalOrganizationDiscoveryConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}
  */
  readonly value?: string;
}

export function apiportalOrganizationDiscoveryConfigurationTagsToTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apiportalOrganizationDiscoveryConfigurationTagsToHclTerraform(struct?: ApiportalOrganizationDiscoveryConfigurationTags | cdktn.IResolvable): any {
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

export class ApiportalOrganizationDiscoveryConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiportalOrganizationDiscoveryConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiportalOrganizationDiscoveryConfigurationTags | cdktn.IResolvable | undefined) {
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

export class ApiportalOrganizationDiscoveryConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : ApiportalOrganizationDiscoveryConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): ApiportalOrganizationDiscoveryConfigurationTagsOutputReference {
    return new ApiportalOrganizationDiscoveryConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}
*/
export class ApiportalOrganizationDiscoveryConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_organization_discovery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import
  * @param importFromId The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_organization_discovery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalOrganizationDiscoveryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalOrganizationDiscoveryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_organization_discovery_configuration',
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
    this._discoveryFeatures = config.discoveryFeatures;
    this._discoveryFilters.internalValue = config.discoveryFilters;
    this._discoverySources = config.discoverySources;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_configuration_status - computed: true, optional: false, required: false
  public get discoveryConfigurationStatus() {
    return this.getStringAttribute('discovery_configuration_status');
  }

  // discovery_features - computed: true, optional: true, required: false
  private _discoveryFeatures?: string[]; 
  public get discoveryFeatures() {
    return cdktn.Fn.tolist(this.getListAttribute('discovery_features'));
  }
  public set discoveryFeatures(value: string[]) {
    this._discoveryFeatures = value;
  }
  public resetDiscoveryFeatures() {
    this._discoveryFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryFeaturesInput() {
    return this._discoveryFeatures;
  }

  // discovery_filters - computed: true, optional: true, required: false
  private _discoveryFilters = new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(this, "discovery_filters");
  public get discoveryFilters() {
    return this._discoveryFilters;
  }
  public putDiscoveryFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters) {
    this._discoveryFilters.internalValue = value;
  }
  public resetDiscoveryFilters() {
    this._discoveryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryFiltersInput() {
    return this._discoveryFilters.internalValue;
  }

  // discovery_sources - computed: false, optional: false, required: true
  private _discoverySources?: string[]; 
  public get discoverySources() {
    return cdktn.Fn.tolist(this.getListAttribute('discovery_sources'));
  }
  public set discoverySources(value: string[]) {
    this._discoverySources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySourcesInput() {
    return this._discoverySources;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApiportalOrganizationDiscoveryConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApiportalOrganizationDiscoveryConfigurationTags[] | cdktn.IResolvable) {
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
      discovery_features: cdktn.listMapper(cdktn.stringToTerraform, false)(this._discoveryFeatures),
      discovery_filters: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersToTerraform(this._discoveryFilters.internalValue),
      discovery_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._discoverySources),
      tags: cdktn.listMapper(apiportalOrganizationDiscoveryConfigurationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_features: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._discoveryFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      discovery_filters: {
        value: apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersToHclTerraform(this._discoveryFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters",
      },
      discovery_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._discoverySources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(apiportalOrganizationDiscoveryConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiportalOrganizationDiscoveryConfigurationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
