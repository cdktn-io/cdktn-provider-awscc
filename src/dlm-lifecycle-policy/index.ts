/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DlmLifecyclePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_interval DlmLifecyclePolicy#create_interval}
  */
  readonly createInterval?: number;
  /**
  * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_targets DlmLifecyclePolicy#cross_region_copy_targets}
  */
  readonly crossRegionCopyTargets?: DlmLifecyclePolicyCrossRegionCopyTargets[] | cdktn.IResolvable;
  /**
  * **[Default policies only]** Specify the type of default policy to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#default_policy DlmLifecyclePolicy#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}
  */
  readonly description?: string;
  /**
  * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclusions DlmLifecyclePolicy#exclusions}
  */
  readonly exclusions?: DlmLifecyclePolicyExclusions;
  /**
  * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#extend_deletion DlmLifecyclePolicy#extend_deletion}
  */
  readonly extendDeletion?: boolean | cdktn.IResolvable;
  /**
  * The configuration details of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}
  */
  readonly policyDetails?: DlmLifecyclePolicyPolicyDetails;
  /**
  * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_interval DlmLifecyclePolicy#retain_interval}
  */
  readonly retainInterval?: number;
  /**
  * The activation state of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}
  */
  readonly state?: string;
  /**
  * The tags to apply to the lifecycle policy during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}
  */
  readonly tags?: DlmLifecyclePolicyTags[] | cdktn.IResolvable;
}
export interface DlmLifecyclePolicyCrossRegionCopyTargets {
  /**
  * The target Region, for example `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region DlmLifecyclePolicy#target_region}
  */
  readonly targetRegion?: string;
}

export function dlmLifecyclePolicyCrossRegionCopyTargetsToTerraform(struct?: DlmLifecyclePolicyCrossRegionCopyTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
  }
}


export function dlmLifecyclePolicyCrossRegionCopyTargetsToHclTerraform(struct?: DlmLifecyclePolicyCrossRegionCopyTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyCrossRegionCopyTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyCrossRegionCopyTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyCrossRegionCopyTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRegion = value.targetRegion;
    }
  }

  // target_region - computed: true, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }
}

export class DlmLifecyclePolicyCrossRegionCopyTargetsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyCrossRegionCopyTargets[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyCrossRegionCopyTargetsOutputReference {
    return new DlmLifecyclePolicyCrossRegionCopyTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyExclusionsExcludeTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyExclusionsExcludeTagsToTerraform(struct?: DlmLifecyclePolicyExclusionsExcludeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyExclusionsExcludeTagsToHclTerraform(struct?: DlmLifecyclePolicyExclusionsExcludeTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyExclusionsExcludeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyExclusionsExcludeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyExclusionsExcludeTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyExclusionsExcludeTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyExclusionsExcludeTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyExclusionsExcludeTagsOutputReference {
    return new DlmLifecyclePolicyExclusionsExcludeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyExclusions {
  /**
  * **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes DlmLifecyclePolicy#exclude_boot_volumes}
  */
  readonly excludeBootVolumes?: boolean | cdktn.IResolvable;
  /**
  * **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_tags DlmLifecyclePolicy#exclude_tags}
  */
  readonly excludeTags?: DlmLifecyclePolicyExclusionsExcludeTags[] | cdktn.IResolvable;
  /**
  * **[Default policies for EBS snapshots only]** Specifies the volume types to exclude. Volumes of the specified types will not be targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types DlmLifecyclePolicy#exclude_volume_types}
  */
  readonly excludeVolumeTypes?: string[];
}

export function dlmLifecyclePolicyExclusionsToTerraform(struct?: DlmLifecyclePolicyExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_boot_volumes: cdktn.booleanToTerraform(struct!.excludeBootVolumes),
    exclude_tags: cdktn.listMapper(dlmLifecyclePolicyExclusionsExcludeTagsToTerraform, false)(struct!.excludeTags),
    exclude_volume_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVolumeTypes),
  }
}


export function dlmLifecyclePolicyExclusionsToHclTerraform(struct?: DlmLifecyclePolicyExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_boot_volumes: {
      value: cdktn.booleanToHclTerraform(struct!.excludeBootVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_tags: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyExclusionsExcludeTagsToHclTerraform, false)(struct!.excludeTags),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyExclusionsExcludeTagsList",
    },
    exclude_volume_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyExclusions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
    }
    if (this._excludeTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags?.internalValue;
    }
    if (this._excludeVolumeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyExclusions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeBootVolumes = undefined;
      this._excludeTags.internalValue = undefined;
      this._excludeVolumeTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeBootVolumes = value.excludeBootVolumes;
      this._excludeTags.internalValue = value.excludeTags;
      this._excludeVolumeTypes = value.excludeVolumeTypes;
    }
  }

  // exclude_boot_volumes - computed: true, optional: true, required: false
  private _excludeBootVolumes?: boolean | cdktn.IResolvable; 
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }
  public set excludeBootVolumes(value: boolean | cdktn.IResolvable) {
    this._excludeBootVolumes = value;
  }
  public resetExcludeBootVolumes() {
    this._excludeBootVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumesInput() {
    return this._excludeBootVolumes;
  }

  // exclude_tags - computed: true, optional: true, required: false
  private _excludeTags = new DlmLifecyclePolicyExclusionsExcludeTagsList(this, "exclude_tags", false);
  public get excludeTags() {
    return this._excludeTags;
  }
  public putExcludeTags(value: DlmLifecyclePolicyExclusionsExcludeTags[] | cdktn.IResolvable) {
    this._excludeTags.internalValue = value;
  }
  public resetExcludeTags() {
    this._excludeTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags.internalValue;
  }

  // exclude_volume_types - computed: true, optional: true, required: false
  private _excludeVolumeTypes?: string[]; 
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
  public set excludeVolumeTypes(value: string[]) {
    this._excludeVolumeTypes = value;
  }
  public resetExcludeVolumeTypes() {
    this._excludeVolumeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVolumeTypesInput() {
    return this._excludeVolumeTypes;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration {
  /**
  * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or when encryption by default is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_arn: {
      value: cdktn.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkArn = undefined;
      this._encrypted = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkArn = value.cmkArn;
      this._encrypted = value.encrypted;
    }
  }

  // cmk_arn - computed: true, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
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
}
export interface DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule {
  /**
  * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy {
  /**
  * The encryption settings for the copied snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}
  */
  readonly encryptionConfiguration?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration;
  /**
  * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule;
  /**
  * The target Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target?: string;
}

export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_configuration: dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    retain_rule: dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToTerraform(struct!.retainRule),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_configuration: {
      value: dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._retainRule.internalValue = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._retainRule.internalValue = value.retainRule;
      this._target = value.target;
    }
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // retain_rule - computed: true, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsActions {
  /**
  * The rule for copying shared snapshots across Regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}
  */
  readonly crossRegionCopy?: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy[] | cdktn.IResolvable;
  /**
  * A descriptive name for the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name?: string;
}

export function dlmLifecyclePolicyPolicyDetailsActionsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_region_copy: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToTerraform, false)(struct!.crossRegionCopy),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_region_copy: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToHclTerraform, false)(struct!.crossRegionCopy),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList",
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

export class DlmLifecyclePolicyPolicyDetailsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossRegionCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopy = this._crossRegionCopy?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossRegionCopy.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossRegionCopy.internalValue = value.crossRegionCopy;
      this._name = value.name;
    }
  }

  // cross_region_copy - computed: true, optional: true, required: false
  private _crossRegionCopy = new DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList(this, "cross_region_copy", false);
  public get crossRegionCopy() {
    return this._crossRegionCopy;
  }
  public putCrossRegionCopy(value: DlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy[] | cdktn.IResolvable) {
    this._crossRegionCopy.internalValue = value;
  }
  public resetCrossRegionCopy() {
    this._crossRegionCopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyInput() {
    return this._crossRegionCopy.internalValue;
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

export class DlmLifecyclePolicyPolicyDetailsActionsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsActions[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsActionsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets {
  /**
  * The target Region, for example `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region DlmLifecyclePolicy#target_region}
  */
  readonly targetRegion?: string;
}

export function dlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
  }
}


export function dlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRegion = value.targetRegion;
    }
  }

  // target_region - computed: true, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }
}

