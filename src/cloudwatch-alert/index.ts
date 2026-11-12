/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchAlertConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}
  */
  readonly description?: string;
  /**
  * The display name of the alert. Names don't need to be unique within a space; the alert is identified by AlertId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}
  */
  readonly name: string;
  /**
  * The notification rules that determine when and where notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}
  */
  readonly notificationRules?: CloudwatchAlertNotificationRules[] | cdktn.IResolvable;
  /**
  * Whether the alert sends notifications. When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}
  */
  readonly notificationsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The ID of the access profile the alert uses to run its query and send notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}
  */
  readonly profileId: string;
  /**
  * The rule that defines how the alert is evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}
  */
  readonly rule: CloudwatchAlertRule;
  /**
  * The ID of the space to create the alert in. Changing this value replaces the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}
  */
  readonly spaceId: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}
  */
  readonly tags?: CloudwatchAlertTags[] | cdktn.IResolvable;
}
export interface CloudwatchAlertNotificationRulesTarget {
  /**
  * The ARN of the target. For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}
  */
  readonly arn?: string;
  /**
  * Settings specific to the target, as key-value pairs (up to 20). The keys depend on the integration type. Not used for sns targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The target type. Valid values: sns, slack, pagerduty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}
  */
  readonly type?: string;
}

export function cloudwatchAlertNotificationRulesTargetToTerraform(struct?: CloudwatchAlertNotificationRulesTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cloudwatchAlertNotificationRulesTargetToHclTerraform(struct?: CloudwatchAlertNotificationRulesTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class CloudwatchAlertNotificationRulesTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertNotificationRulesTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertNotificationRulesTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._metadata = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._metadata = value.metadata;
      this._type = value.type;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
export interface CloudwatchAlertNotificationRulesTrigger {
  /**
  * The alert states that trigger this rule. A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}
  */
  readonly stateValues?: string[];
}

export function cloudwatchAlertNotificationRulesTriggerToTerraform(struct?: CloudwatchAlertNotificationRulesTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stateValues),
  }
}


export function cloudwatchAlertNotificationRulesTriggerToHclTerraform(struct?: CloudwatchAlertNotificationRulesTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stateValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertNotificationRulesTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertNotificationRulesTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValues = this._stateValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertNotificationRulesTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stateValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stateValues = value.stateValues;
    }
  }

  // state_values - computed: true, optional: true, required: false
  private _stateValues?: string[]; 
  public get stateValues() {
    return this.getListAttribute('state_values');
  }
  public set stateValues(value: string[]) {
    this._stateValues = value;
  }
  public resetStateValues() {
    this._stateValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValuesInput() {
    return this._stateValues;
  }
}
export interface CloudwatchAlertNotificationRules {
  /**
  * Where the notification is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#target CloudwatchAlert#target}
  */
  readonly target?: CloudwatchAlertNotificationRulesTarget;
  /**
  * The alert states that trigger the notification rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#trigger CloudwatchAlert#trigger}
  */
  readonly trigger?: CloudwatchAlertNotificationRulesTrigger;
}

export function cloudwatchAlertNotificationRulesToTerraform(struct?: CloudwatchAlertNotificationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cloudwatchAlertNotificationRulesTargetToTerraform(struct!.target),
    trigger: cloudwatchAlertNotificationRulesTriggerToTerraform(struct!.trigger),
  }
}


