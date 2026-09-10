/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDlmLifecyclePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy#id DataAwsccDlmLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets {
}

export function dataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsToTerraform(struct?: DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_region - computed: true, optional: false, required: false
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
}

export class DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference {
    return new DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyExclusionsExcludeTags {
}

export function dataAwsccDlmLifecyclePolicyExclusionsExcludeTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyExclusionsExcludeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyExclusionsExcludeTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyExclusionsExcludeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyExclusionsExcludeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyExclusionsExcludeTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyExclusions {
}

export function dataAwsccDlmLifecyclePolicyExclusionsToTerraform(struct?: DataAwsccDlmLifecyclePolicyExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyExclusionsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_boot_volumes - computed: true, optional: false, required: false
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }

  // exclude_tags - computed: true, optional: false, required: false
  private _excludeTags = new DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList(this, "exclude_tags", false);
  public get excludeTags() {
    return this._excludeTags;
  }

  // exclude_volume_types - computed: true, optional: false, required: false
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmk_arn - computed: true, optional: false, required: false
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // retain_rule - computed: true, optional: false, required: false
  private _retainRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsActions {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsActionsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_region_copy - computed: true, optional: false, required: false
  private _crossRegionCopy = new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList(this, "cross_region_copy", false);
  public get crossRegionCopy() {
    return this._crossRegionCopy;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_region - computed: true, optional: false, required: false
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description_regex - computed: true, optional: false, required: false
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // snapshot_owner - computed: true, optional: false, required: false
  public get snapshotOwner() {
    return this.getListAttribute('snapshot_owner');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_boot_volumes - computed: true, optional: false, required: false
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }

  // exclude_tags - computed: true, optional: false, required: false
  private _excludeTags = new DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList(this, "exclude_tags", false);
  public get excludeTags() {
    return this._excludeTags;
  }

  // exclude_volume_types - computed: true, optional: false, required: false
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsParameters {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_boot_volume - computed: true, optional: false, required: false
  public get excludeBootVolume() {
    return this.getBooleanAttribute('exclude_boot_volume');
  }

  // exclude_data_volume_tags - computed: true, optional: false, required: false
  private _excludeDataVolumeTags = new DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList(this, "exclude_data_volume_tags", false);
  public get excludeDataVolumeTags() {
    return this._excludeDataVolumeTags;
  }

  // no_reboot - computed: true, optional: false, required: false
  public get noReboot() {
    return this.getBooleanAttribute('no_reboot');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retention_archive_tier - computed: true, optional: false, required: false
  private _retentionArchiveTier = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference(this, "retention_archive_tier");
  public get retentionArchiveTier() {
    return this._retentionArchiveTier;
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_rule - computed: true, optional: false, required: false
  private _retainRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_operation_on_script_failure - computed: true, optional: false, required: false
  public get executeOperationOnScriptFailure() {
    return this.getBooleanAttribute('execute_operation_on_script_failure');
  }

  // execution_handler - computed: true, optional: false, required: false
  public get executionHandler() {
    return this.getStringAttribute('execution_handler');
  }

  // execution_handler_service - computed: true, optional: false, required: false
  public get executionHandlerService() {
    return this.getStringAttribute('execution_handler_service');
  }

  // execution_timeout - computed: true, optional: false, required: false
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }

  // maximum_retry_count - computed: true, optional: false, required: false
  public get maximumRetryCount() {
    return this.getNumberAttribute('maximum_retry_count');
  }

  // stages - computed: true, optional: false, required: false
  public get stages() {
    return this.getListAttribute('stages');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // scripts - computed: true, optional: false, required: false
  private _scripts = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList(this, "scripts", false);
  public get scripts() {
    return this._scripts;
  }

  // times - computed: true, optional: false, required: false
  public get times() {
    return this.getListAttribute('times');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmk_arn - computed: true, optional: false, required: false
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }

  // copy_tags - computed: true, optional: false, required: false
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }

  // deprecate_rule - computed: true, optional: false, required: false
  private _deprecateRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // retain_rule - computed: true, optional: false, required: false
  private _retainRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // target_region - computed: true, optional: false, required: false
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_ids - computed: true, optional: false, required: false
  public get availabilityZoneIds() {
    return this.getListAttribute('availability_zone_ids');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_unit - computed: true, optional: false, required: false
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_accounts - computed: true, optional: false, required: false
  public get targetAccounts() {
    return this.getListAttribute('target_accounts');
  }

  // unshare_interval - computed: true, optional: false, required: false
  public get unshareInterval() {
    return this.getNumberAttribute('unshare_interval');
  }

  // unshare_interval_unit - computed: true, optional: false, required: false
  public get unshareIntervalUnit() {
    return this.getStringAttribute('unshare_interval_unit');
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd | undefined) {
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

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_rule - computed: true, optional: false, required: false
  private _archiveRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference(this, "archive_rule");
  public get archiveRule() {
    return this._archiveRule;
  }

  // copy_tags - computed: true, optional: false, required: false
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }

  // create_rule - computed: true, optional: false, required: false
  private _createRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference(this, "create_rule");
  public get createRule() {
    return this._createRule;
  }

  // cross_region_copy_rules - computed: true, optional: false, required: false
  private _crossRegionCopyRules = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList(this, "cross_region_copy_rules", false);
  public get crossRegionCopyRules() {
    return this._crossRegionCopyRules;
  }

  // deprecate_rule - computed: true, optional: false, required: false
  private _deprecateRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }

  // fast_restore_rule - computed: true, optional: false, required: false
  private _fastRestoreRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference(this, "fast_restore_rule");
  public get fastRestoreRule() {
    return this._fastRestoreRule;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retain_rule - computed: true, optional: false, required: false
  private _retainRule = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }

  // share_rules - computed: true, optional: false, required: false
  private _shareRules = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList(this, "share_rules", false);
  public get shareRules() {
    return this._shareRules;
  }

  // tags_to_add - computed: true, optional: false, required: false
  private _tagsToAdd = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList(this, "tags_to_add", false);
  public get tagsToAdd() {
    return this._tagsToAdd;
  }

  // variable_tags - computed: true, optional: false, required: false
  private _variableTags = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList(this, "variable_tags", false);
  public get variableTags() {
    return this._variableTags;
  }
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDlmLifecyclePolicyPolicyDetails {
}

export function dataAwsccDlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyPolicyDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDlmLifecyclePolicyPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // copy_tags - computed: true, optional: false, required: false
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }

  // create_interval - computed: true, optional: false, required: false
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }

  // cross_region_copy_targets - computed: true, optional: false, required: false
  private _crossRegionCopyTargets = new DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList(this, "cross_region_copy_targets", false);
  public get crossRegionCopyTargets() {
    return this._crossRegionCopyTargets;
  }

  // event_source - computed: true, optional: false, required: false
  private _eventSource = new DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(this, "event_source");
  public get eventSource() {
    return this._eventSource;
  }

  // exclusions - computed: true, optional: false, required: false
  private _exclusions = new DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }

  // extend_deletion - computed: true, optional: false, required: false
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // policy_language - computed: true, optional: false, required: false
  public get policyLanguage() {
    return this.getStringAttribute('policy_language');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // resource_locations - computed: true, optional: false, required: false
  public get resourceLocations() {
    return this.getListAttribute('resource_locations');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // retain_interval - computed: true, optional: false, required: false
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }

  // target_tags - computed: true, optional: false, required: false
  private _targetTags = new DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList(this, "target_tags", false);
  public get targetTags() {
    return this._targetTags;
  }
}
export interface DataAwsccDlmLifecyclePolicyTags {
}

export function dataAwsccDlmLifecyclePolicyTagsToTerraform(struct?: DataAwsccDlmLifecyclePolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDlmLifecyclePolicyTagsToHclTerraform(struct?: DataAwsccDlmLifecyclePolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDlmLifecyclePolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDlmLifecyclePolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDlmLifecyclePolicyTags | undefined) {
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

export class DataAwsccDlmLifecyclePolicyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDlmLifecyclePolicyTagsOutputReference {
    return new DataAwsccDlmLifecyclePolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy}
*/
export class DataAwsccDlmLifecyclePolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dlm_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDlmLifecyclePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDlmLifecyclePolicy to import
  * @param importFromId The id of the existing DataAwsccDlmLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDlmLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dlm_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDlmLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDlmLifecyclePolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // copy_tags - computed: true, optional: false, required: false
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }

  // create_interval - computed: true, optional: false, required: false
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }

  // cross_region_copy_targets - computed: true, optional: false, required: false
  private _crossRegionCopyTargets = new DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList(this, "cross_region_copy_targets", false);
  public get crossRegionCopyTargets() {
    return this._crossRegionCopyTargets;
  }

  // default_policy - computed: true, optional: false, required: false
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusions - computed: true, optional: false, required: false
  private _exclusions = new DataAwsccDlmLifecyclePolicyExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // extend_deletion - computed: true, optional: false, required: false
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
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

  // policy_details - computed: true, optional: false, required: false
  private _policyDetails = new DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // retain_interval - computed: true, optional: false, required: false
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDlmLifecyclePolicyTagsList(this, "tags", false);
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
