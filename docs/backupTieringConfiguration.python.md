# `backupTieringConfiguration` Submodule <a name="`backupTieringConfiguration` Submodule" id="@cdktn/provider-awscc.backupTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupTieringConfiguration <a name="BackupTieringConfiguration" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_vault_name: str,
  resource_selection: IResolvable | typing.List[BackupTieringConfigurationResourceSelection],
  tiering_configuration_name: str,
  tiering_configuration_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.resourceSelection">resource_selection</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationName">tiering_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationTags">tiering_configuration_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.backupVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.resourceSelection"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `tiering_configuration_name`<sup>Required</sup> <a name="tiering_configuration_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `tiering_configuration_tags`<sup>Optional</sup> <a name="tiering_configuration_tags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.tieringConfigurationTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection">put_resource_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags">reset_tiering_configuration_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_selection` <a name="put_resource_selection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection"></a>

```python
def put_resource_selection(
  value: IResolvable | typing.List[BackupTieringConfigurationResourceSelection]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]

---

##### `reset_tiering_configuration_tags` <a name="reset_tiering_configuration_tags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags"></a>

```python
def reset_tiering_configuration_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupTieringConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupTieringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupTieringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection">resource_selection</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn">tiering_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput">backup_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput">resource_selection_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput">tiering_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput">tiering_configuration_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName">tiering_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags">tiering_configuration_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection"></a>

```python
resource_selection: BackupTieringConfigurationResourceSelectionList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a>

---

##### `tiering_configuration_arn`<sup>Required</sup> <a name="tiering_configuration_arn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn"></a>

```python
tiering_configuration_arn: str
```

- *Type:* str

---

##### `backup_vault_name_input`<sup>Optional</sup> <a name="backup_vault_name_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput"></a>

```python
backup_vault_name_input: str
```

- *Type:* str

---

##### `resource_selection_input`<sup>Optional</sup> <a name="resource_selection_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput"></a>

```python
resource_selection_input: IResolvable | typing.List[BackupTieringConfigurationResourceSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]

---

##### `tiering_configuration_name_input`<sup>Optional</sup> <a name="tiering_configuration_name_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput"></a>

```python
tiering_configuration_name_input: str
```

- *Type:* str

---

##### `tiering_configuration_tags_input`<sup>Optional</sup> <a name="tiering_configuration_tags_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput"></a>

```python
tiering_configuration_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

---

##### `tiering_configuration_name`<sup>Required</sup> <a name="tiering_configuration_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName"></a>

```python
tiering_configuration_name: str
```

- *Type:* str

---

##### `tiering_configuration_tags`<sup>Required</sup> <a name="tiering_configuration_tags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags"></a>

```python
tiering_configuration_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupTieringConfigurationConfig <a name="BackupTieringConfigurationConfig" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_vault_name: str,
  resource_selection: IResolvable | typing.List[BackupTieringConfigurationResourceSelection],
  tiering_configuration_name: str,
  tiering_configuration_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection">resource_selection</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName">tiering_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags">tiering_configuration_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection"></a>

```python
resource_selection: IResolvable | typing.List[BackupTieringConfigurationResourceSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `tiering_configuration_name`<sup>Required</sup> <a name="tiering_configuration_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName"></a>

```python
tiering_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `tiering_configuration_tags`<sup>Optional</sup> <a name="tiering_configuration_tags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags"></a>

```python
tiering_configuration_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

### BackupTieringConfigurationResourceSelection <a name="BackupTieringConfigurationResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.Initializer"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfigurationResourceSelection(
  resources: typing.List[str],
  resource_type: str,
  tiering_down_settings_in_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays">tiering_down_settings_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}.

---

##### `tiering_down_settings_in_days`<sup>Required</sup> <a name="tiering_down_settings_in_days" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays"></a>

```python
tiering_down_settings_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupTieringConfigurationResourceSelectionList <a name="BackupTieringConfigurationResourceSelectionList" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupTieringConfigurationResourceSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupTieringConfigurationResourceSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>]

---


### BackupTieringConfigurationResourceSelectionOutputReference <a name="BackupTieringConfigurationResourceSelectionOutputReference" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backup_tiering_configuration

backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput">tiering_down_settings_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays">tiering_down_settings_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tiering_down_settings_in_days_input`<sup>Optional</sup> <a name="tiering_down_settings_in_days_input" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput"></a>

```python
tiering_down_settings_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tiering_down_settings_in_days`<sup>Required</sup> <a name="tiering_down_settings_in_days" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays"></a>

```python
tiering_down_settings_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupTieringConfigurationResourceSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>

---



