# `iotsecuretunnelingTunnel` Submodule <a name="`iotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsecuretunnelingTunnel <a name="IotsecuretunnelingTunnel" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  destination_config: IotsecuretunnelingTunnelDestinationConfig = None,
  tags: IResolvable | typing.List[IotsecuretunnelingTunnelTags] = None,
  timeout_config: IotsecuretunnelingTunnelTimeoutConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]</code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.description"></a>

- *Type:* str

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig">put_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig">put_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig">reset_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig">reset_timeout_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_config` <a name="put_destination_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig"></a>

```python
def put_destination_config(
  services: typing.List[str] = None,
  thing_name: str = None
) -> None
```

###### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig.parameter.services"></a>

- *Type:* typing.List[str]

A list of service names that identify the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#services IotsecuretunnelingTunnel#services}

---

###### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig.parameter.thingName"></a>

- *Type:* str

The name of the IoT thing to which you want to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#thing_name IotsecuretunnelingTunnel#thing_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsecuretunnelingTunnelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]

---

##### `put_timeout_config` <a name="put_timeout_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig"></a>

```python
def put_timeout_config(
  max_lifetime_timeout_minutes: typing.Union[int, float] = None
) -> None
```

###### `max_lifetime_timeout_minutes`<sup>Optional</sup> <a name="max_lifetime_timeout_minutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig.parameter.maxLifetimeTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time (in minutes) a tunnel can remain open.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes IotsecuretunnelingTunnel#max_lifetime_timeout_minutes}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_config` <a name="reset_destination_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig"></a>

```python
def reset_destination_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_config` <a name="reset_timeout_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig"></a>

```python
def reset_timeout_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsecuretunnelingTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn">tunnel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput">destination_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput">timeout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig"></a>

```python
destination_config: IotsecuretunnelingTunnelDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags"></a>

```python
tags: IotsecuretunnelingTunnelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a>

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig"></a>

```python
timeout_config: IotsecuretunnelingTunnelTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `tunnel_arn`<sup>Required</sup> <a name="tunnel_arn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn"></a>

```python
tunnel_arn: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_config_input`<sup>Optional</sup> <a name="destination_config_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput"></a>

```python
destination_config_input: IResolvable | IotsecuretunnelingTunnelDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsecuretunnelingTunnelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]

---

##### `timeout_config_input`<sup>Optional</sup> <a name="timeout_config_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput"></a>

```python
timeout_config_input: IResolvable | IotsecuretunnelingTunnelTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsecuretunnelingTunnelConfig <a name="IotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  destination_config: IotsecuretunnelingTunnelDestinationConfig = None,
  tags: IResolvable | typing.List[IotsecuretunnelingTunnelTags] = None,
  timeout_config: IotsecuretunnelingTunnelTimeoutConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description">description</a></code> | <code>str</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]</code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig"></a>

```python
destination_config: IotsecuretunnelingTunnelDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsecuretunnelingTunnelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig"></a>

```python
timeout_config: IotsecuretunnelingTunnelTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

### IotsecuretunnelingTunnelDestinationConfig <a name="IotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig(
  services: typing.List[str] = None,
  thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services">services</a></code> | <code>typing.List[str]</code> | A list of service names that identify the target application. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName">thing_name</a></code> | <code>str</code> | The name of the IoT thing to which you want to connect. |

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

A list of service names that identify the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#services IotsecuretunnelingTunnel#services}

---

##### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

The name of the IoT thing to which you want to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#thing_name IotsecuretunnelingTunnel#thing_name}

---

### IotsecuretunnelingTunnelTags <a name="IotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#key IotsecuretunnelingTunnel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#value IotsecuretunnelingTunnel#value}

---

### IotsecuretunnelingTunnelTimeoutConfig <a name="IotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig(
  max_lifetime_timeout_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes">max_lifetime_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time (in minutes) a tunnel can remain open. |

---

##### `max_lifetime_timeout_minutes`<sup>Optional</sup> <a name="max_lifetime_timeout_minutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

```python
max_lifetime_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time (in minutes) a tunnel can remain open.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes IotsecuretunnelingTunnel#max_lifetime_timeout_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsecuretunnelingTunnelDestinationConfigOutputReference <a name="IotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName">reset_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_services` <a name="reset_services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_thing_name` <a name="reset_thing_name" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName"></a>

```python
def reset_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput">thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thing_name_input`<sup>Optional</sup> <a name="thing_name_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput"></a>

```python
thing_name_input: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsecuretunnelingTunnelDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---


### IotsecuretunnelingTunnelTagsList <a name="IotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsecuretunnelingTunnelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsecuretunnelingTunnelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>]

---


### IotsecuretunnelingTunnelTagsOutputReference <a name="IotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsecuretunnelingTunnelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>

---


### IotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="IotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsecuretunneling_tunnel

iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes">reset_max_lifetime_timeout_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_lifetime_timeout_minutes` <a name="reset_max_lifetime_timeout_minutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes"></a>

```python
def reset_max_lifetime_timeout_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput">max_lifetime_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">max_lifetime_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_lifetime_timeout_minutes_input`<sup>Optional</sup> <a name="max_lifetime_timeout_minutes_input" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput"></a>

```python
max_lifetime_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lifetime_timeout_minutes`<sup>Required</sup> <a name="max_lifetime_timeout_minutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```python
max_lifetime_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsecuretunnelingTunnelTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---



