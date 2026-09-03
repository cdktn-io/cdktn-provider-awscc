# `fsxVolume` Submodule <a name="`fsxVolume` Submodule" id="@cdktn/provider-awscc.fsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxVolume <a name="FsxVolume" id="@cdktn/provider-awscc.fsxVolume.FsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolume(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  backup_id: str = None,
  ontap_configuration: FsxVolumeOntapConfiguration = None,
  open_zfs_configuration: FsxVolumeOpenZfsConfiguration = None,
  tags: IResolvable | typing.List[FsxVolumeTags] = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Specifies the ID of the volume backup to use to create a new volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | The configuration of an Amazon FSx for NetApp ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | The type of the volume. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.name"></a>

- *Type:* str

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.backupId"></a>

- *Type:* str

Specifies the ID of the volume backup to use to create a new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}

---

##### `ontap_configuration`<sup>Optional</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.ontapConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

The configuration of an Amazon FSx for NetApp ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}

---

##### `open_zfs_configuration`<sup>Optional</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.openZfsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.Initializer.parameter.volumeType"></a>

- *Type:* str

The type of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration">put_ontap_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration">put_open_zfs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration">reset_ontap_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration">reset_open_zfs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ontap_configuration` <a name="put_ontap_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration"></a>

```python
def put_ontap_configuration(
  aggregate_configuration: FsxVolumeOntapConfigurationAggregateConfiguration = None,
  copy_tags_to_backups: str = None,
  junction_path: str = None,
  ontap_volume_type: str = None,
  security_style: str = None,
  size_in_bytes: str = None,
  size_in_megabytes: str = None,
  snaplock_configuration: FsxVolumeOntapConfigurationSnaplockConfiguration = None,
  snapshot_policy: str = None,
  storage_efficiency_enabled: str = None,
  storage_virtual_machine_id: str = None,
  tiering_policy: FsxVolumeOntapConfigurationTieringPolicy = None,
  volume_style: str = None
) -> None
```

###### `aggregate_configuration`<sup>Optional</sup> <a name="aggregate_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.aggregateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}

---

###### `copy_tags_to_backups`<sup>Optional</sup> <a name="copy_tags_to_backups" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.copyTagsToBackups"></a>

- *Type:* str

A boolean flag indicating whether tags for the volume should be copied to backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}

---

###### `junction_path`<sup>Optional</sup> <a name="junction_path" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.junctionPath"></a>

- *Type:* str

Specifies the location in the SVM's namespace where the volume is mounted.

This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}

---

###### `ontap_volume_type`<sup>Optional</sup> <a name="ontap_volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.ontapVolumeType"></a>

- *Type:* str

Specifies the type of volume you are creating. Valid values are the following: RW or DP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}

---

###### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.securityStyle"></a>

- *Type:* str

Specifies the security style for the volume.

If a volume's security style is not specified, it is automatically set to the root volume's security style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}

---

###### `size_in_bytes`<sup>Optional</sup> <a name="size_in_bytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.sizeInBytes"></a>

- *Type:* str

Specifies the configured size of the volume, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}

---

###### `size_in_megabytes`<sup>Optional</sup> <a name="size_in_megabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.sizeInMegabytes"></a>

- *Type:* str

Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}

---

###### `snaplock_configuration`<sup>Optional</sup> <a name="snaplock_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.snaplockConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

The SnapLock configuration object for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}

---

###### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.snapshotPolicy"></a>

- *Type:* str

Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}

---

###### `storage_efficiency_enabled`<sup>Optional</sup> <a name="storage_efficiency_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.storageEfficiencyEnabled"></a>

- *Type:* str

Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}

---

###### `storage_virtual_machine_id`<sup>Optional</sup> <a name="storage_virtual_machine_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.storageVirtualMachineId"></a>

- *Type:* str

Specifies the ONTAP SVM in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}

---

###### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

Describes the data tiering policy for an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}

---

###### `volume_style`<sup>Optional</sup> <a name="volume_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOntapConfiguration.parameter.volumeStyle"></a>

- *Type:* str

Use to specify the style of an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}

---

##### `put_open_zfs_configuration` <a name="put_open_zfs_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration"></a>

```python
def put_open_zfs_configuration(
  copy_tags_to_snapshots: bool | IResolvable = None,
  data_compression_type: str = None,
  nfs_exports: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports] = None,
  options: typing.List[str] = None,
  origin_snapshot: FsxVolumeOpenZfsConfigurationOriginSnapshot = None,
  parent_volume_id: str = None,
  read_only: bool | IResolvable = None,
  record_size_ki_b: typing.Union[int, float] = None,
  storage_capacity_quota_gi_b: typing.Union[int, float] = None,
  storage_capacity_reservation_gi_b: typing.Union[int, float] = None,
  user_and_group_quotas: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas] = None
) -> None
```

###### `copy_tags_to_snapshots`<sup>Optional</sup> <a name="copy_tags_to_snapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.copyTagsToSnapshots"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value indicating whether tags for the volume should be copied to snapshots.

This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}

---

###### `data_compression_type`<sup>Optional</sup> <a name="data_compression_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.dataCompressionType"></a>

- *Type:* str

Specifies the method used to compress the data on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}

---

###### `nfs_exports`<sup>Optional</sup> <a name="nfs_exports" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.nfsExports"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.options"></a>

- *Type:* typing.List[str]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

###### `origin_snapshot`<sup>Optional</sup> <a name="origin_snapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.originSnapshot"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}

---

###### `parent_volume_id`<sup>Optional</sup> <a name="parent_volume_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.parentVolumeId"></a>

- *Type:* str

The ID of the volume to use as the parent volume of the volume that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value indicating whether the volume is read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}

---

###### `record_size_ki_b`<sup>Optional</sup> <a name="record_size_ki_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.recordSizeKiB"></a>

- *Type:* typing.Union[int, float]

Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}

---

###### `storage_capacity_quota_gi_b`<sup>Optional</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.storageCapacityQuotaGiB"></a>

- *Type:* typing.Union[int, float]

Sets the maximum storage size in gibibytes (GiB) for the volume.

You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

###### `storage_capacity_reservation_gi_b`<sup>Optional</sup> <a name="storage_capacity_reservation_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.storageCapacityReservationGiB"></a>

- *Type:* typing.Union[int, float]

Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.

Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}

---

###### `user_and_group_quotas`<sup>Optional</sup> <a name="user_and_group_quotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putOpenZfsConfiguration.parameter.userAndGroupQuotas"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]

Configures how much storage users and groups can use on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FsxVolumeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]

---

##### `reset_backup_id` <a name="reset_backup_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_ontap_configuration` <a name="reset_ontap_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOntapConfiguration"></a>

