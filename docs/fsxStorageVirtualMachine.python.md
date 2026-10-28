# `fsxStorageVirtualMachine` Submodule <a name="`fsxStorageVirtualMachine` Submodule" id="@cdktn/provider-awscc.fsxStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxStorageVirtualMachine <a name="FsxStorageVirtualMachine" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  name: str,
  active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfiguration = None,
  root_volume_security_style: str = None,
  svm_admin_password: str = None,
  tags: IResolvable | typing.List[FsxStorageVirtualMachineTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Specifies the FSx for ONTAP file system on which to create the SVM. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | The security style of the root volume of the SVM. Allowed values: UNIX \| NTFS \| MIXED. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]</code> | A list of Tag values, with a maximum of 50 elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Specifies the FSx for ONTAP file system on which to create the SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_id FsxStorageVirtualMachine#file_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#name FsxStorageVirtualMachine#name}

---

##### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.activeDirectoryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#active_directory_configuration FsxStorageVirtualMachine#active_directory_configuration}

---

##### `root_volume_security_style`<sup>Optional</sup> <a name="root_volume_security_style" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.rootVolumeSecurityStyle"></a>

- *Type:* str

The security style of the root volume of the SVM. Allowed values: UNIX | NTFS | MIXED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#root_volume_security_style FsxStorageVirtualMachine#root_volume_security_style}

---

##### `svm_admin_password`<sup>Optional</sup> <a name="svm_admin_password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.svmAdminPassword"></a>

- *Type:* str

Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#svm_admin_password FsxStorageVirtualMachine#svm_admin_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]

A list of Tag values, with a maximum of 50 elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#tags FsxStorageVirtualMachine#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration">put_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetActiveDirectoryConfiguration">reset_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetRootVolumeSecurityStyle">reset_root_volume_security_style</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetSvmAdminPassword">reset_svm_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_active_directory_configuration` <a name="put_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration"></a>

```python
def put_active_directory_configuration(
  net_bios_name: str = None,
  self_managed_active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration = None
) -> None
```

###### `net_bios_name`<sup>Optional</sup> <a name="net_bios_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.netBiosName"></a>

- *Type:* str

The NetBIOS name of the Active Directory computer object that will be created for your SVM.

Minimum values: 1. Maximum values: 15. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#net_bios_name FsxStorageVirtualMachine#net_bios_name}

---

###### `self_managed_active_directory_configuration`<sup>Optional</sup> <a name="self_managed_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.selfManagedActiveDirectoryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#self_managed_active_directory_configuration FsxStorageVirtualMachine#self_managed_active_directory_configuration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FsxStorageVirtualMachineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]

---

##### `reset_active_directory_configuration` <a name="reset_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetActiveDirectoryConfiguration"></a>

```python
def reset_active_directory_configuration() -> None
```

##### `reset_root_volume_security_style` <a name="reset_root_volume_security_style" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetRootVolumeSecurityStyle"></a>

```python
def reset_root_volume_security_style() -> None
```

##### `reset_svm_admin_password` <a name="reset_svm_admin_password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetSvmAdminPassword"></a>

```python
def reset_svm_admin_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FsxStorageVirtualMachine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FsxStorageVirtualMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FsxStorageVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FsxStorageVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FsxStorageVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList">FsxStorageVirtualMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfigurationInput">active_directory_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyleInput">root_volume_security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPasswordInput">svm_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_directory_configuration`<sup>Required</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tags"></a>

```python
tags: FsxStorageVirtualMachineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList">FsxStorageVirtualMachineTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `active_directory_configuration_input`<sup>Optional</sup> <a name="active_directory_configuration_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfigurationInput"></a>

```python
active_directory_configuration_input: IResolvable | FsxStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `root_volume_security_style_input`<sup>Optional</sup> <a name="root_volume_security_style_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyleInput"></a>

```python
root_volume_security_style_input: str
```

- *Type:* str

---

##### `svm_admin_password_input`<sup>Optional</sup> <a name="svm_admin_password_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPasswordInput"></a>

```python
svm_admin_password_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FsxStorageVirtualMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `root_volume_security_style`<sup>Required</sup> <a name="root_volume_security_style" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyle"></a>

```python
root_volume_security_style: str
```

- *Type:* str

---

##### `svm_admin_password`<sup>Required</sup> <a name="svm_admin_password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPassword"></a>

```python
svm_admin_password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxStorageVirtualMachineActiveDirectoryConfiguration <a name="FsxStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration(
  net_bios_name: str = None,
  self_managed_active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.netBiosName">net_bios_name</a></code> | <code>str</code> | The NetBIOS name of the Active Directory computer object that will be created for your SVM. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration">self_managed_active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory. |

