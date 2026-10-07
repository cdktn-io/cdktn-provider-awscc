/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApplicationsignalsInstrumentationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {
}

export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_collection_depth - computed: true, optional: false, required: false
  public get maxCollectionDepth() {
    return this.getNumberAttribute('max_collection_depth');
  }

  // max_collection_width - computed: true, optional: false, required: false
  public get maxCollectionWidth() {
    return this.getNumberAttribute('max_collection_width');
  }

  // max_fields_per_object - computed: true, optional: false, required: false
  public get maxFieldsPerObject() {
    return this.getNumberAttribute('max_fields_per_object');
  }

  // max_hits - computed: true, optional: false, required: false
  public get maxHits() {
    return this.getNumberAttribute('max_hits');
  }

  // max_object_depth - computed: true, optional: false, required: false
  public get maxObjectDepth() {
    return this.getNumberAttribute('max_object_depth');
  }

  // max_stack_frames - computed: true, optional: false, required: false
  public get maxStackFrames() {
    return this.getNumberAttribute('max_stack_frames');
  }

  // max_stack_trace_size - computed: true, optional: false, required: false
  public get maxStackTraceSize() {
    return this.getNumberAttribute('max_stack_trace_size');
  }

  // max_string_length - computed: true, optional: false, required: false
  public get maxStringLength() {
    return this.getNumberAttribute('max_string_length');
  }
}
export interface DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {
}

export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_arguments - computed: true, optional: false, required: false
  public get captureArguments() {
    return this.getListAttribute('capture_arguments');
  }

  // capture_limits - computed: true, optional: false, required: false
  private _captureLimits = new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(this, "capture_limits");
  public get captureLimits() {
    return this._captureLimits;
  }

  // capture_locals - computed: true, optional: false, required: false
  public get captureLocals() {
    return this.getListAttribute('capture_locals');
  }

  // capture_return - computed: true, optional: false, required: false
  public get captureReturn() {
    return this.getBooleanAttribute('capture_return');
  }

  // capture_stack_trace - computed: true, optional: false, required: false
  public get captureStackTrace() {
    return this.getBooleanAttribute('capture_stack_trace');
  }
}
export interface DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration {
}

export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_capture - computed: true, optional: false, required: false
  private _codeCapture = new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(this, "code_capture");
  public get codeCapture() {
    return this._codeCapture;
  }
}
export interface DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation {
}

export function dataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_name - computed: true, optional: false, required: false
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // code_unit - computed: true, optional: false, required: false
  public get codeUnit() {
    return this.getStringAttribute('code_unit');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // line_number - computed: true, optional: false, required: false
  public get lineNumber() {
    return this.getNumberAttribute('line_number');
  }

  // method_name - computed: true, optional: false, required: false
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
}
export interface DataAwsccApplicationsignalsInstrumentationConfigLocation {
}

export function dataAwsccApplicationsignalsInstrumentationConfigLocationToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigLocationToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_location - computed: true, optional: false, required: false
  private _codeLocation = new DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(this, "code_location");
  public get codeLocation() {
    return this._codeLocation;
  }
}
export interface DataAwsccApplicationsignalsInstrumentationConfigTags {
}

export function dataAwsccApplicationsignalsInstrumentationConfigTagsToTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsInstrumentationConfigTagsToHclTerraform(struct?: DataAwsccApplicationsignalsInstrumentationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsInstrumentationConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsInstrumentationConfigTags | undefined) {
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

export class DataAwsccApplicationsignalsInstrumentationConfigTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference {
    return new DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}
*/
export class DataAwsccApplicationsignalsInstrumentationConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationsignals_instrumentation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApplicationsignalsInstrumentationConfig to import
  * @param importFromId The id of the existing DataAwsccApplicationsignalsInstrumentationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApplicationsignalsInstrumentationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_instrumentation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApplicationsignalsInstrumentationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApplicationsignalsInstrumentationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_applicationsignals_instrumentation_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_filters - computed: true, optional: false, required: false
  private _attributeFilters = new cdktn.StringMapList(this, "attribute_filters", false);
  public get attributeFilters() {
    return this._attributeFilters;
  }

  // capture_configuration - computed: true, optional: false, required: false
  private _captureConfiguration = new DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(this, "capture_configuration");
  public get captureConfiguration() {
    return this._captureConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // instrumentation_type - computed: true, optional: false, required: false
  public get instrumentationType() {
    return this.getStringAttribute('instrumentation_type');
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // location_hash - computed: true, optional: false, required: false
  public get locationHash() {
    return this.getStringAttribute('location_hash');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // signal_type - computed: true, optional: false, required: false
  public get signalType() {
    return this.getStringAttribute('signal_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApplicationsignalsInstrumentationConfigTagsList(this, "tags", false);
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
