/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the second device in the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#connected_device_id NetworkmanagerConnection#connected_device_id}
  */
  readonly connectedDeviceId: string;
  /**
  * The ID of the link for the second device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#connected_link_id NetworkmanagerConnection#connected_link_id}
  */
  readonly connectedLinkId?: string;
  /**
  * The description of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#description NetworkmanagerConnection#description}
  */
  readonly description?: string;
  /**
  * The ID of the first device in the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#device_id NetworkmanagerConnection#device_id}
  */
  readonly deviceId: string;
  /**
  * The ID of the global network that the connection belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#global_network_id NetworkmanagerConnection#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * The ID of the link for the first device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#link_id NetworkmanagerConnection#link_id}
  */
  readonly linkId?: string;
  /**
  * The tags for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#tags NetworkmanagerConnection#tags}
  */
  readonly tags?: NetworkmanagerConnectionTags[] | cdktn.IResolvable;
}
export interface NetworkmanagerConnectionTags {
  /**
  * The tag key. Printable ASCII with at least one non-space character and no leading or trailing space, at most 128 characters, and cannot be prefixed with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#key NetworkmanagerConnection#key}
  */
  readonly key?: string;
  /**
  * The tag value. Printable ASCII with at least one non-space character and no leading or trailing space, at most 256 characters, and cannot be prefixed with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#value NetworkmanagerConnection#value}
  */
  readonly value?: string;
}

export function networkmanagerConnectionTagsToTerraform(struct?: NetworkmanagerConnectionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerConnectionTagsToHclTerraform(struct?: NetworkmanagerConnectionTags | cdktn.IResolvable): any {
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

export class NetworkmanagerConnectionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerConnectionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectionTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerConnectionTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerConnectionTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerConnectionTagsOutputReference {
    return new NetworkmanagerConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection awscc_networkmanager_connection}
*/
export class NetworkmanagerConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerConnection to import
  * @param importFromId The id of the existing NetworkmanagerConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkmanager_connection awscc_networkmanager_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_connection',
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
    this._connectedDeviceId = config.connectedDeviceId;
    this._connectedLinkId = config.connectedLinkId;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._globalNetworkId = config.globalNetworkId;
    this._linkId = config.linkId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_device_id - computed: false, optional: false, required: true
  private _connectedDeviceId?: string; 
  public get connectedDeviceId() {
    return this.getStringAttribute('connected_device_id');
  }
  public set connectedDeviceId(value: string) {
    this._connectedDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedDeviceIdInput() {
    return this._connectedDeviceId;
  }

  // connected_link_id - computed: true, optional: true, required: false
  private _connectedLinkId?: string; 
  public get connectedLinkId() {
    return this.getStringAttribute('connected_link_id');
  }
  public set connectedLinkId(value: string) {
    this._connectedLinkId = value;
  }
  public resetConnectedLinkId() {
    this._connectedLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedLinkIdInput() {
    return this._connectedLinkId;
  }

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
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

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // global_network_id - computed: false, optional: false, required: true
  private _globalNetworkId?: string; 
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
  }
  public set globalNetworkId(value: string) {
    this._globalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkIdInput() {
    return this._globalNetworkId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_id - computed: true, optional: true, required: false
  private _linkId?: string; 
  public get linkId() {
    return this.getStringAttribute('link_id');
  }
  public set linkId(value: string) {
    this._linkId = value;
  }
  public resetLinkId() {
    this._linkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkmanagerConnectionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerConnectionTags[] | cdktn.IResolvable) {
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
      connected_device_id: cdktn.stringToTerraform(this._connectedDeviceId),
      connected_link_id: cdktn.stringToTerraform(this._connectedLinkId),
      description: cdktn.stringToTerraform(this._description),
      device_id: cdktn.stringToTerraform(this._deviceId),
      global_network_id: cdktn.stringToTerraform(this._globalNetworkId),
      link_id: cdktn.stringToTerraform(this._linkId),
      tags: cdktn.listMapper(networkmanagerConnectionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connected_device_id: {
        value: cdktn.stringToHclTerraform(this._connectedDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connected_link_id: {
        value: cdktn.stringToHclTerraform(this._connectedLinkId),
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
      device_id: {
        value: cdktn.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_network_id: {
        value: cdktn.stringToHclTerraform(this._globalNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_id: {
        value: cdktn.stringToHclTerraform(this._linkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networkmanagerConnectionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkmanagerConnectionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
