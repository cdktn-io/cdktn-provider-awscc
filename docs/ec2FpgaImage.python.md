# `ec2FpgaImage` Submodule <a name="`ec2FpgaImage` Submodule" id="@cdktn/provider-awscc.ec2FpgaImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FpgaImage <a name="Ec2FpgaImage" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image awscc_ec2_fpga_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  input_storage_location: Ec2FpgaImageInputStorageLocation = None,
  logs_storage_location: Ec2FpgaImageLogsStorageLocation = None,
  name: str = None,
  tags: IResolvable | typing.List[Ec2FpgaImageTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.inputStorageLocation">input_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.logsStorageLocation">logs_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | The location in Amazon S3 for the output logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]</code> | The tags assigned to the FPGA image. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.description"></a>

- *Type:* str

A description for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#description Ec2FpgaImage#description}

---

##### `input_storage_location`<sup>Optional</sup> <a name="input_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.inputStorageLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#input_storage_location Ec2FpgaImage#input_storage_location}

---

##### `logs_storage_location`<sup>Optional</sup> <a name="logs_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.logsStorageLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

The location in Amazon S3 for the output logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#logs_storage_location Ec2FpgaImage#logs_storage_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.name"></a>

- *Type:* str

A name for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#name Ec2FpgaImage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]

The tags assigned to the FPGA image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#tags Ec2FpgaImage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation">put_input_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation">put_logs_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetInputStorageLocation">reset_input_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetLogsStorageLocation">reset_logs_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_storage_location` <a name="put_input_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation"></a>

```python
def put_input_storage_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation.parameter.bucket"></a>

- *Type:* str

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation.parameter.key"></a>

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

##### `put_logs_storage_location` <a name="put_logs_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation"></a>

```python
def put_logs_storage_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation.parameter.bucket"></a>

- *Type:* str

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation.parameter.key"></a>

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2FpgaImageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_storage_location` <a name="reset_input_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetInputStorageLocation"></a>

```python
def reset_input_storage_location() -> None
```

##### `reset_logs_storage_location` <a name="reset_logs_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetLogsStorageLocation"></a>

```python
def reset_logs_storage_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2FpgaImage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2FpgaImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2FpgaImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2FpgaImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FpgaImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dataRetentionSupport">data_retention_support</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageGlobalId">fpga_image_global_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageId">fpga_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocation">input_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference">Ec2FpgaImageInputStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocation">logs_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference">Ec2FpgaImageLogsStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.public">public</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList">Ec2FpgaImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocationInput">input_storage_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocationInput">logs_storage_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_retention_support`<sup>Required</sup> <a name="data_retention_support" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dataRetentionSupport"></a>

```python
data_retention_support: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `fpga_image_global_id`<sup>Required</sup> <a name="fpga_image_global_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageGlobalId"></a>

```python
fpga_image_global_id: str
```

- *Type:* str

---

##### `fpga_image_id`<sup>Required</sup> <a name="fpga_image_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageId"></a>

```python
fpga_image_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_storage_location`<sup>Required</sup> <a name="input_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocation"></a>

```python
input_storage_location: Ec2FpgaImageInputStorageLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference">Ec2FpgaImageInputStorageLocationOutputReference</a>

---

##### `logs_storage_location`<sup>Required</sup> <a name="logs_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocation"></a>

```python
logs_storage_location: Ec2FpgaImageLogsStorageLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference">Ec2FpgaImageLogsStorageLocationOutputReference</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.public"></a>

```python
public: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tags"></a>

```python
tags: Ec2FpgaImageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList">Ec2FpgaImageTagsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_storage_location_input`<sup>Optional</sup> <a name="input_storage_location_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocationInput"></a>

```python
input_storage_location_input: IResolvable | Ec2FpgaImageInputStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

---

##### `logs_storage_location_input`<sup>Optional</sup> <a name="logs_storage_location_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocationInput"></a>

```python
logs_storage_location_input: IResolvable | Ec2FpgaImageLogsStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2FpgaImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FpgaImageConfig <a name="Ec2FpgaImageConfig" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  input_storage_location: Ec2FpgaImageInputStorageLocation = None,
  logs_storage_location: Ec2FpgaImageLogsStorageLocation = None,
  name: str = None,
  tags: IResolvable | typing.List[Ec2FpgaImageTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.description">description</a></code> | <code>str</code> | A description for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.inputStorageLocation">input_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.logsStorageLocation">logs_storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | The location in Amazon S3 for the output logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.name">name</a></code> | <code>str</code> | A name for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]</code> | The tags assigned to the FPGA image. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#description Ec2FpgaImage#description}

---

##### `input_storage_location`<sup>Optional</sup> <a name="input_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.inputStorageLocation"></a>

```python
input_storage_location: Ec2FpgaImageInputStorageLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#input_storage_location Ec2FpgaImage#input_storage_location}

---

##### `logs_storage_location`<sup>Optional</sup> <a name="logs_storage_location" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.logsStorageLocation"></a>

```python
logs_storage_location: Ec2FpgaImageLogsStorageLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

The location in Amazon S3 for the output logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#logs_storage_location Ec2FpgaImage#logs_storage_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#name Ec2FpgaImage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2FpgaImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]

The tags assigned to the FPGA image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#tags Ec2FpgaImage#tags}

---

### Ec2FpgaImageInputStorageLocation <a name="Ec2FpgaImageInputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageInputStorageLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.bucket">bucket</a></code> | <code>str</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.key">key</a></code> | <code>str</code> | The key. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.key"></a>

```python
key: str
```

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

### Ec2FpgaImageLogsStorageLocation <a name="Ec2FpgaImageLogsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageLogsStorageLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.bucket">bucket</a></code> | <code>str</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.key">key</a></code> | <code>str</code> | The key. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.key"></a>

```python
key: str
```

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

### Ec2FpgaImageTags <a name="Ec2FpgaImageTags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#value Ec2FpgaImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FpgaImageInputStorageLocationOutputReference <a name="Ec2FpgaImageInputStorageLocationOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FpgaImageInputStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

---


### Ec2FpgaImageLogsStorageLocationOutputReference <a name="Ec2FpgaImageLogsStorageLocationOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FpgaImageLogsStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

---


### Ec2FpgaImageTagsList <a name="Ec2FpgaImageTagsList" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FpgaImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FpgaImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>]

---


### Ec2FpgaImageTagsOutputReference <a name="Ec2FpgaImageTagsOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fpga_image

ec2FpgaImage.Ec2FpgaImageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FpgaImageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>

---



