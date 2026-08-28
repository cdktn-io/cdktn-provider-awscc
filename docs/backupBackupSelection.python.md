# `backupBackupSelection` Submodule <a name="`backupBackupSelection` Submodule" id="@cdktn/provider-awscc.backupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupSelection <a name="BackupBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_plan_id: str,
  backup_selection: BackupBackupSelectionBackupSelection
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupPlanId">backup_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupSelection">backup_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `backup_selection`<sup>Required</sup> <a name="backup_selection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.backupSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection">put_backup_selection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_selection` <a name="put_backup_selection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection"></a>

```python
def put_backup_selection(
  iam_role_arn: str,
  selection_name: str,
  conditions: BackupBackupSelectionBackupSelectionConditions = None,
  list_of_tags: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags] = None,
  not_resources: typing.List[str] = None,
  resources: typing.List[str] = None
) -> None
```

###### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

###### `selection_name`<sup>Required</sup> <a name="selection_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.selectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.conditions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

###### `list_of_tags`<sup>Optional</sup> <a name="list_of_tags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.listOfTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

###### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.notResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.resources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupBackupSelection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection">backup_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId">backup_selection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId">selection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput">backup_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput">backup_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId">backup_plan_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_selection`<sup>Required</sup> <a name="backup_selection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection"></a>

```python
backup_selection: BackupBackupSelectionBackupSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `backup_selection_id`<sup>Required</sup> <a name="backup_selection_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId"></a>

```python
backup_selection_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `selection_id`<sup>Required</sup> <a name="selection_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId"></a>

```python
selection_id: str
```

- *Type:* str

---

##### `backup_plan_id_input`<sup>Optional</sup> <a name="backup_plan_id_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput"></a>

```python
backup_plan_id_input: str
```

- *Type:* str

---

##### `backup_selection_input`<sup>Optional</sup> <a name="backup_selection_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput"></a>

```python
backup_selection_input: IResolvable | BackupBackupSelectionBackupSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId"></a>

```python
backup_plan_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupSelectionBackupSelection <a name="BackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelection(
  iam_role_arn: str,
  selection_name: str,
  conditions: BackupBackupSelectionBackupSelectionConditions = None,
  list_of_tags: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags] = None,
  not_resources: typing.List[str] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName">selection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags">list_of_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}. |

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

##### `selection_name`<sup>Required</sup> <a name="selection_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName"></a>

```python
selection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions"></a>

```python
conditions: BackupBackupSelectionBackupSelectionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

##### `list_of_tags`<sup>Optional</sup> <a name="list_of_tags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags"></a>

```python
list_of_tags: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

### BackupBackupSelectionBackupSelectionConditions <a name="BackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditions(
  string_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals] = None,
  string_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike] = None,
  string_not_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals] = None,
  string_not_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals">string_equals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike">string_like</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals">string_not_equals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike">string_not_like</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}. |

---

##### `string_equals`<sup>Optional</sup> <a name="string_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals"></a>

```python
string_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

##### `string_like`<sup>Optional</sup> <a name="string_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike"></a>

```python
string_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

##### `string_not_equals`<sup>Optional</sup> <a name="string_not_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals"></a>

```python
string_not_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

##### `string_not_like`<sup>Optional</sup> <a name="string_not_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike"></a>

```python
string_not_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

### BackupBackupSelectionBackupSelectionConditionsStringEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals(
  condition_key: str = None,
  condition_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey">condition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue">condition_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `condition_key`<sup>Optional</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `condition_value`<sup>Optional</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringLike <a name="BackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike(
  condition_key: str = None,
  condition_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey">condition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue">condition_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `condition_key`<sup>Optional</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `condition_value`<sup>Optional</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals(
  condition_key: str = None,
  condition_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey">condition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue">condition_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `condition_key`<sup>Optional</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `condition_value`<sup>Optional</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike(
  condition_key: str = None,
  condition_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey">condition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue">condition_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `condition_key`<sup>Optional</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `condition_value`<sup>Optional</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionListOfTags <a name="BackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags(
  condition_key: str = None,
  condition_type: str = None,
  condition_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey">condition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType">condition_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue">condition_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `condition_key`<sup>Optional</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `condition_type`<sup>Optional</sup> <a name="condition_type" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType"></a>

```python
condition_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}.

