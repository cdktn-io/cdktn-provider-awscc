/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccFsxVolumeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration {
}

export function dataAwsccFsxVolumeOntapConfigurationAggregateConfigurationToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationAggregateConfigurationToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregates - computed: true, optional: false, required: false
  public get aggregates() {
    return this.getListAttribute('aggregates');
  }

  // constituents_per_aggregate - computed: true, optional: false, required: false
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_retention - computed: true, optional: false, required: false
  private _defaultRetention = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }

  // maximum_retention - computed: true, optional: false, required: false
  private _maximumRetention = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(this, "maximum_retention");
  public get maximumRetention() {
    return this._maximumRetention;
  }

  // minimum_retention - computed: true, optional: false, required: false
  private _minimumRetention = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(this, "minimum_retention");
  public get minimumRetention() {
    return this._minimumRetention;
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration {
}

export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_log_volume - computed: true, optional: false, required: false
  public get auditLogVolume() {
    return this.getStringAttribute('audit_log_volume');
  }

  // autocommit_period - computed: true, optional: false, required: false
  private _autocommitPeriod = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(this, "autocommit_period");
  public get autocommitPeriod() {
    return this._autocommitPeriod;
  }

  // privileged_delete - computed: true, optional: false, required: false
  public get privilegedDelete() {
    return this.getStringAttribute('privileged_delete');
  }

  // retention_period - computed: true, optional: false, required: false
  private _retentionPeriod = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }

  // snaplock_type - computed: true, optional: false, required: false
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }

  // volume_append_mode_enabled - computed: true, optional: false, required: false
  public get volumeAppendModeEnabled() {
    return this.getStringAttribute('volume_append_mode_enabled');
  }
}
export interface DataAwsccFsxVolumeOntapConfigurationTieringPolicy {
}

export function dataAwsccFsxVolumeOntapConfigurationTieringPolicyToTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationTieringPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationTieringPolicyToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfigurationTieringPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfigurationTieringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfigurationTieringPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooling_period - computed: true, optional: false, required: false
  public get coolingPeriod() {
    return this.getNumberAttribute('cooling_period');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccFsxVolumeOntapConfiguration {
}

export function dataAwsccFsxVolumeOntapConfigurationToTerraform(struct?: DataAwsccFsxVolumeOntapConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOntapConfigurationToHclTerraform(struct?: DataAwsccFsxVolumeOntapConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOntapConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOntapConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOntapConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_configuration - computed: true, optional: false, required: false
  private _aggregateConfiguration = new DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference(this, "aggregate_configuration");
  public get aggregateConfiguration() {
    return this._aggregateConfiguration;
  }

  // copy_tags_to_backups - computed: true, optional: false, required: false
  public get copyTagsToBackups() {
    return this.getStringAttribute('copy_tags_to_backups');
  }

  // junction_path - computed: true, optional: false, required: false
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }

  // ontap_volume_type - computed: true, optional: false, required: false
  public get ontapVolumeType() {
    return this.getStringAttribute('ontap_volume_type');
  }

  // security_style - computed: true, optional: false, required: false
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // size_in_megabytes - computed: true, optional: false, required: false
  public get sizeInMegabytes() {
    return this.getStringAttribute('size_in_megabytes');
  }

  // snaplock_configuration - computed: true, optional: false, required: false
  private _snaplockConfiguration = new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(this, "snaplock_configuration");
  public get snaplockConfiguration() {
    return this._snaplockConfiguration;
  }

  // snapshot_policy - computed: true, optional: false, required: false
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }

  // storage_efficiency_enabled - computed: true, optional: false, required: false
  public get storageEfficiencyEnabled() {
    return this.getStringAttribute('storage_efficiency_enabled');
  }

  // storage_virtual_machine_id - computed: true, optional: false, required: false
  public get storageVirtualMachineId() {
    return this.getStringAttribute('storage_virtual_machine_id');
  }

  // tiering_policy - computed: true, optional: false, required: false
  private _tieringPolicy = new DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }

  // volume_style - computed: true, optional: false, required: false
  public get volumeStyle() {
    return this.getStringAttribute('volume_style');
  }
}
export interface DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations {
}

export function dataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToHclTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clients - computed: true, optional: false, required: false
  public get clients() {
    return this.getStringAttribute('clients');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getListAttribute('options');
  }
}

