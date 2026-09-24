/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TranscribeCallAnalyticsCategoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * A unique name, chosen by you, for your Call Analytics category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}
  */
  readonly categoryName: string;
  /**
  * The input type associated with the specified category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}
  */
  readonly inputType?: string;
  /**
  * Rules define a Call Analytics category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}
  */
  readonly rules: TranscribeCallAnalyticsCategoryRules[] | cdktn.IResolvable;
  /**
  * Tags associated with the Call Analytics category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}
  */
  readonly tags?: TranscribeCallAnalyticsCategoryTags[] | cdktn.IResolvable;
}
export interface TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}
  */
  readonly startTime?: number;
}

export function transcribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function transcribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._first = undefined;
      this._last = undefined;
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
      this._first = value.first;
      this._last = value.last;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
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
export interface TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}
  */
  readonly endPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}
  */
  readonly startPercentage?: number;
}

export function transcribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
  }
}


export function transcribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_percentage: {
      value: cdktn.numberToHclTerraform(struct!.endPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_percentage: {
      value: cdktn.numberToHclTerraform(struct!.startPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPercentage = this._endPercentage;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPercentage = this._startPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPercentage = undefined;
      this._first = undefined;
      this._last = undefined;
      this._startPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPercentage = value.endPercentage;
      this._first = value.first;
      this._last = value.last;
      this._startPercentage = value.startPercentage;
    }
  }

  // end_percentage - computed: true, optional: true, required: false
  private _endPercentage?: number; 
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }
  public set endPercentage(value: number) {
    this._endPercentage = value;
  }
  public resetEndPercentage() {
    this._endPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPercentageInput() {
    return this._endPercentage;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_percentage - computed: true, optional: true, required: false
  private _startPercentage?: number; 
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
  public set startPercentage(value: number) {
    this._startPercentage = value;
  }
  public resetStartPercentage() {
    this._startPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPercentageInput() {
    return this._startPercentage;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesInterruptionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}
  */
  readonly absoluteTimeRange?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}
  */
  readonly participantRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}
  */
  readonly relativeTimeRange?: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}
  */
  readonly threshold?: number;
}

export function transcribeCallAnalyticsCategoryRulesInterruptionFilterToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute_time_range: transcribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToTerraform(struct!.absoluteTimeRange),
    negate: cdktn.booleanToTerraform(struct!.negate),
    participant_role: cdktn.stringToTerraform(struct!.participantRole),
    relative_time_range: transcribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function transcribeCallAnalyticsCategoryRulesInterruptionFilterToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesInterruptionFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute_time_range: {
      value: transcribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToHclTerraform(struct!.absoluteTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    participant_role: {
      value: cdktn.stringToHclTerraform(struct!.participantRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_time_range: {
      value: transcribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesInterruptionFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._participantRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.participantRole = this._participantRole;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = undefined;
      this._negate = undefined;
      this._participantRole = undefined;
      this._relativeTimeRange.internalValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
      this._negate = value.negate;
      this._participantRole = value.participantRole;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
      this._threshold = value.threshold;
    }
  }

  // absolute_time_range - computed: true, optional: true, required: false
  private _absoluteTimeRange = new TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }
  public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange) {
    this._absoluteTimeRange.internalValue = value;
  }
  public resetAbsoluteTimeRange() {
    this._absoluteTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeRangeInput() {
    return this._absoluteTimeRange.internalValue;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // participant_role - computed: true, optional: true, required: false
  private _participantRole?: string; 
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }
  public set participantRole(value: string) {
    this._participantRole = value;
  }
  public resetParticipantRole() {
    this._participantRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get participantRoleInput() {
    return this._participantRole;
  }

  // relative_time_range - computed: true, optional: true, required: false
  private _relativeTimeRange = new TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}
  */
  readonly startTime?: number;
}

export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._first = undefined;
      this._last = undefined;
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
      this._first = value.first;
      this._last = value.last;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
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
export interface TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}
  */
  readonly endPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}
  */
  readonly startPercentage?: number;
}

export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
  }
}