---

##### `condition_value`<sup>Optional</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionConfig <a name="BackupBackupSelectionConfig" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_plan_id: str,
  backup_selection: BackupBackupSelectionBackupSelection
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId">backup_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection">backup_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId"></a>

```python
backup_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `backup_selection`<sup>Required</sup> <a name="backup_selection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection"></a>

```python
backup_selection: BackupBackupSelectionBackupSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupSelectionBackupSelectionConditionsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals">put_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike">put_string_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals">put_string_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike">put_string_not_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals">reset_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike">reset_string_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals">reset_string_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike">reset_string_not_like</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_string_equals` <a name="put_string_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals"></a>

```python
def put_string_equals(
  value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]

---

##### `put_string_like` <a name="put_string_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike"></a>

```python
def put_string_like(
  value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]

---

##### `put_string_not_equals` <a name="put_string_not_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals"></a>

```python
def put_string_not_equals(
  value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]

---

##### `put_string_not_like` <a name="put_string_not_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike"></a>

```python
def put_string_not_like(
  value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]

---

##### `reset_string_equals` <a name="reset_string_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals"></a>

```python
def reset_string_equals() -> None
```

##### `reset_string_like` <a name="reset_string_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike"></a>

```python
def reset_string_like() -> None
```

##### `reset_string_not_equals` <a name="reset_string_not_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals"></a>

```python
def reset_string_not_equals() -> None
```

##### `reset_string_not_like` <a name="reset_string_not_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike"></a>

```python
def reset_string_not_like() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">string_equals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">string_like</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">string_not_equals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">string_not_like</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput">string_equals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput">string_like_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput">string_not_equals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput">string_not_like_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_equals`<sup>Required</sup> <a name="string_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```python
string_equals: BackupBackupSelectionBackupSelectionConditionsStringEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `string_like`<sup>Required</sup> <a name="string_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```python
string_like: BackupBackupSelectionBackupSelectionConditionsStringLikeList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `string_not_equals`<sup>Required</sup> <a name="string_not_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```python
string_not_equals: BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `string_not_like`<sup>Required</sup> <a name="string_not_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```python
string_not_like: BackupBackupSelectionBackupSelectionConditionsStringNotLikeList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `string_equals_input`<sup>Optional</sup> <a name="string_equals_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput"></a>

```python
string_equals_input: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]

---

##### `string_like_input`<sup>Optional</sup> <a name="string_like_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput"></a>

```python
string_like_input: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]

---

##### `string_not_equals_input`<sup>Optional</sup> <a name="string_not_equals_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput"></a>

```python
string_not_equals_input: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]

---

##### `string_not_like_input`<sup>Optional</sup> <a name="string_not_like_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput"></a>

```python
string_not_like_input: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey">reset_condition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue">reset_condition_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_key` <a name="reset_condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey"></a>

```python
def reset_condition_key() -> None
```

##### `reset_condition_value` <a name="reset_condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue"></a>

```python
def reset_condition_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput">condition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput">condition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">condition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_key_input`<sup>Optional</sup> <a name="condition_key_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput"></a>

```python
condition_key_input: str
```

- *Type:* str

---

##### `condition_value_input`<sup>Optional</sup> <a name="condition_value_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput"></a>

```python
condition_value_input: str
```

- *Type:* str

---

##### `condition_key`<sup>Required</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringEquals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey">reset_condition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue">reset_condition_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_key` <a name="reset_condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey"></a>

```python
def reset_condition_key() -> None
```

##### `reset_condition_value` <a name="reset_condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue"></a>

```python
def reset_condition_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput">condition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput">condition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">condition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_key_input`<sup>Optional</sup> <a name="condition_key_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput"></a>

```python
condition_key_input: str
```

- *Type:* str

---

##### `condition_value_input`<sup>Optional</sup> <a name="condition_value_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput"></a>

```python
condition_value_input: str
```

- *Type:* str

---

##### `condition_key`<sup>Required</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringLike
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey">reset_condition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue">reset_condition_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_key` <a name="reset_condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey"></a>

```python
def reset_condition_key() -> None
```

##### `reset_condition_value` <a name="reset_condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue"></a>

```python
def reset_condition_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput">condition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput">condition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">condition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_key_input`<sup>Optional</sup> <a name="condition_key_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput"></a>

