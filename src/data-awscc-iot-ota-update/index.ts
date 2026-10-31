/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotOtaUpdateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update#id DataAwsccIotOtaUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct {
}

export function dataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // failure_type - computed: true, optional: false, required: false
  public get failureType() {
    return this.getStringAttribute('failure_type');
  }

  // min_number_of_executed_things - computed: true, optional: false, required: false
  public get minNumberOfExecutedThings() {
    return this.getNumberAttribute('min_number_of_executed_things');
  }

  // threshold_percentage - computed: true, optional: false, required: false
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
}

export class DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference {
    return new DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotOtaUpdateAwsJobAbortConfig {
}

export function dataAwsccIotOtaUpdateAwsJobAbortConfigToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobAbortConfigToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobAbortConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobAbortConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_criteria_list - computed: true, optional: false, required: false
  private _abortCriteriaList = new DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(this, "abort_criteria_list", false);
  public get abortCriteriaList() {
    return this._abortCriteriaList;
  }
}
export interface DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
}

export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_notified_things - computed: true, optional: false, required: false
  public get numberOfNotifiedThings() {
    return this.getNumberAttribute('number_of_notified_things');
  }

  // number_of_succeeded_things - computed: true, optional: false, required: false
  public get numberOfSucceededThings() {
    return this.getNumberAttribute('number_of_succeeded_things');
  }
}
export interface DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate {
}

export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_rate_per_minute - computed: true, optional: false, required: false
  public get baseRatePerMinute() {
    return this.getNumberAttribute('base_rate_per_minute');
  }

  // increment_factor - computed: true, optional: false, required: false
  public get incrementFactor() {
    return this.getNumberAttribute('increment_factor');
  }

  // rate_increase_criteria - computed: true, optional: false, required: false
  private _rateIncreaseCriteria = new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(this, "rate_increase_criteria");
  public get rateIncreaseCriteria() {
    return this._rateIncreaseCriteria;
  }
}
export interface DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig {
}

export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exponential_rate - computed: true, optional: false, required: false
  private _exponentialRate = new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(this, "exponential_rate");
  public get exponentialRate() {
    return this._exponentialRate;
  }

  // maximum_per_minute - computed: true, optional: false, required: false
  public get maximumPerMinute() {
    return this.getNumberAttribute('maximum_per_minute');
  }
}
export interface DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig {
}

export function dataAwsccIotOtaUpdateAwsJobPresignedUrlConfigToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobPresignedUrlConfigToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires_in_sec - computed: true, optional: false, required: false
  public get expiresInSec() {
    return this.getNumberAttribute('expires_in_sec');
  }
}
export interface DataAwsccIotOtaUpdateAwsJobTimeoutConfig {
}

