# `quicksightRefreshSchedule` Submodule <a name="`quicksightRefreshSchedule` Submodule" id="@cdktn/provider-awscc.quicksightRefreshSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightRefreshSchedule <a name="QuicksightRefreshSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule awscc_quicksight_refresh_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  data_set_id: str = None,
  schedule: QuicksightRefreshScheduleSchedule = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}.

---

##### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.dataSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetDataSetId">reset_data_set_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule"></a>

```python
def put_schedule(
  refresh_type: str = None,
  schedule_frequency: QuicksightRefreshScheduleScheduleScheduleFrequency = None,
  schedule_id: str = None,
  start_after_date_time: str = None
) -> None
```

###### `refresh_type`<sup>Optional</sup> <a name="refresh_type" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.refreshType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}.

---

###### `schedule_frequency`<sup>Optional</sup> <a name="schedule_frequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.scheduleFrequency"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

<p>Information about the schedule frequency.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}

---

###### `schedule_id`<sup>Optional</sup> <a name="schedule_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.scheduleId"></a>

- *Type:* str

<p>An unique identifier for the refresh schedule.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}

---

###### `start_after_date_time`<sup>Optional</sup> <a name="start_after_date_time" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.startAfterDateTime"></a>

- *Type:* str

<p>The date time after which refresh is to be scheduled</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_data_set_id` <a name="reset_data_set_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetDataSetId"></a>

```python
def reset_data_set_id() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule"></a>

```python
def reset_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightRefreshSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightRefreshSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightRefreshSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference">QuicksightRefreshScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput">data_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId">data_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule"></a>

```python
schedule: QuicksightRefreshScheduleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference">QuicksightRefreshScheduleScheduleOutputReference</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `data_set_id_input`<sup>Optional</sup> <a name="data_set_id_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput"></a>

```python
data_set_id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput"></a>

```python
schedule_input: IResolvable | QuicksightRefreshScheduleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightRefreshScheduleConfig <a name="QuicksightRefreshScheduleConfig" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str = None,
  data_set_id: str = None,
  schedule: QuicksightRefreshScheduleSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}.

---

##### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule"></a>

```python
schedule: QuicksightRefreshScheduleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}.

---

### QuicksightRefreshScheduleSchedule <a name="QuicksightRefreshScheduleSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule(
  refresh_type: str = None,
  schedule_frequency: QuicksightRefreshScheduleScheduleScheduleFrequency = None,
  schedule_id: str = None,
  start_after_date_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType">refresh_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency">schedule_frequency</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | <p>Information about the schedule frequency.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleId">schedule_id</a></code> | <code>str</code> | <p>An unique identifier for the refresh schedule.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime">start_after_date_time</a></code> | <code>str</code> | <p>The date time after which refresh is to be scheduled</p>. |

---

##### `refresh_type`<sup>Optional</sup> <a name="refresh_type" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType"></a>

```python
refresh_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}.

---

##### `schedule_frequency`<sup>Optional</sup> <a name="schedule_frequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency"></a>

```python
schedule_frequency: QuicksightRefreshScheduleScheduleScheduleFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

<p>Information about the schedule frequency.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}

---

##### `schedule_id`<sup>Optional</sup> <a name="schedule_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

<p>An unique identifier for the refresh schedule.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}

---

##### `start_after_date_time`<sup>Optional</sup> <a name="start_after_date_time" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime"></a>

```python
start_after_date_time: str
```

- *Type:* str

<p>The date time after which refresh is to be scheduled</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}

---

### QuicksightRefreshScheduleScheduleScheduleFrequency <a name="QuicksightRefreshScheduleScheduleScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency(
  interval: str = None,
  refresh_on_day: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay = None,
  time_of_the_day: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval">interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay">refresh_on_day</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | <p>The day scheduled for refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay">time_of_the_day</a></code> | <code>str</code> | <p>The time of the day for scheduled refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeZone">time_zone</a></code> | <code>str</code> | <p>The timezone for scheduled refresh.</p>. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval"></a>

```python
interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}.

---

##### `refresh_on_day`<sup>Optional</sup> <a name="refresh_on_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay"></a>

