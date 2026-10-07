/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApplicationsignalsInstrumentationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}
  */
  readonly attributeFilters?: { [key: string]: string }[] | cdktn.IResolvable;
  /**
  * Specifies what to capture when the instrumentation point is hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}
  */
  readonly captureConfiguration: ApplicationsignalsInstrumentationConfigCaptureConfiguration;
  /**
  * An optional short description that explains the purpose of this instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}
  */
  readonly description?: string;
  /**
  * The environment that the service is running in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}
  */
  readonly environment: string;
  /**
  * The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}
  */
  readonly instrumentationType: string;
  /**
  * The location where instrumentation should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}
  */
  readonly location: ApplicationsignalsInstrumentationConfigLocation;
  /**
  * The name of the service to instrument. This should match the service.name resource attribute reported by the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}
  */
  readonly service: string;
  /**
  * The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}
  */
  readonly signalType: string;
  /**
  * An optional list of key-value pairs to associate with the instrumentation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}
  */
  readonly tags?: ApplicationsignalsInstrumentationConfigTags[] | cdktn.IResolvable;
}
export interface ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {
  /**
  * Maximum nesting depth to traverse inside collections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}
  */
  readonly maxCollectionDepth?: number;
  /**
  * Maximum number of items to capture from any collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}
  */
  readonly maxCollectionWidth?: number;
  /**
  * Maximum number of fields to capture for any object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}
  */
  readonly maxFieldsPerObject?: number;
  /**
  * Maximum number of times the instrumentation point can be hit before disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}
  */
  readonly maxHits?: number;
  /**
  * Maximum depth for nested object traversal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}
  */
  readonly maxObjectDepth?: number;
  /**
  * Maximum number of stack frames to capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}
  */
  readonly maxStackFrames?: number;
  /**
  * Maximum total size in bytes of a captured stack trace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}
  */
  readonly maxStackTraceSize?: number;
  /**
  * Maximum length of captured string values in characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}
  */
  readonly maxStringLength?: number;
}

export function applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_collection_depth: cdktn.numberToTerraform(struct!.maxCollectionDepth),
    max_collection_width: cdktn.numberToTerraform(struct!.maxCollectionWidth),
    max_fields_per_object: cdktn.numberToTerraform(struct!.maxFieldsPerObject),
    max_hits: cdktn.numberToTerraform(struct!.maxHits),
    max_object_depth: cdktn.numberToTerraform(struct!.maxObjectDepth),
    max_stack_frames: cdktn.numberToTerraform(struct!.maxStackFrames),
    max_stack_trace_size: cdktn.numberToTerraform(struct!.maxStackTraceSize),
    max_string_length: cdktn.numberToTerraform(struct!.maxStringLength),
  }
}


