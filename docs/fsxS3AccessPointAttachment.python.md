# `fsxS3AccessPointAttachment` Submodule <a name="`fsxS3AccessPointAttachment` Submodule" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxS3AccessPointAttachment <a name="FsxS3AccessPointAttachment" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachment(
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
  type: str,
  ontap_configuration: FsxS3AccessPointAttachmentOntapConfiguration = None,
  open_zfs_configuration: FsxS3AccessPointAttachmentOpenZfsConfiguration = None,
  s3_access_point: FsxS3AccessPointAttachmentS3AccessPoint = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the S3 access point attachment; also used for the name of the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of Amazon FSx volume that the S3 access point is attached to. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a></code> | The OntapConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | The OpenZFSConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.s3AccessPoint">s3_access_point</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a></code> | The S3 access point configuration of the S3 access point attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.name"></a>

- *Type:* str

The name of the S3 access point attachment; also used for the name of the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.type"></a>

- *Type:* str

The type of Amazon FSx volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `ontap_configuration`<sup>Optional</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.ontapConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

The OntapConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#ontap_configuration FsxS3AccessPointAttachment#ontap_configuration}

---

##### `open_zfs_configuration`<sup>Optional</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.openZfsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

The OpenZFSConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#open_zfs_configuration FsxS3AccessPointAttachment#open_zfs_configuration}

---

##### `s3_access_point`<sup>Optional</sup> <a name="s3_access_point" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.s3AccessPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

The S3 access point configuration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration">put_ontap_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration">put_open_zfs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint">put_s3_access_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOntapConfiguration">reset_ontap_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenZfsConfiguration">reset_open_zfs_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint">reset_s3_access_point</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ontap_configuration` <a name="put_ontap_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration"></a>

```python
def put_ontap_configuration(
  file_system_identity: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity = None,
  volume_id: str = None
) -> None
```

###### `file_system_identity`<sup>Optional</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration.parameter.fileSystemIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

###### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOntapConfiguration.parameter.volumeId"></a>

- *Type:* str

The ID of the FSx for ONTAP volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

##### `put_open_zfs_configuration` <a name="put_open_zfs_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration"></a>

```python
def put_open_zfs_configuration(
  file_system_identity: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity = None,
  volume_id: str = None
) -> None
```

###### `file_system_identity`<sup>Optional</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration.parameter.fileSystemIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

###### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenZfsConfiguration.parameter.volumeId"></a>

- *Type:* str

The ID of the FSx for OpenZFS volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

##### `put_s3_access_point` <a name="put_s3_access_point" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint"></a>

```python
def put_s3_access_point(
  policy: str = None,
  vpc_configuration: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration = None
) -> None
```

###### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint.parameter.policy"></a>

- *Type:* str

The S3 access point's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

The S3 access point's virtual private cloud (VPC) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}

---

##### `reset_ontap_configuration` <a name="reset_ontap_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOntapConfiguration"></a>

```python
def reset_ontap_configuration() -> None
```

##### `reset_open_zfs_configuration` <a name="reset_open_zfs_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenZfsConfiguration"></a>

```python
def reset_open_zfs_configuration() -> None
```

##### `reset_s3_access_point` <a name="reset_s3_access_point" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint"></a>

```python
def reset_s3_access_point() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FsxS3AccessPointAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FsxS3AccessPointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FsxS3AccessPointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference">FsxS3AccessPointAttachmentOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint">s3_access_point</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference">FsxS3AccessPointAttachmentS3AccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfigurationInput">ontap_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfigurationInput">open_zfs_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput">s3_access_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ontap_configuration`<sup>Required</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfiguration"></a>

```python
ontap_configuration: FsxS3AccessPointAttachmentOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference">FsxS3AccessPointAttachmentOntapConfigurationOutputReference</a>

---

##### `open_zfs_configuration`<sup>Required</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a>

---

##### `s3_access_point`<sup>Required</sup> <a name="s3_access_point" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint"></a>

```python
s3_access_point: FsxS3AccessPointAttachmentS3AccessPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference">FsxS3AccessPointAttachmentS3AccessPointOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ontap_configuration_input`<sup>Optional</sup> <a name="ontap_configuration_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.ontapConfigurationInput"></a>

```python
ontap_configuration_input: IResolvable | FsxS3AccessPointAttachmentOntapConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

---

##### `open_zfs_configuration_input`<sup>Optional</sup> <a name="open_zfs_configuration_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openZfsConfigurationInput"></a>

```python
open_zfs_configuration_input: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

---

##### `s3_access_point_input`<sup>Optional</sup> <a name="s3_access_point_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput"></a>

