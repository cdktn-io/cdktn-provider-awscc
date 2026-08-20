# `efsAccessPoint` Submodule <a name="`efsAccessPoint` Submodule" id="@cdktn/provider-awscc.efsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsAccessPoint <a name="EfsAccessPoint" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point awscc_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPoint(
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
  access_point_tags: IResolvable | typing.List[EfsAccessPointAccessPointTags] = None,
  client_token: str = None,
  posix_user: EfsAccessPointPosixUser = None,
  root_directory: EfsAccessPointRootDirectory = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the EFS file system that the access point applies to. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.accessPointTags">access_point_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | The opaque string specified in the request to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.fileSystemId"></a>

- *Type:* str

The ID of the EFS file system that the access point applies to.

Accepts only the ID format for input when specifying a file system, for example `fs-0123456789abcedf2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#file_system_id EfsAccessPoint#file_system_id}

---

##### `access_point_tags`<sup>Optional</sup> <a name="access_point_tags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.accessPointTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#access_point_tags EfsAccessPoint#access_point_tags}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.clientToken"></a>

- *Type:* str

The opaque string specified in the request to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#client_token EfsAccessPoint#client_token}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags">put_access_point_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser">put_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory">put_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetAccessPointTags">reset_access_point_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetRootDirectory">reset_root_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_point_tags` <a name="put_access_point_tags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags"></a>

```python
def put_access_point_tags(
  value: IResolvable | typing.List[EfsAccessPointAccessPointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putAccessPointTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]

---

##### `put_posix_user` <a name="put_posix_user" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser"></a>

```python
def put_posix_user(
  gid: str = None,
  secondary_gids: typing.List[str] = None,
  uid: str = None
) -> None
```

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.gid"></a>

- *Type:* str

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#gid EfsAccessPoint#gid}

---

###### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.secondaryGids"></a>

- *Type:* typing.List[str]

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.uid"></a>

- *Type:* str

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#uid EfsAccessPoint#uid}

---

##### `put_root_directory` <a name="put_root_directory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory"></a>

```python
def put_root_directory(
  creation_info: EfsAccessPointRootDirectoryCreationInfo = None,
  path: str = None
) -> None
```

###### `creation_info`<sup>Optional</sup> <a name="creation_info" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.creationInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``.

If the `RootDirectory` > `Path` specified does not exist, EFS creates the root directory using the `CreationInfo` settings when a client connects to an access point. When specifying the `CreationInfo`, you must provide values for all properties.
If you do not provide `CreationInfo` and the specified `RootDirectory` > `Path` does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.path"></a>

- *Type:* str

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the `CreationInfo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#path EfsAccessPoint#path}

---

##### `reset_access_point_tags` <a name="reset_access_point_tags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetAccessPointTags"></a>

```python
def reset_access_point_tags() -> None
```

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EfsAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EfsAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EfsAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EfsAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EfsAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointId">access_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTags">access_point_tags</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList">EfsAccessPointAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTagsInput">access_point_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUserInput">posix_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput">root_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_point_id`<sup>Required</sup> <a name="access_point_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

---

##### `access_point_tags`<sup>Required</sup> <a name="access_point_tags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTags"></a>

```python
access_point_tags: EfsAccessPointAccessPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList">EfsAccessPointAccessPointTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUser"></a>

```python
posix_user: EfsAccessPointPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a>

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectory"></a>

```python
root_directory: EfsAccessPointRootDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a>

---

##### `access_point_tags_input`<sup>Optional</sup> <a name="access_point_tags_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.accessPointTagsInput"></a>

```python
access_point_tags_input: IResolvable | typing.List[EfsAccessPointAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.posixUserInput"></a>

```python
posix_user_input: IResolvable | EfsAccessPointPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput"></a>

```python
root_directory_input: IResolvable | EfsAccessPointRootDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EfsAccessPointAccessPointTags <a name="EfsAccessPointAccessPointTags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointAccessPointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.key">key</a></code> | <code>str</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.value">value</a></code> | <code>str</code> | The value of the tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#key EfsAccessPoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#value EfsAccessPoint#value}

---

### EfsAccessPointConfig <a name="EfsAccessPointConfig" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  access_point_tags: IResolvable | typing.List[EfsAccessPointAccessPointTags] = None,
  client_token: str = None,
  posix_user: EfsAccessPointPosixUser = None,
  root_directory: EfsAccessPointRootDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the EFS file system that the access point applies to. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.accessPointTags">access_point_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.clientToken">client_token</a></code> | <code>str</code> | The opaque string specified in the request to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The ID of the EFS file system that the access point applies to.

Accepts only the ID format for input when specifying a file system, for example `fs-0123456789abcedf2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#file_system_id EfsAccessPoint#file_system_id}

---

##### `access_point_tags`<sup>Optional</sup> <a name="access_point_tags" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.accessPointTags"></a>

```python
access_point_tags: IResolvable | typing.List[EfsAccessPointAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#access_point_tags EfsAccessPoint#access_point_tags}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

The opaque string specified in the request to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#client_token EfsAccessPoint#client_token}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.posixUser"></a>

```python
posix_user: EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory"></a>