export class DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsEventSourceParameters {
  /**
  * The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * The type of event. Currently, only snapshot sharing events are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}
  */
  readonly eventType?: string;
  /**
  * The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}
  */
  readonly snapshotOwner?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description_regex: cdktn.stringToTerraform(struct!.descriptionRegex),
    event_type: cdktn.stringToTerraform(struct!.eventType),
    snapshot_owner: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.snapshotOwner),
  }
}


export function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description_regex: {
      value: cdktn.stringToHclTerraform(struct!.descriptionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_owner: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.snapshotOwner),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionRegex = this._descriptionRegex;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._snapshotOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotOwner = this._snapshotOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptionRegex = undefined;
      this._eventType = undefined;
      this._snapshotOwner = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptionRegex = value.descriptionRegex;
      this._eventType = value.eventType;
      this._snapshotOwner = value.snapshotOwner;
    }
  }

  // description_regex - computed: true, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // snapshot_owner - computed: true, optional: true, required: false
  private _snapshotOwner?: string[]; 
  public get snapshotOwner() {
    return this.getListAttribute('snapshot_owner');
  }
  public set snapshotOwner(value: string[]) {
    this._snapshotOwner = value;
  }
  public resetSnapshotOwner() {
    this._snapshotOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOwnerInput() {
    return this._snapshotOwner;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsEventSource {
  /**
  * Information about the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
  */
  readonly parameters?: DlmLifecyclePolicyPolicyDetailsEventSourceParameters;
  /**
  * The source of the event. Currently only managed Amazon EventBridge events are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}
  */
  readonly type?: string;
}

export function dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: dlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct!.parameters),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: dlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsEventSourceParameters",
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

export class DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._type = value.type;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
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
export interface DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsExclusions {
  /**
  * **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes DlmLifecyclePolicy#exclude_boot_volumes}
  */
  readonly excludeBootVolumes?: boolean | cdktn.IResolvable;
  /**
  * **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_tags DlmLifecyclePolicy#exclude_tags}
  */
  readonly excludeTags?: DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags[] | cdktn.IResolvable;
  /**
  * **[Default policies for EBS snapshots only]** Specifies the volume types to exclude. Volumes of the specified types will not be targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types DlmLifecyclePolicy#exclude_volume_types}
  */
  readonly excludeVolumeTypes?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsExclusionsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_boot_volumes: cdktn.booleanToTerraform(struct!.excludeBootVolumes),
    exclude_tags: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToTerraform, false)(struct!.excludeTags),
    exclude_volume_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVolumeTypes),
  }
}


