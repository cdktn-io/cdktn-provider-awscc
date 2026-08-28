# `datasyncLocationFsxOntap` Submodule <a name="`datasyncLocationFsxOntap` Submodule" id="@cdktn/provider-awscc.datasyncLocationFsxOntap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxOntap <a name="DatasyncLocationFsxOntap" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntap(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_group_arns: typing.List[str],
  storage_virtual_machine_arn: str,
  protocol: DatasyncLocationFsxOntapProtocol = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationFsxOntapTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the security groups that are to use to configure the FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.storageVirtualMachineArn">storage_virtual_machine_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the FSx ONTAP SVM. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | Configuration settings for NFS or SMB protocol. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.securityGroupArns"></a>

- *Type:* typing.List[str]

The ARNs of the security groups that are to use to configure the FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#security_group_arns DatasyncLocationFsxOntap#security_group_arns}

---

##### `storage_virtual_machine_arn`<sup>Required</sup> <a name="storage_virtual_machine_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.storageVirtualMachineArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the FSx ONTAP SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#storage_virtual_machine_arn DatasyncLocationFsxOntap#storage_virtual_machine_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.protocol"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

Configuration settings for NFS or SMB protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#protocol DatasyncLocationFsxOntap#protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.subdirectory"></a>

- *Type:* str

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#subdirectory DatasyncLocationFsxOntap#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#tags DatasyncLocationFsxOntap#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol">put_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_protocol` <a name="put_protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol"></a>

```python
def put_protocol(
  nfs: DatasyncLocationFsxOntapProtocolNfs = None,
  smb: DatasyncLocationFsxOntapProtocolSmb = None
) -> None
```

###### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol.parameter.nfs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

NFS protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#nfs DatasyncLocationFsxOntap#nfs}

---

###### `smb`<sup>Optional</sup> <a name="smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putProtocol.parameter.smb"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

SMB protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#smb DatasyncLocationFsxOntap#smb}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncLocationFsxOntapTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]

---

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncLocationFsxOntap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncLocationFsxOntap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxOntap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput">protocol_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput">security_group_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput">storage_virtual_machine_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn">storage_virtual_machine_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.fsxFilesystemArn"></a>

```python
fsx_filesystem_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocol"></a>

```python
protocol: DatasyncLocationFsxOntapProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference">DatasyncLocationFsxOntapProtocolOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tags"></a>

```python
tags: DatasyncLocationFsxOntapTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList">DatasyncLocationFsxOntapTagsList</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.protocolInput"></a>

```python
protocol_input: IResolvable | DatasyncLocationFsxOntapProtocol
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---

##### `security_group_arns_input`<sup>Optional</sup> <a name="security_group_arns_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArnsInput"></a>

```python
security_group_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_virtual_machine_arn_input`<sup>Optional</sup> <a name="storage_virtual_machine_arn_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArnInput"></a>

```python
storage_virtual_machine_arn_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncLocationFsxOntapTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_virtual_machine_arn`<sup>Required</sup> <a name="storage_virtual_machine_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.storageVirtualMachineArn"></a>

```python
storage_virtual_machine_arn: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxOntapConfig <a name="DatasyncLocationFsxOntapConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_group_arns: typing.List[str],
  storage_virtual_machine_arn: str,
  protocol: DatasyncLocationFsxOntapProtocol = None,
  subdirectory: str = None,
  tags: IResolvable | typing.List[DatasyncLocationFsxOntapTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the security groups that are to use to configure the FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn">storage_virtual_machine_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the FSx ONTAP SVM. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | Configuration settings for NFS or SMB protocol. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory">subdirectory</a></code> | <code>str</code> | A subdirectory in the location's path. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the security groups that are to use to configure the FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#security_group_arns DatasyncLocationFsxOntap#security_group_arns}

---

##### `storage_virtual_machine_arn`<sup>Required</sup> <a name="storage_virtual_machine_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.storageVirtualMachineArn"></a>

```python
storage_virtual_machine_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the FSx ONTAP SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#storage_virtual_machine_arn DatasyncLocationFsxOntap#storage_virtual_machine_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.protocol"></a>

```python
protocol: DatasyncLocationFsxOntapProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

Configuration settings for NFS or SMB protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#protocol DatasyncLocationFsxOntap#protocol}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

A subdirectory in the location's path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#subdirectory DatasyncLocationFsxOntap#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncLocationFsxOntapTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#tags DatasyncLocationFsxOntap#tags}

---

### DatasyncLocationFsxOntapProtocol <a name="DatasyncLocationFsxOntapProtocol" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol(
  nfs: DatasyncLocationFsxOntapProtocolNfs = None,
  smb: DatasyncLocationFsxOntapProtocolSmb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | NFS protocol configuration for FSx ONTAP file system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | SMB protocol configuration for FSx ONTAP file system. |

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.nfs"></a>

```python
nfs: DatasyncLocationFsxOntapProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

