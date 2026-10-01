/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigConfigurationRecorderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the configuration recorder. By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}
  */
  readonly name?: string;
  /**
  * Specifies which resource types are in scope for the configuration recorder to record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}
  */
  readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
  /**
  * Specifies the default recording frequency for the configuration recorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}
  */
  readonly recordingMode?: ConfigConfigurationRecorderRecordingMode;
  /**
  * The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}
  */
  readonly roleArn: string;
  /**
  * Defaults to 'true'. Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}
  */
  readonly startedOnCreate?: boolean | cdktn.IResolvable;
}
export interface ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
  /**
  * A comma-separated list of resource types to exclude from recording by the configuration recorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface ConfigConfigurationRecorderRecordingGroupRecordingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}
  */
  readonly useOnly?: string;
}

export function configConfigurationRecorderRecordingGroupRecordingStrategyToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    use_only: cdktn.stringToTerraform(struct!.useOnly),
  }
}


export function configConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    use_only: {
      value: cdktn.stringToHclTerraform(struct!.useOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOnly = this._useOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useOnly = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useOnly = value.useOnly;
    }
  }

  // use_only - computed: true, optional: true, required: false
  private _useOnly?: string; 
  public get useOnly() {
    return this.getStringAttribute('use_only');
  }
  public set useOnly(value: string) {
    this._useOnly = value;
  }
  public resetUseOnly() {
    this._useOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOnlyInput() {
    return this._useOnly;
  }
}
export interface ConfigConfigurationRecorderRecordingGroup {
  /**
  * Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}
  */
  readonly allSupported?: boolean | cdktn.IResolvable;
  /**
  * An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}
  */
  readonly exclusionByResourceTypes?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes;
  /**
  * This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
  */
  readonly includeGlobalResourceTypes?: boolean | cdktn.IResolvable;
  /**
  * An object that specifies the recording strategy for the configuration recorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}
  */
  readonly recordingStrategy?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy;
  /**
  * A comma-separated list that specifies which resource types AWS Config records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_supported: cdktn.booleanToTerraform(struct!.allSupported),
    exclusion_by_resource_types: configConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform(struct!.exclusionByResourceTypes),
    include_global_resource_types: cdktn.booleanToTerraform(struct!.includeGlobalResourceTypes),
    recording_strategy: configConfigurationRecorderRecordingGroupRecordingStrategyToTerraform(struct!.recordingStrategy),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function configConfigurationRecorderRecordingGroupToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_supported: {
      value: cdktn.booleanToHclTerraform(struct!.allSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusion_by_resource_types: {
      value: configConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform(struct!.exclusionByResourceTypes),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes",
    },
    include_global_resource_types: {
      value: cdktn.booleanToHclTerraform(struct!.includeGlobalResourceTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recording_strategy: {
      value: configConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform(struct!.recordingStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigConfigurationRecorderRecordingGroupRecordingStrategy",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSupported = this._allSupported;
    }
    if (this._exclusionByResourceTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionByResourceTypes = this._exclusionByResourceTypes?.internalValue;
    }
    if (this._includeGlobalResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGlobalResourceTypes = this._includeGlobalResourceTypes;
    }
    if (this._recordingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingStrategy = this._recordingStrategy?.internalValue;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allSupported = undefined;
      this._exclusionByResourceTypes.internalValue = undefined;
      this._includeGlobalResourceTypes = undefined;
      this._recordingStrategy.internalValue = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allSupported = value.allSupported;
      this._exclusionByResourceTypes.internalValue = value.exclusionByResourceTypes;
      this._includeGlobalResourceTypes = value.includeGlobalResourceTypes;
      this._recordingStrategy.internalValue = value.recordingStrategy;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // all_supported - computed: true, optional: true, required: false
  private _allSupported?: boolean | cdktn.IResolvable; 
  public get allSupported() {
    return this.getBooleanAttribute('all_supported');
  }
  public set allSupported(value: boolean | cdktn.IResolvable) {
    this._allSupported = value;
  }
  public resetAllSupported() {
    this._allSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSupportedInput() {
    return this._allSupported;
  }

  // exclusion_by_resource_types - computed: true, optional: true, required: false
  private _exclusionByResourceTypes = new ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(this, "exclusion_by_resource_types");
  public get exclusionByResourceTypes() {
    return this._exclusionByResourceTypes;
  }
  public putExclusionByResourceTypes(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes) {
    this._exclusionByResourceTypes.internalValue = value;
  }
  public resetExclusionByResourceTypes() {
    this._exclusionByResourceTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionByResourceTypesInput() {
    return this._exclusionByResourceTypes.internalValue;
  }

  // include_global_resource_types - computed: true, optional: true, required: false
  private _includeGlobalResourceTypes?: boolean | cdktn.IResolvable; 
  public get includeGlobalResourceTypes() {
    return this.getBooleanAttribute('include_global_resource_types');
  }
  public set includeGlobalResourceTypes(value: boolean | cdktn.IResolvable) {
    this._includeGlobalResourceTypes = value;
  }
  public resetIncludeGlobalResourceTypes() {
    this._includeGlobalResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalResourceTypesInput() {
    return this._includeGlobalResourceTypes;
  }

  // recording_strategy - computed: true, optional: true, required: false
  private _recordingStrategy = new ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(this, "recording_strategy");
  public get recordingStrategy() {
    return this._recordingStrategy;
  }
  public putRecordingStrategy(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy) {
    this._recordingStrategy.internalValue = value;
  }
  public resetRecordingStrategy() {
    this._recordingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingStrategyInput() {
    return this._recordingStrategy.internalValue;
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface ConfigConfigurationRecorderRecordingModeRecordingModeOverrides {
  /**
  * A description that you provide for the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}
  */
  readonly description?: string;
  /**
  * The recording frequency that will be applied to all the resource types specified in the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
  */
  readonly recordingFrequency?: string;
  /**
  * A comma-separated list that specifies which resource types AWS Config includes in the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function configConfigurationRecorderRecordingModeRecordingModeOverridesToTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    recording_frequency: cdktn.stringToTerraform(struct!.recordingFrequency),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function configConfigurationRecorderRecordingModeRecordingModeOverridesToHclTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_frequency: {
      value: cdktn.stringToHclTerraform(struct!.recordingFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigConfigurationRecorderRecordingModeRecordingModeOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._recordingFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingFrequency = this._recordingFrequency;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._recordingFrequency = undefined;
      this._resourceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._recordingFrequency = value.recordingFrequency;
      this._resourceTypes = value.resourceTypes;
    }
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

  // recording_frequency - computed: true, optional: true, required: false
  private _recordingFrequency?: string; 
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }
  public set recordingFrequency(value: string) {
    this._recordingFrequency = value;
  }
  public resetRecordingFrequency() {
    this._recordingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingFrequencyInput() {
    return this._recordingFrequency;
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}

export class ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList extends cdktn.ComplexList {
  public internalValue? : ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[] | cdktn.IResolvable

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
  public get(index: number): ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference {
    return new ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigConfigurationRecorderRecordingMode {
  /**
  * The default recording frequency that AWS Config uses to record configuration changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
  */
  readonly recordingFrequency?: string;
  /**
  * An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}
  */
  readonly recordingModeOverrides?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[] | cdktn.IResolvable;
}

