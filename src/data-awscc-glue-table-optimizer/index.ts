/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueTableOptimizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer#id DataAwsccGlueTableOptimizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_file_threshold - computed: true, optional: false, required: false
  public get deleteFileThreshold() {
    return this.getNumberAttribute('delete_file_threshold');
  }

  // min_input_files - computed: true, optional: false, required: false
  public get minInputFiles() {
    return this.getNumberAttribute('min_input_files');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iceberg_configuration - computed: true, optional: false, required: false
  private _icebergConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // orphan_file_retention_period_in_days - computed: true, optional: false, required: false
  public get orphanFileRetentionPeriodInDays() {
    return this.getNumberAttribute('orphan_file_retention_period_in_days');
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iceberg_configuration - computed: true, optional: false, required: false
  private _icebergConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clean_expired_files - computed: true, optional: false, required: false
  public get cleanExpiredFiles() {
    return this.getBooleanAttribute('clean_expired_files');
  }

  // number_of_snapshots_to_retain - computed: true, optional: false, required: false
  public get numberOfSnapshotsToRetain() {
    return this.getNumberAttribute('number_of_snapshots_to_retain');
  }

  // snapshot_retention_period_in_days - computed: true, optional: false, required: false
  public get snapshotRetentionPeriodInDays() {
    return this.getNumberAttribute('snapshot_retention_period_in_days');
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iceberg_configuration - computed: true, optional: false, required: false
  private _icebergConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // glue_connection_name - computed: true, optional: false, required: false
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }
}
export interface DataAwsccGlueTableOptimizerTableOptimizerConfiguration {
}

export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationToTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueTableOptimizerTableOptimizerConfigurationToHclTerraform(struct?: DataAwsccGlueTableOptimizerTableOptimizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueTableOptimizerTableOptimizerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueTableOptimizerTableOptimizerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compaction_configuration - computed: true, optional: false, required: false
  private _compactionConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(this, "compaction_configuration");
  public get compactionConfiguration() {
    return this._compactionConfiguration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // orphan_file_deletion_configuration - computed: true, optional: false, required: false
  private _orphanFileDeletionConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(this, "orphan_file_deletion_configuration");
  public get orphanFileDeletionConfiguration() {
    return this._orphanFileDeletionConfiguration;
  }

  // retention_configuration - computed: true, optional: false, required: false
  private _retentionConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(this, "retention_configuration");
  public get retentionConfiguration() {
    return this._retentionConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer awscc_glue_table_optimizer}
*/
export class DataAwsccGlueTableOptimizer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_table_optimizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueTableOptimizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueTableOptimizer to import
  * @param importFromId The id of the existing DataAwsccGlueTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueTableOptimizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_table_optimizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer awscc_glue_table_optimizer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueTableOptimizerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueTableOptimizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_table_optimizer',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_optimizer_configuration - computed: true, optional: false, required: false
  private _tableOptimizerConfiguration = new DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference(this, "table_optimizer_configuration");
  public get tableOptimizerConfiguration() {
    return this._tableOptimizerConfiguration;
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
