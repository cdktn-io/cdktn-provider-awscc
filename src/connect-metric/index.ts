/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectMetricConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the custom metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#description ConnectMetric#description}
  */
  readonly description?: string;
  /**
  * The identifier of the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#instance_arn ConnectMetric#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The calculation configuration for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_calculation ConnectMetric#metric_calculation}
  */
  readonly metricCalculation?: ConnectMetricMetricCalculation;
  /**
  * The name of the custom metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#name ConnectMetric#name}
  */
  readonly name?: string;
  /**
  * Indicates how to classify a positive trend in metric data on the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#positive_trend_indicator ConnectMetric#positive_trend_indicator}
  */
  readonly positiveTrendIndicator?: string;
  /**
  * The status of the custom metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#status ConnectMetric#status}
  */
  readonly status?: string;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#tags ConnectMetric#tags}
  */
  readonly tags?: ConnectMetricTags[] | cdktn.IResolvable;
  /**
  * Display unit for the metric data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#unit ConnectMetric#unit}
  */
  readonly unit?: string;
}
export interface ConnectMetricCreatedUser {
}

export function connectMetricCreatedUserToTerraform(struct?: ConnectMetricCreatedUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function connectMetricCreatedUserToHclTerraform(struct?: ConnectMetricCreatedUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectMetricCreatedUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricCreatedUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricCreatedUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_identity_arn - computed: true, optional: false, required: false
  public get awsIdentityArn() {
    return this.getStringAttribute('aws_identity_arn');
  }

  // connect_user_arn - computed: true, optional: false, required: false
  public get connectUserArn() {
    return this.getStringAttribute('connect_user_arn');
  }
}
export interface ConnectMetricFilters {
}

export function connectMetricFiltersToTerraform(struct?: ConnectMetricFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function connectMetricFiltersToHclTerraform(struct?: ConnectMetricFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectMetricFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectMetricFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ConnectMetricFiltersList extends cdktn.ComplexList {

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
  public get(index: number): ConnectMetricFiltersOutputReference {
    return new ConnectMetricFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectMetricLastModifiedUser {
}

export function connectMetricLastModifiedUserToTerraform(struct?: ConnectMetricLastModifiedUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function connectMetricLastModifiedUserToHclTerraform(struct?: ConnectMetricLastModifiedUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectMetricLastModifiedUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricLastModifiedUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricLastModifiedUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_identity_arn - computed: true, optional: false, required: false
  public get awsIdentityArn() {
    return this.getStringAttribute('aws_identity_arn');
  }

  // connect_user_arn - computed: true, optional: false, required: false
  public get connectUserArn() {
    return this.getStringAttribute('connect_user_arn');
  }
}
export interface ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}
  */
  readonly comparison?: string;
}

export function connectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionToTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
  }
}


export function connectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionToHclTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }
}
export interface ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}
  */
  readonly values?: number[];
}

export function connectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionToTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function connectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionToHclTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}
  */
  readonly values?: string[];
}

export function connectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionToTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function connectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionToHclTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._values = value.values;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ConnectMetricMetricCalculationCalculationComponentsMetricFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#boolean_condition ConnectMetric#boolean_condition}
  */
  readonly booleanCondition?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filter_key ConnectMetric#metric_filter_key}
  */
  readonly metricFilterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#negate ConnectMetric#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#number_condition ConnectMetric#number_condition}
  */
  readonly numberCondition?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#string_condition ConnectMetric#string_condition}
  */
  readonly stringCondition?: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition;
}

export function connectMetricMetricCalculationCalculationComponentsMetricFiltersToTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_condition: connectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionToTerraform(struct!.booleanCondition),
    metric_filter_key: cdktn.stringToTerraform(struct!.metricFilterKey),
    negate: cdktn.booleanToTerraform(struct!.negate),
    number_condition: connectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionToTerraform(struct!.numberCondition),
    string_condition: connectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionToTerraform(struct!.stringCondition),
  }
}


