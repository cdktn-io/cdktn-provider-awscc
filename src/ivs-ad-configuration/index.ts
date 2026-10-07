/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IvsAdConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#media_tailor_playback_configurations IvsAdConfiguration#media_tailor_playback_configurations}
  */
  readonly mediaTailorPlaybackConfigurations: IvsAdConfigurationMediaTailorPlaybackConfigurations[] | cdktn.IResolvable;
  /**
  * Ad configuration name. The value does not need to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#name IvsAdConfiguration#name}
  */
  readonly name?: string;
  /**
  * Configuration for the post-roll ad break to use for this ad configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#post_roll_configuration IvsAdConfiguration#post_roll_configuration}
  */
  readonly postRollConfiguration?: IvsAdConfigurationPostRollConfiguration;
  /**
  * Tags attached to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#tags IvsAdConfiguration#tags}
  */
  readonly tags?: IvsAdConfigurationTags[] | cdktn.IResolvable;
}
export interface IvsAdConfigurationMediaTailorPlaybackConfigurations {
  /**
  * ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#playback_configuration_arn IvsAdConfiguration#playback_configuration_arn}
  */
  readonly playbackConfigurationArn?: string;
}

export function ivsAdConfigurationMediaTailorPlaybackConfigurationsToTerraform(struct?: IvsAdConfigurationMediaTailorPlaybackConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    playback_configuration_arn: cdktn.stringToTerraform(struct!.playbackConfigurationArn),
  }
}


export function ivsAdConfigurationMediaTailorPlaybackConfigurationsToHclTerraform(struct?: IvsAdConfigurationMediaTailorPlaybackConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    playback_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.playbackConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IvsAdConfigurationMediaTailorPlaybackConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playbackConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbackConfigurationArn = this._playbackConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsAdConfigurationMediaTailorPlaybackConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._playbackConfigurationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._playbackConfigurationArn = value.playbackConfigurationArn;
    }
  }

  // playback_configuration_arn - computed: true, optional: true, required: false
  private _playbackConfigurationArn?: string; 
  public get playbackConfigurationArn() {
    return this.getStringAttribute('playback_configuration_arn');
  }
  public set playbackConfigurationArn(value: string) {
    this._playbackConfigurationArn = value;
  }
  public resetPlaybackConfigurationArn() {
    this._playbackConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackConfigurationArnInput() {
    return this._playbackConfigurationArn;
  }
}

export class IvsAdConfigurationMediaTailorPlaybackConfigurationsList extends cdktn.ComplexList {
  public internalValue? : IvsAdConfigurationMediaTailorPlaybackConfigurations[] | cdktn.IResolvable

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
  public get(index: number): IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference {
    return new IvsAdConfigurationMediaTailorPlaybackConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IvsAdConfigurationPostRollConfiguration {
  /**
  * Duration of the post-roll ad break, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#duration_seconds IvsAdConfiguration#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Whether the post-roll ad configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#enabled IvsAdConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function ivsAdConfigurationPostRollConfigurationToTerraform(struct?: IvsAdConfigurationPostRollConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function ivsAdConfigurationPostRollConfigurationToHclTerraform(struct?: IvsAdConfigurationPostRollConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsAdConfigurationPostRollConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IvsAdConfigurationPostRollConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsAdConfigurationPostRollConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationSeconds = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationSeconds = value.durationSeconds;
      this._enabled = value.enabled;
    }
  }

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IvsAdConfigurationTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#key IvsAdConfiguration#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#value IvsAdConfiguration#value}
  */
  readonly value?: string;
}

export function ivsAdConfigurationTagsToTerraform(struct?: IvsAdConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ivsAdConfigurationTagsToHclTerraform(struct?: IvsAdConfigurationTags | cdktn.IResolvable): any {
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

export class IvsAdConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IvsAdConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IvsAdConfigurationTags | cdktn.IResolvable | undefined) {
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

export class IvsAdConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : IvsAdConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): IvsAdConfigurationTagsOutputReference {
    return new IvsAdConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration awscc_ivs_ad_configuration}
*/
export class IvsAdConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ivs_ad_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IvsAdConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IvsAdConfiguration to import
  * @param importFromId The id of the existing IvsAdConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IvsAdConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_ad_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration awscc_ivs_ad_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsAdConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IvsAdConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_ad_configuration',
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
    this._mediaTailorPlaybackConfigurations.internalValue = config.mediaTailorPlaybackConfigurations;
    this._name = config.name;
    this._postRollConfiguration.internalValue = config.postRollConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // media_tailor_playback_configurations - computed: false, optional: false, required: true
  private _mediaTailorPlaybackConfigurations = new IvsAdConfigurationMediaTailorPlaybackConfigurationsList(this, "media_tailor_playback_configurations", false);
  public get mediaTailorPlaybackConfigurations() {
    return this._mediaTailorPlaybackConfigurations;
  }
  public putMediaTailorPlaybackConfigurations(value: IvsAdConfigurationMediaTailorPlaybackConfigurations[] | cdktn.IResolvable) {
    this._mediaTailorPlaybackConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTailorPlaybackConfigurationsInput() {
    return this._mediaTailorPlaybackConfigurations.internalValue;
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

  // post_roll_configuration - computed: true, optional: true, required: false
  private _postRollConfiguration = new IvsAdConfigurationPostRollConfigurationOutputReference(this, "post_roll_configuration");
  public get postRollConfiguration() {
    return this._postRollConfiguration;
  }
  public putPostRollConfiguration(value: IvsAdConfigurationPostRollConfiguration) {
    this._postRollConfiguration.internalValue = value;
  }
  public resetPostRollConfiguration() {
    this._postRollConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRollConfigurationInput() {
    return this._postRollConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IvsAdConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IvsAdConfigurationTags[] | cdktn.IResolvable) {
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
      media_tailor_playback_configurations: cdktn.listMapper(ivsAdConfigurationMediaTailorPlaybackConfigurationsToTerraform, false)(this._mediaTailorPlaybackConfigurations.internalValue),
      name: cdktn.stringToTerraform(this._name),
      post_roll_configuration: ivsAdConfigurationPostRollConfigurationToTerraform(this._postRollConfiguration.internalValue),
      tags: cdktn.listMapper(ivsAdConfigurationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      media_tailor_playback_configurations: {
        value: cdktn.listMapperHcl(ivsAdConfigurationMediaTailorPlaybackConfigurationsToHclTerraform, false)(this._mediaTailorPlaybackConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IvsAdConfigurationMediaTailorPlaybackConfigurationsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_roll_configuration: {
        value: ivsAdConfigurationPostRollConfigurationToHclTerraform(this._postRollConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IvsAdConfigurationPostRollConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(ivsAdConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IvsAdConfigurationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
