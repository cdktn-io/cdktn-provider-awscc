# `s3FilesFileSystem` Submodule <a name="`s3FilesFileSystem` Submodule" id="@cdktn/provider-awscc.s3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesFileSystem <a name="S3FilesFileSystem" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system awscc_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  role_arn: str,
  accept_bucket_warning: bool | IResolvable = None,
  client_token: str = None,
  kms_key_id: str = None,
  prefix: str = None,
  synchronization_configuration: S3FilesFileSystemSynchronizationConfiguration = None,
  tags: IResolvable | typing.List[S3FilesFileSystemTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.acceptBucketWarning">accept_bucket_warning</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.synchronizationConfiguration">synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}.

---

##### `accept_bucket_warning`<sup>Optional</sup> <a name="accept_bucket_warning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.acceptBucketWarning"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `synchronization_configuration`<sup>Optional</sup> <a name="synchronization_configuration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.synchronizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration">put_synchronization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning">reset_accept_bucket_warning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration">reset_synchronization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_synchronization_configuration` <a name="put_synchronization_configuration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration"></a>

```python
def put_synchronization_configuration(
  expiration_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules] = None,
  import_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules] = None
) -> None
```

###### `expiration_data_rules`<sup>Optional</sup> <a name="expiration_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration.parameter.expirationDataRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}.

---

###### `import_data_rules`<sup>Optional</sup> <a name="import_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration.parameter.importDataRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3FilesFileSystemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]

---

##### `reset_accept_bucket_warning` <a name="reset_accept_bucket_warning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning"></a>

```python
def reset_accept_bucket_warning() -> None
```

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_synchronization_configuration` <a name="reset_synchronization_configuration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration"></a>

```python
def reset_synchronization_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3FilesFileSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn">file_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration">synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput">accept_bucket_warning_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput">synchronization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning">accept_bucket_warning</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `file_system_arn`<sup>Required</sup> <a name="file_system_arn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn"></a>

```python
file_system_arn: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `synchronization_configuration`<sup>Required</sup> <a name="synchronization_configuration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration"></a>

```python
synchronization_configuration: S3FilesFileSystemSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags"></a>

```python
tags: S3FilesFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a>

---

##### `accept_bucket_warning_input`<sup>Optional</sup> <a name="accept_bucket_warning_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput"></a>

```python
accept_bucket_warning_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `synchronization_configuration_input`<sup>Optional</sup> <a name="synchronization_configuration_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput"></a>

```python
synchronization_configuration_input: IResolvable | S3FilesFileSystemSynchronizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3FilesFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]

---

##### `accept_bucket_warning`<sup>Required</sup> <a name="accept_bucket_warning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning"></a>

```python
accept_bucket_warning: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesFileSystemConfig <a name="S3FilesFileSystemConfig" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  role_arn: str,
  accept_bucket_warning: bool | IResolvable = None,
  client_token: str = None,
  kms_key_id: str = None,
  prefix: str = None,
  synchronization_configuration: S3FilesFileSystemSynchronizationConfiguration = None,
  tags: IResolvable | typing.List[S3FilesFileSystemTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning">accept_bucket_warning</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration">synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}.

---

##### `accept_bucket_warning`<sup>Optional</sup> <a name="accept_bucket_warning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning"></a>

```python
accept_bucket_warning: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `synchronization_configuration`<sup>Optional</sup> <a name="synchronization_configuration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration"></a>

```python
synchronization_configuration: S3FilesFileSystemSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3FilesFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}.

---

### S3FilesFileSystemSynchronizationConfiguration <a name="S3FilesFileSystemSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration(
  expiration_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules] = None,
  import_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules">expiration_data_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules">import_data_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}. |

---

##### `expiration_data_rules`<sup>Optional</sup> <a name="expiration_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules"></a>

```python
expiration_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}.

---

##### `import_data_rules`<sup>Optional</sup> <a name="import_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules"></a>

```python
import_data_rules: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}.

---

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRules <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules(
  days_after_last_access: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess">days_after_last_access</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}. |

---

##### `days_after_last_access`<sup>Optional</sup> <a name="days_after_last_access" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess"></a>

```python
days_after_last_access: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}.

---

### S3FilesFileSystemSynchronizationConfigurationImportDataRules <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules(
  prefix: str = None,
  size_less_than: typing.Union[int, float] = None,
  trigger: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan">size_less_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger">trigger</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `size_less_than`<sup>Optional</sup> <a name="size_less_than" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan"></a>

```python
size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}.

---

### S3FilesFileSystemTags <a name="S3FilesFileSystemTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]

---


### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess">reset_days_after_last_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_after_last_access` <a name="reset_days_after_last_access" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess"></a>

```python
def reset_days_after_last_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput">days_after_last_access_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess">days_after_last_access</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_last_access_input`<sup>Optional</sup> <a name="days_after_last_access_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput"></a>

```python
days_after_last_access_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_after_last_access`<sup>Required</sup> <a name="days_after_last_access" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess"></a>

```python
days_after_last_access: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesFileSystemSynchronizationConfigurationExpirationDataRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan">reset_size_less_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_size_less_than` <a name="reset_size_less_than" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan"></a>

```python
def reset_size_less_than() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput">size_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput">trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan">size_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `size_less_than_input`<sup>Optional</sup> <a name="size_less_than_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput"></a>

```python
size_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput"></a>

```python
trigger_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `size_less_than`<sup>Required</sup> <a name="size_less_than" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan"></a>

```python
size_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesFileSystemSynchronizationConfigurationImportDataRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules">put_expiration_data_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules">put_import_data_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules">reset_expiration_data_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules">reset_import_data_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration_data_rules` <a name="put_expiration_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules"></a>

```python
def put_expiration_data_rules(
  value: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]

---

##### `put_import_data_rules` <a name="put_import_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules"></a>

```python
def put_import_data_rules(
  value: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]

---

##### `reset_expiration_data_rules` <a name="reset_expiration_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules"></a>

```python
def reset_expiration_data_rules() -> None
```

##### `reset_import_data_rules` <a name="reset_import_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules"></a>

```python
def reset_import_data_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules">expiration_data_rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules">import_data_rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput">expiration_data_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput">import_data_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_data_rules`<sup>Required</sup> <a name="expiration_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules"></a>

```python
expiration_data_rules: S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a>

---

##### `import_data_rules`<sup>Required</sup> <a name="import_data_rules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules"></a>

```python
import_data_rules: S3FilesFileSystemSynchronizationConfigurationImportDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a>

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_data_rules_input`<sup>Optional</sup> <a name="expiration_data_rules_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput"></a>

```python
expiration_data_rules_input: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationExpirationDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>]

---

##### `import_data_rules_input`<sup>Optional</sup> <a name="import_data_rules_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput"></a>

```python
import_data_rules_input: IResolvable | typing.List[S3FilesFileSystemSynchronizationConfigurationImportDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesFileSystemSynchronizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---


### S3FilesFileSystemTagsList <a name="S3FilesFileSystemTagsList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3FilesFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3FilesFileSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>]

---


### S3FilesFileSystemTagsOutputReference <a name="S3FilesFileSystemTagsOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_files_file_system

s3FilesFileSystem.S3FilesFileSystemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesFileSystemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>

---