NFS protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#nfs DatasyncLocationFsxOntap#nfs}

---

##### `smb`<sup>Optional</sup> <a name="smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol.property.smb"></a>

```python
smb: DatasyncLocationFsxOntapProtocolSmb
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

SMB protocol configuration for FSx ONTAP file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#smb DatasyncLocationFsxOntap#smb}

---

### DatasyncLocationFsxOntapProtocolNfs <a name="DatasyncLocationFsxOntapProtocolNfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs(
  mount_options: DatasyncLocationFsxOntapProtocolNfsMountOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | The NFS mount options that DataSync can use to mount your NFS share. |

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs.property.mountOptions"></a>

```python
mount_options: DatasyncLocationFsxOntapProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

### DatasyncLocationFsxOntapProtocolNfsMountOptions <a name="DatasyncLocationFsxOntapProtocolNfsMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions(
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version">version</a></code> | <code>str</code> | The specific NFS version that you want DataSync to use to mount your NFS share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions.property.version"></a>

```python
version: str
```

- *Type:* str

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapProtocolSmb <a name="DatasyncLocationFsxOntapProtocolSmb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb(
  cmk_secret_config: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig = None,
  custom_secret_config: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig = None,
  domain: str = None,
  mount_options: DatasyncLocationFsxOntapProtocolSmbMountOptions = None,
  password: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain">domain</a></code> | <code>str</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password">password</a></code> | <code>str</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user">user</a></code> | <code>str</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `cmk_secret_config`<sup>Optional</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#cmk_secret_config DatasyncLocationFsxOntap#cmk_secret_config}

---

##### `custom_secret_config`<sup>Optional</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.customSecretConfig"></a>

```python
custom_secret_config: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#custom_secret_config DatasyncLocationFsxOntap#custom_secret_config}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.domain"></a>

```python
domain: str
```

- *Type:* str

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#domain DatasyncLocationFsxOntap#domain}

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.mountOptions"></a>

```python
mount_options: DatasyncLocationFsxOntapProtocolSmbMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#password DatasyncLocationFsxOntap#password}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb.property.user"></a>

```python
user: str
```

- *Type:* str

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#user DatasyncLocationFsxOntap#user}

---

### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#kms_key_arn DatasyncLocationFsxOntap#kms_key_arn}

---

### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig(
  secret_access_role_arn: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secret_access_role_arn`<sup>Optional</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_access_role_arn DatasyncLocationFsxOntap#secret_access_role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_arn DatasyncLocationFsxOntap#secret_arn}

---

### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig()
```


### DatasyncLocationFsxOntapProtocolSmbMountOptions <a name="DatasyncLocationFsxOntapProtocolSmbMountOptions" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions(
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version">version</a></code> | <code>str</code> | The specific SMB version that you want DataSync to use to mount your SMB share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions.property.version"></a>

```python
version: str
```

- *Type:* str

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

### DatasyncLocationFsxOntapTags <a name="DatasyncLocationFsxOntapTags" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key">key</a></code> | <code>str</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value">value</a></code> | <code>str</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#key DatasyncLocationFsxOntap#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#value DatasyncLocationFsxOntap#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolNfsMountOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---


### DatasyncLocationFsxOntapProtocolNfsOutputReference <a name="DatasyncLocationFsxOntapProtocolNfsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mount_options` <a name="put_mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions"></a>

```python
def put_mount_options(
  version: str = None
) -> None
```

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.putMountOptions.parameter.version"></a>

- *Type:* str

The specific NFS version that you want DataSync to use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions"></a>

```python
mount_options: DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a>

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: IResolvable | DatasyncLocationFsxOntapProtocolNfsMountOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolNfs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---


### DatasyncLocationFsxOntapProtocolOutputReference <a name="DatasyncLocationFsxOntapProtocolOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb">put_smb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb">reset_smb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs` <a name="put_nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs"></a>

```python
def put_nfs(
  mount_options: DatasyncLocationFsxOntapProtocolNfsMountOptions = None
) -> None
```

###### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putNfs.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsMountOptions">DatasyncLocationFsxOntapProtocolNfsMountOptions</a>

The NFS mount options that DataSync can use to mount your NFS share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

##### `put_smb` <a name="put_smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb"></a>

```python
def put_smb(
  cmk_secret_config: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig = None,
  custom_secret_config: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig = None,
  domain: str = None,
  mount_options: DatasyncLocationFsxOntapProtocolSmbMountOptions = None,
  password: str = None,
  user: str = None
) -> None
```

###### `cmk_secret_config`<sup>Optional</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.cmkSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#cmk_secret_config DatasyncLocationFsxOntap#cmk_secret_config}

---

