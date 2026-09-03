/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The encoding configuration to apply to the NDI source content when transcoding it to a transport stream (TS) for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#encoding_config MediaconnectFlow#encoding_config}
  */
  readonly encodingConfig?: MediaconnectFlowEncodingConfig;
  /**
  * Determines the processing capacity and feature set of the flow. Set this optional parameter to LARGE if you want to enable NDI sources or outputs on the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#flow_size MediaconnectFlow#flow_size}
  */
  readonly flowSize?: string;
  /**
  * The maintenance settings you want to use for the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}
  */
  readonly maintenance?: MediaconnectFlowMaintenance;
  /**
  * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}
  */
  readonly mediaStreams?: MediaconnectFlowMediaStreams[] | cdktn.IResolvable;
  /**
  * The name of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}
  */
  readonly name: string;
  /**
  * Specifies the configuration settings for NDI sources and outputs. Required when the flow includes NDI sources or outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#ndi_config MediaconnectFlow#ndi_config}
  */
  readonly ndiConfig?: MediaconnectFlowNdiConfig;
  /**
  * The source of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}
  */
  readonly source: MediaconnectFlowSource;
  /**
  * The source failover config of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}
  */
  readonly sourceFailoverConfig?: MediaconnectFlowSourceFailoverConfig;
  /**
  * The source monitoring config of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}
  */
  readonly sourceMonitoringConfig?: MediaconnectFlowSourceMonitoringConfig;
  /**
  * Key-value pairs that can be used to tag this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#tags MediaconnectFlow#tags}
  */
  readonly tags?: MediaconnectFlowTags[] | cdktn.IResolvable;
  /**
  * The VPC interfaces that you added to this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}
  */
  readonly vpcInterfaces?: MediaconnectFlowVpcInterfaces[] | cdktn.IResolvable;
}
export interface MediaconnectFlowEncodingConfig {
  /**
  * The encoding profile to use when transcoding the NDI source to a Transport Stream. You can change this value while a flow is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#encoding_profile MediaconnectFlow#encoding_profile}
  */
  readonly encodingProfile?: string;
  /**
  * The maximum video bitrate to use when transcoding the NDI source to a Transport Stream. This parameter enables you to override the default video bitrate within the encoding profile's supported range. The supported range is 10,000,000 - 50,000,000 bits per second (bps). If you do not specify a value, MediaConnect uses the default value of 20,000,000 bps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#video_max_bitrate MediaconnectFlow#video_max_bitrate}
  */
  readonly videoMaxBitrate?: number;
}

export function mediaconnectFlowEncodingConfigToTerraform(struct?: MediaconnectFlowEncodingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding_profile: cdktn.stringToTerraform(struct!.encodingProfile),
    video_max_bitrate: cdktn.numberToTerraform(struct!.videoMaxBitrate),
  }
}


