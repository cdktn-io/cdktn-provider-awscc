/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMskChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_channel#id DataAwsccMskChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMskChannelEncryptionConfiguration {
}

export function dataAwsccMskChannelEncryptionConfigurationToTerraform(struct?: DataAwsccMskChannelEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelEncryptionConfigurationToHclTerraform(struct?: DataAwsccMskChannelEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationCatalog {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationCatalogToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationCatalogToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_arn - computed: true, optional: false, required: false
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3 {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3ToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3ToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3 | undefined) {
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
export interface DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStruct | undefined) {
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
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference {
    return new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_strategy - computed: true, optional: false, required: false
  public get partitionStrategy() {
    return this.getStringAttribute('partition_strategy');
  }

  // source_list - computed: true, optional: false, required: false
  private _sourceList = new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_database_name - computed: true, optional: false, required: false
  public get destinationDatabaseName() {
    return this.getStringAttribute('destination_database_name');
  }

  // destination_table_name - computed: true, optional: false, required: false
  public get destinationTableName() {
    return this.getStringAttribute('destination_table_name');
  }

  // partition_spec - computed: true, optional: false, required: false
  private _partitionSpec = new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListPartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }
}

export class DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference {
    return new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_schema_evolution - computed: true, optional: false, required: false
  public get enableSchemaEvolution() {
    return this.getBooleanAttribute('enable_schema_evolution');
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfigurationTableCreation {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationTableCreationToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationTableCreation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationTableCreationToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfigurationTableCreation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfigurationTableCreation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfigurationTableCreation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_table_creation - computed: true, optional: false, required: false
  public get enableTableCreation() {
    return this.getBooleanAttribute('enable_table_creation');
  }
}
export interface DataAwsccMskChannelIcebergDestinationConfiguration {
}

export function dataAwsccMskChannelIcebergDestinationConfigurationToTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelIcebergDestinationConfigurationToHclTerraform(struct?: DataAwsccMskChannelIcebergDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelIcebergDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelIcebergDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelIcebergDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_only - computed: true, optional: false, required: false
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataAwsccMskChannelIcebergDestinationConfigurationCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // data_freshness_in_seconds - computed: true, optional: false, required: false
  public get dataFreshnessInSeconds() {
    return this.getNumberAttribute('data_freshness_in_seconds');
  }

  // dead_letter_queue_s3 - computed: true, optional: false, required: false
  private _deadLetterQueueS3 = new DataAwsccMskChannelIcebergDestinationConfigurationDeadLetterQueueS3OutputReference(this, "dead_letter_queue_s3");
  public get deadLetterQueueS3() {
    return this._deadLetterQueueS3;
  }

  // destination_table_list - computed: true, optional: false, required: false
  private _destinationTableList = new DataAwsccMskChannelIcebergDestinationConfigurationDestinationTableListStructList(this, "destination_table_list", false);
  public get destinationTableList() {
    return this._destinationTableList;
  }

  // schema_evolution - computed: true, optional: false, required: false
  private _schemaEvolution = new DataAwsccMskChannelIcebergDestinationConfigurationSchemaEvolutionOutputReference(this, "schema_evolution");
  public get schemaEvolution() {
    return this._schemaEvolution;
  }

  // service_execution_role_arn - computed: true, optional: false, required: false
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }

  // table_creation - computed: true, optional: false, required: false
  private _tableCreation = new DataAwsccMskChannelIcebergDestinationConfigurationTableCreationOutputReference(this, "table_creation");
  public get tableCreation() {
    return this._tableCreation;
  }
}
export interface DataAwsccMskChannelLoggingInfoCloudwatchLogs {
}

export function dataAwsccMskChannelLoggingInfoCloudwatchLogsToTerraform(struct?: DataAwsccMskChannelLoggingInfoCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelLoggingInfoCloudwatchLogsToHclTerraform(struct?: DataAwsccMskChannelLoggingInfoCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelLoggingInfoCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelLoggingInfoCloudwatchLogs | undefined) {
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

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
}
export interface DataAwsccMskChannelLoggingInfoFirehose {
}

export function dataAwsccMskChannelLoggingInfoFirehoseToTerraform(struct?: DataAwsccMskChannelLoggingInfoFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelLoggingInfoFirehoseToHclTerraform(struct?: DataAwsccMskChannelLoggingInfoFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelLoggingInfoFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelLoggingInfoFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelLoggingInfoFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream - computed: true, optional: false, required: false
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskChannelLoggingInfoS3 {
}

export function dataAwsccMskChannelLoggingInfoS3ToTerraform(struct?: DataAwsccMskChannelLoggingInfoS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelLoggingInfoS3ToHclTerraform(struct?: DataAwsccMskChannelLoggingInfoS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelLoggingInfoS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelLoggingInfoS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelLoggingInfoS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccMskChannelLoggingInfo {
}

export function dataAwsccMskChannelLoggingInfoToTerraform(struct?: DataAwsccMskChannelLoggingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelLoggingInfoToHclTerraform(struct?: DataAwsccMskChannelLoggingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelLoggingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelLoggingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelLoggingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccMskChannelLoggingInfoCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccMskChannelLoggingInfoFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccMskChannelLoggingInfoS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3 {
}

export function dataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3ToTerraform(struct?: DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3ToHclTerraform(struct?: DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3 | undefined) {
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
export interface DataAwsccMskChannelS3DestinationConfigurationStorage {
}

export function dataAwsccMskChannelS3DestinationConfigurationStorageToTerraform(struct?: DataAwsccMskChannelS3DestinationConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelS3DestinationConfigurationStorageToHclTerraform(struct?: DataAwsccMskChannelS3DestinationConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelS3DestinationConfigurationStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelS3DestinationConfigurationStorage | undefined) {
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

  // output_prefix - computed: true, optional: false, required: false
  public get outputPrefix() {
    return this.getStringAttribute('output_prefix');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export interface DataAwsccMskChannelS3DestinationConfiguration {
}

export function dataAwsccMskChannelS3DestinationConfigurationToTerraform(struct?: DataAwsccMskChannelS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelS3DestinationConfigurationToHclTerraform(struct?: DataAwsccMskChannelS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelS3DestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelS3DestinationConfiguration | undefined) {
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

  // dead_letter_queue_s3 - computed: true, optional: false, required: false
  private _deadLetterQueueS3 = new DataAwsccMskChannelS3DestinationConfigurationDeadLetterQueueS3OutputReference(this, "dead_letter_queue_s3");
  public get deadLetterQueueS3() {
    return this._deadLetterQueueS3;
  }

  // service_execution_role_arn - computed: true, optional: false, required: false
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataAwsccMskChannelS3DestinationConfigurationStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
}
export interface DataAwsccMskChannelStateInfo {
}

export function dataAwsccMskChannelStateInfoToTerraform(struct?: DataAwsccMskChannelStateInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelStateInfoToHclTerraform(struct?: DataAwsccMskChannelStateInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelStateInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelStateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelStateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface DataAwsccMskChannelTopicConfigurationListRecordConverter {
}

export function dataAwsccMskChannelTopicConfigurationListRecordConverterToTerraform(struct?: DataAwsccMskChannelTopicConfigurationListRecordConverter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelTopicConfigurationListRecordConverterToHclTerraform(struct?: DataAwsccMskChannelTopicConfigurationListRecordConverter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelTopicConfigurationListRecordConverter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelTopicConfigurationListRecordConverter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value_converter - computed: true, optional: false, required: false
  public get valueConverter() {
    return this.getStringAttribute('value_converter');
  }
}
export interface DataAwsccMskChannelTopicConfigurationListRecordSchema {
}

export function dataAwsccMskChannelTopicConfigurationListRecordSchemaToTerraform(struct?: DataAwsccMskChannelTopicConfigurationListRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelTopicConfigurationListRecordSchemaToHclTerraform(struct?: DataAwsccMskChannelTopicConfigurationListRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskChannelTopicConfigurationListRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelTopicConfigurationListRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gsr_arn - computed: true, optional: false, required: false
  public get gsrArn() {
    return this.getStringAttribute('gsr_arn');
  }
}
export interface DataAwsccMskChannelTopicConfigurationListStruct {
}

export function dataAwsccMskChannelTopicConfigurationListStructToTerraform(struct?: DataAwsccMskChannelTopicConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskChannelTopicConfigurationListStructToHclTerraform(struct?: DataAwsccMskChannelTopicConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskChannelTopicConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMskChannelTopicConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskChannelTopicConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_converter - computed: true, optional: false, required: false
  private _recordConverter = new DataAwsccMskChannelTopicConfigurationListRecordConverterOutputReference(this, "record_converter");
  public get recordConverter() {
    return this._recordConverter;
  }

  // record_schema - computed: true, optional: false, required: false
  private _recordSchema = new DataAwsccMskChannelTopicConfigurationListRecordSchemaOutputReference(this, "record_schema");
  public get recordSchema() {
    return this._recordSchema;
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export class DataAwsccMskChannelTopicConfigurationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMskChannelTopicConfigurationListStructOutputReference {
    return new DataAwsccMskChannelTopicConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_channel awscc_msk_channel}
*/
export class DataAwsccMskChannel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_msk_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMskChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMskChannel to import
  * @param importFromId The id of the existing DataAwsccMskChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMskChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/msk_channel awscc_msk_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMskChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMskChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_msk_channel',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.96.0',
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

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccMskChannelEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // iceberg_destination_configuration - computed: true, optional: false, required: false
  private _icebergDestinationConfiguration = new DataAwsccMskChannelIcebergDestinationConfigurationOutputReference(this, "iceberg_destination_configuration");
  public get icebergDestinationConfiguration() {
    return this._icebergDestinationConfiguration;
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

  // logging_info - computed: true, optional: false, required: false
  private _loggingInfo = new DataAwsccMskChannelLoggingInfoOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }

  // s3_destination_configuration - computed: true, optional: false, required: false
  private _s3DestinationConfiguration = new DataAwsccMskChannelS3DestinationConfigurationOutputReference(this, "s3_destination_configuration");
  public get s3DestinationConfiguration() {
    return this._s3DestinationConfiguration;
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new DataAwsccMskChannelStateInfoOutputReference(this, "state_info");
  public get stateInfo() {
    return this._stateInfo;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // topic_configuration_list - computed: true, optional: false, required: false
  private _topicConfigurationList = new DataAwsccMskChannelTopicConfigurationListStructList(this, "topic_configuration_list", false);
  public get topicConfigurationList() {
    return this._topicConfigurationList;
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