```python
s3_access_point_input: IResolvable | FsxS3AccessPointAttachmentS3AccessPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxS3AccessPointAttachmentConfig <a name="FsxS3AccessPointAttachmentConfig" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  ontap_configuration: FsxS3AccessPointAttachmentOntapConfiguration = None,
  open_zfs_configuration: FsxS3AccessPointAttachmentOpenZfsConfiguration = None,
  s3_access_point: FsxS3AccessPointAttachmentS3AccessPoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name">name</a></code> | <code>str</code> | The name of the S3 access point attachment; also used for the name of the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type">type</a></code> | <code>str</code> | The type of Amazon FSx volume that the S3 access point is attached to. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a></code> | The OntapConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | The OpenZFSConfiguration of the S3 access point attachment. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint">s3_access_point</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a></code> | The S3 access point configuration of the S3 access point attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the S3 access point attachment; also used for the name of the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of Amazon FSx volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `ontap_configuration`<sup>Optional</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.ontapConfiguration"></a>

```python
ontap_configuration: FsxS3AccessPointAttachmentOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

The OntapConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#ontap_configuration FsxS3AccessPointAttachment#ontap_configuration}

---

##### `open_zfs_configuration`<sup>Optional</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: FsxS3AccessPointAttachmentOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

The OpenZFSConfiguration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#open_zfs_configuration FsxS3AccessPointAttachment#open_zfs_configuration}

---

##### `s3_access_point`<sup>Optional</sup> <a name="s3_access_point" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint"></a>

```python
s3_access_point: FsxS3AccessPointAttachmentS3AccessPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

The S3 access point configuration of the S3 access point attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}

---

### FsxS3AccessPointAttachmentOntapConfiguration <a name="FsxS3AccessPointAttachmentOntapConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration(
  file_system_identity: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | The file system identity used to authorize file access requests made using the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.volumeId">volume_id</a></code> | <code>str</code> | The ID of the FSx for ONTAP volume that the S3 access point is attached to. |

---

##### `file_system_identity`<sup>Optional</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.fileSystemIdentity"></a>

```python
file_system_identity: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The ID of the FSx for ONTAP volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity(
  type: str = None,
  unix_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser = None,
  windows_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.type">type</a></code> | <code>str</code> | Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.unixUser">unix_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | Specifies the properties of the file system UNIX user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.windowsUser">windows_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | Specifies the properties of the file system Windows user. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `unix_user`<sup>Optional</sup> <a name="unix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.unixUser"></a>

```python
unix_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

Specifies the properties of the file system UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#unix_user FsxS3AccessPointAttachment#unix_user}

---

##### `windows_user`<sup>Optional</sup> <a name="windows_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.property.windowsUser"></a>

```python
windows_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

Specifies the properties of the file system Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#windows_user FsxS3AccessPointAttachment#windows_user}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.property.name">name</a></code> | <code>str</code> | The name of the UNIX user. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.property.name">name</a></code> | <code>str</code> | The name of the Windows user. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

### FsxS3AccessPointAttachmentOpenZfsConfiguration <a name="FsxS3AccessPointAttachmentOpenZfsConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration(
  file_system_identity: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | The file system identity used to authorize file access requests made using the S3 access point. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.volumeId">volume_id</a></code> | <code>str</code> | The ID of the FSx for OpenZFS volume that the S3 access point is attached to. |

---

##### `file_system_identity`<sup>Optional</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.fileSystemIdentity"></a>

```python
file_system_identity: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

The file system identity used to authorize file access requests made using the S3 access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The ID of the FSx for OpenZFS volume that the S3 access point is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity(
  posix_user: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | Specifies the UID and GIDs of the file system POSIX user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.type">type</a></code> | <code>str</code> | Specifies the FSx for OpenZFS user identity type, accepts only POSIX. |

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.posixUser"></a>

```python
posix_user: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

Specifies the UID and GIDs of the file system POSIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the FSx for OpenZFS user identity type, accepts only POSIX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser(
  gid: typing.Union[int, float] = None,
  secondary_gids: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids] = None,
  uid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The GID of the file system user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids">secondary_gids</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]</code> | The list of secondary GIDs for the file system user. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | The UID of the file system user. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The GID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids"></a>

```python
secondary_gids: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]

The list of secondary GIDs for the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The UID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}

---

### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids(
  gid: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | The GID of the file system user. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The GID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}

---

### FsxS3AccessPointAttachmentS3AccessPoint <a name="FsxS3AccessPointAttachmentS3AccessPoint" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint(
  policy: str = None,
  vpc_configuration: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy">policy</a></code> | <code>str</code> | The S3 access point's policy. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | The S3 access point's virtual private cloud (VPC) configuration. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy"></a>

```python
policy: str
```

- *Type:* str

The S3 access point's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration"></a>

```python
vpc_configuration: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

The S3 access point's virtual private cloud (VPC) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}

---

### FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration(
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists. |

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser">put_unix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser">put_windows_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetUnixUser">reset_unix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetWindowsUser">reset_windows_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_unix_user` <a name="put_unix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser"></a>

```python
def put_unix_user(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putUnixUser.parameter.name"></a>

- *Type:* str

The name of the UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

##### `put_windows_user` <a name="put_windows_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser"></a>

```python
def put_windows_user(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.putWindowsUser.parameter.name"></a>

- *Type:* str

The name of the Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}

---

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_unix_user` <a name="reset_unix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetUnixUser"></a>

```python
def reset_unix_user() -> None
```

##### `reset_windows_user` <a name="reset_windows_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resetWindowsUser"></a>

```python
def reset_windows_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser">unix_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser">windows_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUserInput">unix_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUserInput">windows_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unix_user`<sup>Required</sup> <a name="unix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser"></a>

```python
unix_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a>

---

##### `windows_user`<sup>Required</sup> <a name="windows_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser"></a>

```python
windows_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unix_user_input`<sup>Optional</sup> <a name="unix_user_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUserInput"></a>

```python
unix_user_input: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

---

##### `windows_user_input`<sup>Optional</sup> <a name="windows_user_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUserInput"></a>

```python
windows_user_input: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

---


### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

---


### FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

---


### FsxS3AccessPointAttachmentOntapConfigurationOutputReference <a name="FsxS3AccessPointAttachmentOntapConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity">put_file_system_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetFileSystemIdentity">reset_file_system_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_system_identity` <a name="put_file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity"></a>

```python
def put_file_system_identity(
  type: str = None,
  unix_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser = None,
  windows_user: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity.parameter.type"></a>

- *Type:* str

Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

###### `unix_user`<sup>Optional</sup> <a name="unix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity.parameter.unixUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

Specifies the properties of the file system UNIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#unix_user FsxS3AccessPointAttachment#unix_user}

---

###### `windows_user`<sup>Optional</sup> <a name="windows_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.putFileSystemIdentity.parameter.windowsUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

Specifies the properties of the file system Windows user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#windows_user FsxS3AccessPointAttachment#windows_user}

---

##### `reset_file_system_identity` <a name="reset_file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetFileSystemIdentity"></a>

```python
def reset_file_system_identity() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentityInput">file_system_identity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_identity`<sup>Required</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity"></a>

```python
file_system_identity: FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a>

---

##### `file_system_identity_input`<sup>Optional</sup> <a name="file_system_identity_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentityInput"></a>

```python
file_system_identity_input: IResolvable | FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOntapConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOntapConfiguration">FsxS3AccessPointAttachmentOntapConfiguration</a>

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser">put_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_posix_user` <a name="put_posix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser"></a>

```python
def put_posix_user(
  gid: typing.Union[int, float] = None,
  secondary_gids: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids] = None,
  uid: typing.Union[int, float] = None
) -> None
```

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser.parameter.gid"></a>

- *Type:* typing.Union[int, float]

The GID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}

---

###### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser.parameter.secondaryGids"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]

The list of secondary GIDs for the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.putPosixUser.parameter.uid"></a>

- *Type:* typing.Union[int, float]

The UID of the file system user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}

