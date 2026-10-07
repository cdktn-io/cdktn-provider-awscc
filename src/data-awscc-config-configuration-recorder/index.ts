/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_configuration_recorder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConfigConfigurationRecorderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_configuration_recorder#id DataAwsccConfigConfigurationRecorder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
}

export function dataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
}
export interface DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy {
}

export function dataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyToTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_only - computed: true, optional: false, required: false
  public get useOnly() {
    return this.getStringAttribute('use_only');
  }
}
export interface DataAwsccConfigConfigurationRecorderRecordingGroup {
}

export function dataAwsccConfigConfigurationRecorderRecordingGroupToTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigConfigurationRecorderRecordingGroupToHclTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigConfigurationRecorderRecordingGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigConfigurationRecorderRecordingGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_supported - computed: true, optional: false, required: false
  public get allSupported() {
    return this.getBooleanAttribute('all_supported');
  }

  // exclusion_by_resource_types - computed: true, optional: false, required: false
  private _exclusionByResourceTypes = new DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(this, "exclusion_by_resource_types");
  public get exclusionByResourceTypes() {
    return this._exclusionByResourceTypes;
  }

  // include_global_resource_types - computed: true, optional: false, required: false
  public get includeGlobalResourceTypes() {
    return this.getBooleanAttribute('include_global_resource_types');
  }

  // recording_strategy - computed: true, optional: false, required: false
  private _recordingStrategy = new DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(this, "recording_strategy");
  public get recordingStrategy() {
    return this._recordingStrategy;
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
}
export interface DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides {
}

export function dataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesToTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesToHclTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // recording_frequency - computed: true, optional: false, required: false
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
}

export class DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference {
    return new DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConfigConfigurationRecorderRecordingMode {
}

export function dataAwsccConfigConfigurationRecorderRecordingModeToTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigConfigurationRecorderRecordingModeToHclTerraform(struct?: DataAwsccConfigConfigurationRecorderRecordingMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigConfigurationRecorderRecordingModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigConfigurationRecorderRecordingMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigConfigurationRecorderRecordingMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recording_frequency - computed: true, optional: false, required: false
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }

  // recording_mode_overrides - computed: true, optional: false, required: false
  private _recordingModeOverrides = new DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(this, "recording_mode_overrides", false);
  public get recordingModeOverrides() {
    return this._recordingModeOverrides;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_configuration_recorder awscc_config_configuration_recorder}
*/
export class DataAwsccConfigConfigurationRecorder extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_configuration_recorder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConfigConfigurationRecorder to import
  * @param importFromId The id of the existing DataAwsccConfigConfigurationRecorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConfigConfigurationRecorder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_configuration_recorder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_configuration_recorder awscc_config_configuration_recorder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigConfigurationRecorderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_configuration_recorder',
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recording_group - computed: true, optional: false, required: false
  private _recordingGroup = new DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference(this, "recording_group");
  public get recordingGroup() {
    return this._recordingGroup;
  }

  // recording_mode - computed: true, optional: false, required: false
  private _recordingMode = new DataAwsccConfigConfigurationRecorderRecordingModeOutputReference(this, "recording_mode");
  public get recordingMode() {
    return this._recordingMode;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // started_on_create - computed: true, optional: false, required: false
  public get startedOnCreate() {
    return this.getBooleanAttribute('started_on_create');
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