export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_percentage: {
      value: cdktn.numberToHclTerraform(struct!.endPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_percentage: {
      value: cdktn.numberToHclTerraform(struct!.startPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPercentage = this._endPercentage;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPercentage = this._startPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPercentage = undefined;
      this._first = undefined;
      this._last = undefined;
      this._startPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPercentage = value.endPercentage;
      this._first = value.first;
      this._last = value.last;
      this._startPercentage = value.startPercentage;
    }
  }

  // end_percentage - computed: true, optional: true, required: false
  private _endPercentage?: number; 
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }
  public set endPercentage(value: number) {
    this._endPercentage = value;
  }
  public resetEndPercentage() {
    this._endPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPercentageInput() {
    return this._endPercentage;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_percentage - computed: true, optional: true, required: false
  private _startPercentage?: number; 
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
  public set startPercentage(value: number) {
    this._startPercentage = value;
  }
  public resetStartPercentage() {
    this._startPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPercentageInput() {
    return this._startPercentage;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}
  */
  readonly absoluteTimeRange?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}
  */
  readonly relativeTimeRange?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}
  */
  readonly threshold?: number;
}

export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute_time_range: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToTerraform(struct!.absoluteTimeRange),
    negate: cdktn.booleanToTerraform(struct!.negate),
    relative_time_range: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute_time_range: {
      value: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToHclTerraform(struct!.absoluteTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relative_time_range: {
      value: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = undefined;
      this._negate = undefined;
      this._relativeTimeRange.internalValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
      this._negate = value.negate;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
      this._threshold = value.threshold;
    }
  }

  // absolute_time_range - computed: true, optional: true, required: false
  private _absoluteTimeRange = new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }
  public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange) {
    this._absoluteTimeRange.internalValue = value;
  }
  public resetAbsoluteTimeRange() {
    this._absoluteTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeRangeInput() {
    return this._absoluteTimeRange.internalValue;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // relative_time_range - computed: true, optional: true, required: false
  private _relativeTimeRange = new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}
  */
  readonly startTime?: number;
}

export function transcribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function transcribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._first = undefined;
      this._last = undefined;
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
      this._first = value.first;
      this._last = value.last;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
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
export interface TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}
  */
  readonly endPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}
  */
  readonly startPercentage?: number;
}

export function transcribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
  }
}


export function transcribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_percentage: {
      value: cdktn.numberToHclTerraform(struct!.endPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_percentage: {
      value: cdktn.numberToHclTerraform(struct!.startPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPercentage = this._endPercentage;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPercentage = this._startPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPercentage = undefined;
      this._first = undefined;
      this._last = undefined;
      this._startPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPercentage = value.endPercentage;
      this._first = value.first;
      this._last = value.last;
      this._startPercentage = value.startPercentage;
    }
  }

  // end_percentage - computed: true, optional: true, required: false
  private _endPercentage?: number; 
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }
  public set endPercentage(value: number) {
    this._endPercentage = value;
  }
  public resetEndPercentage() {
    this._endPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPercentageInput() {
    return this._endPercentage;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_percentage - computed: true, optional: true, required: false
  private _startPercentage?: number; 
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
  public set startPercentage(value: number) {
    this._startPercentage = value;
  }
  public resetStartPercentage() {
    this._startPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPercentageInput() {
    return this._startPercentage;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesSentimentFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}
  */
  readonly absoluteTimeRange?: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}
  */
  readonly participantRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}
  */
  readonly relativeTimeRange?: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}
  */
  readonly sentiments?: string[];
}

export function transcribeCallAnalyticsCategoryRulesSentimentFilterToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute_time_range: transcribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToTerraform(struct!.absoluteTimeRange),
    negate: cdktn.booleanToTerraform(struct!.negate),
    participant_role: cdktn.stringToTerraform(struct!.participantRole),
    relative_time_range: transcribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    sentiments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sentiments),
  }
}


