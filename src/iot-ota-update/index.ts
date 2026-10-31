/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotOtaUpdateConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of additional OTA update parameters, which are name-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}
  */
  readonly additionalParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}
  */
  readonly awsJobAbortConfig?: IotOtaUpdateAwsJobAbortConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}
  */
  readonly awsJobExecutionsRolloutConfig?: IotOtaUpdateAwsJobExecutionsRolloutConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}
  */
  readonly awsJobPresignedUrlConfig?: IotOtaUpdateAwsJobPresignedUrlConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}
  */
  readonly awsJobTimeoutConfig?: IotOtaUpdateAwsJobTimeoutConfig;
  /**
  * The description of the OTA update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}
  */
  readonly description?: string;
  /**
  * The files to be streamed by the OTA update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}
  */
  readonly files: IotOtaUpdateFiles[] | cdktn.IResolvable;
  /**
  * The ID of the OTA update to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}
  */
  readonly otaUpdateId: string;
  /**
  * The protocol used to transfer the OTA update image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}
  */
  readonly protocols?: string[];
  /**
  * The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Metadata which can be used to manage updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}
  */
  readonly tags?: IotOtaUpdateTags[] | cdktn.IResolvable;
  /**
  * Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}
  */
  readonly targetSelection?: string;
  /**
  * The devices targeted to receive OTA updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}
  */
  readonly targets: string[];
}
export interface IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct {
  /**
  * The type of job action to take to initiate the job abort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#action IotOtaUpdate#action}
  */
  readonly action?: string;
  /**
  * The type of job execution failures that can initiate a job abort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#failure_type IotOtaUpdate#failure_type}
  */
  readonly failureType?: string;
  /**
  * The minimum number of things which must receive job execution notifications before the job can be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#min_number_of_executed_things IotOtaUpdate#min_number_of_executed_things}
  */
  readonly minNumberOfExecutedThings?: number;
  /**
  * The minimum percentage of job execution failures that must occur to initiate the job abort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#threshold_percentage IotOtaUpdate#threshold_percentage}
  */
  readonly thresholdPercentage?: number;
}

export function iotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToTerraform(struct?: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    failure_type: cdktn.stringToTerraform(struct!.failureType),
    min_number_of_executed_things: cdktn.numberToTerraform(struct!.minNumberOfExecutedThings),
    threshold_percentage: cdktn.numberToTerraform(struct!.thresholdPercentage),
  }
}