```python
def reset_ontap_configuration() -> None
```

##### `reset_open_zfs_configuration` <a name="reset_open_zfs_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetOpenZfsConfiguration"></a>

```python
def reset_open_zfs_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FsxVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput">ontap_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput">open_zfs_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ontap_configuration`<sup>Required</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfiguration"></a>

```python
ontap_configuration: FsxVolumeOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference">FsxVolumeOntapConfigurationOutputReference</a>

---

##### `open_zfs_configuration`<sup>Required</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: FsxVolumeOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference">FsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tags"></a>

```python
tags: FsxVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList">FsxVolumeTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ontap_configuration_input`<sup>Optional</sup> <a name="ontap_configuration_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.ontapConfigurationInput"></a>

```python
ontap_configuration_input: IResolvable | FsxVolumeOntapConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---

##### `open_zfs_configuration_input`<sup>Optional</sup> <a name="open_zfs_configuration_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.openZfsConfigurationInput"></a>

```python
open_zfs_configuration_input: IResolvable | FsxVolumeOpenZfsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FsxVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fsxVolume.FsxVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxVolumeConfig <a name="FsxVolumeConfig" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  backup_id: str = None,
  ontap_configuration: FsxVolumeOntapConfiguration = None,
  open_zfs_configuration: FsxVolumeOpenZfsConfiguration = None,
  tags: IResolvable | typing.List[FsxVolumeTags] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name">name</a></code> | <code>str</code> | The name of the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId">backup_id</a></code> | <code>str</code> | Specifies the ID of the volume backup to use to create a new volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | The configuration of an Amazon FSx for NetApp ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType">volume_type</a></code> | <code>str</code> | The type of the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Specifies the ID of the volume backup to use to create a new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#backup_id FsxVolume#backup_id}

---

##### `ontap_configuration`<sup>Optional</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.ontapConfiguration"></a>

```python
ontap_configuration: FsxVolumeOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

The configuration of an Amazon FSx for NetApp ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_configuration FsxVolume#ontap_configuration}

---

##### `open_zfs_configuration`<sup>Optional</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: FsxVolumeOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#open_zfs_configuration FsxVolume#open_zfs_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FsxVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tags FsxVolume#tags}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeConfig.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

The type of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_type FsxVolume#volume_type}

---

### FsxVolumeOntapConfiguration <a name="FsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfiguration(
  aggregate_configuration: FsxVolumeOntapConfigurationAggregateConfiguration = None,
  copy_tags_to_backups: str = None,
  junction_path: str = None,
  ontap_volume_type: str = None,
  security_style: str = None,
  size_in_bytes: str = None,
  size_in_megabytes: str = None,
  snaplock_configuration: FsxVolumeOntapConfigurationSnaplockConfiguration = None,
  snapshot_policy: str = None,
  storage_efficiency_enabled: str = None,
  storage_virtual_machine_id: str = None,
  tiering_policy: FsxVolumeOntapConfigurationTieringPolicy = None,
  volume_style: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration">aggregate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>str</code> | A boolean flag indicating whether tags for the volume should be copied to backups. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath">junction_path</a></code> | <code>str</code> | Specifies the location in the SVM's namespace where the volume is mounted. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType">ontap_volume_type</a></code> | <code>str</code> | Specifies the type of volume you are creating. Valid values are the following: RW or DP. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle">security_style</a></code> | <code>str</code> | Specifies the security style for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | Specifies the configured size of the volume, in bytes. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes">size_in_megabytes</a></code> | <code>str</code> | Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration">snaplock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | The SnapLock configuration object for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy">snapshot_policy</a></code> | <code>str</code> | Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>str</code> | Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | Specifies the ONTAP SVM in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | Describes the data tiering policy for an ONTAP volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle">volume_style</a></code> | <code>str</code> | Use to specify the style of an ONTAP volume. |

---

##### `aggregate_configuration`<sup>Optional</sup> <a name="aggregate_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.aggregateConfiguration"></a>

```python
aggregate_configuration: FsxVolumeOntapConfigurationAggregateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregate_configuration FsxVolume#aggregate_configuration}

---

##### `copy_tags_to_backups`<sup>Optional</sup> <a name="copy_tags_to_backups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: str
```

- *Type:* str

A boolean flag indicating whether tags for the volume should be copied to backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_backups FsxVolume#copy_tags_to_backups}

---

##### `junction_path`<sup>Optional</sup> <a name="junction_path" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.junctionPath"></a>

```python
junction_path: str
```

- *Type:* str

Specifies the location in the SVM's namespace where the volume is mounted.

This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#junction_path FsxVolume#junction_path}

---

##### `ontap_volume_type`<sup>Optional</sup> <a name="ontap_volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.ontapVolumeType"></a>

```python
ontap_volume_type: str
```

- *Type:* str

Specifies the type of volume you are creating. Valid values are the following: RW or DP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#ontap_volume_type FsxVolume#ontap_volume_type}

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Specifies the security style for the volume.

If a volume's security style is not specified, it is automatically set to the root volume's security style.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#security_style FsxVolume#security_style}

---

##### `size_in_bytes`<sup>Optional</sup> <a name="size_in_bytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

Specifies the configured size of the volume, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_bytes FsxVolume#size_in_bytes}

---

##### `size_in_megabytes`<sup>Optional</sup> <a name="size_in_megabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.sizeInMegabytes"></a>

```python
size_in_megabytes: str
```

- *Type:* str

Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#size_in_megabytes FsxVolume#size_in_megabytes}

---

##### `snaplock_configuration`<sup>Optional</sup> <a name="snaplock_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snaplockConfiguration"></a>

```python
snaplock_configuration: FsxVolumeOntapConfigurationSnaplockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