---

##### `net_bios_name`<sup>Optional</sup> <a name="net_bios_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.netBiosName"></a>

```python
net_bios_name: str
```

- *Type:* str

The NetBIOS name of the Active Directory computer object that will be created for your SVM.

Minimum values: 1. Maximum values: 15. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#net_bios_name FsxStorageVirtualMachine#net_bios_name}

---

##### `self_managed_active_directory_configuration`<sup>Optional</sup> <a name="self_managed_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

```python
self_managed_active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#self_managed_active_directory_configuration FsxStorageVirtualMachine#self_managed_active_directory_configuration}

---

### FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration(
  dns_ips: typing.List[str] = None,
  domain_join_service_account_secret: str = None,
  domain_name: str = None,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None,
  password: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainJoinServiceAccountSecret">domain_join_service_account_secret</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName">domain_name</a></code> | <code>str</code> | The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | The name of the domain group whose members are granted administrative privileges for the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | The fully qualified distinguished name of the organizational unit within your self-managed AD directory. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password">password</a></code> | <code>str</code> | The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.userName">user_name</a></code> | <code>str</code> | The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. |

---

##### `dns_ips`<sup>Optional</sup> <a name="dns_ips" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory.

Minimum: 1. Maximum: 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#dns_ips FsxStorageVirtualMachine#dns_ips}

---

##### `domain_join_service_account_secret`<sup>Optional</sup> <a name="domain_join_service_account_secret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainJoinServiceAccountSecret"></a>

```python
domain_join_service_account_secret: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials.

Minimum: 64. Maximum: 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_join_service_account_secret FsxStorageVirtualMachine#domain_join_service_account_secret}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_name FsxStorageVirtualMachine#domain_name}

---

##### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

The name of the domain group whose members are granted administrative privileges for the file system.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_administrators_group FsxStorageVirtualMachine#file_system_administrators_group}

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

The fully qualified distinguished name of the organizational unit within your self-managed AD directory.

Minimum: 1. Maximum: 2000. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#organizational_unit_distinguished_name FsxStorageVirtualMachine#organizational_unit_distinguished_name}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^.{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#password FsxStorageVirtualMachine#password}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

```python
user_name: str
```

- *Type:* str

The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#user_name FsxStorageVirtualMachine#user_name}

---

### FsxStorageVirtualMachineConfig <a name="FsxStorageVirtualMachineConfig" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  name: str,
  active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfiguration = None,
  root_volume_security_style: str = None,
  svm_admin_password: str = None,
  tags: IResolvable | typing.List[FsxStorageVirtualMachineTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Specifies the FSx for ONTAP file system on which to create the SVM. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.rootVolumeSecurityStyle">root_volume_security_style</a></code> | <code>str</code> | The security style of the root volume of the SVM. Allowed values: UNIX \| NTFS \| MIXED. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.svmAdminPassword">svm_admin_password</a></code> | <code>str</code> | Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]</code> | A list of Tag values, with a maximum of 50 elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Specifies the FSx for ONTAP file system on which to create the SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_id FsxStorageVirtualMachine#file_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#name FsxStorageVirtualMachine#name}

---

##### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#active_directory_configuration FsxStorageVirtualMachine#active_directory_configuration}

---

##### `root_volume_security_style`<sup>Optional</sup> <a name="root_volume_security_style" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.rootVolumeSecurityStyle"></a>

```python
root_volume_security_style: str
```

- *Type:* str

The security style of the root volume of the SVM. Allowed values: UNIX | NTFS | MIXED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#root_volume_security_style FsxStorageVirtualMachine#root_volume_security_style}

---

##### `svm_admin_password`<sup>Optional</sup> <a name="svm_admin_password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.svmAdminPassword"></a>

```python
svm_admin_password: str
```

- *Type:* str

Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#svm_admin_password FsxStorageVirtualMachine#svm_admin_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FsxStorageVirtualMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]

A list of Tag values, with a maximum of 50 elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#tags FsxStorageVirtualMachine#tags}

---

### FsxStorageVirtualMachineTags <a name="FsxStorageVirtualMachineTags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#key FsxStorageVirtualMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#value FsxStorageVirtualMachine#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#key FsxStorageVirtualMachine#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#value FsxStorageVirtualMachine#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration">put_self_managed_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetBiosName">reset_net_bios_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration">reset_self_managed_active_directory_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_self_managed_active_directory_configuration` <a name="put_self_managed_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration"></a>

