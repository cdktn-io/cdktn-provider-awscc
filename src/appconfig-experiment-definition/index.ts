/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppconfigExperimentDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The application ID, name, or ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}
  */
  readonly applicationIdentifier: string;
  /**
  * Human-readable description of the audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}
  */
  readonly audienceDescription?: string;
  /**
  * Rule expression defining the experiment audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}
  */
  readonly audienceRule: string;
  /**
  * The configuration profile ID, name, or ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}
  */
  readonly configurationProfileIdentifier: string;
  /**
  * The control (baseline) variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}
  */
  readonly control: AppconfigExperimentDefinitionControl;
  /**
  * The environment ID, name, or ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}
  */
  readonly environmentIdentifier: string;
  /**
  * The key of the existing flag in the configuration profile to experiment on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}
  */
  readonly flagKey: string;
  /**
  * The hypothesis of the experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}
  */
  readonly hypothesis?: string;
  /**
  * Criteria for launching the experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}
  */
  readonly launchCriteria?: string;
  /**
  * A name for the experiment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}
  */
  readonly name: string;
  /**
  * Tags to associate with the experiment definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}
  */
  readonly tags?: AppconfigExperimentDefinitionTags[] | cdktn.IResolvable;
  /**
  * Treatment variants (1-5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}
  */
  readonly treatments: AppconfigExperimentDefinitionTreatments[] | cdktn.IResolvable;
}
export interface AppconfigExperimentDefinitionControlAttributeValues {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * An array of numeric values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}
  */
  readonly numberArray?: number[];
  /**
  * A numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}
  */
  readonly numberValue?: number;
  /**
  * An array of string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}
  */
  readonly stringArray?: string[];
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}
  */
  readonly stringValue?: string;
}