The SnapLock configuration object for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_configuration FsxVolume#snaplock_configuration}

---

##### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.snapshotPolicy"></a>

```python
snapshot_policy: str
```

- *Type:* str

Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_policy FsxVolume#snapshot_policy}

---

##### `storage_efficiency_enabled`<sup>Optional</sup> <a name="storage_efficiency_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageEfficiencyEnabled"></a>

```python
storage_efficiency_enabled: str
```

- *Type:* str

Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_efficiency_enabled FsxVolume#storage_efficiency_enabled}

---

##### `storage_virtual_machine_id`<sup>Optional</sup> <a name="storage_virtual_machine_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

Specifies the ONTAP SVM in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_virtual_machine_id FsxVolume#storage_virtual_machine_id}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.tieringPolicy"></a>

```python
tiering_policy: FsxVolumeOntapConfigurationTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

Describes the data tiering policy for an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#tiering_policy FsxVolume#tiering_policy}

---

##### `volume_style`<sup>Optional</sup> <a name="volume_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration.property.volumeStyle"></a>

```python
volume_style: str
```

- *Type:* str

Use to specify the style of an ONTAP volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_style FsxVolume#volume_style}

---

### FsxVolumeOntapConfigurationAggregateConfiguration <a name="FsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration(
  aggregates: typing.List[str] = None,
  constituents_per_aggregate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates">aggregates</a></code> | <code>typing.List[str]</code> | The list of aggregates that this volume resides on. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate">constituents_per_aggregate</a></code> | <code>typing.Union[int, float]</code> | Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. |

---

##### `aggregates`<sup>Optional</sup> <a name="aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.aggregates"></a>

```python
aggregates: typing.List[str]
```

- *Type:* typing.List[str]

The list of aggregates that this volume resides on.

Aggregates are storage pools which make up your primary storage tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}

---

##### `constituents_per_aggregate`<sup>Optional</sup> <a name="constituents_per_aggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration.property.constituentsPerAggregate"></a>

```python
constituents_per_aggregate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.

This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}

---

### FsxVolumeOntapConfigurationSnaplockConfiguration <a name="FsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration(
  audit_log_volume: str = None,
  autocommit_period: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod = None,
  privileged_delete: str = None,
  retention_period: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod = None,
  snaplock_type: str = None,
  volume_append_mode_enabled: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume">audit_log_volume</a></code> | <code>str</code> | Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod">autocommit_period</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete">privileged_delete</a></code> | <code>str</code> | Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | Specifies the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType">snaplock_type</a></code> | <code>str</code> | Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled">volume_append_mode_enabled</a></code> | <code>str</code> | Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. |

---

##### `audit_log_volume`<sup>Optional</sup> <a name="audit_log_volume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.auditLogVolume"></a>

```python
audit_log_volume: str
```

- *Type:* str

Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}

---

##### `autocommit_period`<sup>Optional</sup> <a name="autocommit_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.autocommitPeriod"></a>

```python
autocommit_period: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}

---

##### `privileged_delete`<sup>Optional</sup> <a name="privileged_delete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.privilegedDelete"></a>

```python
privileged_delete: str
```

- *Type:* str

Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.retentionPeriod"></a>

```python
retention_period: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

Specifies the retention period of an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}

---

##### `snaplock_type`<sup>Optional</sup> <a name="snaplock_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.snaplockType"></a>

```python
snaplock_type: str
```

- *Type:* str

Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}

---

##### `volume_append_mode_enabled`<sup>Optional</sup> <a name="volume_append_mode_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```python
volume_append_mode_enabled: str
```

- *Type:* str

Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type">type</a></code> | <code>str</code> | Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.type"></a>

```python
type: str
```

- *Type:* str

Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Setting this value to NONE disables autocommit. The default value is NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod(
  default_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention = None,
  maximum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention = None,
  minimum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention">maximum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention">minimum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. |

---

##### `default_retention`<sup>Optional</sup> <a name="default_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```python
default_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}

---

##### `maximum_retention`<sup>Optional</sup> <a name="maximum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```python
maximum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}

---

##### `minimum_retention`<sup>Optional</sup> <a name="minimum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```python
minimum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">type</a></code> | <code>str</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```python
type: str
```

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">type</a></code> | <code>str</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```python
type: str
```

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">type</a></code> | <code>str</code> | Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```python
type: str
```

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

### FsxVolumeOntapConfigurationTieringPolicy <a name="FsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationTieringPolicy(
  cooling_period: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod">cooling_period</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name">name</a></code> | <code>str</code> | Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY. |

---

##### `cooling_period`<sup>Optional</sup> <a name="cooling_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.coolingPeriod"></a>

```python
cooling_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

### FsxVolumeOpenZfsConfiguration <a name="FsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfiguration(
  copy_tags_to_snapshots: bool | IResolvable = None,
  data_compression_type: str = None,
  nfs_exports: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports] = None,
  options: typing.List[str] = None,
  origin_snapshot: FsxVolumeOpenZfsConfigurationOriginSnapshot = None,
  parent_volume_id: str = None,
  read_only: bool | IResolvable = None,
  record_size_ki_b: typing.Union[int, float] = None,
  storage_capacity_quota_gi_b: typing.Union[int, float] = None,
  storage_capacity_reservation_gi_b: typing.Union[int, float] = None,
  user_and_group_quotas: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value indicating whether tags for the volume should be copied to snapshots. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType">data_compression_type</a></code> | <code>str</code> | Specifies the method used to compress the data on the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports">nfs_exports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options">options</a></code> | <code>typing.List[str]</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | The configuration of an Amazon FSx for OpenZFS volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | The ID of the volume to use as the parent volume of the volume that you are creating. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value indicating whether the volume is read-only. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB">record_size_ki_b</a></code> | <code>typing.Union[int, float]</code> | Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | Sets the maximum storage size in gibibytes (GiB) for the volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB">storage_capacity_reservation_gi_b</a></code> | <code>typing.Union[int, float]</code> | Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas">user_and_group_quotas</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]</code> | Configures how much storage users and groups can use on the volume. |