```python
root_directory: EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

### EfsAccessPointPosixUser <a name="EfsAccessPointPosixUser" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointPosixUser(
  gid: str = None,
  secondary_gids: typing.List[str] = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.gid">gid</a></code> | <code>str</code> | The POSIX group ID used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[str]</code> | Secondary POSIX group IDs used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.uid">uid</a></code> | <code>str</code> | The POSIX user ID used for all file system operations using this access point. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.gid"></a>

```python
gid: str
```

- *Type:* str

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#gid EfsAccessPoint#gid}

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids"></a>

```python
secondary_gids: typing.List[str]
```

- *Type:* typing.List[str]

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser.property.uid"></a>

```python
uid: str
```

- *Type:* str

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#uid EfsAccessPoint#uid}

---

### EfsAccessPointRootDirectory <a name="EfsAccessPointRootDirectory" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectory(
  creation_info: EfsAccessPointRootDirectoryCreationInfo = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo">creation_info</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | (Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.path">path</a></code> | <code>str</code> | Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. |

---

##### `creation_info`<sup>Optional</sup> <a name="creation_info" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo"></a>

```python
creation_info: EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``.

If the `RootDirectory` > `Path` specified does not exist, EFS creates the root directory using the `CreationInfo` settings when a client connects to an access point. When specifying the `CreationInfo`, you must provide values for all properties.
If you do not provide `CreationInfo` and the specified `RootDirectory` > `Path` does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory.property.path"></a>

```python
path: str
```

- *Type:* str

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the `CreationInfo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#path EfsAccessPoint#path}

---

### EfsAccessPointRootDirectoryCreationInfo <a name="EfsAccessPointRootDirectoryCreationInfo" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo(
  owner_gid: str = None,
  owner_uid: str = None,
  permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid">owner_gid</a></code> | <code>str</code> | Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid">owner_uid</a></code> | <code>str</code> | Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions">permissions</a></code> | <code>str</code> | Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits. |

---

##### `owner_gid`<sup>Optional</sup> <a name="owner_gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid"></a>

```python
owner_gid: str
```

- *Type:* str

Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#owner_gid EfsAccessPoint#owner_gid}

---

##### `owner_uid`<sup>Optional</sup> <a name="owner_uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid"></a>

```python
owner_uid: str
```

- *Type:* str

Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#owner_uid EfsAccessPoint#owner_uid}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#permissions EfsAccessPoint#permissions}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsAccessPointAccessPointTagsList <a name="EfsAccessPointAccessPointTagsList" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointAccessPointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EfsAccessPointAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EfsAccessPointAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>]

---


### EfsAccessPointAccessPointTagsOutputReference <a name="EfsAccessPointAccessPointTagsOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsAccessPointAccessPointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointAccessPointTags">EfsAccessPointAccessPointTags</a>

---


### EfsAccessPointPosixUserOutputReference <a name="EfsAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gid` <a name="reset_gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsAccessPointPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---


### EfsAccessPointRootDirectoryCreationInfoOutputReference <a name="EfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerGid">reset_owner_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerUid">reset_owner_uid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner_gid` <a name="reset_owner_gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerGid"></a>

```python
def reset_owner_gid() -> None
```

##### `reset_owner_uid` <a name="reset_owner_uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetOwnerUid"></a>

```python
def reset_owner_uid() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput">owner_gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput">owner_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">owner_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">owner_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_gid_input`<sup>Optional</sup> <a name="owner_gid_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput"></a>

```python
owner_gid_input: str
```

- *Type:* str

---

##### `owner_uid_input`<sup>Optional</sup> <a name="owner_uid_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput"></a>

```python
owner_uid_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```python
owner_gid: str
```

- *Type:* str

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```python
owner_uid: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---


### EfsAccessPointRootDirectoryOutputReference <a name="EfsAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import efs_access_point

efsAccessPoint.EfsAccessPointRootDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo">put_creation_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo">reset_creation_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_creation_info` <a name="put_creation_info" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo"></a>

```python
def put_creation_info(
  owner_gid: str = None,
  owner_uid: str = None,
  permissions: str = None
) -> None
```

###### `owner_gid`<sup>Optional</sup> <a name="owner_gid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.ownerGid"></a>

- *Type:* str

Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#owner_gid EfsAccessPoint#owner_gid}

---

###### `owner_uid`<sup>Optional</sup> <a name="owner_uid" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.ownerUid"></a>

- *Type:* str

Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#owner_uid EfsAccessPoint#owner_uid}

---

###### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.permissions"></a>

- *Type:* str

Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/efs_access_point#permissions EfsAccessPoint#permissions}

---

##### `reset_creation_info` <a name="reset_creation_info" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo"></a>

```python
def reset_creation_info() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo">creation_info</a></code> | <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput">creation_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_info`<sup>Required</sup> <a name="creation_info" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```python
creation_info: EfsAccessPointRootDirectoryCreationInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `creation_info_input`<sup>Optional</sup> <a name="creation_info_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput"></a>

```python
creation_info_input: IResolvable | EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EfsAccessPointRootDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---



