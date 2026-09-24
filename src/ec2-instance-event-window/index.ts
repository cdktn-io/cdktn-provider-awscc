/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2InstanceEventWindowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * The name of the event window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}
  */
  readonly name?: string;
  /**
  * The tags applied to the event window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}
  */
  readonly tags?: Ec2InstanceEventWindowTags[] | cdktn.IResolvable;
  /**
  * The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}
  */
  readonly timeRanges?: Ec2InstanceEventWindowTimeRanges[] | cdktn.IResolvable;
}
export interface Ec2InstanceEventWindowTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key Ec2InstanceEventWindow#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value Ec2InstanceEventWindow#value}
  */
  readonly value?: string;
}

export function ec2InstanceEventWindowTagsToTerraform(struct?: Ec2InstanceEventWindowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2InstanceEventWindowTagsToHclTerraform(struct?: Ec2InstanceEventWindowTags | cdktn.IResolvable): any {
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

export class Ec2InstanceEventWindowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceEventWindowTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2InstanceEventWindowTags | cdktn.IResolvable | undefined) {
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

export class Ec2InstanceEventWindowTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceEventWindowTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceEventWindowTagsOutputReference {
    return new Ec2InstanceEventWindowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2InstanceEventWindowTimeRanges {
  /**
  * The hour when the time range ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour Ec2InstanceEventWindow#end_hour}
  */
  readonly endHour?: number;
  /**
  * The day on which the time range ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day Ec2InstanceEventWindow#end_week_day}
  */
  readonly endWeekDay?: string;
  /**
  * The hour when the time range begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour Ec2InstanceEventWindow#start_hour}
  */
  readonly startHour?: number;
  /**
  * The day on which the time range begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day Ec2InstanceEventWindow#start_week_day}
  */
  readonly startWeekDay?: string;
}

export function ec2InstanceEventWindowTimeRangesToTerraform(struct?: Ec2InstanceEventWindowTimeRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_hour: cdktn.numberToTerraform(struct!.endHour),
    end_week_day: cdktn.stringToTerraform(struct!.endWeekDay),
    start_hour: cdktn.numberToTerraform(struct!.startHour),
    start_week_day: cdktn.stringToTerraform(struct!.startWeekDay),
  }
}


export function ec2InstanceEventWindowTimeRangesToHclTerraform(struct?: Ec2InstanceEventWindowTimeRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_hour: {
      value: cdktn.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_week_day: {
      value: cdktn.stringToHclTerraform(struct!.endWeekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktn.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_week_day: {
      value: cdktn.stringToHclTerraform(struct!.startWeekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2InstanceEventWindowTimeRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2InstanceEventWindowTimeRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endWeekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endWeekDay = this._endWeekDay;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startWeekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWeekDay = this._startWeekDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2InstanceEventWindowTimeRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endHour = undefined;
      this._endWeekDay = undefined;
      this._startHour = undefined;
      this._startWeekDay = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endHour = value.endHour;
      this._endWeekDay = value.endWeekDay;
      this._startHour = value.startHour;
      this._startWeekDay = value.startWeekDay;
    }
  }

  // end_hour - computed: true, optional: true, required: false
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  public resetEndHour() {
    this._endHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_week_day - computed: true, optional: true, required: false
  private _endWeekDay?: string; 
  public get endWeekDay() {
    return this.getStringAttribute('end_week_day');
  }
  public set endWeekDay(value: string) {
    this._endWeekDay = value;
  }
  public resetEndWeekDay() {
    this._endWeekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endWeekDayInput() {
    return this._endWeekDay;
  }

  // start_hour - computed: true, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_week_day - computed: true, optional: true, required: false
  private _startWeekDay?: string; 
  public get startWeekDay() {
    return this.getStringAttribute('start_week_day');
  }
  public set startWeekDay(value: string) {
    this._startWeekDay = value;
  }
  public resetStartWeekDay() {
    this._startWeekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWeekDayInput() {
    return this._startWeekDay;
  }
}

export class Ec2InstanceEventWindowTimeRangesList extends cdktn.ComplexList {
  public internalValue? : Ec2InstanceEventWindowTimeRanges[] | cdktn.IResolvable

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
  public get(index: number): Ec2InstanceEventWindowTimeRangesOutputReference {
    return new Ec2InstanceEventWindowTimeRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}
*/
export class Ec2InstanceEventWindow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_instance_event_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2InstanceEventWindow to import
  * @param importFromId The id of the existing Ec2InstanceEventWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2InstanceEventWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_instance_event_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2InstanceEventWindowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2InstanceEventWindowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_instance_event_window',
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
    this._cronExpression = config.cronExpression;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._timeRanges.internalValue = config.timeRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_event_window_id - computed: true, optional: false, required: false
  public get instanceEventWindowId() {
    return this.getStringAttribute('instance_event_window_id');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2InstanceEventWindowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2InstanceEventWindowTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // time_ranges - computed: true, optional: true, required: false
  private _timeRanges = new Ec2InstanceEventWindowTimeRangesList(this, "time_ranges", false);
  public get timeRanges() {
    return this._timeRanges;
  }
  public putTimeRanges(value: Ec2InstanceEventWindowTimeRanges[] | cdktn.IResolvable) {
    this._timeRanges.internalValue = value;
  }
  public resetTimeRanges() {
    this._timeRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangesInput() {
    return this._timeRanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_expression: cdktn.stringToTerraform(this._cronExpression),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(ec2InstanceEventWindowTagsToTerraform, false)(this._tags.internalValue),
      time_ranges: cdktn.listMapper(ec2InstanceEventWindowTimeRangesToTerraform, false)(this._timeRanges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_expression: {
        value: cdktn.stringToHclTerraform(this._cronExpression),
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
      tags: {
        value: cdktn.listMapperHcl(ec2InstanceEventWindowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2InstanceEventWindowTagsList",
      },
      time_ranges: {
        value: cdktn.listMapperHcl(ec2InstanceEventWindowTimeRangesToHclTerraform, false)(this._timeRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2InstanceEventWindowTimeRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