---

##### `copy_tags_to_snapshots`<sup>Optional</sup> <a name="copy_tags_to_snapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.copyTagsToSnapshots"></a>

```python
copy_tags_to_snapshots: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value indicating whether tags for the volume should be copied to snapshots.

This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_tags_to_snapshots FsxVolume#copy_tags_to_snapshots}

---

##### `data_compression_type`<sup>Optional</sup> <a name="data_compression_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.dataCompressionType"></a>

```python
data_compression_type: str
```

- *Type:* str

Specifies the method used to compress the data on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#data_compression_type FsxVolume#data_compression_type}

---

##### `nfs_exports`<sup>Optional</sup> <a name="nfs_exports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.nfsExports"></a>

```python
nfs_exports: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#nfs_exports FsxVolume#nfs_exports}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

##### `origin_snapshot`<sup>Optional</sup> <a name="origin_snapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.originSnapshot"></a>

```python
origin_snapshot: FsxVolumeOpenZfsConfigurationOriginSnapshot
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

The configuration of an Amazon FSx for OpenZFS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#origin_snapshot FsxVolume#origin_snapshot}

---

##### `parent_volume_id`<sup>Optional</sup> <a name="parent_volume_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.parentVolumeId"></a>

```python
parent_volume_id: str
```

- *Type:* str

The ID of the volume to use as the parent volume of the volume that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#parent_volume_id FsxVolume#parent_volume_id}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value indicating whether the volume is read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#read_only FsxVolume#read_only}

---

##### `record_size_ki_b`<sup>Optional</sup> <a name="record_size_ki_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.recordSizeKiB"></a>

```python
record_size_ki_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#record_size_ki_b FsxVolume#record_size_ki_b}

---

##### `storage_capacity_quota_gi_b`<sup>Optional</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the maximum storage size in gibibytes (GiB) for the volume.

You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `storage_capacity_reservation_gi_b`<sup>Optional</sup> <a name="storage_capacity_reservation_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.storageCapacityReservationGiB"></a>

```python
storage_capacity_reservation_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.

Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b FsxVolume#storage_capacity_reservation_gi_b}

---

##### `user_and_group_quotas`<sup>Optional</sup> <a name="user_and_group_quotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration.property.userAndGroupQuotas"></a>

```python
user_and_group_quotas: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]

Configures how much storage users and groups can use on the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#user_and_group_quotas FsxVolume#user_and_group_quotas}

---

### FsxVolumeOpenZfsConfigurationNfsExports <a name="FsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports(
  client_configurations: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations">client_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `client_configurations`<sup>Optional</sup> <a name="client_configurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports.property.clientConfigurations"></a>

```python
client_configurations: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#client_configurations FsxVolume#client_configurations}

---

### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations(
  clients: str = None,
  options: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>str</code> | A value that specifies who can mount the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options">options</a></code> | <code>typing.List[str]</code> | The configuration object for mounting a Network File System (NFS) file system. |

---

##### `clients`<sup>Optional</sup> <a name="clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.clients"></a>

```python
clients: str
```

- *Type:* str

A value that specifies who can mount the file system.

You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#clients FsxVolume#clients}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#options FsxVolume#options}

---

### FsxVolumeOpenZfsConfigurationOriginSnapshot <a name="FsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot(
  copy_strategy: str = None,
  snapshot_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy">copy_strategy</a></code> | <code>str</code> | The configuration object for mounting a Network File System (NFS) file system. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | Specifies the snapshot to use when creating an OpenZFS volume from a snapshot. |

---

##### `copy_strategy`<sup>Optional</sup> <a name="copy_strategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.copyStrategy"></a>

```python
copy_strategy: str
```

- *Type:* str

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}

---

##### `snapshot_arn`<sup>Optional</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}

---

### FsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas(
  id: typing.Union[int, float] = None,
  storage_capacity_quota_gi_b: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user or group that the quota applies to. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | The user or group's storage quota, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type">type</a></code> | <code>str</code> | Specifies whether the quota applies to a user or group. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user or group that the quota applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#id FsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_capacity_quota_gi_b`<sup>Optional</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user or group's storage quota, in gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b FsxVolume#storage_capacity_quota_gi_b}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies whether the quota applies to a user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

### FsxVolumeTags <a name="FsxVolumeTags" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key">key</a></code> | <code>str</code> | A value that specifies the TagKey, the name of the tag. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value">value</a></code> | <code>str</code> | A value that specifies the TagValue, the value assigned to the corresponding tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.key"></a>

```python
key: str
```

- *Type:* str

A value that specifies the TagKey, the name of the tag.

Tag keys must be unique for the resource to which they are attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#key FsxVolume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value that specifies the TagValue, the value assigned to the corresponding tag key.

Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="FsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates">reset_aggregates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate">reset_constituents_per_aggregate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregates` <a name="reset_aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetAggregates"></a>

```python
def reset_aggregates() -> None
```

##### `reset_constituents_per_aggregate` <a name="reset_constituents_per_aggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resetConstituentsPerAggregate"></a>

```python
def reset_constituents_per_aggregate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput">aggregates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput">constituents_per_aggregate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">aggregates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">constituents_per_aggregate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregates_input`<sup>Optional</sup> <a name="aggregates_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregatesInput"></a>