export function appconfigExperimentDefinitionControlAttributeValuesToTerraform(struct?: AppconfigExperimentDefinitionControlAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    number_array: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.numberArray),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_array: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringArray),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function appconfigExperimentDefinitionControlAttributeValuesToHclTerraform(struct?: AppconfigExperimentDefinitionControlAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_array: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.numberArray),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    number_value: {
      value: cdktn.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_array: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringArray),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppconfigExperimentDefinitionControlAttributeValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppconfigExperimentDefinitionControlAttributeValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._numberArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberArray = this._numberArray;
    }
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringArray = this._stringArray;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppconfigExperimentDefinitionControlAttributeValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._numberArray = undefined;
      this._numberValue = undefined;
      this._stringArray = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._numberArray = value.numberArray;
      this._numberValue = value.numberValue;
      this._stringArray = value.stringArray;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // number_array - computed: true, optional: true, required: false
  private _numberArray?: number[]; 
  public get numberArray() {
    return this.getNumberListAttribute('number_array');
  }
  public set numberArray(value: number[]) {
    this._numberArray = value;
  }
  public resetNumberArray() {
    this._numberArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberArrayInput() {
    return this._numberArray;
  }

  // number_value - computed: true, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_array - computed: true, optional: true, required: false
  private _stringArray?: string[]; 
  public get stringArray() {
    return this.getListAttribute('string_array');
  }
  public set stringArray(value: string[]) {
    this._stringArray = value;
  }
  public resetStringArray() {
    this._stringArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringArrayInput() {
    return this._stringArray;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class AppconfigExperimentDefinitionControlAttributeValuesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: AppconfigExperimentDefinitionControlAttributeValues } | cdktn.IResolvable

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
  public get(key: string): AppconfigExperimentDefinitionControlAttributeValuesOutputReference {
    return new AppconfigExperimentDefinitionControlAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppconfigExperimentDefinitionControl {
  /**
  * Map of attribute name to attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}
  */
  readonly attributeValues?: { [key: string]: AppconfigExperimentDefinitionControlAttributeValues } | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}
  */
  readonly description?: string;
  /**
  * Whether the flag is enabled for this variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Traffic weight percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}
  */
  readonly weight: number;
}

export function appconfigExperimentDefinitionControlToTerraform(struct?: AppconfigExperimentDefinitionControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_values: cdktn.hashMapper(appconfigExperimentDefinitionControlAttributeValuesToTerraform)(struct!.attributeValues),
    description: cdktn.stringToTerraform(struct!.description),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function appconfigExperimentDefinitionControlToHclTerraform(struct?: AppconfigExperimentDefinitionControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_values: {
      value: cdktn.hashMapperHcl(appconfigExperimentDefinitionControlAttributeValuesToHclTerraform)(struct!.attributeValues),
      isBlock: true,
      type: "map",
      storageClassType: "AppconfigExperimentDefinitionControlAttributeValuesMap",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppconfigExperimentDefinitionControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppconfigExperimentDefinitionControl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValues = this._attributeValues?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppconfigExperimentDefinitionControl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValues.internalValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValues.internalValue = value.attributeValues;
      this._description = value.description;
      this._enabled = value.enabled;
      this._weight = value.weight;
    }
  }

  // attribute_values - computed: true, optional: true, required: false
  private _attributeValues = new AppconfigExperimentDefinitionControlAttributeValuesMap(this, "attribute_values");
  public get attributeValues() {
    return this._attributeValues;
  }
  public putAttributeValues(value: { [key: string]: AppconfigExperimentDefinitionControlAttributeValues } | cdktn.IResolvable) {
    this._attributeValues.internalValue = value;
  }
  public resetAttributeValues() {
    this._attributeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValuesInput() {
    return this._attributeValues.internalValue;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface AppconfigExperimentDefinitionTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}
  */
  readonly value?: string;
}

export function appconfigExperimentDefinitionTagsToTerraform(struct?: AppconfigExperimentDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appconfigExperimentDefinitionTagsToHclTerraform(struct?: AppconfigExperimentDefinitionTags | cdktn.IResolvable): any {
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

export class AppconfigExperimentDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppconfigExperimentDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppconfigExperimentDefinitionTags | cdktn.IResolvable | undefined) {
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

export class AppconfigExperimentDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : AppconfigExperimentDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): AppconfigExperimentDefinitionTagsOutputReference {
    return new AppconfigExperimentDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppconfigExperimentDefinitionTreatmentsAttributeValues {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * An array of numeric values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}
  */
  readonly numberArray?: number[];
  /**
  * A numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}
  */
  readonly numberValue?: number;
  /**
  * An array of string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}
  */
  readonly stringArray?: string[];
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}
  */
  readonly stringValue?: string;
}

export function appconfigExperimentDefinitionTreatmentsAttributeValuesToTerraform(struct?: AppconfigExperimentDefinitionTreatmentsAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    number_array: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.numberArray),
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_array: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringArray),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function appconfigExperimentDefinitionTreatmentsAttributeValuesToHclTerraform(struct?: AppconfigExperimentDefinitionTreatmentsAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_array: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.numberArray),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    number_value: {
      value: cdktn.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_array: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringArray),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppconfigExperimentDefinitionTreatmentsAttributeValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._numberArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberArray = this._numberArray;
    }
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringArray = this._stringArray;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppconfigExperimentDefinitionTreatmentsAttributeValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._numberArray = undefined;
      this._numberValue = undefined;
      this._stringArray = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._numberArray = value.numberArray;
      this._numberValue = value.numberValue;
      this._stringArray = value.stringArray;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // number_array - computed: true, optional: true, required: false
  private _numberArray?: number[]; 
  public get numberArray() {
    return this.getNumberListAttribute('number_array');
  }
  public set numberArray(value: number[]) {
    this._numberArray = value;
  }
  public resetNumberArray() {
    this._numberArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberArrayInput() {
    return this._numberArray;
  }

  // number_value - computed: true, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_array - computed: true, optional: true, required: false
  private _stringArray?: string[]; 
  public get stringArray() {
    return this.getListAttribute('string_array');
  }
  public set stringArray(value: string[]) {
    this._stringArray = value;
  }
  public resetStringArray() {
    this._stringArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringArrayInput() {
    return this._stringArray;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class AppconfigExperimentDefinitionTreatmentsAttributeValuesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: AppconfigExperimentDefinitionTreatmentsAttributeValues } | cdktn.IResolvable

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
  public get(key: string): AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference {
    return new AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppconfigExperimentDefinitionTreatments {
  /**
  * Map of attribute name to attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}
  */
  readonly attributeValues?: { [key: string]: AppconfigExperimentDefinitionTreatmentsAttributeValues } | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}
  */
  readonly description?: string;
  /**
  * Whether the flag is enabled for this variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The treatment key (read-only, auto-generated by service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}
  */
  readonly key?: string;
  /**
  * Traffic weight percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}
  */
  readonly weight: number;
}

export function appconfigExperimentDefinitionTreatmentsToTerraform(struct?: AppconfigExperimentDefinitionTreatments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_values: cdktn.hashMapper(appconfigExperimentDefinitionTreatmentsAttributeValuesToTerraform)(struct!.attributeValues),
    description: cdktn.stringToTerraform(struct!.description),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    key: cdktn.stringToTerraform(struct!.key),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function appconfigExperimentDefinitionTreatmentsToHclTerraform(struct?: AppconfigExperimentDefinitionTreatments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_values: {
      value: cdktn.hashMapperHcl(appconfigExperimentDefinitionTreatmentsAttributeValuesToHclTerraform)(struct!.attributeValues),
      isBlock: true,
      type: "map",
      storageClassType: "AppconfigExperimentDefinitionTreatmentsAttributeValuesMap",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppconfigExperimentDefinitionTreatmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppconfigExperimentDefinitionTreatments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValues = this._attributeValues?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppconfigExperimentDefinitionTreatments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValues.internalValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._key = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValues.internalValue = value.attributeValues;
      this._description = value.description;
      this._enabled = value.enabled;
      this._key = value.key;
      this._weight = value.weight;
    }
  }

  // attribute_values - computed: true, optional: true, required: false
  private _attributeValues = new AppconfigExperimentDefinitionTreatmentsAttributeValuesMap(this, "attribute_values");
  public get attributeValues() {
    return this._attributeValues;
  }
  public putAttributeValues(value: { [key: string]: AppconfigExperimentDefinitionTreatmentsAttributeValues } | cdktn.IResolvable) {
    this._attributeValues.internalValue = value;
  }
  public resetAttributeValues() {
    this._attributeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValuesInput() {
    return this._attributeValues.internalValue;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AppconfigExperimentDefinitionTreatmentsList extends cdktn.ComplexList {
  public internalValue? : AppconfigExperimentDefinitionTreatments[] | cdktn.IResolvable

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
  public get(index: number): AppconfigExperimentDefinitionTreatmentsOutputReference {
    return new AppconfigExperimentDefinitionTreatmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}
*/
export class AppconfigExperimentDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appconfig_experiment_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppconfigExperimentDefinition to import
  * @param importFromId The id of the existing AppconfigExperimentDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppconfigExperimentDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_experiment_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigExperimentDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigExperimentDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appconfig_experiment_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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
    this._applicationIdentifier = config.applicationIdentifier;
    this._audienceDescription = config.audienceDescription;
    this._audienceRule = config.audienceRule;
    this._configurationProfileIdentifier = config.configurationProfileIdentifier;
    this._control.internalValue = config.control;
    this._environmentIdentifier = config.environmentIdentifier;
    this._flagKey = config.flagKey;
    this._hypothesis = config.hypothesis;
    this._launchCriteria = config.launchCriteria;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._treatments.internalValue = config.treatments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_identifier - computed: false, optional: false, required: true
  private _applicationIdentifier?: string; 
  public get applicationIdentifier() {
    return this.getStringAttribute('application_identifier');
  }
  public set applicationIdentifier(value: string) {
    this._applicationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdentifierInput() {
    return this._applicationIdentifier;
  }

  // audience_description - computed: true, optional: true, required: false
  private _audienceDescription?: string; 
  public get audienceDescription() {
    return this.getStringAttribute('audience_description');
  }
  public set audienceDescription(value: string) {
    this._audienceDescription = value;
  }
  public resetAudienceDescription() {
    this._audienceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceDescriptionInput() {
    return this._audienceDescription;
  }

  // audience_rule - computed: false, optional: false, required: true
  private _audienceRule?: string; 
  public get audienceRule() {
    return this.getStringAttribute('audience_rule');
  }
  public set audienceRule(value: string) {
    this._audienceRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceRuleInput() {
    return this._audienceRule;
  }

  // configuration_profile_identifier - computed: false, optional: false, required: true
  private _configurationProfileIdentifier?: string; 
  public get configurationProfileIdentifier() {
    return this.getStringAttribute('configuration_profile_identifier');
  }
  public set configurationProfileIdentifier(value: string) {
    this._configurationProfileIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationProfileIdentifierInput() {
    return this._configurationProfileIdentifier;
  }

  // control - computed: false, optional: false, required: true
  private _control = new AppconfigExperimentDefinitionControlOutputReference(this, "control");
  public get control() {
    return this._control;
  }
  public putControl(value: AppconfigExperimentDefinitionControl) {
    this._control.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // environment_identifier - computed: false, optional: false, required: true
  private _environmentIdentifier?: string; 
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }
  public set environmentIdentifier(value: string) {
    this._environmentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdentifierInput() {
    return this._environmentIdentifier;
  }

  // experiment_definition_id - computed: true, optional: false, required: false
  public get experimentDefinitionId() {
    return this.getStringAttribute('experiment_definition_id');
  }

  // flag_key - computed: false, optional: false, required: true
  private _flagKey?: string; 
  public get flagKey() {
    return this.getStringAttribute('flag_key');
  }
  public set flagKey(value: string) {
    this._flagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagKeyInput() {
    return this._flagKey;
  }

  // hypothesis - computed: true, optional: true, required: false
  private _hypothesis?: string; 
  public get hypothesis() {
    return this.getStringAttribute('hypothesis');
  }
  public set hypothesis(value: string) {
    this._hypothesis = value;
  }
  public resetHypothesis() {
    this._hypothesis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypothesisInput() {
    return this._hypothesis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_criteria - computed: true, optional: true, required: false
  private _launchCriteria?: string; 
  public get launchCriteria() {
    return this.getStringAttribute('launch_criteria');
  }
  public set launchCriteria(value: string) {
    this._launchCriteria = value;
  }
  public resetLaunchCriteria() {
    this._launchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchCriteriaInput() {
    return this._launchCriteria;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppconfigExperimentDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppconfigExperimentDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // treatments - computed: false, optional: false, required: true
  private _treatments = new AppconfigExperimentDefinitionTreatmentsList(this, "treatments", false);
  public get treatments() {
    return this._treatments;
  }
  public putTreatments(value: AppconfigExperimentDefinitionTreatments[] | cdktn.IResolvable) {
    this._treatments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get treatmentsInput() {
    return this._treatments.internalValue;
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
      application_identifier: cdktn.stringToTerraform(this._applicationIdentifier),
      audience_description: cdktn.stringToTerraform(this._audienceDescription),
      audience_rule: cdktn.stringToTerraform(this._audienceRule),
      configuration_profile_identifier: cdktn.stringToTerraform(this._configurationProfileIdentifier),
      control: appconfigExperimentDefinitionControlToTerraform(this._control.internalValue),
      environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
      flag_key: cdktn.stringToTerraform(this._flagKey),
      hypothesis: cdktn.stringToTerraform(this._hypothesis),
      launch_criteria: cdktn.stringToTerraform(this._launchCriteria),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(appconfigExperimentDefinitionTagsToTerraform, false)(this._tags.internalValue),
      treatments: cdktn.listMapper(appconfigExperimentDefinitionTreatmentsToTerraform, false)(this._treatments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_identifier: {
        value: cdktn.stringToHclTerraform(this._applicationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience_description: {
        value: cdktn.stringToHclTerraform(this._audienceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience_rule: {
        value: cdktn.stringToHclTerraform(this._audienceRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_profile_identifier: {
        value: cdktn.stringToHclTerraform(this._configurationProfileIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control: {
        value: appconfigExperimentDefinitionControlToHclTerraform(this._control.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppconfigExperimentDefinitionControl",
      },
      environment_identifier: {
        value: cdktn.stringToHclTerraform(this._environmentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flag_key: {
        value: cdktn.stringToHclTerraform(this._flagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypothesis: {
        value: cdktn.stringToHclTerraform(this._hypothesis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_criteria: {
        value: cdktn.stringToHclTerraform(this._launchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(appconfigExperimentDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppconfigExperimentDefinitionTagsList",
      },
      treatments: {
        value: cdktn.listMapperHcl(appconfigExperimentDefinitionTreatmentsToHclTerraform, false)(this._treatments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppconfigExperimentDefinitionTreatmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
