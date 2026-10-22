/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AutoscalingplansScalingPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * A CloudFormation stack or a set of tags. You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}
  */
  readonly applicationSource: AutoscalingplansScalingPlanApplicationSource;
  /**
  * The scaling instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_instructions AutoscalingplansScalingPlan#scaling_instructions}
  */
  readonly scalingInstructions: AutoscalingplansScalingPlanScalingInstructions[] | cdktn.IResolvable;
}
export interface AutoscalingplansScalingPlanApplicationSourceTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}
  */
  readonly key?: string;
  /**
  * The tag values (0 to 20).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}
  */
  readonly values?: string[];
}

export function autoscalingplansScalingPlanApplicationSourceTagFiltersToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function autoscalingplansScalingPlanApplicationSourceTagFiltersToHclTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilters | cdktn.IResolvable): any {
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

export class AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingplansScalingPlanApplicationSourceTagFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanApplicationSourceTagFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

export class AutoscalingplansScalingPlanApplicationSourceTagFiltersList extends cdktn.ComplexList {
  public internalValue? : AutoscalingplansScalingPlanApplicationSourceTagFilters[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference {
    return new AutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingplansScalingPlanApplicationSource {
  /**
  * The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}
  */
  readonly cloudformationStackArn?: string;
  /**
  * A set of tag filters (keys and values). Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#tag_filters AutoscalingplansScalingPlan#tag_filters}
  */
  readonly tagFilters?: AutoscalingplansScalingPlanApplicationSourceTagFilters[] | cdktn.IResolvable;
}

export function autoscalingplansScalingPlanApplicationSourceToTerraform(struct?: AutoscalingplansScalingPlanApplicationSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudformation_stack_arn: cdktn.stringToTerraform(struct!.cloudformationStackArn),
    tag_filters: cdktn.listMapper(autoscalingplansScalingPlanApplicationSourceTagFiltersToTerraform, false)(struct!.tagFilters),
  }
}


export function autoscalingplansScalingPlanApplicationSourceToHclTerraform(struct?: AutoscalingplansScalingPlanApplicationSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudformation_stack_arn: {
      value: cdktn.stringToHclTerraform(struct!.cloudformationStackArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(autoscalingplansScalingPlanApplicationSourceTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingplansScalingPlanApplicationSourceTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingplansScalingPlanApplicationSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudformationStackArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudformationStackArn = this._cloudformationStackArn;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanApplicationSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudformationStackArn = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudformationStackArn = value.cloudformationStackArn;
      this._tagFilters.internalValue = value.tagFilters;
    }
  }

  // cloudformation_stack_arn - computed: true, optional: true, required: false
  private _cloudformationStackArn?: string; 
  public get cloudformationStackArn() {
    return this.getStringAttribute('cloudformation_stack_arn');
  }
  public set cloudformationStackArn(value: string) {
    this._cloudformationStackArn = value;
  }
  public resetCloudformationStackArn() {
    this._cloudformationStackArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudformationStackArnInput() {
    return this._cloudformationStackArn;
  }

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new AutoscalingplansScalingPlanApplicationSourceTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: AutoscalingplansScalingPlanApplicationSourceTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}
export interface AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions {
  /**
  * The name of the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}
  */
  readonly value?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference {
    return new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification {
  /**
  * The dimensions of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}
  */
  readonly dimensions?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}
  */
  readonly namespace?: string;
  /**
  * The statistic of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}
  */
  readonly statistic?: string;
  /**
  * The unit of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}
  */
  readonly unit?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    statistic: cdktn.stringToTerraform(struct!.statistic),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
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
}
export interface AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification {
  /**
  * The metric type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}
  */
  readonly predefinedLoadMetricType?: string;
  /**
  * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBTargetGroupRequestCount and there is a target group for an Application Load Balancer attached to the Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_load_metric_type: cdktn.stringToTerraform(struct!.predefinedLoadMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_load_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedLoadMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedLoadMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedLoadMetricType = this._predefinedLoadMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedLoadMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedLoadMetricType = value.predefinedLoadMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_load_metric_type - computed: true, optional: true, required: false
  private _predefinedLoadMetricType?: string; 
  public get predefinedLoadMetricType() {
    return this.getStringAttribute('predefined_load_metric_type');
  }
  public set predefinedLoadMetricType(value: string) {
    this._predefinedLoadMetricType = value;
  }
  public resetPredefinedLoadMetricType() {
    this._predefinedLoadMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedLoadMetricTypeInput() {
    return this._predefinedLoadMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions {
  /**
  * The name of the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value AutoscalingplansScalingPlan#value}
  */
  readonly value?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference {
    return new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification {
  /**
  * The dimensions of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}
  */
  readonly dimensions?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}
  */
  readonly namespace?: string;
  /**
  * The statistic of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}
  */
  readonly statistic?: string;
  /**
  * The unit of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}
  */
  readonly unit?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    statistic: cdktn.stringToTerraform(struct!.statistic),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
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
}
export interface AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification {
  /**
  * The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}
  */
  readonly predefinedScalingMetricType?: string;
  /**
  * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_scaling_metric_type: cdktn.stringToTerraform(struct!.predefinedScalingMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_scaling_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedScalingMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedScalingMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedScalingMetricType = this._predefinedScalingMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedScalingMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedScalingMetricType = value.predefinedScalingMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_scaling_metric_type - computed: true, optional: true, required: false
  private _predefinedScalingMetricType?: string; 
  public get predefinedScalingMetricType() {
    return this.getStringAttribute('predefined_scaling_metric_type');
  }
  public set predefinedScalingMetricType(value: string) {
    this._predefinedScalingMetricType = value;
  }
  public resetPredefinedScalingMetricType() {
    this._predefinedScalingMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedScalingMetricTypeInput() {
    return this._predefinedScalingMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations {
  /**
  * A customized metric. You can specify either a predefined metric or a customized metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}
  */
  readonly customizedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification;
  /**
  * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * A predefined metric. You can specify either a predefined metric or a customized metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}
  */
  readonly predefinedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification;
  /**
  * The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * The target value for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}
  */
  readonly targetValue: number;
}

export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customized_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToTerraform(struct!.customizedScalingMetricSpecification),
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    estimated_instance_warmup: cdktn.numberToTerraform(struct!.estimatedInstanceWarmup),
    predefined_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToTerraform(struct!.predefinedScalingMetricSpecification),
    scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customized_scaling_metric_specification: {
      value: autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationToHclTerraform(struct!.customizedScalingMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification",
    },
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    estimated_instance_warmup: {
      value: cdktn.numberToHclTerraform(struct!.estimatedInstanceWarmup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predefined_scaling_metric_specification: {
      value: autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationToHclTerraform(struct!.predefinedScalingMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification",
    },
    scale_in_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
    }
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._estimatedInstanceWarmup !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedInstanceWarmup = this._estimatedInstanceWarmup;
    }
    if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizedScalingMetricSpecification.internalValue = undefined;
      this._disableScaleIn = undefined;
      this._estimatedInstanceWarmup = undefined;
      this._predefinedScalingMetricSpecification.internalValue = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
      this._disableScaleIn = value.disableScaleIn;
      this._estimatedInstanceWarmup = value.estimatedInstanceWarmup;
      this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // customized_scaling_metric_specification - computed: true, optional: true, required: false
  private _customizedScalingMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }
  public putCustomizedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification) {
    this._customizedScalingMetricSpecification.internalValue = value;
  }
  public resetCustomizedScalingMetricSpecification() {
    this._customizedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedScalingMetricSpecificationInput() {
    return this._customizedScalingMetricSpecification.internalValue;
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
  }

  // predefined_scaling_metric_specification - computed: true, optional: true, required: false
  private _predefinedScalingMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }
  public putPredefinedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification) {
    this._predefinedScalingMetricSpecification.internalValue = value;
  }
  public resetPredefinedScalingMetricSpecification() {
    this._predefinedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedScalingMetricSpecificationInput() {
    return this._predefinedScalingMetricSpecification.internalValue;
  }

  // scale_in_cooldown - computed: true, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: true, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: false, optional: false, required: true
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference {
    return new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingplansScalingPlanScalingInstructions {
  /**
  * The customized load metric to use for predictive scaling. This property or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}
  */
  readonly customizedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification;
  /**
  * Controls whether dynamic scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. The default is enabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}
  */
  readonly disableDynamicScaling?: boolean | cdktn.IResolvable;
  /**
  * The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * The minimum capacity of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * The predefined load metric to use for predictive scaling. This property or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}
  */
  readonly predefinedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification;
  /**
  * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}
  */
  readonly predictiveScalingMaxCapacityBehavior?: string;
  /**
  * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. The range is 1-100. Required if PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity, and cannot be used otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}
  */
  readonly predictiveScalingMaxCapacityBuffer?: number;
  /**
  * The predictive scaling mode. The default value is ForecastAndScale. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}
  */
  readonly predictiveScalingMode?: string;
  /**
  * The ID of the resource. This string consists of the resource type and unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}
  */
  readonly resourceId: string;
  /**
  * The scalable dimension associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created. The default value is KeepExternalPolicies. Valid only when configuring dynamic scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}
  */
  readonly scalingPolicyUpdateBehavior?: string;
  /**
  * The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. Valid only when configuring predictive scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}
  */
  readonly scheduledActionBufferTime?: number;
  /**
  * The namespace of the AWS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * The target tracking configurations (up to 10). Each of these structures must specify a unique scaling metric and a target value for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_tracking_configurations AutoscalingplansScalingPlan#target_tracking_configurations}
  */
  readonly targetTrackingConfigurations: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[] | cdktn.IResolvable;
}

export function autoscalingplansScalingPlanScalingInstructionsToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customized_load_metric_specification: autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToTerraform(struct!.customizedLoadMetricSpecification),
    disable_dynamic_scaling: cdktn.booleanToTerraform(struct!.disableDynamicScaling),
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    predefined_load_metric_specification: autoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToTerraform(struct!.predefinedLoadMetricSpecification),
    predictive_scaling_max_capacity_behavior: cdktn.stringToTerraform(struct!.predictiveScalingMaxCapacityBehavior),
    predictive_scaling_max_capacity_buffer: cdktn.numberToTerraform(struct!.predictiveScalingMaxCapacityBuffer),
    predictive_scaling_mode: cdktn.stringToTerraform(struct!.predictiveScalingMode),
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
    scalable_dimension: cdktn.stringToTerraform(struct!.scalableDimension),
    scaling_policy_update_behavior: cdktn.stringToTerraform(struct!.scalingPolicyUpdateBehavior),
    scheduled_action_buffer_time: cdktn.numberToTerraform(struct!.scheduledActionBufferTime),
    service_namespace: cdktn.stringToTerraform(struct!.serviceNamespace),
    target_tracking_configurations: cdktn.listMapper(autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToTerraform, false)(struct!.targetTrackingConfigurations),
  }
}


export function autoscalingplansScalingPlanScalingInstructionsToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customized_load_metric_specification: {
      value: autoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationToHclTerraform(struct!.customizedLoadMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification",
    },
    disable_dynamic_scaling: {
      value: cdktn.booleanToHclTerraform(struct!.disableDynamicScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predefined_load_metric_specification: {
      value: autoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationToHclTerraform(struct!.predefinedLoadMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification",
    },
    predictive_scaling_max_capacity_behavior: {
      value: cdktn.stringToHclTerraform(struct!.predictiveScalingMaxCapacityBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predictive_scaling_max_capacity_buffer: {
      value: cdktn.numberToHclTerraform(struct!.predictiveScalingMaxCapacityBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predictive_scaling_mode: {
      value: cdktn.stringToHclTerraform(struct!.predictiveScalingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktn.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_dimension: {
      value: cdktn.stringToHclTerraform(struct!.scalableDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_policy_update_behavior: {
      value: cdktn.stringToHclTerraform(struct!.scalingPolicyUpdateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_action_buffer_time: {
      value: cdktn.numberToHclTerraform(struct!.scheduledActionBufferTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_namespace: {
      value: cdktn.stringToHclTerraform(struct!.serviceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_tracking_configurations: {
      value: cdktn.listMapperHcl(autoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsToHclTerraform, false)(struct!.targetTrackingConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingplansScalingPlanScalingInstructionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingplansScalingPlanScalingInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
    }
    if (this._disableDynamicScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDynamicScaling = this._disableDynamicScaling;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
    }
    if (this._predictiveScalingMaxCapacityBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveScalingMaxCapacityBehavior = this._predictiveScalingMaxCapacityBehavior;
    }
    if (this._predictiveScalingMaxCapacityBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveScalingMaxCapacityBuffer = this._predictiveScalingMaxCapacityBuffer;
    }
    if (this._predictiveScalingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveScalingMode = this._predictiveScalingMode;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._scalableDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableDimension = this._scalableDimension;
    }
    if (this._scalingPolicyUpdateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicyUpdateBehavior = this._scalingPolicyUpdateBehavior;
    }
    if (this._scheduledActionBufferTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledActionBufferTime = this._scheduledActionBufferTime;
    }
    if (this._serviceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNamespace = this._serviceNamespace;
    }
    if (this._targetTrackingConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingConfigurations = this._targetTrackingConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingplansScalingPlanScalingInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizedLoadMetricSpecification.internalValue = undefined;
      this._disableDynamicScaling = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._predefinedLoadMetricSpecification.internalValue = undefined;
      this._predictiveScalingMaxCapacityBehavior = undefined;
      this._predictiveScalingMaxCapacityBuffer = undefined;
      this._predictiveScalingMode = undefined;
      this._resourceId = undefined;
      this._scalableDimension = undefined;
      this._scalingPolicyUpdateBehavior = undefined;
      this._scheduledActionBufferTime = undefined;
      this._serviceNamespace = undefined;
      this._targetTrackingConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
      this._disableDynamicScaling = value.disableDynamicScaling;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
      this._predictiveScalingMaxCapacityBehavior = value.predictiveScalingMaxCapacityBehavior;
      this._predictiveScalingMaxCapacityBuffer = value.predictiveScalingMaxCapacityBuffer;
      this._predictiveScalingMode = value.predictiveScalingMode;
      this._resourceId = value.resourceId;
      this._scalableDimension = value.scalableDimension;
      this._scalingPolicyUpdateBehavior = value.scalingPolicyUpdateBehavior;
      this._scheduledActionBufferTime = value.scheduledActionBufferTime;
      this._serviceNamespace = value.serviceNamespace;
      this._targetTrackingConfigurations.internalValue = value.targetTrackingConfigurations;
    }
  }

  // customized_load_metric_specification - computed: true, optional: true, required: false
  private _customizedLoadMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }
  public putCustomizedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification) {
    this._customizedLoadMetricSpecification.internalValue = value;
  }
  public resetCustomizedLoadMetricSpecification() {
    this._customizedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedLoadMetricSpecificationInput() {
    return this._customizedLoadMetricSpecification.internalValue;
  }

  // disable_dynamic_scaling - computed: true, optional: true, required: false
  private _disableDynamicScaling?: boolean | cdktn.IResolvable; 
  public get disableDynamicScaling() {
    return this.getBooleanAttribute('disable_dynamic_scaling');
  }
  public set disableDynamicScaling(value: boolean | cdktn.IResolvable) {
    this._disableDynamicScaling = value;
  }
  public resetDisableDynamicScaling() {
    this._disableDynamicScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDynamicScalingInput() {
    return this._disableDynamicScaling;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // predefined_load_metric_specification - computed: true, optional: true, required: false
  private _predefinedLoadMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }
  public putPredefinedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification) {
    this._predefinedLoadMetricSpecification.internalValue = value;
  }
  public resetPredefinedLoadMetricSpecification() {
    this._predefinedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedLoadMetricSpecificationInput() {
    return this._predefinedLoadMetricSpecification.internalValue;
  }

  // predictive_scaling_max_capacity_behavior - computed: true, optional: true, required: false
  private _predictiveScalingMaxCapacityBehavior?: string; 
  public get predictiveScalingMaxCapacityBehavior() {
    return this.getStringAttribute('predictive_scaling_max_capacity_behavior');
  }
  public set predictiveScalingMaxCapacityBehavior(value: string) {
    this._predictiveScalingMaxCapacityBehavior = value;
  }
  public resetPredictiveScalingMaxCapacityBehavior() {
    this._predictiveScalingMaxCapacityBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingMaxCapacityBehaviorInput() {
    return this._predictiveScalingMaxCapacityBehavior;
  }

  // predictive_scaling_max_capacity_buffer - computed: true, optional: true, required: false
  private _predictiveScalingMaxCapacityBuffer?: number; 
  public get predictiveScalingMaxCapacityBuffer() {
    return this.getNumberAttribute('predictive_scaling_max_capacity_buffer');
  }
  public set predictiveScalingMaxCapacityBuffer(value: number) {
    this._predictiveScalingMaxCapacityBuffer = value;
  }
  public resetPredictiveScalingMaxCapacityBuffer() {
    this._predictiveScalingMaxCapacityBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingMaxCapacityBufferInput() {
    return this._predictiveScalingMaxCapacityBuffer;
  }

  // predictive_scaling_mode - computed: true, optional: true, required: false
  private _predictiveScalingMode?: string; 
  public get predictiveScalingMode() {
    return this.getStringAttribute('predictive_scaling_mode');
  }
  public set predictiveScalingMode(value: string) {
    this._predictiveScalingMode = value;
  }
  public resetPredictiveScalingMode() {
    this._predictiveScalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingModeInput() {
    return this._predictiveScalingMode;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // scaling_policy_update_behavior - computed: true, optional: true, required: false
  private _scalingPolicyUpdateBehavior?: string; 
  public get scalingPolicyUpdateBehavior() {
    return this.getStringAttribute('scaling_policy_update_behavior');
  }
  public set scalingPolicyUpdateBehavior(value: string) {
    this._scalingPolicyUpdateBehavior = value;
  }
  public resetScalingPolicyUpdateBehavior() {
    this._scalingPolicyUpdateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyUpdateBehaviorInput() {
    return this._scalingPolicyUpdateBehavior;
  }

  // scheduled_action_buffer_time - computed: true, optional: true, required: false
  private _scheduledActionBufferTime?: number; 
  public get scheduledActionBufferTime() {
    return this.getNumberAttribute('scheduled_action_buffer_time');
  }
  public set scheduledActionBufferTime(value: number) {
    this._scheduledActionBufferTime = value;
  }
  public resetScheduledActionBufferTime() {
    this._scheduledActionBufferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionBufferTimeInput() {
    return this._scheduledActionBufferTime;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // target_tracking_configurations - computed: false, optional: false, required: true
  private _targetTrackingConfigurations = new AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList(this, "target_tracking_configurations", false);
  public get targetTrackingConfigurations() {
    return this._targetTrackingConfigurations;
  }
  public putTargetTrackingConfigurations(value: AutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations[] | cdktn.IResolvable) {
    this._targetTrackingConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationsInput() {
    return this._targetTrackingConfigurations.internalValue;
  }
}

export class AutoscalingplansScalingPlanScalingInstructionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingplansScalingPlanScalingInstructions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingplansScalingPlanScalingInstructionsOutputReference {
    return new AutoscalingplansScalingPlanScalingInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}
*/
export class AutoscalingplansScalingPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscalingplans_scaling_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingplansScalingPlan to import
  * @param importFromId The id of the existing AutoscalingplansScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingplansScalingPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscalingplans_scaling_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingplansScalingPlanConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig) {
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
    this._applicationSource.internalValue = config.applicationSource;
    this._scalingInstructions.internalValue = config.scalingInstructions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_source - computed: false, optional: false, required: true
  private _applicationSource = new AutoscalingplansScalingPlanApplicationSourceOutputReference(this, "application_source");
  public get applicationSource() {
    return this._applicationSource;
  }
  public putApplicationSource(value: AutoscalingplansScalingPlanApplicationSource) {
    this._applicationSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSourceInput() {
    return this._applicationSource.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scaling_instructions - computed: false, optional: false, required: true
  private _scalingInstructions = new AutoscalingplansScalingPlanScalingInstructionsList(this, "scaling_instructions", false);
  public get scalingInstructions() {
    return this._scalingInstructions;
  }
  public putScalingInstructions(value: AutoscalingplansScalingPlanScalingInstructions[] | cdktn.IResolvable) {
    this._scalingInstructions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingInstructionsInput() {
    return this._scalingInstructions.internalValue;
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
      application_source: autoscalingplansScalingPlanApplicationSourceToTerraform(this._applicationSource.internalValue),
      scaling_instructions: cdktn.listMapper(autoscalingplansScalingPlanScalingInstructionsToTerraform, false)(this._scalingInstructions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_source: {
        value: autoscalingplansScalingPlanApplicationSourceToHclTerraform(this._applicationSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingplansScalingPlanApplicationSource",
      },
      scaling_instructions: {
        value: cdktn.listMapperHcl(autoscalingplansScalingPlanScalingInstructionsToHclTerraform, false)(this._scalingInstructions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoscalingplansScalingPlanScalingInstructionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