```python
aggregates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constituents_per_aggregate_input`<sup>Optional</sup> <a name="constituents_per_aggregate_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregateInput"></a>

```python
constituents_per_aggregate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregates`<sup>Required</sup> <a name="aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```python
aggregates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constituents_per_aggregate`<sup>Required</sup> <a name="constituents_per_aggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```python
constituents_per_aggregate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationAggregateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### FsxVolumeOntapConfigurationOutputReference <a name="FsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration">put_aggregate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration">put_snaplock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy">put_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration">reset_aggregate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups">reset_copy_tags_to_backups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath">reset_junction_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType">reset_ontap_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle">reset_security_style</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes">reset_size_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes">reset_size_in_megabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration">reset_snaplock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy">reset_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled">reset_storage_efficiency_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId">reset_storage_virtual_machine_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy">reset_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle">reset_volume_style</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregate_configuration` <a name="put_aggregate_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration"></a>

```python
def put_aggregate_configuration(
  aggregates: typing.List[str] = None,
  constituents_per_aggregate: typing.Union[int, float] = None
) -> None
```

###### `aggregates`<sup>Optional</sup> <a name="aggregates" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration.parameter.aggregates"></a>

- *Type:* typing.List[str]

The list of aggregates that this volume resides on.

Aggregates are storage pools which make up your primary storage tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#aggregates FsxVolume#aggregates}

---

###### `constituents_per_aggregate`<sup>Optional</sup> <a name="constituents_per_aggregate" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putAggregateConfiguration.parameter.constituentsPerAggregate"></a>

- *Type:* typing.Union[int, float]

Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.

This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#constituents_per_aggregate FsxVolume#constituents_per_aggregate}

---

##### `put_snaplock_configuration` <a name="put_snaplock_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration"></a>

```python
def put_snaplock_configuration(
  audit_log_volume: str = None,
  autocommit_period: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod = None,
  privileged_delete: str = None,
  retention_period: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod = None,
  snaplock_type: str = None,
  volume_append_mode_enabled: str = None
) -> None
```

###### `audit_log_volume`<sup>Optional</sup> <a name="audit_log_volume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.auditLogVolume"></a>

- *Type:* str

Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#audit_log_volume FsxVolume#audit_log_volume}

---

###### `autocommit_period`<sup>Optional</sup> <a name="autocommit_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.autocommitPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#autocommit_period FsxVolume#autocommit_period}

---

###### `privileged_delete`<sup>Optional</sup> <a name="privileged_delete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.privilegedDelete"></a>

- *Type:* str

Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#privileged_delete FsxVolume#privileged_delete}

---

###### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.retentionPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

Specifies the retention period of an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#retention_period FsxVolume#retention_period}

---

###### `snaplock_type`<sup>Optional</sup> <a name="snaplock_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.snaplockType"></a>

- *Type:* str

Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snaplock_type FsxVolume#snaplock_type}

---

###### `volume_append_mode_enabled`<sup>Optional</sup> <a name="volume_append_mode_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putSnaplockConfiguration.parameter.volumeAppendModeEnabled"></a>

- *Type:* str

Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#volume_append_mode_enabled FsxVolume#volume_append_mode_enabled}

---

##### `put_tiering_policy` <a name="put_tiering_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy"></a>

```python
def put_tiering_policy(
  cooling_period: typing.Union[int, float] = None,
  name: str = None
) -> None
```

###### `cooling_period`<sup>Optional</sup> <a name="cooling_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy.parameter.coolingPeriod"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#cooling_period FsxVolume#cooling_period}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.putTieringPolicy.parameter.name"></a>

- *Type:* str

Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#name FsxVolume#name}

---

##### `reset_aggregate_configuration` <a name="reset_aggregate_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetAggregateConfiguration"></a>

```python
def reset_aggregate_configuration() -> None
```

##### `reset_copy_tags_to_backups` <a name="reset_copy_tags_to_backups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetCopyTagsToBackups"></a>

```python
def reset_copy_tags_to_backups() -> None
```

##### `reset_junction_path` <a name="reset_junction_path" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetJunctionPath"></a>

```python
def reset_junction_path() -> None
```

##### `reset_ontap_volume_type` <a name="reset_ontap_volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetOntapVolumeType"></a>

```python
def reset_ontap_volume_type() -> None
```

##### `reset_security_style` <a name="reset_security_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSecurityStyle"></a>

```python
def reset_security_style() -> None
```

##### `reset_size_in_bytes` <a name="reset_size_in_bytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInBytes"></a>

```python
def reset_size_in_bytes() -> None
```

##### `reset_size_in_megabytes` <a name="reset_size_in_megabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSizeInMegabytes"></a>

```python
def reset_size_in_megabytes() -> None
```

##### `reset_snaplock_configuration` <a name="reset_snaplock_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnaplockConfiguration"></a>

```python
def reset_snaplock_configuration() -> None
```

##### `reset_snapshot_policy` <a name="reset_snapshot_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetSnapshotPolicy"></a>

```python
def reset_snapshot_policy() -> None
```

##### `reset_storage_efficiency_enabled` <a name="reset_storage_efficiency_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageEfficiencyEnabled"></a>

```python
def reset_storage_efficiency_enabled() -> None
```

##### `reset_storage_virtual_machine_id` <a name="reset_storage_virtual_machine_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetStorageVirtualMachineId"></a>

```python
def reset_storage_virtual_machine_id() -> None
```

##### `reset_tiering_policy` <a name="reset_tiering_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetTieringPolicy"></a>

```python
def reset_tiering_policy() -> None
```

##### `reset_volume_style` <a name="reset_volume_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.resetVolumeStyle"></a>