export function cloudwatchAlertNotificationRulesToHclTerraform(struct?: CloudwatchAlertNotificationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cloudwatchAlertNotificationRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertNotificationRulesTarget",
    },
    trigger: {
      value: cloudwatchAlertNotificationRulesTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertNotificationRulesTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertNotificationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlertNotificationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertNotificationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target.internalValue = value.target;
      this._trigger.internalValue = value.trigger;
    }
  }

  // target - computed: true, optional: true, required: false
  private _target = new CloudwatchAlertNotificationRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CloudwatchAlertNotificationRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger = new CloudwatchAlertNotificationRulesTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: CloudwatchAlertNotificationRulesTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class CloudwatchAlertNotificationRulesList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlertNotificationRules[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlertNotificationRulesOutputReference {
    return new CloudwatchAlertNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlertRuleTelemetryRuleCondition {
  /**
  * The comparison operator. Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}
  */
  readonly comparator?: string;
  /**
  * The value at which the alert enters the CRITICAL state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}
  */
  readonly criticalThreshold?: number;
  /**
  * The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}
  */
  readonly thresholdField?: string;
  /**
  * How the threshold is applied. COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}
  */
  readonly thresholdMode?: string;
  /**
  * The value at which the alert enters the WARNING state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}
  */
  readonly warningThreshold?: number;
}

export function cloudwatchAlertRuleTelemetryRuleConditionToTerraform(struct?: CloudwatchAlertRuleTelemetryRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    critical_threshold: cdktn.numberToTerraform(struct!.criticalThreshold),
    threshold_field: cdktn.stringToTerraform(struct!.thresholdField),
    threshold_mode: cdktn.stringToTerraform(struct!.thresholdMode),
    warning_threshold: cdktn.numberToTerraform(struct!.warningThreshold),
  }
}


export function cloudwatchAlertRuleTelemetryRuleConditionToHclTerraform(struct?: CloudwatchAlertRuleTelemetryRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_threshold: {
      value: cdktn.numberToHclTerraform(struct!.criticalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_field: {
      value: cdktn.stringToHclTerraform(struct!.thresholdField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_mode: {
      value: cdktn.stringToHclTerraform(struct!.thresholdMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_threshold: {
      value: cdktn.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleTelemetryRuleConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRuleTelemetryRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._criticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalThreshold = this._criticalThreshold;
    }
    if (this._thresholdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdField = this._thresholdField;
    }
    if (this._thresholdMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdMode = this._thresholdMode;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRuleTelemetryRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._criticalThreshold = undefined;
      this._thresholdField = undefined;
      this._thresholdMode = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._criticalThreshold = value.criticalThreshold;
      this._thresholdField = value.thresholdField;
      this._thresholdMode = value.thresholdMode;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // critical_threshold - computed: true, optional: true, required: false
  private _criticalThreshold?: number; 
  public get criticalThreshold() {
    return this.getNumberAttribute('critical_threshold');
  }
  public set criticalThreshold(value: number) {
    this._criticalThreshold = value;
  }
  public resetCriticalThreshold() {
    this._criticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalThresholdInput() {
    return this._criticalThreshold;
  }

  // threshold_field - computed: true, optional: true, required: false
  private _thresholdField?: string; 
  public get thresholdField() {
    return this.getStringAttribute('threshold_field');
  }
  public set thresholdField(value: string) {
    this._thresholdField = value;
  }
  public resetThresholdField() {
    this._thresholdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdFieldInput() {
    return this._thresholdField;
  }

  // threshold_mode - computed: true, optional: true, required: false
  private _thresholdMode?: string; 
  public get thresholdMode() {
    return this.getStringAttribute('threshold_mode');
  }
  public set thresholdMode(value: string) {
    this._thresholdMode = value;
  }
  public resetThresholdMode() {
    this._thresholdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdModeInput() {
    return this._thresholdMode;
  }

  // warning_threshold - computed: true, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}
export interface CloudwatchAlertRuleTelemetryRuleEvaluation {
  /**
  * The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * How long a threshold breach must last before the alert changes state, in seconds. Must be a multiple of IntervalSeconds. 0 changes state immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}
  */
  readonly pendingDurationSeconds?: number;
  /**
  * How long the result must stay within its thresholds before the alert returns to OK, in seconds. Must be a multiple of IntervalSeconds. 0 returns to OK immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}
  */
  readonly recoveryDurationSeconds?: number;
}

export function cloudwatchAlertRuleTelemetryRuleEvaluationToTerraform(struct?: CloudwatchAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    pending_duration_seconds: cdktn.numberToTerraform(struct!.pendingDurationSeconds),
    recovery_duration_seconds: cdktn.numberToTerraform(struct!.recoveryDurationSeconds),
  }
}


export function cloudwatchAlertRuleTelemetryRuleEvaluationToHclTerraform(struct?: CloudwatchAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.pendingDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._pendingDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDurationSeconds = this._pendingDurationSeconds;
    }
    if (this._recoveryDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryDurationSeconds = this._recoveryDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intervalSeconds = undefined;
      this._pendingDurationSeconds = undefined;
      this._recoveryDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intervalSeconds = value.intervalSeconds;
      this._pendingDurationSeconds = value.pendingDurationSeconds;
      this._recoveryDurationSeconds = value.recoveryDurationSeconds;
    }
  }

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // pending_duration_seconds - computed: true, optional: true, required: false
  private _pendingDurationSeconds?: number; 
  public get pendingDurationSeconds() {
    return this.getNumberAttribute('pending_duration_seconds');
  }
  public set pendingDurationSeconds(value: number) {
    this._pendingDurationSeconds = value;
  }
  public resetPendingDurationSeconds() {
    this._pendingDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationSecondsInput() {
    return this._pendingDurationSeconds;
  }

  // recovery_duration_seconds - computed: true, optional: true, required: false
  private _recoveryDurationSeconds?: number; 
  public get recoveryDurationSeconds() {
    return this.getNumberAttribute('recovery_duration_seconds');
  }
  public set recoveryDurationSeconds(value: number) {
    this._recoveryDurationSeconds = value;
  }
  public resetRecoveryDurationSeconds() {
    this._recoveryDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDurationSecondsInput() {
    return this._recoveryDurationSeconds;
  }
}
export interface CloudwatchAlertRuleTelemetryRuleNoData {
  /**
  * The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}
  */
  readonly treatAs?: string;
}

export function cloudwatchAlertRuleTelemetryRuleNoDataToTerraform(struct?: CloudwatchAlertRuleTelemetryRuleNoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    treat_as: cdktn.stringToTerraform(struct!.treatAs),
  }
}


export function cloudwatchAlertRuleTelemetryRuleNoDataToHclTerraform(struct?: CloudwatchAlertRuleTelemetryRuleNoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    treat_as: {
      value: cdktn.stringToHclTerraform(struct!.treatAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleTelemetryRuleNoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRuleTelemetryRuleNoData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._treatAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatAs = this._treatAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRuleTelemetryRuleNoData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._treatAs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._treatAs = value.treatAs;
    }
  }

  // treat_as - computed: true, optional: true, required: false
  private _treatAs?: string; 
  public get treatAs() {
    return this.getStringAttribute('treat_as');
  }
  public set treatAs(value: string) {
    this._treatAs = value;
  }
  public resetTreatAs() {
    this._treatAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatAsInput() {
    return this._treatAs;
  }
}
export interface CloudwatchAlertRuleTelemetryRuleQuery {
  /**
  * The query expression. For PromQL, the series value is returned in a field named value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}
  */
  readonly expression: string;
  /**
  * The query language. Valid values: SQL, PROMQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}
  */
  readonly language: string;
}

export function cloudwatchAlertRuleTelemetryRuleQueryToTerraform(struct?: CloudwatchAlertRuleTelemetryRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    language: cdktn.stringToTerraform(struct!.language),
  }
}


export function cloudwatchAlertRuleTelemetryRuleQueryToHclTerraform(struct?: CloudwatchAlertRuleTelemetryRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleTelemetryRuleQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRuleTelemetryRuleQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRuleTelemetryRuleQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._language = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._language = value.language;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface CloudwatchAlertRuleTelemetryRule {
  /**
  * The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}
  */
  readonly condition: CloudwatchAlertRuleTelemetryRuleCondition;
  /**
  * How often the alert is evaluated, and how long a change must last before the state changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}
  */
  readonly evaluation: CloudwatchAlertRuleTelemetryRuleEvaluation;
  /**
  * How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}
  */
  readonly noData?: CloudwatchAlertRuleTelemetryRuleNoData;
  /**
  * The query the alert runs, and the language it is written in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}
  */
  readonly query: CloudwatchAlertRuleTelemetryRuleQuery;
}

export function cloudwatchAlertRuleTelemetryRuleToTerraform(struct?: CloudwatchAlertRuleTelemetryRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cloudwatchAlertRuleTelemetryRuleConditionToTerraform(struct!.condition),
    evaluation: cloudwatchAlertRuleTelemetryRuleEvaluationToTerraform(struct!.evaluation),
    no_data: cloudwatchAlertRuleTelemetryRuleNoDataToTerraform(struct!.noData),
    query: cloudwatchAlertRuleTelemetryRuleQueryToTerraform(struct!.query),
  }
}


export function cloudwatchAlertRuleTelemetryRuleToHclTerraform(struct?: CloudwatchAlertRuleTelemetryRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cloudwatchAlertRuleTelemetryRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertRuleTelemetryRuleCondition",
    },
    evaluation: {
      value: cloudwatchAlertRuleTelemetryRuleEvaluationToHclTerraform(struct!.evaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertRuleTelemetryRuleEvaluation",
    },
    no_data: {
      value: cloudwatchAlertRuleTelemetryRuleNoDataToHclTerraform(struct!.noData),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertRuleTelemetryRuleNoData",
    },
    query: {
      value: cloudwatchAlertRuleTelemetryRuleQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertRuleTelemetryRuleQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleTelemetryRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRuleTelemetryRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._evaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluation = this._evaluation?.internalValue;
    }
    if (this._noData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noData = this._noData?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRuleTelemetryRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._evaluation.internalValue = undefined;
      this._noData.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._evaluation.internalValue = value.evaluation;
      this._noData.internalValue = value.noData;
      this._query.internalValue = value.query;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new CloudwatchAlertRuleTelemetryRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CloudwatchAlertRuleTelemetryRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // evaluation - computed: false, optional: false, required: true
  private _evaluation = new CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(this, "evaluation");
  public get evaluation() {
    return this._evaluation;
  }
  public putEvaluation(value: CloudwatchAlertRuleTelemetryRuleEvaluation) {
    this._evaluation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationInput() {
    return this._evaluation.internalValue;
  }

  // no_data - computed: true, optional: true, required: false
  private _noData = new CloudwatchAlertRuleTelemetryRuleNoDataOutputReference(this, "no_data");
  public get noData() {
    return this._noData;
  }
  public putNoData(value: CloudwatchAlertRuleTelemetryRuleNoData) {
    this._noData.internalValue = value;
  }
  public resetNoData() {
    this._noData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataInput() {
    return this._noData.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new CloudwatchAlertRuleTelemetryRuleQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: CloudwatchAlertRuleTelemetryRuleQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface CloudwatchAlertRule {
  /**
  * A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}
  */
  readonly telemetryRule: CloudwatchAlertRuleTelemetryRule;
}

export function cloudwatchAlertRuleToTerraform(struct?: CloudwatchAlertRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    telemetry_rule: cloudwatchAlertRuleTelemetryRuleToTerraform(struct!.telemetryRule),
  }
}


export function cloudwatchAlertRuleToHclTerraform(struct?: CloudwatchAlertRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    telemetry_rule: {
      value: cloudwatchAlertRuleTelemetryRuleToHclTerraform(struct!.telemetryRule),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlertRuleTelemetryRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlertRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlertRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._telemetryRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryRule = this._telemetryRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlertRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._telemetryRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._telemetryRule.internalValue = value.telemetryRule;
    }
  }

  // telemetry_rule - computed: false, optional: false, required: true
  private _telemetryRule = new CloudwatchAlertRuleTelemetryRuleOutputReference(this, "telemetry_rule");
  public get telemetryRule() {
    return this._telemetryRule;
  }
  public putTelemetryRule(value: CloudwatchAlertRuleTelemetryRule) {
    this._telemetryRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryRuleInput() {
    return this._telemetryRule.internalValue;
  }
}
export interface CloudwatchAlertTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#key CloudwatchAlert#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#value CloudwatchAlert#value}
  */
  readonly value?: string;
}

export function cloudwatchAlertTagsToTerraform(struct?: CloudwatchAlertTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchAlertTagsToHclTerraform(struct?: CloudwatchAlertTags | cdktn.IResolvable): any {
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

export class CloudwatchAlertTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlertTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlertTags | cdktn.IResolvable | undefined) {
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

export class CloudwatchAlertTagsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlertTags[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlertTagsOutputReference {
    return new CloudwatchAlertTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert}
*/
export class CloudwatchAlert extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchAlert to import
  * @param importFromId The id of the existing CloudwatchAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchAlertConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_alert',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
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
    this._description = config.description;
    this._name = config.name;
    this._notificationRules.internalValue = config.notificationRules;
    this._notificationsEnabled = config.notificationsEnabled;
    this._profileId = config.profileId;
    this._rule.internalValue = config.rule;
    this._spaceId = config.spaceId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // alert_id - computed: true, optional: false, required: false
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // notification_rules - computed: true, optional: true, required: false
  private _notificationRules = new CloudwatchAlertNotificationRulesList(this, "notification_rules", false);
  public get notificationRules() {
    return this._notificationRules;
  }
  public putNotificationRules(value: CloudwatchAlertNotificationRules[] | cdktn.IResolvable) {
    this._notificationRules.internalValue = value;
  }
  public resetNotificationRules() {
    this._notificationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRulesInput() {
    return this._notificationRules.internalValue;
  }

  // notifications_enabled - computed: true, optional: true, required: false
  private _notificationsEnabled?: boolean | cdktn.IResolvable; 
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
  public set notificationsEnabled(value: boolean | cdktn.IResolvable) {
    this._notificationsEnabled = value;
  }
  public resetNotificationsEnabled() {
    this._notificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsEnabledInput() {
    return this._notificationsEnabled;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new CloudwatchAlertRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: CloudwatchAlertRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CloudwatchAlertTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CloudwatchAlertTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      notification_rules: cdktn.listMapper(cloudwatchAlertNotificationRulesToTerraform, false)(this._notificationRules.internalValue),
      notifications_enabled: cdktn.booleanToTerraform(this._notificationsEnabled),
      profile_id: cdktn.stringToTerraform(this._profileId),
      rule: cloudwatchAlertRuleToTerraform(this._rule.internalValue),
      space_id: cdktn.stringToTerraform(this._spaceId),
      tags: cdktn.listMapper(cloudwatchAlertTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      notification_rules: {
        value: cdktn.listMapperHcl(cloudwatchAlertNotificationRulesToHclTerraform, false)(this._notificationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlertNotificationRulesList",
      },
      notifications_enabled: {
        value: cdktn.booleanToHclTerraform(this._notificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktn.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cloudwatchAlertRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudwatchAlertRule",
      },
      space_id: {
        value: cdktn.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cloudwatchAlertTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchAlertTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