export function applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_collection_depth: {
      value: cdktn.numberToHclTerraform(struct!.maxCollectionDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_collection_width: {
      value: cdktn.numberToHclTerraform(struct!.maxCollectionWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_fields_per_object: {
      value: cdktn.numberToHclTerraform(struct!.maxFieldsPerObject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_hits: {
      value: cdktn.numberToHclTerraform(struct!.maxHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_object_depth: {
      value: cdktn.numberToHclTerraform(struct!.maxObjectDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stack_frames: {
      value: cdktn.numberToHclTerraform(struct!.maxStackFrames),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stack_trace_size: {
      value: cdktn.numberToHclTerraform(struct!.maxStackTraceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_string_length: {
      value: cdktn.numberToHclTerraform(struct!.maxStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCollectionDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCollectionDepth = this._maxCollectionDepth;
    }
    if (this._maxCollectionWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCollectionWidth = this._maxCollectionWidth;
    }
    if (this._maxFieldsPerObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFieldsPerObject = this._maxFieldsPerObject;
    }
    if (this._maxHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHits = this._maxHits;
    }
    if (this._maxObjectDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjectDepth = this._maxObjectDepth;
    }
    if (this._maxStackFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStackFrames = this._maxStackFrames;
    }
    if (this._maxStackTraceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStackTraceSize = this._maxStackTraceSize;
    }
    if (this._maxStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStringLength = this._maxStringLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCollectionDepth = undefined;
      this._maxCollectionWidth = undefined;
      this._maxFieldsPerObject = undefined;
      this._maxHits = undefined;
      this._maxObjectDepth = undefined;
      this._maxStackFrames = undefined;
      this._maxStackTraceSize = undefined;
      this._maxStringLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCollectionDepth = value.maxCollectionDepth;
      this._maxCollectionWidth = value.maxCollectionWidth;
      this._maxFieldsPerObject = value.maxFieldsPerObject;
      this._maxHits = value.maxHits;
      this._maxObjectDepth = value.maxObjectDepth;
      this._maxStackFrames = value.maxStackFrames;
      this._maxStackTraceSize = value.maxStackTraceSize;
      this._maxStringLength = value.maxStringLength;
    }
  }

  // max_collection_depth - computed: true, optional: true, required: false
  private _maxCollectionDepth?: number; 
  public get maxCollectionDepth() {
    return this.getNumberAttribute('max_collection_depth');
  }
  public set maxCollectionDepth(value: number) {
    this._maxCollectionDepth = value;
  }
  public resetMaxCollectionDepth() {
    this._maxCollectionDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCollectionDepthInput() {
    return this._maxCollectionDepth;
  }

  // max_collection_width - computed: true, optional: true, required: false
  private _maxCollectionWidth?: number; 
  public get maxCollectionWidth() {
    return this.getNumberAttribute('max_collection_width');
  }
  public set maxCollectionWidth(value: number) {
    this._maxCollectionWidth = value;
  }
  public resetMaxCollectionWidth() {
    this._maxCollectionWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCollectionWidthInput() {
    return this._maxCollectionWidth;
  }

  // max_fields_per_object - computed: true, optional: true, required: false
  private _maxFieldsPerObject?: number; 
  public get maxFieldsPerObject() {
    return this.getNumberAttribute('max_fields_per_object');
  }
  public set maxFieldsPerObject(value: number) {
    this._maxFieldsPerObject = value;
  }
  public resetMaxFieldsPerObject() {
    this._maxFieldsPerObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFieldsPerObjectInput() {
    return this._maxFieldsPerObject;
  }

  // max_hits - computed: true, optional: true, required: false
  private _maxHits?: number; 
  public get maxHits() {
    return this.getNumberAttribute('max_hits');
  }
  public set maxHits(value: number) {
    this._maxHits = value;
  }
  public resetMaxHits() {
    this._maxHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHitsInput() {
    return this._maxHits;
  }

  // max_object_depth - computed: true, optional: true, required: false
  private _maxObjectDepth?: number; 
  public get maxObjectDepth() {
    return this.getNumberAttribute('max_object_depth');
  }
  public set maxObjectDepth(value: number) {
    this._maxObjectDepth = value;
  }
  public resetMaxObjectDepth() {
    this._maxObjectDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectDepthInput() {
    return this._maxObjectDepth;
  }

  // max_stack_frames - computed: true, optional: true, required: false
  private _maxStackFrames?: number; 
  public get maxStackFrames() {
    return this.getNumberAttribute('max_stack_frames');
  }
  public set maxStackFrames(value: number) {
    this._maxStackFrames = value;
  }
  public resetMaxStackFrames() {
    this._maxStackFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackFramesInput() {
    return this._maxStackFrames;
  }

  // max_stack_trace_size - computed: true, optional: true, required: false
  private _maxStackTraceSize?: number; 
  public get maxStackTraceSize() {
    return this.getNumberAttribute('max_stack_trace_size');
  }
  public set maxStackTraceSize(value: number) {
    this._maxStackTraceSize = value;
  }
  public resetMaxStackTraceSize() {
    this._maxStackTraceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackTraceSizeInput() {
    return this._maxStackTraceSize;
  }

  // max_string_length - computed: true, optional: true, required: false
  private _maxStringLength?: number; 
  public get maxStringLength() {
    return this.getNumberAttribute('max_string_length');
  }
  public set maxStringLength(value: number) {
    this._maxStringLength = value;
  }
  public resetMaxStringLength() {
    this._maxStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStringLengthInput() {
    return this._maxStringLength;
  }
}
export interface ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {
  /**
  * The function arguments to capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}
  */
  readonly captureArguments?: string[];
  /**
  * Safety limits that bound what is captured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}
  */
  readonly captureLimits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;
  /**
  * The local variables to capture by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}
  */
  readonly captureLocals?: string[];
  /**
  * Whether to capture the return value. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}
  */
  readonly captureReturn?: boolean | cdktn.IResolvable;
  /**
  * Whether to capture a stack trace. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}
  */
  readonly captureStackTrace?: boolean | cdktn.IResolvable;
}

export function applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capture_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.captureArguments),
    capture_limits: applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToTerraform(struct!.captureLimits),
    capture_locals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.captureLocals),
    capture_return: cdktn.booleanToTerraform(struct!.captureReturn),
    capture_stack_trace: cdktn.booleanToTerraform(struct!.captureStackTrace),
  }
}


export function applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capture_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.captureArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capture_limits: {
      value: applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsToHclTerraform(struct!.captureLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits",
    },
    capture_locals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.captureLocals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capture_return: {
      value: cdktn.booleanToHclTerraform(struct!.captureReturn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture_stack_trace: {
      value: cdktn.booleanToHclTerraform(struct!.captureStackTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureArguments = this._captureArguments;
    }
    if (this._captureLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureLimits = this._captureLimits?.internalValue;
    }
    if (this._captureLocals !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureLocals = this._captureLocals;
    }
    if (this._captureReturn !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureReturn = this._captureReturn;
    }
    if (this._captureStackTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureStackTrace = this._captureStackTrace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureArguments = undefined;
      this._captureLimits.internalValue = undefined;
      this._captureLocals = undefined;
      this._captureReturn = undefined;
      this._captureStackTrace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureArguments = value.captureArguments;
      this._captureLimits.internalValue = value.captureLimits;
      this._captureLocals = value.captureLocals;
      this._captureReturn = value.captureReturn;
      this._captureStackTrace = value.captureStackTrace;
    }
  }

  // capture_arguments - computed: true, optional: true, required: false
  private _captureArguments?: string[]; 
  public get captureArguments() {
    return this.getListAttribute('capture_arguments');
  }
  public set captureArguments(value: string[]) {
    this._captureArguments = value;
  }
  public resetCaptureArguments() {
    this._captureArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureArgumentsInput() {
    return this._captureArguments;
  }

  // capture_limits - computed: false, optional: false, required: true
  private _captureLimits = new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(this, "capture_limits");
  public get captureLimits() {
    return this._captureLimits;
  }
  public putCaptureLimits(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits) {
    this._captureLimits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureLimitsInput() {
    return this._captureLimits.internalValue;
  }

  // capture_locals - computed: true, optional: true, required: false
  private _captureLocals?: string[]; 
  public get captureLocals() {
    return this.getListAttribute('capture_locals');
  }
  public set captureLocals(value: string[]) {
    this._captureLocals = value;
  }
  public resetCaptureLocals() {
    this._captureLocals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureLocalsInput() {
    return this._captureLocals;
  }

  // capture_return - computed: true, optional: true, required: false
  private _captureReturn?: boolean | cdktn.IResolvable; 
  public get captureReturn() {
    return this.getBooleanAttribute('capture_return');
  }
  public set captureReturn(value: boolean | cdktn.IResolvable) {
    this._captureReturn = value;
  }
  public resetCaptureReturn() {
    this._captureReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureReturnInput() {
    return this._captureReturn;
  }

  // capture_stack_trace - computed: true, optional: true, required: false
  private _captureStackTrace?: boolean | cdktn.IResolvable; 
  public get captureStackTrace() {
    return this.getBooleanAttribute('capture_stack_trace');
  }
  public set captureStackTrace(value: boolean | cdktn.IResolvable) {
    this._captureStackTrace = value;
  }
  public resetCaptureStackTrace() {
    this._captureStackTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureStackTraceInput() {
    return this._captureStackTrace;
  }
}
export interface ApplicationsignalsInstrumentationConfigCaptureConfiguration {
  /**
  * Defines what data to capture for code-level instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}
  */
  readonly codeCapture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;
}

export function applicationsignalsInstrumentationConfigCaptureConfigurationToTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_capture: applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToTerraform(struct!.codeCapture),
  }
}


export function applicationsignalsInstrumentationConfigCaptureConfigurationToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigCaptureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_capture: {
      value: applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureToHclTerraform(struct!.codeCapture),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsInstrumentationConfigCaptureConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeCapture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeCapture = this._codeCapture?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsInstrumentationConfigCaptureConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeCapture.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeCapture.internalValue = value.codeCapture;
    }
  }

  // code_capture - computed: false, optional: false, required: true
  private _codeCapture = new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(this, "code_capture");
  public get codeCapture() {
    return this._codeCapture;
  }
  public putCodeCapture(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture) {
    this._codeCapture.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCaptureInput() {
    return this._codeCapture.internalValue;
  }
}
export interface ApplicationsignalsInstrumentationConfigLocationCodeLocation {
  /**
  * The class or type name that contains the method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}
  */
  readonly className?: string;
  /**
  * The package, module, or namespace that contains the target code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}
  */
  readonly codeUnit?: string;
  /**
  * The source file path relative to the project or source root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}
  */
  readonly filePath: string;
  /**
  * The programming language for this instrumentation point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}
  */
  readonly language: string;
  /**
  * The line number to instrument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}
  */
  readonly lineNumber?: number;
  /**
  * The method or function name to instrument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}
  */
  readonly methodName?: string;
}

export function applicationsignalsInstrumentationConfigLocationCodeLocationToTerraform(struct?: ApplicationsignalsInstrumentationConfigLocationCodeLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    class_name: cdktn.stringToTerraform(struct!.className),
    code_unit: cdktn.stringToTerraform(struct!.codeUnit),
    file_path: cdktn.stringToTerraform(struct!.filePath),
    language: cdktn.stringToTerraform(struct!.language),
    line_number: cdktn.numberToTerraform(struct!.lineNumber),
    method_name: cdktn.stringToTerraform(struct!.methodName),
  }
}


export function applicationsignalsInstrumentationConfigLocationCodeLocationToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigLocationCodeLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    class_name: {
      value: cdktn.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_unit: {
      value: cdktn.stringToHclTerraform(struct!.codeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktn.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_number: {
      value: cdktn.numberToHclTerraform(struct!.lineNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_name: {
      value: cdktn.stringToHclTerraform(struct!.methodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsInstrumentationConfigLocationCodeLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._codeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeUnit = this._codeUnit;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._lineNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineNumber = this._lineNumber;
    }
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsInstrumentationConfigLocationCodeLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._codeUnit = undefined;
      this._filePath = undefined;
      this._language = undefined;
      this._lineNumber = undefined;
      this._methodName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._codeUnit = value.codeUnit;
      this._filePath = value.filePath;
      this._language = value.language;
      this._lineNumber = value.lineNumber;
      this._methodName = value.methodName;
    }
  }

  // class_name - computed: true, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // code_unit - computed: true, optional: true, required: false
  private _codeUnit?: string; 
  public get codeUnit() {
    return this.getStringAttribute('code_unit');
  }
  public set codeUnit(value: string) {
    this._codeUnit = value;
  }
  public resetCodeUnit() {
    this._codeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeUnitInput() {
    return this._codeUnit;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // line_number - computed: true, optional: true, required: false
  private _lineNumber?: number; 
  public get lineNumber() {
    return this.getNumberAttribute('line_number');
  }
  public set lineNumber(value: number) {
    this._lineNumber = value;
  }
  public resetLineNumber() {
    this._lineNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineNumberInput() {
    return this._lineNumber;
  }

  // method_name - computed: true, optional: true, required: false
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
  }
}
export interface ApplicationsignalsInstrumentationConfigLocation {
  /**
  * Identifies a code location to instrument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}
  */
  readonly codeLocation: ApplicationsignalsInstrumentationConfigLocationCodeLocation;
}

export function applicationsignalsInstrumentationConfigLocationToTerraform(struct?: ApplicationsignalsInstrumentationConfigLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_location: applicationsignalsInstrumentationConfigLocationCodeLocationToTerraform(struct!.codeLocation),
  }
}


export function applicationsignalsInstrumentationConfigLocationToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_location: {
      value: applicationsignalsInstrumentationConfigLocationCodeLocationToHclTerraform(struct!.codeLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsInstrumentationConfigLocationCodeLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsInstrumentationConfigLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsInstrumentationConfigLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLocation = this._codeLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsInstrumentationConfigLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeLocation.internalValue = value.codeLocation;
    }
  }

  // code_location - computed: false, optional: false, required: true
  private _codeLocation = new ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(this, "code_location");
  public get codeLocation() {
    return this._codeLocation;
  }
  public putCodeLocation(value: ApplicationsignalsInstrumentationConfigLocationCodeLocation) {
    this._codeLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLocationInput() {
    return this._codeLocation.internalValue;
  }
}
export interface ApplicationsignalsInstrumentationConfigTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}
  */
  readonly value?: string;
}

export function applicationsignalsInstrumentationConfigTagsToTerraform(struct?: ApplicationsignalsInstrumentationConfigTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsInstrumentationConfigTagsToHclTerraform(struct?: ApplicationsignalsInstrumentationConfigTags | cdktn.IResolvable): any {
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

export class ApplicationsignalsInstrumentationConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsInstrumentationConfigTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApplicationsignalsInstrumentationConfigTags | cdktn.IResolvable | undefined) {
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

export class ApplicationsignalsInstrumentationConfigTagsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsInstrumentationConfigTags[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsInstrumentationConfigTagsOutputReference {
    return new ApplicationsignalsInstrumentationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}
*/
export class ApplicationsignalsInstrumentationConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationsignals_instrumentation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import
  * @param importFromId The id of the existing ApplicationsignalsInstrumentationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_instrumentation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationsignalsInstrumentationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationsignalsInstrumentationConfigConfig) {
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
    this._attributeFilters = config.attributeFilters;
    this._captureConfiguration.internalValue = config.captureConfiguration;
    this._description = config.description;
    this._environment = config.environment;
    this._expiresAt = config.expiresAt;
    this._instrumentationType = config.instrumentationType;
    this._location.internalValue = config.location;
    this._service = config.service;
    this._signalType = config.signalType;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_filters - computed: true, optional: true, required: false
  private _attributeFilters?: { [key: string]: string }[] | cdktn.IResolvable; 
  public get attributeFilters() {
    return this.interpolationForAttribute('attribute_filters');
  }
  public set attributeFilters(value: { [key: string]: string }[] | cdktn.IResolvable) {
    this._attributeFilters = value;
  }
  public resetAttributeFilters() {
    this._attributeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFiltersInput() {
    return this._attributeFilters;
  }

  // capture_configuration - computed: false, optional: false, required: true
  private _captureConfiguration = new ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(this, "capture_configuration");
  public get captureConfiguration() {
    return this._captureConfiguration;
  }
  public putCaptureConfiguration(value: ApplicationsignalsInstrumentationConfigCaptureConfiguration) {
    this._captureConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigurationInput() {
    return this._captureConfiguration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instrumentation_type - computed: false, optional: false, required: true
  private _instrumentationType?: string; 
  public get instrumentationType() {
    return this.getStringAttribute('instrumentation_type');
  }
  public set instrumentationType(value: string) {
    this._instrumentationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationTypeInput() {
    return this._instrumentationType;
  }

  // location - computed: false, optional: false, required: true
  private _location = new ApplicationsignalsInstrumentationConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: ApplicationsignalsInstrumentationConfigLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // location_hash - computed: true, optional: false, required: false
  public get locationHash() {
    return this.getStringAttribute('location_hash');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signal_type - computed: false, optional: false, required: true
  private _signalType?: string; 
  public get signalType() {
    return this.getStringAttribute('signal_type');
  }
  public set signalType(value: string) {
    this._signalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTypeInput() {
    return this._signalType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationsignalsInstrumentationConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationsignalsInstrumentationConfigTags[] | cdktn.IResolvable) {
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
      attribute_filters: cdktn.listMapper(cdktn.hashMapper(cdktn.stringToTerraform), false)(this._attributeFilters),
      capture_configuration: applicationsignalsInstrumentationConfigCaptureConfigurationToTerraform(this._captureConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      environment: cdktn.stringToTerraform(this._environment),
      expires_at: cdktn.stringToTerraform(this._expiresAt),
      instrumentation_type: cdktn.stringToTerraform(this._instrumentationType),
      location: applicationsignalsInstrumentationConfigLocationToTerraform(this._location.internalValue),
      service: cdktn.stringToTerraform(this._service),
      signal_type: cdktn.stringToTerraform(this._signalType),
      tags: cdktn.listMapper(applicationsignalsInstrumentationConfigTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_filters: {
        value: cdktn.listMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform), false)(this._attributeFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      capture_configuration: {
        value: applicationsignalsInstrumentationConfigCaptureConfigurationToHclTerraform(this._captureConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationsignalsInstrumentationConfigCaptureConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktn.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instrumentation_type: {
        value: cdktn.stringToHclTerraform(this._instrumentationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: applicationsignalsInstrumentationConfigLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationsignalsInstrumentationConfigLocation",
      },
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_type: {
        value: cdktn.stringToHclTerraform(this._signalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(applicationsignalsInstrumentationConfigTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationsignalsInstrumentationConfigTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