```python
def reset_volume_style() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">aggregate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">snaplock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput">aggregate_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput">copy_tags_to_backups_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput">junction_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput">ontap_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput">size_in_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput">size_in_megabytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput">snaplock_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput">snapshot_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput">storage_efficiency_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput">storage_virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput">tiering_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput">volume_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath">junction_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">ontap_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">size_in_megabytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">snapshot_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle">volume_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregate_configuration`<sup>Required</sup> <a name="aggregate_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```python
aggregate_configuration: FsxVolumeOntapConfigurationAggregateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfigurationOutputReference">FsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `snaplock_configuration`<sup>Required</sup> <a name="snaplock_configuration" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```python
snaplock_configuration: FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```python
tiering_policy: FsxVolumeOntapConfigurationTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference">FsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `aggregate_configuration_input`<sup>Optional</sup> <a name="aggregate_configuration_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.aggregateConfigurationInput"></a>

```python
aggregate_configuration_input: IResolvable | FsxVolumeOntapConfigurationAggregateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationAggregateConfiguration">FsxVolumeOntapConfigurationAggregateConfiguration</a>

---

##### `copy_tags_to_backups_input`<sup>Optional</sup> <a name="copy_tags_to_backups_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackupsInput"></a>

```python
copy_tags_to_backups_input: str
```

- *Type:* str

---

##### `junction_path_input`<sup>Optional</sup> <a name="junction_path_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPathInput"></a>

```python
junction_path_input: str
```

- *Type:* str

---

##### `ontap_volume_type_input`<sup>Optional</sup> <a name="ontap_volume_type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeTypeInput"></a>

```python
ontap_volume_type_input: str
```

- *Type:* str

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `size_in_bytes_input`<sup>Optional</sup> <a name="size_in_bytes_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytesInput"></a>

```python
size_in_bytes_input: str
```

- *Type:* str

---

##### `size_in_megabytes_input`<sup>Optional</sup> <a name="size_in_megabytes_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytesInput"></a>

```python
size_in_megabytes_input: str
```

- *Type:* str

---

##### `snaplock_configuration_input`<sup>Optional</sup> <a name="snaplock_configuration_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snaplockConfigurationInput"></a>

```python
snaplock_configuration_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---

##### `snapshot_policy_input`<sup>Optional</sup> <a name="snapshot_policy_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicyInput"></a>

```python
snapshot_policy_input: str
```

- *Type:* str

---

##### `storage_efficiency_enabled_input`<sup>Optional</sup> <a name="storage_efficiency_enabled_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabledInput"></a>

```python
storage_efficiency_enabled_input: str
```

- *Type:* str

---

##### `storage_virtual_machine_id_input`<sup>Optional</sup> <a name="storage_virtual_machine_id_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineIdInput"></a>

```python
storage_virtual_machine_id_input: str
```

- *Type:* str

---

##### `tiering_policy_input`<sup>Optional</sup> <a name="tiering_policy_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.tieringPolicyInput"></a>

```python
tiering_policy_input: IResolvable | FsxVolumeOntapConfigurationTieringPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---

##### `volume_style_input`<sup>Optional</sup> <a name="volume_style_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyleInput"></a>

```python
volume_style_input: str
```

- *Type:* str

---

##### `copy_tags_to_backups`<sup>Required</sup> <a name="copy_tags_to_backups" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: str
```

- *Type:* str

---

##### `junction_path`<sup>Required</sup> <a name="junction_path" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```python
junction_path: str
```

- *Type:* str

---

##### `ontap_volume_type`<sup>Required</sup> <a name="ontap_volume_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```python
ontap_volume_type: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `size_in_megabytes`<sup>Required</sup> <a name="size_in_megabytes" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```python
size_in_megabytes: str
```

- *Type:* str

---

