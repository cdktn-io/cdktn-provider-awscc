/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueConnectionTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configuration that defines the base URL and additional request parameters needed during connection creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connection_properties GlueConnectionType#connection_properties}
  */
  readonly connectionProperties?: GlueConnectionTypeConnectionProperties;
  /**
  * The name of the connection type. Must be prefixed with REST-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connection_type GlueConnectionType#connection_type}
  */
  readonly connectionType: string;
  /**
  * Configuration that defines supported authentication types and required properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connector_authentication_configuration GlueConnectionType#connector_authentication_configuration}
  */
  readonly connectorAuthenticationConfiguration?: GlueConnectionTypeConnectorAuthenticationConfiguration;
  /**
  * A description of the connection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#description GlueConnectionType#description}
  */
  readonly description?: string;
  /**
  * The integration type for the connection. Currently only REST is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#integration_type GlueConnectionType#integration_type}
  */
  readonly integrationType?: string;
  /**
  * Configuration for HTTP request and response handling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#rest_configuration GlueConnectionType#rest_configuration}
  */
  readonly restConfiguration: GlueConnectionTypeRestConfiguration;
  /**
  * Tags to assign to the connection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#tags GlueConnectionType#tags}
  */
  readonly tags?: GlueConnectionTypeTags[] | cdktn.IResolvable;
}
export interface GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectionPropertiesAdditionalRequestParametersToTerraform(struct?: GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectionPropertiesAdditionalRequestParametersToHclTerraform(struct?: GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference {
    return new GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeConnectionPropertiesUrl {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectionPropertiesUrlToTerraform(struct?: GlueConnectionTypeConnectionPropertiesUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectionPropertiesUrlToHclTerraform(struct?: GlueConnectionTypeConnectionPropertiesUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectionPropertiesUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectionPropertiesUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectionPropertiesUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectionProperties {
  /**
  * Key-value pairs of additional request parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#additional_request_parameters GlueConnectionType#additional_request_parameters}
  */
  readonly additionalRequestParameters?: GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters[] | cdktn.IResolvable;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#url GlueConnectionType#url}
  */
  readonly url?: GlueConnectionTypeConnectionPropertiesUrl;
}

export function glueConnectionTypeConnectionPropertiesToTerraform(struct?: GlueConnectionTypeConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_request_parameters: cdktn.listMapper(glueConnectionTypeConnectionPropertiesAdditionalRequestParametersToTerraform, false)(struct!.additionalRequestParameters),
    url: glueConnectionTypeConnectionPropertiesUrlToTerraform(struct!.url),
  }
}


export function glueConnectionTypeConnectionPropertiesToHclTerraform(struct?: GlueConnectionTypeConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_request_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeConnectionPropertiesAdditionalRequestParametersToHclTerraform, false)(struct!.additionalRequestParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersList",
    },
    url: {
      value: glueConnectionTypeConnectionPropertiesUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectionPropertiesUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequestParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequestParameters = this._additionalRequestParameters?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRequestParameters.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRequestParameters.internalValue = value.additionalRequestParameters;
      this._url.internalValue = value.url;
    }
  }

  // additional_request_parameters - computed: true, optional: true, required: false
  private _additionalRequestParameters = new GlueConnectionTypeConnectionPropertiesAdditionalRequestParametersList(this, "additional_request_parameters", false);
  public get additionalRequestParameters() {
    return this._additionalRequestParameters;
  }
  public putAdditionalRequestParameters(value: GlueConnectionTypeConnectionPropertiesAdditionalRequestParameters[] | cdktn.IResolvable) {
    this._additionalRequestParameters.internalValue = value;
  }
  public resetAdditionalRequestParameters() {
    this._additionalRequestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequestParametersInput() {
    return this._additionalRequestParameters.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url = new GlueConnectionTypeConnectionPropertiesUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: GlueConnectionTypeConnectionPropertiesUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties {
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#password GlueConnectionType#password}
  */
  readonly password?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword;
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#username GlueConnectionType#username}
  */
  readonly username?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToTerraform(struct!.password),
    username: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToTerraform(struct!.username),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword",
    },
    username: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: true, optional: true, required: false
  private _username = new GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference {
    return new GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authentication_parameters GlueConnectionType#authentication_parameters}
  */
  readonly authenticationParameters?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters[] | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_parameters: cdktn.listMapper(glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToTerraform, false)(struct!.authenticationParameters),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersToHclTerraform, false)(struct!.authenticationParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationParameters = this._authenticationParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationParameters.internalValue = value.authenticationParameters;
    }
  }

  // authentication_parameters - computed: true, optional: true, required: false
  private _authenticationParameters = new GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParametersList(this, "authentication_parameters", false);
  public get authenticationParameters() {
    return this._authenticationParameters;
  }
  public putAuthenticationParameters(value: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesAuthenticationParameters[] | cdktn.IResolvable) {
    this._authenticationParameters.internalValue = value;
  }
  public resetAuthenticationParameters() {
    this._authenticationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationParametersInput() {
    return this._authenticationParameters.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference {
    return new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code GlueConnectionType#authorization_code}
  */
  readonly authorizationCode?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code_url GlueConnectionType#authorization_code_url}
  */
  readonly authorizationCodeUrl?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl;
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_id GlueConnectionType#client_id}
  */
  readonly clientId?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId;
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_secret GlueConnectionType#client_secret}
  */
  readonly clientSecret?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type GlueConnectionType#content_type}
  */
  readonly contentType?: string;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#prompt GlueConnectionType#prompt}
  */
  readonly prompt?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#redirect_uri GlueConnectionType#redirect_uri}
  */
  readonly redirectUri?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#scope GlueConnectionType#scope}
  */
  readonly scope?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url GlueConnectionType#token_url}
  */
  readonly tokenUrl?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters GlueConnectionType#token_url_parameters}
  */
  readonly tokenUrlParameters?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters[] | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_code: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToTerraform(struct!.authorizationCode),
    authorization_code_url: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToTerraform(struct!.authorizationCodeUrl),
    client_id: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToTerraform(struct!.clientId),
    client_secret: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToTerraform(struct!.clientSecret),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    prompt: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToTerraform(struct!.prompt),
    redirect_uri: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToTerraform(struct!.redirectUri),
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    scope: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToTerraform(struct!.scope),
    token_url: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToTerraform(struct!.tokenUrl),
    token_url_parameters: cdktn.listMapper(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToTerraform, false)(struct!.tokenUrlParameters),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_code: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeToHclTerraform(struct!.authorizationCode),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode",
    },
    authorization_code_url: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlToHclTerraform(struct!.authorizationCodeUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl",
    },
    client_id: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId",
    },
    client_secret: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptToHclTerraform(struct!.prompt),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt",
    },
    redirect_uri: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriToHclTerraform(struct!.redirectUri),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri",
    },
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope",
    },
    token_url: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlToHclTerraform(struct!.tokenUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl",
    },
    token_url_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersToHclTerraform, false)(struct!.tokenUrlParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCode = this._authorizationCode?.internalValue;
    }
    if (this._authorizationCodeUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCodeUrl = this._authorizationCodeUrl?.internalValue;
    }
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._redirectUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri?.internalValue;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._tokenUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
    }
    if (this._tokenUrlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationCode.internalValue = undefined;
      this._authorizationCodeUrl.internalValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._contentType = undefined;
      this._prompt.internalValue = undefined;
      this._redirectUri.internalValue = undefined;
      this._requestMethod = undefined;
      this._scope.internalValue = undefined;
      this._tokenUrl.internalValue = undefined;
      this._tokenUrlParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationCode.internalValue = value.authorizationCode;
      this._authorizationCodeUrl.internalValue = value.authorizationCodeUrl;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._contentType = value.contentType;
      this._prompt.internalValue = value.prompt;
      this._redirectUri.internalValue = value.redirectUri;
      this._requestMethod = value.requestMethod;
      this._scope.internalValue = value.scope;
      this._tokenUrl.internalValue = value.tokenUrl;
      this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
    }
  }

  // authorization_code - computed: true, optional: true, required: false
  private _authorizationCode = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeOutputReference(this, "authorization_code");
  public get authorizationCode() {
    return this._authorizationCode;
  }
  public putAuthorizationCode(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCode) {
    this._authorizationCode.internalValue = value;
  }
  public resetAuthorizationCode() {
    this._authorizationCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeInput() {
    return this._authorizationCode.internalValue;
  }

  // authorization_code_url - computed: true, optional: true, required: false
  private _authorizationCodeUrl = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrlOutputReference(this, "authorization_code_url");
  public get authorizationCodeUrl() {
    return this._authorizationCodeUrl;
  }
  public putAuthorizationCodeUrl(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesAuthorizationCodeUrl) {
    this._authorizationCodeUrl.internalValue = value;
  }
  public resetAuthorizationCodeUrl() {
    this._authorizationCodeUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeUrlInput() {
    return this._authorizationCodeUrl.internalValue;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientId) {
    this._clientId.internalValue = value;
  }
  public resetClientId() {
    this._clientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // prompt - computed: true, optional: true, required: false
  private _prompt = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesPrompt) {
    this._prompt.internalValue = value;
  }
  public resetPrompt() {
    this._prompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUriOutputReference(this, "redirect_uri");
  public get redirectUri() {
    return this._redirectUri;
  }
  public putRedirectUri(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesRedirectUri) {
    this._redirectUri.internalValue = value;
  }
  public resetRedirectUri() {
    this._redirectUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri.internalValue;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // scope - computed: true, optional: true, required: false
  private _scope = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public putTokenUrl(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrl) {
    this._tokenUrl.internalValue = value;
  }
  public resetTokenUrl() {
    this._tokenUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl.internalValue;
  }

  // token_url_parameters - computed: true, optional: true, required: false
  private _tokenUrlParameters = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
  public putTokenUrlParameters(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParameters[] | cdktn.IResolvable) {
    this._tokenUrlParameters.internalValue = value;
  }
  public resetTokenUrlParameters() {
    this._tokenUrlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlParametersInput() {
    return this._tokenUrlParameters.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference {
    return new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties {
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_id GlueConnectionType#client_id}
  */
  readonly clientId?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId;
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_secret GlueConnectionType#client_secret}
  */
  readonly clientSecret?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type GlueConnectionType#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#scope GlueConnectionType#scope}
  */
  readonly scope?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url GlueConnectionType#token_url}
  */
  readonly tokenUrl?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters GlueConnectionType#token_url_parameters}
  */
  readonly tokenUrlParameters?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters[] | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToTerraform(struct!.clientId),
    client_secret: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToTerraform(struct!.clientSecret),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    scope: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToTerraform(struct!.scope),
    token_url: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToTerraform(struct!.tokenUrl),
    token_url_parameters: cdktn.listMapper(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToTerraform, false)(struct!.tokenUrlParameters),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId",
    },
    client_secret: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope",
    },
    token_url: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlToHclTerraform(struct!.tokenUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl",
    },
    token_url_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersToHclTerraform, false)(struct!.tokenUrlParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._tokenUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
    }
    if (this._tokenUrlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._contentType = undefined;
      this._requestMethod = undefined;
      this._scope.internalValue = undefined;
      this._tokenUrl.internalValue = undefined;
      this._tokenUrlParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._contentType = value.contentType;
      this._requestMethod = value.requestMethod;
      this._scope.internalValue = value.scope;
      this._tokenUrl.internalValue = value.tokenUrl;
      this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientId) {
    this._clientId.internalValue = value;
  }
  public resetClientId() {
    this._clientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // scope - computed: true, optional: true, required: false
  private _scope = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public putTokenUrl(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrl) {
    this._tokenUrl.internalValue = value;
  }
  public resetTokenUrl() {
    this._tokenUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl.internalValue;
  }

  // token_url_parameters - computed: true, optional: true, required: false
  private _tokenUrlParameters = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
  public putTokenUrlParameters(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParameters[] | cdktn.IResolvable) {
    this._tokenUrlParameters.internalValue = value;
  }
  public resetTokenUrlParameters() {
    this._tokenUrlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlParametersInput() {
    return this._tokenUrlParameters.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken {
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property. Must be SECRET for secret properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference {
    return new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type GlueConnectionType#content_type}
  */
  readonly contentType?: string;
  /**
  * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#jwt_token GlueConnectionType#jwt_token}
  */
  readonly jwtToken?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Defines a property configuration for connection types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url GlueConnectionType#token_url}
  */
  readonly tokenUrl?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters GlueConnectionType#token_url_parameters}
  */
  readonly tokenUrlParameters?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters[] | cdktn.IResolvable;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    jwt_token: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToTerraform(struct!.jwtToken),
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    token_url: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToTerraform(struct!.tokenUrl),
    token_url_parameters: cdktn.listMapper(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToTerraform, false)(struct!.tokenUrlParameters),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_token: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenToHclTerraform(struct!.jwtToken),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken",
    },
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlToHclTerraform(struct!.tokenUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl",
    },
    token_url_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersToHclTerraform, false)(struct!.tokenUrlParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._jwtToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtToken = this._jwtToken?.internalValue;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._tokenUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
    }
    if (this._tokenUrlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._jwtToken.internalValue = undefined;
      this._requestMethod = undefined;
      this._tokenUrl.internalValue = undefined;
      this._tokenUrlParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._jwtToken.internalValue = value.jwtToken;
      this._requestMethod = value.requestMethod;
      this._tokenUrl.internalValue = value.tokenUrl;
      this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // jwt_token - computed: true, optional: true, required: false
  private _jwtToken = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtTokenOutputReference(this, "jwt_token");
  public get jwtToken() {
    return this._jwtToken;
  }
  public putJwtToken(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesJwtToken) {
    this._jwtToken.internalValue = value;
  }
  public resetJwtToken() {
    this._jwtToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenInput() {
    return this._jwtToken.internalValue;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlOutputReference(this, "token_url");
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public putTokenUrl(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrl) {
    this._tokenUrl.internalValue = value;
  }
  public resetTokenUrl() {
    this._tokenUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl.internalValue;
  }

  // token_url_parameters - computed: true, optional: true, required: false
  private _tokenUrlParameters = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersList(this, "token_url_parameters", false);
  public get tokenUrlParameters() {
    return this._tokenUrlParameters;
  }
  public putTokenUrlParameters(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParameters[] | cdktn.IResolvable) {
    this._tokenUrlParameters.internalValue = value;
  }
  public resetTokenUrlParameters() {
    this._tokenUrlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlParametersInput() {
    return this._tokenUrlParameters.internalValue;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties {
  /**
  * OAuth2 authorization code configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code_properties GlueConnectionType#authorization_code_properties}
  */
  readonly authorizationCodeProperties?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;
  /**
  * OAuth2 client credentials configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_credentials_properties GlueConnectionType#client_credentials_properties}
  */
  readonly clientCredentialsProperties?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties;
  /**
  * JWT bearer token configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#jwt_bearer_properties GlueConnectionType#jwt_bearer_properties}
  */
  readonly jwtBearerProperties?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties;
  /**
  * The OAuth2 grant type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#o_auth_2_grant_type GlueConnectionType#o_auth_2_grant_type}
  */
  readonly oAuth2GrantType?: string;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_code_properties: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToTerraform(struct!.authorizationCodeProperties),
    client_credentials_properties: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToTerraform(struct!.clientCredentialsProperties),
    jwt_bearer_properties: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToTerraform(struct!.jwtBearerProperties),
    o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_code_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct!.authorizationCodeProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties",
    },
    client_credentials_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesToHclTerraform(struct!.clientCredentialsProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties",
    },
    jwt_bearer_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesToHclTerraform(struct!.jwtBearerProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties",
    },
    o_auth_2_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oAuth2GrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCodeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCodeProperties = this._authorizationCodeProperties?.internalValue;
    }
    if (this._clientCredentialsProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsProperties = this._clientCredentialsProperties?.internalValue;
    }
    if (this._jwtBearerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtBearerProperties = this._jwtBearerProperties?.internalValue;
    }
    if (this._oAuth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationCodeProperties.internalValue = undefined;
      this._clientCredentialsProperties.internalValue = undefined;
      this._jwtBearerProperties.internalValue = undefined;
      this._oAuth2GrantType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationCodeProperties.internalValue = value.authorizationCodeProperties;
      this._clientCredentialsProperties.internalValue = value.clientCredentialsProperties;
      this._jwtBearerProperties.internalValue = value.jwtBearerProperties;
      this._oAuth2GrantType = value.oAuth2GrantType;
    }
  }

  // authorization_code_properties - computed: true, optional: true, required: false
  private _authorizationCodeProperties = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(this, "authorization_code_properties");
  public get authorizationCodeProperties() {
    return this._authorizationCodeProperties;
  }
  public putAuthorizationCodeProperties(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties) {
    this._authorizationCodeProperties.internalValue = value;
  }
  public resetAuthorizationCodeProperties() {
    this._authorizationCodeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodePropertiesInput() {
    return this._authorizationCodeProperties.internalValue;
  }

  // client_credentials_properties - computed: true, optional: true, required: false
  private _clientCredentialsProperties = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesOutputReference(this, "client_credentials_properties");
  public get clientCredentialsProperties() {
    return this._clientCredentialsProperties;
  }
  public putClientCredentialsProperties(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsProperties) {
    this._clientCredentialsProperties.internalValue = value;
  }
  public resetClientCredentialsProperties() {
    this._clientCredentialsProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsPropertiesInput() {
    return this._clientCredentialsProperties.internalValue;
  }

  // jwt_bearer_properties - computed: true, optional: true, required: false
  private _jwtBearerProperties = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesOutputReference(this, "jwt_bearer_properties");
  public get jwtBearerProperties() {
    return this._jwtBearerProperties;
  }
  public putJwtBearerProperties(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerProperties) {
    this._jwtBearerProperties.internalValue = value;
  }
  public resetJwtBearerProperties() {
    this._jwtBearerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtBearerPropertiesInput() {
    return this._jwtBearerProperties.internalValue;
  }

  // o_auth_2_grant_type - computed: true, optional: true, required: false
  private _oAuth2GrantType?: string; 
  public get oAuth2GrantType() {
    return this.getStringAttribute('o_auth_2_grant_type');
  }
  public set oAuth2GrantType(value: string) {
    this._oAuth2GrantType = value;
  }
  public resetOAuth2GrantType() {
    this._oAuth2GrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2GrantTypeInput() {
    return this._oAuth2GrantType;
  }
}
export interface GlueConnectionTypeConnectorAuthenticationConfiguration {
  /**
  * A list of authentication types supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authentication_types GlueConnectionType#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Basic authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#basic_authentication_properties GlueConnectionType#basic_authentication_properties}
  */
  readonly basicAuthenticationProperties?: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties;
  /**
  * Custom authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#custom_authentication_properties GlueConnectionType#custom_authentication_properties}
  */
  readonly customAuthenticationProperties?: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties;
  /**
  * OAuth2 configuration container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#o_auth_2_properties GlueConnectionType#o_auth_2_properties}
  */
  readonly oAuth2Properties?: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties;
}

export function glueConnectionTypeConnectorAuthenticationConfigurationToTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authenticationTypes),
    basic_authentication_properties: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToTerraform(struct!.basicAuthenticationProperties),
    custom_authentication_properties: glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToTerraform(struct!.customAuthenticationProperties),
    o_auth_2_properties: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToTerraform(struct!.oAuth2Properties),
  }
}


export function glueConnectionTypeConnectorAuthenticationConfigurationToHclTerraform(struct?: GlueConnectionTypeConnectorAuthenticationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authenticationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    basic_authentication_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesToHclTerraform(struct!.basicAuthenticationProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties",
    },
    custom_authentication_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesToHclTerraform(struct!.customAuthenticationProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties",
    },
    o_auth_2_properties: {
      value: glueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesToHclTerraform(struct!.oAuth2Properties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeConnectorAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeConnectorAuthenticationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypes = this._authenticationTypes;
    }
    if (this._basicAuthenticationProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthenticationProperties = this._basicAuthenticationProperties?.internalValue;
    }
    if (this._customAuthenticationProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationProperties = this._customAuthenticationProperties?.internalValue;
    }
    if (this._oAuth2Properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeConnectorAuthenticationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationTypes = undefined;
      this._basicAuthenticationProperties.internalValue = undefined;
      this._customAuthenticationProperties.internalValue = undefined;
      this._oAuth2Properties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationTypes = value.authenticationTypes;
      this._basicAuthenticationProperties.internalValue = value.basicAuthenticationProperties;
      this._customAuthenticationProperties.internalValue = value.customAuthenticationProperties;
      this._oAuth2Properties.internalValue = value.oAuth2Properties;
    }
  }

  // authentication_types - computed: true, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return this.getListAttribute('authentication_types');
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
  }

  // basic_authentication_properties - computed: true, optional: true, required: false
  private _basicAuthenticationProperties = new GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationPropertiesOutputReference(this, "basic_authentication_properties");
  public get basicAuthenticationProperties() {
    return this._basicAuthenticationProperties;
  }
  public putBasicAuthenticationProperties(value: GlueConnectionTypeConnectorAuthenticationConfigurationBasicAuthenticationProperties) {
    this._basicAuthenticationProperties.internalValue = value;
  }
  public resetBasicAuthenticationProperties() {
    this._basicAuthenticationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationPropertiesInput() {
    return this._basicAuthenticationProperties.internalValue;
  }

  // custom_authentication_properties - computed: true, optional: true, required: false
  private _customAuthenticationProperties = new GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationPropertiesOutputReference(this, "custom_authentication_properties");
  public get customAuthenticationProperties() {
    return this._customAuthenticationProperties;
  }
  public putCustomAuthenticationProperties(value: GlueConnectionTypeConnectorAuthenticationConfigurationCustomAuthenticationProperties) {
    this._customAuthenticationProperties.internalValue = value;
  }
  public resetCustomAuthenticationProperties() {
    this._customAuthenticationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationPropertiesInput() {
    return this._customAuthenticationProperties.internalValue;
  }

  // o_auth_2_properties - computed: true, optional: true, required: false
  private _oAuth2Properties = new GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesOutputReference(this, "o_auth_2_properties");
  public get oAuth2Properties() {
    return this._oAuth2Properties;
  }
  public putOAuth2Properties(value: GlueConnectionTypeConnectorAuthenticationConfigurationOAuth2Properties) {
    this._oAuth2Properties.internalValue = value;
  }
  public resetOAuth2Properties() {
    this._oAuth2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2PropertiesInput() {
    return this._oAuth2Properties.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration {
  /**
  * The parameter name used for the upper bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key GlueConnectionType#high_bound_key}
  */
  readonly highBoundKey?: string;
  /**
  * The parameter name used for the lower bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key GlueConnectionType#low_bound_key}
  */
  readonly lowBoundKey?: string;
  /**
  * A template string for constructing the BETWEEN filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template GlueConnectionType#template}
  */
  readonly template?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
    low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.highBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.highBoundKey = this._highBoundKey;
    }
    if (this._lowBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowBoundKey = this._lowBoundKey;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highBoundKey = undefined;
      this._lowBoundKey = undefined;
      this._template = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highBoundKey = value.highBoundKey;
      this._lowBoundKey = value.lowBoundKey;
      this._template = value.template;
    }
  }

  // high_bound_key - computed: true, optional: true, required: false
  private _highBoundKey?: string; 
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }
  public set highBoundKey(value: string) {
    this._highBoundKey = value;
  }
  public resetHighBoundKey() {
    this._highBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBoundKeyInput() {
    return this._highBoundKey;
  }

  // low_bound_key - computed: true, optional: true, required: false
  private _lowBoundKey?: string; 
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }
  public set lowBoundKey(value: string) {
    this._lowBoundKey = value;
  }
  public resetLowBoundKey() {
    this._lowBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowBoundKeyInput() {
    return this._lowBoundKey;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides {
  /**
  * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration GlueConnectionType#between_configuration}
  */
  readonly betweenConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration;
  /**
  * The date and time format for filter expressions on this field, overriding the global DateTimeFormat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format GlueConnectionType#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * An override for the field name to use in filter expressions, if different from the schema field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#field_name GlueConnectionType#field_name}
  */
  readonly fieldName?: string;
  /**
  * A map of logical filter operators to their field-specific API representations, overriding the global operator mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings GlueConnectionType#operator_mappings}
  */
  readonly operatorMappings?: { [key: string]: string };
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    between_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToTerraform(struct!.betweenConfiguration),
    date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    between_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationToHclTerraform(struct!.betweenConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration",
    },
    date_time_format: {
      value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
    }
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._operatorMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorMappings = this._operatorMappings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = undefined;
      this._dateTimeFormat = undefined;
      this._fieldName = undefined;
      this._operatorMappings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = value.betweenConfiguration;
      this._dateTimeFormat = value.dateTimeFormat;
      this._fieldName = value.fieldName;
      this._operatorMappings = value.operatorMappings;
    }
  }

  // between_configuration - computed: true, optional: true, required: false
  private _betweenConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }
  public putBetweenConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfiguration) {
    this._betweenConfiguration.internalValue = value;
  }
  public resetBetweenConfiguration() {
    this._betweenConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenConfigurationInput() {
    return this._betweenConfiguration.internalValue;
  }

  // date_time_format - computed: true, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // operator_mappings - computed: true, optional: true, required: false
  private _operatorMappings?: { [key: string]: string }; 
  public get operatorMappings() {
    return this.getStringMapAttribute('operator_mappings');
  }
  public set operatorMappings(value: { [key: string]: string }) {
    this._operatorMappings = value;
  }
  public resetOperatorMappings() {
    this._operatorMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorMappingsInput() {
    return this._operatorMappings;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSchema {
  /**
  * The data type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#field_data_type GlueConnectionType#field_data_type}
  */
  readonly fieldDataType?: string;
  /**
  * Configuration that defines per-field overrides for filter behavior, allowing individual fields to customize how filter operations are applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_overrides GlueConnectionType#filter_overrides}
  */
  readonly filterOverrides?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides;
  /**
  * Indicates whether this field can contain null values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_nullable GlueConnectionType#is_nullable}
  */
  readonly isNullable?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether this field can be used for ordering results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_orderable GlueConnectionType#is_orderable}
  */
  readonly isOrderable?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether this field can be used for partitioning queries to the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_partitionable GlueConnectionType#is_partitionable}
  */
  readonly isPartitionable?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether this field can be used in filter predicates when querying data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_queryable GlueConnectionType#is_queryable}
  */
  readonly isQueryable?: boolean | cdktn.IResolvable;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * The format pattern for parsing date values from API responses. Accepts Java DateTimeFormatter patterns, EPOCH_SECONDS, or EPOCH_MILLIS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_date_format GlueConnectionType#response_date_format}
  */
  readonly responseDateFormat?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_data_type: cdktn.stringToTerraform(struct!.fieldDataType),
    filter_overrides: glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToTerraform(struct!.filterOverrides),
    is_nullable: cdktn.booleanToTerraform(struct!.isNullable),
    is_orderable: cdktn.booleanToTerraform(struct!.isOrderable),
    is_partitionable: cdktn.booleanToTerraform(struct!.isPartitionable),
    is_queryable: cdktn.booleanToTerraform(struct!.isQueryable),
    name: cdktn.stringToTerraform(struct!.name),
    response_date_format: cdktn.stringToTerraform(struct!.responseDateFormat),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSchemaToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_data_type: {
      value: cdktn.stringToHclTerraform(struct!.fieldDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_overrides: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesToHclTerraform(struct!.filterOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides",
    },
    is_nullable: {
      value: cdktn.booleanToHclTerraform(struct!.isNullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_orderable: {
      value: cdktn.booleanToHclTerraform(struct!.isOrderable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_partitionable: {
      value: cdktn.booleanToHclTerraform(struct!.isPartitionable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_queryable: {
      value: cdktn.booleanToHclTerraform(struct!.isQueryable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_date_format: {
      value: cdktn.stringToHclTerraform(struct!.responseDateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDataType = this._fieldDataType;
    }
    if (this._filterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOverrides = this._filterOverrides?.internalValue;
    }
    if (this._isNullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullable = this._isNullable;
    }
    if (this._isOrderable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOrderable = this._isOrderable;
    }
    if (this._isPartitionable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPartitionable = this._isPartitionable;
    }
    if (this._isQueryable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isQueryable = this._isQueryable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._responseDateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseDateFormat = this._responseDateFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldDataType = undefined;
      this._filterOverrides.internalValue = undefined;
      this._isNullable = undefined;
      this._isOrderable = undefined;
      this._isPartitionable = undefined;
      this._isQueryable = undefined;
      this._name = undefined;
      this._responseDateFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldDataType = value.fieldDataType;
      this._filterOverrides.internalValue = value.filterOverrides;
      this._isNullable = value.isNullable;
      this._isOrderable = value.isOrderable;
      this._isPartitionable = value.isPartitionable;
      this._isQueryable = value.isQueryable;
      this._name = value.name;
      this._responseDateFormat = value.responseDateFormat;
    }
  }

  // field_data_type - computed: true, optional: true, required: false
  private _fieldDataType?: string; 
  public get fieldDataType() {
    return this.getStringAttribute('field_data_type');
  }
  public set fieldDataType(value: string) {
    this._fieldDataType = value;
  }
  public resetFieldDataType() {
    this._fieldDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDataTypeInput() {
    return this._fieldDataType;
  }

  // filter_overrides - computed: true, optional: true, required: false
  private _filterOverrides = new GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesOutputReference(this, "filter_overrides");
  public get filterOverrides() {
    return this._filterOverrides;
  }
  public putFilterOverrides(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverrides) {
    this._filterOverrides.internalValue = value;
  }
  public resetFilterOverrides() {
    this._filterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOverridesInput() {
    return this._filterOverrides.internalValue;
  }

  // is_nullable - computed: true, optional: true, required: false
  private _isNullable?: boolean | cdktn.IResolvable; 
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }
  public set isNullable(value: boolean | cdktn.IResolvable) {
    this._isNullable = value;
  }
  public resetIsNullable() {
    this._isNullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullableInput() {
    return this._isNullable;
  }

  // is_orderable - computed: true, optional: true, required: false
  private _isOrderable?: boolean | cdktn.IResolvable; 
  public get isOrderable() {
    return this.getBooleanAttribute('is_orderable');
  }
  public set isOrderable(value: boolean | cdktn.IResolvable) {
    this._isOrderable = value;
  }
  public resetIsOrderable() {
    this._isOrderable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrderableInput() {
    return this._isOrderable;
  }

  // is_partitionable - computed: true, optional: true, required: false
  private _isPartitionable?: boolean | cdktn.IResolvable; 
  public get isPartitionable() {
    return this.getBooleanAttribute('is_partitionable');
  }
  public set isPartitionable(value: boolean | cdktn.IResolvable) {
    this._isPartitionable = value;
  }
  public resetIsPartitionable() {
    this._isPartitionable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPartitionableInput() {
    return this._isPartitionable;
  }

  // is_queryable - computed: true, optional: true, required: false
  private _isQueryable?: boolean | cdktn.IResolvable; 
  public get isQueryable() {
    return this.getBooleanAttribute('is_queryable');
  }
  public set isQueryable(value: boolean | cdktn.IResolvable) {
    this._isQueryable = value;
  }
  public resetIsQueryable() {
    this._isQueryable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isQueryableInput() {
    return this._isQueryable;
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

  // response_date_format - computed: true, optional: true, required: false
  private _responseDateFormat?: string; 
  public get responseDateFormat() {
    return this.getStringAttribute('response_date_format');
  }
  public set responseDateFormat(value: string) {
    this._responseDateFormat = value;
  }
  public resetResponseDateFormat() {
    this._responseDateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDateFormatInput() {
    return this._responseDateFormat;
  }
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema } | cdktn.IResolvable

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
  public get(key: string): GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference {
    return new GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration {
  /**
  * The parameter name used for the upper bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key GlueConnectionType#high_bound_key}
  */
  readonly highBoundKey?: string;
  /**
  * The parameter name used for the lower bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key GlueConnectionType#low_bound_key}
  */
  readonly lowBoundKey?: string;
  /**
  * A template string for constructing the BETWEEN filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template GlueConnectionType#template}
  */
  readonly template?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
    low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.highBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.highBoundKey = this._highBoundKey;
    }
    if (this._lowBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowBoundKey = this._lowBoundKey;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highBoundKey = undefined;
      this._lowBoundKey = undefined;
      this._template = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highBoundKey = value.highBoundKey;
      this._lowBoundKey = value.lowBoundKey;
      this._template = value.template;
    }
  }

  // high_bound_key - computed: true, optional: true, required: false
  private _highBoundKey?: string; 
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }
  public set highBoundKey(value: string) {
    this._highBoundKey = value;
  }
  public resetHighBoundKey() {
    this._highBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBoundKeyInput() {
    return this._highBoundKey;
  }

  // low_bound_key - computed: true, optional: true, required: false
  private _lowBoundKey?: string; 
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }
  public set lowBoundKey(value: string) {
    this._lowBoundKey = value;
  }
  public resetLowBoundKey() {
    this._lowBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowBoundKeyInput() {
    return this._lowBoundKey;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration {
  /**
  * The query parameter name used to send the constructed filter expression string in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#query_parameter_name GlueConnectionType#query_parameter_name}
  */
  readonly queryParameterName?: string;
  /**
  * The character used to quote values when QuoteStringValues is true. Defaults to double quotes if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_character GlueConnectionType#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Indicates whether string and date values should be wrapped with a quote character in the filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_string_values GlueConnectionType#quote_string_values}
  */
  readonly quoteStringValues?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_parameter_name: cdktn.stringToTerraform(struct!.queryParameterName),
    quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
    quote_string_values: cdktn.booleanToTerraform(struct!.quoteStringValues),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.queryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote_character: {
      value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote_string_values: {
      value: cdktn.booleanToHclTerraform(struct!.quoteStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterName = this._queryParameterName;
    }
    if (this._quoteCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteCharacter = this._quoteCharacter;
    }
    if (this._quoteStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteStringValues = this._quoteStringValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryParameterName = undefined;
      this._quoteCharacter = undefined;
      this._quoteStringValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryParameterName = value.queryParameterName;
      this._quoteCharacter = value.quoteCharacter;
      this._quoteStringValues = value.quoteStringValues;
    }
  }

  // query_parameter_name - computed: true, optional: true, required: false
  private _queryParameterName?: string; 
  public get queryParameterName() {
    return this.getStringAttribute('query_parameter_name');
  }
  public set queryParameterName(value: string) {
    this._queryParameterName = value;
  }
  public resetQueryParameterName() {
    this._queryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterNameInput() {
    return this._queryParameterName;
  }

  // quote_character - computed: true, optional: true, required: false
  private _quoteCharacter?: string; 
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter;
  }

  // quote_string_values - computed: true, optional: true, required: false
  private _quoteStringValues?: boolean | cdktn.IResolvable; 
  public get quoteStringValues() {
    return this.getBooleanAttribute('quote_string_values');
  }
  public set quoteStringValues(value: boolean | cdktn.IResolvable) {
    this._quoteStringValues = value;
  }
  public resetQuoteStringValues() {
    this._quoteStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteStringValuesInput() {
    return this._quoteStringValues;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration {
  /**
  * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration GlueConnectionType#between_configuration}
  */
  readonly betweenConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration;
  /**
  * The global date and time format for filter expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format GlueConnectionType#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * The strategy for applying filters to requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_mode GlueConnectionType#filter_mode}
  */
  readonly filterMode?: string;
  /**
  * Configuration for constructing filter expression strings when using the FILTER_STRING filter mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_string_configuration GlueConnectionType#filter_string_configuration}
  */
  readonly filterStringConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration;
  /**
  * A map of logical filter operators to their API-specific string representations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings GlueConnectionType#operator_mappings}
  */
  readonly operatorMappings?: { [key: string]: string };
  /**
  * Indicates whether surrounding double quotes should be stripped from filter values before processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#strip_quotes GlueConnectionType#strip_quotes}
  */
  readonly stripQuotes?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    between_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct!.betweenConfiguration),
    date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
    filter_mode: cdktn.stringToTerraform(struct!.filterMode),
    filter_string_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct!.filterStringConfiguration),
    operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
    strip_quotes: cdktn.booleanToTerraform(struct!.stripQuotes),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    between_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct!.betweenConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration",
    },
    date_time_format: {
      value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_mode: {
      value: cdktn.stringToHclTerraform(struct!.filterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_string_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct!.filterStringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration",
    },
    operator_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strip_quotes: {
      value: cdktn.booleanToHclTerraform(struct!.stripQuotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
    }
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._filterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMode = this._filterMode;
    }
    if (this._filterStringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStringConfiguration = this._filterStringConfiguration?.internalValue;
    }
    if (this._operatorMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorMappings = this._operatorMappings;
    }
    if (this._stripQuotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuotes = this._stripQuotes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = undefined;
      this._dateTimeFormat = undefined;
      this._filterMode = undefined;
      this._filterStringConfiguration.internalValue = undefined;
      this._operatorMappings = undefined;
      this._stripQuotes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = value.betweenConfiguration;
      this._dateTimeFormat = value.dateTimeFormat;
      this._filterMode = value.filterMode;
      this._filterStringConfiguration.internalValue = value.filterStringConfiguration;
      this._operatorMappings = value.operatorMappings;
      this._stripQuotes = value.stripQuotes;
    }
  }

  // between_configuration - computed: true, optional: true, required: false
  private _betweenConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }
  public putBetweenConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfiguration) {
    this._betweenConfiguration.internalValue = value;
  }
  public resetBetweenConfiguration() {
    this._betweenConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenConfigurationInput() {
    return this._betweenConfiguration.internalValue;
  }

  // date_time_format - computed: true, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // filter_mode - computed: true, optional: true, required: false
  private _filterMode?: string; 
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }
  public set filterMode(value: string) {
    this._filterMode = value;
  }
  public resetFilterMode() {
    this._filterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModeInput() {
    return this._filterMode;
  }

  // filter_string_configuration - computed: true, optional: true, required: false
  private _filterStringConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference(this, "filter_string_configuration");
  public get filterStringConfiguration() {
    return this._filterStringConfiguration;
  }
  public putFilterStringConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfiguration) {
    this._filterStringConfiguration.internalValue = value;
  }
  public resetFilterStringConfiguration() {
    this._filterStringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStringConfigurationInput() {
    return this._filterStringConfiguration.internalValue;
  }

  // operator_mappings - computed: true, optional: true, required: false
  private _operatorMappings?: { [key: string]: string }; 
  public get operatorMappings() {
    return this.getStringMapAttribute('operator_mappings');
  }
  public set operatorMappings(value: { [key: string]: string }) {
    this._operatorMappings = value;
  }
  public resetOperatorMappings() {
    this._operatorMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorMappingsInput() {
    return this._operatorMappings;
  }

  // strip_quotes - computed: true, optional: true, required: false
  private _stripQuotes?: boolean | cdktn.IResolvable; 
  public get stripQuotes() {
    return this.getBooleanAttribute('strip_quotes');
  }
  public set stripQuotes(value: boolean | cdktn.IResolvable) {
    this._stripQuotes = value;
  }
  public resetStripQuotes() {
    this._stripQuotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQuotesInput() {
    return this._stripQuotes;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration {
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter GlueConnectionType#limit_parameter}
  */
  readonly limitParameter?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter;
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#next_page GlueConnectionType#next_page}
  */
  readonly nextPage?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_parameter: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct!.limitParameter),
    next_page: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct!.nextPage),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_parameter: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct!.limitParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter",
    },
    next_page: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct!.nextPage),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitParameter = this._limitParameter?.internalValue;
    }
    if (this._nextPage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextPage = this._nextPage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = undefined;
      this._nextPage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = value.limitParameter;
      this._nextPage.internalValue = value.nextPage;
    }
  }

  // limit_parameter - computed: true, optional: true, required: false
  private _limitParameter = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }
  public putLimitParameter(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter) {
    this._limitParameter.internalValue = value;
  }
  public resetLimitParameter() {
    this._limitParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitParameterInput() {
    return this._limitParameter.internalValue;
  }

  // next_page - computed: true, optional: true, required: false
  private _nextPage = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference(this, "next_page");
  public get nextPage() {
    return this._nextPage;
  }
  public putNextPage(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPage) {
    this._nextPage.internalValue = value;
  }
  public resetNextPage() {
    this._nextPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextPageInput() {
    return this._nextPage.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration {
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter GlueConnectionType#limit_parameter}
  */
  readonly limitParameter?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter;
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_parameter GlueConnectionType#offset_parameter}
  */
  readonly offsetParameter?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_parameter: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct!.limitParameter),
    offset_parameter: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct!.offsetParameter),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_parameter: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct!.limitParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter",
    },
    offset_parameter: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct!.offsetParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitParameter = this._limitParameter?.internalValue;
    }
    if (this._offsetParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetParameter = this._offsetParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = undefined;
      this._offsetParameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = value.limitParameter;
      this._offsetParameter.internalValue = value.offsetParameter;
    }
  }

  // limit_parameter - computed: true, optional: true, required: false
  private _limitParameter = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }
  public putLimitParameter(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter) {
    this._limitParameter.internalValue = value;
  }
  public resetLimitParameter() {
    this._limitParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitParameterInput() {
    return this._limitParameter.internalValue;
  }

  // offset_parameter - computed: true, optional: true, required: false
  private _offsetParameter = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference(this, "offset_parameter");
  public get offsetParameter() {
    return this._offsetParameter;
  }
  public putOffsetParameter(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter) {
    this._offsetParameter.internalValue = value;
  }
  public resetOffsetParameter() {
    this._offsetParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetParameterInput() {
    return this._offsetParameter.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration {
  /**
  * Cursor-based pagination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#cursor_configuration GlueConnectionType#cursor_configuration}
  */
  readonly cursorConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration;
  /**
  * Offset-based pagination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_configuration GlueConnectionType#offset_configuration}
  */
  readonly offsetConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cursor_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct!.cursorConfiguration),
    offset_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct!.offsetConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cursor_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct!.cursorConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration",
    },
    offset_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct!.offsetConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cursorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorConfiguration = this._cursorConfiguration?.internalValue;
    }
    if (this._offsetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetConfiguration = this._offsetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cursorConfiguration.internalValue = undefined;
      this._offsetConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cursorConfiguration.internalValue = value.cursorConfiguration;
      this._offsetConfiguration.internalValue = value.offsetConfiguration;
    }
  }

  // cursor_configuration - computed: true, optional: true, required: false
  private _cursorConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference(this, "cursor_configuration");
  public get cursorConfiguration() {
    return this._cursorConfiguration;
  }
  public putCursorConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfiguration) {
    this._cursorConfiguration.internalValue = value;
  }
  public resetCursorConfiguration() {
    this._cursorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorConfigurationInput() {
    return this._cursorConfiguration.internalValue;
  }

  // offset_configuration - computed: true, optional: true, required: false
  private _offsetConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference(this, "offset_configuration");
  public get offsetConfiguration() {
    return this._offsetConfiguration;
  }
  public putOffsetConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfiguration) {
    this._offsetConfiguration.internalValue = value;
  }
  public resetOffsetConfiguration() {
    this._offsetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetConfigurationInput() {
    return this._offsetConfiguration.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference {
    return new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration {
  /**
  * JSON path expression for error information location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#error_path GlueConnectionType#error_path}
  */
  readonly errorPath?: string;
  /**
  * JSON path expression for result data location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#result_path GlueConnectionType#result_path}
  */
  readonly resultPath?: string;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_path: cdktn.stringToTerraform(struct!.errorPath),
    result_path: cdktn.stringToTerraform(struct!.resultPath),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_path: {
      value: cdktn.stringToHclTerraform(struct!.errorPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_path: {
      value: cdktn.stringToHclTerraform(struct!.resultPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPath = this._errorPath;
    }
    if (this._resultPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultPath = this._resultPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorPath = undefined;
      this._resultPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorPath = value.errorPath;
      this._resultPath = value.resultPath;
    }
  }

  // error_path - computed: true, optional: true, required: false
  private _errorPath?: string; 
  public get errorPath() {
    return this.getStringAttribute('error_path');
  }
  public set errorPath(value: string) {
    this._errorPath = value;
  }
  public resetErrorPath() {
    this._errorPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPathInput() {
    return this._errorPath;
  }

  // result_path - computed: true, optional: true, required: false
  private _resultPath?: string; 
  public get resultPath() {
    return this.getStringAttribute('result_path');
  }
  public set resultPath(value: string) {
    this._resultPath = value;
  }
  public resetResultPath() {
    this._resultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultPathInput() {
    return this._resultPath;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration {
  /**
  * Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_configuration GlueConnectionType#filter_configuration}
  */
  readonly filterConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration;
  /**
  * Configuration for handling paginated responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#pagination_configuration GlueConnectionType#pagination_configuration}
  */
  readonly paginationConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration;
  /**
  * The HTTP method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Request parameters configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_parameters GlueConnectionType#request_parameters}
  */
  readonly requestParameters?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters[] | cdktn.IResolvable;
  /**
  * The URL path for the REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path GlueConnectionType#request_path}
  */
  readonly requestPath?: string;
  /**
  * Configuration for parsing JSON responses from REST API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_configuration GlueConnectionType#response_configuration}
  */
  readonly responseConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToTerraform(struct!.filterConfiguration),
    pagination_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToTerraform(struct!.paginationConfiguration),
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    request_parameters: cdktn.listMapper(glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToTerraform, false)(struct!.requestParameters),
    request_path: cdktn.stringToTerraform(struct!.requestPath),
    response_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToTerraform(struct!.responseConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationToHclTerraform(struct!.filterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration",
    },
    pagination_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationToHclTerraform(struct!.paginationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration",
    },
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersToHclTerraform, false)(struct!.requestParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersList",
    },
    request_path: {
      value: cdktn.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationToHclTerraform(struct!.responseConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    if (this._paginationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationConfiguration = this._paginationConfiguration?.internalValue;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParameters = this._requestParameters?.internalValue;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._responseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseConfiguration = this._responseConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
      this._paginationConfiguration.internalValue = undefined;
      this._requestMethod = undefined;
      this._requestParameters.internalValue = undefined;
      this._requestPath = undefined;
      this._responseConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
      this._paginationConfiguration.internalValue = value.paginationConfiguration;
      this._requestMethod = value.requestMethod;
      this._requestParameters.internalValue = value.requestParameters;
      this._requestPath = value.requestPath;
      this._responseConfiguration.internalValue = value.responseConfiguration;
    }
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfiguration) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }

  // pagination_configuration - computed: true, optional: true, required: false
  private _paginationConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOutputReference(this, "pagination_configuration");
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }
  public putPaginationConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfiguration) {
    this._paginationConfiguration.internalValue = value;
  }
  public resetPaginationConfiguration() {
    this._paginationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigurationInput() {
    return this._paginationConfiguration.internalValue;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_parameters - computed: true, optional: true, required: false
  private _requestParameters = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersList(this, "request_parameters", false);
  public get requestParameters() {
    return this._requestParameters;
  }
  public putRequestParameters(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParameters[] | cdktn.IResolvable) {
    this._requestParameters.internalValue = value;
  }
  public resetRequestParameters() {
    this._requestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters.internalValue;
  }

  // request_path - computed: true, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response_configuration - computed: true, optional: true, required: false
  private _responseConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationOutputReference(this, "response_configuration");
  public get responseConfiguration() {
    return this._responseConfiguration;
  }
  public putResponseConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfiguration) {
    this._responseConfiguration.internalValue = value;
  }
  public resetResponseConfiguration() {
    this._responseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseConfigurationInput() {
    return this._responseConfiguration.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationEntityConfigurations {
  /**
  * The schema definition for this entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#schema GlueConnectionType#schema}
  */
  readonly schema?: { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema } | cdktn.IResolvable;
  /**
  * Configuration that defines how to make requests to endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#source_configuration GlueConnectionType#source_configuration}
  */
  readonly sourceConfiguration?: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration;
}

export function glueConnectionTypeRestConfigurationEntityConfigurationsToTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema: cdktn.hashMapper(glueConnectionTypeRestConfigurationEntityConfigurationsSchemaToTerraform)(struct!.schema),
    source_configuration: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToTerraform(struct!.sourceConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationEntityConfigurationsToHclTerraform(struct?: GlueConnectionTypeRestConfigurationEntityConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema: {
      value: cdktn.hashMapperHcl(glueConnectionTypeRestConfigurationEntityConfigurationsSchemaToHclTerraform)(struct!.schema),
      isBlock: true,
      type: "map",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaMap",
    },
    source_configuration: {
      value: glueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationToHclTerraform(struct!.sourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeRestConfigurationEntityConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationEntityConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema.internalValue = value.schema;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // schema - computed: true, optional: true, required: false
  private _schema = new GlueConnectionTypeRestConfigurationEntityConfigurationsSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurationsSchema } | cdktn.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: GlueConnectionTypeRestConfigurationEntityConfigurationsSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class GlueConnectionTypeRestConfigurationEntityConfigurationsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurations } | cdktn.IResolvable

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
  public get(key: string): GlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference {
    return new GlueConnectionTypeRestConfigurationEntityConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration {
  /**
  * The parameter name used for the upper bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key GlueConnectionType#high_bound_key}
  */
  readonly highBoundKey?: string;
  /**
  * The parameter name used for the lower bound value in a BETWEEN filter operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key GlueConnectionType#low_bound_key}
  */
  readonly lowBoundKey?: string;
  /**
  * A template string for constructing the BETWEEN filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template GlueConnectionType#template}
  */
  readonly template?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
    low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
    template: cdktn.stringToTerraform(struct!.template),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.highBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_bound_key: {
      value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktn.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.highBoundKey = this._highBoundKey;
    }
    if (this._lowBoundKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowBoundKey = this._lowBoundKey;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highBoundKey = undefined;
      this._lowBoundKey = undefined;
      this._template = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highBoundKey = value.highBoundKey;
      this._lowBoundKey = value.lowBoundKey;
      this._template = value.template;
    }
  }

  // high_bound_key - computed: true, optional: true, required: false
  private _highBoundKey?: string; 
  public get highBoundKey() {
    return this.getStringAttribute('high_bound_key');
  }
  public set highBoundKey(value: string) {
    this._highBoundKey = value;
  }
  public resetHighBoundKey() {
    this._highBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBoundKeyInput() {
    return this._highBoundKey;
  }

  // low_bound_key - computed: true, optional: true, required: false
  private _lowBoundKey?: string; 
  public get lowBoundKey() {
    return this.getStringAttribute('low_bound_key');
  }
  public set lowBoundKey(value: string) {
    this._lowBoundKey = value;
  }
  public resetLowBoundKey() {
    this._lowBoundKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowBoundKeyInput() {
    return this._lowBoundKey;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration {
  /**
  * The query parameter name used to send the constructed filter expression string in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#query_parameter_name GlueConnectionType#query_parameter_name}
  */
  readonly queryParameterName?: string;
  /**
  * The character used to quote values when QuoteStringValues is true. Defaults to double quotes if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_character GlueConnectionType#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Indicates whether string and date values should be wrapped with a quote character in the filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_string_values GlueConnectionType#quote_string_values}
  */
  readonly quoteStringValues?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_parameter_name: cdktn.stringToTerraform(struct!.queryParameterName),
    quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
    quote_string_values: cdktn.booleanToTerraform(struct!.quoteStringValues),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.queryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote_character: {
      value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote_string_values: {
      value: cdktn.booleanToHclTerraform(struct!.quoteStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterName = this._queryParameterName;
    }
    if (this._quoteCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteCharacter = this._quoteCharacter;
    }
    if (this._quoteStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteStringValues = this._quoteStringValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryParameterName = undefined;
      this._quoteCharacter = undefined;
      this._quoteStringValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryParameterName = value.queryParameterName;
      this._quoteCharacter = value.quoteCharacter;
      this._quoteStringValues = value.quoteStringValues;
    }
  }

  // query_parameter_name - computed: true, optional: true, required: false
  private _queryParameterName?: string; 
  public get queryParameterName() {
    return this.getStringAttribute('query_parameter_name');
  }
  public set queryParameterName(value: string) {
    this._queryParameterName = value;
  }
  public resetQueryParameterName() {
    this._queryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterNameInput() {
    return this._queryParameterName;
  }

  // quote_character - computed: true, optional: true, required: false
  private _quoteCharacter?: string; 
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter;
  }

  // quote_string_values - computed: true, optional: true, required: false
  private _quoteStringValues?: boolean | cdktn.IResolvable; 
  public get quoteStringValues() {
    return this.getBooleanAttribute('quote_string_values');
  }
  public set quoteStringValues(value: boolean | cdktn.IResolvable) {
    this._quoteStringValues = value;
  }
  public resetQuoteStringValues() {
    this._quoteStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteStringValuesInput() {
    return this._quoteStringValues;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration {
  /**
  * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration GlueConnectionType#between_configuration}
  */
  readonly betweenConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration;
  /**
  * The global date and time format for filter expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format GlueConnectionType#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * The strategy for applying filters to requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_mode GlueConnectionType#filter_mode}
  */
  readonly filterMode?: string;
  /**
  * Configuration for constructing filter expression strings when using the FILTER_STRING filter mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_string_configuration GlueConnectionType#filter_string_configuration}
  */
  readonly filterStringConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration;
  /**
  * A map of logical filter operators to their API-specific string representations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings GlueConnectionType#operator_mappings}
  */
  readonly operatorMappings?: { [key: string]: string };
  /**
  * Indicates whether surrounding double quotes should be stripped from filter values before processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#strip_quotes GlueConnectionType#strip_quotes}
  */
  readonly stripQuotes?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    between_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToTerraform(struct!.betweenConfiguration),
    date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
    filter_mode: cdktn.stringToTerraform(struct!.filterMode),
    filter_string_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToTerraform(struct!.filterStringConfiguration),
    operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
    strip_quotes: cdktn.booleanToTerraform(struct!.stripQuotes),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    between_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationToHclTerraform(struct!.betweenConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration",
    },
    date_time_format: {
      value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_mode: {
      value: cdktn.stringToHclTerraform(struct!.filterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_string_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationToHclTerraform(struct!.filterStringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration",
    },
    operator_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strip_quotes: {
      value: cdktn.booleanToHclTerraform(struct!.stripQuotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
    }
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._filterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMode = this._filterMode;
    }
    if (this._filterStringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStringConfiguration = this._filterStringConfiguration?.internalValue;
    }
    if (this._operatorMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorMappings = this._operatorMappings;
    }
    if (this._stripQuotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuotes = this._stripQuotes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = undefined;
      this._dateTimeFormat = undefined;
      this._filterMode = undefined;
      this._filterStringConfiguration.internalValue = undefined;
      this._operatorMappings = undefined;
      this._stripQuotes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenConfiguration.internalValue = value.betweenConfiguration;
      this._dateTimeFormat = value.dateTimeFormat;
      this._filterMode = value.filterMode;
      this._filterStringConfiguration.internalValue = value.filterStringConfiguration;
      this._operatorMappings = value.operatorMappings;
      this._stripQuotes = value.stripQuotes;
    }
  }

  // between_configuration - computed: true, optional: true, required: false
  private _betweenConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationOutputReference(this, "between_configuration");
  public get betweenConfiguration() {
    return this._betweenConfiguration;
  }
  public putBetweenConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfiguration) {
    this._betweenConfiguration.internalValue = value;
  }
  public resetBetweenConfiguration() {
    this._betweenConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenConfigurationInput() {
    return this._betweenConfiguration.internalValue;
  }

  // date_time_format - computed: true, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // filter_mode - computed: true, optional: true, required: false
  private _filterMode?: string; 
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }
  public set filterMode(value: string) {
    this._filterMode = value;
  }
  public resetFilterMode() {
    this._filterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModeInput() {
    return this._filterMode;
  }

  // filter_string_configuration - computed: true, optional: true, required: false
  private _filterStringConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationOutputReference(this, "filter_string_configuration");
  public get filterStringConfiguration() {
    return this._filterStringConfiguration;
  }
  public putFilterStringConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfiguration) {
    this._filterStringConfiguration.internalValue = value;
  }
  public resetFilterStringConfiguration() {
    this._filterStringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStringConfigurationInput() {
    return this._filterStringConfiguration.internalValue;
  }

  // operator_mappings - computed: true, optional: true, required: false
  private _operatorMappings?: { [key: string]: string }; 
  public get operatorMappings() {
    return this.getStringMapAttribute('operator_mappings');
  }
  public set operatorMappings(value: { [key: string]: string }) {
    this._operatorMappings = value;
  }
  public resetOperatorMappings() {
    this._operatorMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorMappingsInput() {
    return this._operatorMappings;
  }

  // strip_quotes - computed: true, optional: true, required: false
  private _stripQuotes?: boolean | cdktn.IResolvable; 
  public get stripQuotes() {
    return this.getBooleanAttribute('strip_quotes');
  }
  public set stripQuotes(value: boolean | cdktn.IResolvable) {
    this._stripQuotes = value;
  }
  public resetStripQuotes() {
    this._stripQuotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQuotesInput() {
    return this._stripQuotes;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration {
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter GlueConnectionType#limit_parameter}
  */
  readonly limitParameter?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter;
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#next_page GlueConnectionType#next_page}
  */
  readonly nextPage?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_parameter: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToTerraform(struct!.limitParameter),
    next_page: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToTerraform(struct!.nextPage),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_parameter: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterToHclTerraform(struct!.limitParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter",
    },
    next_page: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageToHclTerraform(struct!.nextPage),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitParameter = this._limitParameter?.internalValue;
    }
    if (this._nextPage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextPage = this._nextPage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = undefined;
      this._nextPage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = value.limitParameter;
      this._nextPage.internalValue = value.nextPage;
    }
  }

  // limit_parameter - computed: true, optional: true, required: false
  private _limitParameter = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }
  public putLimitParameter(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameter) {
    this._limitParameter.internalValue = value;
  }
  public resetLimitParameter() {
    this._limitParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitParameterInput() {
    return this._limitParameter.internalValue;
  }

  // next_page - computed: true, optional: true, required: false
  private _nextPage = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageOutputReference(this, "next_page");
  public get nextPage() {
    return this._nextPage;
  }
  public putNextPage(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPage) {
    this._nextPage.internalValue = value;
  }
  public resetNextPage() {
    this._nextPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextPageInput() {
    return this._nextPage.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue {
  /**
  * A JSON path expression to extract a value from response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path GlueConnectionType#content_path}
  */
  readonly contentPath?: string;
  /**
  * The name of an HTTP response header from which to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key GlueConnectionType#header_key}
  */
  readonly headerKey?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_path: cdktn.stringToTerraform(struct!.contentPath),
    header_key: cdktn.stringToTerraform(struct!.headerKey),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_path: {
      value: cdktn.stringToHclTerraform(struct!.contentPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktn.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentPath = this._contentPath;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentPath = undefined;
      this._headerKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentPath = value.contentPath;
      this._headerKey = value.headerKey;
    }
  }

  // content_path - computed: true, optional: true, required: false
  private _contentPath?: string; 
  public get contentPath() {
    return this.getStringAttribute('content_path');
  }
  public set contentPath(value: string) {
    this._contentPath = value;
  }
  public resetContentPath() {
    this._contentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPathInput() {
    return this._contentPath;
  }

  // header_key - computed: true, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter {
  /**
  * The default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The parameter key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Specifies where to place the parameter in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * Defines how to extract values from HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToTerraform(struct!.value),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._propertyLocation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._propertyLocation = value.propertyLocation;
      this._value.internalValue = value.value;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // value - computed: true, optional: true, required: false
  private _value = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration {
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter GlueConnectionType#limit_parameter}
  */
  readonly limitParameter?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter;
  /**
  * Parameter extraction configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_parameter GlueConnectionType#offset_parameter}
  */
  readonly offsetParameter?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_parameter: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToTerraform(struct!.limitParameter),
    offset_parameter: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToTerraform(struct!.offsetParameter),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_parameter: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterToHclTerraform(struct!.limitParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter",
    },
    offset_parameter: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterToHclTerraform(struct!.offsetParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitParameter = this._limitParameter?.internalValue;
    }
    if (this._offsetParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetParameter = this._offsetParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = undefined;
      this._offsetParameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitParameter.internalValue = value.limitParameter;
      this._offsetParameter.internalValue = value.offsetParameter;
    }
  }

  // limit_parameter - computed: true, optional: true, required: false
  private _limitParameter = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterOutputReference(this, "limit_parameter");
  public get limitParameter() {
    return this._limitParameter;
  }
  public putLimitParameter(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameter) {
    this._limitParameter.internalValue = value;
  }
  public resetLimitParameter() {
    this._limitParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitParameterInput() {
    return this._limitParameter.internalValue;
  }

  // offset_parameter - computed: true, optional: true, required: false
  private _offsetParameter = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterOutputReference(this, "offset_parameter");
  public get offsetParameter() {
    return this._offsetParameter;
  }
  public putOffsetParameter(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameter) {
    this._offsetParameter.internalValue = value;
  }
  public resetOffsetParameter() {
    this._offsetParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetParameterInput() {
    return this._offsetParameter.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration {
  /**
  * Cursor-based pagination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#cursor_configuration GlueConnectionType#cursor_configuration}
  */
  readonly cursorConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration;
  /**
  * Offset-based pagination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_configuration GlueConnectionType#offset_configuration}
  */
  readonly offsetConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cursor_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToTerraform(struct!.cursorConfiguration),
    offset_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToTerraform(struct!.offsetConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cursor_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationToHclTerraform(struct!.cursorConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration",
    },
    offset_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationToHclTerraform(struct!.offsetConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cursorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorConfiguration = this._cursorConfiguration?.internalValue;
    }
    if (this._offsetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetConfiguration = this._offsetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cursorConfiguration.internalValue = undefined;
      this._offsetConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cursorConfiguration.internalValue = value.cursorConfiguration;
      this._offsetConfiguration.internalValue = value.offsetConfiguration;
    }
  }

  // cursor_configuration - computed: true, optional: true, required: false
  private _cursorConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationOutputReference(this, "cursor_configuration");
  public get cursorConfiguration() {
    return this._cursorConfiguration;
  }
  public putCursorConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfiguration) {
    this._cursorConfiguration.internalValue = value;
  }
  public resetCursorConfiguration() {
    this._cursorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorConfigurationInput() {
    return this._cursorConfiguration.internalValue;
  }

  // offset_configuration - computed: true, optional: true, required: false
  private _offsetConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOutputReference(this, "offset_configuration");
  public get offsetConfiguration() {
    return this._offsetConfiguration;
  }
  public putOffsetConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfiguration) {
    this._offsetConfiguration.internalValue = value;
  }
  public resetOffsetConfiguration() {
    this._offsetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetConfigurationInput() {
    return this._offsetConfiguration.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters {
  /**
  * A list of allowed values for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values GlueConnectionType#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * The default value for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value GlueConnectionType#default_value}
  */
  readonly defaultValue?: string;
  /**
  * A key name to use when sending this property in API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override GlueConnectionType#key_override}
  */
  readonly keyOverride?: string;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name GlueConnectionType#name}
  */
  readonly name?: string;
  /**
  * Specifies where this property should be included in REST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location GlueConnectionType#property_location}
  */
  readonly propertyLocation?: string;
  /**
  * The data type of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type GlueConnectionType#property_type}
  */
  readonly propertyType?: string;
  /**
  * Indicates whether the property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required GlueConnectionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key_override: cdktn.stringToTerraform(struct!.keyOverride),
    name: cdktn.stringToTerraform(struct!.name),
    property_location: cdktn.stringToTerraform(struct!.propertyLocation),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_override: {
      value: cdktn.stringToHclTerraform(struct!.keyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_location: {
      value: cdktn.stringToHclTerraform(struct!.propertyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
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

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyLocation = this._propertyLocation;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._defaultValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
      this._propertyLocation = undefined;
      this._propertyType = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._defaultValue = value.defaultValue;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
      this._propertyLocation = value.propertyLocation;
      this._propertyType = value.propertyType;
      this._required = value.required;
    }
  }

  // allowed_values - computed: true, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key_override - computed: true, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

  // property_location - computed: true, optional: true, required: false
  private _propertyLocation?: string; 
  public get propertyLocation() {
    return this.getStringAttribute('property_location');
  }
  public set propertyLocation(value: string) {
    this._propertyLocation = value;
  }
  public resetPropertyLocation() {
    this._propertyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyLocationInput() {
    return this._propertyLocation;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference {
    return new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration {
  /**
  * JSON path expression for error information location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#error_path GlueConnectionType#error_path}
  */
  readonly errorPath?: string;
  /**
  * JSON path expression for result data location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#result_path GlueConnectionType#result_path}
  */
  readonly resultPath?: string;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_path: cdktn.stringToTerraform(struct!.errorPath),
    result_path: cdktn.stringToTerraform(struct!.resultPath),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_path: {
      value: cdktn.stringToHclTerraform(struct!.errorPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_path: {
      value: cdktn.stringToHclTerraform(struct!.resultPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPath = this._errorPath;
    }
    if (this._resultPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultPath = this._resultPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorPath = undefined;
      this._resultPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorPath = value.errorPath;
      this._resultPath = value.resultPath;
    }
  }

  // error_path - computed: true, optional: true, required: false
  private _errorPath?: string; 
  public get errorPath() {
    return this.getStringAttribute('error_path');
  }
  public set errorPath(value: string) {
    this._errorPath = value;
  }
  public resetErrorPath() {
    this._errorPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPathInput() {
    return this._errorPath;
  }

  // result_path - computed: true, optional: true, required: false
  private _resultPath?: string; 
  public get resultPath() {
    return this.getStringAttribute('result_path');
  }
  public set resultPath(value: string) {
    this._resultPath = value;
  }
  public resetResultPath() {
    this._resultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultPathInput() {
    return this._resultPath;
  }
}
export interface GlueConnectionTypeRestConfigurationGlobalSourceConfiguration {
  /**
  * Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_configuration GlueConnectionType#filter_configuration}
  */
  readonly filterConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration;
  /**
  * Configuration for handling paginated responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#pagination_configuration GlueConnectionType#pagination_configuration}
  */
  readonly paginationConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration;
  /**
  * The HTTP method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Request parameters configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_parameters GlueConnectionType#request_parameters}
  */
  readonly requestParameters?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters[] | cdktn.IResolvable;
  /**
  * The URL path for the REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path GlueConnectionType#request_path}
  */
  readonly requestPath?: string;
  /**
  * Configuration for parsing JSON responses from REST API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_configuration GlueConnectionType#response_configuration}
  */
  readonly responseConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration;
}

export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToTerraform(struct!.filterConfiguration),
    pagination_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToTerraform(struct!.paginationConfiguration),
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    request_parameters: cdktn.listMapper(glueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToTerraform, false)(struct!.requestParameters),
    request_path: cdktn.stringToTerraform(struct!.requestPath),
    response_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToTerraform(struct!.responseConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationGlobalSourceConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationGlobalSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationToHclTerraform(struct!.filterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration",
    },
    pagination_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationToHclTerraform(struct!.paginationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration",
    },
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_parameters: {
      value: cdktn.listMapperHcl(glueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersToHclTerraform, false)(struct!.requestParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersList",
    },
    request_path: {
      value: cdktn.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationToHclTerraform(struct!.responseConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationGlobalSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationGlobalSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    if (this._paginationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationConfiguration = this._paginationConfiguration?.internalValue;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParameters = this._requestParameters?.internalValue;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._responseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseConfiguration = this._responseConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationGlobalSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
      this._paginationConfiguration.internalValue = undefined;
      this._requestMethod = undefined;
      this._requestParameters.internalValue = undefined;
      this._requestPath = undefined;
      this._responseConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
      this._paginationConfiguration.internalValue = value.paginationConfiguration;
      this._requestMethod = value.requestMethod;
      this._requestParameters.internalValue = value.requestParameters;
      this._requestPath = value.requestPath;
      this._responseConfiguration.internalValue = value.responseConfiguration;
    }
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfiguration) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }

  // pagination_configuration - computed: true, optional: true, required: false
  private _paginationConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOutputReference(this, "pagination_configuration");
  public get paginationConfiguration() {
    return this._paginationConfiguration;
  }
  public putPaginationConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfiguration) {
    this._paginationConfiguration.internalValue = value;
  }
  public resetPaginationConfiguration() {
    this._paginationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigurationInput() {
    return this._paginationConfiguration.internalValue;
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_parameters - computed: true, optional: true, required: false
  private _requestParameters = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersList(this, "request_parameters", false);
  public get requestParameters() {
    return this._requestParameters;
  }
  public putRequestParameters(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParameters[] | cdktn.IResolvable) {
    this._requestParameters.internalValue = value;
  }
  public resetRequestParameters() {
    this._requestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters.internalValue;
  }

  // request_path - computed: true, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response_configuration - computed: true, optional: true, required: false
  private _responseConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationOutputReference(this, "response_configuration");
  public get responseConfiguration() {
    return this._responseConfiguration;
  }
  public putResponseConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfiguration) {
    this._responseConfiguration.internalValue = value;
  }
  public resetResponseConfiguration() {
    this._responseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseConfigurationInput() {
    return this._responseConfiguration.internalValue;
  }
}
export interface GlueConnectionTypeRestConfigurationValidationEndpointConfiguration {
  /**
  * The HTTP method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method GlueConnectionType#request_method}
  */
  readonly requestMethod?: string;
  /**
  * The URL path for the REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path GlueConnectionType#request_path}
  */
  readonly requestPath?: string;
}

export function glueConnectionTypeRestConfigurationValidationEndpointConfigurationToTerraform(struct?: GlueConnectionTypeRestConfigurationValidationEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_method: cdktn.stringToTerraform(struct!.requestMethod),
    request_path: cdktn.stringToTerraform(struct!.requestPath),
  }
}


export function glueConnectionTypeRestConfigurationValidationEndpointConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfigurationValidationEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_method: {
      value: cdktn.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktn.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationValidationEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfigurationValidationEndpointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfigurationValidationEndpointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestMethod = undefined;
      this._requestPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestMethod = value.requestMethod;
      this._requestPath = value.requestPath;
    }
  }

  // request_method - computed: true, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_path - computed: true, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }
}
export interface GlueConnectionTypeRestConfiguration {
  /**
  * A map of entity configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#entity_configurations GlueConnectionType#entity_configurations}
  */
  readonly entityConfigurations?: { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurations } | cdktn.IResolvable;
  /**
  * Configuration that defines how to make requests to endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#global_source_configuration GlueConnectionType#global_source_configuration}
  */
  readonly globalSourceConfiguration?: GlueConnectionTypeRestConfigurationGlobalSourceConfiguration;
  /**
  * Configuration for the validation endpoint. Only supports RequestMethod and RequestPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#validation_endpoint_configuration GlueConnectionType#validation_endpoint_configuration}
  */
  readonly validationEndpointConfiguration?: GlueConnectionTypeRestConfigurationValidationEndpointConfiguration;
}

export function glueConnectionTypeRestConfigurationToTerraform(struct?: GlueConnectionTypeRestConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_configurations: cdktn.hashMapper(glueConnectionTypeRestConfigurationEntityConfigurationsToTerraform)(struct!.entityConfigurations),
    global_source_configuration: glueConnectionTypeRestConfigurationGlobalSourceConfigurationToTerraform(struct!.globalSourceConfiguration),
    validation_endpoint_configuration: glueConnectionTypeRestConfigurationValidationEndpointConfigurationToTerraform(struct!.validationEndpointConfiguration),
  }
}


export function glueConnectionTypeRestConfigurationToHclTerraform(struct?: GlueConnectionTypeRestConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_configurations: {
      value: cdktn.hashMapperHcl(glueConnectionTypeRestConfigurationEntityConfigurationsToHclTerraform)(struct!.entityConfigurations),
      isBlock: true,
      type: "map",
      storageClassType: "GlueConnectionTypeRestConfigurationEntityConfigurationsMap",
    },
    global_source_configuration: {
      value: glueConnectionTypeRestConfigurationGlobalSourceConfigurationToHclTerraform(struct!.globalSourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationGlobalSourceConfiguration",
    },
    validation_endpoint_configuration: {
      value: glueConnectionTypeRestConfigurationValidationEndpointConfigurationToHclTerraform(struct!.validationEndpointConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueConnectionTypeRestConfigurationValidationEndpointConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionTypeRestConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueConnectionTypeRestConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityConfigurations = this._entityConfigurations?.internalValue;
    }
    if (this._globalSourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSourceConfiguration = this._globalSourceConfiguration?.internalValue;
    }
    if (this._validationEndpointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationEndpointConfiguration = this._validationEndpointConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionTypeRestConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityConfigurations.internalValue = undefined;
      this._globalSourceConfiguration.internalValue = undefined;
      this._validationEndpointConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityConfigurations.internalValue = value.entityConfigurations;
      this._globalSourceConfiguration.internalValue = value.globalSourceConfiguration;
      this._validationEndpointConfiguration.internalValue = value.validationEndpointConfiguration;
    }
  }

  // entity_configurations - computed: true, optional: true, required: false
  private _entityConfigurations = new GlueConnectionTypeRestConfigurationEntityConfigurationsMap(this, "entity_configurations");
  public get entityConfigurations() {
    return this._entityConfigurations;
  }
  public putEntityConfigurations(value: { [key: string]: GlueConnectionTypeRestConfigurationEntityConfigurations } | cdktn.IResolvable) {
    this._entityConfigurations.internalValue = value;
  }
  public resetEntityConfigurations() {
    this._entityConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityConfigurationsInput() {
    return this._entityConfigurations.internalValue;
  }

  // global_source_configuration - computed: true, optional: true, required: false
  private _globalSourceConfiguration = new GlueConnectionTypeRestConfigurationGlobalSourceConfigurationOutputReference(this, "global_source_configuration");
  public get globalSourceConfiguration() {
    return this._globalSourceConfiguration;
  }
  public putGlobalSourceConfiguration(value: GlueConnectionTypeRestConfigurationGlobalSourceConfiguration) {
    this._globalSourceConfiguration.internalValue = value;
  }
  public resetGlobalSourceConfiguration() {
    this._globalSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSourceConfigurationInput() {
    return this._globalSourceConfiguration.internalValue;
  }

  // validation_endpoint_configuration - computed: true, optional: true, required: false
  private _validationEndpointConfiguration = new GlueConnectionTypeRestConfigurationValidationEndpointConfigurationOutputReference(this, "validation_endpoint_configuration");
  public get validationEndpointConfiguration() {
    return this._validationEndpointConfiguration;
  }
  public putValidationEndpointConfiguration(value: GlueConnectionTypeRestConfigurationValidationEndpointConfiguration) {
    this._validationEndpointConfiguration.internalValue = value;
  }
  public resetValidationEndpointConfiguration() {
    this._validationEndpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationEndpointConfigurationInput() {
    return this._validationEndpointConfiguration.internalValue;
  }
}
export interface GlueConnectionTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key GlueConnectionType#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value GlueConnectionType#value}
  */
  readonly value?: string;
}

export function glueConnectionTypeTagsToTerraform(struct?: GlueConnectionTypeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function glueConnectionTypeTagsToHclTerraform(struct?: GlueConnectionTypeTags | cdktn.IResolvable): any {
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

export class GlueConnectionTypeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueConnectionTypeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GlueConnectionTypeTags | cdktn.IResolvable | undefined) {
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

export class GlueConnectionTypeTagsList extends cdktn.ComplexList {
  public internalValue? : GlueConnectionTypeTags[] | cdktn.IResolvable

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
  public get(index: number): GlueConnectionTypeTagsOutputReference {
    return new GlueConnectionTypeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type awscc_glue_connection_type}
*/
export class GlueConnectionType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_connection_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueConnectionType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueConnectionType to import
  * @param importFromId The id of the existing GlueConnectionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueConnectionType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_connection_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type awscc_glue_connection_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueConnectionTypeConfig
  */
  public constructor(scope: Construct, id: string, config: GlueConnectionTypeConfig) {
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
    this._connectionProperties.internalValue = config.connectionProperties;
    this._connectionType = config.connectionType;
    this._connectorAuthenticationConfiguration.internalValue = config.connectorAuthenticationConfiguration;
    this._description = config.description;
    this._integrationType = config.integrationType;
    this._restConfiguration.internalValue = config.restConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_properties - computed: true, optional: true, required: false
  private _connectionProperties = new GlueConnectionTypeConnectionPropertiesOutputReference(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }
  public putConnectionProperties(value: GlueConnectionTypeConnectionProperties) {
    this._connectionProperties.internalValue = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties.internalValue;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // connection_type_arn - computed: true, optional: false, required: false
  public get connectionTypeArn() {
    return this.getStringAttribute('connection_type_arn');
  }

  // connector_authentication_configuration - computed: true, optional: true, required: false
  private _connectorAuthenticationConfiguration = new GlueConnectionTypeConnectorAuthenticationConfigurationOutputReference(this, "connector_authentication_configuration");
  public get connectorAuthenticationConfiguration() {
    return this._connectorAuthenticationConfiguration;
  }
  public putConnectorAuthenticationConfiguration(value: GlueConnectionTypeConnectorAuthenticationConfiguration) {
    this._connectorAuthenticationConfiguration.internalValue = value;
  }
  public resetConnectorAuthenticationConfiguration() {
    this._connectorAuthenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorAuthenticationConfigurationInput() {
    return this._connectorAuthenticationConfiguration.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_type - computed: true, optional: true, required: false
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  public resetIntegrationType() {
    this._integrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // rest_configuration - computed: false, optional: false, required: true
  private _restConfiguration = new GlueConnectionTypeRestConfigurationOutputReference(this, "rest_configuration");
  public get restConfiguration() {
    return this._restConfiguration;
  }
  public putRestConfiguration(value: GlueConnectionTypeRestConfiguration) {
    this._restConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restConfigurationInput() {
    return this._restConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GlueConnectionTypeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GlueConnectionTypeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_properties: glueConnectionTypeConnectionPropertiesToTerraform(this._connectionProperties.internalValue),
      connection_type: cdktn.stringToTerraform(this._connectionType),
      connector_authentication_configuration: glueConnectionTypeConnectorAuthenticationConfigurationToTerraform(this._connectorAuthenticationConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      integration_type: cdktn.stringToTerraform(this._integrationType),
      rest_configuration: glueConnectionTypeRestConfigurationToTerraform(this._restConfiguration.internalValue),
      tags: cdktn.listMapper(glueConnectionTypeTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_properties: {
        value: glueConnectionTypeConnectionPropertiesToHclTerraform(this._connectionProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueConnectionTypeConnectionProperties",
      },
      connection_type: {
        value: cdktn.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_authentication_configuration: {
        value: glueConnectionTypeConnectorAuthenticationConfigurationToHclTerraform(this._connectorAuthenticationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueConnectionTypeConnectorAuthenticationConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_type: {
        value: cdktn.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_configuration: {
        value: glueConnectionTypeRestConfigurationToHclTerraform(this._restConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueConnectionTypeRestConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(glueConnectionTypeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueConnectionTypeTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
