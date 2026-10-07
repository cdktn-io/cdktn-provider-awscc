/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediatailorProgramConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#id DataAwsccMediatailorProgram#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediatailorProgramAdBreaksAdBreakMetadata {
}

export function dataAwsccMediatailorProgramAdBreaksAdBreakMetadataToTerraform(struct?: DataAwsccMediatailorProgramAdBreaksAdBreakMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksAdBreakMetadataToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaksAdBreakMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAdBreaksAdBreakMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaksAdBreakMetadata | undefined) {
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

export class DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference {
    return new DataAwsccMediatailorProgramAdBreaksAdBreakMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAdBreaksSlate {
}

export function dataAwsccMediatailorProgramAdBreaksSlateToTerraform(struct?: DataAwsccMediatailorProgramAdBreaksSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksSlateToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaksSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksSlateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAdBreaksSlate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaksSlate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
}
export interface DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage {
}

export function dataAwsccMediatailorProgramAdBreaksSpliceInsertMessageToTerraform(struct?: DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksSpliceInsertMessageToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaksSpliceInsertMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avail_num - computed: true, optional: false, required: false
  public get availNum() {
    return this.getNumberAttribute('avail_num');
  }

  // avails_expected - computed: true, optional: false, required: false
  public get availsExpected() {
    return this.getNumberAttribute('avails_expected');
  }

  // splice_event_id - computed: true, optional: false, required: false
  public get spliceEventId() {
    return this.getNumberAttribute('splice_event_id');
  }

  // unique_program_id - computed: true, optional: false, required: false
  public get uniqueProgramId() {
    return this.getNumberAttribute('unique_program_id');
  }
}
export interface DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors {
}

export function dataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform(struct?: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segment_num - computed: true, optional: false, required: false
  public get segmentNum() {
    return this.getNumberAttribute('segment_num');
  }

  // segmentation_event_id - computed: true, optional: false, required: false
  public get segmentationEventId() {
    return this.getNumberAttribute('segmentation_event_id');
  }

  // segmentation_type_id - computed: true, optional: false, required: false
  public get segmentationTypeId() {
    return this.getNumberAttribute('segmentation_type_id');
  }

  // segmentation_upid - computed: true, optional: false, required: false
  public get segmentationUpid() {
    return this.getStringAttribute('segmentation_upid');
  }

  // segmentation_upid_type - computed: true, optional: false, required: false
  public get segmentationUpidType() {
    return this.getNumberAttribute('segmentation_upid_type');
  }

  // segments_expected - computed: true, optional: false, required: false
  public get segmentsExpected() {
    return this.getNumberAttribute('segments_expected');
  }

  // sub_segment_num - computed: true, optional: false, required: false
  public get subSegmentNum() {
    return this.getNumberAttribute('sub_segment_num');
  }

  // sub_segments_expected - computed: true, optional: false, required: false
  public get subSegmentsExpected() {
    return this.getNumberAttribute('sub_segments_expected');
  }
}

export class DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference {
    return new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAdBreaksTimeSignalMessage {
}

export function dataAwsccMediatailorProgramAdBreaksTimeSignalMessageToTerraform(struct?: DataAwsccMediatailorProgramAdBreaksTimeSignalMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksTimeSignalMessageToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaksTimeSignalMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAdBreaksTimeSignalMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaksTimeSignalMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segmentation_descriptors - computed: true, optional: false, required: false
  private _segmentationDescriptors = new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(this, "segmentation_descriptors", false);
  public get segmentationDescriptors() {
    return this._segmentationDescriptors;
  }
}
export interface DataAwsccMediatailorProgramAdBreaks {
}

export function dataAwsccMediatailorProgramAdBreaksToTerraform(struct?: DataAwsccMediatailorProgramAdBreaks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAdBreaksToHclTerraform(struct?: DataAwsccMediatailorProgramAdBreaks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAdBreaksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAdBreaks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAdBreaks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_break_metadata - computed: true, optional: false, required: false
  private _adBreakMetadata = new DataAwsccMediatailorProgramAdBreaksAdBreakMetadataList(this, "ad_break_metadata", false);
  public get adBreakMetadata() {
    return this._adBreakMetadata;
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // offset_millis - computed: true, optional: false, required: false
  public get offsetMillis() {
    return this.getNumberAttribute('offset_millis');
  }

  // slate - computed: true, optional: false, required: false
  private _slate = new DataAwsccMediatailorProgramAdBreaksSlateOutputReference(this, "slate");
  public get slate() {
    return this._slate;
  }

  // splice_insert_message - computed: true, optional: false, required: false
  private _spliceInsertMessage = new DataAwsccMediatailorProgramAdBreaksSpliceInsertMessageOutputReference(this, "splice_insert_message");
  public get spliceInsertMessage() {
    return this._spliceInsertMessage;
  }

  // time_signal_message - computed: true, optional: false, required: false
  private _timeSignalMessage = new DataAwsccMediatailorProgramAdBreaksTimeSignalMessageOutputReference(this, "time_signal_message");
  public get timeSignalMessage() {
    return this._timeSignalMessage;
  }
}

export class DataAwsccMediatailorProgramAdBreaksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAdBreaksOutputReference {
    return new DataAwsccMediatailorProgramAdBreaksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata | undefined) {
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

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference {
    return new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avail_num - computed: true, optional: false, required: false
  public get availNum() {
    return this.getNumberAttribute('avail_num');
  }

  // avails_expected - computed: true, optional: false, required: false
  public get availsExpected() {
    return this.getNumberAttribute('avails_expected');
  }

  // splice_event_id - computed: true, optional: false, required: false
  public get spliceEventId() {
    return this.getNumberAttribute('splice_event_id');
  }

  // unique_program_id - computed: true, optional: false, required: false
  public get uniqueProgramId() {
    return this.getNumberAttribute('unique_program_id');
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segment_num - computed: true, optional: false, required: false
  public get segmentNum() {
    return this.getNumberAttribute('segment_num');
  }

  // segmentation_event_id - computed: true, optional: false, required: false
  public get segmentationEventId() {
    return this.getNumberAttribute('segmentation_event_id');
  }

  // segmentation_type_id - computed: true, optional: false, required: false
  public get segmentationTypeId() {
    return this.getNumberAttribute('segmentation_type_id');
  }

  // segmentation_upid - computed: true, optional: false, required: false
  public get segmentationUpid() {
    return this.getStringAttribute('segmentation_upid');
  }

  // segmentation_upid_type - computed: true, optional: false, required: false
  public get segmentationUpidType() {
    return this.getNumberAttribute('segmentation_upid_type');
  }

  // segments_expected - computed: true, optional: false, required: false
  public get segmentsExpected() {
    return this.getNumberAttribute('segments_expected');
  }

  // sub_segment_num - computed: true, optional: false, required: false
  public get subSegmentNum() {
    return this.getNumberAttribute('sub_segment_num');
  }

  // sub_segments_expected - computed: true, optional: false, required: false
  public get subSegmentsExpected() {
    return this.getNumberAttribute('sub_segments_expected');
  }
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference {
    return new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segmentation_descriptors - computed: true, optional: false, required: false
  private _segmentationDescriptors = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(this, "segmentation_descriptors", false);
  public get segmentationDescriptors() {
    return this._segmentationDescriptors;
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_break_metadata - computed: true, optional: false, required: false
  private _adBreakMetadata = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(this, "ad_break_metadata", false);
  public get adBreakMetadata() {
    return this._adBreakMetadata;
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // offset_millis - computed: true, optional: false, required: false
  public get offsetMillis() {
    return this.getNumberAttribute('offset_millis');
  }

  // slate - computed: true, optional: false, required: false
  private _slate = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(this, "slate");
  public get slate() {
    return this._slate;
  }

  // splice_insert_message - computed: true, optional: false, required: false
  private _spliceInsertMessage = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(this, "splice_insert_message");
  public get spliceInsertMessage() {
    return this._spliceInsertMessage;
  }

  // time_signal_message - computed: true, optional: false, required: false
  private _timeSignalMessage = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(this, "time_signal_message");
  public get timeSignalMessage() {
    return this._timeSignalMessage;
  }
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference {
    return new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRange | undefined) {
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
export interface DataAwsccMediatailorProgramAudienceMediaAlternateMedia {
}

export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaToTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaAlternateMediaToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMediaAlternateMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAudienceMediaAlternateMedia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMediaAlternateMedia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_breaks - computed: true, optional: false, required: false
  private _adBreaks = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaAdBreaksList(this, "ad_breaks", false);
  public get adBreaks() {
    return this._adBreaks;
  }

  // clip_range - computed: true, optional: false, required: false
  private _clipRange = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(this, "clip_range");
  public get clipRange() {
    return this._clipRange;
  }

  // duration_millis - computed: true, optional: false, required: false
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }

  // live_source_name - computed: true, optional: false, required: false
  public get liveSourceName() {
    return this.getStringAttribute('live_source_name');
  }

  // scheduled_start_time_millis - computed: true, optional: false, required: false
  public get scheduledStartTimeMillis() {
    return this.getNumberAttribute('scheduled_start_time_millis');
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
}

export class DataAwsccMediatailorProgramAudienceMediaAlternateMediaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference {
    return new DataAwsccMediatailorProgramAudienceMediaAlternateMediaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramAudienceMedia {
}

export function dataAwsccMediatailorProgramAudienceMediaToTerraform(struct?: DataAwsccMediatailorProgramAudienceMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramAudienceMediaToHclTerraform(struct?: DataAwsccMediatailorProgramAudienceMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramAudienceMediaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorProgramAudienceMedia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramAudienceMedia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_media - computed: true, optional: false, required: false
  private _alternateMedia = new DataAwsccMediatailorProgramAudienceMediaAlternateMediaList(this, "alternate_media", false);
  public get alternateMedia() {
    return this._alternateMedia;
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }
}

export class DataAwsccMediatailorProgramAudienceMediaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorProgramAudienceMediaOutputReference {
    return new DataAwsccMediatailorProgramAudienceMediaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorProgramClipRange {
}

export function dataAwsccMediatailorProgramClipRangeToTerraform(struct?: DataAwsccMediatailorProgramClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramClipRangeToHclTerraform(struct?: DataAwsccMediatailorProgramClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramClipRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramClipRange | undefined) {
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
export interface DataAwsccMediatailorProgramScheduleConfigurationClipRange {
}

export function dataAwsccMediatailorProgramScheduleConfigurationClipRangeToTerraform(struct?: DataAwsccMediatailorProgramScheduleConfigurationClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramScheduleConfigurationClipRangeToHclTerraform(struct?: DataAwsccMediatailorProgramScheduleConfigurationClipRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramScheduleConfigurationClipRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramScheduleConfigurationClipRange | undefined) {
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
export interface DataAwsccMediatailorProgramScheduleConfigurationTransition {
}

export function dataAwsccMediatailorProgramScheduleConfigurationTransitionToTerraform(struct?: DataAwsccMediatailorProgramScheduleConfigurationTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramScheduleConfigurationTransitionToHclTerraform(struct?: DataAwsccMediatailorProgramScheduleConfigurationTransition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramScheduleConfigurationTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramScheduleConfigurationTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_millis - computed: true, optional: false, required: false
  public get durationMillis() {
    return this.getNumberAttribute('duration_millis');
  }

  // relative_position - computed: true, optional: false, required: false
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }

  // relative_program - computed: true, optional: false, required: false
  public get relativeProgram() {
    return this.getStringAttribute('relative_program');
  }

  // scheduled_start_time_millis - computed: true, optional: false, required: false
  public get scheduledStartTimeMillis() {
    return this.getNumberAttribute('scheduled_start_time_millis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccMediatailorProgramScheduleConfiguration {
}

export function dataAwsccMediatailorProgramScheduleConfigurationToTerraform(struct?: DataAwsccMediatailorProgramScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorProgramScheduleConfigurationToHclTerraform(struct?: DataAwsccMediatailorProgramScheduleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorProgramScheduleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorProgramScheduleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorProgramScheduleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clip_range - computed: true, optional: false, required: false
  private _clipRange = new DataAwsccMediatailorProgramScheduleConfigurationClipRangeOutputReference(this, "clip_range");
  public get clipRange() {
    return this._clipRange;
  }

  // transition - computed: true, optional: false, required: false
  private _transition = new DataAwsccMediatailorProgramScheduleConfigurationTransitionOutputReference(this, "transition");
  public get transition() {
    return this._transition;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program awscc_mediatailor_program}
*/
export class DataAwsccMediatailorProgram extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_program";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediatailorProgram resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediatailorProgram to import
  * @param importFromId The id of the existing DataAwsccMediatailorProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediatailorProgram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_program", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediatailor_program awscc_mediatailor_program} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediatailorProgramConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediatailorProgramConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_breaks - computed: true, optional: false, required: false
  private _adBreaks = new DataAwsccMediatailorProgramAdBreaksList(this, "ad_breaks", false);
  public get adBreaks() {
    return this._adBreaks;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audience_media - computed: true, optional: false, required: false
  private _audienceMedia = new DataAwsccMediatailorProgramAudienceMediaList(this, "audience_media", false);
  public get audienceMedia() {
    return this._audienceMedia;
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // clip_range - computed: true, optional: false, required: false
  private _clipRange = new DataAwsccMediatailorProgramClipRangeOutputReference(this, "clip_range");
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

  // live_source_name - computed: true, optional: false, required: false
  public get liveSourceName() {
    return this.getStringAttribute('live_source_name');
  }

  // program_name - computed: true, optional: false, required: false
  public get programName() {
    return this.getStringAttribute('program_name');
  }

  // schedule_configuration - computed: true, optional: false, required: false
  private _scheduleConfiguration = new DataAwsccMediatailorProgramScheduleConfigurationOutputReference(this, "schedule_configuration");
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }

  // scheduled_start_time - computed: true, optional: false, required: false
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
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