##### `snapshot_policy`<sup>Required</sup> <a name="snapshot_policy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```python
snapshot_policy: str
```

- *Type:* str

---

##### `storage_efficiency_enabled`<sup>Required</sup> <a name="storage_efficiency_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```python
storage_efficiency_enabled: str
```

- *Type:* str

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

---

##### `volume_style`<sup>Required</sup> <a name="volume_style" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```python
volume_style: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfiguration">FsxVolumeOntapConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod">put_autocommit_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod">put_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume">reset_audit_log_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod">reset_autocommit_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete">reset_privileged_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType">reset_snaplock_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">reset_volume_append_mode_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autocommit_period` <a name="put_autocommit_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```python
def put_autocommit_period(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.type"></a>

- *Type:* str

Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Setting this value to NONE disables autocommit. The default value is NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* typing.Union[int, float]

Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

##### `put_retention_period` <a name="put_retention_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```python
def put_retention_period(
  default_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention = None,
  maximum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention = None,
  minimum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention = None
) -> None
```

###### `default_retention`<sup>Optional</sup> <a name="default_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.defaultRetention"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#default_retention FsxVolume#default_retention}

---

###### `maximum_retention`<sup>Optional</sup> <a name="maximum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.maximumRetention"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#maximum_retention FsxVolume#maximum_retention}

---

###### `minimum_retention`<sup>Optional</sup> <a name="minimum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.minimumRetention"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#minimum_retention FsxVolume#minimum_retention}

---

##### `reset_audit_log_volume` <a name="reset_audit_log_volume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```python
def reset_audit_log_volume() -> None
```

##### `reset_autocommit_period` <a name="reset_autocommit_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```python
def reset_autocommit_period() -> None
```

##### `reset_privileged_delete` <a name="reset_privileged_delete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```python
def reset_privileged_delete() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_snaplock_type` <a name="reset_snaplock_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetSnaplockType"></a>

```python
def reset_snaplock_type() -> None
```

##### `reset_volume_append_mode_enabled` <a name="reset_volume_append_mode_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```python
def reset_volume_append_mode_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommit_period</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput">audit_log_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput">autocommit_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput">privileged_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput">snaplock_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">volume_append_mode_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">audit_log_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">privileged_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">snaplock_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volume_append_mode_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autocommit_period`<sup>Required</sup> <a name="autocommit_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```python
autocommit_period: FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```python
retention_period: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `audit_log_volume_input`<sup>Optional</sup> <a name="audit_log_volume_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```python
audit_log_volume_input: str
```

- *Type:* str

---

##### `autocommit_period_input`<sup>Optional</sup> <a name="autocommit_period_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```python
autocommit_period_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---

##### `privileged_delete_input`<sup>Optional</sup> <a name="privileged_delete_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```python
privileged_delete_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---

##### `snaplock_type_input`<sup>Optional</sup> <a name="snaplock_type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```python
snaplock_type_input: str
```

- *Type:* str

---

##### `volume_append_mode_enabled_input`<sup>Optional</sup> <a name="volume_append_mode_enabled_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```python
volume_append_mode_enabled_input: str
```

- *Type:* str

---

##### `audit_log_volume`<sup>Required</sup> <a name="audit_log_volume" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```python
audit_log_volume: str
```

- *Type:* str

---

##### `privileged_delete`<sup>Required</sup> <a name="privileged_delete" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```python
privileged_delete: str
```

- *Type:* str

---

##### `snaplock_type`<sup>Required</sup> <a name="snaplock_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```python
snaplock_type: str
```

- *Type:* str

---

##### `volume_append_mode_enabled`<sup>Required</sup> <a name="volume_append_mode_enabled" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```python
volume_append_mode_enabled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfiguration">FsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">put_default_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">put_maximum_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">put_minimum_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">reset_default_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">reset_maximum_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">reset_minimum_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_retention` <a name="put_default_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```python
def put_default_retention(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.type"></a>

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

##### `put_maximum_retention` <a name="put_maximum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```python
def put_maximum_retention(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.type"></a>

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

##### `put_minimum_retention` <a name="put_minimum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```python
def put_minimum_retention(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.type"></a>

- *Type:* str

Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.

Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#type FsxVolume#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* typing.Union[int, float]

Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.

You can't set a value for INFINITE or UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#value FsxVolume#value}

---

##### `reset_default_retention` <a name="reset_default_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```python
def reset_default_retention() -> None
```

##### `reset_maximum_retention` <a name="reset_maximum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```python
def reset_maximum_retention() -> None
```

##### `reset_minimum_retention` <a name="reset_minimum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```python
def reset_minimum_retention() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">default_retention_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">maximum_retention_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">minimum_retention_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```python
default_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximum_retention`<sup>Required</sup> <a name="maximum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```python
maximum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimum_retention`<sup>Required</sup> <a name="minimum_retention" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```python
minimum_retention: FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `default_retention_input`<sup>Optional</sup> <a name="default_retention_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```python
default_retention_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `maximum_retention_input`<sup>Optional</sup> <a name="maximum_retention_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```python
maximum_retention_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `minimum_retention_input`<sup>Optional</sup> <a name="minimum_retention_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```python
minimum_retention_input: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">FsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### FsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="FsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod">reset_cooling_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooling_period` <a name="reset_cooling_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetCoolingPeriod"></a>

```python
def reset_cooling_period() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput">cooling_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">cooling_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_period_input`<sup>Optional</sup> <a name="cooling_period_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```python
cooling_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `cooling_period`<sup>Required</sup> <a name="cooling_period" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```python
cooling_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOntapConfigurationTieringPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOntapConfigurationTieringPolicy">FsxVolumeOntapConfigurationTieringPolicy</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]

---


### FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients">reset_clients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_clients` <a name="reset_clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetClients"></a>

```python
def reset_clients() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clients_input`<sup>Optional</sup> <a name="clients_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```python
clients_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```python
clients: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### FsxVolumeOpenZfsConfigurationNfsExportsList <a name="FsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]

---


### FsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="FsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations">put_client_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations">reset_client_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_configurations` <a name="put_client_configurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```python
def put_client_configurations(
  value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]

---

##### `reset_client_configurations` <a name="reset_client_configurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resetClientConfigurations"></a>

```python
def reset_client_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">client_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">client_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_configurations`<sup>Required</sup> <a name="client_configurations" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```python
client_configurations: FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `client_configurations_input`<sup>Optional</sup> <a name="client_configurations_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```python
client_configurations_input: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">FsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOpenZfsConfigurationNfsExports
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>

---


### FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy">reset_copy_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn">reset_snapshot_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_copy_strategy` <a name="reset_copy_strategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetCopyStrategy"></a>

```python
def reset_copy_strategy() -> None
```

##### `reset_snapshot_arn` <a name="reset_snapshot_arn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resetSnapshotArn"></a>

```python
def reset_snapshot_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput">copy_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput">snapshot_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">copy_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_strategy_input`<sup>Optional</sup> <a name="copy_strategy_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```python
copy_strategy_input: str
```

- *Type:* str

---

##### `snapshot_arn_input`<sup>Optional</sup> <a name="snapshot_arn_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```python
snapshot_arn_input: str
```

- *Type:* str

---

##### `copy_strategy`<sup>Required</sup> <a name="copy_strategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```python
copy_strategy: str
```

- *Type:* str

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOpenZfsConfigurationOriginSnapshot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### FsxVolumeOpenZfsConfigurationOutputReference <a name="FsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports">put_nfs_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot">put_origin_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas">put_user_and_group_quotas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots">reset_copy_tags_to_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType">reset_data_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports">reset_nfs_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot">reset_origin_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId">reset_parent_volume_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB">reset_record_size_ki_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB">reset_storage_capacity_quota_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB">reset_storage_capacity_reservation_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas">reset_user_and_group_quotas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs_exports` <a name="put_nfs_exports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports"></a>

```python
def put_nfs_exports(
  value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]

---

##### `put_origin_snapshot` <a name="put_origin_snapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot"></a>

```python
def put_origin_snapshot(
  copy_strategy: str = None,
  snapshot_arn: str = None
) -> None
```

###### `copy_strategy`<sup>Optional</sup> <a name="copy_strategy" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot.parameter.copyStrategy"></a>

- *Type:* str

The configuration object for mounting a Network File System (NFS) file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#copy_strategy FsxVolume#copy_strategy}

---

###### `snapshot_arn`<sup>Optional</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putOriginSnapshot.parameter.snapshotArn"></a>

- *Type:* str

Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/fsx_volume#snapshot_arn FsxVolume#snapshot_arn}

---

##### `put_user_and_group_quotas` <a name="put_user_and_group_quotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas"></a>

```python
def put_user_and_group_quotas(
  value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]

---

##### `reset_copy_tags_to_snapshots` <a name="reset_copy_tags_to_snapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```python
def reset_copy_tags_to_snapshots() -> None
```

##### `reset_data_compression_type` <a name="reset_data_compression_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetDataCompressionType"></a>

```python
def reset_data_compression_type() -> None
```

##### `reset_nfs_exports` <a name="reset_nfs_exports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetNfsExports"></a>

```python
def reset_nfs_exports() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_origin_snapshot` <a name="reset_origin_snapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetOriginSnapshot"></a>

```python
def reset_origin_snapshot() -> None
```

##### `reset_parent_volume_id` <a name="reset_parent_volume_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetParentVolumeId"></a>

```python
def reset_parent_volume_id() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_record_size_ki_b` <a name="reset_record_size_ki_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetRecordSizeKiB"></a>

```python
def reset_record_size_ki_b() -> None
```

##### `reset_storage_capacity_quota_gi_b` <a name="reset_storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityQuotaGiB"></a>

```python
def reset_storage_capacity_quota_gi_b() -> None
```

##### `reset_storage_capacity_reservation_gi_b` <a name="reset_storage_capacity_reservation_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetStorageCapacityReservationGiB"></a>

```python
def reset_storage_capacity_reservation_gi_b() -> None
```

##### `reset_user_and_group_quotas` <a name="reset_user_and_group_quotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```python
def reset_user_and_group_quotas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">nfs_exports</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">user_and_group_quotas</a></code> | <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput">copy_tags_to_snapshots_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput">data_compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput">nfs_exports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput">origin_snapshot_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput">parent_volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput">record_size_ki_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput">storage_capacity_quota_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput">storage_capacity_reservation_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput">user_and_group_quotas_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">data_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">record_size_ki_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">storage_capacity_reservation_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs_exports`<sup>Required</sup> <a name="nfs_exports" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```python
nfs_exports: FsxVolumeOpenZfsConfigurationNfsExportsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExportsList">FsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `origin_snapshot`<sup>Required</sup> <a name="origin_snapshot" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```python
origin_snapshot: FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">FsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `user_and_group_quotas`<sup>Required</sup> <a name="user_and_group_quotas" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```python
user_and_group_quotas: FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `copy_tags_to_snapshots_input`<sup>Optional</sup> <a name="copy_tags_to_snapshots_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```python
copy_tags_to_snapshots_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_compression_type_input`<sup>Optional</sup> <a name="data_compression_type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```python
data_compression_type_input: str
```

- *Type:* str

---

##### `nfs_exports_input`<sup>Optional</sup> <a name="nfs_exports_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.nfsExportsInput"></a>

```python
nfs_exports_input: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationNfsExports]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationNfsExports">FsxVolumeOpenZfsConfigurationNfsExports</a>]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_snapshot_input`<sup>Optional</sup> <a name="origin_snapshot_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshotInput"></a>

```python
origin_snapshot_input: IResolvable | FsxVolumeOpenZfsConfigurationOriginSnapshot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOriginSnapshot">FsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---

##### `parent_volume_id_input`<sup>Optional</sup> <a name="parent_volume_id_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeIdInput"></a>

```python
parent_volume_id_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `record_size_ki_b_input`<sup>Optional</sup> <a name="record_size_ki_b_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiBInput"></a>

```python
record_size_ki_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b_input`<sup>Optional</sup> <a name="storage_capacity_quota_gi_b_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiBInput"></a>

```python
storage_capacity_quota_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_reservation_gi_b_input`<sup>Optional</sup> <a name="storage_capacity_reservation_gi_b_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiBInput"></a>

```python
storage_capacity_reservation_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_and_group_quotas_input`<sup>Optional</sup> <a name="user_and_group_quotas_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```python
user_and_group_quotas_input: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]

---

##### `copy_tags_to_snapshots`<sup>Required</sup> <a name="copy_tags_to_snapshots" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```python
copy_tags_to_snapshots: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_compression_type`<sup>Required</sup> <a name="data_compression_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```python
data_compression_type: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_volume_id`<sup>Required</sup> <a name="parent_volume_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```python
parent_volume_id: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `record_size_ki_b`<sup>Required</sup> <a name="record_size_ki_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```python
record_size_ki_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b`<sup>Required</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_reservation_gi_b`<sup>Required</sup> <a name="storage_capacity_reservation_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```python
storage_capacity_reservation_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOpenZfsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfiguration">FsxVolumeOpenZfsConfiguration</a>

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxVolumeOpenZfsConfigurationUserAndGroupQuotas]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>]

---


### FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB">reset_storage_capacity_quota_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_capacity_quota_gi_b` <a name="reset_storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetStorageCapacityQuotaGiB"></a>

```python
def reset_storage_capacity_quota_gi_b() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput">storage_capacity_quota_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b_input`<sup>Optional</sup> <a name="storage_capacity_quota_gi_b_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiBInput"></a>

```python
storage_capacity_quota_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b`<sup>Required</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeOpenZfsConfigurationUserAndGroupQuotas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeOpenZfsConfigurationUserAndGroupQuotas">FsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### FsxVolumeTagsList <a name="FsxVolumeTagsList" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxVolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>]

---


### FsxVolumeTagsOutputReference <a name="FsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_volume

fsxVolume.FsxVolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxVolume.FsxVolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxVolumeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxVolume.FsxVolumeTags">FsxVolumeTags</a>

---



