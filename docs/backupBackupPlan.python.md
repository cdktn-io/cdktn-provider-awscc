# `backupBackupPlan` Submodule <a name="`backupBackupPlan` Submodule" id="@cdktn/provider-awscc.backupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupPlan <a name="BackupBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_plan: BackupBackupPlanBackupPlan,
  backup_plan_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlan">backup_plan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlanTags">backup_plan_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `backup_plan_tags`<sup>Optional</sup> <a name="backup_plan_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.backupPlanTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan">put_backup_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags">reset_backup_plan_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_plan` <a name="put_backup_plan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan"></a>

```python
def put_backup_plan(
  backup_plan_name: str,
  backup_plan_rule: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule],
  advanced_backup_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings] = None,
  scan_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings] = None
) -> None
```

###### `backup_plan_name`<sup>Required</sup> <a name="backup_plan_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.backupPlanName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

###### `backup_plan_rule`<sup>Required</sup> <a name="backup_plan_rule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.backupPlanRule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

###### `advanced_backup_settings`<sup>Optional</sup> <a name="advanced_backup_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.advancedBackupSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

###### `scan_settings`<sup>Optional</sup> <a name="scan_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.scanSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

##### `reset_backup_plan_tags` <a name="reset_backup_plan_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags"></a>

```python
def reset_backup_plan_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupBackupPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan">backup_plan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn">backup_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId">backup_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput">backup_plan_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput">backup_plan_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags">backup_plan_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan"></a>

```python
backup_plan: BackupBackupPlanBackupPlanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a>

---

##### `backup_plan_arn`<sup>Required</sup> <a name="backup_plan_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn"></a>

```python
backup_plan_arn: str
```

- *Type:* str

---

##### `backup_plan_id`<sup>Required</sup> <a name="backup_plan_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId"></a>

```python
backup_plan_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `backup_plan_input`<sup>Optional</sup> <a name="backup_plan_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput"></a>

```python
backup_plan_input: IResolvable | BackupBackupPlanBackupPlan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `backup_plan_tags_input`<sup>Optional</sup> <a name="backup_plan_tags_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput"></a>

```python
backup_plan_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_plan_tags`<sup>Required</sup> <a name="backup_plan_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags"></a>

```python
backup_plan_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupPlanBackupPlan <a name="BackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlan(
  backup_plan_name: str,
  backup_plan_rule: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule],
  advanced_backup_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings] = None,
  scan_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName">backup_plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule">backup_plan_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings">advanced_backup_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings">scan_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}. |

---

##### `backup_plan_name`<sup>Required</sup> <a name="backup_plan_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName"></a>

```python
backup_plan_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

##### `backup_plan_rule`<sup>Required</sup> <a name="backup_plan_rule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule"></a>

```python
backup_plan_rule: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

##### `advanced_backup_settings`<sup>Optional</sup> <a name="advanced_backup_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings"></a>

```python
advanced_backup_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

##### `scan_settings`<sup>Optional</sup> <a name="scan_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings"></a>

```python
scan_settings: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

### BackupBackupPlanBackupPlanAdvancedBackupSettings <a name="BackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings(
  backup_options: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions">backup_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}. |

---

##### `backup_options`<sup>Optional</sup> <a name="backup_options" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions"></a>

```python
backup_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}.

---

### BackupBackupPlanBackupPlanBackupPlanRule <a name="BackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule(
  rule_name: str,
  target_backup_vault: str,
  completion_window_minutes: typing.Union[int, float] = None,
  copy_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleCopyActions] = None,
  enable_continuous_backup: bool | IResolvable = None,
  index_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleIndexActions] = None,
  lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle = None,
  recovery_point_tags: typing.Mapping[str] = None,
  scan_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleScanActions] = None,
  schedule_expression: str = None,
  schedule_expression_timezone: str = None,
  start_window_minutes: typing.Union[int, float] = None,
  target_logically_air_gapped_backup_vault_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault">target_backup_vault</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes">completion_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions">copy_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup">enable_continuous_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions">index_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags">recovery_point_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions">scan_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes">start_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">target_logically_air_gapped_backup_vault_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}.

---

##### `target_backup_vault`<sup>Required</sup> <a name="target_backup_vault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault"></a>

```python
target_backup_vault: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}.

---

##### `completion_window_minutes`<sup>Optional</sup> <a name="completion_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes"></a>

```python
completion_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}.

---

##### `copy_actions`<sup>Optional</sup> <a name="copy_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions"></a>

