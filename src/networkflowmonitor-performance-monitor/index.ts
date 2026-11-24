/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkflowmonitorPerformanceMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the performance monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}
  */
  readonly monitorName: string;
  /**
  * The Amazon Resource Name (ARN) of the scope for the performance monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}
  */
  readonly scopeArn?: string;
  /**
  * The tags for the performance monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}
  */
  readonly tags?: NetworkflowmonitorPerformanceMonitorTags[] | cdktn.IResolvable;
  /**
  * The targets that are monitored by the performance monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}
  */
  readonly targets: NetworkflowmonitorPerformanceMonitorTargets[] | cdktn.IResolvable;
}
export interface NetworkflowmonitorPerformanceMonitorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}
  */
  readonly value?: string;
}

export function networkflowmonitorPerformanceMonitorTagsToTerraform(struct?: NetworkflowmonitorPerformanceMonitorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkflowmonitorPerformanceMonitorTagsToHclTerraform(struct?: NetworkflowmonitorPerformanceMonitorTags | cdktn.IResolvable): any {
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

export class NetworkflowmonitorPerformanceMonitorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkflowmonitorPerformanceMonitorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkflowmonitorPerformanceMonitorTags | cdktn.IResolvable | undefined) {
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

export class NetworkflowmonitorPerformanceMonitorTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkflowmonitorPerformanceMonitorTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkflowmonitorPerformanceMonitorTagsOutputReference {
    return new NetworkflowmonitorPerformanceMonitorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkflowmonitorPerformanceMonitorTargets {
  /**
  * The identifier of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#identifier NetworkflowmonitorPerformanceMonitor#identifier}
  */
  readonly identifier: string;
  /**
  * The type of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#type NetworkflowmonitorPerformanceMonitor#type}
  */
  readonly type: string;
}

export function networkflowmonitorPerformanceMonitorTargetsToTerraform(struct?: NetworkflowmonitorPerformanceMonitorTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function networkflowmonitorPerformanceMonitorTargetsToHclTerraform(struct?: NetworkflowmonitorPerformanceMonitorTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class NetworkflowmonitorPerformanceMonitorTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkflowmonitorPerformanceMonitorTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkflowmonitorPerformanceMonitorTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NetworkflowmonitorPerformanceMonitorTargetsList extends cdktn.ComplexList {
  public internalValue? : NetworkflowmonitorPerformanceMonitorTargets[] | cdktn.IResolvable

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
  public get(index: number): NetworkflowmonitorPerformanceMonitorTargetsOutputReference {
    return new NetworkflowmonitorPerformanceMonitorTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}
*/
export class NetworkflowmonitorPerformanceMonitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkflowmonitor_performance_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkflowmonitorPerformanceMonitor to import
  * @param importFromId The id of the existing NetworkflowmonitorPerformanceMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkflowmonitorPerformanceMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkflowmonitor_performance_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkflowmonitorPerformanceMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkflowmonitorPerformanceMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkflowmonitor_performance_monitor',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._monitorName = config.monitorName;
    this._scopeArn = config.scopeArn;
    this._tags.internalValue = config.tags;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_status - computed: true, optional: false, required: false
  public get monitorStatus() {
    return this.getStringAttribute('monitor_status');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // scope_arn - computed: true, optional: true, required: false
  private _scopeArn?: string; 
  public get scopeArn() {
    return this.getStringAttribute('scope_arn');
  }
  public set scopeArn(value: string) {
    this._scopeArn = value;
  }
  public resetScopeArn() {
    this._scopeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeArnInput() {
    return this._scopeArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkflowmonitorPerformanceMonitorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkflowmonitorPerformanceMonitorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new NetworkflowmonitorPerformanceMonitorTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: NetworkflowmonitorPerformanceMonitorTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor_name: cdktn.stringToTerraform(this._monitorName),
      scope_arn: cdktn.stringToTerraform(this._scopeArn),
      tags: cdktn.listMapper(networkflowmonitorPerformanceMonitorTagsToTerraform, false)(this._tags.internalValue),
      targets: cdktn.listMapper(networkflowmonitorPerformanceMonitorTargetsToTerraform, false)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitor_name: {
        value: cdktn.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_arn: {
        value: cdktn.stringToHclTerraform(this._scopeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networkflowmonitorPerformanceMonitorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkflowmonitorPerformanceMonitorTagsList",
      },
      targets: {
        value: cdktn.listMapperHcl(networkflowmonitorPerformanceMonitorTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkflowmonitorPerformanceMonitorTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