---

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput">posix_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser"></a>

```python
posix_user: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a>

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput"></a>

```python
posix_user_input: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids">put_secondary_gids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secondary_gids` <a name="put_secondary_gids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids"></a>

```python
def put_secondary_gids(
  value: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.putSecondaryGids.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]

---

##### `reset_gid` <a name="reset_gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a>

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>]

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resetGid">reset_gid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gid` <a name="reset_gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>

---


### FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference <a name="FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity">put_file_system_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetFileSystemIdentity">reset_file_system_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_system_identity` <a name="put_file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity"></a>

```python
def put_file_system_identity(
  posix_user: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser = None,
  type: str = None
) -> None
```

###### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity.parameter.posixUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

Specifies the UID and GIDs of the file system POSIX user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.putFileSystemIdentity.parameter.type"></a>

- *Type:* str

Specifies the FSx for OpenZFS user identity type, accepts only POSIX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}

---

##### `reset_file_system_identity` <a name="reset_file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetFileSystemIdentity"></a>

```python
def reset_file_system_identity() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentityInput">file_system_identity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_identity`<sup>Required</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity"></a>

```python
file_system_identity: FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a>

---

##### `file_system_identity_input`<sup>Optional</sup> <a name="file_system_identity_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentityInput"></a>

```python
file_system_identity_input: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">FsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentOpenZfsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenZfsConfiguration">FsxS3AccessPointAttachmentOpenZfsConfiguration</a>

---


### FsxS3AccessPointAttachmentS3AccessPointOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  vpc_id: str = None
) -> None
```

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}

---

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a>

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentS3AccessPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint">FsxS3AccessPointAttachmentS3AccessPoint</a>

---


### FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fsx_s3_access_point_attachment

fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

---