export class DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference {
    return new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFsxVolumeOpenZfsConfigurationNfsExports {
}

export function dataAwsccFsxVolumeOpenZfsConfigurationNfsExportsToTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationNfsExports): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOpenZfsConfigurationNfsExportsToHclTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationNfsExports): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxVolumeOpenZfsConfigurationNfsExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOpenZfsConfigurationNfsExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_configurations - computed: true, optional: false, required: false
  private _clientConfigurations = new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(this, "client_configurations", false);
  public get clientConfigurations() {
    return this._clientConfigurations;
  }
}

export class DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference {
    return new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot {
}

export function dataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotToTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotToHclTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_strategy - computed: true, optional: false, required: false
  public get copyStrategy() {
    return this.getStringAttribute('copy_strategy');
  }

  // snapshot_arn - computed: true, optional: false, required: false
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }
}
export interface DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas {
}

export function dataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasToTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasToHclTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // storage_capacity_quota_gi_b - computed: true, optional: false, required: false
  public get storageCapacityQuotaGiB() {
    return this.getNumberAttribute('storage_capacity_quota_gi_b');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference {
    return new DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccFsxVolumeOpenZfsConfiguration {
}

export function dataAwsccFsxVolumeOpenZfsConfigurationToTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeOpenZfsConfigurationToHclTerraform(struct?: DataAwsccFsxVolumeOpenZfsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeOpenZfsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxVolumeOpenZfsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeOpenZfsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_tags_to_snapshots - computed: true, optional: false, required: false
  public get copyTagsToSnapshots() {
    return this.getBooleanAttribute('copy_tags_to_snapshots');
  }

  // data_compression_type - computed: true, optional: false, required: false
  public get dataCompressionType() {
    return this.getStringAttribute('data_compression_type');
  }

  // nfs_exports - computed: true, optional: false, required: false
  private _nfsExports = new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList(this, "nfs_exports", false);
  public get nfsExports() {
    return this._nfsExports;
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getListAttribute('options');
  }

  // origin_snapshot - computed: true, optional: false, required: false
  private _originSnapshot = new DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(this, "origin_snapshot");
  public get originSnapshot() {
    return this._originSnapshot;
  }

  // parent_volume_id - computed: true, optional: false, required: false
  public get parentVolumeId() {
    return this.getStringAttribute('parent_volume_id');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // record_size_ki_b - computed: true, optional: false, required: false
  public get recordSizeKiB() {
    return this.getNumberAttribute('record_size_ki_b');
  }

  // storage_capacity_quota_gi_b - computed: true, optional: false, required: false
  public get storageCapacityQuotaGiB() {
    return this.getNumberAttribute('storage_capacity_quota_gi_b');
  }

  // storage_capacity_reservation_gi_b - computed: true, optional: false, required: false
  public get storageCapacityReservationGiB() {
    return this.getNumberAttribute('storage_capacity_reservation_gi_b');
  }

  // user_and_group_quotas - computed: true, optional: false, required: false
  private _userAndGroupQuotas = new DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(this, "user_and_group_quotas", false);
  public get userAndGroupQuotas() {
    return this._userAndGroupQuotas;
  }
}
export interface DataAwsccFsxVolumeTags {
}

export function dataAwsccFsxVolumeTagsToTerraform(struct?: DataAwsccFsxVolumeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxVolumeTagsToHclTerraform(struct?: DataAwsccFsxVolumeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxVolumeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxVolumeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxVolumeTags | undefined) {
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

export class DataAwsccFsxVolumeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxVolumeTagsOutputReference {
    return new DataAwsccFsxVolumeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume awscc_fsx_volume}
*/
export class DataAwsccFsxVolume extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccFsxVolume to import
  * @param importFromId The id of the existing DataAwsccFsxVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccFsxVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume awscc_fsx_volume} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFsxVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFsxVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fsx_volume',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ontap_configuration - computed: true, optional: false, required: false
  private _ontapConfiguration = new DataAwsccFsxVolumeOntapConfigurationOutputReference(this, "ontap_configuration");
  public get ontapConfiguration() {
    return this._ontapConfiguration;
  }

  // open_zfs_configuration - computed: true, optional: false, required: false
  private _openZfsConfiguration = new DataAwsccFsxVolumeOpenZfsConfigurationOutputReference(this, "open_zfs_configuration");
  public get openZfsConfiguration() {
    return this._openZfsConfiguration;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccFsxVolumeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
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