export function transcribeCallAnalyticsCategoryRulesSentimentFilterToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesSentimentFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute_time_range: {
      value: transcribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToHclTerraform(struct!.absoluteTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    participant_role: {
      value: cdktn.stringToHclTerraform(struct!.participantRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_time_range: {
      value: transcribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange",
    },
    sentiments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sentiments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesSentimentFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._participantRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.participantRole = this._participantRole;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    if (this._sentiments !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentiments = this._sentiments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesSentimentFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = undefined;
      this._negate = undefined;
      this._participantRole = undefined;
      this._relativeTimeRange.internalValue = undefined;
      this._sentiments = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
      this._negate = value.negate;
      this._participantRole = value.participantRole;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
      this._sentiments = value.sentiments;
    }
  }

  // absolute_time_range - computed: true, optional: true, required: false
  private _absoluteTimeRange = new TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }
  public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange) {
    this._absoluteTimeRange.internalValue = value;
  }
  public resetAbsoluteTimeRange() {
    this._absoluteTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeRangeInput() {
    return this._absoluteTimeRange.internalValue;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // participant_role - computed: true, optional: true, required: false
  private _participantRole?: string; 
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }
  public set participantRole(value: string) {
    this._participantRole = value;
  }
  public resetParticipantRole() {
    this._participantRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get participantRoleInput() {
    return this._participantRole;
  }

  // relative_time_range - computed: true, optional: true, required: false
  private _relativeTimeRange = new TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }

  // sentiments - computed: true, optional: true, required: false
  private _sentiments?: string[]; 
  public get sentiments() {
    return this.getListAttribute('sentiments');
  }
  public set sentiments(value: string[]) {
    this._sentiments = value;
  }
  public resetSentiments() {
    this._sentiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentsInput() {
    return this._sentiments;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}
  */
  readonly startTime?: number;
}

export function transcribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.numberToTerraform(struct!.endTime),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function transcribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._first = undefined;
      this._last = undefined;
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
      this._first = value.first;
      this._last = value.last;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
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
export interface TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}
  */
  readonly endPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}
  */
  readonly first?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}
  */
  readonly startPercentage?: number;
}

export function transcribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
    first: cdktn.numberToTerraform(struct!.first),
    last: cdktn.numberToTerraform(struct!.last),
    start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
  }
}


export function transcribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_percentage: {
      value: cdktn.numberToHclTerraform(struct!.endPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first: {
      value: cdktn.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktn.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_percentage: {
      value: cdktn.numberToHclTerraform(struct!.startPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPercentage = this._endPercentage;
    }
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._startPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPercentage = this._startPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPercentage = undefined;
      this._first = undefined;
      this._last = undefined;
      this._startPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPercentage = value.endPercentage;
      this._first = value.first;
      this._last = value.last;
      this._startPercentage = value.startPercentage;
    }
  }

  // end_percentage - computed: true, optional: true, required: false
  private _endPercentage?: number; 
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }
  public set endPercentage(value: number) {
    this._endPercentage = value;
  }
  public resetEndPercentage() {
    this._endPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPercentageInput() {
    return this._endPercentage;
  }

  // first - computed: true, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: true, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // start_percentage - computed: true, optional: true, required: false
  private _startPercentage?: number; 
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
  public set startPercentage(value: number) {
    this._startPercentage = value;
  }
  public resetStartPercentage() {
    this._startPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPercentageInput() {
    return this._startPercentage;
  }
}
export interface TranscribeCallAnalyticsCategoryRulesTranscriptFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}
  */
  readonly absoluteTimeRange?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}
  */
  readonly negate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}
  */
  readonly participantRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}
  */
  readonly relativeTimeRange?: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}
  */
  readonly targets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}
  */
  readonly transcriptFilterType?: string;
}

export function transcribeCallAnalyticsCategoryRulesTranscriptFilterToTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute_time_range: transcribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToTerraform(struct!.absoluteTimeRange),
    negate: cdktn.booleanToTerraform(struct!.negate),
    participant_role: cdktn.stringToTerraform(struct!.participantRole),
    relative_time_range: transcribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
    targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
    transcript_filter_type: cdktn.stringToTerraform(struct!.transcriptFilterType),
  }
}


