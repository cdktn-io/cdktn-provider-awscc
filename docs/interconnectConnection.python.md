# `interconnectConnection` Submodule <a name="`interconnectConnection` Submodule" id="@cdktn/provider-awscc.interconnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InterconnectConnection <a name="InterconnectConnection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection awscc_interconnect_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attach_point: InterconnectConnectionAttachPoint,
  activation_key: str = None,
  bandwidth: str = None,
  description: str = None,
  environment_id: str = None,
  remote_account: InterconnectConnectionRemoteAccount = None,
  remote_owner_account: str = None,
  tags: IResolvable | typing.List[InterconnectConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.attachPoint">attach_point</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.activationKey">activation_key</a></code> | <code>str</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>str</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteAccount">remote_account</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteOwnerAccount">remote_owner_account</a></code> | <code>str</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attach_point`<sup>Required</sup> <a name="attach_point" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.attachPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.activationKey"></a>

- *Type:* str

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.bandwidth"></a>

- *Type:* str

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.description"></a>

- *Type:* str

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.environmentId"></a>

- *Type:* str

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `remote_account`<sup>Optional</sup> <a name="remote_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteAccount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `remote_owner_account`<sup>Optional</sup> <a name="remote_owner_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteOwnerAccount"></a>

- *Type:* str

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint">put_attach_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount">put_remote_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey">reset_activation_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth">reset_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount">reset_remote_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount">reset_remote_owner_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attach_point` <a name="put_attach_point" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint"></a>

```python
def put_attach_point(
  arn: str = None,
  direct_connect_gateway: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint.parameter.arn"></a>

- *Type:* str

The ARN of the resource to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#arn InterconnectConnection#arn}

---

###### `direct_connect_gateway`<sup>Optional</sup> <a name="direct_connect_gateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint.parameter.directConnectGateway"></a>

- *Type:* str

The ID of the Direct Connect Gateway to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#direct_connect_gateway InterconnectConnection#direct_connect_gateway}

---

##### `put_remote_account` <a name="put_remote_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount"></a>

```python
def put_remote_account(
  identifier: str = None
) -> None
```

###### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount.parameter.identifier"></a>

- *Type:* str

The identifier of the remote account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#identifier InterconnectConnection#identifier}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[InterconnectConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]

---

##### `reset_activation_key` <a name="reset_activation_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey"></a>

```python
def reset_activation_key() -> None
```

##### `reset_bandwidth` <a name="reset_bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth"></a>

```python
def reset_bandwidth() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_remote_account` <a name="reset_remote_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount"></a>

```python
def reset_remote_account() -> None
```

##### `reset_remote_owner_account` <a name="reset_remote_owner_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount"></a>

```python
def reset_remote_owner_account() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InterconnectConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InterconnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InterconnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint">attach_point</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier">billing_tier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName">provider_name</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount">remote_account</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId">shared_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput">activation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput">attach_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput">bandwidth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput">remote_account_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput">remote_owner_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey">activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth">bandwidth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount">remote_owner_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attach_point`<sup>Required</sup> <a name="attach_point" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint"></a>

```python
attach_point: InterconnectConnectionAttachPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a>

---

##### `billing_tier`<sup>Required</sup> <a name="billing_tier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier"></a>

```python
billing_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName"></a>

```python
provider_name: InterconnectConnectionProviderNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a>

---

##### `remote_account`<sup>Required</sup> <a name="remote_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount"></a>

```python
remote_account: InterconnectConnectionRemoteAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a>

---

##### `shared_id`<sup>Required</sup> <a name="shared_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId"></a>

```python
shared_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags"></a>

```python
tags: InterconnectConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `activation_key_input`<sup>Optional</sup> <a name="activation_key_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput"></a>

```python
activation_key_input: str
```

- *Type:* str

---

##### `attach_point_input`<sup>Optional</sup> <a name="attach_point_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput"></a>

```python
attach_point_input: IResolvable | InterconnectConnectionAttachPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput"></a>

```python
bandwidth_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `remote_account_input`<sup>Optional</sup> <a name="remote_account_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput"></a>

```python
remote_account_input: IResolvable | InterconnectConnectionRemoteAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `remote_owner_account_input`<sup>Optional</sup> <a name="remote_owner_account_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput"></a>

```python
remote_owner_account_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[InterconnectConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]

---

##### `activation_key`<sup>Required</sup> <a name="activation_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `remote_owner_account`<sup>Required</sup> <a name="remote_owner_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount"></a>

```python
remote_owner_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InterconnectConnectionAttachPoint <a name="InterconnectConnectionAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionAttachPoint(
  arn: str = None,
  direct_connect_gateway: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn">arn</a></code> | <code>str</code> | The ARN of the resource to attach to. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway">direct_connect_gateway</a></code> | <code>str</code> | The ID of the Direct Connect Gateway to attach to. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the resource to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#arn InterconnectConnection#arn}

---

##### `direct_connect_gateway`<sup>Optional</sup> <a name="direct_connect_gateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway"></a>

```python
direct_connect_gateway: str
```

- *Type:* str

The ID of the Direct Connect Gateway to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#direct_connect_gateway InterconnectConnection#direct_connect_gateway}

---

### InterconnectConnectionConfig <a name="InterconnectConnectionConfig" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attach_point: InterconnectConnectionAttachPoint,
  activation_key: str = None,
  bandwidth: str = None,
  description: str = None,
  environment_id: str = None,
  remote_account: InterconnectConnectionRemoteAccount = None,
  remote_owner_account: str = None,
  tags: IResolvable | typing.List[InterconnectConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint">attach_point</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey">activation_key</a></code> | <code>str</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth">bandwidth</a></code> | <code>str</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description">description</a></code> | <code>str</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId">environment_id</a></code> | <code>str</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount">remote_account</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount">remote_owner_account</a></code> | <code>str</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attach_point`<sup>Required</sup> <a name="attach_point" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint"></a>

```python
attach_point: InterconnectConnectionAttachPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `remote_account`<sup>Optional</sup> <a name="remote_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount"></a>

```python
remote_account: InterconnectConnectionRemoteAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `remote_owner_account`<sup>Optional</sup> <a name="remote_owner_account" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount"></a>

```python
remote_owner_account: str
```

- *Type:* str

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[InterconnectConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

### InterconnectConnectionProviderName <a name="InterconnectConnectionProviderName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionProviderName()
```


### InterconnectConnectionRemoteAccount <a name="InterconnectConnectionRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionRemoteAccount(
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the remote account. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the remote account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#identifier InterconnectConnection#identifier}

---

### InterconnectConnectionTags <a name="InterconnectConnectionTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#key InterconnectConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/interconnect_connection#value InterconnectConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### InterconnectConnectionAttachPointOutputReference <a name="InterconnectConnectionAttachPointOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionAttachPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway">reset_direct_connect_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_direct_connect_gateway` <a name="reset_direct_connect_gateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway"></a>

```python
def reset_direct_connect_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput">direct_connect_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway">direct_connect_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `direct_connect_gateway_input`<sup>Optional</sup> <a name="direct_connect_gateway_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput"></a>

```python
direct_connect_gateway_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `direct_connect_gateway`<sup>Required</sup> <a name="direct_connect_gateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway"></a>

```python
direct_connect_gateway: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InterconnectConnectionAttachPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---


### InterconnectConnectionProviderNameOutputReference <a name="InterconnectConnectionProviderNameOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionProviderNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider">cloud_service_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider">last_mile_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_service_provider`<sup>Required</sup> <a name="cloud_service_provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider"></a>

```python
cloud_service_provider: str
```

- *Type:* str

---

##### `last_mile_provider`<sup>Required</sup> <a name="last_mile_provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider"></a>

```python
last_mile_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue"></a>

```python
internal_value: InterconnectConnectionProviderName
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a>

---


### InterconnectConnectionRemoteAccountOutputReference <a name="InterconnectConnectionRemoteAccountOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionRemoteAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InterconnectConnectionRemoteAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---


### InterconnectConnectionTagsList <a name="InterconnectConnectionTagsList" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InterconnectConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[InterconnectConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>]

---


### InterconnectConnectionTagsOutputReference <a name="InterconnectConnectionTagsOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import interconnect_connection

interconnectConnection.InterconnectConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InterconnectConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>

---



