/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEventsv2SubscriberConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_subscriber#id DataAwsccEventsv2Subscriber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEventsv2SubscriberBatchConfiguration {
}

export function dataAwsccEventsv2SubscriberBatchConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberBatchConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberBatchConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberBatchConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberBatchConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberBatchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberBatchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_batch_size - computed: true, optional: false, required: false
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }

  // max_batch_window_in_seconds - computed: true, optional: false, required: false
  public get maxBatchWindowInSeconds() {
    return this.getNumberAttribute('max_batch_window_in_seconds');
  }
}
export interface DataAwsccEventsv2SubscriberFilterConfigurationFilters {
}

export function dataAwsccEventsv2SubscriberFilterConfigurationFiltersToTerraform(struct?: DataAwsccEventsv2SubscriberFilterConfigurationFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberFilterConfigurationFiltersToHclTerraform(struct?: DataAwsccEventsv2SubscriberFilterConfigurationFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsv2SubscriberFilterConfigurationFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberFilterConfigurationFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataAwsccEventsv2SubscriberFilterConfigurationFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference {
    return new DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsv2SubscriberFilterConfiguration {
}

export function dataAwsccEventsv2SubscriberFilterConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberFilterConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccEventsv2SubscriberFilterConfigurationFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deduplication_type - computed: true, optional: false, required: false
  public get deduplicationType() {
    return this.getStringAttribute('deduplication_type');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deduplication_id - computed: true, optional: false, required: false
  public get deduplicationId() {
    return this.getStringAttribute('deduplication_id');
  }

  // event_group_id - computed: true, optional: false, required: false
  public get eventGroupId() {
    return this.getStringAttribute('event_group_id');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deduplication_configuration - computed: true, optional: false, required: false
  private _deduplicationConfiguration = new DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(this, "deduplication_configuration");
  public get deduplicationConfiguration() {
    return this._deduplicationConfiguration;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // system_metadata - computed: true, optional: false, required: false
  private _systemMetadata = new DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(this, "system_metadata");
  public get systemMetadata() {
    return this._systemMetadata;
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new cdktn.StringMap(this, "header_parameters");
  public get headerParameters() {
    return this._headerParameters;
  }

  // invocation_timeout_seconds - computed: true, optional: false, required: false
  public get invocationTimeoutSeconds() {
    return this.getStringAttribute('invocation_timeout_seconds');
  }

  // path_parameter_values - computed: true, optional: false, required: false
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new cdktn.StringMap(this, "query_string_parameters");
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // explicit_hash_key - computed: true, optional: false, required: false
  public get explicitHashKey() {
    return this.getStringAttribute('explicit_hash_key');
  }

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // durable_execution_name - computed: true, optional: false, required: false
  public get durableExecutionName() {
    return this.getStringAttribute('durable_execution_name');
  }

  // invocation_timeout_seconds - computed: true, optional: false, required: false
  public get invocationTimeoutSeconds() {
    return this.getStringAttribute('invocation_timeout_seconds');
  }

  // invocation_type - computed: true, optional: false, required: false
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_value - computed: true, optional: false, required: false
  public get binaryValue() {
    return this.getStringAttribute('binary_value');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference {
    return new DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_attributes - computed: true, optional: false, required: false
  private _messageAttributes = new DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(this, "message_attributes");
  public get messageAttributes() {
    return this._messageAttributes;
  }

  // message_deduplication_id - computed: true, optional: false, required: false
  public get messageDeduplicationId() {
    return this.getStringAttribute('message_deduplication_id');
  }

  // message_group_id - computed: true, optional: false, required: false
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }

  // message_structure - computed: true, optional: false, required: false
  public get messageStructure() {
    return this.getStringAttribute('message_structure');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_value - computed: true, optional: false, required: false
  public get binaryValue() {
    return this.getStringAttribute('binary_value');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference {
    return new DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_value - computed: true, optional: false, required: false
  public get binaryValue() {
    return this.getStringAttribute('binary_value');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference {
    return new DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay_seconds - computed: true, optional: false, required: false
  public get delaySeconds() {
    return this.getStringAttribute('delay_seconds');
  }

  // message_attributes - computed: true, optional: false, required: false
  private _messageAttributes = new DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(this, "message_attributes");
  public get messageAttributes() {
    return this._messageAttributes;
  }

  // message_deduplication_id - computed: true, optional: false, required: false
  public get messageDeduplicationId() {
    return this.getStringAttribute('message_deduplication_id');
  }

  // message_group_id - computed: true, optional: false, required: false
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }

  // message_system_attributes - computed: true, optional: false, required: false
  private _messageSystemAttributes = new DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(this, "message_system_attributes");
  public get messageSystemAttributes() {
    return this._messageSystemAttributes;
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_timeout_seconds - computed: true, optional: false, required: false
  public get invocationTimeoutSeconds() {
    return this.getStringAttribute('invocation_timeout_seconds');
  }

  // invocation_type - computed: true, optional: false, required: false
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trace_header - computed: true, optional: false, required: false
  public get traceHeader() {
    return this.getStringAttribute('trace_header');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input - computed: true, optional: false, required: false
  public get input() {
    return this.getStringAttribute('input');
  }

  // invocation_timeout_seconds - computed: true, optional: false, required: false
  public get invocationTimeoutSeconds() {
    return this.getStringAttribute('invocation_timeout_seconds');
  }
}
export interface DataAwsccEventsv2SubscriberInvokeConfiguration {
}

export function dataAwsccEventsv2SubscriberInvokeConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberInvokeConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberInvokeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberInvokeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberInvokeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_bus_v2_parameters - computed: true, optional: false, required: false
  private _eventBusV2Parameters = new DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(this, "event_bus_v2_parameters");
  public get eventBusV2Parameters() {
    return this._eventBusV2Parameters;
  }

  // http_parameters - computed: true, optional: false, required: false
  private _httpParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }

  // kinesis_parameters - computed: true, optional: false, required: false
  private _kinesisParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(this, "kinesis_parameters");
  public get kinesisParameters() {
    return this._kinesisParameters;
  }

  // lambda_parameters - computed: true, optional: false, required: false
  private _lambdaParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(this, "lambda_parameters");
  public get lambdaParameters() {
    return this._lambdaParameters;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // sns_parameters - computed: true, optional: false, required: false
  private _snsParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(this, "sns_parameters");
  public get snsParameters() {
    return this._snsParameters;
  }

  // sqs_parameters - computed: true, optional: false, required: false
  private _sqsParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(this, "sqs_parameters");
  public get sqsParameters() {
    return this._sqsParameters;
  }

  // step_functions_parameters - computed: true, optional: false, required: false
  private _stepFunctionsParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(this, "step_functions_parameters");
  public get stepFunctionsParameters() {
    return this._stepFunctionsParameters;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // universal_target_parameters - computed: true, optional: false, required: false
  private _universalTargetParameters = new DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(this, "universal_target_parameters");
  public get universalTargetParameters() {
    return this._universalTargetParameters;
  }
}
export interface DataAwsccEventsv2SubscriberLogConfiguration {
}

export function dataAwsccEventsv2SubscriberLogConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberLogConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_payload - computed: true, optional: false, required: false
  public get includePayload() {
    return this.getStringAttribute('include_payload');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }
}
export interface DataAwsccEventsv2SubscriberOnFailureConfiguration {
}

export function dataAwsccEventsv2SubscriberOnFailureConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberOnFailureConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberOnFailureConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberOnFailureConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberOnFailureConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccEventsv2SubscriberPointInTimeConfiguration {
}

export function dataAwsccEventsv2SubscriberPointInTimeConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberPointInTimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberPointInTimeConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberPointInTimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberPointInTimeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberPointInTimeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_point - computed: true, optional: false, required: false
  public get endPoint() {
    return this.getNumberAttribute('end_point');
  }

  // point_type - computed: true, optional: false, required: false
  public get pointType() {
    return this.getStringAttribute('point_type');
  }

  // starting_point - computed: true, optional: false, required: false
  public get startingPoint() {
    return this.getNumberAttribute('starting_point');
  }
}
export interface DataAwsccEventsv2SubscriberRetryPolicy {
}

export function dataAwsccEventsv2SubscriberRetryPolicyToTerraform(struct?: DataAwsccEventsv2SubscriberRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberRetryPolicyToHclTerraform(struct?: DataAwsccEventsv2SubscriberRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_event_age_in_seconds - computed: true, optional: false, required: false
  public get maxEventAgeInSeconds() {
    return this.getNumberAttribute('max_event_age_in_seconds');
  }

  // max_retry_attempts - computed: true, optional: false, required: false
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }

  // retry_strategy - computed: true, optional: false, required: false
  public get retryStrategy() {
    return this.getStringAttribute('retry_strategy');
  }
}
export interface DataAwsccEventsv2SubscriberTags {
}

export function dataAwsccEventsv2SubscriberTagsToTerraform(struct?: DataAwsccEventsv2SubscriberTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberTagsToHclTerraform(struct?: DataAwsccEventsv2SubscriberTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsv2SubscriberTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberTags | undefined) {
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

export class DataAwsccEventsv2SubscriberTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsv2SubscriberTagsOutputReference {
    return new DataAwsccEventsv2SubscriberTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsv2SubscriberTransformerJsonataConfiguration {
}

export function dataAwsccEventsv2SubscriberTransformerJsonataConfigurationToTerraform(struct?: DataAwsccEventsv2SubscriberTransformerJsonataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberTransformerJsonataConfigurationToHclTerraform(struct?: DataAwsccEventsv2SubscriberTransformerJsonataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberTransformerJsonataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberTransformerJsonataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}
export interface DataAwsccEventsv2SubscriberTransformer {
}

export function dataAwsccEventsv2SubscriberTransformerToTerraform(struct?: DataAwsccEventsv2SubscriberTransformer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsv2SubscriberTransformerToHclTerraform(struct?: DataAwsccEventsv2SubscriberTransformer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsv2SubscriberTransformerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsv2SubscriberTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsv2SubscriberTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jsonata_configuration - computed: true, optional: false, required: false
  private _jsonataConfiguration = new DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference(this, "jsonata_configuration");
  public get jsonataConfiguration() {
    return this._jsonataConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_subscriber awscc_eventsv2_subscriber}
*/
export class DataAwsccEventsv2Subscriber extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_eventsv2_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEventsv2Subscriber resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEventsv2Subscriber to import
  * @param importFromId The id of the existing DataAwsccEventsv2Subscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEventsv2Subscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/eventsv2_subscriber awscc_eventsv2_subscriber} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEventsv2SubscriberConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEventsv2SubscriberConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eventsv2_subscriber',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_configuration - computed: true, optional: false, required: false
  private _batchConfiguration = new DataAwsccEventsv2SubscriberBatchConfigurationOutputReference(this, "batch_configuration");
  public get batchConfiguration() {
    return this._batchConfiguration;
  }

  // bus_name - computed: true, optional: false, required: false
  public get busName() {
    return this.getStringAttribute('bus_name');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_bus_arn - computed: true, optional: false, required: false
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccEventsv2SubscriberFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
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

  // invoke_configuration - computed: true, optional: false, required: false
  private _invokeConfiguration = new DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference(this, "invoke_configuration");
  public get invokeConfiguration() {
    return this._invokeConfiguration;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccEventsv2SubscriberLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_failure_configuration - computed: true, optional: false, required: false
  private _onFailureConfiguration = new DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference(this, "on_failure_configuration");
  public get onFailureConfiguration() {
    return this._onFailureConfiguration;
  }

  // point_in_time_configuration - computed: true, optional: false, required: false
  private _pointInTimeConfiguration = new DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference(this, "point_in_time_configuration");
  public get pointInTimeConfiguration() {
    return this._pointInTimeConfiguration;
  }

  // resume_position - computed: true, optional: false, required: false
  public get resumePosition() {
    return this.getStringAttribute('resume_position');
  }

  // retry_policy - computed: true, optional: false, required: false
  private _retryPolicy = new DataAwsccEventsv2SubscriberRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscriber_arn - computed: true, optional: false, required: false
  public get subscriberArn() {
    return this.getStringAttribute('subscriber_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEventsv2SubscriberTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // transformer - computed: true, optional: false, required: false
  private _transformer = new DataAwsccEventsv2SubscriberTransformerOutputReference(this, "transformer");
  public get transformer() {
    return this._transformer;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