export function iotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToHclTerraform(struct?: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_type: {
      value: cdktn.stringToHclTerraform(struct!.failureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_number_of_executed_things: {
      value: cdktn.numberToHclTerraform(struct!.minNumberOfExecutedThings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_percentage: {
      value: cdktn.numberToHclTerraform(struct!.thresholdPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._failureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureType = this._failureType;
    }
    if (this._minNumberOfExecutedThings !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumberOfExecutedThings = this._minNumberOfExecutedThings;
    }
    if (this._thresholdPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercentage = this._thresholdPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._failureType = undefined;
      this._minNumberOfExecutedThings = undefined;
      this._thresholdPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._failureType = value.failureType;
      this._minNumberOfExecutedThings = value.minNumberOfExecutedThings;
      this._thresholdPercentage = value.thresholdPercentage;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // failure_type - computed: true, optional: true, required: false
  private _failureType?: string; 
  public get failureType() {
    return this.getStringAttribute('failure_type');
  }
  public set failureType(value: string) {
    this._failureType = value;
  }
  public resetFailureType() {
    this._failureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTypeInput() {
    return this._failureType;
  }

  // min_number_of_executed_things - computed: true, optional: true, required: false
  private _minNumberOfExecutedThings?: number; 
  public get minNumberOfExecutedThings() {
    return this.getNumberAttribute('min_number_of_executed_things');
  }
  public set minNumberOfExecutedThings(value: number) {
    this._minNumberOfExecutedThings = value;
  }
  public resetMinNumberOfExecutedThings() {
    this._minNumberOfExecutedThings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfExecutedThingsInput() {
    return this._minNumberOfExecutedThings;
  }

  // threshold_percentage - computed: true, optional: true, required: false
  private _thresholdPercentage?: number; 
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
  public set thresholdPercentage(value: number) {
    this._thresholdPercentage = value;
  }
  public resetThresholdPercentage() {
    this._thresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageInput() {
    return this._thresholdPercentage;
  }
}

export class IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList extends cdktn.ComplexList {
  public internalValue? : IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[] | cdktn.IResolvable

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
  public get(index: number): IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference {
    return new IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotOtaUpdateAwsJobAbortConfig {
  /**
  * The list of criteria that determine when and how to abort the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}
  */
  readonly abortCriteriaList?: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[] | cdktn.IResolvable;
}

export function iotOtaUpdateAwsJobAbortConfigToTerraform(struct?: IotOtaUpdateAwsJobAbortConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    abort_criteria_list: cdktn.listMapper(iotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToTerraform, false)(struct!.abortCriteriaList),
  }
}


export function iotOtaUpdateAwsJobAbortConfigToHclTerraform(struct?: IotOtaUpdateAwsJobAbortConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    abort_criteria_list: {
      value: cdktn.listMapperHcl(iotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructToHclTerraform, false)(struct!.abortCriteriaList),
      isBlock: true,
      type: "list",
      storageClassType: "IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobAbortConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobAbortConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortCriteriaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortCriteriaList = this._abortCriteriaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobAbortConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortCriteriaList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortCriteriaList.internalValue = value.abortCriteriaList;
    }
  }

  // abort_criteria_list - computed: true, optional: true, required: false
  private _abortCriteriaList = new IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(this, "abort_criteria_list", false);
  public get abortCriteriaList() {
    return this._abortCriteriaList;
  }
  public putAbortCriteriaList(value: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[] | cdktn.IResolvable) {
    this._abortCriteriaList.internalValue = value;
  }
  public resetAbortCriteriaList() {
    this._abortCriteriaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortCriteriaListInput() {
    return this._abortCriteriaList.internalValue;
  }
}
export interface IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
  /**
  * When this number of things have been notified, it will initiate an increase in the rollout rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}
  */
  readonly numberOfNotifiedThings?: number;
  /**
  * When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}
  */
  readonly numberOfSucceededThings?: number;
}

export function iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_notified_things: cdktn.numberToTerraform(struct!.numberOfNotifiedThings),
    number_of_succeeded_things: cdktn.numberToTerraform(struct!.numberOfSucceededThings),
  }
}


export function iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToHclTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_notified_things: {
      value: cdktn.numberToHclTerraform(struct!.numberOfNotifiedThings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_succeeded_things: {
      value: cdktn.numberToHclTerraform(struct!.numberOfSucceededThings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfNotifiedThings !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNotifiedThings = this._numberOfNotifiedThings;
    }
    if (this._numberOfSucceededThings !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfSucceededThings = this._numberOfSucceededThings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfNotifiedThings = undefined;
      this._numberOfSucceededThings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfNotifiedThings = value.numberOfNotifiedThings;
      this._numberOfSucceededThings = value.numberOfSucceededThings;
    }
  }

  // number_of_notified_things - computed: true, optional: true, required: false
  private _numberOfNotifiedThings?: number; 
  public get numberOfNotifiedThings() {
    return this.getNumberAttribute('number_of_notified_things');
  }
  public set numberOfNotifiedThings(value: number) {
    this._numberOfNotifiedThings = value;
  }
  public resetNumberOfNotifiedThings() {
    this._numberOfNotifiedThings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNotifiedThingsInput() {
    return this._numberOfNotifiedThings;
  }

  // number_of_succeeded_things - computed: true, optional: true, required: false
  private _numberOfSucceededThings?: number; 
  public get numberOfSucceededThings() {
    return this.getNumberAttribute('number_of_succeeded_things');
  }
  public set numberOfSucceededThings(value: number) {
    this._numberOfSucceededThings = value;
  }
  public resetNumberOfSucceededThings() {
    this._numberOfSucceededThings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSucceededThingsInput() {
    return this._numberOfSucceededThings;
  }
}
export interface IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate {
  /**
  * The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}
  */
  readonly baseRatePerMinute?: number;
  /**
  * The rate of increase for a job rollout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}
  */
  readonly incrementFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}
  */
  readonly rateIncreaseCriteria?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
}

export function iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_rate_per_minute: cdktn.numberToTerraform(struct!.baseRatePerMinute),
    increment_factor: cdktn.numberToTerraform(struct!.incrementFactor),
    rate_increase_criteria: iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToTerraform(struct!.rateIncreaseCriteria),
  }
}


export function iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToHclTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_rate_per_minute: {
      value: cdktn.numberToHclTerraform(struct!.baseRatePerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    increment_factor: {
      value: cdktn.numberToHclTerraform(struct!.incrementFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_increase_criteria: {
      value: iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToHclTerraform(struct!.rateIncreaseCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseRatePerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseRatePerMinute = this._baseRatePerMinute;
    }
    if (this._incrementFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementFactor = this._incrementFactor;
    }
    if (this._rateIncreaseCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateIncreaseCriteria = this._rateIncreaseCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseRatePerMinute = undefined;
      this._incrementFactor = undefined;
      this._rateIncreaseCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseRatePerMinute = value.baseRatePerMinute;
      this._incrementFactor = value.incrementFactor;
      this._rateIncreaseCriteria.internalValue = value.rateIncreaseCriteria;
    }
  }

  // base_rate_per_minute - computed: true, optional: true, required: false
  private _baseRatePerMinute?: number; 
  public get baseRatePerMinute() {
    return this.getNumberAttribute('base_rate_per_minute');
  }
  public set baseRatePerMinute(value: number) {
    this._baseRatePerMinute = value;
  }
  public resetBaseRatePerMinute() {
    this._baseRatePerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRatePerMinuteInput() {
    return this._baseRatePerMinute;
  }

  // increment_factor - computed: true, optional: true, required: false
  private _incrementFactor?: number; 
  public get incrementFactor() {
    return this.getNumberAttribute('increment_factor');
  }
  public set incrementFactor(value: number) {
    this._incrementFactor = value;
  }
  public resetIncrementFactor() {
    this._incrementFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementFactorInput() {
    return this._incrementFactor;
  }

  // rate_increase_criteria - computed: true, optional: true, required: false
  private _rateIncreaseCriteria = new IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(this, "rate_increase_criteria");
  public get rateIncreaseCriteria() {
    return this._rateIncreaseCriteria;
  }
  public putRateIncreaseCriteria(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria) {
    this._rateIncreaseCriteria.internalValue = value;
  }
  public resetRateIncreaseCriteria() {
    this._rateIncreaseCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIncreaseCriteriaInput() {
    return this._rateIncreaseCriteria.internalValue;
  }
}
export interface IotOtaUpdateAwsJobExecutionsRolloutConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}
  */
  readonly exponentialRate?: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate;
  /**
  * The maximum number of OTA update job executions started per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}
  */
  readonly maximumPerMinute?: number;
}

export function iotOtaUpdateAwsJobExecutionsRolloutConfigToTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exponential_rate: iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToTerraform(struct!.exponentialRate),
    maximum_per_minute: cdktn.numberToTerraform(struct!.maximumPerMinute),
  }
}


export function iotOtaUpdateAwsJobExecutionsRolloutConfigToHclTerraform(struct?: IotOtaUpdateAwsJobExecutionsRolloutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exponential_rate: {
      value: iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateToHclTerraform(struct!.exponentialRate),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate",
    },
    maximum_per_minute: {
      value: cdktn.numberToHclTerraform(struct!.maximumPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobExecutionsRolloutConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exponentialRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponentialRate = this._exponentialRate?.internalValue;
    }
    if (this._maximumPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPerMinute = this._maximumPerMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobExecutionsRolloutConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exponentialRate.internalValue = undefined;
      this._maximumPerMinute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exponentialRate.internalValue = value.exponentialRate;
      this._maximumPerMinute = value.maximumPerMinute;
    }
  }

  // exponential_rate - computed: true, optional: true, required: false
  private _exponentialRate = new IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(this, "exponential_rate");
  public get exponentialRate() {
    return this._exponentialRate;
  }
  public putExponentialRate(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate) {
    this._exponentialRate.internalValue = value;
  }
  public resetExponentialRate() {
    this._exponentialRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialRateInput() {
    return this._exponentialRate.internalValue;
  }

  // maximum_per_minute - computed: true, optional: true, required: false
  private _maximumPerMinute?: number; 
  public get maximumPerMinute() {
    return this.getNumberAttribute('maximum_per_minute');
  }
  public set maximumPerMinute(value: number) {
    this._maximumPerMinute = value;
  }
  public resetMaximumPerMinute() {
    this._maximumPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPerMinuteInput() {
    return this._maximumPerMinute;
  }
}
export interface IotOtaUpdateAwsJobPresignedUrlConfig {
  /**
  * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 1800 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}
  */
  readonly expiresInSec?: number;
}

export function iotOtaUpdateAwsJobPresignedUrlConfigToTerraform(struct?: IotOtaUpdateAwsJobPresignedUrlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expires_in_sec: cdktn.numberToTerraform(struct!.expiresInSec),
  }
}


export function iotOtaUpdateAwsJobPresignedUrlConfigToHclTerraform(struct?: IotOtaUpdateAwsJobPresignedUrlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expires_in_sec: {
      value: cdktn.numberToHclTerraform(struct!.expiresInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobPresignedUrlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobPresignedUrlConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiresInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresInSec = this._expiresInSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobPresignedUrlConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiresInSec = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiresInSec = value.expiresInSec;
    }
  }

  // expires_in_sec - computed: true, optional: true, required: false
  private _expiresInSec?: number; 
  public get expiresInSec() {
    return this.getNumberAttribute('expires_in_sec');
  }
  public set expiresInSec(value: number) {
    this._expiresInSec = value;
  }
  public resetExpiresInSec() {
    this._expiresInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInSecInput() {
    return this._expiresInSec;
  }
}
export interface IotOtaUpdateAwsJobTimeoutConfig {
  /**
  * Specifies the amount of time, in minutes, this device has to finish execution of this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}
  */
  readonly inProgressTimeoutInMinutes?: number;
}

export function iotOtaUpdateAwsJobTimeoutConfigToTerraform(struct?: IotOtaUpdateAwsJobTimeoutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    in_progress_timeout_in_minutes: cdktn.numberToTerraform(struct!.inProgressTimeoutInMinutes),
  }
}


export function iotOtaUpdateAwsJobTimeoutConfigToHclTerraform(struct?: IotOtaUpdateAwsJobTimeoutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    in_progress_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.inProgressTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateAwsJobTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateAwsJobTimeoutConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inProgressTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inProgressTimeoutInMinutes = this._inProgressTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateAwsJobTimeoutConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inProgressTimeoutInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inProgressTimeoutInMinutes = value.inProgressTimeoutInMinutes;
    }
  }

  // in_progress_timeout_in_minutes - computed: true, optional: true, required: false
  private _inProgressTimeoutInMinutes?: number; 
  public get inProgressTimeoutInMinutes() {
    return this.getNumberAttribute('in_progress_timeout_in_minutes');
  }
  public set inProgressTimeoutInMinutes(value: number) {
    this._inProgressTimeoutInMinutes = value;
  }
  public resetInProgressTimeoutInMinutes() {
    this._inProgressTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgressTimeoutInMinutesInput() {
    return this._inProgressTimeoutInMinutes;
  }
}
export interface IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain {
  /**
  * The name of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * A base64 encoded binary representation of the code signing certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}
  */
  readonly inlineDocument?: string;
}

export function iotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_name: cdktn.stringToTerraform(struct!.certificateName),
    inline_document: cdktn.stringToTerraform(struct!.inlineDocument),
  }
}


export function iotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_document: {
      value: cdktn.stringToHclTerraform(struct!.inlineDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._inlineDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineDocument = this._inlineDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateName = undefined;
      this._inlineDocument = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateName = value.certificateName;
      this._inlineDocument = value.inlineDocument;
    }
  }

  // certificate_name - computed: true, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // inline_document - computed: true, optional: true, required: false
  private _inlineDocument?: string; 
  public get inlineDocument() {
    return this.getStringAttribute('inline_document');
  }
  public set inlineDocument(value: string) {
    this._inlineDocument = value;
  }
  public resetInlineDocument() {
    this._inlineDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineDocumentInput() {
    return this._inlineDocument;
  }
}
export interface IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature {
  /**
  * A base64 encoded binary representation of the code signing signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}
  */
  readonly inlineDocument?: string;
}

export function iotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_document: cdktn.stringToTerraform(struct!.inlineDocument),
  }
}


export function iotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_document: {
      value: cdktn.stringToHclTerraform(struct!.inlineDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineDocument = this._inlineDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlineDocument = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlineDocument = value.inlineDocument;
    }
  }

  // inline_document - computed: true, optional: true, required: false
  private _inlineDocument?: string; 
  public get inlineDocument() {
    return this.getStringAttribute('inline_document');
  }
  public set inlineDocument(value: string) {
    this._inlineDocument = value;
  }
  public resetInlineDocument() {
    this._inlineDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineDocumentInput() {
    return this._inlineDocument;
  }
}
export interface IotOtaUpdateFilesCodeSigningCustomCodeSigning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}
  */
  readonly certificateChain?: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain;
  /**
  * The hash algorithm used to code sign the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}
  */
  readonly signature?: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature;
  /**
  * The signature algorithm used to code sign the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function iotOtaUpdateFilesCodeSigningCustomCodeSigningToTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain: iotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToTerraform(struct!.certificateChain),
    hash_algorithm: cdktn.stringToTerraform(struct!.hashAlgorithm),
    signature: iotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToTerraform(struct!.signature),
    signature_algorithm: cdktn.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function iotOtaUpdateFilesCodeSigningCustomCodeSigningToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningCustomCodeSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain: {
      value: iotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainToHclTerraform(struct!.certificateChain),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain",
    },
    hash_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.hashAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature: {
      value: iotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureToHclTerraform(struct!.signature),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature",
    },
    signature_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningCustomCodeSigning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain?.internalValue;
    }
    if (this._hashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithm = this._hashAlgorithm;
    }
    if (this._signature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature?.internalValue;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningCustomCodeSigning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain.internalValue = undefined;
      this._hashAlgorithm = undefined;
      this._signature.internalValue = undefined;
      this._signatureAlgorithm = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain.internalValue = value.certificateChain;
      this._hashAlgorithm = value.hashAlgorithm;
      this._signature.internalValue = value.signature;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
  }

  // certificate_chain - computed: true, optional: true, required: false
  private _certificateChain = new IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(this, "certificate_chain");
  public get certificateChain() {
    return this._certificateChain;
  }
  public putCertificateChain(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain) {
    this._certificateChain.internalValue = value;
  }
  public resetCertificateChain() {
    this._certificateChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain.internalValue;
  }

  // hash_algorithm - computed: true, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // signature - computed: true, optional: true, required: false
  private _signature = new IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // signature_algorithm - computed: true, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}
export interface IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination {
  /**
  * The S3 bucket that contains the updated firmware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}
  */
  readonly bucket?: string;
  /**
  * The S3 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}
  */
  readonly prefix?: string;
}

export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}
  */
  readonly s3Destination?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination;
}

export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_destination: iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToTerraform(struct!.s3Destination),
  }
}


