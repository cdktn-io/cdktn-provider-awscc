# `s3FilesAccessPoint` Submodule <a name="`s3FilesAccessPoint` Submodule" id="@cdktn/provider-awscc.s3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesAccessPoint <a name="S3FilesAccessPoint" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point awscc_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint(
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
  client_token: str = None,
  posix_user: S3FilesAccessPointPosixUser = None,
  root_directory: S3FilesAccessPointRootDirectory = None,
  tags: IResolvable | typing.List[S3FilesAccessPointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the S3 Files file system that the access point provides access to. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | The operating system user and group applied to all compute drive requests made using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.fileSystemId"></a>

- *Type:* str

The ID of the S3 Files file system that the access point provides access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.clientToken"></a>

- *Type:* str

(optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#client_token S3FilesAccessPoint#client_token}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

The operating system user and group applied to all compute drive requests made using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point.

The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser">put_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory">put_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory">reset_root_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_posix_user` <a name="put_posix_user" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser"></a>

```python
def put_posix_user(
  gid: str = None,
  secondary_gids: typing.List[str] = None,
  uid: str = None
) -> None
```

###### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.gid"></a>

- *Type:* str

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

###### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.secondaryGids"></a>

- *Type:* typing.List[str]

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.uid"></a>

- *Type:* str

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

##### `put_root_directory` <a name="put_root_directory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory"></a>

```python
def put_root_directory(
  creation_permissions: S3FilesAccessPointRootDirectoryCreationPermissions = None,
  path: str = None
) -> None
```

###### `creation_permissions`<sup>Optional</sup> <a name="creation_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.creationPermissions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory.

If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.path"></a>

- *Type:* str

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3FilesAccessPointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_root_directory` <a name="reset_root_directory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory"></a>

```python
def reset_root_directory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3FilesAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointArn">access_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointId">access_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference">S3FilesAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference">S3FilesAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList">S3FilesAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput">posix_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput">root_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_point_arn`<sup>Required</sup> <a name="access_point_arn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointArn"></a>

```python
access_point_arn: str
```

- *Type:* str

---

##### `access_point_id`<sup>Required</sup> <a name="access_point_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser"></a>

```python
posix_user: S3FilesAccessPointPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference">S3FilesAccessPointPosixUserOutputReference</a>

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory"></a>

```python
root_directory: S3FilesAccessPointRootDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference">S3FilesAccessPointRootDirectoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tags"></a>

```python
tags: S3FilesAccessPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList">S3FilesAccessPointTagsList</a>

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput"></a>

```python
posix_user_input: IResolvable | S3FilesAccessPointPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput"></a>

```python
root_directory_input: IResolvable | S3FilesAccessPointRootDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3FilesAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesAccessPointConfig <a name="S3FilesAccessPointConfig" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  client_token: str = None,
  posix_user: S3FilesAccessPointPosixUser = None,
  root_directory: S3FilesAccessPointRootDirectory = None,
  tags: IResolvable | typing.List[S3FilesAccessPointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the S3 Files file system that the access point provides access to. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.clientToken">client_token</a></code> | <code>str</code> | (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | The operating system user and group applied to all compute drive requests made using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory">root_directory</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The ID of the S3 Files file system that the access point provides access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

(optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#client_token S3FilesAccessPoint#client_token}

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser"></a>

```python
posix_user: S3FilesAccessPointPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

The operating system user and group applied to all compute drive requests made using the access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `root_directory`<sup>Optional</sup> <a name="root_directory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory"></a>

```python
root_directory: S3FilesAccessPointRootDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point.

The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3FilesAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

### S3FilesAccessPointPosixUser <a name="S3FilesAccessPointPosixUser" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointPosixUser(
  gid: str = None,
  secondary_gids: typing.List[str] = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid">gid</a></code> | <code>str</code> | The POSIX group ID used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[str]</code> | Secondary POSIX group IDs used for all file system operations using this access point. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid">uid</a></code> | <code>str</code> | The POSIX user ID used for all file system operations using this access point. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid"></a>

```python
gid: str
```

- *Type:* str

The POSIX group ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids"></a>

```python
secondary_gids: typing.List[str]
```

- *Type:* typing.List[str]

Secondary POSIX group IDs used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid"></a>

```python
uid: str
```

- *Type:* str

The POSIX user ID used for all file system operations using this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

### S3FilesAccessPointRootDirectory <a name="S3FilesAccessPointRootDirectory" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectory(
  creation_permissions: S3FilesAccessPointRootDirectoryCreationPermissions = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions">creation_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path">path</a></code> | <code>str</code> | Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. |

---

##### `creation_permissions`<sup>Optional</sup> <a name="creation_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```python
creation_permissions: S3FilesAccessPointRootDirectoryCreationPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

(Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory.

If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path"></a>

```python
path: str
```

- *Type:* str

Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.

A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

### S3FilesAccessPointRootDirectoryCreationPermissions <a name="S3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions(
  owner_gid: str = None,
  owner_uid: str = None,
  permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid">owner_gid</a></code> | <code>str</code> | Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid">owner_uid</a></code> | <code>str</code> | Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295). |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions">permissions</a></code> | <code>str</code> | Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits. |

---

##### `owner_gid`<sup>Optional</sup> <a name="owner_gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid"></a>

```python
owner_gid: str
```

- *Type:* str

Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

##### `owner_uid`<sup>Optional</sup> <a name="owner_uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid"></a>

```python
owner_uid: str
```

- *Type:* str

Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

### S3FilesAccessPointTags <a name="S3FilesAccessPointTags" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#key S3FilesAccessPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#value S3FilesAccessPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#key S3FilesAccessPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#value S3FilesAccessPoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesAccessPointPosixUserOutputReference <a name="S3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetGid">reset_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gid` <a name="reset_gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetGid"></a>

```python
def reset_gid() -> None
```

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput">gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput"></a>

```python
gid_input: str
```

- *Type:* str

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointPosixUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---


### S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerGid">reset_owner_gid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerUid">reset_owner_uid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner_gid` <a name="reset_owner_gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerGid"></a>

```python
def reset_owner_gid() -> None
```

##### `reset_owner_uid` <a name="reset_owner_uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetOwnerUid"></a>

```python
def reset_owner_uid() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput">owner_gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput">owner_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">owner_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">owner_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_gid_input`<sup>Optional</sup> <a name="owner_gid_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput"></a>

```python
owner_gid_input: str
```

- *Type:* str

---

##### `owner_uid_input`<sup>Optional</sup> <a name="owner_uid_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput"></a>

```python
owner_uid_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `owner_gid`<sup>Required</sup> <a name="owner_gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```python
owner_gid: str
```

- *Type:* str

---

##### `owner_uid`<sup>Required</sup> <a name="owner_uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```python
owner_uid: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### S3FilesAccessPointRootDirectoryOutputReference <a name="S3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">put_creation_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">reset_creation_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_creation_permissions` <a name="put_creation_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```python
def put_creation_permissions(
  owner_gid: str = None,
  owner_uid: str = None,
  permissions: str = None
) -> None
```

###### `owner_gid`<sup>Optional</sup> <a name="owner_gid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.ownerGid"></a>

- *Type:* str

Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

###### `owner_uid`<sup>Optional</sup> <a name="owner_uid" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.ownerUid"></a>

- *Type:* str

Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

###### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.permissions"></a>

- *Type:* str

Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

##### `reset_creation_permissions` <a name="reset_creation_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```python
def reset_creation_permissions() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creation_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">creation_permissions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_permissions`<sup>Required</sup> <a name="creation_permissions" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```python
creation_permissions: S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a>

---

##### `creation_permissions_input`<sup>Optional</sup> <a name="creation_permissions_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```python
creation_permissions_input: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointRootDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---


### S3FilesAccessPointTagsList <a name="S3FilesAccessPointTagsList" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>]

---


### S3FilesAccessPointTagsOutputReference <a name="S3FilesAccessPointTagsOutputReference" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_access_point

s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesAccessPointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesAccessPoint.S3FilesAccessPointTags">S3FilesAccessPointTags</a>

---