export function transcribeCallAnalyticsCategoryRulesTranscriptFilterToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRulesTranscriptFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute_time_range: {
      value: transcribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToHclTerraform(struct!.absoluteTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange",
    },
    negate: {
      value: cdktn.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    participant_role: {
      value: cdktn.stringToHclTerraform(struct!.participantRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_time_range: {
      value: transcribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange",
    },
    targets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transcript_filter_type: {
      value: cdktn.stringToHclTerraform(struct!.transcriptFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeCallAnalyticsCategoryRulesTranscriptFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._participantRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.participantRole = this._participantRole;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._transcriptFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptFilterType = this._transcriptFilterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = undefined;
      this._negate = undefined;
      this._participantRole = undefined;
      this._relativeTimeRange.internalValue = undefined;
      this._targets = undefined;
      this._transcriptFilterType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
      this._negate = value.negate;
      this._participantRole = value.participantRole;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
      this._targets = value.targets;
      this._transcriptFilterType = value.transcriptFilterType;
    }
  }

  // absolute_time_range - computed: true, optional: true, required: false
  private _absoluteTimeRange = new TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }
  public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange) {
    this._absoluteTimeRange.internalValue = value;
  }
  public resetAbsoluteTimeRange() {
    this._absoluteTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimeRangeInput() {
    return this._absoluteTimeRange.internalValue;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktn.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktn.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // participant_role - computed: true, optional: true, required: false
  private _participantRole?: string; 
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }
  public set participantRole(value: string) {
    this._participantRole = value;
  }
  public resetParticipantRole() {
    this._participantRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get participantRoleInput() {
    return this._participantRole;
  }

  // relative_time_range - computed: true, optional: true, required: false
  private _relativeTimeRange = new TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }

  // targets - computed: true, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // transcript_filter_type - computed: true, optional: true, required: false
  private _transcriptFilterType?: string; 
  public get transcriptFilterType() {
    return this.getStringAttribute('transcript_filter_type');
  }
  public set transcriptFilterType(value: string) {
    this._transcriptFilterType = value;
  }
  public resetTranscriptFilterType() {
    this._transcriptFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptFilterTypeInput() {
    return this._transcriptFilterType;
  }
}
export interface TranscribeCallAnalyticsCategoryRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}
  */
  readonly interruptionFilter?: TranscribeCallAnalyticsCategoryRulesInterruptionFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}
  */
  readonly nonTalkTimeFilter?: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}
  */
  readonly sentimentFilter?: TranscribeCallAnalyticsCategoryRulesSentimentFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}
  */
  readonly transcriptFilter?: TranscribeCallAnalyticsCategoryRulesTranscriptFilter;
}

export function transcribeCallAnalyticsCategoryRulesToTerraform(struct?: TranscribeCallAnalyticsCategoryRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interruption_filter: transcribeCallAnalyticsCategoryRulesInterruptionFilterToTerraform(struct!.interruptionFilter),
    non_talk_time_filter: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterToTerraform(struct!.nonTalkTimeFilter),
    sentiment_filter: transcribeCallAnalyticsCategoryRulesSentimentFilterToTerraform(struct!.sentimentFilter),
    transcript_filter: transcribeCallAnalyticsCategoryRulesTranscriptFilterToTerraform(struct!.transcriptFilter),
  }
}


