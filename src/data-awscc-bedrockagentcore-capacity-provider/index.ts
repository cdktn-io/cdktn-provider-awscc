/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreCapacityProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_capacity_provider#id DataAwsccBedrockagentcoreCapacityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // capacity_reservation_resource_group_arn - computed: true, optional: false, required: false
  public get capacityReservationResourceGroupArn() {
    return this.getStringAttribute('capacity_reservation_resource_group_arn');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_preference - computed: true, optional: false, required: false
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }

  // capacity_reservation_target - computed: true, optional: false, required: false
  private _capacityReservationTarget = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_card_index - computed: true, optional: false, required: false
  public get ebsCardIndex() {
    return this.getNumberAttribute('ebs_card_index');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_initialization_rate - computed: true, optional: false, required: false
  public get volumeInitializationRate() {
    return this.getNumberAttribute('volume_initialization_rate');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  private _ebs = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference {
    return new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_instance_types - computed: true, optional: false, required: false
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_configuration_arn - computed: true, optional: false, required: false
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference {
    return new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_specification - computed: true, optional: false, required: false
  private _capacityReservationSpecification = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }

  // ephemeral_volumes - computed: true, optional: false, required: false
  private _ephemeralVolumes = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersEphemeralVolumesList(this, "ephemeral_volumes", false);
  public get ephemeralVolumes() {
    return this._ephemeralVolumes;
  }

  // instance_profile_arn - computed: true, optional: false, required: false
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // license_specifications - computed: true, optional: false, required: false
  private _licenseSpecifications = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersLicenseSpecificationsList(this, "license_specifications", false);
  public get licenseSpecifications() {
    return this._licenseSpecifications;
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getStringAttribute('monitoring');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // propagated_tags - computed: true, optional: false, required: false
  private _propagatedTags = new cdktn.StringMap(this, "propagated_tags");
  public get propagatedTags() {
    return this._propagatedTags;
  }

  // ssh_key_name - computed: true, optional: false, required: false
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_parameters - computed: true, optional: false, required: false
  private _launchParameters = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceLaunchParametersOutputReference(this, "launch_parameters");
  public get launchParameters() {
    return this._launchParameters;
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_instance_timeout - computed: true, optional: false, required: false
  public get idleInstanceTimeout() {
    return this.getNumberAttribute('idle_instance_timeout');
  }

  // max_lifetime - computed: true, optional: false, required: false
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // free_space_gi_b - computed: true, optional: false, required: false
  public get freeSpaceGiB() {
    return this.getNumberAttribute('free_space_gi_b');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size_gi_b - computed: true, optional: false, required: false
  public get sizeGiB() {
    return this.getNumberAttribute('size_gi_b');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_configuration - computed: true, optional: false, required: false
  private _ebsConfiguration = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesEbsConfigurationOutputReference(this, "ebs_configuration");
  public get ebsConfiguration() {
    return this._ebsConfiguration;
  }
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference {
    return new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_source - computed: true, optional: false, required: false
  private _launchTemplateSource = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLaunchTemplateSourceOutputReference(this, "launch_template_source");
  public get launchTemplateSource() {
    return this._launchTemplateSource;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // root_volume - computed: true, optional: false, required: false
  private _rootVolume = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration {
}

export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderComputeConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderComputeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ec_2_configuration - computed: true, optional: false, required: false
  private _ec2Configuration = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationEc2ConfigurationOutputReference(this, "ec_2_configuration");
  public get ec2Configuration() {
    return this._ec2Configuration;
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration {
}

export function dataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderPermissionsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_provider_operator_role_arn - computed: true, optional: false, required: false
  public get capacityProviderOperatorRoleArn() {
    return this.getStringAttribute('capacity_provider_operator_role_arn');
  }
}
export interface DataAwsccBedrockagentcoreCapacityProviderTags {
}

export function dataAwsccBedrockagentcoreCapacityProviderTagsToTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreCapacityProviderTagsToHclTerraform(struct?: DataAwsccBedrockagentcoreCapacityProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreCapacityProviderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreCapacityProviderTags | undefined) {
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

export class DataAwsccBedrockagentcoreCapacityProviderTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference {
    return new DataAwsccBedrockagentcoreCapacityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider}
*/
export class DataAwsccBedrockagentcoreCapacityProvider extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreCapacityProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreCapacityProvider to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_capacity_provider',
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
    this._id = config.id;
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

  // compute_configuration - computed: true, optional: false, required: false
  private _computeConfiguration = new DataAwsccBedrockagentcoreCapacityProviderComputeConfigurationOutputReference(this, "compute_configuration");
  public get computeConfiguration() {
    return this._computeConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions_configuration - computed: true, optional: false, required: false
  private _permissionsConfiguration = new DataAwsccBedrockagentcoreCapacityProviderPermissionsConfigurationOutputReference(this, "permissions_configuration");
  public get permissionsConfiguration() {
    return this._permissionsConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockagentcoreCapacityProviderTagsList(this, "tags", true);
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
