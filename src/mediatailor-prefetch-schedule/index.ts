/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediatailorPrefetchScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#consumption MediatailorPrefetchSchedule#consumption}
  */
  readonly consumption?: MediatailorPrefetchScheduleConsumption;
  /**
  * The name to assign to the prefetch schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#name MediatailorPrefetchSchedule#name}
  */
  readonly name: string;
  /**
  * The name of the playback configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#playback_configuration_name MediatailorPrefetchSchedule#playback_configuration_name}
  */
  readonly playbackConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#recurring_prefetch_configuration MediatailorPrefetchSchedule#recurring_prefetch_configuration}
  */
  readonly recurringPrefetchConfiguration?: MediatailorPrefetchScheduleRecurringPrefetchConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#retrieval MediatailorPrefetchSchedule#retrieval}
  */
  readonly retrieval?: MediatailorPrefetchScheduleRetrieval;
  /**
  * The frequency that MediaTailor creates prefetch schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#schedule_type MediatailorPrefetchSchedule#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#stream_id MediatailorPrefetchSchedule#stream_id}
  */
  readonly streamId?: string;
  /**
  * The tags assigned to the prefetch schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#tags MediatailorPrefetchSchedule#tags}
  */
  readonly tags?: MediatailorPrefetchScheduleTags[] | cdktn.IResolvable;
}
export interface MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria {
  /**
  * The dynamic variable(s) that MediaTailor should use as avail matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}
  */
  readonly dynamicVariable?: string;
  /**
  * For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}
  */
  readonly operator?: string;
}