export function mediaconnectFlowEncodingConfigToHclTerraform(struct?: MediaconnectFlowEncodingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding_profile: {
      value: cdktn.stringToHclTerraform(struct!.encodingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_max_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.videoMaxBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowEncodingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowEncodingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingProfile = this._encodingProfile;
    }
    if (this._videoMaxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoMaxBitrate = this._videoMaxBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowEncodingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encodingProfile = undefined;
      this._videoMaxBitrate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encodingProfile = value.encodingProfile;
      this._videoMaxBitrate = value.videoMaxBitrate;
    }
  }

  // encoding_profile - computed: true, optional: true, required: false
  private _encodingProfile?: string; 
  public get encodingProfile() {
    return this.getStringAttribute('encoding_profile');
  }
  public set encodingProfile(value: string) {
    this._encodingProfile = value;
  }
  public resetEncodingProfile() {
    this._encodingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingProfileInput() {
    return this._encodingProfile;
  }

  // video_max_bitrate - computed: true, optional: true, required: false
  private _videoMaxBitrate?: number; 
  public get videoMaxBitrate() {
    return this.getNumberAttribute('video_max_bitrate');
  }
  public set videoMaxBitrate(value: number) {
    this._videoMaxBitrate = value;
  }
  public resetVideoMaxBitrate() {
    this._videoMaxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMaxBitrateInput() {
    return this._videoMaxBitrate;
  }
}
export interface MediaconnectFlowMaintenance {
  /**
  * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}
  */
  readonly maintenanceDay?: string;
  /**
  * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}
  */
  readonly maintenanceStartHour?: string;
}

export function mediaconnectFlowMaintenanceToTerraform(struct?: MediaconnectFlowMaintenance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_day: cdktn.stringToTerraform(struct!.maintenanceDay),
    maintenance_start_hour: cdktn.stringToTerraform(struct!.maintenanceStartHour),
  }
}


export function mediaconnectFlowMaintenanceToHclTerraform(struct?: MediaconnectFlowMaintenance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maintenance_day: {
      value: cdktn.stringToHclTerraform(struct!.maintenanceDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_start_hour: {
      value: cdktn.stringToHclTerraform(struct!.maintenanceStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowMaintenanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowMaintenance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceDay = this._maintenanceDay;
    }
    if (this._maintenanceStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceStartHour = this._maintenanceStartHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowMaintenance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceDay = undefined;
      this._maintenanceStartHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceDay = value.maintenanceDay;
      this._maintenanceStartHour = value.maintenanceStartHour;
    }
  }

  // maintenance_day - computed: true, optional: true, required: false
  private _maintenanceDay?: string; 
  public get maintenanceDay() {
    return this.getStringAttribute('maintenance_day');
  }
  public set maintenanceDay(value: string) {
    this._maintenanceDay = value;
  }
  public resetMaintenanceDay() {
    this._maintenanceDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDayInput() {
    return this._maintenanceDay;
  }

  // maintenance_start_hour - computed: true, optional: true, required: false
  private _maintenanceStartHour?: string; 
  public get maintenanceStartHour() {
    return this.getStringAttribute('maintenance_start_hour');
  }
  public set maintenanceStartHour(value: string) {
    this._maintenanceStartHour = value;
  }
  public resetMaintenanceStartHour() {
    this._maintenanceStartHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStartHourInput() {
    return this._maintenanceStartHour;
  }
}
export interface MediaconnectFlowMediaStreamsAttributesFmtp {
  /**
  * The format of the audio channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}
  */
  readonly channelOrder?: string;
  /**
  * The format used for the representation of color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}
  */
  readonly colorimetry?: string;
  /**
  * The frame rate for the video stream, in frames/second. For example: 60000/1001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}
  */
  readonly exactFramerate?: string;
  /**
  * The pixel aspect ratio (PAR) of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}
  */
  readonly par?: string;
  /**
  * The encoding range of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}
  */
  readonly range?: string;
  /**
  * The type of compression that was used to smooth the video's appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}
  */
  readonly scanMode?: string;
  /**
  * The transfer characteristic system (TCS) that is used in the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}
  */
  readonly tcs?: string;
}

export function mediaconnectFlowMediaStreamsAttributesFmtpToTerraform(struct?: MediaconnectFlowMediaStreamsAttributesFmtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_order: cdktn.stringToTerraform(struct!.channelOrder),
    colorimetry: cdktn.stringToTerraform(struct!.colorimetry),
    exact_framerate: cdktn.stringToTerraform(struct!.exactFramerate),
    par: cdktn.stringToTerraform(struct!.par),
    range: cdktn.stringToTerraform(struct!.range),
    scan_mode: cdktn.stringToTerraform(struct!.scanMode),
    tcs: cdktn.stringToTerraform(struct!.tcs),
  }
}


export function mediaconnectFlowMediaStreamsAttributesFmtpToHclTerraform(struct?: MediaconnectFlowMediaStreamsAttributesFmtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_order: {
      value: cdktn.stringToHclTerraform(struct!.channelOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    colorimetry: {
      value: cdktn.stringToHclTerraform(struct!.colorimetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_framerate: {
      value: cdktn.stringToHclTerraform(struct!.exactFramerate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    par: {
      value: cdktn.stringToHclTerraform(struct!.par),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktn.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_mode: {
      value: cdktn.stringToHclTerraform(struct!.scanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcs: {
      value: cdktn.stringToHclTerraform(struct!.tcs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowMediaStreamsAttributesFmtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowMediaStreamsAttributesFmtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelOrder = this._channelOrder;
    }
    if (this._colorimetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorimetry = this._colorimetry;
    }
    if (this._exactFramerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactFramerate = this._exactFramerate;
    }
    if (this._par !== undefined) {
      hasAnyValues = true;
      internalValueResult.par = this._par;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._scanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanMode = this._scanMode;
    }
    if (this._tcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcs = this._tcs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowMediaStreamsAttributesFmtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelOrder = undefined;
      this._colorimetry = undefined;
      this._exactFramerate = undefined;
      this._par = undefined;
      this._range = undefined;
      this._scanMode = undefined;
      this._tcs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelOrder = value.channelOrder;
      this._colorimetry = value.colorimetry;
      this._exactFramerate = value.exactFramerate;
      this._par = value.par;
      this._range = value.range;
      this._scanMode = value.scanMode;
      this._tcs = value.tcs;
    }
  }

  // channel_order - computed: true, optional: true, required: false
  private _channelOrder?: string; 
  public get channelOrder() {
    return this.getStringAttribute('channel_order');
  }
  public set channelOrder(value: string) {
    this._channelOrder = value;
  }
  public resetChannelOrder() {
    this._channelOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelOrderInput() {
    return this._channelOrder;
  }

  // colorimetry - computed: true, optional: true, required: false
  private _colorimetry?: string; 
  public get colorimetry() {
    return this.getStringAttribute('colorimetry');
  }
  public set colorimetry(value: string) {
    this._colorimetry = value;
  }
  public resetColorimetry() {
    this._colorimetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorimetryInput() {
    return this._colorimetry;
  }

  // exact_framerate - computed: true, optional: true, required: false
  private _exactFramerate?: string; 
  public get exactFramerate() {
    return this.getStringAttribute('exact_framerate');
  }
  public set exactFramerate(value: string) {
    this._exactFramerate = value;
  }
  public resetExactFramerate() {
    this._exactFramerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactFramerateInput() {
    return this._exactFramerate;
  }

  // par - computed: true, optional: true, required: false
  private _par?: string; 
  public get par() {
    return this.getStringAttribute('par');
  }
  public set par(value: string) {
    this._par = value;
  }
  public resetPar() {
    this._par = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parInput() {
    return this._par;
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // scan_mode - computed: true, optional: true, required: false
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  public resetScanMode() {
    this._scanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }

  // tcs - computed: true, optional: true, required: false
  private _tcs?: string; 
  public get tcs() {
    return this.getStringAttribute('tcs');
  }
  public set tcs(value: string) {
    this._tcs = value;
  }
  public resetTcs() {
    this._tcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcsInput() {
    return this._tcs;
  }
}
export interface MediaconnectFlowMediaStreamsAttributes {
  /**
  * A set of parameters that define the media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}
  */
  readonly fmtp?: MediaconnectFlowMediaStreamsAttributesFmtp;
  /**
  * The audio language, in a format that is recognized by the receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}
  */
  readonly lang?: string;
}

export function mediaconnectFlowMediaStreamsAttributesToTerraform(struct?: MediaconnectFlowMediaStreamsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fmtp: mediaconnectFlowMediaStreamsAttributesFmtpToTerraform(struct!.fmtp),
    lang: cdktn.stringToTerraform(struct!.lang),
  }
}


export function mediaconnectFlowMediaStreamsAttributesToHclTerraform(struct?: MediaconnectFlowMediaStreamsAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fmtp: {
      value: mediaconnectFlowMediaStreamsAttributesFmtpToHclTerraform(struct!.fmtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowMediaStreamsAttributesFmtp",
    },
    lang: {
      value: cdktn.stringToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowMediaStreamsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowMediaStreamsAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fmtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtp = this._fmtp?.internalValue;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowMediaStreamsAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fmtp.internalValue = undefined;
      this._lang = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fmtp.internalValue = value.fmtp;
      this._lang = value.lang;
    }
  }

  // fmtp - computed: true, optional: true, required: false
  private _fmtp = new MediaconnectFlowMediaStreamsAttributesFmtpOutputReference(this, "fmtp");
  public get fmtp() {
    return this._fmtp;
  }
  public putFmtp(value: MediaconnectFlowMediaStreamsAttributesFmtp) {
    this._fmtp.internalValue = value;
  }
  public resetFmtp() {
    this._fmtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtpInput() {
    return this._fmtp.internalValue;
  }

  // lang - computed: true, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }
}
export interface MediaconnectFlowMediaStreamsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#key MediaconnectFlow#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#value MediaconnectFlow#value}
  */
  readonly value?: string;
}

export function mediaconnectFlowMediaStreamsTagsToTerraform(struct?: MediaconnectFlowMediaStreamsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectFlowMediaStreamsTagsToHclTerraform(struct?: MediaconnectFlowMediaStreamsTags | cdktn.IResolvable): any {
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

export class MediaconnectFlowMediaStreamsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowMediaStreamsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectFlowMediaStreamsTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectFlowMediaStreamsTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowMediaStreamsTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowMediaStreamsTagsOutputReference {
    return new MediaconnectFlowMediaStreamsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowMediaStreams {
  /**
  * Attributes that are related to the media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#attributes MediaconnectFlow#attributes}
  */
  readonly attributes?: MediaconnectFlowMediaStreamsAttributes;
  /**
  * The sample rate for the stream. This value in measured in kHz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#clock_rate MediaconnectFlow#clock_rate}
  */
  readonly clockRate?: number;
  /**
  * A description that can help you quickly identify what your media stream is used for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}
  */
  readonly description?: string;
  /**
  * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#fmt MediaconnectFlow#fmt}
  */
  readonly fmt?: number;
  /**
  * A unique identifier for the media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_stream_id MediaconnectFlow#media_stream_id}
  */
  readonly mediaStreamId?: number;
  /**
  * A name that helps you distinguish one media stream from another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}
  */
  readonly mediaStreamName?: string;
  /**
  * The type of media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_stream_type MediaconnectFlow#media_stream_type}
  */
  readonly mediaStreamType?: string;
  /**
  * Key-value pairs that can be used to tag this media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#tags MediaconnectFlow#tags}
  */
  readonly tags?: MediaconnectFlowMediaStreamsTags[] | cdktn.IResolvable;
  /**
  * The resolution of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#video_format MediaconnectFlow#video_format}
  */
  readonly videoFormat?: string;
}

export function mediaconnectFlowMediaStreamsToTerraform(struct?: MediaconnectFlowMediaStreams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: mediaconnectFlowMediaStreamsAttributesToTerraform(struct!.attributes),
    clock_rate: cdktn.numberToTerraform(struct!.clockRate),
    description: cdktn.stringToTerraform(struct!.description),
    fmt: cdktn.numberToTerraform(struct!.fmt),
    media_stream_id: cdktn.numberToTerraform(struct!.mediaStreamId),
    media_stream_name: cdktn.stringToTerraform(struct!.mediaStreamName),
    media_stream_type: cdktn.stringToTerraform(struct!.mediaStreamType),
    tags: cdktn.listMapper(mediaconnectFlowMediaStreamsTagsToTerraform, false)(struct!.tags),
    video_format: cdktn.stringToTerraform(struct!.videoFormat),
  }
}


export function mediaconnectFlowMediaStreamsToHclTerraform(struct?: MediaconnectFlowMediaStreams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: mediaconnectFlowMediaStreamsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowMediaStreamsAttributes",
    },
    clock_rate: {
      value: cdktn.numberToHclTerraform(struct!.clockRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmt: {
      value: cdktn.numberToHclTerraform(struct!.fmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_stream_id: {
      value: cdktn.numberToHclTerraform(struct!.mediaStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.mediaStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_stream_type: {
      value: cdktn.stringToHclTerraform(struct!.mediaStreamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(mediaconnectFlowMediaStreamsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowMediaStreamsTagsList",
    },
    video_format: {
      value: cdktn.stringToHclTerraform(struct!.videoFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowMediaStreamsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowMediaStreams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._clockRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockRate = this._clockRate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmt = this._fmt;
    }
    if (this._mediaStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStreamId = this._mediaStreamId;
    }
    if (this._mediaStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStreamName = this._mediaStreamName;
    }
    if (this._mediaStreamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStreamType = this._mediaStreamType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._videoFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoFormat = this._videoFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowMediaStreams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._clockRate = undefined;
      this._description = undefined;
      this._fmt = undefined;
      this._mediaStreamId = undefined;
      this._mediaStreamName = undefined;
      this._mediaStreamType = undefined;
      this._tags.internalValue = undefined;
      this._videoFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._clockRate = value.clockRate;
      this._description = value.description;
      this._fmt = value.fmt;
      this._mediaStreamId = value.mediaStreamId;
      this._mediaStreamName = value.mediaStreamName;
      this._mediaStreamType = value.mediaStreamType;
      this._tags.internalValue = value.tags;
      this._videoFormat = value.videoFormat;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new MediaconnectFlowMediaStreamsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: MediaconnectFlowMediaStreamsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // clock_rate - computed: true, optional: true, required: false
  private _clockRate?: number; 
  public get clockRate() {
    return this.getNumberAttribute('clock_rate');
  }
  public set clockRate(value: number) {
    this._clockRate = value;
  }
  public resetClockRate() {
    this._clockRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockRateInput() {
    return this._clockRate;
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

  // fmt - computed: true, optional: true, required: false
  private _fmt?: number; 
  public get fmt() {
    return this.getNumberAttribute('fmt');
  }
  public set fmt(value: number) {
    this._fmt = value;
  }
  public resetFmt() {
    this._fmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtInput() {
    return this._fmt;
  }

  // media_stream_id - computed: true, optional: true, required: false
  private _mediaStreamId?: number; 
  public get mediaStreamId() {
    return this.getNumberAttribute('media_stream_id');
  }
  public set mediaStreamId(value: number) {
    this._mediaStreamId = value;
  }
  public resetMediaStreamId() {
    this._mediaStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamIdInput() {
    return this._mediaStreamId;
  }

  // media_stream_name - computed: true, optional: true, required: false
  private _mediaStreamName?: string; 
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }
  public set mediaStreamName(value: string) {
    this._mediaStreamName = value;
  }
  public resetMediaStreamName() {
    this._mediaStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamNameInput() {
    return this._mediaStreamName;
  }

  // media_stream_type - computed: true, optional: true, required: false
  private _mediaStreamType?: string; 
  public get mediaStreamType() {
    return this.getStringAttribute('media_stream_type');
  }
  public set mediaStreamType(value: string) {
    this._mediaStreamType = value;
  }
  public resetMediaStreamType() {
    this._mediaStreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamTypeInput() {
    return this._mediaStreamType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectFlowMediaStreamsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectFlowMediaStreamsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // video_format - computed: true, optional: true, required: false
  private _videoFormat?: string; 
  public get videoFormat() {
    return this.getStringAttribute('video_format');
  }
  public set videoFormat(value: string) {
    this._videoFormat = value;
  }
  public resetVideoFormat() {
    this._videoFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoFormatInput() {
    return this._videoFormat;
  }
}

export class MediaconnectFlowMediaStreamsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowMediaStreams[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowMediaStreamsOutputReference {
    return new MediaconnectFlowMediaStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowNdiConfigNdiDiscoveryServers {
  /**
  * The unique network address of the NDI discovery server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#discovery_server_address MediaconnectFlow#discovery_server_address}
  */
  readonly discoveryServerAddress?: string;
  /**
  * The port for the NDI discovery server. Defaults to 5959 if a custom port isn't specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#discovery_server_port MediaconnectFlow#discovery_server_port}
  */
  readonly discoveryServerPort?: number;
  /**
  * The identifier for the Virtual Private Cloud (VPC) network interface used by the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#vpc_interface_adapter MediaconnectFlow#vpc_interface_adapter}
  */
  readonly vpcInterfaceAdapter?: string;
}

export function mediaconnectFlowNdiConfigNdiDiscoveryServersToTerraform(struct?: MediaconnectFlowNdiConfigNdiDiscoveryServers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    discovery_server_address: cdktn.stringToTerraform(struct!.discoveryServerAddress),
    discovery_server_port: cdktn.numberToTerraform(struct!.discoveryServerPort),
    vpc_interface_adapter: cdktn.stringToTerraform(struct!.vpcInterfaceAdapter),
  }
}


export function mediaconnectFlowNdiConfigNdiDiscoveryServersToHclTerraform(struct?: MediaconnectFlowNdiConfigNdiDiscoveryServers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    discovery_server_address: {
      value: cdktn.stringToHclTerraform(struct!.discoveryServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_server_port: {
      value: cdktn.numberToHclTerraform(struct!.discoveryServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_interface_adapter: {
      value: cdktn.stringToHclTerraform(struct!.vpcInterfaceAdapter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowNdiConfigNdiDiscoveryServersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowNdiConfigNdiDiscoveryServers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryServerAddress = this._discoveryServerAddress;
    }
    if (this._discoveryServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryServerPort = this._discoveryServerPort;
    }
    if (this._vpcInterfaceAdapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterfaceAdapter = this._vpcInterfaceAdapter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowNdiConfigNdiDiscoveryServers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryServerAddress = undefined;
      this._discoveryServerPort = undefined;
      this._vpcInterfaceAdapter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryServerAddress = value.discoveryServerAddress;
      this._discoveryServerPort = value.discoveryServerPort;
      this._vpcInterfaceAdapter = value.vpcInterfaceAdapter;
    }
  }

  // discovery_server_address - computed: true, optional: true, required: false
  private _discoveryServerAddress?: string; 
  public get discoveryServerAddress() {
    return this.getStringAttribute('discovery_server_address');
  }
  public set discoveryServerAddress(value: string) {
    this._discoveryServerAddress = value;
  }
  public resetDiscoveryServerAddress() {
    this._discoveryServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryServerAddressInput() {
    return this._discoveryServerAddress;
  }

  // discovery_server_port - computed: true, optional: true, required: false
  private _discoveryServerPort?: number; 
  public get discoveryServerPort() {
    return this.getNumberAttribute('discovery_server_port');
  }
  public set discoveryServerPort(value: number) {
    this._discoveryServerPort = value;
  }
  public resetDiscoveryServerPort() {
    this._discoveryServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryServerPortInput() {
    return this._discoveryServerPort;
  }

  // vpc_interface_adapter - computed: true, optional: true, required: false
  private _vpcInterfaceAdapter?: string; 
  public get vpcInterfaceAdapter() {
    return this.getStringAttribute('vpc_interface_adapter');
  }
  public set vpcInterfaceAdapter(value: string) {
    this._vpcInterfaceAdapter = value;
  }
  public resetVpcInterfaceAdapter() {
    this._vpcInterfaceAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceAdapterInput() {
    return this._vpcInterfaceAdapter;
  }
}

export class MediaconnectFlowNdiConfigNdiDiscoveryServersList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowNdiConfigNdiDiscoveryServers[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowNdiConfigNdiDiscoveryServersOutputReference {
    return new MediaconnectFlowNdiConfigNdiDiscoveryServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowNdiConfig {
  /**
  * A prefix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect generates a unique 12-character ID as the prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#machine_name MediaconnectFlow#machine_name}
  */
  readonly machineName?: string;
  /**
  * A list of up to three NDI discovery server configurations. While not required by the API, this configuration is necessary for NDI functionality to work properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#ndi_discovery_servers MediaconnectFlow#ndi_discovery_servers}
  */
  readonly ndiDiscoveryServers?: MediaconnectFlowNdiConfigNdiDiscoveryServers[] | cdktn.IResolvable;
  /**
  * A setting that controls whether NDI sources or outputs can be used in the flow. The default value is DISABLED. This value must be set as ENABLED for your flow to support NDI sources or outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#ndi_state MediaconnectFlow#ndi_state}
  */
  readonly ndiState?: string;
}

export function mediaconnectFlowNdiConfigToTerraform(struct?: MediaconnectFlowNdiConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    machine_name: cdktn.stringToTerraform(struct!.machineName),
    ndi_discovery_servers: cdktn.listMapper(mediaconnectFlowNdiConfigNdiDiscoveryServersToTerraform, false)(struct!.ndiDiscoveryServers),
    ndi_state: cdktn.stringToTerraform(struct!.ndiState),
  }
}


export function mediaconnectFlowNdiConfigToHclTerraform(struct?: MediaconnectFlowNdiConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    machine_name: {
      value: cdktn.stringToHclTerraform(struct!.machineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ndi_discovery_servers: {
      value: cdktn.listMapperHcl(mediaconnectFlowNdiConfigNdiDiscoveryServersToHclTerraform, false)(struct!.ndiDiscoveryServers),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowNdiConfigNdiDiscoveryServersList",
    },
    ndi_state: {
      value: cdktn.stringToHclTerraform(struct!.ndiState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowNdiConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowNdiConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineName = this._machineName;
    }
    if (this._ndiDiscoveryServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndiDiscoveryServers = this._ndiDiscoveryServers?.internalValue;
    }
    if (this._ndiState !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndiState = this._ndiState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowNdiConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineName = undefined;
      this._ndiDiscoveryServers.internalValue = undefined;
      this._ndiState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineName = value.machineName;
      this._ndiDiscoveryServers.internalValue = value.ndiDiscoveryServers;
      this._ndiState = value.ndiState;
    }
  }

  // machine_name - computed: true, optional: true, required: false
  private _machineName?: string; 
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }
  public set machineName(value: string) {
    this._machineName = value;
  }
  public resetMachineName() {
    this._machineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNameInput() {
    return this._machineName;
  }

  // ndi_discovery_servers - computed: true, optional: true, required: false
  private _ndiDiscoveryServers = new MediaconnectFlowNdiConfigNdiDiscoveryServersList(this, "ndi_discovery_servers", false);
  public get ndiDiscoveryServers() {
    return this._ndiDiscoveryServers;
  }
  public putNdiDiscoveryServers(value: MediaconnectFlowNdiConfigNdiDiscoveryServers[] | cdktn.IResolvable) {
    this._ndiDiscoveryServers.internalValue = value;
  }
  public resetNdiDiscoveryServers() {
    this._ndiDiscoveryServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiDiscoveryServersInput() {
    return this._ndiDiscoveryServers.internalValue;
  }

  // ndi_state - computed: true, optional: true, required: false
  private _ndiState?: string; 
  public get ndiState() {
    return this.getStringAttribute('ndi_state');
  }
  public set ndiState(value: string) {
    this._ndiState = value;
  }
  public resetNdiState() {
    this._ndiState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiStateInput() {
    return this._ndiState;
  }
}
export interface MediaconnectFlowSourceDecryption {
  /**
  * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}
  */
  readonly algorithm?: string;
  /**
  * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}
  */
  readonly constantInitializationVector?: string;
  /**
  * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}
  */
  readonly deviceId?: string;
  /**
  * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}
  */
  readonly keyType?: string;
  /**
  * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}
  */
  readonly region?: string;
  /**
  * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}
  */
  readonly roleArn?: string;
  /**
  *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}
  */
  readonly url?: string;
}

export function mediaconnectFlowSourceDecryptionToTerraform(struct?: MediaconnectFlowSourceDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    constant_initialization_vector: cdktn.stringToTerraform(struct!.constantInitializationVector),
    device_id: cdktn.stringToTerraform(struct!.deviceId),
    key_type: cdktn.stringToTerraform(struct!.keyType),
    region: cdktn.stringToTerraform(struct!.region),
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function mediaconnectFlowSourceDecryptionToHclTerraform(struct?: MediaconnectFlowSourceDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant_initialization_vector: {
      value: cdktn.stringToHclTerraform(struct!.constantInitializationVector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_id: {
      value: cdktn.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceDecryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._constantInitializationVector !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantInitializationVector = this._constantInitializationVector;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceDecryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._constantInitializationVector = undefined;
      this._deviceId = undefined;
      this._keyType = undefined;
      this._region = undefined;
      this._resourceId = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._constantInitializationVector = value.constantInitializationVector;
      this._deviceId = value.deviceId;
      this._keyType = value.keyType;
      this._region = value.region;
      this._resourceId = value.resourceId;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
      this._url = value.url;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // constant_initialization_vector - computed: true, optional: true, required: false
  private _constantInitializationVector?: string; 
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }
  public set constantInitializationVector(value: string) {
    this._constantInitializationVector = value;
  }
  public resetConstantInitializationVector() {
    this._constantInitializationVector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInitializationVectorInput() {
    return this._constantInitializationVector;
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment {
  /**
  * The name of the VPC interface to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
}

export function mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToTerraform(struct?: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
  }
}


export function mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToHclTerraform(struct?: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_interface_name: {
      value: cdktn.stringToHclTerraform(struct!.vpcInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterfaceName = this._vpcInterfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcInterfaceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcInterfaceName = value.vpcInterfaceName;
    }
  }

  // vpc_interface_name - computed: true, optional: true, required: false
  private _vpcInterfaceName?: string; 
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
  public set vpcInterfaceName(value: string) {
    this._vpcInterfaceName = value;
  }
  public resetVpcInterfaceName() {
    this._vpcInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceNameInput() {
    return this._vpcInterfaceName;
  }
}
export interface MediaconnectFlowSourceGatewayBridgeSource {
  /**
  * The ARN of the bridge feeding this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}
  */
  readonly bridgeArn?: string;
  /**
  * The name of the VPC interface attachment to use for this bridge source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}
  */
  readonly vpcInterfaceAttachment?: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment;
}

export function mediaconnectFlowSourceGatewayBridgeSourceToTerraform(struct?: MediaconnectFlowSourceGatewayBridgeSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bridge_arn: cdktn.stringToTerraform(struct!.bridgeArn),
    vpc_interface_attachment: mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToTerraform(struct!.vpcInterfaceAttachment),
  }
}


export function mediaconnectFlowSourceGatewayBridgeSourceToHclTerraform(struct?: MediaconnectFlowSourceGatewayBridgeSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bridge_arn: {
      value: cdktn.stringToHclTerraform(struct!.bridgeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_interface_attachment: {
      value: mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToHclTerraform(struct!.vpcInterfaceAttachment),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceGatewayBridgeSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceGatewayBridgeSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridgeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeArn = this._bridgeArn;
    }
    if (this._vpcInterfaceAttachment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterfaceAttachment = this._vpcInterfaceAttachment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceGatewayBridgeSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridgeArn = undefined;
      this._vpcInterfaceAttachment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridgeArn = value.bridgeArn;
      this._vpcInterfaceAttachment.internalValue = value.vpcInterfaceAttachment;
    }
  }

  // bridge_arn - computed: true, optional: true, required: false
  private _bridgeArn?: string; 
  public get bridgeArn() {
    return this.getStringAttribute('bridge_arn');
  }
  public set bridgeArn(value: string) {
    this._bridgeArn = value;
  }
  public resetBridgeArn() {
    this._bridgeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeArnInput() {
    return this._bridgeArn;
  }

  // vpc_interface_attachment - computed: true, optional: true, required: false
  private _vpcInterfaceAttachment = new MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(this, "vpc_interface_attachment");
  public get vpcInterfaceAttachment() {
    return this._vpcInterfaceAttachment;
  }
  public putVpcInterfaceAttachment(value: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment) {
    this._vpcInterfaceAttachment.internalValue = value;
  }
  public resetVpcInterfaceAttachment() {
    this._vpcInterfaceAttachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceAttachmentInput() {
    return this._vpcInterfaceAttachment.internalValue;
  }
}
export interface MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface {
  /**
  * The name of the VPC interface that you want to use for the media stream associated with the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}
  */
  readonly name?: string;
}

export function mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToHclTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations {
  /**
  * The port that the flow listens on for an incoming media stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#input_port MediaconnectFlow#input_port}
  */
  readonly inputPort?: number;
  /**
  * The VPC interface where the media stream comes in from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#interface MediaconnectFlow#interface}
  */
  readonly interface?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface;
}

export function mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_port: cdktn.numberToTerraform(struct!.inputPort),
    interface: mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToTerraform(struct!.interface),
  }
}


export function mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToHclTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_port: {
      value: cdktn.numberToHclTerraform(struct!.inputPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPort = this._inputPort;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputPort = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputPort = value.inputPort;
      this._interface.internalValue = value.interface;
    }
  }

  // input_port - computed: true, optional: true, required: false
  private _inputPort?: number; 
  public get inputPort() {
    return this.getNumberAttribute('input_port');
  }
  public set inputPort(value: number) {
    this._inputPort = value;
  }
  public resetInputPort() {
    this._inputPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortInput() {
    return this._inputPort;
  }

  // interface - computed: true, optional: true, required: false
  private _interface = new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference {
    return new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowSourceMediaStreamSourceConfigurations {
  /**
  * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#encoding_name MediaconnectFlow#encoding_name}
  */
  readonly encodingName?: string;
  /**
  * The media streams that you want to associate with the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#input_configurations MediaconnectFlow#input_configurations}
  */
  readonly inputConfigurations?: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] | cdktn.IResolvable;
  /**
  * A name that helps you distinguish one media stream from another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}
  */
  readonly mediaStreamName?: string;
}

export function mediaconnectFlowSourceMediaStreamSourceConfigurationsToTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding_name: cdktn.stringToTerraform(struct!.encodingName),
    input_configurations: cdktn.listMapper(mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToTerraform, false)(struct!.inputConfigurations),
    media_stream_name: cdktn.stringToTerraform(struct!.mediaStreamName),
  }
}


export function mediaconnectFlowSourceMediaStreamSourceConfigurationsToHclTerraform(struct?: MediaconnectFlowSourceMediaStreamSourceConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding_name: {
      value: cdktn.stringToHclTerraform(struct!.encodingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_configurations: {
      value: cdktn.listMapperHcl(mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToHclTerraform, false)(struct!.inputConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList",
    },
    media_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.mediaStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowSourceMediaStreamSourceConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingName = this._encodingName;
    }
    if (this._inputConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputConfigurations = this._inputConfigurations?.internalValue;
    }
    if (this._mediaStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStreamName = this._mediaStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMediaStreamSourceConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encodingName = undefined;
      this._inputConfigurations.internalValue = undefined;
      this._mediaStreamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encodingName = value.encodingName;
      this._inputConfigurations.internalValue = value.inputConfigurations;
      this._mediaStreamName = value.mediaStreamName;
    }
  }

  // encoding_name - computed: true, optional: true, required: false
  private _encodingName?: string; 
  public get encodingName() {
    return this.getStringAttribute('encoding_name');
  }
  public set encodingName(value: string) {
    this._encodingName = value;
  }
  public resetEncodingName() {
    this._encodingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingNameInput() {
    return this._encodingName;
  }

  // input_configurations - computed: true, optional: true, required: false
  private _inputConfigurations = new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(this, "input_configurations", false);
  public get inputConfigurations() {
    return this._inputConfigurations;
  }
  public putInputConfigurations(value: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] | cdktn.IResolvable) {
    this._inputConfigurations.internalValue = value;
  }
  public resetInputConfigurations() {
    this._inputConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigurationsInput() {
    return this._inputConfigurations.internalValue;
  }

  // media_stream_name - computed: true, optional: true, required: false
  private _mediaStreamName?: string; 
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }
  public set mediaStreamName(value: string) {
    this._mediaStreamName = value;
  }
  public resetMediaStreamName() {
    this._mediaStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamNameInput() {
    return this._mediaStreamName;
  }
}

export class MediaconnectFlowSourceMediaStreamSourceConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowSourceMediaStreamSourceConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference {
    return new MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowSourceNdiSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_name MediaconnectFlow#source_name}
  */
  readonly sourceName?: string;
}

export function mediaconnectFlowSourceNdiSourceSettingsToTerraform(struct?: MediaconnectFlowSourceNdiSourceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_name: cdktn.stringToTerraform(struct!.sourceName),
  }
}


export function mediaconnectFlowSourceNdiSourceSettingsToHclTerraform(struct?: MediaconnectFlowSourceNdiSourceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceNdiSourceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceNdiSourceSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceNdiSourceSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
    }
  }

  // source_name - computed: true, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role used for transit encryption from the router output using AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the AWS Secrets Manager secret used for transit encryption from the router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#automatic MediaconnectFlow#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption of a flow source using AWS Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#secrets_manager MediaconnectFlow#secrets_manager}
  */
  readonly secretsManager?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic: {
      value: cdktn.stringToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager: {
      value: mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._secretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManager = this._secretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatic = undefined;
      this._secretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatic = value.automatic;
      this._secretsManager.internalValue = value.secretsManager;
    }
  }

  // automatic - computed: true, optional: true, required: false
  private _automatic?: string; 
  public get automatic() {
    return this.getStringAttribute('automatic');
  }
  public set automatic(value: string) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // secrets_manager - computed: true, optional: true, required: false
  private _secretsManager = new MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationSecretsManager) {
    this._secretsManager.internalValue = value;
  }
  public resetSecretsManager() {
    this._secretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerInput() {
    return this._secretsManager.internalValue;
  }
}
export interface MediaconnectFlowSourceRouterIntegrationTransitDecryption {
  /**
  * Configuration settings for flow transit encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#encryption_key_configuration MediaconnectFlow#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#encryption_key_type MediaconnectFlow#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionToTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectFlowSourceRouterIntegrationTransitDecryptionToHclTerraform(struct?: MediaconnectFlowSourceRouterIntegrationTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration",
    },
    encryption_key_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceRouterIntegrationTransitDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceRouterIntegrationTransitDecryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
    }
    if (this._encryptionKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyType = this._encryptionKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceRouterIntegrationTransitDecryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = undefined;
      this._encryptionKeyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
      this._encryptionKeyType = value.encryptionKeyType;
    }
  }

  // encryption_key_configuration - computed: true, optional: true, required: false
  private _encryptionKeyConfiguration = new MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectFlowSourceRouterIntegrationTransitDecryptionEncryptionKeyConfiguration) {
    this._encryptionKeyConfiguration.internalValue = value;
  }
  public resetEncryptionKeyConfiguration() {
    this._encryptionKeyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyConfigurationInput() {
    return this._encryptionKeyConfiguration.internalValue;
  }

  // encryption_key_type - computed: true, optional: true, required: false
  private _encryptionKeyType?: string; 
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
  public set encryptionKeyType(value: string) {
    this._encryptionKeyType = value;
  }
  public resetEncryptionKeyType() {
    this._encryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyTypeInput() {
    return this._encryptionKeyType;
  }
}
export interface MediaconnectFlowSourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#key MediaconnectFlow#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#value MediaconnectFlow#value}
  */
  readonly value?: string;
}

export function mediaconnectFlowSourceTagsToTerraform(struct?: MediaconnectFlowSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectFlowSourceTagsToHclTerraform(struct?: MediaconnectFlowSourceTags | cdktn.IResolvable): any {
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

export class MediaconnectFlowSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectFlowSourceTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectFlowSourceTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowSourceTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowSourceTagsOutputReference {
    return new MediaconnectFlowSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowSource {
  /**
  * The type of decryption that is used on the content ingested from this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}
  */
  readonly decryption?: MediaconnectFlowSourceDecryption;
  /**
  * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}
  */
  readonly description?: string;
  /**
  * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}
  */
  readonly entitlementArn?: string;
  /**
  * The source configuration for cloud flows receiving a stream from a bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}
  */
  readonly gatewayBridgeSource?: MediaconnectFlowSourceGatewayBridgeSource;
  /**
  * The port that the flow will be listening on for incoming content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}
  */
  readonly ingestPort?: number;
  /**
  * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * The size of the buffer (in milliseconds) to use to sync incoming source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}
  */
  readonly maxSyncBuffer?: number;
  /**
  * The media stream that is associated with the source, and the parameters for that association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}
  */
  readonly mediaStreamSourceConfigurations?: MediaconnectFlowSourceMediaStreamSourceConfigurations[] | cdktn.IResolvable;
  /**
  * The minimum latency in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}
  */
  readonly minLatency?: number;
  /**
  * The name of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}
  */
  readonly name?: string;
  /**
  * The settings for the NDI flow source. This includes the exact name of the upstream NDI sender that you want to connect to your flow source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#ndi_source_settings MediaconnectFlow#ndi_source_settings}
  */
  readonly ndiSourceSettings?: MediaconnectFlowSourceNdiSourceSettings;
  /**
  * The protocol that is used by the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#router_integration_state MediaconnectFlow#router_integration_state}
  */
  readonly routerIntegrationState?: string;
  /**
  * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#router_integration_transit_decryption MediaconnectFlow#router_integration_transit_decryption}
  */
  readonly routerIntegrationTransitDecryption?: MediaconnectFlowSourceRouterIntegrationTransitDecryption;
  /**
  * The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}
  */
  readonly senderControlPort?: number;
  /**
  * The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}
  */
  readonly senderIpAddress?: string;
  /**
  * Source IP or domain name for SRT-caller protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}
  */
  readonly sourceListenerAddress?: string;
  /**
  * Source port for SRT-caller protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}
  */
  readonly sourceListenerPort?: number;
  /**
  * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}
  */
  readonly streamId?: string;
  /**
  * Key-value pairs that can be used to tag this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#tags MediaconnectFlow#tags}
  */
  readonly tags?: MediaconnectFlowSourceTags[] | cdktn.IResolvable;
  /**
  * The name of the VPC Interface this Source is configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
  /**
  * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}
  */
  readonly whitelistCidr?: string;
}

export function mediaconnectFlowSourceToTerraform(struct?: MediaconnectFlowSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decryption: mediaconnectFlowSourceDecryptionToTerraform(struct!.decryption),
    description: cdktn.stringToTerraform(struct!.description),
    entitlement_arn: cdktn.stringToTerraform(struct!.entitlementArn),
    gateway_bridge_source: mediaconnectFlowSourceGatewayBridgeSourceToTerraform(struct!.gatewayBridgeSource),
    ingest_port: cdktn.numberToTerraform(struct!.ingestPort),
    max_bitrate: cdktn.numberToTerraform(struct!.maxBitrate),
    max_latency: cdktn.numberToTerraform(struct!.maxLatency),
    max_sync_buffer: cdktn.numberToTerraform(struct!.maxSyncBuffer),
    media_stream_source_configurations: cdktn.listMapper(mediaconnectFlowSourceMediaStreamSourceConfigurationsToTerraform, false)(struct!.mediaStreamSourceConfigurations),
    min_latency: cdktn.numberToTerraform(struct!.minLatency),
    name: cdktn.stringToTerraform(struct!.name),
    ndi_source_settings: mediaconnectFlowSourceNdiSourceSettingsToTerraform(struct!.ndiSourceSettings),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    router_integration_state: cdktn.stringToTerraform(struct!.routerIntegrationState),
    router_integration_transit_decryption: mediaconnectFlowSourceRouterIntegrationTransitDecryptionToTerraform(struct!.routerIntegrationTransitDecryption),
    sender_control_port: cdktn.numberToTerraform(struct!.senderControlPort),
    sender_ip_address: cdktn.stringToTerraform(struct!.senderIpAddress),
    source_listener_address: cdktn.stringToTerraform(struct!.sourceListenerAddress),
    source_listener_port: cdktn.numberToTerraform(struct!.sourceListenerPort),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
    tags: cdktn.listMapper(mediaconnectFlowSourceTagsToTerraform, false)(struct!.tags),
    vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
    whitelist_cidr: cdktn.stringToTerraform(struct!.whitelistCidr),
  }
}


export function mediaconnectFlowSourceToHclTerraform(struct?: MediaconnectFlowSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decryption: {
      value: mediaconnectFlowSourceDecryptionToHclTerraform(struct!.decryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceDecryption",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_arn: {
      value: cdktn.stringToHclTerraform(struct!.entitlementArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_bridge_source: {
      value: mediaconnectFlowSourceGatewayBridgeSourceToHclTerraform(struct!.gatewayBridgeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceGatewayBridgeSource",
    },
    ingest_port: {
      value: cdktn.numberToHclTerraform(struct!.ingestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.maxBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_latency: {
      value: cdktn.numberToHclTerraform(struct!.maxLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sync_buffer: {
      value: cdktn.numberToHclTerraform(struct!.maxSyncBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_stream_source_configurations: {
      value: cdktn.listMapperHcl(mediaconnectFlowSourceMediaStreamSourceConfigurationsToHclTerraform, false)(struct!.mediaStreamSourceConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowSourceMediaStreamSourceConfigurationsList",
    },
    min_latency: {
      value: cdktn.numberToHclTerraform(struct!.minLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ndi_source_settings: {
      value: mediaconnectFlowSourceNdiSourceSettingsToHclTerraform(struct!.ndiSourceSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceNdiSourceSettings",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_integration_state: {
      value: cdktn.stringToHclTerraform(struct!.routerIntegrationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_integration_transit_decryption: {
      value: mediaconnectFlowSourceRouterIntegrationTransitDecryptionToHclTerraform(struct!.routerIntegrationTransitDecryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceRouterIntegrationTransitDecryption",
    },
    sender_control_port: {
      value: cdktn.numberToHclTerraform(struct!.senderControlPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sender_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.senderIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_listener_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceListenerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_listener_port: {
      value: cdktn.numberToHclTerraform(struct!.sourceListenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktn.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(mediaconnectFlowSourceTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowSourceTagsList",
    },
    vpc_interface_name: {
      value: cdktn.stringToHclTerraform(struct!.vpcInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist_cidr: {
      value: cdktn.stringToHclTerraform(struct!.whitelistCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._entitlementArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementArn = this._entitlementArn;
    }
    if (this._gatewayBridgeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayBridgeSource = this._gatewayBridgeSource?.internalValue;
    }
    if (this._ingestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestPort = this._ingestPort;
    }
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    if (this._maxLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLatency = this._maxLatency;
    }
    if (this._maxSyncBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSyncBuffer = this._maxSyncBuffer;
    }
    if (this._mediaStreamSourceConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStreamSourceConfigurations = this._mediaStreamSourceConfigurations?.internalValue;
    }
    if (this._minLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLatency = this._minLatency;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ndiSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndiSourceSettings = this._ndiSourceSettings?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routerIntegrationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIntegrationState = this._routerIntegrationState;
    }
    if (this._routerIntegrationTransitDecryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIntegrationTransitDecryption = this._routerIntegrationTransitDecryption?.internalValue;
    }
    if (this._senderControlPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderControlPort = this._senderControlPort;
    }
    if (this._senderIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderIpAddress = this._senderIpAddress;
    }
    if (this._sourceListenerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceListenerAddress = this._sourceListenerAddress;
    }
    if (this._sourceListenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceListenerPort = this._sourceListenerPort;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterfaceName = this._vpcInterfaceName;
    }
    if (this._whitelistCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistCidr = this._whitelistCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryption.internalValue = undefined;
      this._description = undefined;
      this._entitlementArn = undefined;
      this._gatewayBridgeSource.internalValue = undefined;
      this._ingestPort = undefined;
      this._maxBitrate = undefined;
      this._maxLatency = undefined;
      this._maxSyncBuffer = undefined;
      this._mediaStreamSourceConfigurations.internalValue = undefined;
      this._minLatency = undefined;
      this._name = undefined;
      this._ndiSourceSettings.internalValue = undefined;
      this._protocol = undefined;
      this._routerIntegrationState = undefined;
      this._routerIntegrationTransitDecryption.internalValue = undefined;
      this._senderControlPort = undefined;
      this._senderIpAddress = undefined;
      this._sourceListenerAddress = undefined;
      this._sourceListenerPort = undefined;
      this._streamId = undefined;
      this._tags.internalValue = undefined;
      this._vpcInterfaceName = undefined;
      this._whitelistCidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryption.internalValue = value.decryption;
      this._description = value.description;
      this._entitlementArn = value.entitlementArn;
      this._gatewayBridgeSource.internalValue = value.gatewayBridgeSource;
      this._ingestPort = value.ingestPort;
      this._maxBitrate = value.maxBitrate;
      this._maxLatency = value.maxLatency;
      this._maxSyncBuffer = value.maxSyncBuffer;
      this._mediaStreamSourceConfigurations.internalValue = value.mediaStreamSourceConfigurations;
      this._minLatency = value.minLatency;
      this._name = value.name;
      this._ndiSourceSettings.internalValue = value.ndiSourceSettings;
      this._protocol = value.protocol;
      this._routerIntegrationState = value.routerIntegrationState;
      this._routerIntegrationTransitDecryption.internalValue = value.routerIntegrationTransitDecryption;
      this._senderControlPort = value.senderControlPort;
      this._senderIpAddress = value.senderIpAddress;
      this._sourceListenerAddress = value.sourceListenerAddress;
      this._sourceListenerPort = value.sourceListenerPort;
      this._streamId = value.streamId;
      this._tags.internalValue = value.tags;
      this._vpcInterfaceName = value.vpcInterfaceName;
      this._whitelistCidr = value.whitelistCidr;
    }
  }

  // decryption - computed: true, optional: true, required: false
  private _decryption = new MediaconnectFlowSourceDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }
  public putDecryption(value: MediaconnectFlowSourceDecryption) {
    this._decryption.internalValue = value;
  }
  public resetDecryption() {
    this._decryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption.internalValue;
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

  // entitlement_arn - computed: true, optional: true, required: false
  private _entitlementArn?: string; 
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }
  public set entitlementArn(value: string) {
    this._entitlementArn = value;
  }
  public resetEntitlementArn() {
    this._entitlementArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementArnInput() {
    return this._entitlementArn;
  }

  // gateway_bridge_source - computed: true, optional: true, required: false
  private _gatewayBridgeSource = new MediaconnectFlowSourceGatewayBridgeSourceOutputReference(this, "gateway_bridge_source");
  public get gatewayBridgeSource() {
    return this._gatewayBridgeSource;
  }
  public putGatewayBridgeSource(value: MediaconnectFlowSourceGatewayBridgeSource) {
    this._gatewayBridgeSource.internalValue = value;
  }
  public resetGatewayBridgeSource() {
    this._gatewayBridgeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayBridgeSourceInput() {
    return this._gatewayBridgeSource.internalValue;
  }

  // ingest_ip - computed: true, optional: false, required: false
  public get ingestIp() {
    return this.getStringAttribute('ingest_ip');
  }

  // ingest_port - computed: true, optional: true, required: false
  private _ingestPort?: number; 
  public get ingestPort() {
    return this.getNumberAttribute('ingest_port');
  }
  public set ingestPort(value: number) {
    this._ingestPort = value;
  }
  public resetIngestPort() {
    this._ingestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestPortInput() {
    return this._ingestPort;
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }

  // max_latency - computed: true, optional: true, required: false
  private _maxLatency?: number; 
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency;
  }

  // max_sync_buffer - computed: true, optional: true, required: false
  private _maxSyncBuffer?: number; 
  public get maxSyncBuffer() {
    return this.getNumberAttribute('max_sync_buffer');
  }
  public set maxSyncBuffer(value: number) {
    this._maxSyncBuffer = value;
  }
  public resetMaxSyncBuffer() {
    this._maxSyncBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncBufferInput() {
    return this._maxSyncBuffer;
  }

  // media_stream_source_configurations - computed: true, optional: true, required: false
  private _mediaStreamSourceConfigurations = new MediaconnectFlowSourceMediaStreamSourceConfigurationsList(this, "media_stream_source_configurations", false);
  public get mediaStreamSourceConfigurations() {
    return this._mediaStreamSourceConfigurations;
  }
  public putMediaStreamSourceConfigurations(value: MediaconnectFlowSourceMediaStreamSourceConfigurations[] | cdktn.IResolvable) {
    this._mediaStreamSourceConfigurations.internalValue = value;
  }
  public resetMediaStreamSourceConfigurations() {
    this._mediaStreamSourceConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamSourceConfigurationsInput() {
    return this._mediaStreamSourceConfigurations.internalValue;
  }

  // min_latency - computed: true, optional: true, required: false
  private _minLatency?: number; 
  public get minLatency() {
    return this.getNumberAttribute('min_latency');
  }
  public set minLatency(value: number) {
    this._minLatency = value;
  }
  public resetMinLatency() {
    this._minLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLatencyInput() {
    return this._minLatency;
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

  // ndi_source_settings - computed: true, optional: true, required: false
  private _ndiSourceSettings = new MediaconnectFlowSourceNdiSourceSettingsOutputReference(this, "ndi_source_settings");
  public get ndiSourceSettings() {
    return this._ndiSourceSettings;
  }
  public putNdiSourceSettings(value: MediaconnectFlowSourceNdiSourceSettings) {
    this._ndiSourceSettings.internalValue = value;
  }
  public resetNdiSourceSettings() {
    this._ndiSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiSourceSettingsInput() {
    return this._ndiSourceSettings.internalValue;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // router_integration_state - computed: true, optional: true, required: false
  private _routerIntegrationState?: string; 
  public get routerIntegrationState() {
    return this.getStringAttribute('router_integration_state');
  }
  public set routerIntegrationState(value: string) {
    this._routerIntegrationState = value;
  }
  public resetRouterIntegrationState() {
    this._routerIntegrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIntegrationStateInput() {
    return this._routerIntegrationState;
  }

  // router_integration_transit_decryption - computed: true, optional: true, required: false
  private _routerIntegrationTransitDecryption = new MediaconnectFlowSourceRouterIntegrationTransitDecryptionOutputReference(this, "router_integration_transit_decryption");
  public get routerIntegrationTransitDecryption() {
    return this._routerIntegrationTransitDecryption;
  }
  public putRouterIntegrationTransitDecryption(value: MediaconnectFlowSourceRouterIntegrationTransitDecryption) {
    this._routerIntegrationTransitDecryption.internalValue = value;
  }
  public resetRouterIntegrationTransitDecryption() {
    this._routerIntegrationTransitDecryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIntegrationTransitDecryptionInput() {
    return this._routerIntegrationTransitDecryption.internalValue;
  }

  // sender_control_port - computed: true, optional: true, required: false
  private _senderControlPort?: number; 
  public get senderControlPort() {
    return this.getNumberAttribute('sender_control_port');
  }
  public set senderControlPort(value: number) {
    this._senderControlPort = value;
  }
  public resetSenderControlPort() {
    this._senderControlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderControlPortInput() {
    return this._senderControlPort;
  }

  // sender_ip_address - computed: true, optional: true, required: false
  private _senderIpAddress?: string; 
  public get senderIpAddress() {
    return this.getStringAttribute('sender_ip_address');
  }
  public set senderIpAddress(value: string) {
    this._senderIpAddress = value;
  }
  public resetSenderIpAddress() {
    this._senderIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIpAddressInput() {
    return this._senderIpAddress;
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }

  // source_ingest_port - computed: true, optional: false, required: false
  public get sourceIngestPort() {
    return this.getStringAttribute('source_ingest_port');
  }

  // source_listener_address - computed: true, optional: true, required: false
  private _sourceListenerAddress?: string; 
  public get sourceListenerAddress() {
    return this.getStringAttribute('source_listener_address');
  }
  public set sourceListenerAddress(value: string) {
    this._sourceListenerAddress = value;
  }
  public resetSourceListenerAddress() {
    this._sourceListenerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListenerAddressInput() {
    return this._sourceListenerAddress;
  }

  // source_listener_port - computed: true, optional: true, required: false
  private _sourceListenerPort?: number; 
  public get sourceListenerPort() {
    return this.getNumberAttribute('source_listener_port');
  }
  public set sourceListenerPort(value: number) {
    this._sourceListenerPort = value;
  }
  public resetSourceListenerPort() {
    this._sourceListenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListenerPortInput() {
    return this._sourceListenerPort;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectFlowSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectFlowSourceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_interface_name - computed: true, optional: true, required: false
  private _vpcInterfaceName?: string; 
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
  public set vpcInterfaceName(value: string) {
    this._vpcInterfaceName = value;
  }
  public resetVpcInterfaceName() {
    this._vpcInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceNameInput() {
    return this._vpcInterfaceName;
  }

  // whitelist_cidr - computed: true, optional: true, required: false
  private _whitelistCidr?: string; 
  public get whitelistCidr() {
    return this.getStringAttribute('whitelist_cidr');
  }
  public set whitelistCidr(value: string) {
    this._whitelistCidr = value;
  }
  public resetWhitelistCidr() {
    this._whitelistCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistCidrInput() {
    return this._whitelistCidr;
  }
}
export interface MediaconnectFlowSourceFailoverConfigSourcePriority {
  /**
  * The name of the source you choose as the primary source for this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}
  */
  readonly primarySource?: string;
}

export function mediaconnectFlowSourceFailoverConfigSourcePriorityToTerraform(struct?: MediaconnectFlowSourceFailoverConfigSourcePriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_source: cdktn.stringToTerraform(struct!.primarySource),
  }
}


export function mediaconnectFlowSourceFailoverConfigSourcePriorityToHclTerraform(struct?: MediaconnectFlowSourceFailoverConfigSourcePriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_source: {
      value: cdktn.stringToHclTerraform(struct!.primarySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceFailoverConfigSourcePriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primarySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySource = this._primarySource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceFailoverConfigSourcePriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primarySource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primarySource = value.primarySource;
    }
  }

  // primary_source - computed: true, optional: true, required: false
  private _primarySource?: string; 
  public get primarySource() {
    return this.getStringAttribute('primary_source');
  }
  public set primarySource(value: string) {
    this._primarySource = value;
  }
  public resetPrimarySource() {
    this._primarySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySourceInput() {
    return this._primarySource;
  }
}
export interface MediaconnectFlowSourceFailoverConfig {
  /**
  * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Search window time to look for dash-7 packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}
  */
  readonly recoveryWindow?: number;
  /**
  * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}
  */
  readonly sourcePriority?: MediaconnectFlowSourceFailoverConfigSourcePriority;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}
  */
  readonly state?: string;
}

export function mediaconnectFlowSourceFailoverConfigToTerraform(struct?: MediaconnectFlowSourceFailoverConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover_mode: cdktn.stringToTerraform(struct!.failoverMode),
    recovery_window: cdktn.numberToTerraform(struct!.recoveryWindow),
    source_priority: mediaconnectFlowSourceFailoverConfigSourcePriorityToTerraform(struct!.sourcePriority),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function mediaconnectFlowSourceFailoverConfigToHclTerraform(struct?: MediaconnectFlowSourceFailoverConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover_mode: {
      value: cdktn.stringToHclTerraform(struct!.failoverMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_window: {
      value: cdktn.numberToHclTerraform(struct!.recoveryWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_priority: {
      value: mediaconnectFlowSourceFailoverConfigSourcePriorityToHclTerraform(struct!.sourcePriority),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceFailoverConfigSourcePriority",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceFailoverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceFailoverConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverMode = this._failoverMode;
    }
    if (this._recoveryWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindow = this._recoveryWindow;
    }
    if (this._sourcePriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePriority = this._sourcePriority?.internalValue;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceFailoverConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverMode = undefined;
      this._recoveryWindow = undefined;
      this._sourcePriority.internalValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverMode = value.failoverMode;
      this._recoveryWindow = value.recoveryWindow;
      this._sourcePriority.internalValue = value.sourcePriority;
      this._state = value.state;
    }
  }

  // failover_mode - computed: true, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // recovery_window - computed: true, optional: true, required: false
  private _recoveryWindow?: number; 
  public get recoveryWindow() {
    return this.getNumberAttribute('recovery_window');
  }
  public set recoveryWindow(value: number) {
    this._recoveryWindow = value;
  }
  public resetRecoveryWindow() {
    this._recoveryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInput() {
    return this._recoveryWindow;
  }

  // source_priority - computed: true, optional: true, required: false
  private _sourcePriority = new MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(this, "source_priority");
  public get sourcePriority() {
    return this._sourcePriority;
  }
  public putSourcePriority(value: MediaconnectFlowSourceFailoverConfigSourcePriority) {
    this._sourcePriority.internalValue = value;
  }
  public resetSourcePriority() {
    this._sourcePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePriorityInput() {
    return this._sourcePriority.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio {
  /**
  * Indicates whether the SilentAudio metric is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}
  */
  readonly state?: string;
  /**
  * Specifies the number of consecutive seconds of silence that triggers an event or alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}
  */
  readonly thresholdSeconds?: number;
}

export function mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToTerraform(struct?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
  }
}


export function mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_seconds: {
      value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._thresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdSeconds = this._thresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._thresholdSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._thresholdSeconds = value.thresholdSeconds;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // threshold_seconds - computed: true, optional: true, required: false
  private _thresholdSeconds?: number; 
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
  public set thresholdSeconds(value: number) {
    this._thresholdSeconds = value;
  }
  public resetThresholdSeconds() {
    this._thresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSecondsInput() {
    return this._thresholdSeconds;
  }
}
export interface MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings {
  /**
  * Configures settings for the SilentAudio metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#silent_audio MediaconnectFlow#silent_audio}
  */
  readonly silentAudio?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio;
}

export function mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToTerraform(struct?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    silent_audio: mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToTerraform(struct!.silentAudio),
  }
}


export function mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    silent_audio: {
      value: mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToHclTerraform(struct!.silentAudio),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._silentAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.silentAudio = this._silentAudio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._silentAudio.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._silentAudio.internalValue = value.silentAudio;
    }
  }

  // silent_audio - computed: true, optional: true, required: false
  private _silentAudio = new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(this, "silent_audio");
  public get silentAudio() {
    return this._silentAudio;
  }
  public putSilentAudio(value: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio) {
    this._silentAudio.internalValue = value;
  }
  public resetSilentAudio() {
    this._silentAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentAudioInput() {
    return this._silentAudio.internalValue;
  }
}

export class MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference {
    return new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames {
  /**
  * Indicates whether the BlackFrames metric is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}
  */
  readonly state?: string;
  /**
  * Specifies the number of consecutive seconds of black frames that triggers an event or alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}
  */
  readonly thresholdSeconds?: number;
}

export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
  }
}


export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_seconds: {
      value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._thresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdSeconds = this._thresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._thresholdSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._thresholdSeconds = value.thresholdSeconds;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // threshold_seconds - computed: true, optional: true, required: false
  private _thresholdSeconds?: number; 
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
  public set thresholdSeconds(value: number) {
    this._thresholdSeconds = value;
  }
  public resetThresholdSeconds() {
    this._thresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSecondsInput() {
    return this._thresholdSeconds;
  }
}
export interface MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames {
  /**
  * Indicates whether the FrozenFrames metric is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}
  */
  readonly state?: string;
  /**
  * Specifies the number of consecutive seconds of a static image that triggers an event or alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}
  */
  readonly thresholdSeconds?: number;
}

export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
  }
}


export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_seconds: {
      value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._thresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdSeconds = this._thresholdSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._thresholdSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._thresholdSeconds = value.thresholdSeconds;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // threshold_seconds - computed: true, optional: true, required: false
  private _thresholdSeconds?: number; 
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
  public set thresholdSeconds(value: number) {
    this._thresholdSeconds = value;
  }
  public resetThresholdSeconds() {
    this._thresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSecondsInput() {
    return this._thresholdSeconds;
  }
}
export interface MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings {
  /**
  * Configures settings for the BlackFrames metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#black_frames MediaconnectFlow#black_frames}
  */
  readonly blackFrames?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames;
  /**
  * Configures settings for the FrozenFrames metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#frozen_frames MediaconnectFlow#frozen_frames}
  */
  readonly frozenFrames?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames;
}

export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    black_frames: mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToTerraform(struct!.blackFrames),
    frozen_frames: mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToTerraform(struct!.frozenFrames),
  }
}


export function mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    black_frames: {
      value: mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToHclTerraform(struct!.blackFrames),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames",
    },
    frozen_frames: {
      value: mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToHclTerraform(struct!.frozenFrames),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackFrames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackFrames = this._blackFrames?.internalValue;
    }
    if (this._frozenFrames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frozenFrames = this._frozenFrames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackFrames.internalValue = undefined;
      this._frozenFrames.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackFrames.internalValue = value.blackFrames;
      this._frozenFrames.internalValue = value.frozenFrames;
    }
  }

  // black_frames - computed: true, optional: true, required: false
  private _blackFrames = new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(this, "black_frames");
  public get blackFrames() {
    return this._blackFrames;
  }
  public putBlackFrames(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames) {
    this._blackFrames.internalValue = value;
  }
  public resetBlackFrames() {
    this._blackFrames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackFramesInput() {
    return this._blackFrames.internalValue;
  }

  // frozen_frames - computed: true, optional: true, required: false
  private _frozenFrames = new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(this, "frozen_frames");
  public get frozenFrames() {
    return this._frozenFrames;
  }
  public putFrozenFrames(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames) {
    this._frozenFrames.internalValue = value;
  }
  public resetFrozenFrames() {
    this._frozenFrames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frozenFramesInput() {
    return this._frozenFrames.internalValue;
  }
}

export class MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference {
    return new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowSourceMonitoringConfig {
  /**
  * Contains the settings for audio stream metrics monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}
  */
  readonly audioMonitoringSettings?: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] | cdktn.IResolvable;
  /**
  * Indicates whether content quality analysis is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}
  */
  readonly contentQualityAnalysisState?: string;
  /**
  * The state of thumbnail monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}
  */
  readonly thumbnailState?: string;
  /**
  * Contains the settings for video stream metrics monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}
  */
  readonly videoMonitoringSettings?: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] | cdktn.IResolvable;
}

export function mediaconnectFlowSourceMonitoringConfigToTerraform(struct?: MediaconnectFlowSourceMonitoringConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_monitoring_settings: cdktn.listMapper(mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToTerraform, false)(struct!.audioMonitoringSettings),
    content_quality_analysis_state: cdktn.stringToTerraform(struct!.contentQualityAnalysisState),
    thumbnail_state: cdktn.stringToTerraform(struct!.thumbnailState),
    video_monitoring_settings: cdktn.listMapper(mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToTerraform, false)(struct!.videoMonitoringSettings),
  }
}


export function mediaconnectFlowSourceMonitoringConfigToHclTerraform(struct?: MediaconnectFlowSourceMonitoringConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_monitoring_settings: {
      value: cdktn.listMapperHcl(mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToHclTerraform, false)(struct!.audioMonitoringSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList",
    },
    content_quality_analysis_state: {
      value: cdktn.stringToHclTerraform(struct!.contentQualityAnalysisState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbnail_state: {
      value: cdktn.stringToHclTerraform(struct!.thumbnailState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_monitoring_settings: {
      value: cdktn.listMapperHcl(mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToHclTerraform, false)(struct!.videoMonitoringSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowSourceMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectFlowSourceMonitoringConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioMonitoringSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioMonitoringSettings = this._audioMonitoringSettings?.internalValue;
    }
    if (this._contentQualityAnalysisState !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentQualityAnalysisState = this._contentQualityAnalysisState;
    }
    if (this._thumbnailState !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbnailState = this._thumbnailState;
    }
    if (this._videoMonitoringSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoMonitoringSettings = this._videoMonitoringSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowSourceMonitoringConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioMonitoringSettings.internalValue = undefined;
      this._contentQualityAnalysisState = undefined;
      this._thumbnailState = undefined;
      this._videoMonitoringSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioMonitoringSettings.internalValue = value.audioMonitoringSettings;
      this._contentQualityAnalysisState = value.contentQualityAnalysisState;
      this._thumbnailState = value.thumbnailState;
      this._videoMonitoringSettings.internalValue = value.videoMonitoringSettings;
    }
  }

  // audio_monitoring_settings - computed: true, optional: true, required: false
  private _audioMonitoringSettings = new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(this, "audio_monitoring_settings", false);
  public get audioMonitoringSettings() {
    return this._audioMonitoringSettings;
  }
  public putAudioMonitoringSettings(value: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] | cdktn.IResolvable) {
    this._audioMonitoringSettings.internalValue = value;
  }
  public resetAudioMonitoringSettings() {
    this._audioMonitoringSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioMonitoringSettingsInput() {
    return this._audioMonitoringSettings.internalValue;
  }

  // content_quality_analysis_state - computed: true, optional: true, required: false
  private _contentQualityAnalysisState?: string; 
  public get contentQualityAnalysisState() {
    return this.getStringAttribute('content_quality_analysis_state');
  }
  public set contentQualityAnalysisState(value: string) {
    this._contentQualityAnalysisState = value;
  }
  public resetContentQualityAnalysisState() {
    this._contentQualityAnalysisState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentQualityAnalysisStateInput() {
    return this._contentQualityAnalysisState;
  }

  // thumbnail_state - computed: true, optional: true, required: false
  private _thumbnailState?: string; 
  public get thumbnailState() {
    return this.getStringAttribute('thumbnail_state');
  }
  public set thumbnailState(value: string) {
    this._thumbnailState = value;
  }
  public resetThumbnailState() {
    this._thumbnailState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailStateInput() {
    return this._thumbnailState;
  }

  // video_monitoring_settings - computed: true, optional: true, required: false
  private _videoMonitoringSettings = new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(this, "video_monitoring_settings", false);
  public get videoMonitoringSettings() {
    return this._videoMonitoringSettings;
  }
  public putVideoMonitoringSettings(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] | cdktn.IResolvable) {
    this._videoMonitoringSettings.internalValue = value;
  }
  public resetVideoMonitoringSettings() {
    this._videoMonitoringSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMonitoringSettingsInput() {
    return this._videoMonitoringSettings.internalValue;
  }
}
export interface MediaconnectFlowTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#key MediaconnectFlow#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#value MediaconnectFlow#value}
  */
  readonly value?: string;
}

export function mediaconnectFlowTagsToTerraform(struct?: MediaconnectFlowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectFlowTagsToHclTerraform(struct?: MediaconnectFlowTags | cdktn.IResolvable): any {
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

export class MediaconnectFlowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectFlowTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectFlowTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowTagsOutputReference {
    return new MediaconnectFlowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowVpcInterfacesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#key MediaconnectFlow#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#value MediaconnectFlow#value}
  */
  readonly value?: string;
}

export function mediaconnectFlowVpcInterfacesTagsToTerraform(struct?: MediaconnectFlowVpcInterfacesTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectFlowVpcInterfacesTagsToHclTerraform(struct?: MediaconnectFlowVpcInterfacesTags | cdktn.IResolvable): any {
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

export class MediaconnectFlowVpcInterfacesTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowVpcInterfacesTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectFlowVpcInterfacesTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectFlowVpcInterfacesTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowVpcInterfacesTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowVpcInterfacesTagsOutputReference {
    return new MediaconnectFlowVpcInterfacesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectFlowVpcInterfaces {
  /**
  * Immutable and has to be a unique against other VpcInterfaces in this Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}
  */
  readonly name?: string;
  /**
  * IDs of the network interfaces created in customer's account by MediaConnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#network_interface_ids MediaconnectFlow#network_interface_ids}
  */
  readonly networkInterfaceIds?: string[];
  /**
  * The type of network adapter that you want MediaConnect to use on this interface. If you don't set this value, it defaults to ENA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#network_interface_type MediaconnectFlow#network_interface_type}
  */
  readonly networkInterfaceType?: string;
  /**
  * Role Arn MediaConnect can assume to create ENIs in customer's account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Security Group IDs to be used on ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#security_group_ids MediaconnectFlow#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Subnet must be in the AZ of the Flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#subnet_id MediaconnectFlow#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Key-value pairs that can be used to tag this VPC interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#tags MediaconnectFlow#tags}
  */
  readonly tags?: MediaconnectFlowVpcInterfacesTags[] | cdktn.IResolvable;
}

export function mediaconnectFlowVpcInterfacesToTerraform(struct?: MediaconnectFlowVpcInterfaces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    network_interface_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.networkInterfaceIds),
    network_interface_type: cdktn.stringToTerraform(struct!.networkInterfaceType),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    tags: cdktn.listMapper(mediaconnectFlowVpcInterfacesTagsToTerraform, false)(struct!.tags),
  }
}


export function mediaconnectFlowVpcInterfacesToHclTerraform(struct?: MediaconnectFlowVpcInterfaces | cdktn.IResolvable): any {
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
    network_interface_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.networkInterfaceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_interface_type: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(mediaconnectFlowVpcInterfacesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectFlowVpcInterfacesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectFlowVpcInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectFlowVpcInterfaces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkInterfaceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceIds = this._networkInterfaceIds;
    }
    if (this._networkInterfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceType = this._networkInterfaceType;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectFlowVpcInterfaces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networkInterfaceIds = undefined;
      this._networkInterfaceType = undefined;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networkInterfaceIds = value.networkInterfaceIds;
      this._networkInterfaceType = value.networkInterfaceType;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._tags.internalValue = value.tags;
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

  // network_interface_ids - computed: true, optional: true, required: false
  private _networkInterfaceIds?: string[]; 
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }
  public resetNetworkInterfaceIds() {
    this._networkInterfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdsInput() {
    return this._networkInterfaceIds;
  }

  // network_interface_type - computed: true, optional: true, required: false
  private _networkInterfaceType?: string; 
  public get networkInterfaceType() {
    return this.getStringAttribute('network_interface_type');
  }
  public set networkInterfaceType(value: string) {
    this._networkInterfaceType = value;
  }
  public resetNetworkInterfaceType() {
    this._networkInterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTypeInput() {
    return this._networkInterfaceType;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectFlowVpcInterfacesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectFlowVpcInterfacesTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class MediaconnectFlowVpcInterfacesList extends cdktn.ComplexList {
  public internalValue? : MediaconnectFlowVpcInterfaces[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectFlowVpcInterfacesOutputReference {
    return new MediaconnectFlowVpcInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow}
*/
export class MediaconnectFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectFlow to import
  * @param importFromId The id of the existing MediaconnectFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow',
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
    this._availabilityZone = config.availabilityZone;
    this._encodingConfig.internalValue = config.encodingConfig;
    this._flowSize = config.flowSize;
    this._maintenance.internalValue = config.maintenance;
    this._mediaStreams.internalValue = config.mediaStreams;
    this._name = config.name;
    this._ndiConfig.internalValue = config.ndiConfig;
    this._source.internalValue = config.source;
    this._sourceFailoverConfig.internalValue = config.sourceFailoverConfig;
    this._sourceMonitoringConfig.internalValue = config.sourceMonitoringConfig;
    this._tags.internalValue = config.tags;
    this._vpcInterfaces.internalValue = config.vpcInterfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // egress_ip - computed: true, optional: false, required: false
  public get egressIp() {
    return this.getStringAttribute('egress_ip');
  }

  // encoding_config - computed: true, optional: true, required: false
  private _encodingConfig = new MediaconnectFlowEncodingConfigOutputReference(this, "encoding_config");
  public get encodingConfig() {
    return this._encodingConfig;
  }
  public putEncodingConfig(value: MediaconnectFlowEncodingConfig) {
    this._encodingConfig.internalValue = value;
  }
  public resetEncodingConfig() {
    this._encodingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingConfigInput() {
    return this._encodingConfig.internalValue;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_availability_zone - computed: true, optional: false, required: false
  public get flowAvailabilityZone() {
    return this.getStringAttribute('flow_availability_zone');
  }

  // flow_ndi_machine_name - computed: true, optional: false, required: false
  public get flowNdiMachineName() {
    return this.getStringAttribute('flow_ndi_machine_name');
  }

  // flow_size - computed: true, optional: true, required: false
  private _flowSize?: string; 
  public get flowSize() {
    return this.getStringAttribute('flow_size');
  }
  public set flowSize(value: string) {
    this._flowSize = value;
  }
  public resetFlowSize() {
    this._flowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSizeInput() {
    return this._flowSize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance - computed: true, optional: true, required: false
  private _maintenance = new MediaconnectFlowMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: MediaconnectFlowMaintenance) {
    this._maintenance.internalValue = value;
  }
  public resetMaintenance() {
    this._maintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
  }

  // media_streams - computed: true, optional: true, required: false
  private _mediaStreams = new MediaconnectFlowMediaStreamsList(this, "media_streams", false);
  public get mediaStreams() {
    return this._mediaStreams;
  }
  public putMediaStreams(value: MediaconnectFlowMediaStreams[] | cdktn.IResolvable) {
    this._mediaStreams.internalValue = value;
  }
  public resetMediaStreams() {
    this._mediaStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStreamsInput() {
    return this._mediaStreams.internalValue;
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

  // ndi_config - computed: true, optional: true, required: false
  private _ndiConfig = new MediaconnectFlowNdiConfigOutputReference(this, "ndi_config");
  public get ndiConfig() {
    return this._ndiConfig;
  }
  public putNdiConfig(value: MediaconnectFlowNdiConfig) {
    this._ndiConfig.internalValue = value;
  }
  public resetNdiConfig() {
    this._ndiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiConfigInput() {
    return this._ndiConfig.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new MediaconnectFlowSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: MediaconnectFlowSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_failover_config - computed: true, optional: true, required: false
  private _sourceFailoverConfig = new MediaconnectFlowSourceFailoverConfigOutputReference(this, "source_failover_config");
  public get sourceFailoverConfig() {
    return this._sourceFailoverConfig;
  }
  public putSourceFailoverConfig(value: MediaconnectFlowSourceFailoverConfig) {
    this._sourceFailoverConfig.internalValue = value;
  }
  public resetSourceFailoverConfig() {
    this._sourceFailoverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFailoverConfigInput() {
    return this._sourceFailoverConfig.internalValue;
  }

  // source_monitoring_config - computed: true, optional: true, required: false
  private _sourceMonitoringConfig = new MediaconnectFlowSourceMonitoringConfigOutputReference(this, "source_monitoring_config");
  public get sourceMonitoringConfig() {
    return this._sourceMonitoringConfig;
  }
  public putSourceMonitoringConfig(value: MediaconnectFlowSourceMonitoringConfig) {
    this._sourceMonitoringConfig.internalValue = value;
  }
  public resetSourceMonitoringConfig() {
    this._sourceMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMonitoringConfigInput() {
    return this._sourceMonitoringConfig.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectFlowTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectFlowTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_interfaces - computed: true, optional: true, required: false
  private _vpcInterfaces = new MediaconnectFlowVpcInterfacesList(this, "vpc_interfaces", false);
  public get vpcInterfaces() {
    return this._vpcInterfaces;
  }
  public putVpcInterfaces(value: MediaconnectFlowVpcInterfaces[] | cdktn.IResolvable) {
    this._vpcInterfaces.internalValue = value;
  }
  public resetVpcInterfaces() {
    this._vpcInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfacesInput() {
    return this._vpcInterfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      encoding_config: mediaconnectFlowEncodingConfigToTerraform(this._encodingConfig.internalValue),
      flow_size: cdktn.stringToTerraform(this._flowSize),
      maintenance: mediaconnectFlowMaintenanceToTerraform(this._maintenance.internalValue),
      media_streams: cdktn.listMapper(mediaconnectFlowMediaStreamsToTerraform, false)(this._mediaStreams.internalValue),
      name: cdktn.stringToTerraform(this._name),
      ndi_config: mediaconnectFlowNdiConfigToTerraform(this._ndiConfig.internalValue),
      source: mediaconnectFlowSourceToTerraform(this._source.internalValue),
      source_failover_config: mediaconnectFlowSourceFailoverConfigToTerraform(this._sourceFailoverConfig.internalValue),
      source_monitoring_config: mediaconnectFlowSourceMonitoringConfigToTerraform(this._sourceMonitoringConfig.internalValue),
      tags: cdktn.listMapper(mediaconnectFlowTagsToTerraform, false)(this._tags.internalValue),
      vpc_interfaces: cdktn.listMapper(mediaconnectFlowVpcInterfacesToTerraform, false)(this._vpcInterfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoding_config: {
        value: mediaconnectFlowEncodingConfigToHclTerraform(this._encodingConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowEncodingConfig",
      },
      flow_size: {
        value: cdktn.stringToHclTerraform(this._flowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance: {
        value: mediaconnectFlowMaintenanceToHclTerraform(this._maintenance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowMaintenance",
      },
      media_streams: {
        value: cdktn.listMapperHcl(mediaconnectFlowMediaStreamsToHclTerraform, false)(this._mediaStreams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectFlowMediaStreamsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndi_config: {
        value: mediaconnectFlowNdiConfigToHclTerraform(this._ndiConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowNdiConfig",
      },
      source: {
        value: mediaconnectFlowSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowSource",
      },
      source_failover_config: {
        value: mediaconnectFlowSourceFailoverConfigToHclTerraform(this._sourceFailoverConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowSourceFailoverConfig",
      },
      source_monitoring_config: {
        value: mediaconnectFlowSourceMonitoringConfigToHclTerraform(this._sourceMonitoringConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectFlowSourceMonitoringConfig",
      },
      tags: {
        value: cdktn.listMapperHcl(mediaconnectFlowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectFlowTagsList",
      },
      vpc_interfaces: {
        value: cdktn.listMapperHcl(mediaconnectFlowVpcInterfacesToHclTerraform, false)(this._vpcInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectFlowVpcInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
