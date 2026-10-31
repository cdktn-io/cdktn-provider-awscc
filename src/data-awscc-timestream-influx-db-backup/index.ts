/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/timestream_influx_db_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTimestreamInfluxDbBackupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/timestream_influx_db_backup#id DataAwsccTimestreamInfluxDbBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTimestreamInfluxDbBackupClusterConfiguration {
}

export function dataAwsccTimestreamInfluxDbBackupClusterConfigurationToTerraform(struct?: DataAwsccTimestreamInfluxDbBackupClusterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamInfluxDbBackupClusterConfigurationToHclTerraform(struct?: DataAwsccTimestreamInfluxDbBackupClusterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamInfluxDbBackupClusterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamInfluxDbBackupClusterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedicated_compactor - computed: true, optional: false, required: false
  public get dedicatedCompactor() {
    return this.getBooleanAttribute('dedicated_compactor');
  }

  // ingest_query_instances - computed: true, optional: false, required: false
  public get ingestQueryInstances() {
    return this.getNumberAttribute('ingest_query_instances');
  }

  // query_only_instances - computed: true, optional: false, required: false
  public get queryOnlyInstances() {
    return this.getNumberAttribute('query_only_instances');
  }
}
export interface DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration {
}

export function dataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationToTerraform(struct?: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration {
}

export function dataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationToTerraform(struct?: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationToHclTerraform(struct?: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
}
export interface DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule {
}

export function dataAwsccTimestreamInfluxDbBackupMaintenanceScheduleToTerraform(struct?: DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamInfluxDbBackupMaintenanceScheduleToHclTerraform(struct?: DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}
export interface DataAwsccTimestreamInfluxDbBackupTags {
}

export function dataAwsccTimestreamInfluxDbBackupTagsToTerraform(struct?: DataAwsccTimestreamInfluxDbBackupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTimestreamInfluxDbBackupTagsToHclTerraform(struct?: DataAwsccTimestreamInfluxDbBackupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTimestreamInfluxDbBackupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTimestreamInfluxDbBackupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTimestreamInfluxDbBackupTags | undefined) {
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

export class DataAwsccTimestreamInfluxDbBackupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTimestreamInfluxDbBackupTagsOutputReference {
    return new DataAwsccTimestreamInfluxDbBackupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/timestream_influx_db_backup awscc_timestream_influx_db_backup}
*/
export class DataAwsccTimestreamInfluxDbBackup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_timestream_influx_db_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTimestreamInfluxDbBackup to import
  * @param importFromId The id of the existing DataAwsccTimestreamInfluxDbBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTimestreamInfluxDbBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_influx_db_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/timestream_influx_db_backup awscc_timestream_influx_db_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTimestreamInfluxDbBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTimestreamInfluxDbBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_timestream_influx_db_backup',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.108.0',
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

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_configuration - computed: true, optional: false, required: false
  private _clusterConfiguration = new DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference(this, "cluster_configuration");
  public get clusterConfiguration() {
    return this._clusterConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // db_instance_type - computed: true, optional: false, required: false
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }

  // db_parameter_group_id - computed: true, optional: false, required: false
  public get dbParameterGroupId() {
    return this.getStringAttribute('db_parameter_group_id');
  }

  // db_resource_id - computed: true, optional: false, required: false
  public get dbResourceId() {
    return this.getStringAttribute('db_resource_id');
  }

  // db_storage_type - computed: true, optional: false, required: false
  public get dbStorageType() {
    return this.getStringAttribute('db_storage_type');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // expires_after - computed: true, optional: false, required: false
  public get expiresAfter() {
    return this.getStringAttribute('expires_after');
  }

  // failover_mode - computed: true, optional: false, required: false
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
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

  // influx_auth_parameters_secret_arn - computed: true, optional: false, required: false
  public get influxAuthParametersSecretArn() {
    return this.getStringAttribute('influx_auth_parameters_secret_arn');
  }

  // influx_db_backup_id - computed: true, optional: false, required: false
  public get influxDbBackupId() {
    return this.getStringAttribute('influx_db_backup_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // log_delivery_configuration - computed: true, optional: false, required: false
  private _logDeliveryConfiguration = new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(this, "log_delivery_configuration");
  public get logDeliveryConfiguration() {
    return this._logDeliveryConfiguration;
  }

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference(this, "maintenance_schedule");
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTimestreamInfluxDbBackupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }

  // vpc_subnet_ids - computed: true, optional: false, required: false
  public get vpcSubnetIds() {
    return this.getListAttribute('vpc_subnet_ids');
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