export function dlmLifecyclePolicyPolicyDetailsExclusionsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_boot_volumes: {
      value: cdktn.booleanToHclTerraform(struct!.excludeBootVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_tags: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToHclTerraform, false)(struct!.excludeTags),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList",
    },
    exclude_volume_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsExclusions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
    }
    if (this._excludeTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags?.internalValue;
    }
    if (this._excludeVolumeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsExclusions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeBootVolumes = undefined;
      this._excludeTags.internalValue = undefined;
      this._excludeVolumeTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeBootVolumes = value.excludeBootVolumes;
      this._excludeTags.internalValue = value.excludeTags;
      this._excludeVolumeTypes = value.excludeVolumeTypes;
    }
  }

  // exclude_boot_volumes - computed: true, optional: true, required: false
  private _excludeBootVolumes?: boolean | cdktn.IResolvable; 
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }
  public set excludeBootVolumes(value: boolean | cdktn.IResolvable) {
    this._excludeBootVolumes = value;
  }
  public resetExcludeBootVolumes() {
    this._excludeBootVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumesInput() {
    return this._excludeBootVolumes;
  }

  // exclude_tags - computed: true, optional: true, required: false
  private _excludeTags = new DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList(this, "exclude_tags", false);
  public get excludeTags() {
    return this._excludeTags;
  }
  public putExcludeTags(value: DlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags[] | cdktn.IResolvable) {
    this._excludeTags.internalValue = value;
  }
  public resetExcludeTags() {
    this._excludeTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags.internalValue;
  }

  // exclude_volume_types - computed: true, optional: true, required: false
  private _excludeVolumeTypes?: string[]; 
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
  public set excludeVolumeTypes(value: string[]) {
    this._excludeVolumeTypes = value;
  }
  public resetExcludeVolumeTypes() {
    this._excludeVolumeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVolumeTypesInput() {
    return this._excludeVolumeTypes;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsParameters {
  /**
  * **[Custom snapshot policies that target instances only]** Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is `false`. If you specify `true`, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}
  */
  readonly excludeBootVolume?: boolean | cdktn.IResolvable;
  /**
  * **[Custom snapshot policies that target instances only]** The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets. If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_data_volume_tags DlmLifecyclePolicy#exclude_data_volume_tags}
  */
  readonly excludeDataVolumeTags?: DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags[] | cdktn.IResolvable;
  /**
  * **[Custom AMI policies only]** Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs.
  * 
  * The default is `true` (instances are not rebooted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}
  */
  readonly noReboot?: boolean | cdktn.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_boot_volume: cdktn.booleanToTerraform(struct!.excludeBootVolume),
    exclude_data_volume_tags: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToTerraform, false)(struct!.excludeDataVolumeTags),
    no_reboot: cdktn.booleanToTerraform(struct!.noReboot),
  }
}


export function dlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_boot_volume: {
      value: cdktn.booleanToHclTerraform(struct!.excludeBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_data_volume_tags: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToHclTerraform, false)(struct!.excludeDataVolumeTags),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList",
    },
    no_reboot: {
      value: cdktn.booleanToHclTerraform(struct!.noReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolume = this._excludeBootVolume;
    }
    if (this._excludeDataVolumeTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDataVolumeTags = this._excludeDataVolumeTags?.internalValue;
    }
    if (this._noReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReboot = this._noReboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeBootVolume = undefined;
      this._excludeDataVolumeTags.internalValue = undefined;
      this._noReboot = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeBootVolume = value.excludeBootVolume;
      this._excludeDataVolumeTags.internalValue = value.excludeDataVolumeTags;
      this._noReboot = value.noReboot;
    }
  }

  // exclude_boot_volume - computed: true, optional: true, required: false
  private _excludeBootVolume?: boolean | cdktn.IResolvable; 
  public get excludeBootVolume() {
    return this.getBooleanAttribute('exclude_boot_volume');
  }
  public set excludeBootVolume(value: boolean | cdktn.IResolvable) {
    this._excludeBootVolume = value;
  }
  public resetExcludeBootVolume() {
    this._excludeBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumeInput() {
    return this._excludeBootVolume;
  }

  // exclude_data_volume_tags - computed: true, optional: true, required: false
  private _excludeDataVolumeTags = new DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList(this, "exclude_data_volume_tags", false);
  public get excludeDataVolumeTags() {
    return this._excludeDataVolumeTags;
  }
  public putExcludeDataVolumeTags(value: DlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags[] | cdktn.IResolvable) {
    this._excludeDataVolumeTags.internalValue = value;
  }
  public resetExcludeDataVolumeTags() {
    this._excludeDataVolumeTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDataVolumeTagsInput() {
    return this._excludeDataVolumeTags.internalValue;
  }

  // no_reboot - computed: true, optional: true, required: false
  private _noReboot?: boolean | cdktn.IResolvable; 
  public get noReboot() {
    return this.getBooleanAttribute('no_reboot');
  }
  public set noReboot(value: boolean | cdktn.IResolvable) {
    this._noReboot = value;
  }
  public resetNoReboot() {
    this._noReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRebootInput() {
    return this._noReboot;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier {
  /**
  * The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time in which to measure the **Interval**. For example, to retain snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule {
  /**
  * Information about retention period in the Amazon EBS Snapshots Archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retention_archive_tier DlmLifecyclePolicy#retention_archive_tier}
  */
  readonly retentionArchiveTier?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_archive_tier: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToTerraform(struct!.retentionArchiveTier),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_archive_tier: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToHclTerraform(struct!.retentionArchiveTier),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionArchiveTier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionArchiveTier = this._retentionArchiveTier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionArchiveTier.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionArchiveTier.internalValue = value.retentionArchiveTier;
    }
  }

  // retention_archive_tier - computed: true, optional: true, required: false
  private _retentionArchiveTier = new DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference(this, "retention_archive_tier");
  public get retentionArchiveTier() {
    return this._retentionArchiveTier;
  }
  public putRetentionArchiveTier(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier) {
    this._retentionArchiveTier.internalValue = value;
  }
  public resetRetentionArchiveTier() {
    this._retentionArchiveTier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionArchiveTierInput() {
    return this._retentionArchiveTier.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule {
  /**
  * Information about the retention period for the snapshot archiving rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retain_rule: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToTerraform(struct!.retainRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // retain_rule - computed: true, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts {
  /**
  * Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the pre script fails.
  * 
  * - To default to crash consistent snapshot if the pre script fails, specify `true`.
  * - To skip the instance for snapshot creation if the pre script fails, specify `false`.
  * 
  * This parameter is supported only if you run a pre script. If you run a post script only, omit this parameter.
  * 
  * Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execute_operation_on_script_failure DlmLifecyclePolicy#execute_operation_on_script_failure}
  */
  readonly executeOperationOnScriptFailure?: boolean | cdktn.IResolvable;
  /**
  * The SSM document that includes the pre and/or post scripts to run.
  * 
  * If you are automating VSS backups, specify `AWS_VSS_BACKUP`. In this case, Amazon Data Lifecycle Manager automatically uses the `AWSEC2-CreateVssSnapshot` SSM document.
  * 
  * If you are using a custom SSM document that you own, specify either the name or ARN of the SSM document. If you are using a custom SSM document that is shared with you, specify the ARN of the SSM document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_handler DlmLifecyclePolicy#execution_handler}
  */
  readonly executionHandler?: string;
  /**
  * Indicates the service used to execute the pre and/or post scripts.
  * 
  * Default: `AWS_SYSTEMS_MANAGER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_handler_service DlmLifecyclePolicy#execution_handler_service}
  */
  readonly executionHandlerService?: string;
  /**
  * Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script run attempt if it has not completed. If a script does not complete within its timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre and post scripts individually.
  * 
  * Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_timeout DlmLifecyclePolicy#execution_timeout}
  */
  readonly executionTimeout?: number;
  /**
  * Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.
  * 
  * If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation process, including running the pre and post scripts.
  * 
  * If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this case, the pre script will have completed and the snapshot might have been created.
  * 
  * If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify `0`.
  * 
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#maximum_retry_count DlmLifecyclePolicy#maximum_retry_count}
  */
  readonly maximumRetryCount?: number;
  /**
  * Indicate which scripts Amazon Data Lifecycle Manager should run on target instances. Pre scripts run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager initiates snapshot creation.
  * 
  * - To run a pre script only, specify `PRE`.
  * - To run a post script only, specify `POST`.
  * - To run both pre and post scripts, specify both `PRE` and `POST`.
  * 
  * Default: PRE and POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#stages DlmLifecyclePolicy#stages}
  */
  readonly stages?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execute_operation_on_script_failure: cdktn.booleanToTerraform(struct!.executeOperationOnScriptFailure),
    execution_handler: cdktn.stringToTerraform(struct!.executionHandler),
    execution_handler_service: cdktn.stringToTerraform(struct!.executionHandlerService),
    execution_timeout: cdktn.numberToTerraform(struct!.executionTimeout),
    maximum_retry_count: cdktn.numberToTerraform(struct!.maximumRetryCount),
    stages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stages),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execute_operation_on_script_failure: {
      value: cdktn.booleanToHclTerraform(struct!.executeOperationOnScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_handler: {
      value: cdktn.stringToHclTerraform(struct!.executionHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_handler_service: {
      value: cdktn.stringToHclTerraform(struct!.executionHandlerService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktn.numberToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_count: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeOperationOnScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOperationOnScriptFailure = this._executeOperationOnScriptFailure;
    }
    if (this._executionHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandler = this._executionHandler;
    }
    if (this._executionHandlerService !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandlerService = this._executionHandlerService;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._maximumRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryCount = this._maximumRetryCount;
    }
    if (this._stages !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executeOperationOnScriptFailure = undefined;
      this._executionHandler = undefined;
      this._executionHandlerService = undefined;
      this._executionTimeout = undefined;
      this._maximumRetryCount = undefined;
      this._stages = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executeOperationOnScriptFailure = value.executeOperationOnScriptFailure;
      this._executionHandler = value.executionHandler;
      this._executionHandlerService = value.executionHandlerService;
      this._executionTimeout = value.executionTimeout;
      this._maximumRetryCount = value.maximumRetryCount;
      this._stages = value.stages;
    }
  }

  // execute_operation_on_script_failure - computed: true, optional: true, required: false
  private _executeOperationOnScriptFailure?: boolean | cdktn.IResolvable; 
  public get executeOperationOnScriptFailure() {
    return this.getBooleanAttribute('execute_operation_on_script_failure');
  }
  public set executeOperationOnScriptFailure(value: boolean | cdktn.IResolvable) {
    this._executeOperationOnScriptFailure = value;
  }
  public resetExecuteOperationOnScriptFailure() {
    this._executeOperationOnScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOperationOnScriptFailureInput() {
    return this._executeOperationOnScriptFailure;
  }

  // execution_handler - computed: true, optional: true, required: false
  private _executionHandler?: string; 
  public get executionHandler() {
    return this.getStringAttribute('execution_handler');
  }
  public set executionHandler(value: string) {
    this._executionHandler = value;
  }
  public resetExecutionHandler() {
    this._executionHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerInput() {
    return this._executionHandler;
  }

  // execution_handler_service - computed: true, optional: true, required: false
  private _executionHandlerService?: string; 
  public get executionHandlerService() {
    return this.getStringAttribute('execution_handler_service');
  }
  public set executionHandlerService(value: string) {
    this._executionHandlerService = value;
  }
  public resetExecutionHandlerService() {
    this._executionHandlerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerServiceInput() {
    return this._executionHandlerService;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: number; 
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }
  public set executionTimeout(value: number) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // maximum_retry_count - computed: true, optional: true, required: false
  private _maximumRetryCount?: number; 
  public get maximumRetryCount() {
    return this.getNumberAttribute('maximum_retry_count');
  }
  public set maximumRetryCount(value: number) {
    this._maximumRetryCount = value;
  }
  public resetMaximumRetryCount() {
    this._maximumRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryCountInput() {
    return this._maximumRetryCount;
  }

  // stages - computed: true, optional: true, required: false
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule {
  /**
  * The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The interval unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * **[Custom snapshot policies only]** Specifies the destination for snapshots created by the policy. The allowed destinations depend on the location of the targeted resources.
  * 
  * - If the policy targets resources in a Region, then you must create snapshots in the same Region as the source resource.
  * - If the policy targets resources in a Local Zone, you can create snapshots in the same Local Zone or in its parent Region.
  * - If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost or in its parent Region.
  * 
  * Default: `CLOUD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}
  */
  readonly location?: string;
  /**
  * **[Custom snapshot policies that target instances only]** Specifies pre and/or post scripts for a snapshot lifecycle policy that targets instances. This is useful for creating application-consistent snapshots, or for performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#scripts DlmLifecyclePolicy#scripts}
  */
  readonly scripts?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts[] | cdktn.IResolvable;
  /**
  * The time, in UTC, to start the operation. The supported format is hh:mm.
  * 
  * The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}
  */
  readonly times?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    location: cdktn.stringToTerraform(struct!.location),
    scripts: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToTerraform, false)(struct!.scripts),
    times: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.times),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scripts: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToHclTerraform, false)(struct!.scripts),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList",
    },
    times: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.times),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._scripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts?.internalValue;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
      this._location = undefined;
      this._scripts.internalValue = undefined;
      this._times = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
      this._location = value.location;
      this._scripts.internalValue = value.scripts;
      this._times = value.times;
    }
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
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

  // scripts - computed: true, optional: true, required: false
  private _scripts = new DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList(this, "scripts", false);
  public get scripts() {
    return this._scripts;
  }
  public putScripts(value: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts[] | cdktn.IResolvable) {
    this._scripts.internalValue = value;
  }
  public resetScripts() {
    this._scripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts.internalValue;
  }

  // times - computed: true, optional: true, required: false
  private _times?: string[]; 
  public get times() {
    return this.getListAttribute('times');
  }
  public set times(value: string[]) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule {
  /**
  * The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time in which to measure the **Interval**. For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule {
  /**
  * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules {
  /**
  * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * **[Custom AMI policies only]** The AMI deprecation rule for cross-Region AMI copies created by the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule;
  /**
  * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or if encryption by default is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule;
  /**
  * **[Custom snapshot policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target?: string;
  /**
  * **[Custom AMI policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the AMI copies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region DlmLifecyclePolicy#target_region}
  */
  readonly targetRegion?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToTerraform(struct!.deprecateRule),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    retain_rule: dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToTerraform(struct!.retainRule),
    target: cdktn.stringToTerraform(struct!.target),
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_arn: {
      value: cdktn.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deprecate_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkArn = undefined;
      this._copyTags = undefined;
      this._deprecateRule.internalValue = undefined;
      this._encrypted = undefined;
      this._retainRule.internalValue = undefined;
      this._target = undefined;
      this._targetRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkArn = value.cmkArn;
      this._copyTags = value.copyTags;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._encrypted = value.encrypted;
      this._retainRule.internalValue = value.retainRule;
      this._target = value.target;
      this._targetRegion = value.targetRegion;
    }
  }

  // cmk_arn - computed: true, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // deprecate_rule - computed: true, optional: true, required: false
  private _deprecateRule = new DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
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

  // retain_rule - computed: true, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_region - computed: true, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule {
  /**
  * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time in which to measure the **Interval**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule {
  /**
  * The Availability Zone IDs in which to enable fast snapshot restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#availability_zone_ids DlmLifecyclePolicy#availability_zone_ids}
  */
  readonly availabilityZoneIds?: string[];
  /**
  * The Availability Zones in which to enable fast snapshot restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The number of snapshots to be enabled with fast snapshot restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time for enabling fast snapshot restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZoneIds),
    availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZoneIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    availability_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneIds = this._availabilityZoneIds;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneIds = undefined;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneIds = value.availabilityZoneIds;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // availability_zone_ids - computed: true, optional: true, required: false
  private _availabilityZoneIds?: string[]; 
  public get availabilityZoneIds() {
    return this.getListAttribute('availability_zone_ids');
  }
  public set availabilityZoneIds(value: string[]) {
    this._availabilityZoneIds = value;
  }
  public resetAvailabilityZoneIds() {
    this._availabilityZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdsInput() {
    return this._availabilityZoneIds;
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule {
  /**
  * The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify `3`. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
    interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesShareRules {
  /**
  * The IDs of the AWS accounts with which to share the snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}
  */
  readonly targetAccounts?: string[];
  /**
  * The period after which snapshots that are shared with other AWS accounts are automatically unshared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}
  */
  readonly unshareInterval?: number;
  /**
  * The unit of time for the automatic unsharing interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}
  */
  readonly unshareIntervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesShareRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetAccounts),
    unshare_interval: cdktn.numberToTerraform(struct!.unshareInterval),
    unshare_interval_unit: cdktn.stringToTerraform(struct!.unshareIntervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesShareRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unshare_interval: {
      value: cdktn.numberToHclTerraform(struct!.unshareInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unshare_interval_unit: {
      value: cdktn.stringToHclTerraform(struct!.unshareIntervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesShareRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccounts = this._targetAccounts;
    }
    if (this._unshareInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareInterval = this._unshareInterval;
    }
    if (this._unshareIntervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareIntervalUnit = this._unshareIntervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesShareRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetAccounts = undefined;
      this._unshareInterval = undefined;
      this._unshareIntervalUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetAccounts = value.targetAccounts;
      this._unshareInterval = value.unshareInterval;
      this._unshareIntervalUnit = value.unshareIntervalUnit;
    }
  }

  // target_accounts - computed: true, optional: true, required: false
  private _targetAccounts?: string[]; 
  public get targetAccounts() {
    return this.getListAttribute('target_accounts');
  }
  public set targetAccounts(value: string[]) {
    this._targetAccounts = value;
  }
  public resetTargetAccounts() {
    this._targetAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountsInput() {
    return this._targetAccounts;
  }

  // unshare_interval - computed: true, optional: true, required: false
  private _unshareInterval?: number; 
  public get unshareInterval() {
    return this.getNumberAttribute('unshare_interval');
  }
  public set unshareInterval(value: number) {
    this._unshareInterval = value;
  }
  public resetUnshareInterval() {
    this._unshareInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalInput() {
    return this._unshareInterval;
  }

  // unshare_interval_unit - computed: true, optional: true, required: false
  private _unshareIntervalUnit?: string; 
  public get unshareIntervalUnit() {
    return this.getStringAttribute('unshare_interval_unit');
  }
  public set unshareIntervalUnit(value: string) {
    this._unshareIntervalUnit = value;
  }
  public resetUnshareIntervalUnit() {
    this._unshareIntervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalUnitInput() {
    return this._unshareIntervalUnit;
  }
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedulesShareRules[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedules {
  /**
  * **[Custom snapshot policies that target volumes only]** The snapshot archiving rule for the schedule. When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#archive_rule DlmLifecyclePolicy#archive_rule}
  */
  readonly archiveRule?: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule;
  /**
  * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * The creation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}
  */
  readonly createRule?: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule;
  /**
  * Specifies a rule for copying snapshots or AMIs across Regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_rules DlmLifecyclePolicy#cross_region_copy_rules}
  */
  readonly crossRegionCopyRules?: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules[] | cdktn.IResolvable;
  /**
  * **[Custom AMI policies only]** The AMI deprecation rule for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule;
  /**
  * **[Custom snapshot policies only]** The rule for enabling fast snapshot restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}
  */
  readonly fastRestoreRule?: DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule;
  /**
  * The name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name?: string;
  /**
  * The retention rule for snapshots or AMIs created by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule;
  /**
  * **[Custom snapshot policies only]** The rule for sharing snapshots with other AWS accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#share_rules DlmLifecyclePolicy#share_rules}
  */
  readonly shareRules?: DlmLifecyclePolicyPolicyDetailsSchedulesShareRules[] | cdktn.IResolvable;
  /**
  * The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}
  */
  readonly tagsToAdd?: DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd[] | cdktn.IResolvable;
  /**
  * **[AMI policies and snapshot policies that target instances only]** A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)`. Variable tags are only valid for EBS Snapshot Management -- Instance policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}
  */
  readonly variableTags?: DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags[] | cdktn.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsSchedulesToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    archive_rule: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToTerraform(struct!.archiveRule),
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    create_rule: dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToTerraform(struct!.createRule),
    cross_region_copy_rules: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToTerraform, false)(struct!.crossRegionCopyRules),
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToTerraform(struct!.deprecateRule),
    fast_restore_rule: dlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToTerraform(struct!.fastRestoreRule),
    name: cdktn.stringToTerraform(struct!.name),
    retain_rule: dlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToTerraform(struct!.retainRule),
    share_rules: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToTerraform, false)(struct!.shareRules),
    tags_to_add: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToTerraform, false)(struct!.tagsToAdd),
    variable_tags: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToTerraform, false)(struct!.variableTags),
  }
}


export function dlmLifecyclePolicyPolicyDetailsSchedulesToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    archive_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToHclTerraform(struct!.archiveRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule",
    },
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToHclTerraform(struct!.createRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule",
    },
    cross_region_copy_rules: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToHclTerraform, false)(struct!.crossRegionCopyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList",
    },
    deprecate_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule",
    },
    fast_restore_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToHclTerraform(struct!.fastRestoreRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule",
    },
    share_rules: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToHclTerraform, false)(struct!.shareRules),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList",
    },
    tags_to_add: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToHclTerraform, false)(struct!.tagsToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList",
    },
    variable_tags: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToHclTerraform, false)(struct!.variableTags),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRule = this._archiveRule?.internalValue;
    }
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._createRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRule = this._createRule?.internalValue;
    }
    if (this._crossRegionCopyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopyRules = this._crossRegionCopyRules?.internalValue;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._fastRestoreRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastRestoreRule = this._fastRestoreRule?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    if (this._shareRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareRules = this._shareRules?.internalValue;
    }
    if (this._tagsToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToAdd = this._tagsToAdd?.internalValue;
    }
    if (this._variableTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableTags = this._variableTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveRule.internalValue = undefined;
      this._copyTags = undefined;
      this._createRule.internalValue = undefined;
      this._crossRegionCopyRules.internalValue = undefined;
      this._deprecateRule.internalValue = undefined;
      this._fastRestoreRule.internalValue = undefined;
      this._name = undefined;
      this._retainRule.internalValue = undefined;
      this._shareRules.internalValue = undefined;
      this._tagsToAdd.internalValue = undefined;
      this._variableTags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveRule.internalValue = value.archiveRule;
      this._copyTags = value.copyTags;
      this._createRule.internalValue = value.createRule;
      this._crossRegionCopyRules.internalValue = value.crossRegionCopyRules;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._fastRestoreRule.internalValue = value.fastRestoreRule;
      this._name = value.name;
      this._retainRule.internalValue = value.retainRule;
      this._shareRules.internalValue = value.shareRules;
      this._tagsToAdd.internalValue = value.tagsToAdd;
      this._variableTags.internalValue = value.variableTags;
    }
  }

  // archive_rule - computed: true, optional: true, required: false
  private _archiveRule = new DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference(this, "archive_rule");
  public get archiveRule() {
    return this._archiveRule;
  }
  public putArchiveRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule) {
    this._archiveRule.internalValue = value;
  }
  public resetArchiveRule() {
    this._archiveRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRuleInput() {
    return this._archiveRule.internalValue;
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // create_rule - computed: true, optional: true, required: false
  private _createRule = new DlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference(this, "create_rule");
  public get createRule() {
    return this._createRule;
  }
  public putCreateRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesCreateRule) {
    this._createRule.internalValue = value;
  }
  public resetCreateRule() {
    this._createRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRuleInput() {
    return this._createRule.internalValue;
  }

  // cross_region_copy_rules - computed: true, optional: true, required: false
  private _crossRegionCopyRules = new DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList(this, "cross_region_copy_rules", false);
  public get crossRegionCopyRules() {
    return this._crossRegionCopyRules;
  }
  public putCrossRegionCopyRules(value: DlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules[] | cdktn.IResolvable) {
    this._crossRegionCopyRules.internalValue = value;
  }
  public resetCrossRegionCopyRules() {
    this._crossRegionCopyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyRulesInput() {
    return this._crossRegionCopyRules.internalValue;
  }

  // deprecate_rule - computed: true, optional: true, required: false
  private _deprecateRule = new DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
  }

  // fast_restore_rule - computed: true, optional: true, required: false
  private _fastRestoreRule = new DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference(this, "fast_restore_rule");
  public get fastRestoreRule() {
    return this._fastRestoreRule;
  }
  public putFastRestoreRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule) {
    this._fastRestoreRule.internalValue = value;
  }
  public resetFastRestoreRule() {
    this._fastRestoreRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRestoreRuleInput() {
    return this._fastRestoreRule.internalValue;
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

  // retain_rule - computed: true, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsSchedulesRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // share_rules - computed: true, optional: true, required: false
  private _shareRules = new DlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList(this, "share_rules", false);
  public get shareRules() {
    return this._shareRules;
  }
  public putShareRules(value: DlmLifecyclePolicyPolicyDetailsSchedulesShareRules[] | cdktn.IResolvable) {
    this._shareRules.internalValue = value;
  }
  public resetShareRules() {
    this._shareRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareRulesInput() {
    return this._shareRules.internalValue;
  }

  // tags_to_add - computed: true, optional: true, required: false
  private _tagsToAdd = new DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList(this, "tags_to_add", false);
  public get tagsToAdd() {
    return this._tagsToAdd;
  }
  public putTagsToAdd(value: DlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd[] | cdktn.IResolvable) {
    this._tagsToAdd.internalValue = value;
  }
  public resetTagsToAdd() {
    this._tagsToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToAddInput() {
    return this._tagsToAdd.internalValue;
  }

  // variable_tags - computed: true, optional: true, required: false
  private _variableTags = new DlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList(this, "variable_tags", false);
  public get variableTags() {
    return this._variableTags;
  }
  public putVariableTags(value: DlmLifecyclePolicyPolicyDetailsSchedulesVariableTags[] | cdktn.IResolvable) {
    this._variableTags.internalValue = value;
  }
  public resetVariableTags() {
    this._variableTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTagsInput() {
    return this._variableTags.internalValue;
  }
}

export class DlmLifecyclePolicyPolicyDetailsSchedulesList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedules[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsSchedulesOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsTargetTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyPolicyDetailsTargetTagsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsTargetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyPolicyDetailsTargetTagsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsTargetTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsTargetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsTargetTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyPolicyDetailsTargetTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsTargetTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetails {
  /**
  * **[Event-based policies only]** The actions to be performed when the event-based policy is activated. You can specify only one action per policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#actions DlmLifecyclePolicy#actions}
  */
  readonly actions?: DlmLifecyclePolicyPolicyDetailsActions[] | cdktn.IResolvable;
  /**
  * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is `false`.
  * 
  * Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktn.IResolvable;
  /**
  * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
  * 
  * Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_interval DlmLifecyclePolicy#create_interval}
  */
  readonly createInterval?: number;
  /**
  * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_targets DlmLifecyclePolicy#cross_region_copy_targets}
  */
  readonly crossRegionCopyTargets?: DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets[] | cdktn.IResolvable;
  /**
  * **[Event-based policies only]** The event that activates the event-based policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}
  */
  readonly eventSource?: DlmLifecyclePolicyPolicyDetailsEventSource;
  /**
  * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclusions DlmLifecyclePolicy#exclusions}
  */
  readonly exclusions?: DlmLifecyclePolicyPolicyDetailsExclusions;
  /**
  * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
  * 
  * Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#extend_deletion DlmLifecyclePolicy#extend_deletion}
  */
  readonly extendDeletion?: boolean | cdktn.IResolvable;
  /**
  * **[Custom snapshot and AMI policies only]** A set of optional parameters for snapshot and AMI lifecycle policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
  */
  readonly parameters?: DlmLifecyclePolicyPolicyDetailsParameters;
  /**
  * The type of policy to create. Specify one of the following:
  * 
  * - `SIMPLIFIED` -- To create a default policy.
  * - `STANDARD` -- To create a custom policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_language DlmLifecyclePolicy#policy_language}
  */
  readonly policyLanguage?: string;
  /**
  * The type of policy. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account.
  * 
  * The default is `EBS_SNAPSHOT_MANAGEMENT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * **[Custom snapshot and AMI policies only]** The location of the resources to backup. If the source resources are located in a Region, specify `CLOUD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}
  */
  readonly resourceLocations?: string[];
  /**
  * **[Default policies only]** Specify the type of default policy to create.
  * 
  * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME`.
  * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_type DlmLifecyclePolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * **[Custom snapshot policies only]** The target resource type for snapshot and AMI lifecycle policies. Use `VOLUME` to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
  * 
  * Default: 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_interval DlmLifecyclePolicy#retain_interval}
  */
  readonly retainInterval?: number;
  /**
  * **[Custom snapshot and AMI policies only]** The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules -- one mandatory schedule and up to three optional schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#schedules DlmLifecyclePolicy#schedules}
  */
  readonly schedules?: DlmLifecyclePolicyPolicyDetailsSchedules[] | cdktn.IResolvable;
  /**
  * **[Custom snapshot and AMI policies only]** The single tag that identifies targeted resources for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}
  */
  readonly targetTags?: DlmLifecyclePolicyPolicyDetailsTargetTags[] | cdktn.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsActionsToTerraform, false)(struct!.actions),
    copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
    create_interval: cdktn.numberToTerraform(struct!.createInterval),
    cross_region_copy_targets: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToTerraform, false)(struct!.crossRegionCopyTargets),
    event_source: dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct!.eventSource),
    exclusions: dlmLifecyclePolicyPolicyDetailsExclusionsToTerraform(struct!.exclusions),
    extend_deletion: cdktn.booleanToTerraform(struct!.extendDeletion),
    parameters: dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct!.parameters),
    policy_language: cdktn.stringToTerraform(struct!.policyLanguage),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
    resource_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceLocations),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    retain_interval: cdktn.numberToTerraform(struct!.retainInterval),
    schedules: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsSchedulesToTerraform, false)(struct!.schedules),
    target_tags: cdktn.listMapper(dlmLifecyclePolicyPolicyDetailsTargetTagsToTerraform, false)(struct!.targetTags),
  }
}