```python
def put_self_managed_active_directory_configuration(
  dns_ips: typing.List[str] = None,
  domain_join_service_account_secret: str = None,
  domain_name: str = None,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None,
  password: str = None,
  user_name: str = None
) -> None
```

###### `dns_ips`<sup>Optional</sup> <a name="dns_ips" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.dnsIps"></a>

- *Type:* typing.List[str]

A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory.

Minimum: 1. Maximum: 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#dns_ips FsxStorageVirtualMachine#dns_ips}

---

###### `domain_join_service_account_secret`<sup>Optional</sup> <a name="domain_join_service_account_secret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.domainJoinServiceAccountSecret"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials.

Minimum: 64. Maximum: 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_join_service_account_secret FsxStorageVirtualMachine#domain_join_service_account_secret}

---

###### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.domainName"></a>

- *Type:* str

The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_name FsxStorageVirtualMachine#domain_name}

---

###### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.fileSystemAdministratorsGroup"></a>

- *Type:* str

The name of the domain group whose members are granted administrative privileges for the file system.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_administrators_group FsxStorageVirtualMachine#file_system_administrators_group}

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

The fully qualified distinguished name of the organizational unit within your self-managed AD directory.

Minimum: 1. Maximum: 2000. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#organizational_unit_distinguished_name FsxStorageVirtualMachine#organizational_unit_distinguished_name}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.password"></a>

- *Type:* str

The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^.{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#password FsxStorageVirtualMachine#password}

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.userName"></a>

- *Type:* str

The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#user_name FsxStorageVirtualMachine#user_name}

---

##### `reset_net_bios_name` <a name="reset_net_bios_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetBiosName"></a>

```python
def reset_net_bios_name() -> None
```

##### `reset_self_managed_active_directory_configuration` <a name="reset_self_managed_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration"></a>

```python
def reset_self_managed_active_directory_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">self_managed_active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosNameInput">net_bios_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput">self_managed_active_directory_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosName">net_bios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `self_managed_active_directory_configuration`<sup>Required</sup> <a name="self_managed_active_directory_configuration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```python
self_managed_active_directory_configuration: FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a>

---

##### `net_bios_name_input`<sup>Optional</sup> <a name="net_bios_name_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosNameInput"></a>

```python
net_bios_name_input: str
```

- *Type:* str

---

##### `self_managed_active_directory_configuration_input`<sup>Optional</sup> <a name="self_managed_active_directory_configuration_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput"></a>

```python
self_managed_active_directory_configuration_input: IResolvable | FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `net_bios_name`<sup>Required</sup> <a name="net_bios_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosName"></a>

```python
net_bios_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDnsIps">reset_dns_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainJoinServiceAccountSecret">reset_domain_join_service_account_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup">reset_file_system_administrators_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_ips` <a name="reset_dns_ips" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDnsIps"></a>

```python
def reset_dns_ips() -> None
```

##### `reset_domain_join_service_account_secret` <a name="reset_domain_join_service_account_secret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainJoinServiceAccountSecret"></a>

```python
def reset_domain_join_service_account_secret() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_file_system_administrators_group` <a name="reset_file_system_administrators_group" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup"></a>

```python
def reset_file_system_administrators_group() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput">dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecretInput">domain_join_service_account_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput">file_system_administrators_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecret">domain_join_service_account_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips_input`<sup>Optional</sup> <a name="dns_ips_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput"></a>

```python
dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_join_service_account_secret_input`<sup>Optional</sup> <a name="domain_join_service_account_secret_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecretInput"></a>

```python
domain_join_service_account_secret_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `file_system_administrators_group_input`<sup>Optional</sup> <a name="file_system_administrators_group_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```python
file_system_administrators_group_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_join_service_account_secret`<sup>Required</sup> <a name="domain_join_service_account_secret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecret"></a>

```python
domain_join_service_account_secret: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `file_system_administrators_group`<sup>Required</sup> <a name="file_system_administrators_group" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### FsxStorageVirtualMachineTagsList <a name="FsxStorageVirtualMachineTagsList" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxStorageVirtualMachineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxStorageVirtualMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>]

---


### FsxStorageVirtualMachineTagsOutputReference <a name="FsxStorageVirtualMachineTagsOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_storage_virtual_machine

fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxStorageVirtualMachineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>

---



