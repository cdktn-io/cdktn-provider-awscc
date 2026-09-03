/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FsxVolumeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the ID of the volume backup to use to create a new volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}
  */
  readonly backupId?: string;
  /**
  * The name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}
  */
  readonly name: string;
  /**
  * The configuration of an Amazon FSx for NetApp ONTAP volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}
  */
  readonly ontapConfiguration?: FsxVolumeOntapConfiguration;
  /**
  * The configuration of an Amazon FSx for OpenZFS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}
  */
  readonly openZfsConfiguration?: FsxVolumeOpenZfsConfiguration;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}
  */
  readonly tags?: FsxVolumeTags[] | cdktn.IResolvable;
  /**
  * The type of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}
  */
  readonly volumeType?: string;
}
export interface FsxVolumeOntapConfigurationAggregateConfiguration {
  /**
  * The list of aggregates that this volume resides on. Aggregates are storage pools which make up your primary storage tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}
  */
  readonly aggregates?: string[];
  /**
  * Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}
  */
  readonly constituentsPerAggregate?: number;
}

export function fsxVolumeOntapConfigurationAggregateConfigurationToTerraform(struct?: FsxVolumeOntapConfigurationAggregateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aggregates),
    constituents_per_aggregate: cdktn.numberToTerraform(struct!.constituentsPerAggregate),
  }
}


export function fsxVolumeOntapConfigurationAggregateConfigurationToHclTerraform(struct?: FsxVolumeOntapConfigurationAggregateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aggregates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    constituents_per_aggregate: {
      value: cdktn.numberToHclTerraform(struct!.constituentsPerAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationAggregateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationAggregateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregates !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregates = this._aggregates;
    }
    if (this._constituentsPerAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constituentsPerAggregate = this._constituentsPerAggregate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationAggregateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregates = undefined;
      this._constituentsPerAggregate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregates = value.aggregates;
      this._constituentsPerAggregate = value.constituentsPerAggregate;
    }
  }

  // aggregates - computed: true, optional: true, required: false
  private _aggregates?: string[]; 
  public get aggregates() {
    return this.getListAttribute('aggregates');
  }
  public set aggregates(value: string[]) {
    this._aggregates = value;
  }
  public resetAggregates() {
    this._aggregates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates;
  }

  // constituents_per_aggregate - computed: true, optional: true, required: false
  private _constituentsPerAggregate?: number; 
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }
  public set constituentsPerAggregate(value: number) {
    this._constituentsPerAggregate = value;
  }
  public resetConstituentsPerAggregate() {
    this._constituentsPerAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constituentsPerAggregateInput() {
    return this._constituentsPerAggregate;
  }
}
export interface FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod {
  /**
  * Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to NONE disables autocommit. The default value is NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}
  */
  readonly type?: string;
  /**
  * Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}
  */
  readonly value?: number;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention {
  /**
  * Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}
  */
  readonly type?: string;
  /**
  * Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for INFINITE or UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}
  */
  readonly value?: number;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention {
  /**
  * Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}
  */
  readonly type?: string;
  /**
  * Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for INFINITE or UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}
  */
  readonly value?: number;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention {
  /**
  * Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}
  */
  readonly type?: string;
  /**
  * Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for INFINITE or UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}
  */
  readonly value?: number;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod {
  /**
  * The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}
  */
  readonly defaultRetention?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;
  /**
  * The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}
  */
  readonly maximumRetention?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;
  /**
  * The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}
  */
  readonly minimumRetention?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_retention: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct!.defaultRetention),
    maximum_retention: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct!.maximumRetention),
    minimum_retention: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct!.minimumRetention),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_retention: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention",
    },
    maximum_retention: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct!.maximumRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention",
    },
    minimum_retention: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct!.minimumRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    if (this._maximumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetention = this._maximumRetention?.internalValue;
    }
    if (this._minimumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetention = this._minimumRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = undefined;
      this._maximumRetention.internalValue = undefined;
      this._minimumRetention.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = value.defaultRetention;
      this._maximumRetention.internalValue = value.maximumRetention;
      this._minimumRetention.internalValue = value.minimumRetention;
    }
  }

  // default_retention - computed: true, optional: true, required: false
  private _defaultRetention = new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention) {
    this._defaultRetention.internalValue = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }

  // maximum_retention - computed: true, optional: true, required: false
  private _maximumRetention = new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(this, "maximum_retention");
  public get maximumRetention() {
    return this._maximumRetention;
  }
  public putMaximumRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention) {
    this._maximumRetention.internalValue = value;
  }
  public resetMaximumRetention() {
    this._maximumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetentionInput() {
    return this._maximumRetention.internalValue;
  }

  // minimum_retention - computed: true, optional: true, required: false
  private _minimumRetention = new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(this, "minimum_retention");
  public get minimumRetention() {
    return this._minimumRetention;
  }
  public putMinimumRetention(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention) {
    this._minimumRetention.internalValue = value;
  }
  public resetMinimumRetention() {
    this._minimumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionInput() {
    return this._minimumRetention.internalValue;
  }
}
export interface FsxVolumeOntapConfigurationSnaplockConfiguration {
  /**
  * Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}
  */
  readonly auditLogVolume?: string;
  /**
  * The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}
  */
  readonly autocommitPeriod?: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;
  /**
  * Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}
  */
  readonly privilegedDelete?: string;
  /**
  * Specifies the retention period of an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}
  */
  readonly retentionPeriod?: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;
  /**
  * Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}
  */
  readonly snaplockType?: string;
  /**
  * Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}
  */
  readonly volumeAppendModeEnabled?: string;
}

export function fsxVolumeOntapConfigurationSnaplockConfigurationToTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_log_volume: cdktn.stringToTerraform(struct!.auditLogVolume),
    autocommit_period: fsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToTerraform(struct!.autocommitPeriod),
    privileged_delete: cdktn.stringToTerraform(struct!.privilegedDelete),
    retention_period: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToTerraform(struct!.retentionPeriod),
    snaplock_type: cdktn.stringToTerraform(struct!.snaplockType),
    volume_append_mode_enabled: cdktn.stringToTerraform(struct!.volumeAppendModeEnabled),
  }
}


