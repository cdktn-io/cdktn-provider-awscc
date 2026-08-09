# `devopsagentPrivateConnection` Submodule <a name="`devopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.devopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentPrivateConnection <a name="DevopsagentPrivateConnection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_configuration: DevopsagentPrivateConnectionConnectionConfiguration,
  name: str,
  certificate: str = None,
  tags: IResolvable | typing.List[DevopsagentPrivateConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.name"></a>

- *Type:* str

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.certificate"></a>

- *Type:* str

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration">put_connection_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_configuration` <a name="put_connection_configuration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration"></a>

```python
def put_connection_configuration(
  self_managed: DevopsagentPrivateConnectionConnectionConfigurationSelfManaged = None,
  service_managed: DevopsagentPrivateConnectionConnectionConfigurationServiceManaged = None
) -> None
```

###### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

###### `service_managed`<sup>Optional</sup> <a name="service_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.serviceManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DevopsagentPrivateConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentPrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime">certificate_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput">connection_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_expiry_time`<sup>Required</sup> <a name="certificate_expiry_time" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```python
certificate_expiry_time: str
```

- *Type:* str

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration"></a>

```python
connection_configuration: DevopsagentPrivateConnectionConnectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags"></a>

```python
tags: DevopsagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `connection_configuration_input`<sup>Optional</sup> <a name="connection_configuration_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput"></a>

```python
connection_configuration_input: IResolvable | DevopsagentPrivateConnectionConnectionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DevopsagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentPrivateConnectionConfig <a name="DevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_configuration: DevopsagentPrivateConnectionConnectionConfiguration,
  name: str,
  certificate: str = None,
  tags: IResolvable | typing.List[DevopsagentPrivateConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name">name</a></code> | <code>str</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>str</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration"></a>

```python
connection_configuration: DevopsagentPrivateConnectionConnectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DevopsagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

### DevopsagentPrivateConnectionConnectionConfiguration <a name="DevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration(
  self_managed: DevopsagentPrivateConnectionConnectionConfigurationSelfManaged = None,
  service_managed: DevopsagentPrivateConnectionConnectionConfigurationServiceManaged = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | Configuration for a self-managed Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged">service_managed</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | Configuration for a service-managed Private Connection. |

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged"></a>

```python
self_managed: DevopsagentPrivateConnectionConnectionConfigurationSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

##### `service_managed`<sup>Optional</sup> <a name="service_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged"></a>

```python
service_managed: DevopsagentPrivateConnectionConnectionConfigurationServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

### DevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged(
  resource_configuration_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | The ARN of the Resource Configuration. |

---

##### `resource_configuration_id`<sup>Optional</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

### DevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged(
  dns_resolution: str = None,
  host_address: str = None,
  ip_address_type: str = None,
  ipv4_addresses_per_eni: typing.Union[int, float] = None,
  port_ranges: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress">host_address</a></code> | <code>str</code> | IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | IP address type of the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni">ipv4_addresses_per_eni</a></code> | <code>typing.Union[int, float]</code> | Number of IPv4 addresses in each ENI for the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Security groups to attach to the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Subnets that the service-managed Resource Gateway will span. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId">vpc_id</a></code> | <code>str</code> | VPC to create the service-managed Resource Gateway in. |

---

##### `dns_resolution`<sup>Optional</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

##### `host_address`<sup>Optional</sup> <a name="host_address" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

##### `ipv4_addresses_per_eni`<sup>Optional</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni"></a>

```python
ipv4_addresses_per_eni: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

### DevopsagentPrivateConnectionTags <a name="DevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#key DevopsagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#value DevopsagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged">put_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged">put_service_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged">reset_service_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_self_managed` <a name="put_self_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged"></a>

```python
def put_self_managed(
  resource_configuration_id: str = None
) -> None
```

###### `resource_configuration_id`<sup>Optional</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged.parameter.resourceConfigurationId"></a>

- *Type:* str

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

##### `put_service_managed` <a name="put_service_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged"></a>

```python
def put_service_managed(
  dns_resolution: str = None,
  host_address: str = None,
  ip_address_type: str = None,
  ipv4_addresses_per_eni: typing.Union[int, float] = None,
  port_ranges: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
) -> None
```

###### `dns_resolution`<sup>Optional</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.dnsResolution"></a>

- *Type:* str

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

###### `host_address`<sup>Optional</sup> <a name="host_address" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.hostAddress"></a>

- *Type:* str

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.ipAddressType"></a>

- *Type:* str

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

###### `ipv4_addresses_per_eni`<sup>Optional</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.ipv4AddressesPerEni"></a>

- *Type:* typing.Union[int, float]

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.portRanges"></a>

- *Type:* typing.List[str]

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.vpcId"></a>

- *Type:* str

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_service_managed` <a name="reset_service_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged"></a>

```python
def reset_service_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">service_managed</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput">self_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput">service_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```python
self_managed: DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `service_managed`<sup>Required</sup> <a name="service_managed" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```python
service_managed: DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput"></a>

```python
self_managed_input: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `service_managed_input`<sup>Optional</sup> <a name="service_managed_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput"></a>

```python
service_managed_input: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationServiceManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentPrivateConnectionConnectionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId">reset_resource_configuration_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_configuration_id` <a name="reset_resource_configuration_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId"></a>

```python
def reset_resource_configuration_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput">resource_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration_id_input`<sup>Optional</sup> <a name="resource_configuration_id_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```python
resource_configuration_id_input: str
```

- *Type:* str

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution">reset_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress">reset_host_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni">reset_ipv4_addresses_per_eni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_resolution` <a name="reset_dns_resolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution"></a>

```python
def reset_dns_resolution() -> None
```

##### `reset_host_address` <a name="reset_host_address" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress"></a>

```python
def reset_host_address() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipv4_addresses_per_eni` <a name="reset_ipv4_addresses_per_eni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```python
def reset_ipv4_addresses_per_eni() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput">dns_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput">host_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4_addresses_per_eni_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">host_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4_addresses_per_eni</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_resolution_input`<sup>Optional</sup> <a name="dns_resolution_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput"></a>

```python
dns_resolution_input: str
```

- *Type:* str

---

##### `host_address_input`<sup>Optional</sup> <a name="host_address_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput"></a>

```python
host_address_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipv4_addresses_per_eni_input`<sup>Optional</sup> <a name="ipv4_addresses_per_eni_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```python
ipv4_addresses_per_eni_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput"></a>

```python
port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `dns_resolution`<sup>Required</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

---

##### `host_address`<sup>Required</sup> <a name="host_address" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv4_addresses_per_eni`<sup>Required</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```python
ipv4_addresses_per_eni: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationServiceManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---


### DevopsagentPrivateConnectionTagsList <a name="DevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>]

---


### DevopsagentPrivateConnectionTagsOutputReference <a name="DevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_private_connection

devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentPrivateConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>

---



