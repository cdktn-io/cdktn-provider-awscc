# `securityagentPrivateConnection` Submodule <a name="`securityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.securityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentPrivateConnection <a name="SecurityagentPrivateConnection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  private_connection_name: str,
  certificate: str = None,
  mode: SecurityagentPrivateConnectionMode = None,
  tags: IResolvable | typing.List[SecurityagentPrivateConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.privateConnectionName">private_connection_name</a></code> | <code>str</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]</code> | The tags attached to the private connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.privateConnectionName"></a>

- *Type:* str

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.certificate"></a>

- *Type:* str

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.mode"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode">put_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mode` <a name="put_mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode"></a>

```python
def put_mode(
  self_managed: SecurityagentPrivateConnectionModeSelfManaged = None,
  service_managed: SecurityagentPrivateConnectionModeServiceManaged = None
) -> None
```

###### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

###### `service_managed`<sup>Optional</sup> <a name="service_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.serviceManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SecurityagentPrivateConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityagentPrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime">certificate_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress">host_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId">resource_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput">mode_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput">private_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_expiry_time`<sup>Required</sup> <a name="certificate_expiry_time" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```python
certificate_expiry_time: str
```

- *Type:* str

---

##### `dns_resolution`<sup>Required</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

---

##### `host_address`<sup>Required</sup> <a name="host_address" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode"></a>

```python
mode: SecurityagentPrivateConnectionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a>

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `resource_gateway_id`<sup>Required</sup> <a name="resource_gateway_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId"></a>

```python
resource_gateway_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags"></a>

```python
tags: SecurityagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput"></a>

```python
mode_input: IResolvable | SecurityagentPrivateConnectionMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `private_connection_name_input`<sup>Optional</sup> <a name="private_connection_name_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput"></a>

```python
private_connection_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SecurityagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentPrivateConnectionConfig <a name="SecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  private_connection_name: str,
  certificate: str = None,
  mode: SecurityagentPrivateConnectionMode = None,
  tags: IResolvable | typing.List[SecurityagentPrivateConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>str</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]</code> | The tags attached to the private connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode"></a>

```python
mode: SecurityagentPrivateConnectionMode
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SecurityagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

### SecurityagentPrivateConnectionMode <a name="SecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionMode(
  self_managed: SecurityagentPrivateConnectionModeSelfManaged = None,
  service_managed: SecurityagentPrivateConnectionModeServiceManaged = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | The configuration for a self-managed private connection, where you manage your own resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged">service_managed</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle. |

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged"></a>

```python
self_managed: SecurityagentPrivateConnectionModeSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

##### `service_managed`<sup>Optional</sup> <a name="service_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged"></a>

```python
service_managed: SecurityagentPrivateConnectionModeServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

### SecurityagentPrivateConnectionModeSelfManaged <a name="SecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged(
  resource_configuration_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | The identifier or ARN of the resource configuration. |

---

##### `resource_configuration_id`<sup>Optional</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

### SecurityagentPrivateConnectionModeServiceManaged <a name="SecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged(
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
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | The DNS resolution mode for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress">host_address</a></code> | <code>str</code> | The IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type of the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni">ipv4_addresses_per_eni</a></code> | <code>typing.Union[int, float]</code> | The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | The TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The security groups to attach to the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The subnets that the service-managed resource gateway spans. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId">vpc_id</a></code> | <code>str</code> | The VPC to create the service-managed resource gateway in. |

---

##### `dns_resolution`<sup>Optional</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

##### `host_address`<sup>Optional</sup> <a name="host_address" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

##### `ipv4_addresses_per_eni`<sup>Optional</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni"></a>

```python
ipv4_addresses_per_eni: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

### SecurityagentPrivateConnectionTags <a name="SecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#key SecurityagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#value SecurityagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentPrivateConnectionModeOutputReference <a name="SecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged">put_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged">put_service_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged">reset_service_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_self_managed` <a name="put_self_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged"></a>

```python
def put_self_managed(
  resource_configuration_id: str = None
) -> None
```

###### `resource_configuration_id`<sup>Optional</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged.parameter.resourceConfigurationId"></a>

- *Type:* str

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

##### `put_service_managed` <a name="put_service_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged"></a>

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

###### `dns_resolution`<sup>Optional</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.dnsResolution"></a>

- *Type:* str

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

###### `host_address`<sup>Optional</sup> <a name="host_address" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.hostAddress"></a>

- *Type:* str

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.ipAddressType"></a>

- *Type:* str

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

###### `ipv4_addresses_per_eni`<sup>Optional</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.ipv4AddressesPerEni"></a>

- *Type:* typing.Union[int, float]

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.portRanges"></a>

- *Type:* typing.List[str]

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.vpcId"></a>

- *Type:* str

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_service_managed` <a name="reset_service_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged"></a>

```python
def reset_service_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">service_managed</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput">self_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput">service_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```python
self_managed: SecurityagentPrivateConnectionModeSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `service_managed`<sup>Required</sup> <a name="service_managed" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```python
service_managed: SecurityagentPrivateConnectionModeServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput"></a>

```python
self_managed_input: IResolvable | SecurityagentPrivateConnectionModeSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `service_managed_input`<sup>Optional</sup> <a name="service_managed_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput"></a>

```python
service_managed_input: IResolvable | SecurityagentPrivateConnectionModeServiceManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentPrivateConnectionMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---


### SecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="SecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId">reset_resource_configuration_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_configuration_id` <a name="reset_resource_configuration_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId"></a>

```python
def reset_resource_configuration_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput">resource_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration_id_input`<sup>Optional</sup> <a name="resource_configuration_id_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```python
resource_configuration_id_input: str
```

- *Type:* str

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentPrivateConnectionModeSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---


### SecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="SecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution">reset_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress">reset_host_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni">reset_ipv4_addresses_per_eni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_resolution` <a name="reset_dns_resolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution"></a>

```python
def reset_dns_resolution() -> None
```

##### `reset_host_address` <a name="reset_host_address" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress"></a>

```python
def reset_host_address() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipv4_addresses_per_eni` <a name="reset_ipv4_addresses_per_eni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```python
def reset_ipv4_addresses_per_eni() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput">dns_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput">host_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4_addresses_per_eni_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">host_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4_addresses_per_eni</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_resolution_input`<sup>Optional</sup> <a name="dns_resolution_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput"></a>

```python
dns_resolution_input: str
```

- *Type:* str

---

##### `host_address_input`<sup>Optional</sup> <a name="host_address_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput"></a>

```python
host_address_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipv4_addresses_per_eni_input`<sup>Optional</sup> <a name="ipv4_addresses_per_eni_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```python
ipv4_addresses_per_eni_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput"></a>

```python
port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `dns_resolution`<sup>Required</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

---

##### `host_address`<sup>Required</sup> <a name="host_address" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv4_addresses_per_eni`<sup>Required</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```python
ipv4_addresses_per_eni: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentPrivateConnectionModeServiceManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---


### SecurityagentPrivateConnectionTagsList <a name="SecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityagentPrivateConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>]

---


### SecurityagentPrivateConnectionTagsOutputReference <a name="SecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_private_connection

securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentPrivateConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>

---