export function transcribeCallAnalyticsCategoryRulesToHclTerraform(struct?: TranscribeCallAnalyticsCategoryRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interruption_filter: {
      value: transcribeCallAnalyticsCategoryRulesInterruptionFilterToHclTerraform(struct!.interruptionFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesInterruptionFilter",
    },
    non_talk_time_filter: {
      value: transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterToHclTerraform(struct!.nonTalkTimeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter",
    },
    sentiment_filter: {
      value: transcribeCallAnalyticsCategoryRulesSentimentFilterToHclTerraform(struct!.sentimentFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesSentimentFilter",
    },
    transcript_filter: {
      value: transcribeCallAnalyticsCategoryRulesTranscriptFilterToHclTerraform(struct!.transcriptFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "TranscribeCallAnalyticsCategoryRulesTranscriptFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeCallAnalyticsCategoryRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TranscribeCallAnalyticsCategoryRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interruptionFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptionFilter = this._interruptionFilter?.internalValue;
    }
    if (this._nonTalkTimeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonTalkTimeFilter = this._nonTalkTimeFilter?.internalValue;
    }
    if (this._sentimentFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentFilter = this._sentimentFilter?.internalValue;
    }
    if (this._transcriptFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptFilter = this._transcriptFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeCallAnalyticsCategoryRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interruptionFilter.internalValue = undefined;
      this._nonTalkTimeFilter.internalValue = undefined;
      this._sentimentFilter.internalValue = undefined;
      this._transcriptFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interruptionFilter.internalValue = value.interruptionFilter;
      this._nonTalkTimeFilter.internalValue = value.nonTalkTimeFilter;
      this._sentimentFilter.internalValue = value.sentimentFilter;
      this._transcriptFilter.internalValue = value.transcriptFilter;
    }
  }

  // interruption_filter - computed: true, optional: true, required: false
  private _interruptionFilter = new TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(this, "interruption_filter");
  public get interruptionFilter() {
    return this._interruptionFilter;
  }
  public putInterruptionFilter(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilter) {
    this._interruptionFilter.internalValue = value;
  }
  public resetInterruptionFilter() {
    this._interruptionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptionFilterInput() {
    return this._interruptionFilter.internalValue;
  }

  // non_talk_time_filter - computed: true, optional: true, required: false
  private _nonTalkTimeFilter = new TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(this, "non_talk_time_filter");
  public get nonTalkTimeFilter() {
    return this._nonTalkTimeFilter;
  }
  public putNonTalkTimeFilter(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter) {
    this._nonTalkTimeFilter.internalValue = value;
  }
  public resetNonTalkTimeFilter() {
    this._nonTalkTimeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonTalkTimeFilterInput() {
    return this._nonTalkTimeFilter.internalValue;
  }

  // sentiment_filter - computed: true, optional: true, required: false
  private _sentimentFilter = new TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(this, "sentiment_filter");
  public get sentimentFilter() {
    return this._sentimentFilter;
  }
  public putSentimentFilter(value: TranscribeCallAnalyticsCategoryRulesSentimentFilter) {
    this._sentimentFilter.internalValue = value;
  }
  public resetSentimentFilter() {
    this._sentimentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentFilterInput() {
    return this._sentimentFilter.internalValue;
  }

  // transcript_filter - computed: true, optional: true, required: false
  private _transcriptFilter = new TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(this, "transcript_filter");
  public get transcriptFilter() {
    return this._transcriptFilter;
  }
  public putTranscriptFilter(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilter) {
    this._transcriptFilter.internalValue = value;
  }
  public resetTranscriptFilter() {
    this._transcriptFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptFilterInput() {
    return this._transcriptFilter.internalValue;
  }
}

export class TranscribeCallAnalyticsCategoryRulesList extends cdktn.ComplexList {
  public internalValue? : TranscribeCallAnalyticsCategoryRules[] | cdktn.IResolvable

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
  public get(index: number): TranscribeCallAnalyticsCategoryRulesOutputReference {
    return new TranscribeCallAnalyticsCategoryRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscribeCallAnalyticsCategoryTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}
  */
  readonly value?: string;
}

export function transcribeCallAnalyticsCategoryTagsToTerraform(struct?: TranscribeCallAnalyticsCategoryTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transcribeCallAnalyticsCategoryTagsToHclTerraform(struct?: TranscribeCallAnalyticsCategoryTags | cdktn.IResolvable): any {
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

export class TranscribeCallAnalyticsCategoryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TranscribeCallAnalyticsCategoryTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TranscribeCallAnalyticsCategoryTags | cdktn.IResolvable | undefined) {
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

export class TranscribeCallAnalyticsCategoryTagsList extends cdktn.ComplexList {
  public internalValue? : TranscribeCallAnalyticsCategoryTags[] | cdktn.IResolvable

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
  public get(index: number): TranscribeCallAnalyticsCategoryTagsOutputReference {
    return new TranscribeCallAnalyticsCategoryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}
*/
export class TranscribeCallAnalyticsCategory extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transcribe_call_analytics_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import
  * @param importFromId The id of the existing TranscribeCallAnalyticsCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transcribe_call_analytics_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TranscribeCallAnalyticsCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: TranscribeCallAnalyticsCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transcribe_call_analytics_category',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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
    this._categoryName = config.categoryName;
    this._inputType = config.inputType;
    this._rules.internalValue = config.rules;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // category_name - computed: false, optional: false, required: true
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_type - computed: true, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new TranscribeCallAnalyticsCategoryRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TranscribeCallAnalyticsCategoryRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TranscribeCallAnalyticsCategoryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TranscribeCallAnalyticsCategoryTags[] | cdktn.IResolvable) {
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
      category_name: cdktn.stringToTerraform(this._categoryName),
      input_type: cdktn.stringToTerraform(this._inputType),
      rules: cdktn.listMapper(transcribeCallAnalyticsCategoryRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktn.listMapper(transcribeCallAnalyticsCategoryTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_name: {
        value: cdktn.stringToHclTerraform(this._categoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_type: {
        value: cdktn.stringToHclTerraform(this._inputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(transcribeCallAnalyticsCategoryRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TranscribeCallAnalyticsCategoryRulesList",
      },
      tags: {
        value: cdktn.listMapperHcl(transcribeCallAnalyticsCategoryTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TranscribeCallAnalyticsCategoryTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