###### `custom_secret_config`<sup>Optional</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.customSecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#custom_secret_config DatasyncLocationFsxOntap#custom_secret_config}

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.domain"></a>

- *Type:* str

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#domain DatasyncLocationFsxOntap#domain}

---

###### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#mount_options DatasyncLocationFsxOntap#mount_options}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.password"></a>

- *Type:* str

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#password DatasyncLocationFsxOntap#password}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.putSmb.parameter.user"></a>

- *Type:* str

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#user DatasyncLocationFsxOntap#user}

---

##### `reset_nfs` <a name="reset_nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_smb` <a name="reset_smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.resetSmb"></a>

```python
def reset_smb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput">nfs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput">smb_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfs"></a>

```python
nfs: DatasyncLocationFsxOntapProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfsOutputReference">DatasyncLocationFsxOntapProtocolNfsOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smb"></a>

```python
smb: DatasyncLocationFsxOntapProtocolSmbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference">DatasyncLocationFsxOntapProtocolSmbOutputReference</a>

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.nfsInput"></a>

```python
nfs_input: IResolvable | DatasyncLocationFsxOntapProtocolNfs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolNfs">DatasyncLocationFsxOntapProtocolNfs</a>

---

##### `smb_input`<sup>Optional</sup> <a name="smb_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.smbInput"></a>

```python
smb_input: IResolvable | DatasyncLocationFsxOntapProtocolSmb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocol
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocol">DatasyncLocationFsxOntapProtocol</a>

---


### DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn">reset_secret_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_access_role_arn` <a name="reset_secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```python
def reset_secret_access_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secret_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_role_arn_input`<sup>Optional</sup> <a name="secret_access_role_arn_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```python
secret_access_role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_access_role_arn`<sup>Required</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a>

---


### DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolSmbMountOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---


### DatasyncLocationFsxOntapProtocolSmbOutputReference <a name="DatasyncLocationFsxOntapProtocolSmbOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig">put_cmk_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig">put_custom_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig">reset_cmk_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig">reset_custom_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cmk_secret_config` <a name="put_cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig"></a>

```python
def put_cmk_secret_config(
  kms_key_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCmkSecretConfig.parameter.kmsKeyArn"></a>

- *Type:* str

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#kms_key_arn DatasyncLocationFsxOntap#kms_key_arn}

---

##### `put_custom_secret_config` <a name="put_custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig"></a>

```python
def put_custom_secret_config(
  secret_access_role_arn: str = None,
  secret_arn: str = None
) -> None
```

###### `secret_access_role_arn`<sup>Optional</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig.parameter.secretAccessRoleArn"></a>

- *Type:* str

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_access_role_arn DatasyncLocationFsxOntap#secret_access_role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putCustomSecretConfig.parameter.secretArn"></a>

- *Type:* str

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#secret_arn DatasyncLocationFsxOntap#secret_arn}

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions"></a>

```python
def put_mount_options(
  version: str = None
) -> None
```

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.putMountOptions.parameter.version"></a>

- *Type:* str

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_fsx_ontap#version DatasyncLocationFsxOntap#version}

---

##### `reset_cmk_secret_config` <a name="reset_cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCmkSecretConfig"></a>

```python
def reset_cmk_secret_config() -> None
```

##### `reset_custom_secret_config` <a name="reset_custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetCustomSecretConfig"></a>

```python
def reset_custom_secret_config() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig">managed_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput">cmk_secret_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput">custom_secret_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_secret_config`<sup>Required</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a>

---

##### `custom_secret_config`<sup>Required</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig"></a>

```python
custom_secret_config: DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a>

---

##### `managed_secret_config`<sup>Required</sup> <a name="managed_secret_config" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig"></a>

```python
managed_secret_config: DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a>

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions"></a>

```python
mount_options: DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a>

---

##### `cmk_secret_config_input`<sup>Optional</sup> <a name="cmk_secret_config_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfigInput"></a>

```python
cmk_secret_config_input: IResolvable | DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---

##### `custom_secret_config_input`<sup>Optional</sup> <a name="custom_secret_config_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfigInput"></a>

```python
custom_secret_config_input: IResolvable | DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: IResolvable | DatasyncLocationFsxOntapProtocolSmbMountOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbMountOptions">DatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapProtocolSmb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapProtocolSmb">DatasyncLocationFsxOntapProtocolSmb</a>

---


### DatasyncLocationFsxOntapTagsList <a name="DatasyncLocationFsxOntapTagsList" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncLocationFsxOntapTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncLocationFsxOntapTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>]

---


### DatasyncLocationFsxOntapTagsOutputReference <a name="DatasyncLocationFsxOntapTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_location_fsx_ontap

datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncLocationFsxOntapTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationFsxOntap.DatasyncLocationFsxOntapTags">DatasyncLocationFsxOntapTags</a>

---



