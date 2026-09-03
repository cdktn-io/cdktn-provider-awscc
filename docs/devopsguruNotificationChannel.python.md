# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: DevopsguruNotificationChannelConfigA
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | Information about notification channels you have configured with DevOps Guru. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

Information about notification channels you have configured with DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#config DevopsguruNotificationChannel#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig">put_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig"></a>

```python
def put_config(
  filters: DevopsguruNotificationChannelConfigFilters = None,
  sns: DevopsguruNotificationChannelConfigSns = None
) -> None
```

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig.parameter.filters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

Information about filters of a notification channel configured in DevOpsGuru to filter for insights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

###### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig.parameter.sns"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

Information about a notification channel configured in DevOps Guru to send notifications when insights are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId">notification_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config"></a>

```python
config: DevopsguruNotificationChannelConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_channel_id`<sup>Required</sup> <a name="notification_channel_id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId"></a>

```python
notification_channel_id: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput"></a>

```python
config_input: IResolvable | DevopsguruNotificationChannelConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: DevopsguruNotificationChannelConfigA
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | Information about notification channels you have configured with DevOps Guru. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config"></a>

```python
config: DevopsguruNotificationChannelConfigA
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

Information about notification channels you have configured with DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#config DevopsguruNotificationChannel#config}

---

### DevopsguruNotificationChannelConfigA <a name="DevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA(
  filters: DevopsguruNotificationChannelConfigFilters = None,
  sns: DevopsguruNotificationChannelConfigSns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | Information about filters of a notification channel configured in DevOpsGuru to filter for insights. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | Information about a notification channel configured in DevOps Guru to send notifications when insights are created. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters"></a>

```python
filters: DevopsguruNotificationChannelConfigFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

Information about filters of a notification channel configured in DevOpsGuru to filter for insights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns"></a>

```python
sns: DevopsguruNotificationChannelConfigSns
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

Information about a notification channel configured in DevOps Guru to send notifications when insights are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelConfigFilters <a name="DevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters(
  message_types: typing.List[str] = None,
  severities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | DevOps Guru message types to filter for. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities">severities</a></code> | <code>typing.List[str]</code> | DevOps Guru insight severities to filter for. |

---

##### `message_types`<sup>Optional</sup> <a name="message_types" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

DevOps Guru message types to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

DevOps Guru insight severities to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}

---

### DevopsguruNotificationChannelConfigSns <a name="DevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns(
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelConfigAOutputReference <a name="DevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns">put_sns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns">reset_sns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters"></a>

```python
def put_filters(
  message_types: typing.List[str] = None,
  severities: typing.List[str] = None
) -> None
```

###### `message_types`<sup>Optional</sup> <a name="message_types" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters.parameter.messageTypes"></a>

- *Type:* typing.List[str]

DevOps Guru message types to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}

---

###### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters.parameter.severities"></a>

- *Type:* typing.List[str]

DevOps Guru insight severities to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}

---

##### `put_sns` <a name="put_sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns"></a>

```python
def put_sns(
  topic_arn: str = None
) -> None
```

###### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns.parameter.topicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_sns` <a name="reset_sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns"></a>

```python
def reset_sns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput">sns_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```python
filters: DevopsguruNotificationChannelConfigFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```python
sns: DevopsguruNotificationChannelConfigSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | DevopsguruNotificationChannelConfigFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `sns_input`<sup>Optional</sup> <a name="sns_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput"></a>

```python
sns_input: IResolvable | DevopsguruNotificationChannelConfigSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruNotificationChannelConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---


### DevopsguruNotificationChannelConfigFiltersOutputReference <a name="DevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes">reset_message_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities">reset_severities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_types` <a name="reset_message_types" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes"></a>

```python
def reset_message_types() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities"></a>

```python
def reset_severities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput">message_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_types_input`<sup>Optional</sup> <a name="message_types_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput"></a>

```python
message_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `message_types`<sup>Required</sup> <a name="message_types" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruNotificationChannelConfigFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---


### DevopsguruNotificationChannelConfigSnsOutputReference <a name="DevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_notification_channel

devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruNotificationChannelConfigSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---