```python
condition_key_input: str
```

- *Type:* str

---

##### `condition_value_input`<sup>Optional</sup> <a name="condition_value_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput"></a>

```python
condition_value_input: str
```

- *Type:* str

---

##### `condition_key`<sup>Required</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotEquals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey">reset_condition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue">reset_condition_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_key` <a name="reset_condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey"></a>

```python
def reset_condition_key() -> None
```

##### `reset_condition_value` <a name="reset_condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue"></a>

```python
def reset_condition_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput">condition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput">condition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">condition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_key_input`<sup>Optional</sup> <a name="condition_key_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput"></a>

```python
condition_key_input: str
```

- *Type:* str

---

##### `condition_value_input`<sup>Optional</sup> <a name="condition_value_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput"></a>

```python
condition_value_input: str
```

- *Type:* str

---

##### `condition_key`<sup>Required</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionConditionsStringNotLike
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>

---


### BackupBackupSelectionBackupSelectionListOfTagsList <a name="BackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupSelectionBackupSelectionListOfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]

---


### BackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="BackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey">reset_condition_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType">reset_condition_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue">reset_condition_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_key` <a name="reset_condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey"></a>

```python
def reset_condition_key() -> None
```

##### `reset_condition_type` <a name="reset_condition_type" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType"></a>

```python
def reset_condition_type() -> None
```

##### `reset_condition_value` <a name="reset_condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue"></a>

```python
def reset_condition_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput">condition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput">condition_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput">condition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">condition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">condition_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_key_input`<sup>Optional</sup> <a name="condition_key_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput"></a>

```python
condition_key_input: str
```

- *Type:* str

---

##### `condition_type_input`<sup>Optional</sup> <a name="condition_type_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput"></a>

```python
condition_type_input: str
```

- *Type:* str

---

##### `condition_value_input`<sup>Optional</sup> <a name="condition_value_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput"></a>

```python
condition_value_input: str
```

- *Type:* str

---

##### `condition_key`<sup>Required</sup> <a name="condition_key" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```python
condition_key: str
```

- *Type:* str

---

##### `condition_type`<sup>Required</sup> <a name="condition_type" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```python
condition_type: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelectionListOfTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>

---


### BackupBackupSelectionBackupSelectionOutputReference <a name="BackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_selection

backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags">put_list_of_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags">reset_list_of_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions"></a>

```python
def put_conditions(
  string_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringEquals] = None,
  string_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringLike] = None,
  string_not_equals: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotEquals] = None,
  string_not_like: IResolvable | typing.List[BackupBackupSelectionBackupSelectionConditionsStringNotLike] = None
) -> None
```

###### `string_equals`<sup>Optional</sup> <a name="string_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.stringEquals"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals">BackupBackupSelectionBackupSelectionConditionsStringEquals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

###### `string_like`<sup>Optional</sup> <a name="string_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.stringLike"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike">BackupBackupSelectionBackupSelectionConditionsStringLike</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

###### `string_not_equals`<sup>Optional</sup> <a name="string_not_equals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.stringNotEquals"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals">BackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

###### `string_not_like`<sup>Optional</sup> <a name="string_not_like" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.stringNotLike"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike">BackupBackupSelectionBackupSelectionConditionsStringNotLike</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

##### `put_list_of_tags` <a name="put_list_of_tags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags"></a>

```python
def put_list_of_tags(
  value: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_list_of_tags` <a name="reset_list_of_tags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags"></a>

```python
def reset_list_of_tags() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">list_of_tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput">list_of_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput">selection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName">selection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```python
conditions: BackupBackupSelectionBackupSelectionConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `list_of_tags`<sup>Required</sup> <a name="list_of_tags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```python
list_of_tags: BackupBackupSelectionBackupSelectionListOfTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | BackupBackupSelectionBackupSelectionConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `list_of_tags_input`<sup>Optional</sup> <a name="list_of_tags_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput"></a>

```python
list_of_tags_input: IResolvable | typing.List[BackupBackupSelectionBackupSelectionListOfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags">BackupBackupSelectionBackupSelectionListOfTags</a>]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selection_name_input`<sup>Optional</sup> <a name="selection_name_input" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput"></a>

```python
selection_name_input: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selection_name`<sup>Required</sup> <a name="selection_name" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```python
selection_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupSelectionBackupSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---



