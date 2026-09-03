/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChimeMediaPipelineKinesisVideoStreamPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the Kinesis Video Stream Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}
  */
  readonly poolName: string;
  /**
  * The configuration settings for the Kinesis video stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}
  */
  readonly streamConfiguration: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;
  /**
  * The tags associated with the Kinesis Video Stream Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}
  */
  readonly tags?: ChimeMediaPipelineKinesisVideoStreamPoolTags[] | cdktn.IResolvable;
}
export interface ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration {
  /**
  * The amount of time that data is retained, in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#data_retention_in_hours ChimeMediaPipelineKinesisVideoStreamPool#data_retention_in_hours}
  */
  readonly dataRetentionInHours?: number;
  /**
  * The AWS Region of the video stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#region ChimeMediaPipelineKinesisVideoStreamPool#region}
  */
  readonly region: string;
}

export function chimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationToTerraform(struct?: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_retention_in_hours: cdktn.numberToTerraform(struct!.dataRetentionInHours),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function chimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationToHclTerraform(struct?: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_retention_in_hours: {
      value: cdktn.numberToHclTerraform(struct!.dataRetentionInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRetentionInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRetentionInHours = this._dataRetentionInHours;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRetentionInHours = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRetentionInHours = value.dataRetentionInHours;
      this._region = value.region;
    }
  }

  // data_retention_in_hours - computed: true, optional: true, required: false
  private _dataRetentionInHours?: number; 
  public get dataRetentionInHours() {
    return this.getNumberAttribute('data_retention_in_hours');
  }
  public set dataRetentionInHours(value: number) {
    this._dataRetentionInHours = value;
  }
  public resetDataRetentionInHours() {
    this._dataRetentionInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInHoursInput() {
    return this._dataRetentionInHours;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ChimeMediaPipelineKinesisVideoStreamPoolTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}
  */
  readonly value?: string;
}

export function chimeMediaPipelineKinesisVideoStreamPoolTagsToTerraform(struct?: ChimeMediaPipelineKinesisVideoStreamPoolTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chimeMediaPipelineKinesisVideoStreamPoolTagsToHclTerraform(struct?: ChimeMediaPipelineKinesisVideoStreamPoolTags | cdktn.IResolvable): any {
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

export class ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChimeMediaPipelineKinesisVideoStreamPoolTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChimeMediaPipelineKinesisVideoStreamPoolTags | cdktn.IResolvable | undefined) {
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

export class ChimeMediaPipelineKinesisVideoStreamPoolTagsList extends cdktn.ComplexList {
  public internalValue? : ChimeMediaPipelineKinesisVideoStreamPoolTags[] | cdktn.IResolvable

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
  public get(index: number): ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference {
    return new ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}
*/
export class ChimeMediaPipelineKinesisVideoStreamPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_chime_media_pipeline_kinesis_video_stream_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeMediaPipelineKinesisVideoStreamPool to import
  * @param importFromId The id of the existing ChimeMediaPipelineKinesisVideoStreamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeMediaPipelineKinesisVideoStreamPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_media_pipeline_kinesis_video_stream_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeMediaPipelineKinesisVideoStreamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeMediaPipelineKinesisVideoStreamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chime_media_pipeline_kinesis_video_stream_pool',
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
    this._poolName = config.poolName;
    this._streamConfiguration.internalValue = config.streamConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // pool_status - computed: true, optional: false, required: false
  public get poolStatus() {
    return this.getStringAttribute('pool_status');
  }

  // stream_configuration - computed: false, optional: false, required: true
  private _streamConfiguration = new ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(this, "stream_configuration");
  public get streamConfiguration() {
    return this._streamConfiguration;
  }
  public putStreamConfiguration(value: ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration) {
    this._streamConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigurationInput() {
    return this._streamConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ChimeMediaPipelineKinesisVideoStreamPoolTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ChimeMediaPipelineKinesisVideoStreamPoolTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pool_name: cdktn.stringToTerraform(this._poolName),
      stream_configuration: chimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationToTerraform(this._streamConfiguration.internalValue),
      tags: cdktn.listMapper(chimeMediaPipelineKinesisVideoStreamPoolTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pool_name: {
        value: cdktn.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_configuration: {
        value: chimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationToHclTerraform(this._streamConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(chimeMediaPipelineKinesisVideoStreamPoolTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChimeMediaPipelineKinesisVideoStreamPoolTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
