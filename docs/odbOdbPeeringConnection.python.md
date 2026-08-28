# `odbOdbPeeringConnection` Submodule <a name="`odbOdbPeeringConnection` Submodule" id="@cdktn/provider-awscc.odbOdbPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbPeeringConnection <a name="OdbOdbPeeringConnection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_peer_network_cidrs: typing.List[str] = None,
  display_name: str = None,
  odb_network_id: str = None,
  peer_network_id: str = None,
  peer_network_route_table_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[OdbOdbPeeringConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.additionalPeerNetworkCidrs">additional_peer_network_cidrs</a></code> | <code>typing.List[str]</code> | The additional CIDR blocks for the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.peerNetworkId">peer_network_id</a></code> | <code>str</code> | The unique identifier of the peer network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.peerNetworkRouteTableIds">peer_network_route_table_ids</a></code> | <code>typing.List[str]</code> | The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]</code> | Tags to assign to the Odb peering connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_peer_network_cidrs`<sup>Optional</sup> <a name="additional_peer_network_cidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.additionalPeerNetworkCidrs"></a>

- *Type:* typing.List[str]

The additional CIDR blocks for the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs OdbOdbPeeringConnection#additional_peer_network_cidrs}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.displayName"></a>

- *Type:* str

The name of the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#display_name OdbOdbPeeringConnection#display_name}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

The unique identifier of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#odb_network_id OdbOdbPeeringConnection#odb_network_id}

---

##### `peer_network_id`<sup>Optional</sup> <a name="peer_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.peerNetworkId"></a>

- *Type:* str

The unique identifier of the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_id OdbOdbPeeringConnection#peer_network_id}

---

##### `peer_network_route_table_ids`<sup>Optional</sup> <a name="peer_network_route_table_ids" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.peerNetworkRouteTableIds"></a>

- *Type:* typing.List[str]

The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids OdbOdbPeeringConnection#peer_network_route_table_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]

Tags to assign to the Odb peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#tags OdbOdbPeeringConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs">reset_additional_peer_network_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId">reset_odb_network_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId">reset_peer_network_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds">reset_peer_network_route_table_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OdbOdbPeeringConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]

---

##### `reset_additional_peer_network_cidrs` <a name="reset_additional_peer_network_cidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs"></a>

```python
def reset_additional_peer_network_cidrs() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_odb_network_id` <a name="reset_odb_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId"></a>

```python
def reset_odb_network_id() -> None
```

##### `reset_peer_network_id` <a name="reset_peer_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId"></a>

```python
def reset_peer_network_id() -> None
```

##### `reset_peer_network_route_table_ids` <a name="reset_peer_network_route_table_ids" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds"></a>

```python
def reset_peer_network_route_table_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnection.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbOdbPeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbOdbPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn">odb_peering_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId">odb_peering_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn">peer_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs">peer_network_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput">additional_peer_network_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput">peer_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput">peer_network_route_table_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs">additional_peer_network_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId">peer_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds">peer_network_route_table_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `odb_peering_connection_arn`<sup>Required</sup> <a name="odb_peering_connection_arn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn"></a>

```python
odb_peering_connection_arn: str
```

- *Type:* str

---

##### `odb_peering_connection_id`<sup>Required</sup> <a name="odb_peering_connection_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId"></a>

```python
odb_peering_connection_id: str
```

- *Type:* str

---

##### `peer_network_arn`<sup>Required</sup> <a name="peer_network_arn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn"></a>

```python
peer_network_arn: str
```

- *Type:* str

---

##### `peer_network_cidrs`<sup>Required</sup> <a name="peer_network_cidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs"></a>

```python
peer_network_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags"></a>

```python
tags: OdbOdbPeeringConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a>

---

##### `additional_peer_network_cidrs_input`<sup>Optional</sup> <a name="additional_peer_network_cidrs_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput"></a>

```python
additional_peer_network_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `peer_network_id_input`<sup>Optional</sup> <a name="peer_network_id_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput"></a>

```python
peer_network_id_input: str
```

- *Type:* str

---

##### `peer_network_route_table_ids_input`<sup>Optional</sup> <a name="peer_network_route_table_ids_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput"></a>

```python
peer_network_route_table_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OdbOdbPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]

---

##### `additional_peer_network_cidrs`<sup>Required</sup> <a name="additional_peer_network_cidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs"></a>

```python
additional_peer_network_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `peer_network_id`<sup>Required</sup> <a name="peer_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId"></a>

```python
peer_network_id: str
```

- *Type:* str

---

##### `peer_network_route_table_ids`<sup>Required</sup> <a name="peer_network_route_table_ids" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds"></a>

```python
peer_network_route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbPeeringConnectionConfig <a name="OdbOdbPeeringConnectionConfig" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_peer_network_cidrs: typing.List[str] = None,
  display_name: str = None,
  odb_network_id: str = None,
  peer_network_id: str = None,
  peer_network_route_table_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[OdbOdbPeeringConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs">additional_peer_network_cidrs</a></code> | <code>typing.List[str]</code> | The additional CIDR blocks for the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The unique identifier of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId">peer_network_id</a></code> | <code>str</code> | The unique identifier of the peer network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds">peer_network_route_table_ids</a></code> | <code>typing.List[str]</code> | The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]</code> | Tags to assign to the Odb peering connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_peer_network_cidrs`<sup>Optional</sup> <a name="additional_peer_network_cidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs"></a>

```python
additional_peer_network_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

The additional CIDR blocks for the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs OdbOdbPeeringConnection#additional_peer_network_cidrs}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#display_name OdbOdbPeeringConnection#display_name}

---

##### `odb_network_id`<sup>Optional</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

The unique identifier of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#odb_network_id OdbOdbPeeringConnection#odb_network_id}

---

##### `peer_network_id`<sup>Optional</sup> <a name="peer_network_id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId"></a>

```python
peer_network_id: str
```

- *Type:* str

The unique identifier of the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_id OdbOdbPeeringConnection#peer_network_id}

---

##### `peer_network_route_table_ids`<sup>Optional</sup> <a name="peer_network_route_table_ids" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds"></a>

```python
peer_network_route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids OdbOdbPeeringConnection#peer_network_route_table_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OdbOdbPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]

Tags to assign to the Odb peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#tags OdbOdbPeeringConnection#tags}

---

### OdbOdbPeeringConnectionTags <a name="OdbOdbPeeringConnectionTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#value OdbOdbPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbPeeringConnectionTagsList <a name="OdbOdbPeeringConnectionTagsList" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbOdbPeeringConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbOdbPeeringConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>]

---


### OdbOdbPeeringConnectionTagsOutputReference <a name="OdbOdbPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_peering_connection

odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbOdbPeeringConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>

---