```python
copy_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleCopyActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}.

---

##### `enable_continuous_backup`<sup>Optional</sup> <a name="enable_continuous_backup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup"></a>

```python
enable_continuous_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}.

---

##### `index_actions`<sup>Optional</sup> <a name="index_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions"></a>

```python
index_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleIndexActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle"></a>

```python
lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

##### `recovery_point_tags`<sup>Optional</sup> <a name="recovery_point_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags"></a>

```python
recovery_point_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}.

---

##### `scan_actions`<sup>Optional</sup> <a name="scan_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions"></a>

```python
scan_actions: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleScanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}.

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}.

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}.

---

##### `start_window_minutes`<sup>Optional</sup> <a name="start_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes"></a>

```python
start_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}.

---

##### `target_logically_air_gapped_backup_vault_arn`<sup>Optional</sup> <a name="target_logically_air_gapped_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```python
target_logically_air_gapped_backup_vault_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions(
  destination_backup_vault_arn: str = None,
  lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn">destination_backup_vault_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |

---

##### `destination_backup_vault_arn`<sup>Optional</sup> <a name="destination_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn"></a>

```python
destination_backup_vault_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}.

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle"></a>

```python
lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle(
  delete_after_days: typing.Union[int, float] = None,
  move_to_cold_storage_after_days: typing.Union[int, float] = None,
  opt_in_to_archive_for_supported_resources: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays">move_to_cold_storage_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources">opt_in_to_archive_for_supported_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `move_to_cold_storage_after_days`<sup>Optional</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays"></a>

```python
move_to_cold_storage_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `opt_in_to_archive_for_supported_resources`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources"></a>

```python
opt_in_to_archive_for_supported_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions(
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle(
  delete_after_days: typing.Union[int, float] = None,
  move_to_cold_storage_after_days: typing.Union[int, float] = None,
  opt_in_to_archive_for_supported_resources: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays">move_to_cold_storage_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">opt_in_to_archive_for_supported_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `move_to_cold_storage_after_days`<sup>Optional</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays"></a>

```python
move_to_cold_storage_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `opt_in_to_archive_for_supported_resources`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```python
opt_in_to_archive_for_supported_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions(
  malware_scanner: str = None,
  scan_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner">malware_scanner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode">scan_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}. |

---

##### `malware_scanner`<sup>Optional</sup> <a name="malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner"></a>

```python
malware_scanner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `scan_mode`<sup>Optional</sup> <a name="scan_mode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}.

---

### BackupBackupPlanBackupPlanScanSettings <a name="BackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanScanSettings(
  malware_scanner: str = None,
  resource_types: typing.List[str] = None,
  scanner_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner">malware_scanner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn">scanner_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}. |

---

##### `malware_scanner`<sup>Optional</sup> <a name="malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner"></a>

```python
malware_scanner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

##### `scanner_role_arn`<sup>Optional</sup> <a name="scanner_role_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn"></a>

```python
scanner_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}.

---

### BackupBackupPlanConfig <a name="BackupBackupPlanConfig" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_plan: BackupBackupPlanBackupPlan,
  backup_plan_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan">backup_plan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags">backup_plan_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan"></a>

```python
backup_plan: BackupBackupPlanBackupPlan
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `backup_plan_tags`<sup>Optional</sup> <a name="backup_plan_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags"></a>

```python
backup_plan_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]

---


### BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions">reset_backup_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_options` <a name="reset_backup_options" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions"></a>

```python
def reset_backup_options() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput">backup_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">backup_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_options_input`<sup>Optional</sup> <a name="backup_options_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput"></a>

```python
backup_options_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `backup_options`<sup>Required</sup> <a name="backup_options" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```python
backup_options: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanAdvancedBackupSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays">reset_delete_after_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays">reset_move_to_cold_storage_after_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources">reset_opt_in_to_archive_for_supported_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_after_days` <a name="reset_delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays"></a>

```python
def reset_delete_after_days() -> None
```

##### `reset_move_to_cold_storage_after_days` <a name="reset_move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```python
def reset_move_to_cold_storage_after_days() -> None
```

##### `reset_opt_in_to_archive_for_supported_resources` <a name="reset_opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```python
def reset_opt_in_to_archive_for_supported_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput">delete_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">move_to_cold_storage_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">opt_in_to_archive_for_supported_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">move_to_cold_storage_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">opt_in_to_archive_for_supported_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_after_days_input`<sup>Optional</sup> <a name="delete_after_days_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```python
delete_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `move_to_cold_storage_after_days_input`<sup>Optional</sup> <a name="move_to_cold_storage_after_days_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```python
move_to_cold_storage_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opt_in_to_archive_for_supported_resources_input`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```python
opt_in_to_archive_for_supported_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_after_days`<sup>Required</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `move_to_cold_storage_after_days`<sup>Required</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```python
move_to_cold_storage_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opt_in_to_archive_for_supported_resources`<sup>Required</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```python
opt_in_to_archive_for_supported_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleCopyActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle">put_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn">reset_destination_backup_vault_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle">reset_lifecycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lifecycle` <a name="put_lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle"></a>

```python
def put_lifecycle(
  delete_after_days: typing.Union[int, float] = None,
  move_to_cold_storage_after_days: typing.Union[int, float] = None,
  opt_in_to_archive_for_supported_resources: bool | IResolvable = None
) -> None
```

###### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.deleteAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

###### `move_to_cold_storage_after_days`<sup>Optional</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.moveToColdStorageAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

###### `opt_in_to_archive_for_supported_resources`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.optInToArchiveForSupportedResources"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

##### `reset_destination_backup_vault_arn` <a name="reset_destination_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn"></a>

```python
def reset_destination_backup_vault_arn() -> None
```

##### `reset_lifecycle` <a name="reset_lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle"></a>

```python
def reset_lifecycle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput">destination_backup_vault_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput">lifecycle_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">destination_backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```python
lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `destination_backup_vault_arn_input`<sup>Optional</sup> <a name="destination_backup_vault_arn_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput"></a>

```python
destination_backup_vault_arn_input: str
```

- *Type:* str

---

##### `lifecycle_input`<sup>Optional</sup> <a name="lifecycle_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput"></a>

```python
lifecycle_input: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `destination_backup_vault_arn`<sup>Required</sup> <a name="destination_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```python
destination_backup_vault_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleCopyActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleIndexActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleIndexActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays">reset_delete_after_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays">reset_move_to_cold_storage_after_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">reset_opt_in_to_archive_for_supported_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_after_days` <a name="reset_delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays"></a>

```python
def reset_delete_after_days() -> None
```

##### `reset_move_to_cold_storage_after_days` <a name="reset_move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```python
def reset_move_to_cold_storage_after_days() -> None
```

##### `reset_opt_in_to_archive_for_supported_resources` <a name="reset_opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```python
def reset_opt_in_to_archive_for_supported_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput">delete_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">move_to_cold_storage_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">opt_in_to_archive_for_supported_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">move_to_cold_storage_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">opt_in_to_archive_for_supported_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_after_days_input`<sup>Optional</sup> <a name="delete_after_days_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```python
delete_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `move_to_cold_storage_after_days_input`<sup>Optional</sup> <a name="move_to_cold_storage_after_days_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```python
move_to_cold_storage_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opt_in_to_archive_for_supported_resources_input`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```python
opt_in_to_archive_for_supported_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_after_days`<sup>Required</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `move_to_cold_storage_after_days`<sup>Required</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```python
move_to_cold_storage_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opt_in_to_archive_for_supported_resources`<sup>Required</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```python
opt_in_to_archive_for_supported_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleList <a name="BackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]

---


### BackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions">put_copy_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions">put_index_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle">put_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions">put_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes">reset_completion_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions">reset_copy_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup">reset_enable_continuous_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions">reset_index_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle">reset_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags">reset_recovery_point_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions">reset_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone">reset_schedule_expression_timezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes">reset_start_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">reset_target_logically_air_gapped_backup_vault_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_copy_actions` <a name="put_copy_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions"></a>

```python
def put_copy_actions(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleCopyActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]

---

##### `put_index_actions` <a name="put_index_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions"></a>

```python
def put_index_actions(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleIndexActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]

---

##### `put_lifecycle` <a name="put_lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle"></a>

```python
def put_lifecycle(
  delete_after_days: typing.Union[int, float] = None,
  move_to_cold_storage_after_days: typing.Union[int, float] = None,
  opt_in_to_archive_for_supported_resources: bool | IResolvable = None
) -> None
```

###### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.deleteAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

###### `move_to_cold_storage_after_days`<sup>Optional</sup> <a name="move_to_cold_storage_after_days" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.moveToColdStorageAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

###### `opt_in_to_archive_for_supported_resources`<sup>Optional</sup> <a name="opt_in_to_archive_for_supported_resources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.optInToArchiveForSupportedResources"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

##### `put_scan_actions` <a name="put_scan_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions"></a>

```python
def put_scan_actions(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleScanActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]

---

##### `reset_completion_window_minutes` <a name="reset_completion_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes"></a>

```python
def reset_completion_window_minutes() -> None
```

##### `reset_copy_actions` <a name="reset_copy_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions"></a>

```python
def reset_copy_actions() -> None
```

##### `reset_enable_continuous_backup` <a name="reset_enable_continuous_backup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```python
def reset_enable_continuous_backup() -> None
```

##### `reset_index_actions` <a name="reset_index_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions"></a>

```python
def reset_index_actions() -> None
```

##### `reset_lifecycle` <a name="reset_lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle"></a>

```python
def reset_lifecycle() -> None
```

##### `reset_recovery_point_tags` <a name="reset_recovery_point_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```python
def reset_recovery_point_tags() -> None
```

##### `reset_scan_actions` <a name="reset_scan_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions"></a>

```python
def reset_scan_actions() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_schedule_expression_timezone` <a name="reset_schedule_expression_timezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```python
def reset_schedule_expression_timezone() -> None
```

##### `reset_start_window_minutes` <a name="reset_start_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes"></a>

```python
def reset_start_window_minutes() -> None
```

##### `reset_target_logically_air_gapped_backup_vault_arn` <a name="reset_target_logically_air_gapped_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```python
def reset_target_logically_air_gapped_backup_vault_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">copy_actions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">index_actions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">scan_actions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput">completion_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput">copy_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput">enable_continuous_backup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput">index_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput">lifecycle_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput">recovery_point_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput">scan_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">schedule_expression_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput">start_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput">target_backup_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">target_logically_air_gapped_backup_vault_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">completion_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">enable_continuous_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">recovery_point_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">start_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">target_backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">target_logically_air_gapped_backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_actions`<sup>Required</sup> <a name="copy_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```python
copy_actions: BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `index_actions`<sup>Required</sup> <a name="index_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```python
index_actions: BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```python
lifecycle: BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `scan_actions`<sup>Required</sup> <a name="scan_actions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```python
scan_actions: BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `completion_window_minutes_input`<sup>Optional</sup> <a name="completion_window_minutes_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput"></a>

```python
completion_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `copy_actions_input`<sup>Optional</sup> <a name="copy_actions_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput"></a>

```python
copy_actions_input: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleCopyActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions">BackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>]

---

##### `enable_continuous_backup_input`<sup>Optional</sup> <a name="enable_continuous_backup_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```python
enable_continuous_backup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `index_actions_input`<sup>Optional</sup> <a name="index_actions_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput"></a>

```python
index_actions_input: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleIndexActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions">BackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>]

---

##### `lifecycle_input`<sup>Optional</sup> <a name="lifecycle_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput"></a>

```python
lifecycle_input: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `recovery_point_tags_input`<sup>Optional</sup> <a name="recovery_point_tags_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```python
recovery_point_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `scan_actions_input`<sup>Optional</sup> <a name="scan_actions_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput"></a>

```python
scan_actions_input: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleScanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_timezone_input`<sup>Optional</sup> <a name="schedule_expression_timezone_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```python
schedule_expression_timezone_input: str
```

- *Type:* str

---

##### `start_window_minutes_input`<sup>Optional</sup> <a name="start_window_minutes_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput"></a>

```python
start_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_backup_vault_input`<sup>Optional</sup> <a name="target_backup_vault_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput"></a>

```python
target_backup_vault_input: str
```

- *Type:* str

---

##### `target_logically_air_gapped_backup_vault_arn_input`<sup>Optional</sup> <a name="target_logically_air_gapped_backup_vault_arn_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```python
target_logically_air_gapped_backup_vault_arn_input: str
```

- *Type:* str

---

##### `completion_window_minutes`<sup>Required</sup> <a name="completion_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```python
completion_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_continuous_backup`<sup>Required</sup> <a name="enable_continuous_backup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```python
enable_continuous_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recovery_point_tags`<sup>Required</sup> <a name="recovery_point_tags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```python
recovery_point_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_timezone`<sup>Required</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

---

##### `start_window_minutes`<sup>Required</sup> <a name="start_window_minutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```python
start_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_backup_vault`<sup>Required</sup> <a name="target_backup_vault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```python
target_backup_vault: str
```

- *Type:* str

---

##### `target_logically_air_gapped_backup_vault_arn`<sup>Required</sup> <a name="target_logically_air_gapped_backup_vault_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```python
target_logically_air_gapped_backup_vault_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRuleScanActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>]

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner">reset_malware_scanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode">reset_scan_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_malware_scanner` <a name="reset_malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner"></a>

```python
def reset_malware_scanner() -> None
```

##### `reset_scan_mode` <a name="reset_scan_mode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode"></a>

```python
def reset_scan_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput">malware_scanner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput">scan_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">malware_scanner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">scan_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malware_scanner_input`<sup>Optional</sup> <a name="malware_scanner_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput"></a>

```python
malware_scanner_input: str
```

- *Type:* str

---

##### `scan_mode_input`<sup>Optional</sup> <a name="scan_mode_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput"></a>

```python
scan_mode_input: str
```

- *Type:* str

---

##### `malware_scanner`<sup>Required</sup> <a name="malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```python
malware_scanner: str
```

- *Type:* str

---

##### `scan_mode`<sup>Required</sup> <a name="scan_mode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanBackupPlanRuleScanActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions">BackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### BackupBackupPlanBackupPlanOutputReference <a name="BackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings">put_advanced_backup_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule">put_backup_plan_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings">put_scan_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings">reset_advanced_backup_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings">reset_scan_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_backup_settings` <a name="put_advanced_backup_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings"></a>

```python
def put_advanced_backup_settings(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]

---

##### `put_backup_plan_rule` <a name="put_backup_plan_rule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule"></a>

```python
def put_backup_plan_rule(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]

---

##### `put_scan_settings` <a name="put_scan_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings"></a>

```python
def put_scan_settings(
  value: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]

---

##### `reset_advanced_backup_settings` <a name="reset_advanced_backup_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings"></a>

```python
def reset_advanced_backup_settings() -> None
```

##### `reset_scan_settings` <a name="reset_scan_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings"></a>

```python
def reset_scan_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">advanced_backup_settings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">backup_plan_rule</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings">scan_settings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput">advanced_backup_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput">backup_plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput">backup_plan_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput">scan_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName">backup_plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_backup_settings`<sup>Required</sup> <a name="advanced_backup_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```python
advanced_backup_settings: BackupBackupPlanBackupPlanAdvancedBackupSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `backup_plan_rule`<sup>Required</sup> <a name="backup_plan_rule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```python
backup_plan_rule: BackupBackupPlanBackupPlanBackupPlanRuleList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `scan_settings`<sup>Required</sup> <a name="scan_settings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```python
scan_settings: BackupBackupPlanBackupPlanScanSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `advanced_backup_settings_input`<sup>Optional</sup> <a name="advanced_backup_settings_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput"></a>

```python
advanced_backup_settings_input: IResolvable | typing.List[BackupBackupPlanBackupPlanAdvancedBackupSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings">BackupBackupPlanBackupPlanAdvancedBackupSettings</a>]

---

##### `backup_plan_name_input`<sup>Optional</sup> <a name="backup_plan_name_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput"></a>

```python
backup_plan_name_input: str
```

- *Type:* str

---

##### `backup_plan_rule_input`<sup>Optional</sup> <a name="backup_plan_rule_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput"></a>

```python
backup_plan_rule_input: IResolvable | typing.List[BackupBackupPlanBackupPlanBackupPlanRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule">BackupBackupPlanBackupPlanBackupPlanRule</a>]

---

##### `scan_settings_input`<sup>Optional</sup> <a name="scan_settings_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput"></a>

```python
scan_settings_input: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]

---

##### `backup_plan_name`<sup>Required</sup> <a name="backup_plan_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```python
backup_plan_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---


### BackupBackupPlanBackupPlanScanSettingsList <a name="BackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupBackupPlanBackupPlanScanSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupBackupPlanBackupPlanScanSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>]

---


### BackupBackupPlanBackupPlanScanSettingsOutputReference <a name="BackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_backup_plan

backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner">reset_malware_scanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn">reset_scanner_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_malware_scanner` <a name="reset_malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner"></a>

```python
def reset_malware_scanner() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```

##### `reset_scanner_role_arn` <a name="reset_scanner_role_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn"></a>

```python
def reset_scanner_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput">malware_scanner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput">scanner_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">malware_scanner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">scanner_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malware_scanner_input`<sup>Optional</sup> <a name="malware_scanner_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput"></a>

```python
malware_scanner_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scanner_role_arn_input`<sup>Optional</sup> <a name="scanner_role_arn_input" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput"></a>

```python
scanner_role_arn_input: str
```

- *Type:* str

---

##### `malware_scanner`<sup>Required</sup> <a name="malware_scanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```python
malware_scanner: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scanner_role_arn`<sup>Required</sup> <a name="scanner_role_arn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```python
scanner_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupBackupPlanBackupPlanScanSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings">BackupBackupPlanBackupPlanScanSettings</a>

---



