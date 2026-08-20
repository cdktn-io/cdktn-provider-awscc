# `backupLegalHold` Submodule <a name="`backupLegalHold` Submodule" id="@cdktn/provider-awscc.backupLegalHold"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLegalHold <a name="BackupLegalHold" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold awscc_backup_legal_hold}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHold(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  recovery_point_selection: BackupLegalHoldRecoveryPointSelection,
  title: str,
  tags: IResolvable | typing.List[BackupLegalHoldTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.recoveryPointSelection">recovery_point_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]</code> | Optional tags to include. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.description"></a>

- *Type:* str

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `recovery_point_selection`<sup>Required</sup> <a name="recovery_point_selection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.recoveryPointSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.title"></a>

- *Type:* str

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection">put_recovery_point_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recovery_point_selection` <a name="put_recovery_point_selection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection"></a>

```python
def put_recovery_point_selection(
  date_range: BackupLegalHoldRecoveryPointSelectionDateRange = None,
  resource_identifiers: typing.List[str] = None,
  vault_names: typing.List[str] = None
) -> None
```

###### `date_range`<sup>Optional</sup> <a name="date_range" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.dateRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

A date range for filtering recovery points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#date_range BackupLegalHold#date_range}

---

###### `resource_identifiers`<sup>Optional</sup> <a name="resource_identifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.resourceIdentifiers"></a>

- *Type:* typing.List[str]

The resources included in the resource selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#resource_identifiers BackupLegalHold#resource_identifiers}

---

###### `vault_names`<sup>Optional</sup> <a name="vault_names" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putRecoveryPointSelection.parameter.vaultNames"></a>

- *Type:* typing.List[str]

The names of the vaults in which the selected recovery points are contained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#vault_names BackupLegalHold#vault_names}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BackupLegalHoldTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHold.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHold.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHold.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHold.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupLegalHold resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupLegalHold to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupLegalHold that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupLegalHold to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId">legal_hold_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection">recovery_point_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput">recovery_point_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `legal_hold_id`<sup>Required</sup> <a name="legal_hold_id" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.legalHoldId"></a>

```python
legal_hold_id: str
```

- *Type:* str

---

##### `recovery_point_selection`<sup>Required</sup> <a name="recovery_point_selection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelection"></a>

```python
recovery_point_selection: BackupLegalHoldRecoveryPointSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference">BackupLegalHoldRecoveryPointSelectionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tags"></a>

```python
tags: BackupLegalHoldTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList">BackupLegalHoldTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `recovery_point_selection_input`<sup>Optional</sup> <a name="recovery_point_selection_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.recoveryPointSelectionInput"></a>

```python
recovery_point_selection_input: IResolvable | BackupLegalHoldRecoveryPointSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BackupLegalHoldTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHold.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLegalHoldConfig <a name="BackupLegalHoldConfig" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  recovery_point_selection: BackupLegalHoldRecoveryPointSelection,
  title: str,
  tags: IResolvable | typing.List[BackupLegalHoldTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description">description</a></code> | <code>str</code> | The description of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection">recovery_point_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | The criteria to assign a set of resources, such as resource types or backup vaults. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title">title</a></code> | <code>str</code> | The title of the legal hold. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]</code> | Optional tags to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#description BackupLegalHold#description}

---

##### `recovery_point_selection`<sup>Required</sup> <a name="recovery_point_selection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.recoveryPointSelection"></a>

```python
recovery_point_selection: BackupLegalHoldRecoveryPointSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

The criteria to assign a set of resources, such as resource types or backup vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#recovery_point_selection BackupLegalHold#recovery_point_selection}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the legal hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#title BackupLegalHold#title}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BackupLegalHoldTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]

Optional tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#tags BackupLegalHold#tags}

---

### BackupLegalHoldRecoveryPointSelection <a name="BackupLegalHoldRecoveryPointSelection" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldRecoveryPointSelection(
  date_range: BackupLegalHoldRecoveryPointSelectionDateRange = None,
  resource_identifiers: typing.List[str] = None,
  vault_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange">date_range</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | A date range for filtering recovery points. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers">resource_identifiers</a></code> | <code>typing.List[str]</code> | The resources included in the resource selection. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames">vault_names</a></code> | <code>typing.List[str]</code> | The names of the vaults in which the selected recovery points are contained. |

---

##### `date_range`<sup>Optional</sup> <a name="date_range" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.dateRange"></a>

```python
date_range: BackupLegalHoldRecoveryPointSelectionDateRange
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

A date range for filtering recovery points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#date_range BackupLegalHold#date_range}

---

##### `resource_identifiers`<sup>Optional</sup> <a name="resource_identifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.resourceIdentifiers"></a>

```python
resource_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

The resources included in the resource selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#resource_identifiers BackupLegalHold#resource_identifiers}

---

##### `vault_names`<sup>Optional</sup> <a name="vault_names" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection.property.vaultNames"></a>

```python
vault_names: typing.List[str]
```

- *Type:* typing.List[str]

The names of the vaults in which the selected recovery points are contained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#vault_names BackupLegalHold#vault_names}

---

### BackupLegalHoldRecoveryPointSelectionDateRange <a name="BackupLegalHoldRecoveryPointSelectionDateRange" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange(
  from_date: str = None,
  to_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate">from_date</a></code> | <code>str</code> | The beginning date, inclusive. ISO 8601 date-time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate">to_date</a></code> | <code>str</code> | The end date, inclusive. ISO 8601 date-time. |

---

##### `from_date`<sup>Optional</sup> <a name="from_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.fromDate"></a>

```python
from_date: str
```

- *Type:* str

The beginning date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#from_date BackupLegalHold#from_date}

---

##### `to_date`<sup>Optional</sup> <a name="to_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange.property.toDate"></a>

```python
to_date: str
```

- *Type:* str

The end date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#to_date BackupLegalHold#to_date}

---

### BackupLegalHoldTags <a name="BackupLegalHoldTags" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#key BackupLegalHold#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#value BackupLegalHold#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference <a name="BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate">reset_from_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate">reset_to_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_date` <a name="reset_from_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetFromDate"></a>

```python
def reset_from_date() -> None
```

##### `reset_to_date` <a name="reset_to_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resetToDate"></a>

```python
def reset_to_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput">from_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput">to_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate">from_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate">to_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_date_input`<sup>Optional</sup> <a name="from_date_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDateInput"></a>

```python
from_date_input: str
```

- *Type:* str

---

##### `to_date_input`<sup>Optional</sup> <a name="to_date_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDateInput"></a>

```python
to_date_input: str
```

- *Type:* str

---

##### `from_date`<sup>Required</sup> <a name="from_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate"></a>

```python
from_date: str
```

- *Type:* str

---

##### `to_date`<sup>Required</sup> <a name="to_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate"></a>

```python
to_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupLegalHoldRecoveryPointSelectionDateRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---


### BackupLegalHoldRecoveryPointSelectionOutputReference <a name="BackupLegalHoldRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange">put_date_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange">reset_date_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers">reset_resource_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames">reset_vault_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_range` <a name="put_date_range" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange"></a>

```python
def put_date_range(
  from_date: str = None,
  to_date: str = None
) -> None
```

###### `from_date`<sup>Optional</sup> <a name="from_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange.parameter.fromDate"></a>

- *Type:* str

The beginning date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#from_date BackupLegalHold#from_date}

---

###### `to_date`<sup>Optional</sup> <a name="to_date" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.putDateRange.parameter.toDate"></a>

- *Type:* str

The end date, inclusive. ISO 8601 date-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_legal_hold#to_date BackupLegalHold#to_date}

---

##### `reset_date_range` <a name="reset_date_range" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetDateRange"></a>

```python
def reset_date_range() -> None
```

##### `reset_resource_identifiers` <a name="reset_resource_identifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetResourceIdentifiers"></a>

```python
def reset_resource_identifiers() -> None
```

##### `reset_vault_names` <a name="reset_vault_names" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.resetVaultNames"></a>

```python
def reset_vault_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange">date_range</a></code> | <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput">date_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput">resource_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput">vault_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers">resource_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames">vault_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range`<sup>Required</sup> <a name="date_range" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange"></a>

```python
date_range: BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">BackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a>

---

##### `date_range_input`<sup>Optional</sup> <a name="date_range_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRangeInput"></a>

```python
date_range_input: IResolvable | BackupLegalHoldRecoveryPointSelectionDateRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionDateRange">BackupLegalHoldRecoveryPointSelectionDateRange</a>

---

##### `resource_identifiers_input`<sup>Optional</sup> <a name="resource_identifiers_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiersInput"></a>

```python
resource_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vault_names_input`<sup>Optional</sup> <a name="vault_names_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNamesInput"></a>

```python
vault_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_identifiers`<sup>Required</sup> <a name="resource_identifiers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers"></a>

```python
resource_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vault_names`<sup>Required</sup> <a name="vault_names" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames"></a>

```python
vault_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupLegalHoldRecoveryPointSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldRecoveryPointSelection">BackupLegalHoldRecoveryPointSelection</a>

---


### BackupLegalHoldTagsList <a name="BackupLegalHoldTagsList" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupLegalHoldTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupLegalHoldTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>]

---


### BackupLegalHoldTagsOutputReference <a name="BackupLegalHoldTagsOutputReference" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_legal_hold

backupLegalHold.BackupLegalHoldTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupLegalHoldTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupLegalHold.BackupLegalHoldTags">BackupLegalHoldTags</a>

---