export function configConfigurationRecorderRecordingModeToTerraform(struct?: ConfigConfigurationRecorderRecordingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recording_frequency: cdktn.stringToTerraform(struct!.recordingFrequency),
    recording_mode_overrides: cdktn.listMapper(configConfigurationRecorderRecordingModeRecordingModeOverridesToTerraform, false)(struct!.recordingModeOverrides),
  }
}


export function configConfigurationRecorderRecordingModeToHclTerraform(struct?: ConfigConfigurationRecorderRecordingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recording_frequency: {
      value: cdktn.stringToHclTerraform(struct!.recordingFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_mode_overrides: {
      value: cdktn.listMapperHcl(configConfigurationRecorderRecordingModeRecordingModeOverridesToHclTerraform, false)(struct!.recordingModeOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationRecorderRecordingModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordingFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingFrequency = this._recordingFrequency;
    }
    if (this._recordingModeOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingModeOverrides = this._recordingModeOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordingFrequency = undefined;
      this._recordingModeOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordingFrequency = value.recordingFrequency;
      this._recordingModeOverrides.internalValue = value.recordingModeOverrides;
    }
  }

  // recording_frequency - computed: true, optional: true, required: false
  private _recordingFrequency?: string; 
  public get recordingFrequency() {
    return this.getStringAttribute('recording_frequency');
  }
  public set recordingFrequency(value: string) {
    this._recordingFrequency = value;
  }
  public resetRecordingFrequency() {
    this._recordingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingFrequencyInput() {
    return this._recordingFrequency;
  }

  // recording_mode_overrides - computed: true, optional: true, required: false
  private _recordingModeOverrides = new ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(this, "recording_mode_overrides", false);
  public get recordingModeOverrides() {
    return this._recordingModeOverrides;
  }
  public putRecordingModeOverrides(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[] | cdktn.IResolvable) {
    this._recordingModeOverrides.internalValue = value;
  }
  public resetRecordingModeOverrides() {
    this._recordingModeOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingModeOverridesInput() {
    return this._recordingModeOverrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder}
*/
export class ConfigConfigurationRecorder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_configuration_recorder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigConfigurationRecorder to import
  * @param importFromId The id of the existing ConfigConfigurationRecorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigConfigurationRecorder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_configuration_recorder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationRecorderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_configuration_recorder',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.104.0',
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
    this._name = config.name;
    this._recordingGroup.internalValue = config.recordingGroup;
    this._recordingMode.internalValue = config.recordingMode;
    this._roleArn = config.roleArn;
    this._startedOnCreate = config.startedOnCreate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recording_group - computed: true, optional: true, required: false
  private _recordingGroup = new ConfigConfigurationRecorderRecordingGroupOutputReference(this, "recording_group");
  public get recordingGroup() {
    return this._recordingGroup;
  }
  public putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup) {
    this._recordingGroup.internalValue = value;
  }
  public resetRecordingGroup() {
    this._recordingGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingGroupInput() {
    return this._recordingGroup.internalValue;
  }

  // recording_mode - computed: true, optional: true, required: false
  private _recordingMode = new ConfigConfigurationRecorderRecordingModeOutputReference(this, "recording_mode");
  public get recordingMode() {
    return this._recordingMode;
  }
  public putRecordingMode(value: ConfigConfigurationRecorderRecordingMode) {
    this._recordingMode.internalValue = value;
  }
  public resetRecordingMode() {
    this._recordingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingModeInput() {
    return this._recordingMode.internalValue;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // started_on_create - computed: true, optional: true, required: false
  private _startedOnCreate?: boolean | cdktn.IResolvable; 
  public get startedOnCreate() {
    return this.getBooleanAttribute('started_on_create');
  }
  public set startedOnCreate(value: boolean | cdktn.IResolvable) {
    this._startedOnCreate = value;
  }
  public resetStartedOnCreate() {
    this._startedOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedOnCreateInput() {
    return this._startedOnCreate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      recording_group: configConfigurationRecorderRecordingGroupToTerraform(this._recordingGroup.internalValue),
      recording_mode: configConfigurationRecorderRecordingModeToTerraform(this._recordingMode.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      started_on_create: cdktn.booleanToTerraform(this._startedOnCreate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_group: {
        value: configConfigurationRecorderRecordingGroupToHclTerraform(this._recordingGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigConfigurationRecorderRecordingGroup",
      },
      recording_mode: {
        value: configConfigurationRecorderRecordingModeToHclTerraform(this._recordingMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigConfigurationRecorderRecordingMode",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      started_on_create: {
        value: cdktn.booleanToHclTerraform(this._startedOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