export function dataAwsccIotOtaUpdateAwsJobTimeoutConfigToTerraform(struct?: DataAwsccIotOtaUpdateAwsJobTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateAwsJobTimeoutConfigToHclTerraform(struct?: DataAwsccIotOtaUpdateAwsJobTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateAwsJobTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateAwsJobTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_progress_timeout_in_minutes - computed: true, optional: false, required: false
  public get inProgressTimeoutInMinutes() {
    return this.getNumberAttribute('in_progress_timeout_in_minutes');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // inline_document - computed: true, optional: false, required: false
  public get inlineDocument() {
    return this.getStringAttribute('inline_document');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inline_document - computed: true, optional: false, required: false
  public get inlineDocument() {
    return this.getStringAttribute('inline_document');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_chain - computed: true, optional: false, required: false
  private _certificateChain = new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(this, "certificate_chain");
  public get certificateChain() {
    return this._certificateChain;
  }

  // hash_algorithm - computed: true, optional: false, required: false
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }

  // signature - computed: true, optional: false, required: false
  private _signature = new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_destination - computed: true, optional: false, required: false
  private _s3Destination = new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_path_on_device - computed: true, optional: false, required: false
  public get certificatePathOnDevice() {
    return this.getStringAttribute('certificate_path_on_device');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // signing_profile_name - computed: true, optional: false, required: false
  public get signingProfileName() {
    return this.getStringAttribute('signing_profile_name');
  }

  // signing_profile_parameter - computed: true, optional: false, required: false
  private _signingProfileParameter = new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(this, "signing_profile_parameter");
  public get signingProfileParameter() {
    return this._signingProfileParameter;
  }
}
export interface DataAwsccIotOtaUpdateFilesCodeSigning {
}

export function dataAwsccIotOtaUpdateFilesCodeSigningToTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesCodeSigningToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesCodeSigning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesCodeSigningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesCodeSigning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesCodeSigning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_signer_job_id - computed: true, optional: false, required: false
  public get awsSignerJobId() {
    return this.getStringAttribute('aws_signer_job_id');
  }

  // custom_code_signing - computed: true, optional: false, required: false
  private _customCodeSigning = new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(this, "custom_code_signing");
  public get customCodeSigning() {
    return this._customCodeSigning;
  }

  // start_signing_job_parameter - computed: true, optional: false, required: false
  private _startSigningJobParameter = new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(this, "start_signing_job_parameter");
  public get startSigningJobParameter() {
    return this._startSigningJobParameter;
  }
}
export interface DataAwsccIotOtaUpdateFilesFileLocationS3Location {
}

export function dataAwsccIotOtaUpdateFilesFileLocationS3LocationToTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocationS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesFileLocationS3LocationToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocationS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesFileLocationS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesFileLocationS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccIotOtaUpdateFilesFileLocationStream {
}

export function dataAwsccIotOtaUpdateFilesFileLocationStreamToTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocationStream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesFileLocationStreamToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocationStream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesFileLocationStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesFileLocationStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getNumberAttribute('file_id');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccIotOtaUpdateFilesFileLocation {
}

export function dataAwsccIotOtaUpdateFilesFileLocationToTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesFileLocationToHclTerraform(struct?: DataAwsccIotOtaUpdateFilesFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotOtaUpdateFilesFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFilesFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_location - computed: true, optional: false, required: false
  private _s3Location = new DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }

  // stream - computed: true, optional: false, required: false
  private _stream = new DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference(this, "stream");
  public get stream() {
    return this._stream;
  }
}
export interface DataAwsccIotOtaUpdateFiles {
}

export function dataAwsccIotOtaUpdateFilesToTerraform(struct?: DataAwsccIotOtaUpdateFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateFilesToHclTerraform(struct?: DataAwsccIotOtaUpdateFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateFilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotOtaUpdateFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // code_signing - computed: true, optional: false, required: false
  private _codeSigning = new DataAwsccIotOtaUpdateFilesCodeSigningOutputReference(this, "code_signing");
  public get codeSigning() {
    return this._codeSigning;
  }

  // file_location - computed: true, optional: false, required: false
  private _fileLocation = new DataAwsccIotOtaUpdateFilesFileLocationOutputReference(this, "file_location");
  public get fileLocation() {
    return this._fileLocation;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getNumberAttribute('file_type');
  }

  // file_version - computed: true, optional: false, required: false
  public get fileVersion() {
    return this.getStringAttribute('file_version');
  }
}

export class DataAwsccIotOtaUpdateFilesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotOtaUpdateFilesOutputReference {
    return new DataAwsccIotOtaUpdateFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotOtaUpdateTags {
}

export function dataAwsccIotOtaUpdateTagsToTerraform(struct?: DataAwsccIotOtaUpdateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotOtaUpdateTagsToHclTerraform(struct?: DataAwsccIotOtaUpdateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotOtaUpdateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotOtaUpdateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotOtaUpdateTags | undefined) {
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

export class DataAwsccIotOtaUpdateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotOtaUpdateTagsOutputReference {
    return new DataAwsccIotOtaUpdateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update awscc_iot_ota_update}
*/
export class DataAwsccIotOtaUpdate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_ota_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotOtaUpdate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotOtaUpdate to import
  * @param importFromId The id of the existing DataAwsccIotOtaUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotOtaUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_ota_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update awscc_iot_ota_update} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotOtaUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotOtaUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_ota_update',
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

  // additional_parameters - computed: true, optional: false, required: false
  private _additionalParameters = new cdktn.StringMap(this, "additional_parameters");
  public get additionalParameters() {
    return this._additionalParameters;
  }

  // aws_job_abort_config - computed: true, optional: false, required: false
  private _awsJobAbortConfig = new DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference(this, "aws_job_abort_config");
  public get awsJobAbortConfig() {
    return this._awsJobAbortConfig;
  }

  // aws_job_executions_rollout_config - computed: true, optional: false, required: false
  private _awsJobExecutionsRolloutConfig = new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(this, "aws_job_executions_rollout_config");
  public get awsJobExecutionsRolloutConfig() {
    return this._awsJobExecutionsRolloutConfig;
  }

  // aws_job_presigned_url_config - computed: true, optional: false, required: false
  private _awsJobPresignedUrlConfig = new DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference(this, "aws_job_presigned_url_config");
  public get awsJobPresignedUrlConfig() {
    return this._awsJobPresignedUrlConfig;
  }

  // aws_job_timeout_config - computed: true, optional: false, required: false
  private _awsJobTimeoutConfig = new DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference(this, "aws_job_timeout_config");
  public get awsJobTimeoutConfig() {
    return this._awsJobTimeoutConfig;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataAwsccIotOtaUpdateFilesList(this, "files", false);
  public get files() {
    return this._files;
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

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // ota_update_arn - computed: true, optional: false, required: false
  public get otaUpdateArn() {
    return this.getStringAttribute('ota_update_arn');
  }

  // ota_update_id - computed: true, optional: false, required: false
  public get otaUpdateId() {
    return this.getStringAttribute('ota_update_id');
  }

  // ota_update_status - computed: true, optional: false, required: false
  public get otaUpdateStatus() {
    return this.getStringAttribute('ota_update_status');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotOtaUpdateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_selection - computed: true, optional: false, required: false
  public get targetSelection() {
    return this.getStringAttribute('target_selection');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
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