export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_destination: {
      value: iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationToHclTerraform(struct!.s3Destination),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // s3_destination - computed: true, optional: true, required: false
  private _s3Destination = new IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}
export interface IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter {
  /**
  * Certificate ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * The location of the code-signing certificate on your device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}
  */
  readonly certificatePathOnDevice?: string;
  /**
  * The hardware platform of your device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}
  */
  readonly platform?: string;
}

export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    certificate_path_on_device: cdktn.stringToTerraform(struct!.certificatePathOnDevice),
    platform: cdktn.stringToTerraform(struct!.platform),
  }
}


export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_path_on_device: {
      value: cdktn.stringToHclTerraform(struct!.certificatePathOnDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktn.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._certificatePathOnDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePathOnDevice = this._certificatePathOnDevice;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._certificatePathOnDevice = undefined;
      this._platform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._certificatePathOnDevice = value.certificatePathOnDevice;
      this._platform = value.platform;
    }
  }

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // certificate_path_on_device - computed: true, optional: true, required: false
  private _certificatePathOnDevice?: string; 
  public get certificatePathOnDevice() {
    return this.getStringAttribute('certificate_path_on_device');
  }
  public set certificatePathOnDevice(value: string) {
    this._certificatePathOnDevice = value;
  }
  public resetCertificatePathOnDevice() {
    this._certificatePathOnDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePathOnDeviceInput() {
    return this._certificatePathOnDevice;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}
export interface IotOtaUpdateFilesCodeSigningStartSigningJobParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}
  */
  readonly destination?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination;
  /**
  * The code-signing profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}
  */
  readonly signingProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}
  */
  readonly signingProfileParameter?: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter;
}

