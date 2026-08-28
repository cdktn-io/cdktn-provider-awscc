/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreCapacityProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The capacity configuration for the capacity provider. Defines the compute resources for this capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#compute_configuration BedrockagentcoreCapacityProvider#compute_configuration}
  */
  readonly computeConfiguration: BedrockagentcoreCapacityProviderComputeConfiguration;
  /**
  * An optional description of the capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#description BedrockagentcoreCapacityProvider#description}
  */
  readonly description?: string;
  /**
  * The name of the capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name BedrockagentcoreCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Configuration for permissions associated with a capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#permissions_configuration BedrockagentcoreCapacityProvider#permissions_configuration}
  */
  readonly permissionsConfiguration: BedrockagentcoreCapacityProviderPermissionsConfiguration;
  /**
  * An array of key-value pairs to apply to the capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#tags BedrockagentcoreCapacityProvider#tags}
  */
  readonly tags?: BedrockagentcoreCapacityProviderTags[] | cdktn.IResolvable;
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * The ID of the Capacity Reservation in which to run the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_id BedrockagentcoreCapacityProvider#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * The ARN of the Capacity Reservation resource group in which to run the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_resource_group_arn BedrockagentcoreCapacityProvider#capacity_reservation_resource_group_arn}
  */
  readonly capacityReservationResourceGroupArn?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_id: cdktn.stringToTerraform(struct!.capacityReservationId),
    capacity_reservation_resource_group_arn: cdktn.stringToTerraform(struct!.capacityReservationResourceGroupArn),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_id: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_resource_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationResourceGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._capacityReservationResourceGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationResourceGroupArn = this._capacityReservationResourceGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationId = undefined;
      this._capacityReservationResourceGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationId = value.capacityReservationId;
      this._capacityReservationResourceGroupArn = value.capacityReservationResourceGroupArn;
    }
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // capacity_reservation_resource_group_arn - computed: true, optional: true, required: false
  private _capacityReservationResourceGroupArn?: string; 
  public get capacityReservationResourceGroupArn() {
    return this.getStringAttribute('capacity_reservation_resource_group_arn');
  }
  public set capacityReservationResourceGroupArn(value: string) {
    this._capacityReservationResourceGroupArn = value;
  }
  public resetCapacityReservationResourceGroupArn() {
    this._capacityReservationResourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationResourceGroupArnInput() {
    return this._capacityReservationResourceGroupArn;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification {
  /**
  * Indicates the instance's Capacity Reservation preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_preference BedrockagentcoreCapacityProvider#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * Information about the target Capacity Reservation or Capacity Reservation group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_target BedrockagentcoreCapacityProvider#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_target: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct!.capacityReservationTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._capacityReservationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationPreference = undefined;
      this._capacityReservationTarget.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
    }
  }

  // capacity_reservation_preference - computed: true, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // capacity_reservation_target - computed: true, optional: true, required: false
  private _capacityReservationTarget = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
  public putCapacityReservationTarget(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget) {
    this._capacityReservationTarget.internalValue = value;
  }
  public resetCapacityReservationTarget() {
    this._capacityReservationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationTargetInput() {
    return this._capacityReservationTarget.internalValue;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs {
  /**
  * The index of the EBS card. Applies to instances with multiple EBS cards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_card_index BedrockagentcoreCapacityProvider#ebs_card_index}
  */
  readonly ebsCardIndex?: number;
  /**
  * Indicates whether the EBS volume is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The number of I/O operations per second (IOPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}
  */
  readonly iops?: number;
  /**
  * Identifier of the customer managed KMS key to use for EBS encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The ID of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id BedrockagentcoreCapacityProvider#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The throughput to provision for a gp3 volume, in MiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}
  */
  readonly throughput?: number;
  /**
  * The rate at which the volume is initialized after creation, in MiB/s. Supported only for volumes created from snapshots. If the snapshot is enabled for fast snapshot restore and a volume initialization rate is also specified, the volume is initialized at the specified rate instead of by fast snapshot restore. Valid range: 100-300 MiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_initialization_rate BedrockagentcoreCapacityProvider#volume_initialization_rate}
  */
  readonly volumeInitializationRate?: number;
  /**
  * The size of the volume, in GiBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_size BedrockagentcoreCapacityProvider#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * The volume type. Defaults to gp3 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}
  */
  readonly volumeType?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_card_index: cdktn.numberToTerraform(struct!.ebsCardIndex),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_initialization_rate: cdktn.numberToTerraform(struct!.volumeInitializationRate),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_card_index: {
      value: cdktn.numberToHclTerraform(struct!.ebsCardIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktn.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_initialization_rate: {
      value: cdktn.numberToHclTerraform(struct!.volumeInitializationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsCardIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsCardIndex = this._ebsCardIndex;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeInitializationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeInitializationRate = this._volumeInitializationRate;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsCardIndex = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeInitializationRate = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsCardIndex = value.ebsCardIndex;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeInitializationRate = value.volumeInitializationRate;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // ebs_card_index - computed: true, optional: true, required: false
  private _ebsCardIndex?: number; 
  public get ebsCardIndex() {
    return this.getNumberAttribute('ebs_card_index');
  }
  public set ebsCardIndex(value: number) {
    this._ebsCardIndex = value;
  }
  public resetEbsCardIndex() {
    this._ebsCardIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCardIndexInput() {
    return this._ebsCardIndex;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_initialization_rate - computed: true, optional: true, required: false
  private _volumeInitializationRate?: number; 
  public get volumeInitializationRate() {
    return this.getNumberAttribute('volume_initialization_rate');
  }
  public set volumeInitializationRate(value: number) {
    this._volumeInitializationRate = value;
  }
  public resetVolumeInitializationRate() {
    this._volumeInitializationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInitializationRateInput() {
    return this._volumeInitializationRate;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
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
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes {
  /**
  * The device name (for example, /dev/sdh or xvdh).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#device_name BedrockagentcoreCapacityProvider#device_name}
  */
  readonly deviceName?: string;
  /**
  * Parameters used to automatically set up EBS volumes when the instance is launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs BedrockagentcoreCapacityProvider#ebs}
  */
  readonly ebs?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs;
  /**
  * The virtual device name (ephemeralN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#virtual_name BedrockagentcoreCapacityProvider#virtual_name}
  */
  readonly virtualName?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    ebs: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToTerraform(struct!.ebs),
    virtual_name: cdktn.stringToTerraform(struct!.virtualName),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs",
    },
    virtual_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._ebs.internalValue = undefined;
      this._virtualName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._ebs.internalValue = value.ebs;
      this._virtualName = value.virtualName;
    }
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // ebs - computed: true, optional: true, required: false
  private _ebs = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }

  // virtual_name - computed: true, optional: true, required: false
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference {
    return new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements {
  /**
  * List of allowed instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#allowed_instance_types BedrockagentcoreCapacityProvider#allowed_instance_types}
  */
  readonly allowedInstanceTypes: string[];
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
    }
  }

  // allowed_instance_types - computed: false, optional: false, required: true
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }
  public set allowedInstanceTypes(value: string[]) {
    this._allowedInstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInstanceTypesInput() {
    return this._allowedInstanceTypes;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications {
  /**
  * The ARN of the license configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_configuration_arn BedrockagentcoreCapacityProvider#license_configuration_arn}
  */
  readonly licenseConfigurationArn?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    license_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.licenseConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = value.licenseConfigurationArn;
    }
  }

  // license_configuration_arn - computed: true, optional: true, required: false
  private _licenseConfigurationArn?: string; 
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  public resetLicenseConfigurationArn() {
    this._licenseConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn;
  }
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference {
    return new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters {
  /**
  * The Capacity Reservation targeting option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_specification BedrockagentcoreCapacityProvider#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification;
  /**
  * The block device mapping for ephemeral (instance store) volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ephemeral_volumes BedrockagentcoreCapacityProvider#ephemeral_volumes}
  */
  readonly ephemeralVolumes?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes[] | cdktn.IResolvable;
  /**
  * The ARN of the IAM instance profile to associate with launched instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_profile_arn BedrockagentcoreCapacityProvider#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Requirements for EC2 instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_requirements BedrockagentcoreCapacityProvider#instance_requirements}
  */
  readonly instanceRequirements: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements;
  /**
  * The license configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_specifications BedrockagentcoreCapacityProvider#license_specifications}
  */
  readonly licenseSpecifications?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications[] | cdktn.IResolvable;
  /**
  * The monitoring level for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#monitoring BedrockagentcoreCapacityProvider#monitoring}
  */
  readonly monitoring?: string;
  /**
  * The operating system and CPU architecture for the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#operating_system BedrockagentcoreCapacityProvider#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Tags to apply to all EC2 resources (instances, volumes, and network interfaces) created by this capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#propagated_tags BedrockagentcoreCapacityProvider#propagated_tags}
  */
  readonly propagatedTags?: { [key: string]: string };
  /**
  * The name of the SSH key pair to configure on instances for SSH connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ssh_key_name BedrockagentcoreCapacityProvider#ssh_key_name}
  */
  readonly sshKeyName?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_specification: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToTerraform(struct!.capacityReservationSpecification),
    ephemeral_volumes: cdktn.listMapper(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToTerraform, false)(struct!.ephemeralVolumes),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    instance_requirements: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToTerraform(struct!.instanceRequirements),
    license_specifications: cdktn.listMapper(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToTerraform, false)(struct!.licenseSpecifications),
    monitoring: cdktn.stringToTerraform(struct!.monitoring),
    operating_system: cdktn.stringToTerraform(struct!.operatingSystem),
    propagated_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.propagatedTags),
    ssh_key_name: cdktn.stringToTerraform(struct!.sshKeyName),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_specification: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToHclTerraform(struct!.capacityReservationSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification",
    },
    ephemeral_volumes: {
      value: cdktn.listMapperHcl(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToHclTerraform, false)(struct!.ephemeralVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList",
    },
    instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_requirements: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements",
    },
    license_specifications: {
      value: cdktn.listMapperHcl(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToHclTerraform, false)(struct!.licenseSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList",
    },
    monitoring: {
      value: cdktn.stringToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system: {
      value: cdktn.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.propagatedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssh_key_name: {
      value: cdktn.stringToHclTerraform(struct!.sshKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationSpecification = this._capacityReservationSpecification?.internalValue;
    }
    if (this._ephemeralVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralVolumes = this._ephemeralVolumes?.internalValue;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    if (this._licenseSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseSpecifications = this._licenseSpecifications?.internalValue;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._propagatedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedTags = this._propagatedTags;
    }
    if (this._sshKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyName = this._sshKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityReservationSpecification.internalValue = undefined;
      this._ephemeralVolumes.internalValue = undefined;
      this._instanceProfileArn = undefined;
      this._instanceRequirements.internalValue = undefined;
      this._licenseSpecifications.internalValue = undefined;
      this._monitoring = undefined;
      this._operatingSystem = undefined;
      this._propagatedTags = undefined;
      this._sshKeyName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityReservationSpecification.internalValue = value.capacityReservationSpecification;
      this._ephemeralVolumes.internalValue = value.ephemeralVolumes;
      this._instanceProfileArn = value.instanceProfileArn;
      this._instanceRequirements.internalValue = value.instanceRequirements;
      this._licenseSpecifications.internalValue = value.licenseSpecifications;
      this._monitoring = value.monitoring;
      this._operatingSystem = value.operatingSystem;
      this._propagatedTags = value.propagatedTags;
      this._sshKeyName = value.sshKeyName;
    }
  }

  // capacity_reservation_specification - computed: true, optional: true, required: false
  private _capacityReservationSpecification = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }
  public putCapacityReservationSpecification(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification) {
    this._capacityReservationSpecification.internalValue = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification.internalValue;
  }

  // ephemeral_volumes - computed: true, optional: true, required: false
  private _ephemeralVolumes = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList(this, "ephemeral_volumes", false);
  public get ephemeralVolumes() {
    return this._ephemeralVolumes;
  }
  public putEphemeralVolumes(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes[] | cdktn.IResolvable) {
    this._ephemeralVolumes.internalValue = value;
  }
  public resetEphemeralVolumes() {
    this._ephemeralVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralVolumesInput() {
    return this._ephemeralVolumes.internalValue;
  }

  // instance_profile_arn - computed: true, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_requirements - computed: false, optional: false, required: true
  private _instanceRequirements = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements) {
    this._instanceRequirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // license_specifications - computed: true, optional: true, required: false
  private _licenseSpecifications = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList(this, "license_specifications", false);
  public get licenseSpecifications() {
    return this._licenseSpecifications;
  }
  public putLicenseSpecifications(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications[] | cdktn.IResolvable) {
    this._licenseSpecifications.internalValue = value;
  }
  public resetLicenseSpecifications() {
    this._licenseSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSpecificationsInput() {
    return this._licenseSpecifications.internalValue;
  }

  // monitoring - computed: true, optional: true, required: false
  private _monitoring?: string; 
  public get monitoring() {
    return this.getStringAttribute('monitoring');
  }
  public set monitoring(value: string) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // propagated_tags - computed: true, optional: true, required: false
  private _propagatedTags?: { [key: string]: string }; 
  public get propagatedTags() {
    return this.getStringMapAttribute('propagated_tags');
  }
  public set propagatedTags(value: { [key: string]: string }) {
    this._propagatedTags = value;
  }
  public resetPropagatedTags() {
    this._propagatedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedTagsInput() {
    return this._propagatedTags;
  }

  // ssh_key_name - computed: true, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource {
  /**
  * Parameters for launching EC2 instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_parameters BedrockagentcoreCapacityProvider#launch_parameters}
  */
  readonly launchParameters: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_parameters: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToTerraform(struct!.launchParameters),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_parameters: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToHclTerraform(struct!.launchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchParameters = this._launchParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchParameters.internalValue = value.launchParameters;
    }
  }

  // launch_parameters - computed: false, optional: false, required: true
  private _launchParameters = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference(this, "launch_parameters");
  public get launchParameters() {
    return this._launchParameters;
  }
  public putLaunchParameters(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters) {
    this._launchParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchParametersInput() {
    return this._launchParameters.internalValue;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration {
  /**
  * The number of seconds an instance can remain idle before it is stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#idle_instance_timeout BedrockagentcoreCapacityProvider#idle_instance_timeout}
  */
  readonly idleInstanceTimeout?: number;
  /**
  * Maximum lifetime for the instance in seconds. Once reached, instances will be automatically terminated regardless of activity. Default: 28800 seconds (8 hours). Maximum: 1209600 seconds (14 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#max_lifetime BedrockagentcoreCapacityProvider#max_lifetime}
  */
  readonly maxLifetime?: number;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_instance_timeout: cdktn.numberToTerraform(struct!.idleInstanceTimeout),
    max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_instance_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleInstanceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifetime: {
      value: cdktn.numberToHclTerraform(struct!.maxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleInstanceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInstanceTimeout = this._idleInstanceTimeout;
    }
    if (this._maxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifetime = this._maxLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleInstanceTimeout = undefined;
      this._maxLifetime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleInstanceTimeout = value.idleInstanceTimeout;
      this._maxLifetime = value.maxLifetime;
    }
  }

  // idle_instance_timeout - computed: true, optional: true, required: false
  private _idleInstanceTimeout?: number; 
  public get idleInstanceTimeout() {
    return this.getNumberAttribute('idle_instance_timeout');
  }
  public set idleInstanceTimeout(value: number) {
    this._idleInstanceTimeout = value;
  }
  public resetIdleInstanceTimeout() {
    this._idleInstanceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInstanceTimeoutInput() {
    return this._idleInstanceTimeout;
  }

  // max_lifetime - computed: true, optional: true, required: false
  private _maxLifetime?: number; 
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
  public set maxLifetime(value: number) {
    this._maxLifetime = value;
  }
  public resetMaxLifetime() {
    this._maxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifetimeInput() {
    return this._maxLifetime;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume {
  /**
  * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The free space guaranteed on the root volume, in GiB. The service adds the operating system overhead on top of this value. Defaults to 8 GiB. The maximum is below the 65,536 GiB gp3 ceiling because the service adds the AMI size bucket on top of this value, and the resulting total must still be a provisionable gp3 volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#free_space_gi_b BedrockagentcoreCapacityProvider#free_space_gi_b}
  */
  readonly freeSpaceGiB?: number;
  /**
  * The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}
  */
  readonly iops?: number;
  /**
  * Identifier of the customer managed KMS key to use for EBS encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The throughput to provision for a gp3 volume, in MiB/s. Valid range: 125-2000 MiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}
  */
  readonly throughput?: number;
  /**
  * The EBS volume type. Defaults to gp3 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}
  */
  readonly volumeType?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    free_space_gi_b: cdktn.numberToTerraform(struct!.freeSpaceGiB),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    free_space_gi_b: {
      value: cdktn.numberToHclTerraform(struct!.freeSpaceGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._freeSpaceGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSpaceGiB = this._freeSpaceGiB;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._freeSpaceGiB = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._throughput = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._freeSpaceGiB = value.freeSpaceGiB;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._throughput = value.throughput;
      this._volumeType = value.volumeType;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // free_space_gi_b - computed: true, optional: true, required: false
  private _freeSpaceGiB?: number; 
  public get freeSpaceGiB() {
    return this.getNumberAttribute('free_space_gi_b');
  }
  public set freeSpaceGiB(value: number) {
    this._freeSpaceGiB = value;
  }
  public resetFreeSpaceGiB() {
    this._freeSpaceGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSpaceGiBInput() {
    return this._freeSpaceGiB;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
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
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration {
  /**
  * Whether to encrypt the volume. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted BedrockagentcoreCapacityProvider#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops BedrockagentcoreCapacityProvider#iops}
  */
  readonly iops?: number;
  /**
  * Identifier of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id BedrockagentcoreCapacityProvider#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The logical name of the volume, used to reference it when mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name BedrockagentcoreCapacityProvider#name}
  */
  readonly name?: string;
  /**
  * The size of the volume in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#size_gi_b BedrockagentcoreCapacityProvider#size_gi_b}
  */
  readonly sizeGiB?: number;
  /**
  * Optional EBS snapshot ID to initialize the volume from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id BedrockagentcoreCapacityProvider#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The throughput in MiB/s. Only valid for gp3 volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput BedrockagentcoreCapacityProvider#throughput}
  */
  readonly throughput?: number;
  /**
  * The EBS volume type. Defaults to gp3 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type BedrockagentcoreCapacityProvider#volume_type}
  */
  readonly volumeType?: string;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    name: cdktn.stringToTerraform(struct!.name),
    size_gi_b: cdktn.numberToTerraform(struct!.sizeGiB),
    snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gi_b: {
      value: cdktn.numberToHclTerraform(struct!.sizeGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktn.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sizeGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGiB = this._sizeGiB;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._sizeGiB = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._sizeGiB = value.sizeGiB;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeType = value.volumeType;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // size_gi_b - computed: true, optional: true, required: false
  private _sizeGiB?: number; 
  public get sizeGiB() {
    return this.getNumberAttribute('size_gi_b');
  }
  public set sizeGiB(value: number) {
    this._sizeGiB = value;
  }
  public resetSizeGiB() {
    this._sizeGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGiBInput() {
    return this._sizeGiB;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
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
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes {
  /**
  * Configuration for an EBS-backed persistent volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_configuration BedrockagentcoreCapacityProvider#ebs_configuration}
  */
  readonly ebsConfiguration?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_configuration: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToTerraform(struct!.ebsConfiguration),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_configuration: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToHclTerraform(struct!.ebsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfiguration = this._ebsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsConfiguration.internalValue = value.ebsConfiguration;
    }
  }

  // ebs_configuration - computed: true, optional: true, required: false
  private _ebsConfiguration = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference(this, "ebs_configuration");
  public get ebsConfiguration() {
    return this._ebsConfiguration;
  }
  public putEbsConfiguration(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration) {
    this._ebsConfiguration.internalValue = value;
  }
  public resetEbsConfiguration() {
    this._ebsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigurationInput() {
    return this._ebsConfiguration.internalValue;
  }
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference {
    return new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration {
  /**
  * The IDs of the security groups to associate with the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#security_groups BedrockagentcoreCapacityProvider#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * The IDs of the subnets in which to launch instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#subnets BedrockagentcoreCapacityProvider#subnets}
  */
  readonly subnets: string[];
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration {
  /**
  * How the launch template is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_template_source BedrockagentcoreCapacityProvider#launch_template_source}
  */
  readonly launchTemplateSource: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource;
  /**
  * Configuration for managing the lifecycle of instances in a capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#lifecycle_configuration BedrockagentcoreCapacityProvider#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration;
  /**
  * Customer-facing configuration for the (service-managed) root volume. The service provisions the root volume at its own AMI size estimate plus FreeSpaceGiB, and pins the visible free space to FreeSpaceGiB with a filler file, so the space you are guaranteed does not change as the underlying AMI grows. The device name and the delete-on-termination behavior are service-owned and are not configurable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#root_volume BedrockagentcoreCapacityProvider#root_volume}
  */
  readonly rootVolume?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume;
  /**
  * Named persistent EBS volumes for this capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volumes BedrockagentcoreCapacityProvider#volumes}
  */
  readonly volumes?: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes[] | cdktn.IResolvable;
  /**
  * VPC configuration for launching EC2 instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#vpc_configuration BedrockagentcoreCapacityProvider#vpc_configuration}
  */
  readonly vpcConfiguration: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_source: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToTerraform(struct!.launchTemplateSource),
    lifecycle_configuration: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToTerraform(struct!.lifecycleConfiguration),
    root_volume: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToTerraform(struct!.rootVolume),
    volumes: cdktn.listMapper(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToTerraform, false)(struct!.volumes),
    vpc_configuration: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_source: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToHclTerraform(struct!.launchTemplateSource),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource",
    },
    lifecycle_configuration: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToHclTerraform(struct!.lifecycleConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration",
    },
    root_volume: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToHclTerraform(struct!.rootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume",
    },
    volumes: {
      value: cdktn.listMapperHcl(bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList",
    },
    vpc_configuration: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateSource = this._launchTemplateSource?.internalValue;
    }
    if (this._lifecycleConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfiguration = this._lifecycleConfiguration?.internalValue;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateSource.internalValue = undefined;
      this._lifecycleConfiguration.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateSource.internalValue = value.launchTemplateSource;
      this._lifecycleConfiguration.internalValue = value.lifecycleConfiguration;
      this._rootVolume.internalValue = value.rootVolume;
      this._volumes.internalValue = value.volumes;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // launch_template_source - computed: false, optional: false, required: true
  private _launchTemplateSource = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference(this, "launch_template_source");
  public get launchTemplateSource() {
    return this._launchTemplateSource;
  }
  public putLaunchTemplateSource(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource) {
    this._launchTemplateSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateSourceInput() {
    return this._launchTemplateSource.internalValue;
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // root_volume - computed: true, optional: true, required: false
  private _rootVolume = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // vpc_configuration - computed: false, optional: false, required: true
  private _vpcConfiguration = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface BedrockagentcoreCapacityProviderComputeConfiguration {
  /**
  * Configuration for EC2-based capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ec_2_configuration BedrockagentcoreCapacityProvider#ec_2_configuration}
  */
  readonly ec2Configuration: BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration;
}

export function bedrockagentcoreCapacityProviderComputeConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ec_2_configuration: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToTerraform(struct!.ec2Configuration),
  }
}


export function bedrockagentcoreCapacityProviderComputeConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderComputeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ec_2_configuration: {
      value: bedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToHclTerraform(struct!.ec2Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderComputeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderComputeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderComputeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec2Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec2Configuration.internalValue = value.ec2Configuration;
    }
  }

  // ec_2_configuration - computed: false, optional: false, required: true
  private _ec2Configuration = new BedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference(this, "ec_2_configuration");
  public get ec2Configuration() {
    return this._ec2Configuration;
  }
  public putEc2Configuration(value: BedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration) {
    this._ec2Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigurationInput() {
    return this._ec2Configuration.internalValue;
  }
}
export interface BedrockagentcoreCapacityProviderPermissionsConfiguration {
  /**
  * The ARN of the IAM role that operators use to manage the capacity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_provider_operator_role_arn BedrockagentcoreCapacityProvider#capacity_provider_operator_role_arn}
  */
  readonly capacityProviderOperatorRoleArn: string;
}

export function bedrockagentcoreCapacityProviderPermissionsConfigurationToTerraform(struct?: BedrockagentcoreCapacityProviderPermissionsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_provider_operator_role_arn: cdktn.stringToTerraform(struct!.capacityProviderOperatorRoleArn),
  }
}


export function bedrockagentcoreCapacityProviderPermissionsConfigurationToHclTerraform(struct?: BedrockagentcoreCapacityProviderPermissionsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_provider_operator_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.capacityProviderOperatorRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreCapacityProviderPermissionsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityProviderOperatorRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderOperatorRoleArn = this._capacityProviderOperatorRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreCapacityProviderPermissionsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = value.capacityProviderOperatorRoleArn;
    }
  }

  // capacity_provider_operator_role_arn - computed: false, optional: false, required: true
  private _capacityProviderOperatorRoleArn?: string; 
  public get capacityProviderOperatorRoleArn() {
    return this.getStringAttribute('capacity_provider_operator_role_arn');
  }
  public set capacityProviderOperatorRoleArn(value: string) {
    this._capacityProviderOperatorRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderOperatorRoleArnInput() {
    return this._capacityProviderOperatorRoleArn;
  }
}
export interface BedrockagentcoreCapacityProviderTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#key BedrockagentcoreCapacityProvider#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#value BedrockagentcoreCapacityProvider#value}
  */
  readonly value?: string;
}

export function bedrockagentcoreCapacityProviderTagsToTerraform(struct?: BedrockagentcoreCapacityProviderTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockagentcoreCapacityProviderTagsToHclTerraform(struct?: BedrockagentcoreCapacityProviderTags | cdktn.IResolvable): any {
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

export class BedrockagentcoreCapacityProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreCapacityProviderTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreCapacityProviderTags | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreCapacityProviderTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreCapacityProviderTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreCapacityProviderTagsOutputReference {
    return new BedrockagentcoreCapacityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider}
*/
export class BedrockagentcoreCapacityProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreCapacityProvider to import
  * @param importFromId The id of the existing BedrockagentcoreCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_capacity_provider',
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
    this._computeConfiguration.internalValue = config.computeConfiguration;
    this._description = config.description;
    this._name = config.name;
    this._permissionsConfiguration.internalValue = config.permissionsConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_provider_id - computed: true, optional: false, required: false
  public get capacityProviderId() {
    return this.getStringAttribute('capacity_provider_id');
  }

  // compute_configuration - computed: false, optional: false, required: true
  private _computeConfiguration = new BedrockagentcoreCapacityProviderComputeConfigurationOutputReference(this, "compute_configuration");
  public get computeConfiguration() {
    return this._computeConfiguration;
  }
  public putComputeConfiguration(value: BedrockagentcoreCapacityProviderComputeConfiguration) {
    this._computeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigurationInput() {
    return this._computeConfiguration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
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

  // permissions_configuration - computed: false, optional: false, required: true
  private _permissionsConfiguration = new BedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference(this, "permissions_configuration");
  public get permissionsConfiguration() {
    return this._permissionsConfiguration;
  }
  public putPermissionsConfiguration(value: BedrockagentcoreCapacityProviderPermissionsConfiguration) {
    this._permissionsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsConfigurationInput() {
    return this._permissionsConfiguration.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockagentcoreCapacityProviderTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockagentcoreCapacityProviderTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_configuration: bedrockagentcoreCapacityProviderComputeConfigurationToTerraform(this._computeConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      permissions_configuration: bedrockagentcoreCapacityProviderPermissionsConfigurationToTerraform(this._permissionsConfiguration.internalValue),
      tags: cdktn.listMapper(bedrockagentcoreCapacityProviderTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_configuration: {
        value: bedrockagentcoreCapacityProviderComputeConfigurationToHclTerraform(this._computeConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreCapacityProviderComputeConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      permissions_configuration: {
        value: bedrockagentcoreCapacityProviderPermissionsConfigurationToHclTerraform(this._permissionsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreCapacityProviderPermissionsConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockagentcoreCapacityProviderTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BedrockagentcoreCapacityProviderTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