```python
refresh_on_day: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

<p>The day scheduled for refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}

---

##### `time_of_the_day`<sup>Optional</sup> <a name="time_of_the_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay"></a>

```python
time_of_the_day: str
```

- *Type:* str

<p>The time of the day for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

<p>The timezone for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#time_zone QuicksightRefreshSchedule#time_zone}

---

### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay(
  day_of_month: str = None,
  day_of_week: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth">day_of_month</a></code> | <code>str</code> | <p>The Day Of Month for scheduled refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}. |

---

##### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth"></a>

```python
day_of_month: str
```

- *Type:* str

<p>The Day Of Month for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightRefreshScheduleScheduleOutputReference <a name="QuicksightRefreshScheduleScheduleOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency">put_schedule_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetRefreshType">reset_refresh_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency">reset_schedule_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleId">reset_schedule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime">reset_start_after_date_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_frequency` <a name="put_schedule_frequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency"></a>

```python
def put_schedule_frequency(
  interval: str = None,
  refresh_on_day: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay = None,
  time_of_the_day: str = None,
  time_zone: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.interval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}.

---

###### `refresh_on_day`<sup>Optional</sup> <a name="refresh_on_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.refreshOnDay"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

<p>The day scheduled for refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}

---

###### `time_of_the_day`<sup>Optional</sup> <a name="time_of_the_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.timeOfTheDay"></a>

- *Type:* str

<p>The time of the day for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.timeZone"></a>

- *Type:* str

<p>The timezone for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#time_zone QuicksightRefreshSchedule#time_zone}

---

##### `reset_refresh_type` <a name="reset_refresh_type" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetRefreshType"></a>

```python
def reset_refresh_type() -> None
```

##### `reset_schedule_frequency` <a name="reset_schedule_frequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency"></a>

```python
def reset_schedule_frequency() -> None
```

##### `reset_schedule_id` <a name="reset_schedule_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleId"></a>

```python
def reset_schedule_id() -> None
```

##### `reset_start_after_date_time` <a name="reset_start_after_date_time" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime"></a>

```python
def reset_start_after_date_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency">schedule_frequency</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput">refresh_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput">schedule_frequency_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleIdInput">schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput">start_after_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType">refresh_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleId">schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime">start_after_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_frequency`<sup>Required</sup> <a name="schedule_frequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency"></a>

```python
schedule_frequency: QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a>

---

##### `refresh_type_input`<sup>Optional</sup> <a name="refresh_type_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput"></a>

```python
refresh_type_input: str
```

- *Type:* str

---

##### `schedule_frequency_input`<sup>Optional</sup> <a name="schedule_frequency_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput"></a>

```python
schedule_frequency_input: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---

##### `schedule_id_input`<sup>Optional</sup> <a name="schedule_id_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleIdInput"></a>

```python
schedule_id_input: str
```

- *Type:* str

---

##### `start_after_date_time_input`<sup>Optional</sup> <a name="start_after_date_time_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput"></a>

```python
start_after_date_time_input: str
```

- *Type:* str

---

##### `refresh_type`<sup>Required</sup> <a name="refresh_type" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType"></a>

```python
refresh_type: str
```

- *Type:* str

---

##### `schedule_id`<sup>Required</sup> <a name="schedule_id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

---

##### `start_after_date_time`<sup>Required</sup> <a name="start_after_date_time" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime"></a>

```python
start_after_date_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightRefreshScheduleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay">put_refresh_on_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay">reset_refresh_on_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay">reset_time_of_the_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_refresh_on_day` <a name="put_refresh_on_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay"></a>

```python
def put_refresh_on_day(
  day_of_month: str = None,
  day_of_week: str = None
) -> None
```

###### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay.parameter.dayOfMonth"></a>

- *Type:* str

<p>The Day Of Month for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}

---

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}.

---

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_refresh_on_day` <a name="reset_refresh_on_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay"></a>

```python
def reset_refresh_on_day() -> None
```

##### `reset_time_of_the_day` <a name="reset_time_of_the_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay"></a>

```python
def reset_time_of_the_day() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay">refresh_on_day</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput">refresh_on_day_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput">time_of_the_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay">time_of_the_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `refresh_on_day`<sup>Required</sup> <a name="refresh_on_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay"></a>

```python
refresh_on_day: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a>

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `refresh_on_day_input`<sup>Optional</sup> <a name="refresh_on_day_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput"></a>

```python
refresh_on_day_input: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---

##### `time_of_the_day_input`<sup>Optional</sup> <a name="time_of_the_day_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput"></a>

```python
time_of_the_day_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `time_of_the_day`<sup>Required</sup> <a name="time_of_the_day" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay"></a>

```python
time_of_the_day: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_refresh_schedule

quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth">reset_day_of_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_month` <a name="reset_day_of_month" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth"></a>

```python
def reset_day_of_month() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput">day_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month_input`<sup>Optional</sup> <a name="day_of_month_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput"></a>

```python
day_of_month_input: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth"></a>

```python
day_of_month: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---



