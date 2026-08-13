/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueTableOptimizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The catalog ID of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#catalog_id GlueTableOptimizer#catalog_id}
  */
  readonly catalogId: string;
  /**
  * The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#database_name GlueTableOptimizer#database_name}
  */
  readonly databaseName: string;
  /**
  * The table name. For Hive compatibility, this must be entirely lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#table_name GlueTableOptimizer#table_name}
  */
  readonly tableName: string;
  /**
  * Specifies configuration details of a table optimizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#table_optimizer_configuration GlueTableOptimizer#table_optimizer_configuration}
  */
  readonly tableOptimizerConfiguration: GlueTableOptimizerTableOptimizerConfiguration;
  /**
  * The type of table optimizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#type GlueTableOptimizer#type}
  */
  readonly type: string;
}
export interface GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration {
  /**
  * The minimum number of deletes in a data file to make it eligible for compaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#delete_file_threshold GlueTableOptimizer#delete_file_threshold}
  */
  readonly deleteFileThreshold?: number;
  /**
  * The minimum number of input files before compaction is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#min_input_files GlueTableOptimizer#min_input_files}
  */
  readonly minInputFiles?: number;
  /**
  * The compaction strategy to use. Valid values are binpack, sort, and z-order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#strategy GlueTableOptimizer#strategy}
  */
  readonly strategy?: string;
}

