/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediatailorProgramConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ad break configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}
  */
  readonly adBreaks?: MediatailorProgramAdBreaks[] | cdktn.IResolvable;
  /**
  * The list of AudienceMedia defined in program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}
  */
  readonly audienceMedia?: MediatailorProgramAudienceMedia[] | cdktn.IResolvable;
  /**
  * The name of the channel for this Program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}
  */
  readonly channelName: string;
  /**
  * The name of the LiveSource for this Program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}
  */
  readonly liveSourceName?: string;
  /**
  * The name of the Program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}
  */
  readonly programName: string;
  /**
  * The schedule configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}
  */
  readonly scheduleConfiguration?: MediatailorProgramScheduleConfiguration;
  /**
  * The name of the source location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}
  */
  readonly sourceLocationName: string;
  /**
  * The name that's used to refer to a VOD source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}
  */
  readonly vodSourceName?: string;
}
export interface MediatailorProgramAdBreaksAdBreakMetadata {
  /**
  * The key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}
  */
  readonly key?: string;
  /**
  * The value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}
  */
  readonly value?: string;
}

export function mediatailorProgramAdBreaksAdBreakMetadataToTerraform(struct?: MediatailorProgramAdBreaksAdBreakMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediatailorProgramAdBreaksAdBreakMetadataToHclTerraform(struct?: MediatailorProgramAdBreaksAdBreakMetadata | cdktn.IResolvable): any {
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

export class MediatailorProgramAdBreaksAdBreakMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAdBreaksAdBreakMetadata | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediatailorProgramAdBreaksAdBreakMetadata | cdktn.IResolvable | undefined) {
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

export class MediatailorProgramAdBreaksAdBreakMetadataList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAdBreaksAdBreakMetadata[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAdBreaksAdBreakMetadataOutputReference {
    return new MediatailorProgramAdBreaksAdBreakMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAdBreaksSlate {
  /**
  * The name of the source location where the slate VOD source is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}
  */
  readonly sourceLocationName?: string;
  /**
  * The slate VOD source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}
  */
  readonly vodSourceName?: string;
}

export function mediatailorProgramAdBreaksSlateToTerraform(struct?: MediatailorProgramAdBreaksSlate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
    vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
  }
}


export function mediatailorProgramAdBreaksSlateToHclTerraform(struct?: MediatailorProgramAdBreaksSlate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_location_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_source_name: {
      value: cdktn.stringToHclTerraform(struct!.vodSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAdBreaksSlateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAdBreaksSlate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocationName = this._sourceLocationName;
    }
    if (this._vodSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSourceName = this._vodSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAdBreaksSlate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceLocationName = undefined;
      this._vodSourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceLocationName = value.sourceLocationName;
      this._vodSourceName = value.vodSourceName;
    }
  }

  // source_location_name - computed: true, optional: true, required: false
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  public resetSourceLocationName() {
    this._sourceLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // vod_source_name - computed: true, optional: true, required: false
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  public resetVodSourceName() {
    this._vodSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }
}
export interface MediatailorProgramAdBreaksSpliceInsertMessage {
  /**
  * This is written to splice_insert.avail_num.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}
  */
  readonly availNum?: number;
  /**
  * This is written to splice_insert.avails_expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}
  */
  readonly availsExpected?: number;
  /**
  * This is written to splice_insert.splice_event_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}
  */
  readonly spliceEventId?: number;
  /**
  * This is written to splice_insert.unique_program_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}
  */
  readonly uniqueProgramId?: number;
}

export function mediatailorProgramAdBreaksSpliceInsertMessageToTerraform(struct?: MediatailorProgramAdBreaksSpliceInsertMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avail_num: cdktn.numberToTerraform(struct!.availNum),
    avails_expected: cdktn.numberToTerraform(struct!.availsExpected),
    splice_event_id: cdktn.numberToTerraform(struct!.spliceEventId),
    unique_program_id: cdktn.numberToTerraform(struct!.uniqueProgramId),
  }
}


export function mediatailorProgramAdBreaksSpliceInsertMessageToHclTerraform(struct?: MediatailorProgramAdBreaksSpliceInsertMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avail_num: {
      value: cdktn.numberToHclTerraform(struct!.availNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avails_expected: {
      value: cdktn.numberToHclTerraform(struct!.availsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    splice_event_id: {
      value: cdktn.numberToHclTerraform(struct!.spliceEventId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unique_program_id: {
      value: cdktn.numberToHclTerraform(struct!.uniqueProgramId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAdBreaksSpliceInsertMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAdBreaksSpliceInsertMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.availNum = this._availNum;
    }
    if (this._availsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.availsExpected = this._availsExpected;
    }
    if (this._spliceEventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spliceEventId = this._spliceEventId;
    }
    if (this._uniqueProgramId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueProgramId = this._uniqueProgramId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAdBreaksSpliceInsertMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availNum = undefined;
      this._availsExpected = undefined;
      this._spliceEventId = undefined;
      this._uniqueProgramId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availNum = value.availNum;
      this._availsExpected = value.availsExpected;
      this._spliceEventId = value.spliceEventId;
      this._uniqueProgramId = value.uniqueProgramId;
    }
  }

  // avail_num - computed: true, optional: true, required: false
  private _availNum?: number; 
  public get availNum() {
    return this.getNumberAttribute('avail_num');
  }
  public set availNum(value: number) {
    this._availNum = value;
  }
  public resetAvailNum() {
    this._availNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availNumInput() {
    return this._availNum;
  }

  // avails_expected - computed: true, optional: true, required: false
  private _availsExpected?: number; 
  public get availsExpected() {
    return this.getNumberAttribute('avails_expected');
  }
  public set availsExpected(value: number) {
    this._availsExpected = value;
  }
  public resetAvailsExpected() {
    this._availsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availsExpectedInput() {
    return this._availsExpected;
  }

  // splice_event_id - computed: true, optional: true, required: false
  private _spliceEventId?: number; 
  public get spliceEventId() {
    return this.getNumberAttribute('splice_event_id');
  }
  public set spliceEventId(value: number) {
    this._spliceEventId = value;
  }
  public resetSpliceEventId() {
    this._spliceEventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spliceEventIdInput() {
    return this._spliceEventId;
  }

  // unique_program_id - computed: true, optional: true, required: false
  private _uniqueProgramId?: number; 
  public get uniqueProgramId() {
    return this.getNumberAttribute('unique_program_id');
  }
  public set uniqueProgramId(value: number) {
    this._uniqueProgramId = value;
  }
  public resetUniqueProgramId() {
    this._uniqueProgramId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueProgramIdInput() {
    return this._uniqueProgramId;
  }
}
export interface MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors {
  /**
  * The segment number to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}
  */
  readonly segmentNum?: number;
  /**
  * The Event Identifier to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}
  */
  readonly segmentationEventId?: number;
  /**
  * The Type Identifier to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}
  */
  readonly segmentationTypeId?: number;
  /**
  * The Upid to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}
  */
  readonly segmentationUpid?: string;
  /**
  * The Upid Type to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}
  */
  readonly segmentationUpidType?: number;
  /**
  * The number of segments expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}
  */
  readonly segmentsExpected?: number;
  /**
  * The sub-segment number to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}
  */
  readonly subSegmentNum?: number;
  /**
  * The number of sub-segments expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}
  */
  readonly subSegmentsExpected?: number;
}

export function mediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform(struct?: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segment_num: cdktn.numberToTerraform(struct!.segmentNum),
    segmentation_event_id: cdktn.numberToTerraform(struct!.segmentationEventId),
    segmentation_type_id: cdktn.numberToTerraform(struct!.segmentationTypeId),
    segmentation_upid: cdktn.stringToTerraform(struct!.segmentationUpid),
    segmentation_upid_type: cdktn.numberToTerraform(struct!.segmentationUpidType),
    segments_expected: cdktn.numberToTerraform(struct!.segmentsExpected),
    sub_segment_num: cdktn.numberToTerraform(struct!.subSegmentNum),
    sub_segments_expected: cdktn.numberToTerraform(struct!.subSegmentsExpected),
  }
}


export function mediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform(struct?: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segment_num: {
      value: cdktn.numberToHclTerraform(struct!.segmentNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_event_id: {
      value: cdktn.numberToHclTerraform(struct!.segmentationEventId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_type_id: {
      value: cdktn.numberToHclTerraform(struct!.segmentationTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_upid: {
      value: cdktn.stringToHclTerraform(struct!.segmentationUpid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segmentation_upid_type: {
      value: cdktn.numberToHclTerraform(struct!.segmentationUpidType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segments_expected: {
      value: cdktn.numberToHclTerraform(struct!.segmentsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_segment_num: {
      value: cdktn.numberToHclTerraform(struct!.subSegmentNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_segments_expected: {
      value: cdktn.numberToHclTerraform(struct!.subSegmentsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNum = this._segmentNum;
    }
    if (this._segmentationEventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationEventId = this._segmentationEventId;
    }
    if (this._segmentationTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationTypeId = this._segmentationTypeId;
    }
    if (this._segmentationUpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationUpid = this._segmentationUpid;
    }
    if (this._segmentationUpidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationUpidType = this._segmentationUpidType;
    }
    if (this._segmentsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentsExpected = this._segmentsExpected;
    }
    if (this._subSegmentNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSegmentNum = this._subSegmentNum;
    }
    if (this._subSegmentsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSegmentsExpected = this._subSegmentsExpected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentNum = undefined;
      this._segmentationEventId = undefined;
      this._segmentationTypeId = undefined;
      this._segmentationUpid = undefined;
      this._segmentationUpidType = undefined;
      this._segmentsExpected = undefined;
      this._subSegmentNum = undefined;
      this._subSegmentsExpected = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentNum = value.segmentNum;
      this._segmentationEventId = value.segmentationEventId;
      this._segmentationTypeId = value.segmentationTypeId;
      this._segmentationUpid = value.segmentationUpid;
      this._segmentationUpidType = value.segmentationUpidType;
      this._segmentsExpected = value.segmentsExpected;
      this._subSegmentNum = value.subSegmentNum;
      this._subSegmentsExpected = value.subSegmentsExpected;
    }
  }

  // segment_num - computed: true, optional: true, required: false
  private _segmentNum?: number; 
  public get segmentNum() {
    return this.getNumberAttribute('segment_num');
  }
  public set segmentNum(value: number) {
    this._segmentNum = value;
  }
  public resetSegmentNum() {
    this._segmentNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNumInput() {
    return this._segmentNum;
  }

  // segmentation_event_id - computed: true, optional: true, required: false
  private _segmentationEventId?: number; 
  public get segmentationEventId() {
    return this.getNumberAttribute('segmentation_event_id');
  }
  public set segmentationEventId(value: number) {
    this._segmentationEventId = value;
  }
  public resetSegmentationEventId() {
    this._segmentationEventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationEventIdInput() {
    return this._segmentationEventId;
  }

  // segmentation_type_id - computed: true, optional: true, required: false
  private _segmentationTypeId?: number; 
  public get segmentationTypeId() {
    return this.getNumberAttribute('segmentation_type_id');
  }
  public set segmentationTypeId(value: number) {
    this._segmentationTypeId = value;
  }
  public resetSegmentationTypeId() {
    this._segmentationTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationTypeIdInput() {
    return this._segmentationTypeId;
  }

  // segmentation_upid - computed: true, optional: true, required: false
  private _segmentationUpid?: string; 
  public get segmentationUpid() {
    return this.getStringAttribute('segmentation_upid');
  }
  public set segmentationUpid(value: string) {
    this._segmentationUpid = value;
  }
  public resetSegmentationUpid() {
    this._segmentationUpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationUpidInput() {
    return this._segmentationUpid;
  }

  // segmentation_upid_type - computed: true, optional: true, required: false
  private _segmentationUpidType?: number; 
  public get segmentationUpidType() {
    return this.getNumberAttribute('segmentation_upid_type');
  }
  public set segmentationUpidType(value: number) {
    this._segmentationUpidType = value;
  }
  public resetSegmentationUpidType() {
    this._segmentationUpidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationUpidTypeInput() {
    return this._segmentationUpidType;
  }

  // segments_expected - computed: true, optional: true, required: false
  private _segmentsExpected?: number; 
  public get segmentsExpected() {
    return this.getNumberAttribute('segments_expected');
  }
  public set segmentsExpected(value: number) {
    this._segmentsExpected = value;
  }
  public resetSegmentsExpected() {
    this._segmentsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsExpectedInput() {
    return this._segmentsExpected;
  }

  // sub_segment_num - computed: true, optional: true, required: false
  private _subSegmentNum?: number; 
  public get subSegmentNum() {
    return this.getNumberAttribute('sub_segment_num');
  }
  public set subSegmentNum(value: number) {
    this._subSegmentNum = value;
  }
  public resetSubSegmentNum() {
    this._subSegmentNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSegmentNumInput() {
    return this._subSegmentNum;
  }

  // sub_segments_expected - computed: true, optional: true, required: false
  private _subSegmentsExpected?: number; 
  public get subSegmentsExpected() {
    return this.getNumberAttribute('sub_segments_expected');
  }
  public set subSegmentsExpected(value: number) {
    this._subSegmentsExpected = value;
  }
  public resetSubSegmentsExpected() {
    this._subSegmentsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSegmentsExpectedInput() {
    return this._subSegmentsExpected;
  }
}

export class MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference {
    return new MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAdBreaksTimeSignalMessage {
  /**
  * The configurations for the SCTE-35 segmentation_descriptor message(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}
  */
  readonly segmentationDescriptors?: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable;
}

export function mediatailorProgramAdBreaksTimeSignalMessageToTerraform(struct?: MediatailorProgramAdBreaksTimeSignalMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_descriptors: cdktn.listMapper(mediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform, false)(struct!.segmentationDescriptors),
  }
}


export function mediatailorProgramAdBreaksTimeSignalMessageToHclTerraform(struct?: MediatailorProgramAdBreaksTimeSignalMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_descriptors: {
      value: cdktn.listMapperHcl(mediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform, false)(struct!.segmentationDescriptors),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAdBreaksTimeSignalMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAdBreaksTimeSignalMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationDescriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationDescriptors = this._segmentationDescriptors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAdBreaksTimeSignalMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationDescriptors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationDescriptors.internalValue = value.segmentationDescriptors;
    }
  }

  // segmentation_descriptors - computed: true, optional: true, required: false
  private _segmentationDescriptors = new MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(this, "segmentation_descriptors", false);
  public get segmentationDescriptors() {
    return this._segmentationDescriptors;
  }
  public putSegmentationDescriptors(value: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable) {
    this._segmentationDescriptors.internalValue = value;
  }
  public resetSegmentationDescriptors() {
    this._segmentationDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationDescriptorsInput() {
    return this._segmentationDescriptors.internalValue;
  }
}
export interface MediatailorProgramAdBreaks {
  /**
  * Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}
  */
  readonly adBreakMetadata?: MediatailorProgramAdBreaksAdBreakMetadata[] | cdktn.IResolvable;
  /**
  * The SCTE-35 ad insertion type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}
  */
  readonly messageType?: string;
  /**
  * How long (in milliseconds) after the beginning of the program that an ad starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}
  */
  readonly offsetMillis?: number;
  /**
  * Slate VOD source configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}
  */
  readonly slate?: MediatailorProgramAdBreaksSlate;
  /**
  * Splice insert message configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}
  */
  readonly spliceInsertMessage?: MediatailorProgramAdBreaksSpliceInsertMessage;
  /**
  * The SCTE-35 time_signal message configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}
  */
  readonly timeSignalMessage?: MediatailorProgramAdBreaksTimeSignalMessage;
}

export function mediatailorProgramAdBreaksToTerraform(struct?: MediatailorProgramAdBreaks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_break_metadata: cdktn.listMapper(mediatailorProgramAdBreaksAdBreakMetadataToTerraform, false)(struct!.adBreakMetadata),
    message_type: cdktn.stringToTerraform(struct!.messageType),
    offset_millis: cdktn.numberToTerraform(struct!.offsetMillis),
    slate: mediatailorProgramAdBreaksSlateToTerraform(struct!.slate),
    splice_insert_message: mediatailorProgramAdBreaksSpliceInsertMessageToTerraform(struct!.spliceInsertMessage),
    time_signal_message: mediatailorProgramAdBreaksTimeSignalMessageToTerraform(struct!.timeSignalMessage),
  }
}


export function mediatailorProgramAdBreaksToHclTerraform(struct?: MediatailorProgramAdBreaks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_break_metadata: {
      value: cdktn.listMapperHcl(mediatailorProgramAdBreaksAdBreakMetadataToHclTerraform, false)(struct!.adBreakMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAdBreaksAdBreakMetadataList",
    },
    message_type: {
      value: cdktn.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.offsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slate: {
      value: mediatailorProgramAdBreaksSlateToHclTerraform(struct!.slate),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAdBreaksSlate",
    },
    splice_insert_message: {
      value: mediatailorProgramAdBreaksSpliceInsertMessageToHclTerraform(struct!.spliceInsertMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAdBreaksSpliceInsertMessage",
    },
    time_signal_message: {
      value: mediatailorProgramAdBreaksTimeSignalMessageToHclTerraform(struct!.timeSignalMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAdBreaksTimeSignalMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAdBreaksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAdBreaks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adBreakMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adBreakMetadata = this._adBreakMetadata?.internalValue;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._offsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetMillis = this._offsetMillis;
    }
    if (this._slate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slate = this._slate?.internalValue;
    }
    if (this._spliceInsertMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spliceInsertMessage = this._spliceInsertMessage?.internalValue;
    }
    if (this._timeSignalMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSignalMessage = this._timeSignalMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAdBreaks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adBreakMetadata.internalValue = undefined;
      this._messageType = undefined;
      this._offsetMillis = undefined;
      this._slate.internalValue = undefined;
      this._spliceInsertMessage.internalValue = undefined;
      this._timeSignalMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adBreakMetadata.internalValue = value.adBreakMetadata;
      this._messageType = value.messageType;
      this._offsetMillis = value.offsetMillis;
      this._slate.internalValue = value.slate;
      this._spliceInsertMessage.internalValue = value.spliceInsertMessage;
      this._timeSignalMessage.internalValue = value.timeSignalMessage;
    }
  }

  // ad_break_metadata - computed: true, optional: true, required: false
  private _adBreakMetadata = new MediatailorProgramAdBreaksAdBreakMetadataList(this, "ad_break_metadata", false);
  public get adBreakMetadata() {
    return this._adBreakMetadata;
  }
  public putAdBreakMetadata(value: MediatailorProgramAdBreaksAdBreakMetadata[] | cdktn.IResolvable) {
    this._adBreakMetadata.internalValue = value;
  }
  public resetAdBreakMetadata() {
    this._adBreakMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adBreakMetadataInput() {
    return this._adBreakMetadata.internalValue;
  }

  // message_type - computed: true, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // offset_millis - computed: true, optional: true, required: false
  private _offsetMillis?: number; 
  public get offsetMillis() {
    return this.getNumberAttribute('offset_millis');
  }
  public set offsetMillis(value: number) {
    this._offsetMillis = value;
  }
  public resetOffsetMillis() {
    this._offsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMillisInput() {
    return this._offsetMillis;
  }

  // slate - computed: true, optional: true, required: false
  private _slate = new MediatailorProgramAdBreaksSlateOutputReference(this, "slate");
  public get slate() {
    return this._slate;
  }
  public putSlate(value: MediatailorProgramAdBreaksSlate) {
    this._slate.internalValue = value;
  }
  public resetSlate() {
    this._slate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slateInput() {
    return this._slate.internalValue;
  }

  // splice_insert_message - computed: true, optional: true, required: false
  private _spliceInsertMessage = new MediatailorProgramAdBreaksSpliceInsertMessageOutputReference(this, "splice_insert_message");
  public get spliceInsertMessage() {
    return this._spliceInsertMessage;
  }
  public putSpliceInsertMessage(value: MediatailorProgramAdBreaksSpliceInsertMessage) {
    this._spliceInsertMessage.internalValue = value;
  }
  public resetSpliceInsertMessage() {
    this._spliceInsertMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spliceInsertMessageInput() {
    return this._spliceInsertMessage.internalValue;
  }

  // time_signal_message - computed: true, optional: true, required: false
  private _timeSignalMessage = new MediatailorProgramAdBreaksTimeSignalMessageOutputReference(this, "time_signal_message");
  public get timeSignalMessage() {
    return this._timeSignalMessage;
  }
  public putTimeSignalMessage(value: MediatailorProgramAdBreaksTimeSignalMessage) {
    this._timeSignalMessage.internalValue = value;
  }
  public resetTimeSignalMessage() {
    this._timeSignalMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSignalMessageInput() {
    return this._timeSignalMessage.internalValue;
  }
}

export class MediatailorProgramAdBreaksList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAdBreaks[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAdBreaksOutputReference {
    return new MediatailorProgramAdBreaksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata {
  /**
  * The key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}
  */
  readonly key?: string;
  /**
  * The value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}
  */
  readonly value?: string;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | cdktn.IResolvable): any {
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

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | cdktn.IResolvable | undefined) {
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

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference {
    return new MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate {
  /**
  * The name of the source location where the slate VOD source is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}
  */
  readonly sourceLocationName?: string;
  /**
  * The slate VOD source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}
  */
  readonly vodSourceName?: string;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
    vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_location_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_source_name: {
      value: cdktn.stringToHclTerraform(struct!.vodSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocationName = this._sourceLocationName;
    }
    if (this._vodSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSourceName = this._vodSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceLocationName = undefined;
      this._vodSourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceLocationName = value.sourceLocationName;
      this._vodSourceName = value.vodSourceName;
    }
  }

  // source_location_name - computed: true, optional: true, required: false
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  public resetSourceLocationName() {
    this._sourceLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // vod_source_name - computed: true, optional: true, required: false
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  public resetVodSourceName() {
    this._vodSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage {
  /**
  * This is written to splice_insert.avail_num.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}
  */
  readonly availNum?: number;
  /**
  * This is written to splice_insert.avails_expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}
  */
  readonly availsExpected?: number;
  /**
  * This is written to splice_insert.splice_event_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}
  */
  readonly spliceEventId?: number;
  /**
  * This is written to splice_insert.unique_program_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}
  */
  readonly uniqueProgramId?: number;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avail_num: cdktn.numberToTerraform(struct!.availNum),
    avails_expected: cdktn.numberToTerraform(struct!.availsExpected),
    splice_event_id: cdktn.numberToTerraform(struct!.spliceEventId),
    unique_program_id: cdktn.numberToTerraform(struct!.uniqueProgramId),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avail_num: {
      value: cdktn.numberToHclTerraform(struct!.availNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avails_expected: {
      value: cdktn.numberToHclTerraform(struct!.availsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    splice_event_id: {
      value: cdktn.numberToHclTerraform(struct!.spliceEventId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unique_program_id: {
      value: cdktn.numberToHclTerraform(struct!.uniqueProgramId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.availNum = this._availNum;
    }
    if (this._availsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.availsExpected = this._availsExpected;
    }
    if (this._spliceEventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spliceEventId = this._spliceEventId;
    }
    if (this._uniqueProgramId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueProgramId = this._uniqueProgramId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availNum = undefined;
      this._availsExpected = undefined;
      this._spliceEventId = undefined;
      this._uniqueProgramId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availNum = value.availNum;
      this._availsExpected = value.availsExpected;
      this._spliceEventId = value.spliceEventId;
      this._uniqueProgramId = value.uniqueProgramId;
    }
  }

  // avail_num - computed: true, optional: true, required: false
  private _availNum?: number; 
  public get availNum() {
    return this.getNumberAttribute('avail_num');
  }
  public set availNum(value: number) {
    this._availNum = value;
  }
  public resetAvailNum() {
    this._availNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availNumInput() {
    return this._availNum;
  }

  // avails_expected - computed: true, optional: true, required: false
  private _availsExpected?: number; 
  public get availsExpected() {
    return this.getNumberAttribute('avails_expected');
  }
  public set availsExpected(value: number) {
    this._availsExpected = value;
  }
  public resetAvailsExpected() {
    this._availsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availsExpectedInput() {
    return this._availsExpected;
  }

  // splice_event_id - computed: true, optional: true, required: false
  private _spliceEventId?: number; 
  public get spliceEventId() {
    return this.getNumberAttribute('splice_event_id');
  }
  public set spliceEventId(value: number) {
    this._spliceEventId = value;
  }
  public resetSpliceEventId() {
    this._spliceEventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spliceEventIdInput() {
    return this._spliceEventId;
  }

  // unique_program_id - computed: true, optional: true, required: false
  private _uniqueProgramId?: number; 
  public get uniqueProgramId() {
    return this.getNumberAttribute('unique_program_id');
  }
  public set uniqueProgramId(value: number) {
    this._uniqueProgramId = value;
  }
  public resetUniqueProgramId() {
    this._uniqueProgramId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueProgramIdInput() {
    return this._uniqueProgramId;
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors {
  /**
  * The segment number to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}
  */
  readonly segmentNum?: number;
  /**
  * The Event Identifier to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}
  */
  readonly segmentationEventId?: number;
  /**
  * The Type Identifier to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}
  */
  readonly segmentationTypeId?: number;
  /**
  * The Upid to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}
  */
  readonly segmentationUpid?: string;
  /**
  * The Upid Type to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}
  */
  readonly segmentationUpidType?: number;
  /**
  * The number of segments expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}
  */
  readonly segmentsExpected?: number;
  /**
  * The sub-segment number to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}
  */
  readonly subSegmentNum?: number;
  /**
  * The number of sub-segments expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}
  */
  readonly subSegmentsExpected?: number;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segment_num: cdktn.numberToTerraform(struct!.segmentNum),
    segmentation_event_id: cdktn.numberToTerraform(struct!.segmentationEventId),
    segmentation_type_id: cdktn.numberToTerraform(struct!.segmentationTypeId),
    segmentation_upid: cdktn.stringToTerraform(struct!.segmentationUpid),
    segmentation_upid_type: cdktn.numberToTerraform(struct!.segmentationUpidType),
    segments_expected: cdktn.numberToTerraform(struct!.segmentsExpected),
    sub_segment_num: cdktn.numberToTerraform(struct!.subSegmentNum),
    sub_segments_expected: cdktn.numberToTerraform(struct!.subSegmentsExpected),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segment_num: {
      value: cdktn.numberToHclTerraform(struct!.segmentNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_event_id: {
      value: cdktn.numberToHclTerraform(struct!.segmentationEventId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_type_id: {
      value: cdktn.numberToHclTerraform(struct!.segmentationTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segmentation_upid: {
      value: cdktn.stringToHclTerraform(struct!.segmentationUpid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segmentation_upid_type: {
      value: cdktn.numberToHclTerraform(struct!.segmentationUpidType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segments_expected: {
      value: cdktn.numberToHclTerraform(struct!.segmentsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_segment_num: {
      value: cdktn.numberToHclTerraform(struct!.subSegmentNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_segments_expected: {
      value: cdktn.numberToHclTerraform(struct!.subSegmentsExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNum = this._segmentNum;
    }
    if (this._segmentationEventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationEventId = this._segmentationEventId;
    }
    if (this._segmentationTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationTypeId = this._segmentationTypeId;
    }
    if (this._segmentationUpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationUpid = this._segmentationUpid;
    }
    if (this._segmentationUpidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationUpidType = this._segmentationUpidType;
    }
    if (this._segmentsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentsExpected = this._segmentsExpected;
    }
    if (this._subSegmentNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSegmentNum = this._subSegmentNum;
    }
    if (this._subSegmentsExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSegmentsExpected = this._subSegmentsExpected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentNum = undefined;
      this._segmentationEventId = undefined;
      this._segmentationTypeId = undefined;
      this._segmentationUpid = undefined;
      this._segmentationUpidType = undefined;
      this._segmentsExpected = undefined;
      this._subSegmentNum = undefined;
      this._subSegmentsExpected = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentNum = value.segmentNum;
      this._segmentationEventId = value.segmentationEventId;
      this._segmentationTypeId = value.segmentationTypeId;
      this._segmentationUpid = value.segmentationUpid;
      this._segmentationUpidType = value.segmentationUpidType;
      this._segmentsExpected = value.segmentsExpected;
      this._subSegmentNum = value.subSegmentNum;
      this._subSegmentsExpected = value.subSegmentsExpected;
    }
  }

  // segment_num - computed: true, optional: true, required: false
  private _segmentNum?: number; 
  public get segmentNum() {
    return this.getNumberAttribute('segment_num');
  }
  public set segmentNum(value: number) {
    this._segmentNum = value;
  }
  public resetSegmentNum() {
    this._segmentNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNumInput() {
    return this._segmentNum;
  }

  // segmentation_event_id - computed: true, optional: true, required: false
  private _segmentationEventId?: number; 
  public get segmentationEventId() {
    return this.getNumberAttribute('segmentation_event_id');
  }
  public set segmentationEventId(value: number) {
    this._segmentationEventId = value;
  }
  public resetSegmentationEventId() {
    this._segmentationEventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationEventIdInput() {
    return this._segmentationEventId;
  }

  // segmentation_type_id - computed: true, optional: true, required: false
  private _segmentationTypeId?: number; 
  public get segmentationTypeId() {
    return this.getNumberAttribute('segmentation_type_id');
  }
  public set segmentationTypeId(value: number) {
    this._segmentationTypeId = value;
  }
  public resetSegmentationTypeId() {
    this._segmentationTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationTypeIdInput() {
    return this._segmentationTypeId;
  }

  // segmentation_upid - computed: true, optional: true, required: false
  private _segmentationUpid?: string; 
  public get segmentationUpid() {
    return this.getStringAttribute('segmentation_upid');
  }
  public set segmentationUpid(value: string) {
    this._segmentationUpid = value;
  }
  public resetSegmentationUpid() {
    this._segmentationUpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationUpidInput() {
    return this._segmentationUpid;
  }

  // segmentation_upid_type - computed: true, optional: true, required: false
  private _segmentationUpidType?: number; 
  public get segmentationUpidType() {
    return this.getNumberAttribute('segmentation_upid_type');
  }
  public set segmentationUpidType(value: number) {
    this._segmentationUpidType = value;
  }
  public resetSegmentationUpidType() {
    this._segmentationUpidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationUpidTypeInput() {
    return this._segmentationUpidType;
  }

  // segments_expected - computed: true, optional: true, required: false
  private _segmentsExpected?: number; 
  public get segmentsExpected() {
    return this.getNumberAttribute('segments_expected');
  }
  public set segmentsExpected(value: number) {
    this._segmentsExpected = value;
  }
  public resetSegmentsExpected() {
    this._segmentsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsExpectedInput() {
    return this._segmentsExpected;
  }

  // sub_segment_num - computed: true, optional: true, required: false
  private _subSegmentNum?: number; 
  public get subSegmentNum() {
    return this.getNumberAttribute('sub_segment_num');
  }
  public set subSegmentNum(value: number) {
    this._subSegmentNum = value;
  }
  public resetSubSegmentNum() {
    this._subSegmentNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSegmentNumInput() {
    return this._subSegmentNum;
  }

  // sub_segments_expected - computed: true, optional: true, required: false
  private _subSegmentsExpected?: number; 
  public get subSegmentsExpected() {
    return this.getNumberAttribute('sub_segments_expected');
  }
  public set subSegmentsExpected(value: number) {
    this._subSegmentsExpected = value;
  }
  public resetSubSegmentsExpected() {
    this._subSegmentsExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSegmentsExpectedInput() {
    return this._subSegmentsExpected;
  }
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference {
    return new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage {
  /**
  * The configurations for the SCTE-35 segmentation_descriptor message(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}
  */
  readonly segmentationDescriptors?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    segmentation_descriptors: cdktn.listMapper(mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform, false)(struct!.segmentationDescriptors),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    segmentation_descriptors: {
      value: cdktn.listMapperHcl(mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform, false)(struct!.segmentationDescriptors),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentationDescriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationDescriptors = this._segmentationDescriptors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentationDescriptors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentationDescriptors.internalValue = value.segmentationDescriptors;
    }
  }

  // segmentation_descriptors - computed: true, optional: true, required: false
  private _segmentationDescriptors = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(this, "segmentation_descriptors", false);
  public get segmentationDescriptors() {
    return this._segmentationDescriptors;
  }
  public putSegmentationDescriptors(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors[] | cdktn.IResolvable) {
    this._segmentationDescriptors.internalValue = value;
  }
  public resetSegmentationDescriptors() {
    this._segmentationDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationDescriptorsInput() {
    return this._segmentationDescriptors.internalValue;
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaAdBreaks {
  /**
  * Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}
  */
  readonly adBreakMetadata?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[] | cdktn.IResolvable;
  /**
  * The SCTE-35 ad insertion type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}
  */
  readonly messageType?: string;
  /**
  * How long (in milliseconds) after the beginning of the program that an ad starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}
  */
  readonly offsetMillis?: number;
  /**
  * Slate VOD source configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}
  */
  readonly slate?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate;
  /**
  * Splice insert message configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}
  */
  readonly spliceInsertMessage?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage;
  /**
  * The SCTE-35 time_signal message configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}
  */
  readonly timeSignalMessage?: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage;
}

export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_break_metadata: cdktn.listMapper(mediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToTerraform, false)(struct!.adBreakMetadata),
    message_type: cdktn.stringToTerraform(struct!.messageType),
    offset_millis: cdktn.numberToTerraform(struct!.offsetMillis),
    slate: mediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToTerraform(struct!.slate),
    splice_insert_message: mediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToTerraform(struct!.spliceInsertMessage),
    time_signal_message: mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToTerraform(struct!.timeSignalMessage),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaAdBreaksToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaAdBreaks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_break_metadata: {
      value: cdktn.listMapperHcl(mediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToHclTerraform, false)(struct!.adBreakMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList",
    },
    message_type: {
      value: cdktn.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.offsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slate: {
      value: mediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToHclTerraform(struct!.slate),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate",
    },
    splice_insert_message: {
      value: mediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToHclTerraform(struct!.spliceInsertMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage",
    },
    time_signal_message: {
      value: mediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToHclTerraform(struct!.timeSignalMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaAdBreaks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adBreakMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adBreakMetadata = this._adBreakMetadata?.internalValue;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._offsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetMillis = this._offsetMillis;
    }
    if (this._slate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slate = this._slate?.internalValue;
    }
    if (this._spliceInsertMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spliceInsertMessage = this._spliceInsertMessage?.internalValue;
    }
    if (this._timeSignalMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSignalMessage = this._timeSignalMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adBreakMetadata.internalValue = undefined;
      this._messageType = undefined;
      this._offsetMillis = undefined;
      this._slate.internalValue = undefined;
      this._spliceInsertMessage.internalValue = undefined;
      this._timeSignalMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adBreakMetadata.internalValue = value.adBreakMetadata;
      this._messageType = value.messageType;
      this._offsetMillis = value.offsetMillis;
      this._slate.internalValue = value.slate;
      this._spliceInsertMessage.internalValue = value.spliceInsertMessage;
      this._timeSignalMessage.internalValue = value.timeSignalMessage;
    }
  }

  // ad_break_metadata - computed: true, optional: true, required: false
  private _adBreakMetadata = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(this, "ad_break_metadata", false);
  public get adBreakMetadata() {
    return this._adBreakMetadata;
  }
  public putAdBreakMetadata(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata[] | cdktn.IResolvable) {
    this._adBreakMetadata.internalValue = value;
  }
  public resetAdBreakMetadata() {
    this._adBreakMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adBreakMetadataInput() {
    return this._adBreakMetadata.internalValue;
  }

  // message_type - computed: true, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // offset_millis - computed: true, optional: true, required: false
  private _offsetMillis?: number; 
  public get offsetMillis() {
    return this.getNumberAttribute('offset_millis');
  }
  public set offsetMillis(value: number) {
    this._offsetMillis = value;
  }
  public resetOffsetMillis() {
    this._offsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMillisInput() {
    return this._offsetMillis;
  }

  // slate - computed: true, optional: true, required: false
  private _slate = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(this, "slate");
  public get slate() {
    return this._slate;
  }
  public putSlate(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate) {
    this._slate.internalValue = value;
  }
  public resetSlate() {
    this._slate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slateInput() {
    return this._slate.internalValue;
  }

  // splice_insert_message - computed: true, optional: true, required: false
  private _spliceInsertMessage = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(this, "splice_insert_message");
  public get spliceInsertMessage() {
    return this._spliceInsertMessage;
  }
  public putSpliceInsertMessage(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage) {
    this._spliceInsertMessage.internalValue = value;
  }
  public resetSpliceInsertMessage() {
    this._spliceInsertMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spliceInsertMessageInput() {
    return this._spliceInsertMessage.internalValue;
  }

  // time_signal_message - computed: true, optional: true, required: false
  private _timeSignalMessage = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(this, "time_signal_message");
  public get timeSignalMessage() {
    return this._timeSignalMessage;
  }
  public putTimeSignalMessage(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage) {
    this._timeSignalMessage.internalValue = value;
  }
  public resetTimeSignalMessage() {
    this._timeSignalMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSignalMessageInput() {
    return this._timeSignalMessage.internalValue;
  }
}

export class MediatailorProgramAudienceMediaAlternateMediaAdBreaksList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAudienceMediaAlternateMediaAdBreaks[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference {
    return new MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAudienceMediaAlternateMediaClipRange {
  /**
  * The end offset of the clip range, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}
  */
  readonly endOffsetMillis?: number;
  /**
  * The start offset of the clip range, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}
  */
  readonly startOffsetMillis?: number;
}

export function mediatailorProgramAudienceMediaAlternateMediaClipRangeToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaClipRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_offset_millis: cdktn.numberToTerraform(struct!.endOffsetMillis),
    start_offset_millis: cdktn.numberToTerraform(struct!.startOffsetMillis),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaClipRangeToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMediaClipRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.endOffsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.startOffsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMediaClipRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffsetMillis = this._endOffsetMillis;
    }
    if (this._startOffsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffsetMillis = this._startOffsetMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMediaClipRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endOffsetMillis = undefined;
      this._startOffsetMillis = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endOffsetMillis = value.endOffsetMillis;
      this._startOffsetMillis = value.startOffsetMillis;
    }
  }

  // end_offset_millis - computed: true, optional: true, required: false
  private _endOffsetMillis?: number; 
  public get endOffsetMillis() {
    return this.getNumberAttribute('end_offset_millis');
  }
  public set endOffsetMillis(value: number) {
    this._endOffsetMillis = value;
  }
  public resetEndOffsetMillis() {
    this._endOffsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetMillisInput() {
    return this._endOffsetMillis;
  }

  // start_offset_millis - computed: true, optional: true, required: false
  private _startOffsetMillis?: number; 
  public get startOffsetMillis() {
    return this.getNumberAttribute('start_offset_millis');
  }
  public set startOffsetMillis(value: number) {
    this._startOffsetMillis = value;
  }
  public resetStartOffsetMillis() {
    this._startOffsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetMillisInput() {
    return this._startOffsetMillis;
  }
}
export interface MediatailorProgramAudienceMediaAlternateMedia {
  /**
  * Ad break configuration parameters defined in AlternateMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}
  */
  readonly adBreaks?: MediatailorProgramAudienceMediaAlternateMediaAdBreaks[] | cdktn.IResolvable;
  /**
  * Clip range configuration for the VOD source associated with the program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}
  */
  readonly clipRange?: MediatailorProgramAudienceMediaAlternateMediaClipRange;
  /**
  * The duration of the alternateMedia in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}
  */
  readonly durationMillis?: number;
  /**
  * The name of the live source for alternateMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}
  */
  readonly liveSourceName?: string;
  /**
  * The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}
  */
  readonly scheduledStartTimeMillis?: number;
  /**
  * The name of the source location for alternateMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}
  */
  readonly sourceLocationName?: string;
  /**
  * The name of the VOD source for alternateMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}
  */
  readonly vodSourceName?: string;
}

export function mediatailorProgramAudienceMediaAlternateMediaToTerraform(struct?: MediatailorProgramAudienceMediaAlternateMedia | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_breaks: cdktn.listMapper(mediatailorProgramAudienceMediaAlternateMediaAdBreaksToTerraform, false)(struct!.adBreaks),
    clip_range: mediatailorProgramAudienceMediaAlternateMediaClipRangeToTerraform(struct!.clipRange),
    duration_millis: cdktn.numberToTerraform(struct!.durationMillis),
    live_source_name: cdktn.stringToTerraform(struct!.liveSourceName),
    scheduled_start_time_millis: cdktn.numberToTerraform(struct!.scheduledStartTimeMillis),
    source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
    vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
  }
}


export function mediatailorProgramAudienceMediaAlternateMediaToHclTerraform(struct?: MediatailorProgramAudienceMediaAlternateMedia | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_breaks: {
      value: cdktn.listMapperHcl(mediatailorProgramAudienceMediaAlternateMediaAdBreaksToHclTerraform, false)(struct!.adBreaks),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaAdBreaksList",
    },
    clip_range: {
      value: mediatailorProgramAudienceMediaAlternateMediaClipRangeToHclTerraform(struct!.clipRange),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaClipRange",
    },
    duration_millis: {
      value: cdktn.numberToHclTerraform(struct!.durationMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    live_source_name: {
      value: cdktn.stringToHclTerraform(struct!.liveSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time_millis: {
      value: cdktn.numberToHclTerraform(struct!.scheduledStartTimeMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_location_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_source_name: {
      value: cdktn.stringToHclTerraform(struct!.vodSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaAlternateMediaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAudienceMediaAlternateMedia | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adBreaks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adBreaks = this._adBreaks?.internalValue;
    }
    if (this._clipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipRange = this._clipRange?.internalValue;
    }
    if (this._durationMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMillis = this._durationMillis;
    }
    if (this._liveSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSourceName = this._liveSourceName;
    }
    if (this._scheduledStartTimeMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTimeMillis = this._scheduledStartTimeMillis;
    }
    if (this._sourceLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocationName = this._sourceLocationName;
    }
    if (this._vodSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSourceName = this._vodSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMediaAlternateMedia | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adBreaks.internalValue = undefined;
      this._clipRange.internalValue = undefined;
      this._durationMillis = undefined;
      this._liveSourceName = undefined;
      this._scheduledStartTimeMillis = undefined;
      this._sourceLocationName = undefined;
      this._vodSourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adBreaks.internalValue = value.adBreaks;
      this._clipRange.internalValue = value.clipRange;
      this._durationMillis = value.durationMillis;
      this._liveSourceName = value.liveSourceName;
      this._scheduledStartTimeMillis = value.scheduledStartTimeMillis;
      this._sourceLocationName = value.sourceLocationName;
      this._vodSourceName = value.vodSourceName;
    }
  }

  // ad_breaks - computed: true, optional: true, required: false
  private _adBreaks = new MediatailorProgramAudienceMediaAlternateMediaAdBreaksList(this, "ad_breaks", false);
  public get adBreaks() {
    return this._adBreaks;
  }
  public putAdBreaks(value: MediatailorProgramAudienceMediaAlternateMediaAdBreaks[] | cdktn.IResolvable) {
    this._adBreaks.internalValue = value;
  }
  public resetAdBreaks() {
    this._adBreaks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adBreaksInput() {
    return this._adBreaks.internalValue;
  }

  // clip_range - computed: true, optional: true, required: false
  private _clipRange = new MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(this, "clip_range");
  public get clipRange() {
    return this._clipRange;
  }
  public putClipRange(value: MediatailorProgramAudienceMediaAlternateMediaClipRange) {
    this._clipRange.internalValue = value;
  }
  public resetClipRange() {
    this._clipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipRangeInput() {
    return this._clipRange.internalValue;
  }

  // duration_millis - computed: true, optional: true, required: false
  private _durationMillis?: number; 
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }
  public set durationMillis(value: number) {
    this._durationMillis = value;
  }
  public resetDurationMillis() {
    this._durationMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationMillisInput() {
    return this._durationMillis;
  }

  // live_source_name - computed: true, optional: true, required: false
  private _liveSourceName?: string; 
  public get liveSourceName() {
    return this.getStringAttribute('live_source_name');
  }
  public set liveSourceName(value: string) {
    this._liveSourceName = value;
  }
  public resetLiveSourceName() {
    this._liveSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSourceNameInput() {
    return this._liveSourceName;
  }

  // scheduled_start_time_millis - computed: true, optional: true, required: false
  private _scheduledStartTimeMillis?: number; 
  public get scheduledStartTimeMillis() {
    return this.getNumberAttribute('scheduled_start_time_millis');
  }
  public set scheduledStartTimeMillis(value: number) {
    this._scheduledStartTimeMillis = value;
  }
  public resetScheduledStartTimeMillis() {
    this._scheduledStartTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeMillisInput() {
    return this._scheduledStartTimeMillis;
  }

  // source_location_name - computed: true, optional: true, required: false
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  public resetSourceLocationName() {
    this._sourceLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // vod_source_name - computed: true, optional: true, required: false
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  public resetVodSourceName() {
    this._vodSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }
}

export class MediatailorProgramAudienceMediaAlternateMediaList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAudienceMediaAlternateMedia[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAudienceMediaAlternateMediaOutputReference {
    return new MediatailorProgramAudienceMediaAlternateMediaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramAudienceMedia {
  /**
  * The list of AlternateMedia defined in AudienceMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#alternate_media MediatailorProgram#alternate_media}
  */
  readonly alternateMedia?: MediatailorProgramAudienceMediaAlternateMedia[] | cdktn.IResolvable;
  /**
  * The Audience defined in AudienceMedia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience MediatailorProgram#audience}
  */
  readonly audience?: string;
}

export function mediatailorProgramAudienceMediaToTerraform(struct?: MediatailorProgramAudienceMedia | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_media: cdktn.listMapper(mediatailorProgramAudienceMediaAlternateMediaToTerraform, false)(struct!.alternateMedia),
    audience: cdktn.stringToTerraform(struct!.audience),
  }
}


export function mediatailorProgramAudienceMediaToHclTerraform(struct?: MediatailorProgramAudienceMedia | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_media: {
      value: cdktn.listMapperHcl(mediatailorProgramAudienceMediaAlternateMediaToHclTerraform, false)(struct!.alternateMedia),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorProgramAudienceMediaAlternateMediaList",
    },
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramAudienceMediaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorProgramAudienceMedia | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateMedia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateMedia = this._alternateMedia?.internalValue;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramAudienceMedia | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateMedia.internalValue = undefined;
      this._audience = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateMedia.internalValue = value.alternateMedia;
      this._audience = value.audience;
    }
  }

  // alternate_media - computed: true, optional: true, required: false
  private _alternateMedia = new MediatailorProgramAudienceMediaAlternateMediaList(this, "alternate_media", false);
  public get alternateMedia() {
    return this._alternateMedia;
  }
  public putAlternateMedia(value: MediatailorProgramAudienceMediaAlternateMedia[] | cdktn.IResolvable) {
    this._alternateMedia.internalValue = value;
  }
  public resetAlternateMedia() {
    this._alternateMedia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateMediaInput() {
    return this._alternateMedia.internalValue;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }
}

export class MediatailorProgramAudienceMediaList extends cdktn.ComplexList {
  public internalValue? : MediatailorProgramAudienceMedia[] | cdktn.IResolvable

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
  public get(index: number): MediatailorProgramAudienceMediaOutputReference {
    return new MediatailorProgramAudienceMediaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorProgramClipRange {
}

export function mediatailorProgramClipRangeToTerraform(struct?: MediatailorProgramClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mediatailorProgramClipRangeToHclTerraform(struct?: MediatailorProgramClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MediatailorProgramClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramClipRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramClipRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_offset_millis - computed: true, optional: false, required: false
  public get endOffsetMillis() {
    return this.getNumberAttribute('end_offset_millis');
  }

  // start_offset_millis - computed: true, optional: false, required: false
  public get startOffsetMillis() {
    return this.getNumberAttribute('start_offset_millis');
  }
}
export interface MediatailorProgramScheduleConfigurationClipRange {
  /**
  * The end offset of the clip range, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}
  */
  readonly endOffsetMillis?: number;
  /**
  * The start offset of the clip range, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}
  */
  readonly startOffsetMillis?: number;
}

export function mediatailorProgramScheduleConfigurationClipRangeToTerraform(struct?: MediatailorProgramScheduleConfigurationClipRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_offset_millis: cdktn.numberToTerraform(struct!.endOffsetMillis),
    start_offset_millis: cdktn.numberToTerraform(struct!.startOffsetMillis),
  }
}


export function mediatailorProgramScheduleConfigurationClipRangeToHclTerraform(struct?: MediatailorProgramScheduleConfigurationClipRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.endOffsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_offset_millis: {
      value: cdktn.numberToHclTerraform(struct!.startOffsetMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramScheduleConfigurationClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramScheduleConfigurationClipRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffsetMillis = this._endOffsetMillis;
    }
    if (this._startOffsetMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffsetMillis = this._startOffsetMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramScheduleConfigurationClipRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endOffsetMillis = undefined;
      this._startOffsetMillis = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endOffsetMillis = value.endOffsetMillis;
      this._startOffsetMillis = value.startOffsetMillis;
    }
  }

  // end_offset_millis - computed: true, optional: true, required: false
  private _endOffsetMillis?: number; 
  public get endOffsetMillis() {
    return this.getNumberAttribute('end_offset_millis');
  }
  public set endOffsetMillis(value: number) {
    this._endOffsetMillis = value;
  }
  public resetEndOffsetMillis() {
    this._endOffsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetMillisInput() {
    return this._endOffsetMillis;
  }

  // start_offset_millis - computed: true, optional: true, required: false
  private _startOffsetMillis?: number; 
  public get startOffsetMillis() {
    return this.getNumberAttribute('start_offset_millis');
  }
  public set startOffsetMillis(value: number) {
    this._startOffsetMillis = value;
  }
  public resetStartOffsetMillis() {
    this._startOffsetMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetMillisInput() {
    return this._startOffsetMillis;
  }
}
export interface MediatailorProgramScheduleConfigurationTransition {
  /**
  * The duration of the live program in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}
  */
  readonly durationMillis?: number;
  /**
  * The position where this program will be inserted relative to the RelativePosition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}
  */
  readonly relativePosition?: string;
  /**
  * The name of the program that this program will be inserted next to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}
  */
  readonly relativeProgram?: string;
  /**
  * The date and time that the program is scheduled to start, in epoch milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}
  */
  readonly scheduledStartTimeMillis?: number;
  /**
  * Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#type MediatailorProgram#type}
  */
  readonly type?: string;
}

export function mediatailorProgramScheduleConfigurationTransitionToTerraform(struct?: MediatailorProgramScheduleConfigurationTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_millis: cdktn.numberToTerraform(struct!.durationMillis),
    relative_position: cdktn.stringToTerraform(struct!.relativePosition),
    relative_program: cdktn.stringToTerraform(struct!.relativeProgram),
    scheduled_start_time_millis: cdktn.numberToTerraform(struct!.scheduledStartTimeMillis),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function mediatailorProgramScheduleConfigurationTransitionToHclTerraform(struct?: MediatailorProgramScheduleConfigurationTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_millis: {
      value: cdktn.numberToHclTerraform(struct!.durationMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relative_position: {
      value: cdktn.stringToHclTerraform(struct!.relativePosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_program: {
      value: cdktn.stringToHclTerraform(struct!.relativeProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time_millis: {
      value: cdktn.numberToHclTerraform(struct!.scheduledStartTimeMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramScheduleConfigurationTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramScheduleConfigurationTransition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationMillis = this._durationMillis;
    }
    if (this._relativePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePosition = this._relativePosition;
    }
    if (this._relativeProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeProgram = this._relativeProgram;
    }
    if (this._scheduledStartTimeMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTimeMillis = this._scheduledStartTimeMillis;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramScheduleConfigurationTransition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationMillis = undefined;
      this._relativePosition = undefined;
      this._relativeProgram = undefined;
      this._scheduledStartTimeMillis = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationMillis = value.durationMillis;
      this._relativePosition = value.relativePosition;
      this._relativeProgram = value.relativeProgram;
      this._scheduledStartTimeMillis = value.scheduledStartTimeMillis;
      this._type = value.type;
    }
  }

  // duration_millis - computed: true, optional: true, required: false
  private _durationMillis?: number; 
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }
  public set durationMillis(value: number) {
    this._durationMillis = value;
  }
  public resetDurationMillis() {
    this._durationMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationMillisInput() {
    return this._durationMillis;
  }

  // relative_position - computed: true, optional: true, required: false
  private _relativePosition?: string; 
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
  public set relativePosition(value: string) {
    this._relativePosition = value;
  }
  public resetRelativePosition() {
    this._relativePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition;
  }

  // relative_program - computed: true, optional: true, required: false
  private _relativeProgram?: string; 
  public get relativeProgram() {
    return this.getStringAttribute('relative_program');
  }
  public set relativeProgram(value: string) {
    this._relativeProgram = value;
  }
  public resetRelativeProgram() {
    this._relativeProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeProgramInput() {
    return this._relativeProgram;
  }

  // scheduled_start_time_millis - computed: true, optional: true, required: false
  private _scheduledStartTimeMillis?: number; 
  public get scheduledStartTimeMillis() {
    return this.getNumberAttribute('scheduled_start_time_millis');
  }
  public set scheduledStartTimeMillis(value: number) {
    this._scheduledStartTimeMillis = value;
  }
  public resetScheduledStartTimeMillis() {
    this._scheduledStartTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeMillisInput() {
    return this._scheduledStartTimeMillis;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MediatailorProgramScheduleConfiguration {
  /**
  * Clip range configuration for the VOD source associated with the program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}
  */
  readonly clipRange?: MediatailorProgramScheduleConfigurationClipRange;
  /**
  * Program transition configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}
  */
  readonly transition?: MediatailorProgramScheduleConfigurationTransition;
}

export function mediatailorProgramScheduleConfigurationToTerraform(struct?: MediatailorProgramScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clip_range: mediatailorProgramScheduleConfigurationClipRangeToTerraform(struct!.clipRange),
    transition: mediatailorProgramScheduleConfigurationTransitionToTerraform(struct!.transition),
  }
}


export function mediatailorProgramScheduleConfigurationToHclTerraform(struct?: MediatailorProgramScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clip_range: {
      value: mediatailorProgramScheduleConfigurationClipRangeToHclTerraform(struct!.clipRange),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramScheduleConfigurationClipRange",
    },
    transition: {
      value: mediatailorProgramScheduleConfigurationTransitionToHclTerraform(struct!.transition),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorProgramScheduleConfigurationTransition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorProgramScheduleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorProgramScheduleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipRange = this._clipRange?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorProgramScheduleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clipRange.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clipRange.internalValue = value.clipRange;
      this._transition.internalValue = value.transition;
    }
  }

  // clip_range - computed: true, optional: true, required: false
  private _clipRange = new MediatailorProgramScheduleConfigurationClipRangeOutputReference(this, "clip_range");
  public get clipRange() {
    return this._clipRange;
  }
  public putClipRange(value: MediatailorProgramScheduleConfigurationClipRange) {
    this._clipRange.internalValue = value;
  }
  public resetClipRange() {
    this._clipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipRangeInput() {
    return this._clipRange.internalValue;
  }

  // transition - computed: true, optional: true, required: false
  private _transition = new MediatailorProgramScheduleConfigurationTransitionOutputReference(this, "transition");
  public get transition() {
    return this._transition;
  }
  public putTransition(value: MediatailorProgramScheduleConfigurationTransition) {
    this._transition.internalValue = value;
  }
  public resetTransition() {
    this._transition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program awscc_mediatailor_program}
*/
export class MediatailorProgram extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_program";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediatailorProgram to import
  * @param importFromId The id of the existing MediatailorProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediatailorProgram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_program", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program awscc_mediatailor_program} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediatailorProgramConfig
  */
  public constructor(scope: Construct, id: string, config: MediatailorProgramConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediatailor_program',
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
    this._adBreaks.internalValue = config.adBreaks;
    this._audienceMedia.internalValue = config.audienceMedia;
    this._channelName = config.channelName;
    this._liveSourceName = config.liveSourceName;
    this._programName = config.programName;
    this._scheduleConfiguration.internalValue = config.scheduleConfiguration;
    this._sourceLocationName = config.sourceLocationName;
    this._vodSourceName = config.vodSourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_breaks - computed: true, optional: true, required: false
  private _adBreaks = new MediatailorProgramAdBreaksList(this, "ad_breaks", false);
  public get adBreaks() {
    return this._adBreaks;
  }
  public putAdBreaks(value: MediatailorProgramAdBreaks[] | cdktn.IResolvable) {
    this._adBreaks.internalValue = value;
  }
  public resetAdBreaks() {
    this._adBreaks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adBreaksInput() {
    return this._adBreaks.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audience_media - computed: true, optional: true, required: false
  private _audienceMedia = new MediatailorProgramAudienceMediaList(this, "audience_media", false);
  public get audienceMedia() {
    return this._audienceMedia;
  }
  public putAudienceMedia(value: MediatailorProgramAudienceMedia[] | cdktn.IResolvable) {
    this._audienceMedia.internalValue = value;
  }
  public resetAudienceMedia() {
    this._audienceMedia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceMediaInput() {
    return this._audienceMedia.internalValue;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // clip_range - computed: true, optional: false, required: false
  private _clipRange = new MediatailorProgramClipRangeOutputReference(this, "clip_range");
  public get clipRange() {
    return this._clipRange;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // duration_millis - computed: true, optional: false, required: false
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // live_source_name - computed: true, optional: true, required: false
  private _liveSourceName?: string; 
  public get liveSourceName() {
    return this.getStringAttribute('live_source_name');
  }
  public set liveSourceName(value: string) {
    this._liveSourceName = value;
  }
  public resetLiveSourceName() {
    this._liveSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSourceNameInput() {
    return this._liveSourceName;
  }

  // program_name - computed: false, optional: false, required: true
  private _programName?: string; 
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
  }

  // schedule_configuration - computed: true, optional: true, required: false
  private _scheduleConfiguration = new MediatailorProgramScheduleConfigurationOutputReference(this, "schedule_configuration");
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }
  public putScheduleConfiguration(value: MediatailorProgramScheduleConfiguration) {
    this._scheduleConfiguration.internalValue = value;
  }
  public resetScheduleConfiguration() {
    this._scheduleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigurationInput() {
    return this._scheduleConfiguration.internalValue;
  }

  // scheduled_start_time - computed: true, optional: false, required: false
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }

  // source_location_name - computed: false, optional: false, required: true
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // vod_source_name - computed: true, optional: true, required: false
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  public resetVodSourceName() {
    this._vodSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_breaks: cdktn.listMapper(mediatailorProgramAdBreaksToTerraform, false)(this._adBreaks.internalValue),
      audience_media: cdktn.listMapper(mediatailorProgramAudienceMediaToTerraform, false)(this._audienceMedia.internalValue),
      channel_name: cdktn.stringToTerraform(this._channelName),
      live_source_name: cdktn.stringToTerraform(this._liveSourceName),
      program_name: cdktn.stringToTerraform(this._programName),
      schedule_configuration: mediatailorProgramScheduleConfigurationToTerraform(this._scheduleConfiguration.internalValue),
      source_location_name: cdktn.stringToTerraform(this._sourceLocationName),
      vod_source_name: cdktn.stringToTerraform(this._vodSourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_breaks: {
        value: cdktn.listMapperHcl(mediatailorProgramAdBreaksToHclTerraform, false)(this._adBreaks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediatailorProgramAdBreaksList",
      },
      audience_media: {
        value: cdktn.listMapperHcl(mediatailorProgramAudienceMediaToHclTerraform, false)(this._audienceMedia.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediatailorProgramAudienceMediaList",
      },
      channel_name: {
        value: cdktn.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      live_source_name: {
        value: cdktn.stringToHclTerraform(this._liveSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_name: {
        value: cdktn.stringToHclTerraform(this._programName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_configuration: {
        value: mediatailorProgramScheduleConfigurationToHclTerraform(this._scheduleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorProgramScheduleConfiguration",
      },
      source_location_name: {
        value: cdktn.stringToHclTerraform(this._sourceLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vod_source_name: {
        value: cdktn.stringToHclTerraform(this._vodSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
