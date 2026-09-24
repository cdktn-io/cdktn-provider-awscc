/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconvertJobTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}
  */
  readonly accelerationSettings?: MediaconvertJobTemplateAccelerationSettings;
  /**
  * Optional. A category for the job template you are creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}
  */
  readonly category?: string;
  /**
  * Optional. A description of the job template you are creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}
  */
  readonly description?: string;
  /**
  * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}
  */
  readonly hopDestinations?: MediaconvertJobTemplateHopDestinations[] | cdktn.IResolvable;
  /**
  * The name of the job template you are creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Optional. The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}
  */
  readonly queue?: string;
  /**
  * Specify, in JSON format, the transcoding job settings for this job template. This specification must conform to the AWS Elemental MediaConvert job validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}
  */
  readonly settingsJson: string;
  /**
  * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}
  */
  readonly statusUpdateInterval?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}
  */
  readonly tags?: string;
}
export interface MediaconvertJobTemplateAccelerationSettings {
  /**
  * Specify the conditions when the service will run your job with accelerated transcoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}
  */
  readonly mode?: string;
}

export function mediaconvertJobTemplateAccelerationSettingsToTerraform(struct?: MediaconvertJobTemplateAccelerationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function mediaconvertJobTemplateAccelerationSettingsToHclTerraform(struct?: MediaconvertJobTemplateAccelerationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconvertJobTemplateAccelerationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconvertJobTemplateAccelerationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconvertJobTemplateAccelerationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface MediaconvertJobTemplateHopDestinations {
  /**
  * Optional. A different relative priority for the job in the destination queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Optional. The destination queue for queue hopping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}
  */
  readonly queue?: string;
  /**
  * Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}
  */
  readonly waitMinutes?: number;
}

export function mediaconvertJobTemplateHopDestinationsToTerraform(struct?: MediaconvertJobTemplateHopDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    queue: cdktn.stringToTerraform(struct!.queue),
    wait_minutes: cdktn.numberToTerraform(struct!.waitMinutes),
  }
}


export function mediaconvertJobTemplateHopDestinationsToHclTerraform(struct?: MediaconvertJobTemplateHopDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktn.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_minutes: {
      value: cdktn.numberToHclTerraform(struct!.waitMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconvertJobTemplateHopDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconvertJobTemplateHopDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._waitMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitMinutes = this._waitMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconvertJobTemplateHopDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._queue = undefined;
      this._waitMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._queue = value.queue;
      this._waitMinutes = value.waitMinutes;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // queue - computed: true, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // wait_minutes - computed: true, optional: true, required: false
  private _waitMinutes?: number; 
  public get waitMinutes() {
    return this.getNumberAttribute('wait_minutes');
  }
  public set waitMinutes(value: number) {
    this._waitMinutes = value;
  }
  public resetWaitMinutes() {
    this._waitMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitMinutesInput() {
    return this._waitMinutes;
  }
}

export class MediaconvertJobTemplateHopDestinationsList extends cdktn.ComplexList {
  public internalValue? : MediaconvertJobTemplateHopDestinations[] | cdktn.IResolvable

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
  public get(index: number): MediaconvertJobTemplateHopDestinationsOutputReference {
    return new MediaconvertJobTemplateHopDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}
*/
export class MediaconvertJobTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconvert_job_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconvertJobTemplate to import
  * @param importFromId The id of the existing MediaconvertJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconvertJobTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconvert_job_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconvertJobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconvertJobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconvert_job_template',
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
    this._accelerationSettings.internalValue = config.accelerationSettings;
    this._category = config.category;
    this._description = config.description;
    this._hopDestinations.internalValue = config.hopDestinations;
    this._name = config.name;
    this._priority = config.priority;
    this._queue = config.queue;
    this._settingsJson = config.settingsJson;
    this._statusUpdateInterval = config.statusUpdateInterval;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_settings - computed: true, optional: true, required: false
  private _accelerationSettings = new MediaconvertJobTemplateAccelerationSettingsOutputReference(this, "acceleration_settings");
  public get accelerationSettings() {
    return this._accelerationSettings;
  }
  public putAccelerationSettings(value: MediaconvertJobTemplateAccelerationSettings) {
    this._accelerationSettings.internalValue = value;
  }
  public resetAccelerationSettings() {
    this._accelerationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationSettingsInput() {
    return this._accelerationSettings.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // hop_destinations - computed: true, optional: true, required: false
  private _hopDestinations = new MediaconvertJobTemplateHopDestinationsList(this, "hop_destinations", false);
  public get hopDestinations() {
    return this._hopDestinations;
  }
  public putHopDestinations(value: MediaconvertJobTemplateHopDestinations[] | cdktn.IResolvable) {
    this._hopDestinations.internalValue = value;
  }
  public resetHopDestinations() {
    this._hopDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopDestinationsInput() {
    return this._hopDestinations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // queue - computed: true, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // settings_json - computed: false, optional: false, required: true
  private _settingsJson?: string; 
  public get settingsJson() {
    return this.getStringAttribute('settings_json');
  }
  public set settingsJson(value: string) {
    this._settingsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsJsonInput() {
    return this._settingsJson;
  }

  // status_update_interval - computed: true, optional: true, required: false
  private _statusUpdateInterval?: string; 
  public get statusUpdateInterval() {
    return this.getStringAttribute('status_update_interval');
  }
  public set statusUpdateInterval(value: string) {
    this._statusUpdateInterval = value;
  }
  public resetStatusUpdateInterval() {
    this._statusUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUpdateIntervalInput() {
    return this._statusUpdateInterval;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_settings: mediaconvertJobTemplateAccelerationSettingsToTerraform(this._accelerationSettings.internalValue),
      category: cdktn.stringToTerraform(this._category),
      description: cdktn.stringToTerraform(this._description),
      hop_destinations: cdktn.listMapper(mediaconvertJobTemplateHopDestinationsToTerraform, false)(this._hopDestinations.internalValue),
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      queue: cdktn.stringToTerraform(this._queue),
      settings_json: cdktn.stringToTerraform(this._settingsJson),
      status_update_interval: cdktn.stringToTerraform(this._statusUpdateInterval),
      tags: cdktn.stringToTerraform(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceleration_settings: {
        value: mediaconvertJobTemplateAccelerationSettingsToHclTerraform(this._accelerationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconvertJobTemplateAccelerationSettings",
      },
      category: {
        value: cdktn.stringToHclTerraform(this._category),
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
      hop_destinations: {
        value: cdktn.listMapperHcl(mediaconvertJobTemplateHopDestinationsToHclTerraform, false)(this._hopDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconvertJobTemplateHopDestinationsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue: {
        value: cdktn.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings_json: {
        value: cdktn.stringToHclTerraform(this._settingsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_update_interval: {
        value: cdktn.stringToHclTerraform(this._statusUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