export function glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_file_threshold: cdktn.numberToTerraform(struct!.deleteFileThreshold),
    min_input_files: cdktn.numberToTerraform(struct!.minInputFiles),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_file_threshold: {
      value: cdktn.numberToHclTerraform(struct!.deleteFileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_input_files: {
      value: cdktn.numberToHclTerraform(struct!.minInputFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteFileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteFileThreshold = this._deleteFileThreshold;
    }
    if (this._minInputFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInputFiles = this._minInputFiles;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteFileThreshold = undefined;
      this._minInputFiles = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteFileThreshold = value.deleteFileThreshold;
      this._minInputFiles = value.minInputFiles;
      this._strategy = value.strategy;
    }
  }

  // delete_file_threshold - computed: true, optional: true, required: false
  private _deleteFileThreshold?: number; 
  public get deleteFileThreshold() {
    return this.getNumberAttribute('delete_file_threshold');
  }
  public set deleteFileThreshold(value: number) {
    this._deleteFileThreshold = value;
  }
  public resetDeleteFileThreshold() {
    this._deleteFileThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFileThresholdInput() {
    return this._deleteFileThreshold;
  }

  // min_input_files - computed: true, optional: true, required: false
  private _minInputFiles?: number; 
  public get minInputFiles() {
    return this.getNumberAttribute('min_input_files');
  }
  public set minInputFiles(value: number) {
    this._minInputFiles = value;
  }
  public resetMinInputFiles() {
    this._minInputFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInputFilesInput() {
    return this._minInputFiles;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration {
  /**
  * The configuration for an Iceberg compaction optimizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration;
}

export function glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToTerraform(struct!.icebergConfiguration),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationToHclTerraform(struct!.icebergConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: true, optional: true, required: false
  private _icebergConfiguration = new GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {
  /**
  * Specifies a directory in which to look for orphan files (defaults to the table's location). You may choose a sub-directory rather than the top-level table location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#location GlueTableOptimizer#location}
  */
  readonly location?: string;
  /**
  * The specific number of days you want to keep the orphan files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days GlueTableOptimizer#orphan_file_retention_period_in_days}
  */
  readonly orphanFileRetentionPeriodInDays?: number;
}

export function glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    orphan_file_retention_period_in_days: cdktn.numberToTerraform(struct!.orphanFileRetentionPeriodInDays),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_file_retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.orphanFileRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._orphanFileRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileRetentionPeriodInDays = this._orphanFileRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._orphanFileRetentionPeriodInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._orphanFileRetentionPeriodInDays = value.orphanFileRetentionPeriodInDays;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // orphan_file_retention_period_in_days - computed: true, optional: true, required: false
  private _orphanFileRetentionPeriodInDays?: number; 
  public get orphanFileRetentionPeriodInDays() {
    return this.getNumberAttribute('orphan_file_retention_period_in_days');
  }
  public set orphanFileRetentionPeriodInDays(value: number) {
    this._orphanFileRetentionPeriodInDays = value;
  }
  public resetOrphanFileRetentionPeriodInDays() {
    this._orphanFileRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileRetentionPeriodInDaysInput() {
    return this._orphanFileRetentionPeriodInDays;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration {
  /**
  * The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
}

export function glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform(struct!.icebergConfiguration),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform(struct!.icebergConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: true, optional: true, required: false
  private _icebergConfiguration = new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}
  */
  readonly cleanExpiredFiles?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}
  */
  readonly numberOfSnapshotsToRetain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}
  */
  readonly snapshotRetentionPeriodInDays?: number;
}

export function glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clean_expired_files: cdktn.booleanToTerraform(struct!.cleanExpiredFiles),
    number_of_snapshots_to_retain: cdktn.numberToTerraform(struct!.numberOfSnapshotsToRetain),
    snapshot_retention_period_in_days: cdktn.numberToTerraform(struct!.snapshotRetentionPeriodInDays),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clean_expired_files: {
      value: cdktn.booleanToHclTerraform(struct!.cleanExpiredFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_snapshots_to_retain: {
      value: cdktn.numberToHclTerraform(struct!.numberOfSnapshotsToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.snapshotRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanExpiredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanExpiredFiles = this._cleanExpiredFiles;
    }
    if (this._numberOfSnapshotsToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfSnapshotsToRetain = this._numberOfSnapshotsToRetain;
    }
    if (this._snapshotRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionPeriodInDays = this._snapshotRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = undefined;
      this._numberOfSnapshotsToRetain = undefined;
      this._snapshotRetentionPeriodInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = value.cleanExpiredFiles;
      this._numberOfSnapshotsToRetain = value.numberOfSnapshotsToRetain;
      this._snapshotRetentionPeriodInDays = value.snapshotRetentionPeriodInDays;
    }
  }

  // clean_expired_files - computed: true, optional: true, required: false
  private _cleanExpiredFiles?: boolean | cdktn.IResolvable; 
  public get cleanExpiredFiles() {
    return this.getBooleanAttribute('clean_expired_files');
  }
  public set cleanExpiredFiles(value: boolean | cdktn.IResolvable) {
    this._cleanExpiredFiles = value;
  }
  public resetCleanExpiredFiles() {
    this._cleanExpiredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanExpiredFilesInput() {
    return this._cleanExpiredFiles;
  }

  // number_of_snapshots_to_retain - computed: true, optional: true, required: false
  private _numberOfSnapshotsToRetain?: number; 
  public get numberOfSnapshotsToRetain() {
    return this.getNumberAttribute('number_of_snapshots_to_retain');
  }
  public set numberOfSnapshotsToRetain(value: number) {
    this._numberOfSnapshotsToRetain = value;
  }
  public resetNumberOfSnapshotsToRetain() {
    this._numberOfSnapshotsToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSnapshotsToRetainInput() {
    return this._numberOfSnapshotsToRetain;
  }

  // snapshot_retention_period_in_days - computed: true, optional: true, required: false
  private _snapshotRetentionPeriodInDays?: number; 
  public get snapshotRetentionPeriodInDays() {
    return this.getNumberAttribute('snapshot_retention_period_in_days');
  }
  public set snapshotRetentionPeriodInDays(value: number) {
    this._snapshotRetentionPeriodInDays = value;
  }
  public resetSnapshotRetentionPeriodInDays() {
    this._snapshotRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionPeriodInDaysInput() {
    return this._snapshotRetentionPeriodInDays;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration {
  /**
  * The configuration for an Iceberg snapshot retention optimizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
}

export function glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_configuration: glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform(struct!.icebergConfiguration),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform(struct!.icebergConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: true, optional: true, required: false
  private _icebergConfiguration = new GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(this, "iceberg_configuration");
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}
export interface GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration {
  /**
  * The name of the AWS Glue connection used for the VPC for the table optimizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#glue_connection_name GlueTableOptimizer#glue_connection_name}
  */
  readonly glueConnectionName?: string;
}

export function glueTableOptimizerTableOptimizerConfigurationVpcConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationVpcConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    glue_connection_name: {
      value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueConnectionName = this._glueConnectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glueConnectionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glueConnectionName = value.glueConnectionName;
    }
  }

  // glue_connection_name - computed: true, optional: true, required: false
  private _glueConnectionName?: string; 
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }
  public set glueConnectionName(value: string) {
    this._glueConnectionName = value;
  }
  public resetGlueConnectionName() {
    this._glueConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueConnectionNameInput() {
    return this._glueConnectionName;
  }
}
export interface GlueTableOptimizerTableOptimizerConfiguration {
  /**
  * The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#compaction_configuration GlueTableOptimizer#compaction_configuration}
  */
  readonly compactionConfiguration?: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration;
  /**
  * Whether the table optimization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#enabled GlueTableOptimizer#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource. It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration GlueTableOptimizer#orphan_file_deletion_configuration}
  */
  readonly orphanFileDeletionConfiguration?: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration;
  /**
  * The configuration for a snapshot retention optimizer for Apache Iceberg tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#retention_configuration GlueTableOptimizer#retention_configuration}
  */
  readonly retentionConfiguration?: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration;
  /**
  * A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#role_arn GlueTableOptimizer#role_arn}
  */
  readonly roleArn: string;
  /**
  * An object that describes the VPC configuration for a table optimizer. This configuration is necessary to perform optimization on tables that are in a customer VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#vpc_configuration GlueTableOptimizer#vpc_configuration}
  */
  readonly vpcConfiguration?: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration;
}

export function glueTableOptimizerTableOptimizerConfigurationToTerraform(struct?: GlueTableOptimizerTableOptimizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compaction_configuration: glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToTerraform(struct!.compactionConfiguration),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    orphan_file_deletion_configuration: glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform(struct!.orphanFileDeletionConfiguration),
    retention_configuration: glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToTerraform(struct!.retentionConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    vpc_configuration: glueTableOptimizerTableOptimizerConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function glueTableOptimizerTableOptimizerConfigurationToHclTerraform(struct?: GlueTableOptimizerTableOptimizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compaction_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationCompactionConfigurationToHclTerraform(struct!.compactionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    orphan_file_deletion_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform(struct!.orphanFileDeletionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration",
    },
    retention_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationRetentionConfigurationToHclTerraform(struct!.retentionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_configuration: {
      value: glueTableOptimizerTableOptimizerConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOptimizerTableOptimizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOptimizerTableOptimizerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactionConfiguration = this._compactionConfiguration?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._orphanFileDeletionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileDeletionConfiguration = this._orphanFileDeletionConfiguration?.internalValue;
    }
    if (this._retentionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionConfiguration = this._retentionConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOptimizerTableOptimizerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactionConfiguration.internalValue = undefined;
      this._enabled = undefined;
      this._orphanFileDeletionConfiguration.internalValue = undefined;
      this._retentionConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactionConfiguration.internalValue = value.compactionConfiguration;
      this._enabled = value.enabled;
      this._orphanFileDeletionConfiguration.internalValue = value.orphanFileDeletionConfiguration;
      this._retentionConfiguration.internalValue = value.retentionConfiguration;
      this._roleArn = value.roleArn;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // compaction_configuration - computed: true, optional: true, required: false
  private _compactionConfiguration = new GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(this, "compaction_configuration");
  public get compactionConfiguration() {
    return this._compactionConfiguration;
  }
  public putCompactionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration) {
    this._compactionConfiguration.internalValue = value;
  }
  public resetCompactionConfiguration() {
    this._compactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionConfigurationInput() {
    return this._compactionConfiguration.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // orphan_file_deletion_configuration - computed: true, optional: true, required: false
  private _orphanFileDeletionConfiguration = new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(this, "orphan_file_deletion_configuration");
  public get orphanFileDeletionConfiguration() {
    return this._orphanFileDeletionConfiguration;
  }
  public putOrphanFileDeletionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration) {
    this._orphanFileDeletionConfiguration.internalValue = value;
  }
  public resetOrphanFileDeletionConfiguration() {
    this._orphanFileDeletionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileDeletionConfigurationInput() {
    return this._orphanFileDeletionConfiguration.internalValue;
  }

  // retention_configuration - computed: true, optional: true, required: false
  private _retentionConfiguration = new GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(this, "retention_configuration");
  public get retentionConfiguration() {
    return this._retentionConfiguration;
  }
  public putRetentionConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration) {
    this._retentionConfiguration.internalValue = value;
  }
  public resetRetentionConfiguration() {
    this._retentionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigurationInput() {
    return this._retentionConfiguration.internalValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer awscc_glue_table_optimizer}
*/
export class GlueTableOptimizer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_table_optimizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueTableOptimizer to import
  * @param importFromId The id of the existing GlueTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueTableOptimizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_table_optimizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer awscc_glue_table_optimizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueTableOptimizerConfig
  */
  public constructor(scope: Construct, id: string, config: GlueTableOptimizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_table_optimizer',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.97.0',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._tableName = config.tableName;
    this._tableOptimizerConfiguration.internalValue = config.tableOptimizerConfiguration;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_optimizer_configuration - computed: false, optional: false, required: true
  private _tableOptimizerConfiguration = new GlueTableOptimizerTableOptimizerConfigurationOutputReference(this, "table_optimizer_configuration");
  public get tableOptimizerConfiguration() {
    return this._tableOptimizerConfiguration;
  }
  public putTableOptimizerConfiguration(value: GlueTableOptimizerTableOptimizerConfiguration) {
    this._tableOptimizerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOptimizerConfigurationInput() {
    return this._tableOptimizerConfiguration.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      database_name: cdktn.stringToTerraform(this._databaseName),
      table_name: cdktn.stringToTerraform(this._tableName),
      table_optimizer_configuration: glueTableOptimizerTableOptimizerConfigurationToTerraform(this._tableOptimizerConfiguration.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_optimizer_configuration: {
        value: glueTableOptimizerTableOptimizerConfigurationToHclTerraform(this._tableOptimizerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueTableOptimizerTableOptimizerConfiguration",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