export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterToTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToTerraform(struct!.destination),
    signing_profile_name: cdktn.stringToTerraform(struct!.signingProfileName),
    signing_profile_parameter: iotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToTerraform(struct!.signingProfileParameter),
  }
}


export function iotOtaUpdateFilesCodeSigningStartSigningJobParameterToHclTerraform(struct?: IotOtaUpdateFilesCodeSigningStartSigningJobParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination",
    },
    signing_profile_name: {
      value: cdktn.stringToHclTerraform(struct!.signingProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_profile_parameter: {
      value: iotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterToHclTerraform(struct!.signingProfileParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigningStartSigningJobParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._signingProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingProfileName = this._signingProfileName;
    }
    if (this._signingProfileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingProfileParameter = this._signingProfileParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._signingProfileName = undefined;
      this._signingProfileParameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._signingProfileName = value.signingProfileName;
      this._signingProfileParameter.internalValue = value.signingProfileParameter;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // signing_profile_name - computed: true, optional: true, required: false
  private _signingProfileName?: string; 
  public get signingProfileName() {
    return this.getStringAttribute('signing_profile_name');
  }
  public set signingProfileName(value: string) {
    this._signingProfileName = value;
  }
  public resetSigningProfileName() {
    this._signingProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProfileNameInput() {
    return this._signingProfileName;
  }

  // signing_profile_parameter - computed: true, optional: true, required: false
  private _signingProfileParameter = new IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(this, "signing_profile_parameter");
  public get signingProfileParameter() {
    return this._signingProfileParameter;
  }
  public putSigningProfileParameter(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter) {
    this._signingProfileParameter.internalValue = value;
  }
  public resetSigningProfileParameter() {
    this._signingProfileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProfileParameterInput() {
    return this._signingProfileParameter.internalValue;
  }
}
export interface IotOtaUpdateFilesCodeSigning {
  /**
  * The ID of the AWSSignerJob which was created to sign the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}
  */
  readonly awsSignerJobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}
  */
  readonly customCodeSigning?: IotOtaUpdateFilesCodeSigningCustomCodeSigning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}
  */
  readonly startSigningJobParameter?: IotOtaUpdateFilesCodeSigningStartSigningJobParameter;
}

export function iotOtaUpdateFilesCodeSigningToTerraform(struct?: IotOtaUpdateFilesCodeSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_signer_job_id: cdktn.stringToTerraform(struct!.awsSignerJobId),
    custom_code_signing: iotOtaUpdateFilesCodeSigningCustomCodeSigningToTerraform(struct!.customCodeSigning),
    start_signing_job_parameter: iotOtaUpdateFilesCodeSigningStartSigningJobParameterToTerraform(struct!.startSigningJobParameter),
  }
}


export function iotOtaUpdateFilesCodeSigningToHclTerraform(struct?: IotOtaUpdateFilesCodeSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_signer_job_id: {
      value: cdktn.stringToHclTerraform(struct!.awsSignerJobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_code_signing: {
      value: iotOtaUpdateFilesCodeSigningCustomCodeSigningToHclTerraform(struct!.customCodeSigning),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningCustomCodeSigning",
    },
    start_signing_job_parameter: {
      value: iotOtaUpdateFilesCodeSigningStartSigningJobParameterToHclTerraform(struct!.startSigningJobParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigningStartSigningJobParameter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesCodeSigningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesCodeSigning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSignerJobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSignerJobId = this._awsSignerJobId;
    }
    if (this._customCodeSigning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCodeSigning = this._customCodeSigning?.internalValue;
    }
    if (this._startSigningJobParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSigningJobParameter = this._startSigningJobParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesCodeSigning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsSignerJobId = undefined;
      this._customCodeSigning.internalValue = undefined;
      this._startSigningJobParameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsSignerJobId = value.awsSignerJobId;
      this._customCodeSigning.internalValue = value.customCodeSigning;
      this._startSigningJobParameter.internalValue = value.startSigningJobParameter;
    }
  }

  // aws_signer_job_id - computed: true, optional: true, required: false
  private _awsSignerJobId?: string; 
  public get awsSignerJobId() {
    return this.getStringAttribute('aws_signer_job_id');
  }
  public set awsSignerJobId(value: string) {
    this._awsSignerJobId = value;
  }
  public resetAwsSignerJobId() {
    this._awsSignerJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSignerJobIdInput() {
    return this._awsSignerJobId;
  }

  // custom_code_signing - computed: true, optional: true, required: false
  private _customCodeSigning = new IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(this, "custom_code_signing");
  public get customCodeSigning() {
    return this._customCodeSigning;
  }
  public putCustomCodeSigning(value: IotOtaUpdateFilesCodeSigningCustomCodeSigning) {
    this._customCodeSigning.internalValue = value;
  }
  public resetCustomCodeSigning() {
    this._customCodeSigning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCodeSigningInput() {
    return this._customCodeSigning.internalValue;
  }

  // start_signing_job_parameter - computed: true, optional: true, required: false
  private _startSigningJobParameter = new IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(this, "start_signing_job_parameter");
  public get startSigningJobParameter() {
    return this._startSigningJobParameter;
  }
  public putStartSigningJobParameter(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameter) {
    this._startSigningJobParameter.internalValue = value;
  }
  public resetStartSigningJobParameter() {
    this._startSigningJobParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSigningJobParameterInput() {
    return this._startSigningJobParameter.internalValue;
  }
}
export interface IotOtaUpdateFilesFileLocationS3Location {
  /**
  * The S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}
  */
  readonly bucket?: string;
  /**
  * The S3 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}
  */
  readonly key?: string;
  /**
  * The S3 bucket version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}
  */
  readonly version?: string;
}

export function iotOtaUpdateFilesFileLocationS3LocationToTerraform(struct?: IotOtaUpdateFilesFileLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function iotOtaUpdateFilesFileLocationS3LocationToHclTerraform(struct?: IotOtaUpdateFilesFileLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesFileLocationS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesFileLocationS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesFileLocationS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface IotOtaUpdateFilesFileLocationStream {
  /**
  * The ID of a file associated with a stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}
  */
  readonly fileId?: number;
  /**
  * The stream ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}
  */
  readonly streamId?: string;
}

export function iotOtaUpdateFilesFileLocationStreamToTerraform(struct?: IotOtaUpdateFilesFileLocationStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_id: cdktn.numberToTerraform(struct!.fileId),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
  }
}


export function iotOtaUpdateFilesFileLocationStreamToHclTerraform(struct?: IotOtaUpdateFilesFileLocationStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_id: {
      value: cdktn.numberToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktn.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesFileLocationStreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesFileLocationStream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesFileLocationStream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._streamId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._streamId = value.streamId;
    }
  }

  // file_id - computed: true, optional: true, required: false
  private _fileId?: number; 
  public get fileId() {
    return this.getNumberAttribute('file_id');
  }
  public set fileId(value: number) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }
}
export interface IotOtaUpdateFilesFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}
  */
  readonly s3Location?: IotOtaUpdateFilesFileLocationS3Location;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}
  */
  readonly stream?: IotOtaUpdateFilesFileLocationStream;
}

export function iotOtaUpdateFilesFileLocationToTerraform(struct?: IotOtaUpdateFilesFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_location: iotOtaUpdateFilesFileLocationS3LocationToTerraform(struct!.s3Location),
    stream: iotOtaUpdateFilesFileLocationStreamToTerraform(struct!.stream),
  }
}


export function iotOtaUpdateFilesFileLocationToHclTerraform(struct?: IotOtaUpdateFilesFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_location: {
      value: iotOtaUpdateFilesFileLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesFileLocationS3Location",
    },
    stream: {
      value: iotOtaUpdateFilesFileLocationStreamToHclTerraform(struct!.stream),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesFileLocationStream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotOtaUpdateFilesFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    if (this._stream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFilesFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
      this._stream.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
      this._stream.internalValue = value.stream;
    }
  }

  // s3_location - computed: true, optional: true, required: false
  private _s3Location = new IotOtaUpdateFilesFileLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: IotOtaUpdateFilesFileLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }

  // stream - computed: true, optional: true, required: false
  private _stream = new IotOtaUpdateFilesFileLocationStreamOutputReference(this, "stream");
  public get stream() {
    return this._stream;
  }
  public putStream(value: IotOtaUpdateFilesFileLocationStream) {
    this._stream.internalValue = value;
  }
  public resetStream() {
    this._stream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream.internalValue;
  }
}
export interface IotOtaUpdateFiles {
  /**
  * A list of name-attribute pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#attributes IotOtaUpdate#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}
  */
  readonly codeSigning?: IotOtaUpdateFilesCodeSigning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}
  */
  readonly fileLocation?: IotOtaUpdateFilesFileLocation;
  /**
  * The name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_name IotOtaUpdate#file_name}
  */
  readonly fileName?: string;
  /**
  * An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_type IotOtaUpdate#file_type}
  */
  readonly fileType?: number;
  /**
  * The file version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_version IotOtaUpdate#file_version}
  */
  readonly fileVersion?: string;
}