export function mediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaToTerraform(struct?: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dynamic_variable: cdktn.stringToTerraform(struct!.dynamicVariable),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function mediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaToHclTerraform(struct?: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dynamic_variable: {
      value: cdktn.stringToHclTerraform(struct!.dynamicVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVariable = this._dynamicVariable;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicVariable = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicVariable = value.dynamicVariable;
      this._operator = value.operator;
    }
  }

  // dynamic_variable - computed: true, optional: true, required: false
  private _dynamicVariable?: string; 
  public get dynamicVariable() {
    return this.getStringAttribute('dynamic_variable');
  }
  public set dynamicVariable(value: string) {
    this._dynamicVariable = value;
  }
  public resetDynamicVariable() {
    this._dynamicVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVariableInput() {
    return this._dynamicVariable;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList extends cdktn.ComplexList {
  public internalValue? : MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria[] | cdktn.IResolvable

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
  public get(index: number): MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference {
    return new MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorPrefetchScheduleConsumption {
  /**
  * If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}
  */
  readonly availMatchingCriteria?: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria[] | cdktn.IResolvable;
  /**
  * The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}
  */
  readonly startTime?: string;
}

export function mediatailorPrefetchScheduleConsumptionToTerraform(struct?: MediatailorPrefetchScheduleConsumption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avail_matching_criteria: cdktn.listMapper(mediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaToTerraform, false)(struct!.availMatchingCriteria),
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function mediatailorPrefetchScheduleConsumptionToHclTerraform(struct?: MediatailorPrefetchScheduleConsumption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avail_matching_criteria: {
      value: cdktn.listMapperHcl(mediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaToHclTerraform, false)(struct!.availMatchingCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList",
    },
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleConsumptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleConsumption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availMatchingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availMatchingCriteria = this._availMatchingCriteria?.internalValue;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleConsumption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availMatchingCriteria.internalValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availMatchingCriteria.internalValue = value.availMatchingCriteria;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // avail_matching_criteria - computed: true, optional: true, required: false
  private _availMatchingCriteria = new MediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(this, "avail_matching_criteria", false);
  public get availMatchingCriteria() {
    return this._availMatchingCriteria;
  }
  public putAvailMatchingCriteria(value: MediatailorPrefetchScheduleConsumptionAvailMatchingCriteria[] | cdktn.IResolvable) {
    this._availMatchingCriteria.internalValue = value;
  }
  public resetAvailMatchingCriteria() {
    this._availMatchingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availMatchingCriteriaInput() {
    return this._availMatchingCriteria.internalValue;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria {
  /**
  * The dynamic variable(s) that MediaTailor should use as avail matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variable MediatailorPrefetchSchedule#dynamic_variable}
  */
  readonly dynamicVariable?: string;
  /**
  * For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#operator MediatailorPrefetchSchedule#operator}
  */
  readonly operator?: string;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dynamic_variable: cdktn.stringToTerraform(struct!.dynamicVariable),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dynamic_variable: {
      value: cdktn.stringToHclTerraform(struct!.dynamicVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVariable = this._dynamicVariable;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicVariable = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicVariable = value.dynamicVariable;
      this._operator = value.operator;
    }
  }

  // dynamic_variable - computed: true, optional: true, required: false
  private _dynamicVariable?: string; 
  public get dynamicVariable() {
    return this.getStringAttribute('dynamic_variable');
  }
  public set dynamicVariable(value: string) {
    this._dynamicVariable = value;
  }
  public resetDynamicVariable() {
    this._dynamicVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVariableInput() {
    return this._dynamicVariable;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList extends cdktn.ComplexList {
  public internalValue? : MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria[] | cdktn.IResolvable

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
  public get(index: number): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference {
    return new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption {
  /**
  * The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#avail_matching_criteria MediatailorPrefetchSchedule#avail_matching_criteria}
  */
  readonly availMatchingCriteria?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria[] | cdktn.IResolvable;
  /**
  * The number of seconds that an ad is available for insertion after it was prefetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#retrieved_ad_expiration_seconds MediatailorPrefetchSchedule#retrieved_ad_expiration_seconds}
  */
  readonly retrievedAdExpirationSeconds?: number;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    avail_matching_criteria: cdktn.listMapper(mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaToTerraform, false)(struct!.availMatchingCriteria),
    retrieved_ad_expiration_seconds: cdktn.numberToTerraform(struct!.retrievedAdExpirationSeconds),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    avail_matching_criteria: {
      value: cdktn.listMapperHcl(mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaToHclTerraform, false)(struct!.availMatchingCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList",
    },
    retrieved_ad_expiration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.retrievedAdExpirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availMatchingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availMatchingCriteria = this._availMatchingCriteria?.internalValue;
    }
    if (this._retrievedAdExpirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievedAdExpirationSeconds = this._retrievedAdExpirationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availMatchingCriteria.internalValue = undefined;
      this._retrievedAdExpirationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availMatchingCriteria.internalValue = value.availMatchingCriteria;
      this._retrievedAdExpirationSeconds = value.retrievedAdExpirationSeconds;
    }
  }

  // avail_matching_criteria - computed: true, optional: true, required: false
  private _availMatchingCriteria = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(this, "avail_matching_criteria", false);
  public get availMatchingCriteria() {
    return this._availMatchingCriteria;
  }
  public putAvailMatchingCriteria(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria[] | cdktn.IResolvable) {
    this._availMatchingCriteria.internalValue = value;
  }
  public resetAvailMatchingCriteria() {
    this._availMatchingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availMatchingCriteriaInput() {
    return this._availMatchingCriteria.internalValue;
  }

  // retrieved_ad_expiration_seconds - computed: true, optional: true, required: false
  private _retrievedAdExpirationSeconds?: number; 
  public get retrievedAdExpirationSeconds() {
    return this.getNumberAttribute('retrieved_ad_expiration_seconds');
  }
  public set retrievedAdExpirationSeconds(value: number) {
    this._retrievedAdExpirationSeconds = value;
  }
  public resetRetrievedAdExpirationSeconds() {
    this._retrievedAdExpirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievedAdExpirationSecondsInput() {
    return this._retrievedAdExpirationSeconds;
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow {
  /**
  * The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}
  */
  readonly retrievalWindowDurationSeconds?: number;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieval_window_duration_seconds: cdktn.numberToTerraform(struct!.retrievalWindowDurationSeconds),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieval_window_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.retrievalWindowDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrievalWindowDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalWindowDurationSeconds = this._retrievalWindowDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrievalWindowDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrievalWindowDurationSeconds = value.retrievalWindowDurationSeconds;
    }
  }

  // retrieval_window_duration_seconds - computed: true, optional: true, required: false
  private _retrievalWindowDurationSeconds?: number; 
  public get retrievalWindowDurationSeconds() {
    return this.getNumberAttribute('retrieval_window_duration_seconds');
  }
  public set retrievalWindowDurationSeconds(value: number) {
    this._retrievalWindowDurationSeconds = value;
  }
  public resetRetrievalWindowDurationSeconds() {
    this._retrievalWindowDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalWindowDurationSecondsInput() {
    return this._retrievalWindowDurationSeconds;
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration {
  /**
  * The expected peak number of concurrent viewers for your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}
  */
  readonly peakConcurrentUsers?: number;
  /**
  * The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}
  */
  readonly peakTps?: number;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    peak_concurrent_users: cdktn.numberToTerraform(struct!.peakConcurrentUsers),
    peak_tps: cdktn.numberToTerraform(struct!.peakTps),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    peak_concurrent_users: {
      value: cdktn.numberToHclTerraform(struct!.peakConcurrentUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_tps: {
      value: cdktn.numberToHclTerraform(struct!.peakTps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peakConcurrentUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConcurrentUsers = this._peakConcurrentUsers;
    }
    if (this._peakTps !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakTps = this._peakTps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peakConcurrentUsers = undefined;
      this._peakTps = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peakConcurrentUsers = value.peakConcurrentUsers;
      this._peakTps = value.peakTps;
    }
  }

  // peak_concurrent_users - computed: true, optional: true, required: false
  private _peakConcurrentUsers?: number; 
  public get peakConcurrentUsers() {
    return this.getNumberAttribute('peak_concurrent_users');
  }
  public set peakConcurrentUsers(value: number) {
    this._peakConcurrentUsers = value;
  }
  public resetPeakConcurrentUsers() {
    this._peakConcurrentUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakConcurrentUsersInput() {
    return this._peakConcurrentUsers;
  }

  // peak_tps - computed: true, optional: true, required: false
  private _peakTps?: number; 
  public get peakTps() {
    return this.getNumberAttribute('peak_tps');
  }
  public set peakTps(value: number) {
    this._peakTps = value;
  }
  public resetPeakTps() {
    this._peakTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakTpsInput() {
    return this._peakTps;
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval {
  /**
  * The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#delay_after_avail_end_seconds MediatailorPrefetchSchedule#delay_after_avail_end_seconds}
  */
  readonly delayAfterAvailEndSeconds?: number;
  /**
  * The dynamic variables to use for substitution during prefetch requests to the ADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}
  */
  readonly dynamicVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}
  */
  readonly trafficShapingRetrievalWindow?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}
  */
  readonly trafficShapingTpsConfiguration?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration;
  /**
  * Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}
  */
  readonly trafficShapingType?: string;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delay_after_avail_end_seconds: cdktn.numberToTerraform(struct!.delayAfterAvailEndSeconds),
    dynamic_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dynamicVariables),
    traffic_shaping_retrieval_window: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowToTerraform(struct!.trafficShapingRetrievalWindow),
    traffic_shaping_tps_configuration: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationToTerraform(struct!.trafficShapingTpsConfiguration),
    traffic_shaping_type: cdktn.stringToTerraform(struct!.trafficShapingType),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delay_after_avail_end_seconds: {
      value: cdktn.numberToHclTerraform(struct!.delayAfterAvailEndSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dynamicVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    traffic_shaping_retrieval_window: {
      value: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowToHclTerraform(struct!.trafficShapingRetrievalWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow",
    },
    traffic_shaping_tps_configuration: {
      value: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationToHclTerraform(struct!.trafficShapingTpsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration",
    },
    traffic_shaping_type: {
      value: cdktn.stringToHclTerraform(struct!.trafficShapingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayAfterAvailEndSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAfterAvailEndSeconds = this._delayAfterAvailEndSeconds;
    }
    if (this._dynamicVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVariables = this._dynamicVariables;
    }
    if (this._trafficShapingRetrievalWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingRetrievalWindow = this._trafficShapingRetrievalWindow?.internalValue;
    }
    if (this._trafficShapingTpsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingTpsConfiguration = this._trafficShapingTpsConfiguration?.internalValue;
    }
    if (this._trafficShapingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingType = this._trafficShapingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayAfterAvailEndSeconds = undefined;
      this._dynamicVariables = undefined;
      this._trafficShapingRetrievalWindow.internalValue = undefined;
      this._trafficShapingTpsConfiguration.internalValue = undefined;
      this._trafficShapingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayAfterAvailEndSeconds = value.delayAfterAvailEndSeconds;
      this._dynamicVariables = value.dynamicVariables;
      this._trafficShapingRetrievalWindow.internalValue = value.trafficShapingRetrievalWindow;
      this._trafficShapingTpsConfiguration.internalValue = value.trafficShapingTpsConfiguration;
      this._trafficShapingType = value.trafficShapingType;
    }
  }

  // delay_after_avail_end_seconds - computed: true, optional: true, required: false
  private _delayAfterAvailEndSeconds?: number; 
  public get delayAfterAvailEndSeconds() {
    return this.getNumberAttribute('delay_after_avail_end_seconds');
  }
  public set delayAfterAvailEndSeconds(value: number) {
    this._delayAfterAvailEndSeconds = value;
  }
  public resetDelayAfterAvailEndSeconds() {
    this._delayAfterAvailEndSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterAvailEndSecondsInput() {
    return this._delayAfterAvailEndSeconds;
  }

  // dynamic_variables - computed: true, optional: true, required: false
  private _dynamicVariables?: { [key: string]: string }; 
  public get dynamicVariables() {
    return this.getStringMapAttribute('dynamic_variables');
  }
  public set dynamicVariables(value: { [key: string]: string }) {
    this._dynamicVariables = value;
  }
  public resetDynamicVariables() {
    this._dynamicVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVariablesInput() {
    return this._dynamicVariables;
  }

  // traffic_shaping_retrieval_window - computed: true, optional: true, required: false
  private _trafficShapingRetrievalWindow = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(this, "traffic_shaping_retrieval_window");
  public get trafficShapingRetrievalWindow() {
    return this._trafficShapingRetrievalWindow;
  }
  public putTrafficShapingRetrievalWindow(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow) {
    this._trafficShapingRetrievalWindow.internalValue = value;
  }
  public resetTrafficShapingRetrievalWindow() {
    this._trafficShapingRetrievalWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingRetrievalWindowInput() {
    return this._trafficShapingRetrievalWindow.internalValue;
  }

  // traffic_shaping_tps_configuration - computed: true, optional: true, required: false
  private _trafficShapingTpsConfiguration = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(this, "traffic_shaping_tps_configuration");
  public get trafficShapingTpsConfiguration() {
    return this._trafficShapingTpsConfiguration;
  }
  public putTrafficShapingTpsConfiguration(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration) {
    this._trafficShapingTpsConfiguration.internalValue = value;
  }
  public resetTrafficShapingTpsConfiguration() {
    this._trafficShapingTpsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingTpsConfigurationInput() {
    return this._trafficShapingTpsConfiguration.internalValue;
  }

  // traffic_shaping_type - computed: true, optional: true, required: false
  private _trafficShapingType?: string; 
  public get trafficShapingType() {
    return this.getStringAttribute('traffic_shaping_type');
  }
  public set trafficShapingType(value: string) {
    this._trafficShapingType = value;
  }
  public resetTrafficShapingType() {
    this._trafficShapingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingTypeInput() {
    return this._trafficShapingType;
  }
}
export interface MediatailorPrefetchScheduleRecurringPrefetchConfiguration {
  /**
  * The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#recurring_consumption MediatailorPrefetchSchedule#recurring_consumption}
  */
  readonly recurringConsumption?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#recurring_retrieval MediatailorPrefetchSchedule#recurring_retrieval}
  */
  readonly recurringRetrieval?: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval;
  /**
  * The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}
  */
  readonly startTime?: string;
}

export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationToTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    recurring_consumption: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionToTerraform(struct!.recurringConsumption),
    recurring_retrieval: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalToTerraform(struct!.recurringRetrieval),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function mediatailorPrefetchScheduleRecurringPrefetchConfigurationToHclTerraform(struct?: MediatailorPrefetchScheduleRecurringPrefetchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurring_consumption: {
      value: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionToHclTerraform(struct!.recurringConsumption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption",
    },
    recurring_retrieval: {
      value: mediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalToHclTerraform(struct!.recurringRetrieval),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRecurringPrefetchConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurringConsumption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringConsumption = this._recurringConsumption?.internalValue;
    }
    if (this._recurringRetrieval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringRetrieval = this._recurringRetrieval?.internalValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRecurringPrefetchConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._recurringConsumption.internalValue = undefined;
      this._recurringRetrieval.internalValue = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._recurringConsumption.internalValue = value.recurringConsumption;
      this._recurringRetrieval.internalValue = value.recurringRetrieval;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // recurring_consumption - computed: true, optional: true, required: false
  private _recurringConsumption = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(this, "recurring_consumption");
  public get recurringConsumption() {
    return this._recurringConsumption;
  }
  public putRecurringConsumption(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption) {
    this._recurringConsumption.internalValue = value;
  }
  public resetRecurringConsumption() {
    this._recurringConsumption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringConsumptionInput() {
    return this._recurringConsumption.internalValue;
  }

  // recurring_retrieval - computed: true, optional: true, required: false
  private _recurringRetrieval = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(this, "recurring_retrieval");
  public get recurringRetrieval() {
    return this._recurringRetrieval;
  }
  public putRecurringRetrieval(value: MediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval) {
    this._recurringRetrieval.internalValue = value;
  }
  public resetRecurringRetrieval() {
    this._recurringRetrieval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringRetrievalInput() {
    return this._recurringRetrieval.internalValue;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow {
  /**
  * The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#retrieval_window_duration_seconds MediatailorPrefetchSchedule#retrieval_window_duration_seconds}
  */
  readonly retrievalWindowDurationSeconds?: number;
}

export function mediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowToTerraform(struct?: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieval_window_duration_seconds: cdktn.numberToTerraform(struct!.retrievalWindowDurationSeconds),
  }
}


export function mediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowToHclTerraform(struct?: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieval_window_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.retrievalWindowDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrievalWindowDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalWindowDurationSeconds = this._retrievalWindowDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrievalWindowDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrievalWindowDurationSeconds = value.retrievalWindowDurationSeconds;
    }
  }

  // retrieval_window_duration_seconds - computed: true, optional: true, required: false
  private _retrievalWindowDurationSeconds?: number; 
  public get retrievalWindowDurationSeconds() {
    return this.getNumberAttribute('retrieval_window_duration_seconds');
  }
  public set retrievalWindowDurationSeconds(value: number) {
    this._retrievalWindowDurationSeconds = value;
  }
  public resetRetrievalWindowDurationSeconds() {
    this._retrievalWindowDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalWindowDurationSecondsInput() {
    return this._retrievalWindowDurationSeconds;
  }
}
export interface MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration {
  /**
  * The expected peak number of concurrent viewers for your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#peak_concurrent_users MediatailorPrefetchSchedule#peak_concurrent_users}
  */
  readonly peakConcurrentUsers?: number;
  /**
  * The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#peak_tps MediatailorPrefetchSchedule#peak_tps}
  */
  readonly peakTps?: number;
}

export function mediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationToTerraform(struct?: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    peak_concurrent_users: cdktn.numberToTerraform(struct!.peakConcurrentUsers),
    peak_tps: cdktn.numberToTerraform(struct!.peakTps),
  }
}


export function mediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationToHclTerraform(struct?: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    peak_concurrent_users: {
      value: cdktn.numberToHclTerraform(struct!.peakConcurrentUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_tps: {
      value: cdktn.numberToHclTerraform(struct!.peakTps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peakConcurrentUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConcurrentUsers = this._peakConcurrentUsers;
    }
    if (this._peakTps !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakTps = this._peakTps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peakConcurrentUsers = undefined;
      this._peakTps = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peakConcurrentUsers = value.peakConcurrentUsers;
      this._peakTps = value.peakTps;
    }
  }

  // peak_concurrent_users - computed: true, optional: true, required: false
  private _peakConcurrentUsers?: number; 
  public get peakConcurrentUsers() {
    return this.getNumberAttribute('peak_concurrent_users');
  }
  public set peakConcurrentUsers(value: number) {
    this._peakConcurrentUsers = value;
  }
  public resetPeakConcurrentUsers() {
    this._peakConcurrentUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakConcurrentUsersInput() {
    return this._peakConcurrentUsers;
  }

  // peak_tps - computed: true, optional: true, required: false
  private _peakTps?: number; 
  public get peakTps() {
    return this.getNumberAttribute('peak_tps');
  }
  public set peakTps(value: number) {
    this._peakTps = value;
  }
  public resetPeakTps() {
    this._peakTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakTpsInput() {
    return this._peakTps;
  }
}
export interface MediatailorPrefetchScheduleRetrieval {
  /**
  * The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#dynamic_variables MediatailorPrefetchSchedule#dynamic_variables}
  */
  readonly dynamicVariables?: { [key: string]: string };
  /**
  * The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#end_time MediatailorPrefetchSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * The time when prefetch retrievals can start for this break, as an ISO 8601 date-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#start_time MediatailorPrefetchSchedule#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_retrieval_window MediatailorPrefetchSchedule#traffic_shaping_retrieval_window}
  */
  readonly trafficShapingRetrievalWindow?: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_tps_configuration MediatailorPrefetchSchedule#traffic_shaping_tps_configuration}
  */
  readonly trafficShapingTpsConfiguration?: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration;
  /**
  * Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#traffic_shaping_type MediatailorPrefetchSchedule#traffic_shaping_type}
  */
  readonly trafficShapingType?: string;
}

export function mediatailorPrefetchScheduleRetrievalToTerraform(struct?: MediatailorPrefetchScheduleRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dynamic_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dynamicVariables),
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    traffic_shaping_retrieval_window: mediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowToTerraform(struct!.trafficShapingRetrievalWindow),
    traffic_shaping_tps_configuration: mediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationToTerraform(struct!.trafficShapingTpsConfiguration),
    traffic_shaping_type: cdktn.stringToTerraform(struct!.trafficShapingType),
  }
}


export function mediatailorPrefetchScheduleRetrievalToHclTerraform(struct?: MediatailorPrefetchScheduleRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dynamic_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dynamicVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_shaping_retrieval_window: {
      value: mediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowToHclTerraform(struct!.trafficShapingRetrievalWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow",
    },
    traffic_shaping_tps_configuration: {
      value: mediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationToHclTerraform(struct!.trafficShapingTpsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration",
    },
    traffic_shaping_type: {
      value: cdktn.stringToHclTerraform(struct!.trafficShapingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorPrefetchScheduleRetrievalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorPrefetchScheduleRetrieval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVariables = this._dynamicVariables;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._trafficShapingRetrievalWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingRetrievalWindow = this._trafficShapingRetrievalWindow?.internalValue;
    }
    if (this._trafficShapingTpsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingTpsConfiguration = this._trafficShapingTpsConfiguration?.internalValue;
    }
    if (this._trafficShapingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShapingType = this._trafficShapingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorPrefetchScheduleRetrieval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicVariables = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._trafficShapingRetrievalWindow.internalValue = undefined;
      this._trafficShapingTpsConfiguration.internalValue = undefined;
      this._trafficShapingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicVariables = value.dynamicVariables;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._trafficShapingRetrievalWindow.internalValue = value.trafficShapingRetrievalWindow;
      this._trafficShapingTpsConfiguration.internalValue = value.trafficShapingTpsConfiguration;
      this._trafficShapingType = value.trafficShapingType;
    }
  }

  // dynamic_variables - computed: true, optional: true, required: false
  private _dynamicVariables?: { [key: string]: string }; 
  public get dynamicVariables() {
    return this.getStringMapAttribute('dynamic_variables');
  }
  public set dynamicVariables(value: { [key: string]: string }) {
    this._dynamicVariables = value;
  }
  public resetDynamicVariables() {
    this._dynamicVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVariablesInput() {
    return this._dynamicVariables;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // traffic_shaping_retrieval_window - computed: true, optional: true, required: false
  private _trafficShapingRetrievalWindow = new MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(this, "traffic_shaping_retrieval_window");
  public get trafficShapingRetrievalWindow() {
    return this._trafficShapingRetrievalWindow;
  }
  public putTrafficShapingRetrievalWindow(value: MediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow) {
    this._trafficShapingRetrievalWindow.internalValue = value;
  }
  public resetTrafficShapingRetrievalWindow() {
    this._trafficShapingRetrievalWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingRetrievalWindowInput() {
    return this._trafficShapingRetrievalWindow.internalValue;
  }

  // traffic_shaping_tps_configuration - computed: true, optional: true, required: false
  private _trafficShapingTpsConfiguration = new MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(this, "traffic_shaping_tps_configuration");
  public get trafficShapingTpsConfiguration() {
    return this._trafficShapingTpsConfiguration;
  }
  public putTrafficShapingTpsConfiguration(value: MediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration) {
    this._trafficShapingTpsConfiguration.internalValue = value;
  }
  public resetTrafficShapingTpsConfiguration() {
    this._trafficShapingTpsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingTpsConfigurationInput() {
    return this._trafficShapingTpsConfiguration.internalValue;
  }

  // traffic_shaping_type - computed: true, optional: true, required: false
  private _trafficShapingType?: string; 
  public get trafficShapingType() {
    return this.getStringAttribute('traffic_shaping_type');
  }
  public set trafficShapingType(value: string) {
    this._trafficShapingType = value;
  }
  public resetTrafficShapingType() {
    this._trafficShapingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingTypeInput() {
    return this._trafficShapingType;
  }
}
export interface MediatailorPrefetchScheduleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#key MediatailorPrefetchSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#value MediatailorPrefetchSchedule#value}
  */
  readonly value?: string;
}

export function mediatailorPrefetchScheduleTagsToTerraform(struct?: MediatailorPrefetchScheduleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediatailorPrefetchScheduleTagsToHclTerraform(struct?: MediatailorPrefetchScheduleTags | cdktn.IResolvable): any {
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

export class MediatailorPrefetchScheduleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorPrefetchScheduleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediatailorPrefetchScheduleTags | cdktn.IResolvable | undefined) {
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

export class MediatailorPrefetchScheduleTagsList extends cdktn.ComplexList {
  public internalValue? : MediatailorPrefetchScheduleTags[] | cdktn.IResolvable

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
  public get(index: number): MediatailorPrefetchScheduleTagsOutputReference {
    return new MediatailorPrefetchScheduleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}
*/
export class MediatailorPrefetchSchedule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_prefetch_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediatailorPrefetchSchedule to import
  * @param importFromId The id of the existing MediatailorPrefetchSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediatailorPrefetchSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_prefetch_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediatailorPrefetchScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: MediatailorPrefetchScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediatailor_prefetch_schedule',
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
    this._consumption.internalValue = config.consumption;
    this._name = config.name;
    this._playbackConfigurationName = config.playbackConfigurationName;
    this._recurringPrefetchConfiguration.internalValue = config.recurringPrefetchConfiguration;
    this._retrieval.internalValue = config.retrieval;
    this._scheduleType = config.scheduleType;
    this._streamId = config.streamId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // consumption - computed: true, optional: true, required: false
  private _consumption = new MediatailorPrefetchScheduleConsumptionOutputReference(this, "consumption");
  public get consumption() {
    return this._consumption;
  }
  public putConsumption(value: MediatailorPrefetchScheduleConsumption) {
    this._consumption.internalValue = value;
  }
  public resetConsumption() {
    this._consumption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionInput() {
    return this._consumption.internalValue;
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

  // playback_configuration_name - computed: false, optional: false, required: true
  private _playbackConfigurationName?: string; 
  public get playbackConfigurationName() {
    return this.getStringAttribute('playback_configuration_name');
  }
  public set playbackConfigurationName(value: string) {
    this._playbackConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackConfigurationNameInput() {
    return this._playbackConfigurationName;
  }

  // recurring_prefetch_configuration - computed: true, optional: true, required: false
  private _recurringPrefetchConfiguration = new MediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(this, "recurring_prefetch_configuration");
  public get recurringPrefetchConfiguration() {
    return this._recurringPrefetchConfiguration;
  }
  public putRecurringPrefetchConfiguration(value: MediatailorPrefetchScheduleRecurringPrefetchConfiguration) {
    this._recurringPrefetchConfiguration.internalValue = value;
  }
  public resetRecurringPrefetchConfiguration() {
    this._recurringPrefetchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringPrefetchConfigurationInput() {
    return this._recurringPrefetchConfiguration.internalValue;
  }

  // retrieval - computed: true, optional: true, required: false
  private _retrieval = new MediatailorPrefetchScheduleRetrievalOutputReference(this, "retrieval");
  public get retrieval() {
    return this._retrieval;
  }
  public putRetrieval(value: MediatailorPrefetchScheduleRetrieval) {
    this._retrieval.internalValue = value;
  }
  public resetRetrieval() {
    this._retrieval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalInput() {
    return this._retrieval.internalValue;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new MediatailorPrefetchScheduleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediatailorPrefetchScheduleTags[] | cdktn.IResolvable) {
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
      consumption: mediatailorPrefetchScheduleConsumptionToTerraform(this._consumption.internalValue),
      name: cdktn.stringToTerraform(this._name),
      playback_configuration_name: cdktn.stringToTerraform(this._playbackConfigurationName),
      recurring_prefetch_configuration: mediatailorPrefetchScheduleRecurringPrefetchConfigurationToTerraform(this._recurringPrefetchConfiguration.internalValue),
      retrieval: mediatailorPrefetchScheduleRetrievalToTerraform(this._retrieval.internalValue),
      schedule_type: cdktn.stringToTerraform(this._scheduleType),
      stream_id: cdktn.stringToTerraform(this._streamId),
      tags: cdktn.listMapper(mediatailorPrefetchScheduleTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumption: {
        value: mediatailorPrefetchScheduleConsumptionToHclTerraform(this._consumption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorPrefetchScheduleConsumption",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      playback_configuration_name: {
        value: cdktn.stringToHclTerraform(this._playbackConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurring_prefetch_configuration: {
        value: mediatailorPrefetchScheduleRecurringPrefetchConfigurationToHclTerraform(this._recurringPrefetchConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorPrefetchScheduleRecurringPrefetchConfiguration",
      },
      retrieval: {
        value: mediatailorPrefetchScheduleRetrievalToHclTerraform(this._retrieval.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorPrefetchScheduleRetrieval",
      },
      schedule_type: {
        value: cdktn.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktn.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediatailorPrefetchScheduleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediatailorPrefetchScheduleTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