export function connectMetricMetricCalculationCalculationComponentsMetricFiltersToHclTerraform(struct?: ConnectMetricMetricCalculationCalculationComponentsMetricFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_condition: {
      value: connectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionToHclTerraform(struct!.booleanCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition",
    },
    metric_filter_key: {
      value: cdktn.stringToHclTerraform(struct!.metricFilterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_condition: {
      value: connectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionToHclTerraform(struct!.numberCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition",
    },
    string_condition: {
      value: connectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionToHclTerraform(struct!.stringCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectMetricMetricCalculationCalculationComponentsMetricFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanCondition = this._booleanCondition?.internalValue;
    }
    if (this._metricFilterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilterKey = this._metricFilterKey;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._numberCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberCondition = this._numberCondition?.internalValue;
    }
    if (this._stringCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringCondition = this._stringCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculationCalculationComponentsMetricFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanCondition.internalValue = undefined;
      this._metricFilterKey = undefined;
      this._negate = undefined;
      this._numberCondition.internalValue = undefined;
      this._stringCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanCondition.internalValue = value.booleanCondition;
      this._metricFilterKey = value.metricFilterKey;
      this._negate = value.negate;
      this._numberCondition.internalValue = value.numberCondition;
      this._stringCondition.internalValue = value.stringCondition;
    }
  }

  // boolean_condition - computed: true, optional: true, required: false
  private _booleanCondition = new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(this, "boolean_condition");
  public get booleanCondition() {
    return this._booleanCondition;
  }
  public putBooleanCondition(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition) {
    this._booleanCondition.internalValue = value;
  }
  public resetBooleanCondition() {
    this._booleanCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanConditionInput() {
    return this._booleanCondition.internalValue;
  }

  // metric_filter_key - computed: true, optional: true, required: false
  private _metricFilterKey?: string; 
  public get metricFilterKey() {
    return this.getStringAttribute('metric_filter_key');
  }
  public set metricFilterKey(value: string) {
    this._metricFilterKey = value;
  }
  public resetMetricFilterKey() {
    this._metricFilterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterKeyInput() {
    return this._metricFilterKey;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // number_condition - computed: true, optional: true, required: false
  private _numberCondition = new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(this, "number_condition");
  public get numberCondition() {
    return this._numberCondition;
  }
  public putNumberCondition(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition) {
    this._numberCondition.internalValue = value;
  }
  public resetNumberCondition() {
    this._numberCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberConditionInput() {
    return this._numberCondition.internalValue;
  }

  // string_condition - computed: true, optional: true, required: false
  private _stringCondition = new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(this, "string_condition");
  public get stringCondition() {
    return this._stringCondition;
  }
  public putStringCondition(value: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition) {
    this._stringCondition.internalValue = value;
  }
  public resetStringCondition() {
    this._stringCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionInput() {
    return this._stringCondition.internalValue;
  }
}

export class ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList extends cdktn.ComplexList {
  public internalValue? : ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] | cdktn.IResolvable

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
  public get(index: number): ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference {
    return new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectMetricMetricCalculationCalculationComponents {
  /**
  * Metric calculation component alias for use within a calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#alias ConnectMetric#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filters ConnectMetric#metric_filters}
  */
  readonly metricFilters?: ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_id ConnectMetric#metric_id}
  */
  readonly metricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_name ConnectMetric#metric_name}
  */
  readonly metricName?: string;
}

export function connectMetricMetricCalculationCalculationComponentsToTerraform(struct?: ConnectMetricMetricCalculationCalculationComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    metric_filters: cdktn.listMapper(connectMetricMetricCalculationCalculationComponentsMetricFiltersToTerraform, false)(struct!.metricFilters),
    metric_id: cdktn.stringToTerraform(struct!.metricId),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
  }
}


export function connectMetricMetricCalculationCalculationComponentsToHclTerraform(struct?: ConnectMetricMetricCalculationCalculationComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_filters: {
      value: cdktn.listMapperHcl(connectMetricMetricCalculationCalculationComponentsMetricFiltersToHclTerraform, false)(struct!.metricFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList",
    },
    metric_id: {
      value: cdktn.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationCalculationComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectMetricMetricCalculationCalculationComponents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._metricFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilters = this._metricFilters?.internalValue;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculationCalculationComponents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._metricFilters.internalValue = undefined;
      this._metricId = undefined;
      this._metricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._metricFilters.internalValue = value.metricFilters;
      this._metricId = value.metricId;
      this._metricName = value.metricName;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // metric_filters - computed: true, optional: true, required: false
  private _metricFilters = new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(this, "metric_filters", false);
  public get metricFilters() {
    return this._metricFilters;
  }
  public putMetricFilters(value: ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] | cdktn.IResolvable) {
    this._metricFilters.internalValue = value;
  }
  public resetMetricFilters() {
    this._metricFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFiltersInput() {
    return this._metricFilters.internalValue;
  }

  // metric_id - computed: true, optional: true, required: false
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  public resetMetricId() {
    this._metricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}

export class ConnectMetricMetricCalculationCalculationComponentsList extends cdktn.ComplexList {
  public internalValue? : ConnectMetricMetricCalculationCalculationComponents[] | cdktn.IResolvable

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
  public get(index: number): ConnectMetricMetricCalculationCalculationComponentsOutputReference {
    return new ConnectMetricMetricCalculationCalculationComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectMetricMetricCalculation {
  /**
  * The calculation formula
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation ConnectMetric#calculation}
  */
  readonly calculation?: string;
  /**
  * The calculation components for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation_components ConnectMetric#calculation_components}
  */
  readonly calculationComponents?: ConnectMetricMetricCalculationCalculationComponents[] | cdktn.IResolvable;
}

export function connectMetricMetricCalculationToTerraform(struct?: ConnectMetricMetricCalculation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    calculation: cdktn.stringToTerraform(struct!.calculation),
    calculation_components: cdktn.listMapper(connectMetricMetricCalculationCalculationComponentsToTerraform, false)(struct!.calculationComponents),
  }
}


export function connectMetricMetricCalculationToHclTerraform(struct?: ConnectMetricMetricCalculation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    calculation: {
      value: cdktn.stringToHclTerraform(struct!.calculation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calculation_components: {
      value: cdktn.listMapperHcl(connectMetricMetricCalculationCalculationComponentsToHclTerraform, false)(struct!.calculationComponents),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectMetricMetricCalculationCalculationComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMetricMetricCalculationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectMetricMetricCalculation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculation !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculation = this._calculation;
    }
    if (this._calculationComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculationComponents = this._calculationComponents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMetricMetricCalculation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculation = undefined;
      this._calculationComponents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculation = value.calculation;
      this._calculationComponents.internalValue = value.calculationComponents;
    }
  }

  // calculation - computed: true, optional: true, required: false
  private _calculation?: string; 
  public get calculation() {
    return this.getStringAttribute('calculation');
  }
  public set calculation(value: string) {
    this._calculation = value;
  }
  public resetCalculation() {
    this._calculation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationInput() {
    return this._calculation;
  }

  // calculation_components - computed: true, optional: true, required: false
  private _calculationComponents = new ConnectMetricMetricCalculationCalculationComponentsList(this, "calculation_components", false);
  public get calculationComponents() {
    return this._calculationComponents;
  }
  public putCalculationComponents(value: ConnectMetricMetricCalculationCalculationComponents[] | cdktn.IResolvable) {
    this._calculationComponents.internalValue = value;
  }
  public resetCalculationComponents() {
    this._calculationComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationComponentsInput() {
    return this._calculationComponents.internalValue;
  }
}
export interface ConnectMetricTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#key ConnectMetric#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#value ConnectMetric#value}
  */
  readonly value?: string;
}

export function connectMetricTagsToTerraform(struct?: ConnectMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectMetricTagsToHclTerraform(struct?: ConnectMetricTags | cdktn.IResolvable): any {
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

export class ConnectMetricTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectMetricTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectMetricTags | cdktn.IResolvable | undefined) {
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

export class ConnectMetricTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectMetricTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectMetricTagsOutputReference {
    return new ConnectMetricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric awscc_connect_metric}
*/
export class ConnectMetric extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectMetric resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMetric to import
  * @param importFromId The id of the existing ConnectMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric awscc_connect_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMetricConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_metric',
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
    this._description = config.description;
    this._instanceArn = config.instanceArn;
    this._metricCalculation.internalValue = config.metricCalculation;
    this._name = config.name;
    this._positiveTrendIndicator = config.positiveTrendIndicator;
    this._status = config.status;
    this._tags.internalValue = config.tags;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // created_user - computed: true, optional: false, required: false
  private _createdUser = new ConnectMetricCreatedUserOutputReference(this, "created_user");
  public get createdUser() {
    return this._createdUser;
  }

  // creation_method - computed: true, optional: false, required: false
  public get creationMethod() {
    return this.getStringAttribute('creation_method');
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

  // effective_time - computed: true, optional: false, required: false
  public get effectiveTime() {
    return this.getNumberAttribute('effective_time');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new ConnectMetricFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // groupings - computed: true, optional: false, required: false
  public get groupings() {
    return this.getListAttribute('groupings');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // last_modified_region - computed: true, optional: false, required: false
  public get lastModifiedRegion() {
    return this.getStringAttribute('last_modified_region');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // last_modified_user - computed: true, optional: false, required: false
  private _lastModifiedUser = new ConnectMetricLastModifiedUserOutputReference(this, "last_modified_user");
  public get lastModifiedUser() {
    return this._lastModifiedUser;
  }

  // metric_arn - computed: true, optional: false, required: false
  public get metricArn() {
    return this.getStringAttribute('metric_arn');
  }

  // metric_calculation - computed: true, optional: true, required: false
  private _metricCalculation = new ConnectMetricMetricCalculationOutputReference(this, "metric_calculation");
  public get metricCalculation() {
    return this._metricCalculation;
  }
  public putMetricCalculation(value: ConnectMetricMetricCalculation) {
    this._metricCalculation.internalValue = value;
  }
  public resetMetricCalculation() {
    this._metricCalculation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCalculationInput() {
    return this._metricCalculation.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // positive_trend_indicator - computed: true, optional: true, required: false
  private _positiveTrendIndicator?: string; 
  public get positiveTrendIndicator() {
    return this.getStringAttribute('positive_trend_indicator');
  }
  public set positiveTrendIndicator(value: string) {
    this._positiveTrendIndicator = value;
  }
  public resetPositiveTrendIndicator() {
    this._positiveTrendIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveTrendIndicatorInput() {
    return this._positiveTrendIndicator;
  }

  // primary_event_source - computed: true, optional: false, required: false
  public get primaryEventSource() {
    return this.getStringAttribute('primary_event_source');
  }

  // primary_event_source_effective_timestamp_type - computed: true, optional: false, required: false
  public get primaryEventSourceEffectiveTimestampType() {
    return this.getStringAttribute('primary_event_source_effective_timestamp_type');
  }

  // refresh_rate - computed: true, optional: false, required: false
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // supported_stats - computed: true, optional: false, required: false
  public get supportedStats() {
    return this.getListAttribute('supported_stats');
  }

  // supports_custom_calculation - computed: true, optional: false, required: false
  public get supportsCustomCalculation() {
    return this.getBooleanAttribute('supports_custom_calculation');
  }

  // supports_preaggregate_calculation - computed: true, optional: false, required: false
  public get supportsPreaggregateCalculation() {
    return this.getBooleanAttribute('supports_preaggregate_calculation');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectMetricTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectMetricTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      metric_calculation: connectMetricMetricCalculationToTerraform(this._metricCalculation.internalValue),
      name: cdktn.stringToTerraform(this._name),
      positive_trend_indicator: cdktn.stringToTerraform(this._positiveTrendIndicator),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(connectMetricTagsToTerraform, false)(this._tags.internalValue),
      unit: cdktn.stringToTerraform(this._unit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_calculation: {
        value: connectMetricMetricCalculationToHclTerraform(this._metricCalculation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectMetricMetricCalculation",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      positive_trend_indicator: {
        value: cdktn.stringToHclTerraform(this._positiveTrendIndicator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(connectMetricTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectMetricTagsList",
      },
      unit: {
        value: cdktn.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