export function iotOtaUpdateFilesToTerraform(struct?: IotOtaUpdateFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    code_signing: iotOtaUpdateFilesCodeSigningToTerraform(struct!.codeSigning),
    file_location: iotOtaUpdateFilesFileLocationToTerraform(struct!.fileLocation),
    file_name: cdktn.stringToTerraform(struct!.fileName),
    file_type: cdktn.numberToTerraform(struct!.fileType),
    file_version: cdktn.stringToTerraform(struct!.fileVersion),
  }
}


export function iotOtaUpdateFilesToHclTerraform(struct?: IotOtaUpdateFiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    code_signing: {
      value: iotOtaUpdateFilesCodeSigningToHclTerraform(struct!.codeSigning),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesCodeSigning",
    },
    file_location: {
      value: iotOtaUpdateFilesFileLocationToHclTerraform(struct!.fileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "IotOtaUpdateFilesFileLocation",
    },
    file_name: {
      value: cdktn.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktn.numberToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_version: {
      value: cdktn.stringToHclTerraform(struct!.fileVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotOtaUpdateFilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotOtaUpdateFiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._codeSigning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigning = this._codeSigning?.internalValue;
    }
    if (this._fileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLocation = this._fileLocation?.internalValue;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._fileVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileVersion = this._fileVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotOtaUpdateFiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._codeSigning.internalValue = undefined;
      this._fileLocation.internalValue = undefined;
      this._fileName = undefined;
      this._fileType = undefined;
      this._fileVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._codeSigning.internalValue = value.codeSigning;
      this._fileLocation.internalValue = value.fileLocation;
      this._fileName = value.fileName;
      this._fileType = value.fileType;
      this._fileVersion = value.fileVersion;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // code_signing - computed: true, optional: true, required: false
  private _codeSigning = new IotOtaUpdateFilesCodeSigningOutputReference(this, "code_signing");
  public get codeSigning() {
    return this._codeSigning;
  }
  public putCodeSigning(value: IotOtaUpdateFilesCodeSigning) {
    this._codeSigning.internalValue = value;
  }
  public resetCodeSigning() {
    this._codeSigning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning.internalValue;
  }

  // file_location - computed: true, optional: true, required: false
  private _fileLocation = new IotOtaUpdateFilesFileLocationOutputReference(this, "file_location");
  public get fileLocation() {
    return this._fileLocation;
  }
  public putFileLocation(value: IotOtaUpdateFilesFileLocation) {
    this._fileLocation.internalValue = value;
  }
  public resetFileLocation() {
    this._fileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLocationInput() {
    return this._fileLocation.internalValue;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: number; 
  public get fileType() {
    return this.getNumberAttribute('file_type');
  }
  public set fileType(value: number) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // file_version - computed: true, optional: true, required: false
  private _fileVersion?: string; 
  public get fileVersion() {
    return this.getStringAttribute('file_version');
  }
  public set fileVersion(value: string) {
    this._fileVersion = value;
  }
  public resetFileVersion() {
    this._fileVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileVersionInput() {
    return this._fileVersion;
  }
}

export class IotOtaUpdateFilesList extends cdktn.ComplexList {
  public internalValue? : IotOtaUpdateFiles[] | cdktn.IResolvable

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
  public get(index: number): IotOtaUpdateFilesOutputReference {
    return new IotOtaUpdateFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotOtaUpdateTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}
  */
  readonly value?: string;
}

export function iotOtaUpdateTagsToTerraform(struct?: IotOtaUpdateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotOtaUpdateTagsToHclTerraform(struct?: IotOtaUpdateTags | cdktn.IResolvable): any {
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

export class IotOtaUpdateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotOtaUpdateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotOtaUpdateTags | cdktn.IResolvable | undefined) {
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

export class IotOtaUpdateTagsList extends cdktn.ComplexList {
  public internalValue? : IotOtaUpdateTags[] | cdktn.IResolvable

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
  public get(index: number): IotOtaUpdateTagsOutputReference {
    return new IotOtaUpdateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update}
*/
export class IotOtaUpdate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_ota_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotOtaUpdate to import
  * @param importFromId The id of the existing IotOtaUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotOtaUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_ota_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotOtaUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: IotOtaUpdateConfig) {
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
    this._additionalParameters = config.additionalParameters;
    this._awsJobAbortConfig.internalValue = config.awsJobAbortConfig;
    this._awsJobExecutionsRolloutConfig.internalValue = config.awsJobExecutionsRolloutConfig;
    this._awsJobPresignedUrlConfig.internalValue = config.awsJobPresignedUrlConfig;
    this._awsJobTimeoutConfig.internalValue = config.awsJobTimeoutConfig;
    this._description = config.description;
    this._files.internalValue = config.files;
    this._otaUpdateId = config.otaUpdateId;
    this._protocols = config.protocols;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._targetSelection = config.targetSelection;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_parameters - computed: true, optional: true, required: false
  private _additionalParameters?: { [key: string]: string }; 
  public get additionalParameters() {
    return this.getStringMapAttribute('additional_parameters');
  }
  public set additionalParameters(value: { [key: string]: string }) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // aws_job_abort_config - computed: true, optional: true, required: false
  private _awsJobAbortConfig = new IotOtaUpdateAwsJobAbortConfigOutputReference(this, "aws_job_abort_config");
  public get awsJobAbortConfig() {
    return this._awsJobAbortConfig;
  }
  public putAwsJobAbortConfig(value: IotOtaUpdateAwsJobAbortConfig) {
    this._awsJobAbortConfig.internalValue = value;
  }
  public resetAwsJobAbortConfig() {
    this._awsJobAbortConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsJobAbortConfigInput() {
    return this._awsJobAbortConfig.internalValue;
  }

  // aws_job_executions_rollout_config - computed: true, optional: true, required: false
  private _awsJobExecutionsRolloutConfig = new IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(this, "aws_job_executions_rollout_config");
  public get awsJobExecutionsRolloutConfig() {
    return this._awsJobExecutionsRolloutConfig;
  }
  public putAwsJobExecutionsRolloutConfig(value: IotOtaUpdateAwsJobExecutionsRolloutConfig) {
    this._awsJobExecutionsRolloutConfig.internalValue = value;
  }
  public resetAwsJobExecutionsRolloutConfig() {
    this._awsJobExecutionsRolloutConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsJobExecutionsRolloutConfigInput() {
    return this._awsJobExecutionsRolloutConfig.internalValue;
  }

  // aws_job_presigned_url_config - computed: true, optional: true, required: false
  private _awsJobPresignedUrlConfig = new IotOtaUpdateAwsJobPresignedUrlConfigOutputReference(this, "aws_job_presigned_url_config");
  public get awsJobPresignedUrlConfig() {
    return this._awsJobPresignedUrlConfig;
  }
  public putAwsJobPresignedUrlConfig(value: IotOtaUpdateAwsJobPresignedUrlConfig) {
    this._awsJobPresignedUrlConfig.internalValue = value;
  }
  public resetAwsJobPresignedUrlConfig() {
    this._awsJobPresignedUrlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsJobPresignedUrlConfigInput() {
    return this._awsJobPresignedUrlConfig.internalValue;
  }

  // aws_job_timeout_config - computed: true, optional: true, required: false
  private _awsJobTimeoutConfig = new IotOtaUpdateAwsJobTimeoutConfigOutputReference(this, "aws_job_timeout_config");
  public get awsJobTimeoutConfig() {
    return this._awsJobTimeoutConfig;
  }
  public putAwsJobTimeoutConfig(value: IotOtaUpdateAwsJobTimeoutConfig) {
    this._awsJobTimeoutConfig.internalValue = value;
  }
  public resetAwsJobTimeoutConfig() {
    this._awsJobTimeoutConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsJobTimeoutConfigInput() {
    return this._awsJobTimeoutConfig.internalValue;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // files - computed: false, optional: false, required: true
  private _files = new IotOtaUpdateFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: IotOtaUpdateFiles[] | cdktn.IResolvable) {
    this._files.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // ota_update_arn - computed: true, optional: false, required: false
  public get otaUpdateArn() {
    return this.getStringAttribute('ota_update_arn');
  }

  // ota_update_id - computed: false, optional: false, required: true
  private _otaUpdateId?: string; 
  public get otaUpdateId() {
    return this.getStringAttribute('ota_update_id');
  }
  public set otaUpdateId(value: string) {
    this._otaUpdateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otaUpdateIdInput() {
    return this._otaUpdateId;
  }

  // ota_update_status - computed: true, optional: false, required: false
  public get otaUpdateStatus() {
    return this.getStringAttribute('ota_update_status');
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotOtaUpdateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotOtaUpdateTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_selection - computed: true, optional: true, required: false
  private _targetSelection?: string; 
  public get targetSelection() {
    return this.getStringAttribute('target_selection');
  }
  public set targetSelection(value: string) {
    this._targetSelection = value;
  }
  public resetTargetSelection() {
    this._targetSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSelectionInput() {
    return this._targetSelection;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalParameters),
      aws_job_abort_config: iotOtaUpdateAwsJobAbortConfigToTerraform(this._awsJobAbortConfig.internalValue),
      aws_job_executions_rollout_config: iotOtaUpdateAwsJobExecutionsRolloutConfigToTerraform(this._awsJobExecutionsRolloutConfig.internalValue),
      aws_job_presigned_url_config: iotOtaUpdateAwsJobPresignedUrlConfigToTerraform(this._awsJobPresignedUrlConfig.internalValue),
      aws_job_timeout_config: iotOtaUpdateAwsJobTimeoutConfigToTerraform(this._awsJobTimeoutConfig.internalValue),
      description: cdktn.stringToTerraform(this._description),
      files: cdktn.listMapper(iotOtaUpdateFilesToTerraform, false)(this._files.internalValue),
      ota_update_id: cdktn.stringToTerraform(this._otaUpdateId),
      protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protocols),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(iotOtaUpdateTagsToTerraform, false)(this._tags.internalValue),
      target_selection: cdktn.stringToTerraform(this._targetSelection),
      targets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      aws_job_abort_config: {
        value: iotOtaUpdateAwsJobAbortConfigToHclTerraform(this._awsJobAbortConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotOtaUpdateAwsJobAbortConfig",
      },
      aws_job_executions_rollout_config: {
        value: iotOtaUpdateAwsJobExecutionsRolloutConfigToHclTerraform(this._awsJobExecutionsRolloutConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotOtaUpdateAwsJobExecutionsRolloutConfig",
      },
      aws_job_presigned_url_config: {
        value: iotOtaUpdateAwsJobPresignedUrlConfigToHclTerraform(this._awsJobPresignedUrlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotOtaUpdateAwsJobPresignedUrlConfig",
      },
      aws_job_timeout_config: {
        value: iotOtaUpdateAwsJobTimeoutConfigToHclTerraform(this._awsJobTimeoutConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotOtaUpdateAwsJobTimeoutConfig",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files: {
        value: cdktn.listMapperHcl(iotOtaUpdateFilesToHclTerraform, false)(this._files.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotOtaUpdateFilesList",
      },
      ota_update_id: {
        value: cdktn.stringToHclTerraform(this._otaUpdateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotOtaUpdateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotOtaUpdateTagsList",
      },
      target_selection: {
        value: cdktn.stringToHclTerraform(this._targetSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