export function fsxVolumeOntapConfigurationSnaplockConfigurationToHclTerraform(struct?: FsxVolumeOntapConfigurationSnaplockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_log_volume: {
      value: cdktn.stringToHclTerraform(struct!.auditLogVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autocommit_period: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodToHclTerraform(struct!.autocommitPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod",
    },
    privileged_delete: {
      value: cdktn.stringToHclTerraform(struct!.privilegedDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodToHclTerraform(struct!.retentionPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod",
    },
    snaplock_type: {
      value: cdktn.stringToHclTerraform(struct!.snaplockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_append_mode_enabled: {
      value: cdktn.stringToHclTerraform(struct!.volumeAppendModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationSnaplockConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogVolume = this._auditLogVolume;
    }
    if (this._autocommitPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocommitPeriod = this._autocommitPeriod?.internalValue;
    }
    if (this._privilegedDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedDelete = this._privilegedDelete;
    }
    if (this._retentionPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod?.internalValue;
    }
    if (this._snaplockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaplockType = this._snaplockType;
    }
    if (this._volumeAppendModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAppendModeEnabled = this._volumeAppendModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationSnaplockConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLogVolume = undefined;
      this._autocommitPeriod.internalValue = undefined;
      this._privilegedDelete = undefined;
      this._retentionPeriod.internalValue = undefined;
      this._snaplockType = undefined;
      this._volumeAppendModeEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLogVolume = value.auditLogVolume;
      this._autocommitPeriod.internalValue = value.autocommitPeriod;
      this._privilegedDelete = value.privilegedDelete;
      this._retentionPeriod.internalValue = value.retentionPeriod;
      this._snaplockType = value.snaplockType;
      this._volumeAppendModeEnabled = value.volumeAppendModeEnabled;
    }
  }

  // audit_log_volume - computed: true, optional: true, required: false
  private _auditLogVolume?: string; 
  public get auditLogVolume() {
    return this.getStringAttribute('audit_log_volume');
  }
  public set auditLogVolume(value: string) {
    this._auditLogVolume = value;
  }
  public resetAuditLogVolume() {
    this._auditLogVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogVolumeInput() {
    return this._auditLogVolume;
  }

  // autocommit_period - computed: true, optional: true, required: false
  private _autocommitPeriod = new FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(this, "autocommit_period");
  public get autocommitPeriod() {
    return this._autocommitPeriod;
  }
  public putAutocommitPeriod(value: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod) {
    this._autocommitPeriod.internalValue = value;
  }
  public resetAutocommitPeriod() {
    this._autocommitPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitPeriodInput() {
    return this._autocommitPeriod.internalValue;
  }

  // privileged_delete - computed: true, optional: true, required: false
  private _privilegedDelete?: string; 
  public get privilegedDelete() {
    return this.getStringAttribute('privileged_delete');
  }
  public set privilegedDelete(value: string) {
    this._privilegedDelete = value;
  }
  public resetPrivilegedDelete() {
    this._privilegedDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedDeleteInput() {
    return this._privilegedDelete;
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod = new FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }

  // snaplock_type - computed: true, optional: true, required: false
  private _snaplockType?: string; 
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }
  public set snaplockType(value: string) {
    this._snaplockType = value;
  }
  public resetSnaplockType() {
    this._snaplockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockTypeInput() {
    return this._snaplockType;
  }

  // volume_append_mode_enabled - computed: true, optional: true, required: false
  private _volumeAppendModeEnabled?: string; 
  public get volumeAppendModeEnabled() {
    return this.getStringAttribute('volume_append_mode_enabled');
  }
  public set volumeAppendModeEnabled(value: string) {
    this._volumeAppendModeEnabled = value;
  }
  public resetVolumeAppendModeEnabled() {
    this._volumeAppendModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAppendModeEnabledInput() {
    return this._volumeAppendModeEnabled;
  }
}
export interface FsxVolumeOntapConfigurationTieringPolicy {
  /**
  * Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}
  */
  readonly coolingPeriod?: number;
  /**
  * Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}
  */
  readonly name?: string;
}

export function fsxVolumeOntapConfigurationTieringPolicyToTerraform(struct?: FsxVolumeOntapConfigurationTieringPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cooling_period: cdktn.numberToTerraform(struct!.coolingPeriod),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function fsxVolumeOntapConfigurationTieringPolicyToHclTerraform(struct?: FsxVolumeOntapConfigurationTieringPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cooling_period: {
      value: cdktn.numberToHclTerraform(struct!.coolingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationTieringPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfigurationTieringPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingPeriod = this._coolingPeriod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfigurationTieringPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coolingPeriod = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coolingPeriod = value.coolingPeriod;
      this._name = value.name;
    }
  }

  // cooling_period - computed: true, optional: true, required: false
  private _coolingPeriod?: number; 
  public get coolingPeriod() {
    return this.getNumberAttribute('cooling_period');
  }
  public set coolingPeriod(value: number) {
    this._coolingPeriod = value;
  }
  public resetCoolingPeriod() {
    this._coolingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingPeriodInput() {
    return this._coolingPeriod;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface FsxVolumeOntapConfiguration {
  /**
  * Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}
  */
  readonly aggregateConfiguration?: FsxVolumeOntapConfigurationAggregateConfiguration;
  /**
  * A boolean flag indicating whether tags for the volume should be copied to backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: string;
  /**
  * Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}
  */
  readonly junctionPath?: string;
  /**
  * Specifies the type of volume you are creating. Valid values are the following: RW or DP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}
  */
  readonly ontapVolumeType?: string;
  /**
  * Specifies the security style for the volume. If a volume's security style is not specified, it is automatically set to the root volume's security style.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Specifies the configured size of the volume, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}
  */
  readonly sizeInBytes?: string;
  /**
  * Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}
  */
  readonly sizeInMegabytes?: string;
  /**
  * The SnapLock configuration object for an FSx for ONTAP SnapLock volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}
  */
  readonly snaplockConfiguration?: FsxVolumeOntapConfigurationSnaplockConfiguration;
  /**
  * Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}
  */
  readonly storageEfficiencyEnabled?: string;
  /**
  * Specifies the ONTAP SVM in which to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}
  */
  readonly storageVirtualMachineId?: string;
  /**
  * Describes the data tiering policy for an ONTAP volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}
  */
  readonly tieringPolicy?: FsxVolumeOntapConfigurationTieringPolicy;
  /**
  * Use to specify the style of an ONTAP volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}
  */
  readonly volumeStyle?: string;
}

export function fsxVolumeOntapConfigurationToTerraform(struct?: FsxVolumeOntapConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregate_configuration: fsxVolumeOntapConfigurationAggregateConfigurationToTerraform(struct!.aggregateConfiguration),
    copy_tags_to_backups: cdktn.stringToTerraform(struct!.copyTagsToBackups),
    junction_path: cdktn.stringToTerraform(struct!.junctionPath),
    ontap_volume_type: cdktn.stringToTerraform(struct!.ontapVolumeType),
    security_style: cdktn.stringToTerraform(struct!.securityStyle),
    size_in_bytes: cdktn.stringToTerraform(struct!.sizeInBytes),
    size_in_megabytes: cdktn.stringToTerraform(struct!.sizeInMegabytes),
    snaplock_configuration: fsxVolumeOntapConfigurationSnaplockConfigurationToTerraform(struct!.snaplockConfiguration),
    snapshot_policy: cdktn.stringToTerraform(struct!.snapshotPolicy),
    storage_efficiency_enabled: cdktn.stringToTerraform(struct!.storageEfficiencyEnabled),
    storage_virtual_machine_id: cdktn.stringToTerraform(struct!.storageVirtualMachineId),
    tiering_policy: fsxVolumeOntapConfigurationTieringPolicyToTerraform(struct!.tieringPolicy),
    volume_style: cdktn.stringToTerraform(struct!.volumeStyle),
  }
}


export function fsxVolumeOntapConfigurationToHclTerraform(struct?: FsxVolumeOntapConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregate_configuration: {
      value: fsxVolumeOntapConfigurationAggregateConfigurationToHclTerraform(struct!.aggregateConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationAggregateConfiguration",
    },
    copy_tags_to_backups: {
      value: cdktn.stringToHclTerraform(struct!.copyTagsToBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    junction_path: {
      value: cdktn.stringToHclTerraform(struct!.junctionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ontap_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ontapVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktn.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_bytes: {
      value: cdktn.stringToHclTerraform(struct!.sizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_megabytes: {
      value: cdktn.stringToHclTerraform(struct!.sizeInMegabytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snaplock_configuration: {
      value: fsxVolumeOntapConfigurationSnaplockConfigurationToHclTerraform(struct!.snaplockConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationSnaplockConfiguration",
    },
    snapshot_policy: {
      value: cdktn.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_efficiency_enabled: {
      value: cdktn.stringToHclTerraform(struct!.storageEfficiencyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_virtual_machine_id: {
      value: cdktn.stringToHclTerraform(struct!.storageVirtualMachineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tiering_policy: {
      value: fsxVolumeOntapConfigurationTieringPolicyToHclTerraform(struct!.tieringPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOntapConfigurationTieringPolicy",
    },
    volume_style: {
      value: cdktn.stringToHclTerraform(struct!.volumeStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOntapConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOntapConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateConfiguration = this._aggregateConfiguration?.internalValue;
    }
    if (this._copyTagsToBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToBackups = this._copyTagsToBackups;
    }
    if (this._junctionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.junctionPath = this._junctionPath;
    }
    if (this._ontapVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ontapVolumeType = this._ontapVolumeType;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._sizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInBytes = this._sizeInBytes;
    }
    if (this._sizeInMegabytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInMegabytes = this._sizeInMegabytes;
    }
    if (this._snaplockConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaplockConfiguration = this._snaplockConfiguration?.internalValue;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._storageEfficiencyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEfficiencyEnabled = this._storageEfficiencyEnabled;
    }
    if (this._storageVirtualMachineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageVirtualMachineId = this._storageVirtualMachineId;
    }
    if (this._tieringPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy?.internalValue;
    }
    if (this._volumeStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeStyle = this._volumeStyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOntapConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateConfiguration.internalValue = undefined;
      this._copyTagsToBackups = undefined;
      this._junctionPath = undefined;
      this._ontapVolumeType = undefined;
      this._securityStyle = undefined;
      this._sizeInBytes = undefined;
      this._sizeInMegabytes = undefined;
      this._snaplockConfiguration.internalValue = undefined;
      this._snapshotPolicy = undefined;
      this._storageEfficiencyEnabled = undefined;
      this._storageVirtualMachineId = undefined;
      this._tieringPolicy.internalValue = undefined;
      this._volumeStyle = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateConfiguration.internalValue = value.aggregateConfiguration;
      this._copyTagsToBackups = value.copyTagsToBackups;
      this._junctionPath = value.junctionPath;
      this._ontapVolumeType = value.ontapVolumeType;
      this._securityStyle = value.securityStyle;
      this._sizeInBytes = value.sizeInBytes;
      this._sizeInMegabytes = value.sizeInMegabytes;
      this._snaplockConfiguration.internalValue = value.snaplockConfiguration;
      this._snapshotPolicy = value.snapshotPolicy;
      this._storageEfficiencyEnabled = value.storageEfficiencyEnabled;
      this._storageVirtualMachineId = value.storageVirtualMachineId;
      this._tieringPolicy.internalValue = value.tieringPolicy;
      this._volumeStyle = value.volumeStyle;
    }
  }

  // aggregate_configuration - computed: true, optional: true, required: false
  private _aggregateConfiguration = new FsxVolumeOntapConfigurationAggregateConfigurationOutputReference(this, "aggregate_configuration");
  public get aggregateConfiguration() {
    return this._aggregateConfiguration;
  }
  public putAggregateConfiguration(value: FsxVolumeOntapConfigurationAggregateConfiguration) {
    this._aggregateConfiguration.internalValue = value;
  }
  public resetAggregateConfiguration() {
    this._aggregateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateConfigurationInput() {
    return this._aggregateConfiguration.internalValue;
  }

  // copy_tags_to_backups - computed: true, optional: true, required: false
  private _copyTagsToBackups?: string; 
  public get copyTagsToBackups() {
    return this.getStringAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: string) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups;
  }

  // junction_path - computed: true, optional: true, required: false
  private _junctionPath?: string; 
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }
  public set junctionPath(value: string) {
    this._junctionPath = value;
  }
  public resetJunctionPath() {
    this._junctionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junctionPathInput() {
    return this._junctionPath;
  }

  // ontap_volume_type - computed: true, optional: true, required: false
  private _ontapVolumeType?: string; 
  public get ontapVolumeType() {
    return this.getStringAttribute('ontap_volume_type');
  }
  public set ontapVolumeType(value: string) {
    this._ontapVolumeType = value;
  }
  public resetOntapVolumeType() {
    this._ontapVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapVolumeTypeInput() {
    return this._ontapVolumeType;
  }

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // size_in_bytes - computed: true, optional: true, required: false
  private _sizeInBytes?: string; 
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }
  public set sizeInBytes(value: string) {
    this._sizeInBytes = value;
  }
  public resetSizeInBytes() {
    this._sizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInBytesInput() {
    return this._sizeInBytes;
  }

  // size_in_megabytes - computed: true, optional: true, required: false
  private _sizeInMegabytes?: string; 
  public get sizeInMegabytes() {
    return this.getStringAttribute('size_in_megabytes');
  }
  public set sizeInMegabytes(value: string) {
    this._sizeInMegabytes = value;
  }
  public resetSizeInMegabytes() {
    this._sizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMegabytesInput() {
    return this._sizeInMegabytes;
  }

  // snaplock_configuration - computed: true, optional: true, required: false
  private _snaplockConfiguration = new FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(this, "snaplock_configuration");
  public get snaplockConfiguration() {
    return this._snaplockConfiguration;
  }
  public putSnaplockConfiguration(value: FsxVolumeOntapConfigurationSnaplockConfiguration) {
    this._snaplockConfiguration.internalValue = value;
  }
  public resetSnaplockConfiguration() {
    this._snaplockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockConfigurationInput() {
    return this._snaplockConfiguration.internalValue;
  }

  // snapshot_policy - computed: true, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // storage_efficiency_enabled - computed: true, optional: true, required: false
  private _storageEfficiencyEnabled?: string; 
  public get storageEfficiencyEnabled() {
    return this.getStringAttribute('storage_efficiency_enabled');
  }
  public set storageEfficiencyEnabled(value: string) {
    this._storageEfficiencyEnabled = value;
  }
  public resetStorageEfficiencyEnabled() {
    this._storageEfficiencyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEfficiencyEnabledInput() {
    return this._storageEfficiencyEnabled;
  }

  // storage_virtual_machine_id - computed: true, optional: true, required: false
  private _storageVirtualMachineId?: string; 
  public get storageVirtualMachineId() {
    return this.getStringAttribute('storage_virtual_machine_id');
  }
  public set storageVirtualMachineId(value: string) {
    this._storageVirtualMachineId = value;
  }
  public resetStorageVirtualMachineId() {
    this._storageVirtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineIdInput() {
    return this._storageVirtualMachineId;
  }

  // tiering_policy - computed: true, optional: true, required: false
  private _tieringPolicy = new FsxVolumeOntapConfigurationTieringPolicyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }
  public putTieringPolicy(value: FsxVolumeOntapConfigurationTieringPolicy) {
    this._tieringPolicy.internalValue = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy.internalValue;
  }

  // volume_style - computed: true, optional: true, required: false
  private _volumeStyle?: string; 
  public get volumeStyle() {
    return this.getStringAttribute('volume_style');
  }
  public set volumeStyle(value: string) {
    this._volumeStyle = value;
  }
  public resetVolumeStyle() {
    this._volumeStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeStyleInput() {
    return this._volumeStyle;
  }
}
export interface FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations {
  /**
  * A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#clients FsxVolume#clients}
  */
  readonly clients?: string;
  /**
  * The configuration object for mounting a Network File System (NFS) file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}
  */
  readonly options?: string[];
}

export function fsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToTerraform(struct?: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clients: cdktn.stringToTerraform(struct!.clients),
    options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.options),
  }
}


export function fsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToHclTerraform(struct?: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clients: {
      value: cdktn.stringToHclTerraform(struct!.clients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clients = undefined;
      this._options = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clients = value.clients;
      this._options = value.options;
    }
  }

  // clients - computed: true, optional: true, required: false
  private _clients?: string; 
  public get clients() {
    return this.getStringAttribute('clients');
  }
  public set clients(value: string) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}

export class FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList extends cdktn.ComplexList {
  public internalValue? : FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] | cdktn.IResolvable

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
  public get(index: number): FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference {
    return new FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxVolumeOpenZfsConfigurationNfsExports {
  /**
  * The configuration object for mounting a Network File System (NFS) file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#client_configurations FsxVolume#client_configurations}
  */
  readonly clientConfigurations?: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] | cdktn.IResolvable;
}

export function fsxVolumeOpenZfsConfigurationNfsExportsToTerraform(struct?: FsxVolumeOpenZfsConfigurationNfsExports | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_configurations: cdktn.listMapper(fsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToTerraform, false)(struct!.clientConfigurations),
  }
}


export function fsxVolumeOpenZfsConfigurationNfsExportsToHclTerraform(struct?: FsxVolumeOpenZfsConfigurationNfsExports | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_configurations: {
      value: cdktn.listMapperHcl(fsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsToHclTerraform, false)(struct!.clientConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOpenZfsConfigurationNfsExportsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxVolumeOpenZfsConfigurationNfsExports | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfigurations = this._clientConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOpenZfsConfigurationNfsExports | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfigurations.internalValue = value.clientConfigurations;
    }
  }

  // client_configurations - computed: true, optional: true, required: false
  private _clientConfigurations = new FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(this, "client_configurations", false);
  public get clientConfigurations() {
    return this._clientConfigurations;
  }
  public putClientConfigurations(value: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations[] | cdktn.IResolvable) {
    this._clientConfigurations.internalValue = value;
  }
  public resetClientConfigurations() {
    this._clientConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationsInput() {
    return this._clientConfigurations.internalValue;
  }
}

export class FsxVolumeOpenZfsConfigurationNfsExportsList extends cdktn.ComplexList {
  public internalValue? : FsxVolumeOpenZfsConfigurationNfsExports[] | cdktn.IResolvable

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
  public get(index: number): FsxVolumeOpenZfsConfigurationNfsExportsOutputReference {
    return new FsxVolumeOpenZfsConfigurationNfsExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxVolumeOpenZfsConfigurationOriginSnapshot {
  /**
  * The configuration object for mounting a Network File System (NFS) file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}
  */
  readonly copyStrategy?: string;
  /**
  * Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}
  */
  readonly snapshotArn?: string;
}

export function fsxVolumeOpenZfsConfigurationOriginSnapshotToTerraform(struct?: FsxVolumeOpenZfsConfigurationOriginSnapshot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_strategy: cdktn.stringToTerraform(struct!.copyStrategy),
    snapshot_arn: cdktn.stringToTerraform(struct!.snapshotArn),
  }
}


export function fsxVolumeOpenZfsConfigurationOriginSnapshotToHclTerraform(struct?: FsxVolumeOpenZfsConfigurationOriginSnapshot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_strategy: {
      value: cdktn.stringToHclTerraform(struct!.copyStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_arn: {
      value: cdktn.stringToHclTerraform(struct!.snapshotArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOpenZfsConfigurationOriginSnapshot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStrategy = this._copyStrategy;
    }
    if (this._snapshotArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotArn = this._snapshotArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOpenZfsConfigurationOriginSnapshot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyStrategy = undefined;
      this._snapshotArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyStrategy = value.copyStrategy;
      this._snapshotArn = value.snapshotArn;
    }
  }

  // copy_strategy - computed: true, optional: true, required: false
  private _copyStrategy?: string; 
  public get copyStrategy() {
    return this.getStringAttribute('copy_strategy');
  }
  public set copyStrategy(value: string) {
    this._copyStrategy = value;
  }
  public resetCopyStrategy() {
    this._copyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStrategyInput() {
    return this._copyStrategy;
  }

  // snapshot_arn - computed: true, optional: true, required: false
  private _snapshotArn?: string; 
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }
  public set snapshotArn(value: string) {
    this._snapshotArn = value;
  }
  public resetSnapshotArn() {
    this._snapshotArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnInput() {
    return this._snapshotArn;
  }
}
export interface FsxVolumeOpenZfsConfigurationUserAndGroupQuotas {
  /**
  * The ID of the user or group that the quota applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#id FsxVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The user or group's storage quota, in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}
  */
  readonly storageCapacityQuotaGiB?: number;
  /**
  * Specifies whether the quota applies to a user or group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}
  */
  readonly type?: string;
}

export function fsxVolumeOpenZfsConfigurationUserAndGroupQuotasToTerraform(struct?: FsxVolumeOpenZfsConfigurationUserAndGroupQuotas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.numberToTerraform(struct!.id),
    storage_capacity_quota_gi_b: cdktn.numberToTerraform(struct!.storageCapacityQuotaGiB),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function fsxVolumeOpenZfsConfigurationUserAndGroupQuotasToHclTerraform(struct?: FsxVolumeOpenZfsConfigurationUserAndGroupQuotas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_capacity_quota_gi_b: {
      value: cdktn.numberToHclTerraform(struct!.storageCapacityQuotaGiB),
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

export class FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxVolumeOpenZfsConfigurationUserAndGroupQuotas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storageCapacityQuotaGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityQuotaGiB = this._storageCapacityQuotaGiB;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOpenZfsConfigurationUserAndGroupQuotas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._storageCapacityQuotaGiB = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._storageCapacityQuotaGiB = value.storageCapacityQuotaGiB;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // storage_capacity_quota_gi_b - computed: true, optional: true, required: false
  private _storageCapacityQuotaGiB?: number; 
  public get storageCapacityQuotaGiB() {
    return this.getNumberAttribute('storage_capacity_quota_gi_b');
  }
  public set storageCapacityQuotaGiB(value: number) {
    this._storageCapacityQuotaGiB = value;
  }
  public resetStorageCapacityQuotaGiB() {
    this._storageCapacityQuotaGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityQuotaGiBInput() {
    return this._storageCapacityQuotaGiB;
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

export class FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList extends cdktn.ComplexList {
  public internalValue? : FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] | cdktn.IResolvable

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
  public get(index: number): FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference {
    return new FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxVolumeOpenZfsConfiguration {
  /**
  * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}
  */
  readonly copyTagsToSnapshots?: boolean | cdktn.IResolvable;
  /**
  * Specifies the method used to compress the data on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}
  */
  readonly dataCompressionType?: string;
  /**
  * The configuration object for mounting a Network File System (NFS) file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}
  */
  readonly nfsExports?: FsxVolumeOpenZfsConfigurationNfsExports[] | cdktn.IResolvable;
  /**
  * The configuration object for mounting a Network File System (NFS) file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}
  */
  readonly options?: string[];
  /**
  * The configuration of an Amazon FSx for OpenZFS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}
  */
  readonly originSnapshot?: FsxVolumeOpenZfsConfigurationOriginSnapshot;
  /**
  * The ID of the volume to use as the parent volume of the volume that you are creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}
  */
  readonly parentVolumeId?: string;
  /**
  * A Boolean value indicating whether the volume is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}
  */
  readonly recordSizeKiB?: number;
  /**
  * Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}
  */
  readonly storageCapacityQuotaGiB?: number;
  /**
  * Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}
  */
  readonly storageCapacityReservationGiB?: number;
  /**
  * Configures how much storage users and groups can use on the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}
  */
  readonly userAndGroupQuotas?: FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] | cdktn.IResolvable;
}

export function fsxVolumeOpenZfsConfigurationToTerraform(struct?: FsxVolumeOpenZfsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_tags_to_snapshots: cdktn.booleanToTerraform(struct!.copyTagsToSnapshots),
    data_compression_type: cdktn.stringToTerraform(struct!.dataCompressionType),
    nfs_exports: cdktn.listMapper(fsxVolumeOpenZfsConfigurationNfsExportsToTerraform, false)(struct!.nfsExports),
    options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.options),
    origin_snapshot: fsxVolumeOpenZfsConfigurationOriginSnapshotToTerraform(struct!.originSnapshot),
    parent_volume_id: cdktn.stringToTerraform(struct!.parentVolumeId),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
    record_size_ki_b: cdktn.numberToTerraform(struct!.recordSizeKiB),
    storage_capacity_quota_gi_b: cdktn.numberToTerraform(struct!.storageCapacityQuotaGiB),
    storage_capacity_reservation_gi_b: cdktn.numberToTerraform(struct!.storageCapacityReservationGiB),
    user_and_group_quotas: cdktn.listMapper(fsxVolumeOpenZfsConfigurationUserAndGroupQuotasToTerraform, false)(struct!.userAndGroupQuotas),
  }
}


export function fsxVolumeOpenZfsConfigurationToHclTerraform(struct?: FsxVolumeOpenZfsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_tags_to_snapshots: {
      value: cdktn.booleanToHclTerraform(struct!.copyTagsToSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_compression_type: {
      value: cdktn.stringToHclTerraform(struct!.dataCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_exports: {
      value: cdktn.listMapperHcl(fsxVolumeOpenZfsConfigurationNfsExportsToHclTerraform, false)(struct!.nfsExports),
      isBlock: true,
      type: "list",
      storageClassType: "FsxVolumeOpenZfsConfigurationNfsExportsList",
    },
    options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_snapshot: {
      value: fsxVolumeOpenZfsConfigurationOriginSnapshotToHclTerraform(struct!.originSnapshot),
      isBlock: true,
      type: "struct",
      storageClassType: "FsxVolumeOpenZfsConfigurationOriginSnapshot",
    },
    parent_volume_id: {
      value: cdktn.stringToHclTerraform(struct!.parentVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_size_ki_b: {
      value: cdktn.numberToHclTerraform(struct!.recordSizeKiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_capacity_quota_gi_b: {
      value: cdktn.numberToHclTerraform(struct!.storageCapacityQuotaGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_capacity_reservation_gi_b: {
      value: cdktn.numberToHclTerraform(struct!.storageCapacityReservationGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_and_group_quotas: {
      value: cdktn.listMapperHcl(fsxVolumeOpenZfsConfigurationUserAndGroupQuotasToHclTerraform, false)(struct!.userAndGroupQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxVolumeOpenZfsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxVolumeOpenZfsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTagsToSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToSnapshots = this._copyTagsToSnapshots;
    }
    if (this._dataCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCompressionType = this._dataCompressionType;
    }
    if (this._nfsExports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsExports = this._nfsExports?.internalValue;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._originSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSnapshot = this._originSnapshot?.internalValue;
    }
    if (this._parentVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentVolumeId = this._parentVolumeId;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recordSizeKiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSizeKiB = this._recordSizeKiB;
    }
    if (this._storageCapacityQuotaGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityQuotaGiB = this._storageCapacityQuotaGiB;
    }
    if (this._storageCapacityReservationGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityReservationGiB = this._storageCapacityReservationGiB;
    }
    if (this._userAndGroupQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAndGroupQuotas = this._userAndGroupQuotas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxVolumeOpenZfsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyTagsToSnapshots = undefined;
      this._dataCompressionType = undefined;
      this._nfsExports.internalValue = undefined;
      this._options = undefined;
      this._originSnapshot.internalValue = undefined;
      this._parentVolumeId = undefined;
      this._readOnly = undefined;
      this._recordSizeKiB = undefined;
      this._storageCapacityQuotaGiB = undefined;
      this._storageCapacityReservationGiB = undefined;
      this._userAndGroupQuotas.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyTagsToSnapshots = value.copyTagsToSnapshots;
      this._dataCompressionType = value.dataCompressionType;
      this._nfsExports.internalValue = value.nfsExports;
      this._options = value.options;
      this._originSnapshot.internalValue = value.originSnapshot;
      this._parentVolumeId = value.parentVolumeId;
      this._readOnly = value.readOnly;
      this._recordSizeKiB = value.recordSizeKiB;
      this._storageCapacityQuotaGiB = value.storageCapacityQuotaGiB;
      this._storageCapacityReservationGiB = value.storageCapacityReservationGiB;
      this._userAndGroupQuotas.internalValue = value.userAndGroupQuotas;
    }
  }

  // copy_tags_to_snapshots - computed: true, optional: true, required: false
  private _copyTagsToSnapshots?: boolean | cdktn.IResolvable; 
  public get copyTagsToSnapshots() {
    return this.getBooleanAttribute('copy_tags_to_snapshots');
  }
  public set copyTagsToSnapshots(value: boolean | cdktn.IResolvable) {
    this._copyTagsToSnapshots = value;
  }
  public resetCopyTagsToSnapshots() {
    this._copyTagsToSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotsInput() {
    return this._copyTagsToSnapshots;
  }

  // data_compression_type - computed: true, optional: true, required: false
  private _dataCompressionType?: string; 
  public get dataCompressionType() {
    return this.getStringAttribute('data_compression_type');
  }
  public set dataCompressionType(value: string) {
    this._dataCompressionType = value;
  }
  public resetDataCompressionType() {
    this._dataCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCompressionTypeInput() {
    return this._dataCompressionType;
  }

  // nfs_exports - computed: true, optional: true, required: false
  private _nfsExports = new FsxVolumeOpenZfsConfigurationNfsExportsList(this, "nfs_exports", false);
  public get nfsExports() {
    return this._nfsExports;
  }
  public putNfsExports(value: FsxVolumeOpenZfsConfigurationNfsExports[] | cdktn.IResolvable) {
    this._nfsExports.internalValue = value;
  }
  public resetNfsExports() {
    this._nfsExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportsInput() {
    return this._nfsExports.internalValue;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // origin_snapshot - computed: true, optional: true, required: false
  private _originSnapshot = new FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(this, "origin_snapshot");
  public get originSnapshot() {
    return this._originSnapshot;
  }
  public putOriginSnapshot(value: FsxVolumeOpenZfsConfigurationOriginSnapshot) {
    this._originSnapshot.internalValue = value;
  }
  public resetOriginSnapshot() {
    this._originSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSnapshotInput() {
    return this._originSnapshot.internalValue;
  }

  // parent_volume_id - computed: true, optional: true, required: false
  private _parentVolumeId?: string; 
  public get parentVolumeId() {
    return this.getStringAttribute('parent_volume_id');
  }
  public set parentVolumeId(value: string) {
    this._parentVolumeId = value;
  }
  public resetParentVolumeId() {
    this._parentVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentVolumeIdInput() {
    return this._parentVolumeId;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // record_size_ki_b - computed: true, optional: true, required: false
  private _recordSizeKiB?: number; 
  public get recordSizeKiB() {
    return this.getNumberAttribute('record_size_ki_b');
  }
  public set recordSizeKiB(value: number) {
    this._recordSizeKiB = value;
  }
  public resetRecordSizeKiB() {
    this._recordSizeKiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSizeKiBInput() {
    return this._recordSizeKiB;
  }

  // storage_capacity_quota_gi_b - computed: true, optional: true, required: false
  private _storageCapacityQuotaGiB?: number; 
  public get storageCapacityQuotaGiB() {
    return this.getNumberAttribute('storage_capacity_quota_gi_b');
  }
  public set storageCapacityQuotaGiB(value: number) {
    this._storageCapacityQuotaGiB = value;
  }
  public resetStorageCapacityQuotaGiB() {
    this._storageCapacityQuotaGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityQuotaGiBInput() {
    return this._storageCapacityQuotaGiB;
  }

  // storage_capacity_reservation_gi_b - computed: true, optional: true, required: false
  private _storageCapacityReservationGiB?: number; 
  public get storageCapacityReservationGiB() {
    return this.getNumberAttribute('storage_capacity_reservation_gi_b');
  }
  public set storageCapacityReservationGiB(value: number) {
    this._storageCapacityReservationGiB = value;
  }
  public resetStorageCapacityReservationGiB() {
    this._storageCapacityReservationGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityReservationGiBInput() {
    return this._storageCapacityReservationGiB;
  }

  // user_and_group_quotas - computed: true, optional: true, required: false
  private _userAndGroupQuotas = new FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(this, "user_and_group_quotas", false);
  public get userAndGroupQuotas() {
    return this._userAndGroupQuotas;
  }
  public putUserAndGroupQuotas(value: FsxVolumeOpenZfsConfigurationUserAndGroupQuotas[] | cdktn.IResolvable) {
    this._userAndGroupQuotas.internalValue = value;
  }
  public resetUserAndGroupQuotas() {
    this._userAndGroupQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAndGroupQuotasInput() {
    return this._userAndGroupQuotas.internalValue;
  }
}
export interface FsxVolumeTags {
  /**
  * A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#key FsxVolume#key}
  */
  readonly key?: string;
  /**
  * A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}
  */
  readonly value?: string;
}

export function fsxVolumeTagsToTerraform(struct?: FsxVolumeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function fsxVolumeTagsToHclTerraform(struct?: FsxVolumeTags | cdktn.IResolvable): any {
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

export class FsxVolumeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxVolumeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FsxVolumeTags | cdktn.IResolvable | undefined) {
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

export class FsxVolumeTagsList extends cdktn.ComplexList {
  public internalValue? : FsxVolumeTags[] | cdktn.IResolvable

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
  public get(index: number): FsxVolumeTagsOutputReference {
    return new FsxVolumeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume}
*/
export class FsxVolume extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxVolume to import
  * @param importFromId The id of the existing FsxVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: FsxVolumeConfig) {
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
    this._backupId = config.backupId;
    this._name = config.name;
    this._ontapConfiguration.internalValue = config.ontapConfiguration;
    this._openZfsConfiguration.internalValue = config.openZfsConfiguration;
    this._tags.internalValue = config.tags;
    this._volumeType = config.volumeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ontap_configuration - computed: true, optional: true, required: false
  private _ontapConfiguration = new FsxVolumeOntapConfigurationOutputReference(this, "ontap_configuration");
  public get ontapConfiguration() {
    return this._ontapConfiguration;
  }
  public putOntapConfiguration(value: FsxVolumeOntapConfiguration) {
    this._ontapConfiguration.internalValue = value;
  }
  public resetOntapConfiguration() {
    this._ontapConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapConfigurationInput() {
    return this._ontapConfiguration.internalValue;
  }

  // open_zfs_configuration - computed: true, optional: true, required: false
  private _openZfsConfiguration = new FsxVolumeOpenZfsConfigurationOutputReference(this, "open_zfs_configuration");
  public get openZfsConfiguration() {
    return this._openZfsConfiguration;
  }
  public putOpenZfsConfiguration(value: FsxVolumeOpenZfsConfiguration) {
    this._openZfsConfiguration.internalValue = value;
  }
  public resetOpenZfsConfiguration() {
    this._openZfsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openZfsConfigurationInput() {
    return this._openZfsConfiguration.internalValue;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new FsxVolumeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FsxVolumeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktn.stringToTerraform(this._backupId),
      name: cdktn.stringToTerraform(this._name),
      ontap_configuration: fsxVolumeOntapConfigurationToTerraform(this._ontapConfiguration.internalValue),
      open_zfs_configuration: fsxVolumeOpenZfsConfigurationToTerraform(this._openZfsConfiguration.internalValue),
      tags: cdktn.listMapper(fsxVolumeTagsToTerraform, false)(this._tags.internalValue),
      volume_type: cdktn.stringToTerraform(this._volumeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktn.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_configuration: {
        value: fsxVolumeOntapConfigurationToHclTerraform(this._ontapConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxVolumeOntapConfiguration",
      },
      open_zfs_configuration: {
        value: fsxVolumeOpenZfsConfigurationToHclTerraform(this._openZfsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxVolumeOpenZfsConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(fsxVolumeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxVolumeTagsList",
      },
      volume_type: {
        value: cdktn.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
