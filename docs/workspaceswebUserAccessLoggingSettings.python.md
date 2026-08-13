# `workspaceswebUserAccessLoggingSettings` Submodule <a name="`workspaceswebUserAccessLoggingSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserAccessLoggingSettings <a name="WorkspaceswebUserAccessLoggingSettings" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings awscc_workspacesweb_user_access_logging_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kinesis_stream_arn: str,
  tags: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | Kinesis stream ARN to which log events are published. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.kinesisStreamArn"></a>

- *Type:* str

Kinesis stream ARN to which log events are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebUserAccessLoggingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList">WorkspaceswebUserAccessLoggingSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput">kinesis_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags"></a>

```python
tags: WorkspaceswebUserAccessLoggingSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList">WorkspaceswebUserAccessLoggingSettingsTagsList</a>

---

##### `user_access_logging_settings_arn`<sup>Required</sup> <a name="user_access_logging_settings_arn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

---

##### `kinesis_stream_arn_input`<sup>Optional</sup> <a name="kinesis_stream_arn_input" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput"></a>

```python
kinesis_stream_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn"></a>

```python
kinesis_stream_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserAccessLoggingSettingsConfig <a name="WorkspaceswebUserAccessLoggingSettingsConfig" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kinesis_stream_arn: str,
  tags: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | Kinesis stream ARN to which log events are published. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn"></a>

```python
kinesis_stream_arn: str
```

- *Type:* str

Kinesis stream ARN to which log events are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}.

---

### WorkspaceswebUserAccessLoggingSettingsTags <a name="WorkspaceswebUserAccessLoggingSettingsTags" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#key WorkspaceswebUserAccessLoggingSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#value WorkspaceswebUserAccessLoggingSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#key WorkspaceswebUserAccessLoggingSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_access_logging_settings#value WorkspaceswebUserAccessLoggingSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebUserAccessLoggingSettingsTagsList <a name="WorkspaceswebUserAccessLoggingSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebUserAccessLoggingSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebUserAccessLoggingSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>]

---


### WorkspaceswebUserAccessLoggingSettingsTagsOutputReference <a name="WorkspaceswebUserAccessLoggingSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserAccessLoggingSettingsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsTags">WorkspaceswebUserAccessLoggingSettingsTags</a>

---