export function dlmLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionsList",
    },
    copy_tags: {
      value: cdktn.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_interval: {
      value: cdktn.numberToHclTerraform(struct!.createInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cross_region_copy_targets: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToHclTerraform, false)(struct!.crossRegionCopyTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList",
    },
    event_source: {
      value: dlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct!.eventSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsEventSource",
    },
    exclusions: {
      value: dlmLifecyclePolicyPolicyDetailsExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsExclusions",
    },
    extend_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.extendDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: dlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsParameters",
    },
    policy_language: {
      value: cdktn.stringToHclTerraform(struct!.policyLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retain_interval: {
      value: cdktn.numberToHclTerraform(struct!.retainInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedules: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsSchedulesList",
    },
    target_tags: {
      value: cdktn.listMapperHcl(dlmLifecyclePolicyPolicyDetailsTargetTagsToHclTerraform, false)(struct!.targetTags),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsTargetTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._createInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.createInterval = this._createInterval;
    }
    if (this._crossRegionCopyTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopyTargets = this._crossRegionCopyTargets?.internalValue;
    }
    if (this._eventSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    if (this._extendDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendDeletion = this._extendDeletion;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._policyLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyLanguage = this._policyLanguage;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._resourceLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLocations = this._resourceLocations;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._retainInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainInterval = this._retainInterval;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    if (this._targetTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTags = this._targetTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._copyTags = undefined;
      this._createInterval = undefined;
      this._crossRegionCopyTargets.internalValue = undefined;
      this._eventSource.internalValue = undefined;
      this._exclusions.internalValue = undefined;
      this._extendDeletion = undefined;
      this._parameters.internalValue = undefined;
      this._policyLanguage = undefined;
      this._policyType = undefined;
      this._resourceLocations = undefined;
      this._resourceType = undefined;
      this._resourceTypes = undefined;
      this._retainInterval = undefined;
      this._schedules.internalValue = undefined;
      this._targetTags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._copyTags = value.copyTags;
      this._createInterval = value.createInterval;
      this._crossRegionCopyTargets.internalValue = value.crossRegionCopyTargets;
      this._eventSource.internalValue = value.eventSource;
      this._exclusions.internalValue = value.exclusions;
      this._extendDeletion = value.extendDeletion;
      this._parameters.internalValue = value.parameters;
      this._policyLanguage = value.policyLanguage;
      this._policyType = value.policyType;
      this._resourceLocations = value.resourceLocations;
      this._resourceType = value.resourceType;
      this._resourceTypes = value.resourceTypes;
      this._retainInterval = value.retainInterval;
      this._schedules.internalValue = value.schedules;
      this._targetTags.internalValue = value.targetTags;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new DlmLifecyclePolicyPolicyDetailsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DlmLifecyclePolicyPolicyDetailsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // create_interval - computed: true, optional: true, required: false
  private _createInterval?: number; 
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }
  public set createInterval(value: number) {
    this._createInterval = value;
  }
  public resetCreateInterval() {
    this._createInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIntervalInput() {
    return this._createInterval;
  }

  // cross_region_copy_targets - computed: true, optional: true, required: false
  private _crossRegionCopyTargets = new DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList(this, "cross_region_copy_targets", false);
  public get crossRegionCopyTargets() {
    return this._crossRegionCopyTargets;
  }
  public putCrossRegionCopyTargets(value: DlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets[] | cdktn.IResolvable) {
    this._crossRegionCopyTargets.internalValue = value;
  }
  public resetCrossRegionCopyTargets() {
    this._crossRegionCopyTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyTargetsInput() {
    return this._crossRegionCopyTargets.internalValue;
  }

  // event_source - computed: true, optional: true, required: false
  private _eventSource = new DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(this, "event_source");
  public get eventSource() {
    return this._eventSource;
  }
  public putEventSource(value: DlmLifecyclePolicyPolicyDetailsEventSource) {
    this._eventSource.internalValue = value;
  }
  public resetEventSource() {
    this._eventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource.internalValue;
  }

  // exclusions - computed: true, optional: true, required: false
  private _exclusions = new DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DlmLifecyclePolicyPolicyDetailsExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // extend_deletion - computed: true, optional: true, required: false
  private _extendDeletion?: boolean | cdktn.IResolvable; 
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
  }
  public set extendDeletion(value: boolean | cdktn.IResolvable) {
    this._extendDeletion = value;
  }
  public resetExtendDeletion() {
    this._extendDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendDeletionInput() {
    return this._extendDeletion;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DlmLifecyclePolicyPolicyDetailsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DlmLifecyclePolicyPolicyDetailsParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // policy_language - computed: true, optional: true, required: false
  private _policyLanguage?: string; 
  public get policyLanguage() {
    return this.getStringAttribute('policy_language');
  }
  public set policyLanguage(value: string) {
    this._policyLanguage = value;
  }
  public resetPolicyLanguage() {
    this._policyLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLanguageInput() {
    return this._policyLanguage;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // resource_locations - computed: true, optional: true, required: false
  private _resourceLocations?: string[]; 
  public get resourceLocations() {
    return this.getListAttribute('resource_locations');
  }
  public set resourceLocations(value: string[]) {
    this._resourceLocations = value;
  }
  public resetResourceLocations() {
    this._resourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLocationsInput() {
    return this._resourceLocations;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_types - computed: true, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // retain_interval - computed: true, optional: true, required: false
  private _retainInterval?: number; 
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }
  public set retainInterval(value: number) {
    this._retainInterval = value;
  }
  public resetRetainInterval() {
    this._retainInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIntervalInput() {
    return this._retainInterval;
  }

  // schedules - computed: true, optional: true, required: false
  private _schedules = new DlmLifecyclePolicyPolicyDetailsSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: DlmLifecyclePolicyPolicyDetailsSchedules[] | cdktn.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // target_tags - computed: true, optional: true, required: false
  private _targetTags = new DlmLifecyclePolicyPolicyDetailsTargetTagsList(this, "target_tags", false);
  public get targetTags() {
    return this._targetTags;
  }
  public putTargetTags(value: DlmLifecyclePolicyPolicyDetailsTargetTags[] | cdktn.IResolvable) {
    this._targetTags.internalValue = value;
  }
  public resetTargetTags() {
    this._targetTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags.internalValue;
  }
}
export interface DlmLifecyclePolicyTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key DlmLifecyclePolicy#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value DlmLifecyclePolicy#value}
  */
  readonly value?: string;
}

export function dlmLifecyclePolicyTagsToTerraform(struct?: DlmLifecyclePolicyTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dlmLifecyclePolicyTagsToHclTerraform(struct?: DlmLifecyclePolicyTags | cdktn.IResolvable): any {
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

export class DlmLifecyclePolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DlmLifecyclePolicyTags | cdktn.IResolvable | undefined) {
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

export class DlmLifecyclePolicyTagsList extends cdktn.ComplexList {
  public internalValue? : DlmLifecyclePolicyTags[] | cdktn.IResolvable

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
  public get(index: number): DlmLifecyclePolicyTagsOutputReference {
    return new DlmLifecyclePolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy}
*/
export class DlmLifecyclePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dlm_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DlmLifecyclePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlmLifecyclePolicy to import
  * @param importFromId The id of the existing DlmLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlmLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dlm_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlmLifecyclePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_dlm_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.101.0',
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
    this._copyTags = config.copyTags;
    this._createInterval = config.createInterval;
    this._crossRegionCopyTargets.internalValue = config.crossRegionCopyTargets;
    this._defaultPolicy = config.defaultPolicy;
    this._description = config.description;
    this._exclusions.internalValue = config.exclusions;
    this._executionRoleArn = config.executionRoleArn;
    this._extendDeletion = config.extendDeletion;
    this._policyDetails.internalValue = config.policyDetails;
    this._retainInterval = config.retainInterval;
    this._state = config.state;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktn.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktn.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // create_interval - computed: true, optional: true, required: false
  private _createInterval?: number; 
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }
  public set createInterval(value: number) {
    this._createInterval = value;
  }
  public resetCreateInterval() {
    this._createInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIntervalInput() {
    return this._createInterval;
  }

  // cross_region_copy_targets - computed: true, optional: true, required: false
  private _crossRegionCopyTargets = new DlmLifecyclePolicyCrossRegionCopyTargetsList(this, "cross_region_copy_targets", false);
  public get crossRegionCopyTargets() {
    return this._crossRegionCopyTargets;
  }
  public putCrossRegionCopyTargets(value: DlmLifecyclePolicyCrossRegionCopyTargets[] | cdktn.IResolvable) {
    this._crossRegionCopyTargets.internalValue = value;
  }
  public resetCrossRegionCopyTargets() {
    this._crossRegionCopyTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyTargetsInput() {
    return this._crossRegionCopyTargets.internalValue;
  }

  // default_policy - computed: true, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
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

  // exclusions - computed: true, optional: true, required: false
  private _exclusions = new DlmLifecyclePolicyExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DlmLifecyclePolicyExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // extend_deletion - computed: true, optional: true, required: false
  private _extendDeletion?: boolean | cdktn.IResolvable; 
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
  }
  public set extendDeletion(value: boolean | cdktn.IResolvable) {
    this._extendDeletion = value;
  }
  public resetExtendDeletion() {
    this._extendDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendDeletionInput() {
    return this._extendDeletion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_details - computed: true, optional: true, required: false
  private _policyDetails = new DlmLifecyclePolicyPolicyDetailsOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails) {
    this._policyDetails.internalValue = value;
  }
  public resetPolicyDetails() {
    this._policyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // retain_interval - computed: true, optional: true, required: false
  private _retainInterval?: number; 
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }
  public set retainInterval(value: number) {
    this._retainInterval = value;
  }
  public resetRetainInterval() {
    this._retainInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIntervalInput() {
    return this._retainInterval;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DlmLifecyclePolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DlmLifecyclePolicyTags[] | cdktn.IResolvable) {
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
      copy_tags: cdktn.booleanToTerraform(this._copyTags),
      create_interval: cdktn.numberToTerraform(this._createInterval),
      cross_region_copy_targets: cdktn.listMapper(dlmLifecyclePolicyCrossRegionCopyTargetsToTerraform, false)(this._crossRegionCopyTargets.internalValue),
      default_policy: cdktn.stringToTerraform(this._defaultPolicy),
      description: cdktn.stringToTerraform(this._description),
      exclusions: dlmLifecyclePolicyExclusionsToTerraform(this._exclusions.internalValue),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      extend_deletion: cdktn.booleanToTerraform(this._extendDeletion),
      policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails.internalValue),
      retain_interval: cdktn.numberToTerraform(this._retainInterval),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.listMapper(dlmLifecyclePolicyTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_tags: {
        value: cdktn.booleanToHclTerraform(this._copyTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_interval: {
        value: cdktn.numberToHclTerraform(this._createInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cross_region_copy_targets: {
        value: cdktn.listMapperHcl(dlmLifecyclePolicyCrossRegionCopyTargetsToHclTerraform, false)(this._crossRegionCopyTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlmLifecyclePolicyCrossRegionCopyTargetsList",
      },
      default_policy: {
        value: cdktn.stringToHclTerraform(this._defaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusions: {
        value: dlmLifecyclePolicyExclusionsToHclTerraform(this._exclusions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DlmLifecyclePolicyExclusions",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extend_deletion: {
        value: cdktn.booleanToHclTerraform(this._extendDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_details: {
        value: dlmLifecyclePolicyPolicyDetailsToHclTerraform(this._policyDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DlmLifecyclePolicyPolicyDetails",
      },
      retain_interval: {
        value: cdktn.numberToHclTerraform(this._retainInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(dlmLifecyclePolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlmLifecyclePolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
