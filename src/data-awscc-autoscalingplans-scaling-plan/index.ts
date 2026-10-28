/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAutoscalingplansScalingPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan#id DataAwsccAutoscalingplansScalingPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters {
}

export function dataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference {
    return new DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingplansScalingPlanApplicationSource {
}

export function dataAwsccAutoscalingplansScalingPlanApplicationSourceToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanApplicationSourceToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanApplicationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanApplicationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanApplicationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudformation_stack_arn - computed: true, optional: false, required: false
  public get cloudformationStackArn() {
    return this.getStringAttribute('cloudformation_stack_arn');
  }

  // tag_filters - computed: true, optional: false, required: false
  private _tagFilters = new DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference {
    return new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_load_metric_type - computed: true, optional: false, required: false
  public get predefinedLoadMetricType() {
    return this.getStringAttribute('predefined_load_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference {
    return new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_scaling_metric_type - computed: true, optional: false, required: false
  public get predefinedScalingMetricType() {
    return this.getStringAttribute('predefined_scaling_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customized_scaling_metric_specification - computed: true, optional: false, required: false
  private _customizedScalingMetricSpecification = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // estimated_instance_warmup - computed: true, optional: false, required: false
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }

  // predefined_scaling_metric_specification - computed: true, optional: false, required: false
  private _predefinedScalingMetricSpecification = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference {
    return new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingplansScalingPlanScalingInstructions {
}

export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsToTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingplansScalingPlanScalingInstructionsToHclTerraform(struct?: DataAwsccAutoscalingplansScalingPlanScalingInstructions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingplansScalingPlanScalingInstructions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingplansScalingPlanScalingInstructions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customized_load_metric_specification - computed: true, optional: false, required: false
  private _customizedLoadMetricSpecification = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }

  // disable_dynamic_scaling - computed: true, optional: false, required: false
  public get disableDynamicScaling() {
    return this.getBooleanAttribute('disable_dynamic_scaling');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // predefined_load_metric_specification - computed: true, optional: false, required: false
  private _predefinedLoadMetricSpecification = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }

  // predictive_scaling_max_capacity_behavior - computed: true, optional: false, required: false
  public get predictiveScalingMaxCapacityBehavior() {
    return this.getStringAttribute('predictive_scaling_max_capacity_behavior');
  }

  // predictive_scaling_max_capacity_buffer - computed: true, optional: false, required: false
  public get predictiveScalingMaxCapacityBuffer() {
    return this.getNumberAttribute('predictive_scaling_max_capacity_buffer');
  }

  // predictive_scaling_mode - computed: true, optional: false, required: false
  public get predictiveScalingMode() {
    return this.getStringAttribute('predictive_scaling_mode');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // scalable_dimension - computed: true, optional: false, required: false
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }

  // scaling_policy_update_behavior - computed: true, optional: false, required: false
  public get scalingPolicyUpdateBehavior() {
    return this.getStringAttribute('scaling_policy_update_behavior');
  }

  // scheduled_action_buffer_time - computed: true, optional: false, required: false
  public get scheduledActionBufferTime() {
    return this.getNumberAttribute('scheduled_action_buffer_time');
  }

  // service_namespace - computed: true, optional: false, required: false
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }

  // target_tracking_configurations - computed: true, optional: false, required: false
  private _targetTrackingConfigurations = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList(this, "target_tracking_configurations", false);
  public get targetTrackingConfigurations() {
    return this._targetTrackingConfigurations;
  }
}

export class DataAwsccAutoscalingplansScalingPlanScalingInstructionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference {
    return new DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}
*/
export class DataAwsccAutoscalingplansScalingPlan extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscalingplans_scaling_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAutoscalingplansScalingPlan to import
  * @param importFromId The id of the existing DataAwsccAutoscalingplansScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAutoscalingplansScalingPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscalingplans_scaling_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAutoscalingplansScalingPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAutoscalingplansScalingPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscalingplans_scaling_plan',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.107.0',
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

  // application_source - computed: true, optional: false, required: false
  private _applicationSource = new DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference(this, "application_source");
  public get applicationSource() {
    return this._applicationSource;
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

  // scaling_instructions - computed: true, optional: false, required: false
  private _scalingInstructions = new DataAwsccAutoscalingplansScalingPlanScalingInstructionsList(this, "scaling_instructions", false);
  public get scalingInstructions() {
    return this._scalingInstructions;
  }

  // scaling_plan_arn - computed: true, optional: false, required: false
  public get scalingPlanArn() {
    return this.getStringAttribute('scaling_plan_arn');
  }

  // scaling_plan_name - computed: true, optional: false, required: false
  public get scalingPlanName() {
    return this.getStringAttribute('scaling_plan_name');
  }

  // scaling_plan_version - computed: true, optional: false, required: false
  public get scalingPlanVersion() {
    return this.getStringAttribute('scaling_plan_version');
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
