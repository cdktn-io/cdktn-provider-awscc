/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDmsEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDmsEndpointDocDbSettings {
}

export function dataAwsccDmsEndpointDocDbSettingsToTerraform(struct?: DataAwsccDmsEndpointDocDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointDocDbSettingsToHclTerraform(struct?: DataAwsccDmsEndpointDocDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointDocDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointDocDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointDocDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // docs_to_investigate - computed: true, optional: false, required: false
  public get docsToInvestigate() {
    return this.getNumberAttribute('docs_to_investigate');
  }

  // extract_doc_id - computed: true, optional: false, required: false
  public get extractDocId() {
    return this.getBooleanAttribute('extract_doc_id');
  }

  // nesting_level - computed: true, optional: false, required: false
  public get nestingLevel() {
    return this.getStringAttribute('nesting_level');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
}
export interface DataAwsccDmsEndpointDynamoDbSettings {
}

export function dataAwsccDmsEndpointDynamoDbSettingsToTerraform(struct?: DataAwsccDmsEndpointDynamoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointDynamoDbSettingsToHclTerraform(struct?: DataAwsccDmsEndpointDynamoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointDynamoDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointDynamoDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointDynamoDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
}
export interface DataAwsccDmsEndpointElasticsearchSettings {
}

export function dataAwsccDmsEndpointElasticsearchSettingsToTerraform(struct?: DataAwsccDmsEndpointElasticsearchSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointElasticsearchSettingsToHclTerraform(struct?: DataAwsccDmsEndpointElasticsearchSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointElasticsearchSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointElasticsearchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointElasticsearchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // error_retry_duration - computed: true, optional: false, required: false
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }

  // full_load_error_percentage - computed: true, optional: false, required: false
  public get fullLoadErrorPercentage() {
    return this.getNumberAttribute('full_load_error_percentage');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
}
export interface DataAwsccDmsEndpointGcpMySqlSettings {
}

export function dataAwsccDmsEndpointGcpMySqlSettingsToTerraform(struct?: DataAwsccDmsEndpointGcpMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointGcpMySqlSettingsToHclTerraform(struct?: DataAwsccDmsEndpointGcpMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointGcpMySqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointGcpMySqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointGcpMySqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_connect_script - computed: true, optional: false, required: false
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }

  // clean_source_metadata_on_mismatch - computed: true, optional: false, required: false
  public get cleanSourceMetadataOnMismatch() {
    return this.getBooleanAttribute('clean_source_metadata_on_mismatch');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // events_poll_interval - computed: true, optional: false, required: false
  public get eventsPollInterval() {
    return this.getNumberAttribute('events_poll_interval');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // parallel_load_threads - computed: true, optional: false, required: false
  public get parallelLoadThreads() {
    return this.getNumberAttribute('parallel_load_threads');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // server_timezone - computed: true, optional: false, required: false
  public get serverTimezone() {
    return this.getStringAttribute('server_timezone');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccDmsEndpointIbmDb2Settings {
}

export function dataAwsccDmsEndpointIbmDb2SettingsToTerraform(struct?: DataAwsccDmsEndpointIbmDb2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointIbmDb2SettingsToHclTerraform(struct?: DataAwsccDmsEndpointIbmDb2Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointIbmDb2SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointIbmDb2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointIbmDb2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_lsn - computed: true, optional: false, required: false
  public get currentLsn() {
    return this.getStringAttribute('current_lsn');
  }

  // keep_csv_files - computed: true, optional: false, required: false
  public get keepCsvFiles() {
    return this.getBooleanAttribute('keep_csv_files');
  }

  // load_timeout - computed: true, optional: false, required: false
  public get loadTimeout() {
    return this.getNumberAttribute('load_timeout');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // max_k_bytes_per_read - computed: true, optional: false, required: false
  public get maxKBytesPerRead() {
    return this.getNumberAttribute('max_k_bytes_per_read');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // set_data_capture_changes - computed: true, optional: false, required: false
  public get setDataCaptureChanges() {
    return this.getBooleanAttribute('set_data_capture_changes');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataAwsccDmsEndpointKafkaSettings {
}

export function dataAwsccDmsEndpointKafkaSettingsToTerraform(struct?: DataAwsccDmsEndpointKafkaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointKafkaSettingsToHclTerraform(struct?: DataAwsccDmsEndpointKafkaSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointKafkaSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker - computed: true, optional: false, required: false
  public get broker() {
    return this.getStringAttribute('broker');
  }

  // include_control_details - computed: true, optional: false, required: false
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }

  // include_null_and_empty - computed: true, optional: false, required: false
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }

  // include_partition_value - computed: true, optional: false, required: false
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }

  // include_table_alter_operations - computed: true, optional: false, required: false
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }

  // include_transaction_details - computed: true, optional: false, required: false
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // message_max_bytes - computed: true, optional: false, required: false
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }

  // no_hex_prefix - computed: true, optional: false, required: false
  public get noHexPrefix() {
    return this.getBooleanAttribute('no_hex_prefix');
  }

  // partition_include_schema_table - computed: true, optional: false, required: false
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }

  // sasl_password - computed: true, optional: false, required: false
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }

  // sasl_user_name - computed: true, optional: false, required: false
  public get saslUserName() {
    return this.getStringAttribute('sasl_user_name');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // ssl_ca_certificate_arn - computed: true, optional: false, required: false
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }

  // ssl_client_certificate_arn - computed: true, optional: false, required: false
  public get sslClientCertificateArn() {
    return this.getStringAttribute('ssl_client_certificate_arn');
  }

  // ssl_client_key_arn - computed: true, optional: false, required: false
  public get sslClientKeyArn() {
    return this.getStringAttribute('ssl_client_key_arn');
  }

  // ssl_client_key_password - computed: true, optional: false, required: false
  public get sslClientKeyPassword() {
    return this.getStringAttribute('ssl_client_key_password');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAwsccDmsEndpointKinesisSettings {
}

export function dataAwsccDmsEndpointKinesisSettingsToTerraform(struct?: DataAwsccDmsEndpointKinesisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointKinesisSettingsToHclTerraform(struct?: DataAwsccDmsEndpointKinesisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointKinesisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointKinesisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointKinesisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_control_details - computed: true, optional: false, required: false
  public get includeControlDetails() {
    return this.getBooleanAttribute('include_control_details');
  }

  // include_null_and_empty - computed: true, optional: false, required: false
  public get includeNullAndEmpty() {
    return this.getBooleanAttribute('include_null_and_empty');
  }

  // include_partition_value - computed: true, optional: false, required: false
  public get includePartitionValue() {
    return this.getBooleanAttribute('include_partition_value');
  }

  // include_table_alter_operations - computed: true, optional: false, required: false
  public get includeTableAlterOperations() {
    return this.getBooleanAttribute('include_table_alter_operations');
  }

  // include_transaction_details - computed: true, optional: false, required: false
  public get includeTransactionDetails() {
    return this.getBooleanAttribute('include_transaction_details');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // no_hex_prefix - computed: true, optional: false, required: false
  public get noHexPrefix() {
    return this.getBooleanAttribute('no_hex_prefix');
  }

  // partition_include_schema_table - computed: true, optional: false, required: false
  public get partitionIncludeSchemaTable() {
    return this.getBooleanAttribute('partition_include_schema_table');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}
export interface DataAwsccDmsEndpointMicrosoftSqlServerSettings {
}

export function dataAwsccDmsEndpointMicrosoftSqlServerSettingsToTerraform(struct?: DataAwsccDmsEndpointMicrosoftSqlServerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointMicrosoftSqlServerSettingsToHclTerraform(struct?: DataAwsccDmsEndpointMicrosoftSqlServerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointMicrosoftSqlServerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointMicrosoftSqlServerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bcp_packet_size - computed: true, optional: false, required: false
  public get bcpPacketSize() {
    return this.getNumberAttribute('bcp_packet_size');
  }

  // control_tables_file_group - computed: true, optional: false, required: false
  public get controlTablesFileGroup() {
    return this.getStringAttribute('control_tables_file_group');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // force_lob_lookup - computed: true, optional: false, required: false
  public get forceLobLookup() {
    return this.getBooleanAttribute('force_lob_lookup');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // query_single_always_on_node - computed: true, optional: false, required: false
  public get querySingleAlwaysOnNode() {
    return this.getBooleanAttribute('query_single_always_on_node');
  }

  // read_backup_only - computed: true, optional: false, required: false
  public get readBackupOnly() {
    return this.getBooleanAttribute('read_backup_only');
  }

  // safeguard_policy - computed: true, optional: false, required: false
  public get safeguardPolicy() {
    return this.getStringAttribute('safeguard_policy');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // tlog_access_mode - computed: true, optional: false, required: false
  public get tlogAccessMode() {
    return this.getStringAttribute('tlog_access_mode');
  }

  // trim_space_in_char - computed: true, optional: false, required: false
  public get trimSpaceInChar() {
    return this.getBooleanAttribute('trim_space_in_char');
  }

  // use_bcp_full_load - computed: true, optional: false, required: false
  public get useBcpFullLoad() {
    return this.getBooleanAttribute('use_bcp_full_load');
  }

  // use_third_party_backup_device - computed: true, optional: false, required: false
  public get useThirdPartyBackupDevice() {
    return this.getBooleanAttribute('use_third_party_backup_device');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccDmsEndpointMongoDbSettings {
}

export function dataAwsccDmsEndpointMongoDbSettingsToTerraform(struct?: DataAwsccDmsEndpointMongoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointMongoDbSettingsToHclTerraform(struct?: DataAwsccDmsEndpointMongoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointMongoDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointMongoDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointMongoDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_mechanism - computed: true, optional: false, required: false
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }

  // auth_source - computed: true, optional: false, required: false
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // docs_to_investigate - computed: true, optional: false, required: false
  public get docsToInvestigate() {
    return this.getStringAttribute('docs_to_investigate');
  }

  // extract_doc_id - computed: true, optional: false, required: false
  public get extractDocId() {
    return this.getStringAttribute('extract_doc_id');
  }

  // nesting_level - computed: true, optional: false, required: false
  public get nestingLevel() {
    return this.getStringAttribute('nesting_level');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccDmsEndpointMySqlSettings {
}

export function dataAwsccDmsEndpointMySqlSettingsToTerraform(struct?: DataAwsccDmsEndpointMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointMySqlSettingsToHclTerraform(struct?: DataAwsccDmsEndpointMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointMySqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointMySqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointMySqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_connect_script - computed: true, optional: false, required: false
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }

  // clean_source_metadata_on_mismatch - computed: true, optional: false, required: false
  public get cleanSourceMetadataOnMismatch() {
    return this.getBooleanAttribute('clean_source_metadata_on_mismatch');
  }

  // events_poll_interval - computed: true, optional: false, required: false
  public get eventsPollInterval() {
    return this.getNumberAttribute('events_poll_interval');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // parallel_load_threads - computed: true, optional: false, required: false
  public get parallelLoadThreads() {
    return this.getNumberAttribute('parallel_load_threads');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // server_timezone - computed: true, optional: false, required: false
  public get serverTimezone() {
    return this.getStringAttribute('server_timezone');
  }

  // target_db_type - computed: true, optional: false, required: false
  public get targetDbType() {
    return this.getStringAttribute('target_db_type');
  }
}
export interface DataAwsccDmsEndpointNeptuneSettings {
}

export function dataAwsccDmsEndpointNeptuneSettingsToTerraform(struct?: DataAwsccDmsEndpointNeptuneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointNeptuneSettingsToHclTerraform(struct?: DataAwsccDmsEndpointNeptuneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointNeptuneSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointNeptuneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointNeptuneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_retry_duration - computed: true, optional: false, required: false
  public get errorRetryDuration() {
    return this.getNumberAttribute('error_retry_duration');
  }

  // iam_auth_enabled - computed: true, optional: false, required: false
  public get iamAuthEnabled() {
    return this.getBooleanAttribute('iam_auth_enabled');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // max_retry_count - computed: true, optional: false, required: false
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }

  // s3_bucket_folder - computed: true, optional: false, required: false
  public get s3BucketFolder() {
    return this.getStringAttribute('s3_bucket_folder');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }
}
export interface DataAwsccDmsEndpointOracleSettings {
}

export function dataAwsccDmsEndpointOracleSettingsToTerraform(struct?: DataAwsccDmsEndpointOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointOracleSettingsToHclTerraform(struct?: DataAwsccDmsEndpointOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointOracleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointOracleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointOracleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_alternate_directly - computed: true, optional: false, required: false
  public get accessAlternateDirectly() {
    return this.getBooleanAttribute('access_alternate_directly');
  }

  // add_supplemental_logging - computed: true, optional: false, required: false
  public get addSupplementalLogging() {
    return this.getBooleanAttribute('add_supplemental_logging');
  }

  // additional_archived_log_dest_id - computed: true, optional: false, required: false
  public get additionalArchivedLogDestId() {
    return this.getNumberAttribute('additional_archived_log_dest_id');
  }

  // allow_select_nested_tables - computed: true, optional: false, required: false
  public get allowSelectNestedTables() {
    return this.getBooleanAttribute('allow_select_nested_tables');
  }

  // archived_log_dest_id - computed: true, optional: false, required: false
  public get archivedLogDestId() {
    return this.getNumberAttribute('archived_log_dest_id');
  }

  // archived_logs_only - computed: true, optional: false, required: false
  public get archivedLogsOnly() {
    return this.getBooleanAttribute('archived_logs_only');
  }

  // asm_password - computed: true, optional: false, required: false
  public get asmPassword() {
    return this.getStringAttribute('asm_password');
  }

  // asm_server - computed: true, optional: false, required: false
  public get asmServer() {
    return this.getStringAttribute('asm_server');
  }

  // asm_user - computed: true, optional: false, required: false
  public get asmUser() {
    return this.getStringAttribute('asm_user');
  }

  // char_length_semantics - computed: true, optional: false, required: false
  public get charLengthSemantics() {
    return this.getStringAttribute('char_length_semantics');
  }

  // direct_path_no_log - computed: true, optional: false, required: false
  public get directPathNoLog() {
    return this.getBooleanAttribute('direct_path_no_log');
  }

  // direct_path_parallel_load - computed: true, optional: false, required: false
  public get directPathParallelLoad() {
    return this.getBooleanAttribute('direct_path_parallel_load');
  }

  // enable_homogenous_tablespace - computed: true, optional: false, required: false
  public get enableHomogenousTablespace() {
    return this.getBooleanAttribute('enable_homogenous_tablespace');
  }

  // extra_archived_log_dest_ids - computed: true, optional: false, required: false
  public get extraArchivedLogDestIds() {
    return this.getNumberListAttribute('extra_archived_log_dest_ids');
  }

  // fail_tasks_on_lob_truncation - computed: true, optional: false, required: false
  public get failTasksOnLobTruncation() {
    return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
  }

  // number_datatype_scale - computed: true, optional: false, required: false
  public get numberDatatypeScale() {
    return this.getNumberAttribute('number_datatype_scale');
  }

  // oracle_path_prefix - computed: true, optional: false, required: false
  public get oraclePathPrefix() {
    return this.getStringAttribute('oracle_path_prefix');
  }

  // parallel_asm_read_threads - computed: true, optional: false, required: false
  public get parallelAsmReadThreads() {
    return this.getNumberAttribute('parallel_asm_read_threads');
  }

  // read_ahead_blocks - computed: true, optional: false, required: false
  public get readAheadBlocks() {
    return this.getNumberAttribute('read_ahead_blocks');
  }

  // read_table_space_name - computed: true, optional: false, required: false
  public get readTableSpaceName() {
    return this.getBooleanAttribute('read_table_space_name');
  }

  // replace_path_prefix - computed: true, optional: false, required: false
  public get replacePathPrefix() {
    return this.getBooleanAttribute('replace_path_prefix');
  }

  // retry_interval - computed: true, optional: false, required: false
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_oracle_asm_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerOracleAsmAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
  }

  // secrets_manager_oracle_asm_secret_id - computed: true, optional: false, required: false
  public get secretsManagerOracleAsmSecretId() {
    return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // security_db_encryption - computed: true, optional: false, required: false
  public get securityDbEncryption() {
    return this.getStringAttribute('security_db_encryption');
  }

  // security_db_encryption_name - computed: true, optional: false, required: false
  public get securityDbEncryptionName() {
    return this.getStringAttribute('security_db_encryption_name');
  }

  // spatial_data_option_to_geo_json_function_name - computed: true, optional: false, required: false
  public get spatialDataOptionToGeoJsonFunctionName() {
    return this.getStringAttribute('spatial_data_option_to_geo_json_function_name');
  }

  // standby_delay_time - computed: true, optional: false, required: false
  public get standbyDelayTime() {
    return this.getNumberAttribute('standby_delay_time');
  }

  // use_alternate_folder_for_online - computed: true, optional: false, required: false
  public get useAlternateFolderForOnline() {
    return this.getBooleanAttribute('use_alternate_folder_for_online');
  }

  // use_b_file - computed: true, optional: false, required: false
  public get useBFile() {
    return this.getBooleanAttribute('use_b_file');
  }

  // use_direct_path_full_load - computed: true, optional: false, required: false
  public get useDirectPathFullLoad() {
    return this.getBooleanAttribute('use_direct_path_full_load');
  }

  // use_logminer_reader - computed: true, optional: false, required: false
  public get useLogminerReader() {
    return this.getBooleanAttribute('use_logminer_reader');
  }

  // use_path_prefix - computed: true, optional: false, required: false
  public get usePathPrefix() {
    return this.getStringAttribute('use_path_prefix');
  }
}
export interface DataAwsccDmsEndpointPostgreSqlSettings {
}

export function dataAwsccDmsEndpointPostgreSqlSettingsToTerraform(struct?: DataAwsccDmsEndpointPostgreSqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointPostgreSqlSettingsToHclTerraform(struct?: DataAwsccDmsEndpointPostgreSqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointPostgreSqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointPostgreSqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointPostgreSqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_connect_script - computed: true, optional: false, required: false
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }

  // babelfish_database_name - computed: true, optional: false, required: false
  public get babelfishDatabaseName() {
    return this.getStringAttribute('babelfish_database_name');
  }

  // capture_ddls - computed: true, optional: false, required: false
  public get captureDdls() {
    return this.getBooleanAttribute('capture_ddls');
  }

  // database_mode - computed: true, optional: false, required: false
  public get databaseMode() {
    return this.getStringAttribute('database_mode');
  }

  // ddl_artifacts_schema - computed: true, optional: false, required: false
  public get ddlArtifactsSchema() {
    return this.getStringAttribute('ddl_artifacts_schema');
  }

  // execute_timeout - computed: true, optional: false, required: false
  public get executeTimeout() {
    return this.getNumberAttribute('execute_timeout');
  }

  // fail_tasks_on_lob_truncation - computed: true, optional: false, required: false
  public get failTasksOnLobTruncation() {
    return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
  }

  // heartbeat_enable - computed: true, optional: false, required: false
  public get heartbeatEnable() {
    return this.getBooleanAttribute('heartbeat_enable');
  }

  // heartbeat_frequency - computed: true, optional: false, required: false
  public get heartbeatFrequency() {
    return this.getNumberAttribute('heartbeat_frequency');
  }

  // heartbeat_schema - computed: true, optional: false, required: false
  public get heartbeatSchema() {
    return this.getStringAttribute('heartbeat_schema');
  }

  // map_boolean_as_boolean - computed: true, optional: false, required: false
  public get mapBooleanAsBoolean() {
    return this.getBooleanAttribute('map_boolean_as_boolean');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // slot_name - computed: true, optional: false, required: false
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
}
export interface DataAwsccDmsEndpointRedisSettings {
}

export function dataAwsccDmsEndpointRedisSettingsToTerraform(struct?: DataAwsccDmsEndpointRedisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointRedisSettingsToHclTerraform(struct?: DataAwsccDmsEndpointRedisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointRedisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointRedisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointRedisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auth_user_name - computed: true, optional: false, required: false
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_ca_certificate_arn - computed: true, optional: false, required: false
  public get sslCaCertificateArn() {
    return this.getStringAttribute('ssl_ca_certificate_arn');
  }

  // ssl_security_protocol - computed: true, optional: false, required: false
  public get sslSecurityProtocol() {
    return this.getStringAttribute('ssl_security_protocol');
  }
}
export interface DataAwsccDmsEndpointRedshiftSettings {
}

export function dataAwsccDmsEndpointRedshiftSettingsToTerraform(struct?: DataAwsccDmsEndpointRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointRedshiftSettingsToHclTerraform(struct?: DataAwsccDmsEndpointRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointRedshiftSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointRedshiftSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_any_date - computed: true, optional: false, required: false
  public get acceptAnyDate() {
    return this.getBooleanAttribute('accept_any_date');
  }

  // after_connect_script - computed: true, optional: false, required: false
  public get afterConnectScript() {
    return this.getStringAttribute('after_connect_script');
  }

  // bucket_folder - computed: true, optional: false, required: false
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // case_sensitive_names - computed: true, optional: false, required: false
  public get caseSensitiveNames() {
    return this.getBooleanAttribute('case_sensitive_names');
  }

  // comp_update - computed: true, optional: false, required: false
  public get compUpdate() {
    return this.getBooleanAttribute('comp_update');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // empty_as_null - computed: true, optional: false, required: false
  public get emptyAsNull() {
    return this.getBooleanAttribute('empty_as_null');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // explicit_ids - computed: true, optional: false, required: false
  public get explicitIds() {
    return this.getBooleanAttribute('explicit_ids');
  }

  // file_transfer_upload_streams - computed: true, optional: false, required: false
  public get fileTransferUploadStreams() {
    return this.getNumberAttribute('file_transfer_upload_streams');
  }

  // load_timeout - computed: true, optional: false, required: false
  public get loadTimeout() {
    return this.getNumberAttribute('load_timeout');
  }

  // map_boolean_as_boolean - computed: true, optional: false, required: false
  public get mapBooleanAsBoolean() {
    return this.getBooleanAttribute('map_boolean_as_boolean');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // remove_quotes - computed: true, optional: false, required: false
  public get removeQuotes() {
    return this.getBooleanAttribute('remove_quotes');
  }

  // replace_chars - computed: true, optional: false, required: false
  public get replaceChars() {
    return this.getStringAttribute('replace_chars');
  }

  // replace_invalid_chars - computed: true, optional: false, required: false
  public get replaceInvalidChars() {
    return this.getStringAttribute('replace_invalid_chars');
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }

  // server_side_encryption_kms_key_id - computed: true, optional: false, required: false
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // trim_blanks - computed: true, optional: false, required: false
  public get trimBlanks() {
    return this.getBooleanAttribute('trim_blanks');
  }

  // truncate_columns - computed: true, optional: false, required: false
  public get truncateColumns() {
    return this.getBooleanAttribute('truncate_columns');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataAwsccDmsEndpointS3Settings {
}

export function dataAwsccDmsEndpointS3SettingsToTerraform(struct?: DataAwsccDmsEndpointS3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointS3SettingsToHclTerraform(struct?: DataAwsccDmsEndpointS3Settings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointS3SettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_column_name - computed: true, optional: false, required: false
  public get addColumnName() {
    return this.getBooleanAttribute('add_column_name');
  }

  // add_trailing_padding_character - computed: true, optional: false, required: false
  public get addTrailingPaddingCharacter() {
    return this.getBooleanAttribute('add_trailing_padding_character');
  }

  // bucket_folder - computed: true, optional: false, required: false
  public get bucketFolder() {
    return this.getStringAttribute('bucket_folder');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // canned_acl_for_objects - computed: true, optional: false, required: false
  public get cannedAclForObjects() {
    return this.getStringAttribute('canned_acl_for_objects');
  }

  // cdc_inserts_and_updates - computed: true, optional: false, required: false
  public get cdcInsertsAndUpdates() {
    return this.getBooleanAttribute('cdc_inserts_and_updates');
  }

  // cdc_inserts_only - computed: true, optional: false, required: false
  public get cdcInsertsOnly() {
    return this.getBooleanAttribute('cdc_inserts_only');
  }

  // cdc_max_batch_interval - computed: true, optional: false, required: false
  public get cdcMaxBatchInterval() {
    return this.getNumberAttribute('cdc_max_batch_interval');
  }

  // cdc_min_file_size - computed: true, optional: false, required: false
  public get cdcMinFileSize() {
    return this.getNumberAttribute('cdc_min_file_size');
  }

  // cdc_path - computed: true, optional: false, required: false
  public get cdcPath() {
    return this.getStringAttribute('cdc_path');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // csv_delimiter - computed: true, optional: false, required: false
  public get csvDelimiter() {
    return this.getStringAttribute('csv_delimiter');
  }

  // csv_no_sup_value - computed: true, optional: false, required: false
  public get csvNoSupValue() {
    return this.getStringAttribute('csv_no_sup_value');
  }

  // csv_null_value - computed: true, optional: false, required: false
  public get csvNullValue() {
    return this.getStringAttribute('csv_null_value');
  }

  // csv_row_delimiter - computed: true, optional: false, required: false
  public get csvRowDelimiter() {
    return this.getStringAttribute('csv_row_delimiter');
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // data_page_size - computed: true, optional: false, required: false
  public get dataPageSize() {
    return this.getNumberAttribute('data_page_size');
  }

  // date_partition_delimiter - computed: true, optional: false, required: false
  public get datePartitionDelimiter() {
    return this.getStringAttribute('date_partition_delimiter');
  }

  // date_partition_enabled - computed: true, optional: false, required: false
  public get datePartitionEnabled() {
    return this.getBooleanAttribute('date_partition_enabled');
  }

  // date_partition_sequence - computed: true, optional: false, required: false
  public get datePartitionSequence() {
    return this.getStringAttribute('date_partition_sequence');
  }

  // date_partition_timezone - computed: true, optional: false, required: false
  public get datePartitionTimezone() {
    return this.getStringAttribute('date_partition_timezone');
  }

  // dict_page_size_limit - computed: true, optional: false, required: false
  public get dictPageSizeLimit() {
    return this.getNumberAttribute('dict_page_size_limit');
  }

  // enable_statistics - computed: true, optional: false, required: false
  public get enableStatistics() {
    return this.getBooleanAttribute('enable_statistics');
  }

  // encoding_type - computed: true, optional: false, required: false
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // expected_bucket_owner - computed: true, optional: false, required: false
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }

  // external_table_definition - computed: true, optional: false, required: false
  public get externalTableDefinition() {
    return this.getStringAttribute('external_table_definition');
  }

  // glue_catalog_generation - computed: true, optional: false, required: false
  public get glueCatalogGeneration() {
    return this.getBooleanAttribute('glue_catalog_generation');
  }

  // ignore_header_rows - computed: true, optional: false, required: false
  public get ignoreHeaderRows() {
    return this.getNumberAttribute('ignore_header_rows');
  }

  // include_op_for_full_load - computed: true, optional: false, required: false
  public get includeOpForFullLoad() {
    return this.getBooleanAttribute('include_op_for_full_load');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // parquet_timestamp_in_millisecond - computed: true, optional: false, required: false
  public get parquetTimestampInMillisecond() {
    return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
  }

  // parquet_version - computed: true, optional: false, required: false
  public get parquetVersion() {
    return this.getStringAttribute('parquet_version');
  }

  // preserve_transactions - computed: true, optional: false, required: false
  public get preserveTransactions() {
    return this.getBooleanAttribute('preserve_transactions');
  }

  // rfc_4180 - computed: true, optional: false, required: false
  public get rfc4180() {
    return this.getBooleanAttribute('rfc_4180');
  }

  // row_group_length - computed: true, optional: false, required: false
  public get rowGroupLength() {
    return this.getNumberAttribute('row_group_length');
  }

  // server_side_encryption_kms_key_id - computed: true, optional: false, required: false
  public get serverSideEncryptionKmsKeyId() {
    return this.getStringAttribute('server_side_encryption_kms_key_id');
  }

  // service_access_role_arn - computed: true, optional: false, required: false
  public get serviceAccessRoleArn() {
    return this.getStringAttribute('service_access_role_arn');
  }

  // timestamp_column_name - computed: true, optional: false, required: false
  public get timestampColumnName() {
    return this.getStringAttribute('timestamp_column_name');
  }

  // use_csv_no_sup_value - computed: true, optional: false, required: false
  public get useCsvNoSupValue() {
    return this.getBooleanAttribute('use_csv_no_sup_value');
  }

  // use_task_start_time_for_full_load_timestamp - computed: true, optional: false, required: false
  public get useTaskStartTimeForFullLoadTimestamp() {
    return this.getBooleanAttribute('use_task_start_time_for_full_load_timestamp');
  }
}
export interface DataAwsccDmsEndpointSybaseSettings {
}

export function dataAwsccDmsEndpointSybaseSettingsToTerraform(struct?: DataAwsccDmsEndpointSybaseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointSybaseSettingsToHclTerraform(struct?: DataAwsccDmsEndpointSybaseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointSybaseSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsEndpointSybaseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointSybaseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secrets_manager_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }

  // secrets_manager_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
}
export interface DataAwsccDmsEndpointTags {
}

export function dataAwsccDmsEndpointTagsToTerraform(struct?: DataAwsccDmsEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsEndpointTagsToHclTerraform(struct?: DataAwsccDmsEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsEndpointTags | undefined) {
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

export class DataAwsccDmsEndpointTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsEndpointTagsOutputReference {
    return new DataAwsccDmsEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint awscc_dms_endpoint}
*/
export class DataAwsccDmsEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDmsEndpoint to import
  * @param importFromId The id of the existing DataAwsccDmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDmsEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint awscc_dms_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDmsEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDmsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // doc_db_settings - computed: true, optional: false, required: false
  private _docDbSettings = new DataAwsccDmsEndpointDocDbSettingsOutputReference(this, "doc_db_settings");
  public get docDbSettings() {
    return this._docDbSettings;
  }

  // dynamo_db_settings - computed: true, optional: false, required: false
  private _dynamoDbSettings = new DataAwsccDmsEndpointDynamoDbSettingsOutputReference(this, "dynamo_db_settings");
  public get dynamoDbSettings() {
    return this._dynamoDbSettings;
  }

  // elasticsearch_settings - computed: true, optional: false, required: false
  private _elasticsearchSettings = new DataAwsccDmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings");
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
  }

  // endpoint_arn - computed: true, optional: false, required: false
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_identifier - computed: true, optional: false, required: false
  public get endpointIdentifier() {
    return this.getStringAttribute('endpoint_identifier');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // engine_name - computed: true, optional: false, required: false
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // extra_connection_attributes - computed: true, optional: false, required: false
  public get extraConnectionAttributes() {
    return this.getStringAttribute('extra_connection_attributes');
  }

  // gcp_my_sql_settings - computed: true, optional: false, required: false
  private _gcpMySqlSettings = new DataAwsccDmsEndpointGcpMySqlSettingsOutputReference(this, "gcp_my_sql_settings");
  public get gcpMySqlSettings() {
    return this._gcpMySqlSettings;
  }

  // ibm_db_2_settings - computed: true, optional: false, required: false
  private _ibmDb2Settings = new DataAwsccDmsEndpointIbmDb2SettingsOutputReference(this, "ibm_db_2_settings");
  public get ibmDb2Settings() {
    return this._ibmDb2Settings;
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

  // kafka_settings - computed: true, optional: false, required: false
  private _kafkaSettings = new DataAwsccDmsEndpointKafkaSettingsOutputReference(this, "kafka_settings");
  public get kafkaSettings() {
    return this._kafkaSettings;
  }

  // kinesis_settings - computed: true, optional: false, required: false
  private _kinesisSettings = new DataAwsccDmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings");
  public get kinesisSettings() {
    return this._kinesisSettings;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // microsoft_sql_server_settings - computed: true, optional: false, required: false
  private _microsoftSqlServerSettings = new DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference(this, "microsoft_sql_server_settings");
  public get microsoftSqlServerSettings() {
    return this._microsoftSqlServerSettings;
  }

  // mongo_db_settings - computed: true, optional: false, required: false
  private _mongoDbSettings = new DataAwsccDmsEndpointMongoDbSettingsOutputReference(this, "mongo_db_settings");
  public get mongoDbSettings() {
    return this._mongoDbSettings;
  }

  // my_sql_settings - computed: true, optional: false, required: false
  private _mySqlSettings = new DataAwsccDmsEndpointMySqlSettingsOutputReference(this, "my_sql_settings");
  public get mySqlSettings() {
    return this._mySqlSettings;
  }

  // neptune_settings - computed: true, optional: false, required: false
  private _neptuneSettings = new DataAwsccDmsEndpointNeptuneSettingsOutputReference(this, "neptune_settings");
  public get neptuneSettings() {
    return this._neptuneSettings;
  }

  // oracle_settings - computed: true, optional: false, required: false
  private _oracleSettings = new DataAwsccDmsEndpointOracleSettingsOutputReference(this, "oracle_settings");
  public get oracleSettings() {
    return this._oracleSettings;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // postgre_sql_settings - computed: true, optional: false, required: false
  private _postgreSqlSettings = new DataAwsccDmsEndpointPostgreSqlSettingsOutputReference(this, "postgre_sql_settings");
  public get postgreSqlSettings() {
    return this._postgreSqlSettings;
  }

  // redis_settings - computed: true, optional: false, required: false
  private _redisSettings = new DataAwsccDmsEndpointRedisSettingsOutputReference(this, "redis_settings");
  public get redisSettings() {
    return this._redisSettings;
  }

  // redshift_settings - computed: true, optional: false, required: false
  private _redshiftSettings = new DataAwsccDmsEndpointRedshiftSettingsOutputReference(this, "redshift_settings");
  public get redshiftSettings() {
    return this._redshiftSettings;
  }

  // resource_identifier - computed: true, optional: false, required: false
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }

  // s3_settings - computed: true, optional: false, required: false
  private _s3Settings = new DataAwsccDmsEndpointS3SettingsOutputReference(this, "s3_settings");
  public get s3Settings() {
    return this._s3Settings;
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // sybase_settings - computed: true, optional: false, required: false
  private _sybaseSettings = new DataAwsccDmsEndpointSybaseSettingsOutputReference(this, "sybase_settings");
  public get sybaseSettings() {
    return this._sybaseSettings;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDmsEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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
