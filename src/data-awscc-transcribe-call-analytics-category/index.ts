/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTranscribeCallAnalyticsCategoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#id DataAwsccTranscribeCallAnalyticsCategory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_percentage - computed: true, optional: false, required: false
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_percentage - computed: true, optional: false, required: false
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_time_range - computed: true, optional: false, required: false
  private _absoluteTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // participant_role - computed: true, optional: false, required: false
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }

  // relative_time_range - computed: true, optional: false, required: false
  private _relativeTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_percentage - computed: true, optional: false, required: false
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_percentage - computed: true, optional: false, required: false
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_time_range - computed: true, optional: false, required: false
  private _absoluteTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // relative_time_range - computed: true, optional: false, required: false
  private _relativeTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_percentage - computed: true, optional: false, required: false
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_percentage - computed: true, optional: false, required: false
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_time_range - computed: true, optional: false, required: false
  private _absoluteTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // participant_role - computed: true, optional: false, required: false
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }

  // relative_time_range - computed: true, optional: false, required: false
  private _relativeTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }

  // sentiments - computed: true, optional: false, required: false
  public get sentiments() {
    return this.getListAttribute('sentiments');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_percentage - computed: true, optional: false, required: false
  public get endPercentage() {
    return this.getNumberAttribute('end_percentage');
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getNumberAttribute('first');
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // start_percentage - computed: true, optional: false, required: false
  public get startPercentage() {
    return this.getNumberAttribute('start_percentage');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_time_range - computed: true, optional: false, required: false
  private _absoluteTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(this, "absolute_time_range");
  public get absoluteTimeRange() {
    return this._absoluteTimeRange;
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // participant_role - computed: true, optional: false, required: false
  public get participantRole() {
    return this.getStringAttribute('participant_role');
  }

  // relative_time_range - computed: true, optional: false, required: false
  private _relativeTimeRange = new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }

  // transcript_filter_type - computed: true, optional: false, required: false
  public get transcriptFilterType() {
    return this.getStringAttribute('transcript_filter_type');
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryRules {
}

export function dataAwsccTranscribeCallAnalyticsCategoryRulesToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryRulesToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interruption_filter - computed: true, optional: false, required: false
  private _interruptionFilter = new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(this, "interruption_filter");
  public get interruptionFilter() {
    return this._interruptionFilter;
  }

  // non_talk_time_filter - computed: true, optional: false, required: false
  private _nonTalkTimeFilter = new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(this, "non_talk_time_filter");
  public get nonTalkTimeFilter() {
    return this._nonTalkTimeFilter;
  }

  // sentiment_filter - computed: true, optional: false, required: false
  private _sentimentFilter = new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(this, "sentiment_filter");
  public get sentimentFilter() {
    return this._sentimentFilter;
  }

  // transcript_filter - computed: true, optional: false, required: false
  private _transcriptFilter = new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(this, "transcript_filter");
  public get transcriptFilter() {
    return this._transcriptFilter;
  }
}

export class DataAwsccTranscribeCallAnalyticsCategoryRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference {
    return new DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTranscribeCallAnalyticsCategoryTags {
}

export function dataAwsccTranscribeCallAnalyticsCategoryTagsToTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTranscribeCallAnalyticsCategoryTagsToHclTerraform(struct?: DataAwsccTranscribeCallAnalyticsCategoryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTranscribeCallAnalyticsCategoryTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTranscribeCallAnalyticsCategoryTags | undefined) {
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

export class DataAwsccTranscribeCallAnalyticsCategoryTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference {
    return new DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}
*/
export class DataAwsccTranscribeCallAnalyticsCategory extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transcribe_call_analytics_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTranscribeCallAnalyticsCategory to import
  * @param importFromId The id of the existing DataAwsccTranscribeCallAnalyticsCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTranscribeCallAnalyticsCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transcribe_call_analytics_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTranscribeCallAnalyticsCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTranscribeCallAnalyticsCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transcribe_call_analytics_category',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.102.0',
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

  // category_name - computed: true, optional: false, required: false
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // input_type - computed: true, optional: false, required: false
  public get inputType() {
    return this.getStringAttribute('input_type');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccTranscribeCallAnalyticsCategoryRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTranscribeCallAnalyticsCategoryTagsList(this, "tags", false);
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
