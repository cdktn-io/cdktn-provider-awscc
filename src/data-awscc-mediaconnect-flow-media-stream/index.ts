/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectFlowMediaStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream#id DataAwsccMediaconnectFlowMediaStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectFlowMediaStreamAttributesFmtp {
}

export function dataAwsccMediaconnectFlowMediaStreamAttributesFmtpToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamAttributesFmtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamAttributesFmtpToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamAttributesFmtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreamAttributesFmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreamAttributesFmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_order - computed: true, optional: false, required: false
  public get channelOrder() {
    return this.getStringAttribute('channel_order');
  }

  // colorimetry - computed: true, optional: false, required: false
  public get colorimetry() {
    return this.getStringAttribute('colorimetry');
  }

  // exact_framerate - computed: true, optional: false, required: false
  public get exactFramerate() {
    return this.getStringAttribute('exact_framerate');
  }

  // par - computed: true, optional: false, required: false
  public get par() {
    return this.getStringAttribute('par');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // scan_mode - computed: true, optional: false, required: false
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }

  // tcs - computed: true, optional: false, required: false
  public get tcs() {
    return this.getStringAttribute('tcs');
  }
}
export interface DataAwsccMediaconnectFlowMediaStreamAttributes {
}

export function dataAwsccMediaconnectFlowMediaStreamAttributesToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamAttributesToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreamAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreamAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fmtp - computed: true, optional: false, required: false
  private _fmtp = new DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference(this, "fmtp");
  public get fmtp() {
    return this._fmtp;
  }

  // lang - computed: true, optional: false, required: false
  public get lang() {
    return this.getStringAttribute('lang');
  }
}
export interface DataAwsccMediaconnectFlowMediaStreamTags {
}

export function dataAwsccMediaconnectFlowMediaStreamTagsToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamTagsToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreamTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreamTags | undefined) {
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

export class DataAwsccMediaconnectFlowMediaStreamTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowMediaStreamTagsOutputReference {
    return new DataAwsccMediaconnectFlowMediaStreamTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}
*/
export class DataAwsccMediaconnectFlowMediaStream extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_flow_media_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectFlowMediaStream to import
  * @param importFromId The id of the existing DataAwsccMediaconnectFlowMediaStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectFlowMediaStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_media_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowMediaStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowMediaStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_media_stream',
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

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // clock_rate - computed: true, optional: false, required: false
  public get clockRate() {
    return this.getNumberAttribute('clock_rate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // fmt - computed: true, optional: false, required: false
  public get fmt() {
    return this.getNumberAttribute('fmt');
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

  // media_stream_id - computed: true, optional: false, required: false
  public get mediaStreamId() {
    return this.getNumberAttribute('media_stream_id');
  }

  // media_stream_name - computed: true, optional: false, required: false
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }

  // media_stream_type - computed: true, optional: false, required: false
  public get mediaStreamType() {
    return this.getStringAttribute('media_stream_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectFlowMediaStreamTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // video_format - computed: true, optional: false, required: false
  public get videoFormat() {
    return this.getStringAttribute('video_format');
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
