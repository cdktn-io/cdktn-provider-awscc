/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKinesisChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel#id DataAwsccKinesisChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKinesisChannelEncryptionConfiguration {
}

export function dataAwsccKinesisChannelEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisChannelEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs {
}

export function dataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsToTerraform(struct?: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsToHclTerraform(struct?: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}
export interface DataAwsccKinesisChannelLoggingConfiguration {
}

export function dataAwsccKinesisChannelLoggingConfigurationToTerraform(struct?: DataAwsccKinesisChannelLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelLoggingConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
}
export interface DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration {
}

export function dataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationToTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
}
export interface DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration {
}

export function dataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationToTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }

  // output_key_template - computed: true, optional: false, required: false
  public get outputKeyTemplate() {
    return this.getStringAttribute('output_key_template');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export interface DataAwsccKinesisChannelS3DestinationConfiguration {
}

export function dataAwsccKinesisChannelS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3DestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3DestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3DestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_freshness_in_seconds - computed: true, optional: false, required: false
  public get dataFreshnessInSeconds() {
    return this.getNumberAttribute('data_freshness_in_seconds');
  }

  // dead_letter_queue_s3_configuration - computed: true, optional: false, required: false
  private _deadLetterQueueS3Configuration = new DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(this, "dead_letter_queue_s3_configuration");
  public get deadLetterQueueS3Configuration() {
    return this._deadLetterQueueS3Configuration;
  }

  // storage_configuration - computed: true, optional: false, required: false
  private _storageConfiguration = new DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
}
export interface DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration {
}

export function dataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationToTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
}
export interface DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields {
}

export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsToTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsToHclTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.getStringAttribute('transform');
  }
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference {
    return new DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec {
}

export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecToTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecToHclTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_fields - computed: true, optional: false, required: false
  private _partitionFields = new DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(this, "partition_fields", false);
  public get partitionFields() {
    return this._partitionFields;
  }
}
export interface DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct {
}

export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructToTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructToHclTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // partition_spec - computed: true, optional: false, required: false
  private _partitionSpec = new DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference {
    return new DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisChannelS3TablesDestinationConfiguration {
}

export function dataAwsccKinesisChannelS3TablesDestinationConfigurationToTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelS3TablesDestinationConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelS3TablesDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelS3TablesDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelS3TablesDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_freshness_in_seconds - computed: true, optional: false, required: false
  public get dataFreshnessInSeconds() {
    return this.getNumberAttribute('data_freshness_in_seconds');
  }

  // dead_letter_queue_s3_configuration - computed: true, optional: false, required: false
  private _deadLetterQueueS3Configuration = new DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(this, "dead_letter_queue_s3_configuration");
  public get deadLetterQueueS3Configuration() {
    return this._deadLetterQueueS3Configuration;
  }

  // s3_tables_configuration_list - computed: true, optional: false, required: false
  private _s3TablesConfigurationList = new DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(this, "s3_tables_configuration_list", false);
  public get s3TablesConfigurationList() {
    return this._s3TablesConfigurationList;
  }
}
export interface DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration {
}

export function dataAwsccKinesisChannelStreamConfigurationListRecordConfigurationToTerraform(struct?: DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelStreamConfigurationListRecordConfigurationToHclTerraform(struct?: DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gsr_schema_arn - computed: true, optional: false, required: false
  public get gsrSchemaArn() {
    return this.getStringAttribute('gsr_schema_arn');
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
}
export interface DataAwsccKinesisChannelStreamConfigurationListStruct {
}

export function dataAwsccKinesisChannelStreamConfigurationListStructToTerraform(struct?: DataAwsccKinesisChannelStreamConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelStreamConfigurationListStructToHclTerraform(struct?: DataAwsccKinesisChannelStreamConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelStreamConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisChannelStreamConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelStreamConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_configuration - computed: true, optional: false, required: false
  private _recordConfiguration = new DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference(this, "record_configuration");
  public get recordConfiguration() {
    return this._recordConfiguration;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}

export class DataAwsccKinesisChannelStreamConfigurationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisChannelStreamConfigurationListStructOutputReference {
    return new DataAwsccKinesisChannelStreamConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisChannelTags {
}

export function dataAwsccKinesisChannelTagsToTerraform(struct?: DataAwsccKinesisChannelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisChannelTagsToHclTerraform(struct?: DataAwsccKinesisChannelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisChannelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisChannelTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisChannelTags | undefined) {
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

export class DataAwsccKinesisChannelTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisChannelTagsOutputReference {
    return new DataAwsccKinesisChannelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel awscc_kinesis_channel}
*/
export class DataAwsccKinesisChannel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesis_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKinesisChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKinesisChannel to import
  * @param importFromId The id of the existing DataAwsccKinesisChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKinesisChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesis_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kinesis_channel awscc_kinesis_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKinesisChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKinesisChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesis_channel',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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

  // channel_arn - computed: true, optional: false, required: false
  public get channelArn() {
    return this.getStringAttribute('channel_arn');
  }

  // channel_creation_timestamp - computed: true, optional: false, required: false
  public get channelCreationTimestamp() {
    return this.getStringAttribute('channel_creation_timestamp');
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // channel_status - computed: true, optional: false, required: false
  public get channelStatus() {
    return this.getStringAttribute('channel_status');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccKinesisChannelEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
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

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccKinesisChannelLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // s3_destination_configuration - computed: true, optional: false, required: false
  private _s3DestinationConfiguration = new DataAwsccKinesisChannelS3DestinationConfigurationOutputReference(this, "s3_destination_configuration");
  public get s3DestinationConfiguration() {
    return this._s3DestinationConfiguration;
  }

  // s3_tables_destination_configuration - computed: true, optional: false, required: false
  private _s3TablesDestinationConfiguration = new DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference(this, "s3_tables_destination_configuration");
  public get s3TablesDestinationConfiguration() {
    return this._s3TablesDestinationConfiguration;
  }

  // service_execution_role_arn - computed: true, optional: false, required: false
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }

  // stream_configuration_list - computed: true, optional: false, required: false
  private _streamConfigurationList = new DataAwsccKinesisChannelStreamConfigurationListStructList(this, "stream_configuration_list", false);
  public get streamConfigurationList() {
    return this._streamConfigurationList;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKinesisChannelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
